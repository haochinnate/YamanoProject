# Section 2: Building a Walking Skeleton Part One - API

## Section 6. Creating the .NET API project using the dotnet CLI

```cmd
dotnet --info // 得到目前安裝的版本資訊
dotnet -h
dotnet new -h // Solution file, ASP.NET Core Web API
dotnet new sln // 拿資料夾名稱來建立 solution file
dotnet new webapi -o API // 新增 api project 到 API 資料夾中

dotnet sln add API // 把 project 加到 solution 中

```

## Section 7. Setting up VS code to work with C#

### 安裝 Extensions

1. C# for Visual Studio Code (powered by OmniSharp)
2. C# Extensions
3. Material Icon Theme (Philipp Kief)

### 其他設定

- 打開自動儲存: File/Auto Save
- 在 Preference\Settings 搜尋 exclude, Add pattern
  - \*\*/bin
  - \*\*/obj
- 在 Preference\Settings 搜尋 folder, 關閉 Compact Folder

## Section 8. Getting to know the API project files

```cmd
cd API // 切到 API 的資料夾
dotnet run // 執行
Ctrl + C // 結束執行
dotnet dev-certs https --trust // 安裝憑證

dotnet watch run // file watcher, 看檔案有沒有更改過
```

- https://localhost:5001/weatherforecast 可以看到目前的結果

## Section 9. Creating out first Entity

- 新增 Entities 資料夾 (以前的 Models 資料夾), 新增 class + properties

## Section 10. Introduction to Entity Framework

- Is an **Object Relational Mapper (ORM)**

- translates code into SQL commands that update tables in the DB

- Features
  - Querying
  - Change Tracking
  - Saving
  - Concurrency
  - Transactions
  - Caching
  - Built-in conventions
  - Configurations
  - Migrations

## Section 11. Adding Entity Framwork to out project

1. 安裝 Extensions: NuGet Gallery (by pcislo)
2. command 選擇 **NuGet: Open NuGet Gallery**
3. 搜尋 Microsoft.EntityFrameworkCore.Sqlite 3.1.10 安裝在 API project

## Section 12. Adding a DbContext class

- 建立 Data 資料夾, 並在裡面加入 DataContext class

```csharp

    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<CarManufacturer> MyProperty { get; set; }
    }

```

- Startup 的 ConfigureService 加入 DbContext 設定

```csharp
public void ConfigureServices(IServiceCollection services)
{
  services.AddDbContext<DataContext>(options =>
  {
    options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
  });
  services.AddControllers();
}
```

## Section 13. Creating the Connection string

- configuration file: appsettings.json, appsettings.Development.json

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data source=yamano.db"
  }
}
```

- 到 nuget.org, 搜尋 [dotnet-ef](https://www.nuget.org/packages/dotnet-ef/)

- 複製指令, 然後安裝, global tool, 所以不用切路徑再安裝

```cmd
dotnet tool install --global dotnet-ef --version 3.1.10
dotnet tool update --global dotnet-ef --version 3.1.10
```

- 還要安裝 Microsoft.EntityFrameworkCore.Design 3.1.10 (打開 nuget gallery)

- 建立 migrations

```cmd
dotnet ef migrations -h
dotnet ef migrations add InitialCreate -o Data/Migrations
```

## Section 14. Creating the database using Entity Framework Code first migrations

- update the migrations

```cmd
dotnet ef database update
```

- 執行完後, 會產生 \*.db 檔案

- 可以在 Extensions 中搜尋 SQLite, 並安裝 SQLite(by alexcvzz)

- 先自己建立一些假資料

## Section 15. Adding a new API controller

- 建立一個新的 controller, 並設定兩個 "endpoint"

```csharp
    [ApiController]
    [Route("api/[controller]")]
    public class CarManufacturersController : ControllerBase
    {
        private readonly DataContext _context;
        public CarManufacturersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CarManufacturer>> GetCarManufacturers()
        {
            var manufacturers = _context.CarManufacturers.ToList();

            return manufacturers;
        }

        // url:port/api/carmanufacturers/3
        [HttpGet("{id}")]
        public ActionResult<CarManufacturer> GetCarManufacturer(int id)
        {
            var manufacturer = _context.CarManufacturers.Find(id);

            return manufacturer;
        }
    }
```

- 測試 https://localhost:5001/api/carmanufacturers/
- 測試 https://localhost:5001/api/carmanufacturers/1

## Section 16. Making our code Asynchronous

```csharp
[HttpGet]
 public async Task<ActionResult<IEnumerable<CarManufacturer>>> GetCarManufacturers()
 {
    var manufacturers = await _context.CarManufacturers.ToListAsync();

    return manufacturers;
 }

```

## Section 17. Saving our code into Source control

- 到 [git 官網](https://git-scm.com/), 下載並安裝

- 到 github 建立帳號

```cmd
git status // 查看目前資料夾的 git 狀態
git init
dotnet new gitignore // 產生 .gitignore 檔案
```

- Stage change -> Commit, 然後到 github 建立 repository

```cmd
git remote add origin https://github.com/users/repositoryName.git

// push
git push -u origin master
```
