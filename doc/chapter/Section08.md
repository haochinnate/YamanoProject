# Section 8: Extending the API

- Entity Framework Relationships
- Entity Framework Conventions
- Seeding Data into the Database
- The repository pattern
- Using AutoMapper

## Section 84. Extending the user entity

- 增加 User class 的 properties

## Section 85. Adding a DateTime extension to calculate age

- 建立 extensions 來計算 age, 在 \API\Extensions\ 資料夾下 建立 DateTimeExtensions

```csharp
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dateOfBirth)
        {
            var today = DateTime.Today;
            var age = today.Year - dateOfBirth.Year;
            if (dateOfBirth.Date > today.AddYears(-age))
            {
                age--;
            }
            return age;
        }
    }
```

## Section 86. Entity Framework relationships

- One User has many photos

- 切到 \api\ 做 migrations

```cmd
dotnet ef migrations add ExtendedUserEntity
```

- 加入 "Table" 這個 annotations

```csharp
[Table("Photos")]
public class Photo
{
}
```

- 會自動建立 Photos table, 並有 column: UserId, 因為有辨別出 relationship, 但是 UserId 是 nullable, 不希望這樣

- 而且預設是 刪除 User 時, 並不會刪除 Photo

```csharp
UserId = table.Column<int>(nullable: true)
onDelete: ReferentialAction.Restrict
```

- 所以先 remove migrations

```cmd
dotnet ef migrations remove
```

- 額外加 fully defining, Photo class 另外加 User 相關的 properties

```csharp
public User User { get; set; }
public int UserId { get; set; }
```

- 然後再建立一次 migrations

```cmd
dotnet ef migrations add ExtendedUserEntity
dotnet ef database update
```

## Section 87. Generating seed data

- generate some json data and then use to insert into the DB

- [JSON generator](https://www.json-generator.com/)

- 使用 \StudentAssets\jsongenerator.txt

## Section 88. Seeding data part one

- 在 \API\Data 資料夾下, 建立 Seed class

```csharp
public static async Task SeedUsers(DataContext context)
{
    if (await context.Users.AnyAsync())
    {
        return;
    } 
            
    var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
    var users = JsonSerializer.Deserialize<List<User>>(userData);
}
```

- 在 Program.cs Main 中呼叫 Seed class 的 function 

```csharp
public static async Task Main(string[] args)
{
    // CreateHostBuilder(args).Build().Run();
    var host = CreateHostBuilder(args).Build();

    using var scope = host.Services.CreateScope();
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<DataContext>();
        await context.Database.MigrateAsync();
        await Seed.SeedUsers(context);
    }
    catch (System.Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred during migration");
    }

    await host.RunAsync();
}
```

## Section 89. Seeding data part two

- 先 drop database, 再重新執行

```cmd
dotnet ef database drop
dotnet watch run
```

- 再用 postman 測試, postman 中可以增加 Tests, 驗證 API 的 response 有沒有 token, 有的話儲存在 postman 的 global 中, {{token}}

## Section 90. The repository pattern

- A Repository mediates between the domain and data mapping layers, acting like an in-memory domain object collection

- Controller 透過 Repository 來跟 DbContext 溝通, 而非直接使用 DbContext
    1. Encapsulates the logic
    2. Reduces duplicate query logic
    3. Promotes testability
    4. Decouples application from persistence framework

- Disadvantages:
    1. Abstraction of an abstraction
    2. Each root entity should have it's own repository which means more code
    3. Also need to implement the UnitOfWork pattern to control transactions

## Section 91. Creating a repository

- 在 \API\Interfaces 資料夾底下 建立 IUserRepository 介面

- 並新增一些 method

- 在 \API\Data 資料夾底下 建立 UserRepository 類別, 並實作 IUserRepository 的 method的 method

- 到 ApplicationServiceExtensions class, 設定 DI

```csharp
services.AddScoped<IUserRepository, UserRepository>();
services.AddScoped<ICarModelRepository, CarModelRepository>();
```

## Section 92. Updating the users controller

## Section 93. Adding a DTO for Members

## Section 94. Adding AutoMapper

## Section 95. Using AutoMapper

## Section 96. Configuring AutoMapper

## Section 97. Using AutoMapper queryable extensions