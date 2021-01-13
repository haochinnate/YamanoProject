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

## Section 88. Seeding data part one

## Section 89. Seeding data part two

## Section 90. The repository pattern

## Section 91. Creating a repository

## Section 92. Updating the users controller

## Section 93. Adding a DTO for Members

## Section 94. Adding AutoMapper

## Section 95. Using AutoMapper

## Section 96. Configuring AutoMapper

## Section 97. Using AutoMapper queryable extensions