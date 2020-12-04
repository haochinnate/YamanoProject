# Dotnet code hotkey 

- 打開 terminal: Ctrl + Shift + `
- Show all commands: Ctrl + Shift + P
- Go to file: Ctrl + P

# Section 1: Introduction

1. 去 [.net 官網](dotnet.microsoft.com) 下載 SDK, 目前用 3.1.10
2. 去 [node js 官網](https://nodejs.org/en/) 下載 javascript engine
    - nvm: node version manager, [相關參考](https://joachim8675309.medium.com/installing-node-js-with-nvm-4dc469c977d9)
    - "node -v" 指令可以檢查目前安裝的版本 
3. 下載 [Visual Studio Code](https://code.visualstudio.com/) 當IDE
4. 下載 [Postman](https://www.postman.com/) 來測試API


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
* 打開自動儲存: File/Auto Save
* 在 Preference\Settings 搜尋 exclude, Add pattern
  * **/bin
  * **/obj 
* 在 Preference\Settings 搜尋 folder, 關閉 Compact Folder

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
  "ConnectionStrings" : {
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

- 執行完後, 會產生 *.db 檔案

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

- 到 [git官網](https://git-scm.com/), 下載並安裝

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

# Section 3: Building a walking skeleton Part Two - Angular

1. Using the Angular CLI
2. How to create a new Angular app
3. The Angular project files
4. The Angular bootstrap process
5. Using the Angular HTTP Client Service
6. Running an Angular app over HTTPS
7. How to add packages using npm

## Section 20. Creating the Angular application

- [Angular CLI 官網](https://cli.angular.io/)
  - 需要先安裝 node js
  - ng 指令是安裝完後才有的

```cmd
node --version // 先檢查 node js版本
npm --version 

npm install -g @angular/cli // install angular CLI

// 切到 project 的 root folder
ng new my-dream-app // create new angular application
// (can not use '.')

// 會問要不要 routing, 要用CSS

cd my-dream-app
ng serve // run the application
```

## Section 21. Running the angular project and reviewing the bootstrap of the app

```cmd
cd client
ng serve

// http://localhost:4200
```

- index.html 中 有 <app-root> component 來自於 app.component.ts

```typescript
// this is decorator, giving a normal class some extra powers
// 讓這個 class (AppComponent) 可以當作 component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

- 刪除掉 app.component.html 內的所有內容, 自己新增內容

```html
<h1>{{title}}</h1>
```

- 用 {{}} get data from our component into our template

- 在 app.module.ts 中, 有 @NgModule decorator 設定是 angular module
  - declarations: 宣告那些在我們的application 中, 可以使用哪些 components
  - imports: 要使用哪些其他 modules
  - providers: 
  - bootstrap: the set of components that are bootstrapped then this module is bootrapped, 這些 component 會自動 call entryComponents

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

- 在 main.ts 中, 會bootstrap AppModule

```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

## Section 22. Adding VS Code extensions to work with Angular

1. Angular Language Service (by Angular)
2. Angular Snippets (by John Papa)
3. Bracket Pair Colorizer 2 (by CoenraadS)

- other extensions for Angular projects
  - Angular Files
  - Auto Rename Tag
  - Debugger for Chrome
  - Material Icon Theme
  - Prettier
  - TSLint
  - Angular2-switcher

## Section 23. Making HTTP requests in Angular

- 在 app.module.ts 中, import HttpClientModule

- 為了要用 life cycle event, AppComponent class 要 implement OnInit

- a life cycle hook, that is called after Angular has initialized all data bound properties, OnInit 會在 contructor 之後

- 要呼叫 subscribe 才會取得 data

## Section 24. Adding CORS support in the API

## Section 25. Displaying the fetched users in the browser

## Section 26. Adding bootstrap and font-awesome

## Section 27. Using HTTPS in angular - MAC

## Section 28. Using HTTPS in angular - WINDOWS

## Angular 


> Alt + O 從 value.component.ts 移到 value.component.html
  Alt + I 移到 value.component.css
  Alt + U 移到 value.component.ts
> Go to file: Ctrl + P (again)
> -SPA and .API 兩個都要執行

> BootStrap
  cd testdotnetapp-spa
  npm install bootstrap font-awesome


# Section 3: Security

Hashing a password, password -> SHA512 -> #$@#$#@ (not secure)
Hashing and Salting a password, password -> Hash+Salt -> #$#$#!@#!@
 
model and datacontext changed  

```powershell
dotnet ef migrations add AddedUserEntity # create new migration
  # go to migrations folder to see create result 
dotnet ef database update // update the migrations
```

*  debug 要先產生 launch.json, 按debug後 選擇 TestDotnetApp.API.exe

*  http://localhost:5000/api/auth/register Postman中, Body 選擇 raw & JSON 
  輸入參數
  {
	"username": "",
	"password": ""
  }

  public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
  沒有用 [ApiController] 的話 要用 if(!ModelState.IsValid) return BadRequest(ModelState) 處理
  並參數搭配 [FromBody] attribute: 
  
*  Token Authentication 
  JSON Web Tokens (JWTs) 
  self-contained and can contain: credentials, claims, other information
  不用再去data store 驗證一次user, 直接用token驗證 看是否能用 api

* 安裝 Microsoft.IdentityModel.Tokens 5.6.0
       System.IdentityModel.Tokens.Jwt 5.6.0

* injection IConfiguration 
  使用 _config.GetSection("AppSettings:Token").Value
  要在 appsettings.json 新增 "AppSettings" :{"Token": "super secret key"}

* JWT.io 可以觀看 tokens decoded的內容

* 安裝 Microsoft.AspNetCore.Authentication.JwtBearer 3.0.0
* Authentication Middleware, 在Startup.cs裡面 要設定一些東西
  還有controller 要加 attribute

* appsettings.json 不要上傳到github比較好
  git rm appsettings.json --cached

* on production: using environment variables
  或是使用 dotnet user-secrets (only for development?)
  設定語法: dotnet user-secrets set "AppSettings:Tokens" "super secret key"
  觀看語法: dotnet user-secrets list


# Section 4: Client side login and register

* 在 app.module.ts 中 import FormsModule
  > import {FormsModule} from '@angular/forms';

* template form:
<form #loginForm="ngForm" class="...">
input 項目裡面 則用 [(ngModel)]="model.username" 來binding
(ngSubmit)="login()" 指定 event 跟要執行的 function 

* [] 是單向binding, 改 view model 會更新view的值 ? 
  [()] 是雙向binding?

* <pre> 可以放一些不合法的值時候的樣式

* testdotnetapp.api 執行 dotnet watch run 

* testdotnetapp-spa 執行 ng serve

# Section 5: Error Handling

* different type of error
  1. login method, code: 500
  2. register method, empty username/password, code: 400
    * error 是有格式的
  3. register method, username already exist, code: 400
    * error 只是字串
  4. 

* error.interceptor.ts 也需要是 injectable的

# Section 6: Adding 3rd part components to our app

## 安裝 [AlertifyJS](https://alertifyjs.com/)

```powershell
cd -spa
npm install alertifyjs
# npm install @types/alertifyjs
```
* create an Angular service wrapper around the methods of AlertifyJS provider, so we can inject this service to create our own componets

* 如果在 alertify.service.ts 裡面 import 有問題的話, 有去做 建立 'src/typings.d.ts' 檔, 並更新 'tsconfig.json' 加入 typeRoots

## Agular2-JWT

* help to manage JWT: [Angular2-JWT GitHub](https://github.com/auth0/angular2-jwt)

```powershell
cd -spa

# installation with npm
npm install @auth0/angular-jwt
```

範例程式 Usage: Standalone
```ts
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

const decodedToken = helper.decodeToken(myRawToken);
const expirationDate = helper.getTokenExpirationDate(myRawToken);
const isExpired = helper.isTokenExpired(myRawToken);
```

## ngx-bootstrap

* ngx bootstrap by Valor Software, to improve Dropdown
```powershell
cd -spa

# installation with npm
npm install ngx-bootstrap --save
```

## bootswatch

```powershell
cd -spa

# installation with npm, to use free themes
npm install bootswatch
```

# Section 7: Routing in Angular 

* Traditional websites vs. Single Page Application 

http://localhost/index.html 
http://localhost/foo.html

http://localhost
http://localhost/foo

* in order to achieve this, we need to tell our application about how to find the different pars of our application

* member-list -> car-list

* 在 componet.html 裡面 輸入 a-routerlink 快速填寫

* guard, 產生 auth.guard.ts 檔案
```powershell
cd -spa

cd src/app/_guards/

ng g guard auth --skipTests
```

# Section 8: Extending the API

* 另外建一個 CarModel class, 原本是在User內做擴充

* DataContext class 加入兩個新的 DbSet, CarModels 和 Photos

```powershell
dotnet ef migrations add NewCarModelClass
```

```powershell
dotnet ef --help
dotnet ef migrations -h
dotnet ef migraitons list
```

* 打開 DB Browser, 有個table叫做 _EFMigrationsHistory, 可以知道有哪些migration已經影響db了

```powershell
# 因為 先前建立的 migrations 中
# Photo的 onDelete: ReferentialAction.Restrict 我們不想要
dotnet ef migraitons remove # 移除最後一個migration

# recover
dotnet ef migrations add NewCarModelClass
dotnet ef database update # apply migration

# 如果這時候執行 migration remove 會跳出 error, 因為已經apply到db
dotnet ef migrations remove 

# 所以要go back early migrations
dotnet ef database update AddedUserEntity # update 前一個 migrations的名稱, 但是會失敗, 因為有一些 limitations, 要去看網站, 有些沒支援

# 正確方式: drop/remove last migrations, recreate by update
dotnet ef database drop # 會清空...
dotnet ef migrations remove 
dotnet ef database update # recreate database

# 那要如何保存資料?

```

* 修改 CarModel(User) 跟 Photo 的 relationship 再建立一次 migrations.
在Photo中 加入 CarModel 和 CarModelId properties, 當User砍掉的時候, 相對應的Photo 也會砍掉 Cascade(變成 onDelete: ReferentialAction.Cascade)

* [json generator](json_generator_carmodel.txt) and [seeding data example](carmodelseeding.json)

* 課程建立 \Data\IDatingRepository 和 DatingRepository (改叫做IMatchingRepository, MatchingRepository)

* 要安裝 package Microsoft.AspNetCore.Mvc.NewtonsoftJson

* 課程建立 \Controllers\UsersController (改叫做CarModelsController)

* 在postman試API: GET http://localhost:5000/api/carmodels, 會有 JsonSerializationExcaption 因為 CarModel -> Photo -> CarModel, self reference loop, 用以下方式解決

```csharp
// 原本是這樣
services.AddControllers().AddNewtonsoftJson(); 

// 改成這樣
services.AddControllers().AddNewtonsoftJson( opt => {
    opt.SerializerSettings.ReferenceLoopHandling = 
    Newtonsoft.Json.ReferenceLoopHandling.Ignore;
}); 
```

## Section 77. Shaping the data to return with DTOs

* 建立Dto類別: UserForListDto(CarModel), UserForDetailedDto(CarModel), 避免傳入太多資料, 或傳入不需要的資料

## Section 78. Using AutoMapper Part 1

* ctrl+shift+p, Add Package 安裝 AutoMapper.Extension.Microsoft.DependencyInjection 7.0.0

* tell service container about automapper, 在 Startup.cs 的 ConfigureServices function 中加入

```csharp
services.AddAutoMapper(typeof(MatchingRepository).Assembly);
```

* 修改 CarModelsController 中 回傳的物件, 變成 Dto class的物件

* 還要告訴mapper 要如何對應 Dto 類別 跟 Model 類別, 建立一個 Helpers\AutoMapperProfiles 類別

## Section 79. Using AutoMapper Part 2

* mapper 裡面可以再設定各 member 要如何對應(轉換)
```csharp
CreateMap<CarModel, CarModelForListDto>()
    .ForMember(dest => dest.PhotoUrl, opt => 
      opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
```
    
# Section 9: Building a great looking User Interface

## Section 82. Introduction to Interfaces in Typescript

```typescript
// OK
let name = "daffy"
name = 10

// OK 
let name: any = "daffy"
name = 10

// compile failed
let name: string = "daffy"
name = 10

interface Duck{
  name: string
  hasWings: boolean
}

// both properties are needed 
let daffy:Duck
daffy = {
  name: 'Daffy'
  hasWings: true
}

// 如果要property 是 optional, 那就要在宣告加 '?' 符號
// 例如 hasWings?: boolean 
```

* An interface is only used by TypeScript at __compile itme__, and is then removed. Interfaces 不會出現在最後的 JavaScript 輸出。

* Interfaces 優點:
  * Compile time checking
  * Intellisense
  * Auto Completion

## Section 83. Adding Interfaces to our Typescript code

* optional 的 property要擺在 必要的property後面

## Section 84. Creating another Angular service

* 再建一個service 用來取得 carmodel (user)

* environment.ts 檔案 設定 base url, 之前 AuthService 是在 class 裡面自己設定

```typescript
// carmodel.service.ts 用下列方式來設定 baseurl
baseUrl = environment.apiurl;
```

* production的時候可以用另外一個 environment.prod.ts 來設定 url

* 在 carmodel.service 內 建立一個 httpOption 裡面包含 token 用來傳入 get function 

## Section 85. Retrieving the Members into the Member List Component 

* MemberListComponent 即是 CarListComponent

* 在 component 中使用 service 來取得資料, 並在 html 中列出來

## Section 86. Creating Member Cards to display on our Member list page

* 建立資料夾 members (即carmodels), 把 car-list componet 放進去, 然後要refactor 引入路徑

* 建立 CarCardComponent 也放在 carmodels 資料夾中

* 用 bootstrap 的 [card](https://getbootstrap.com/docs/4.4/components/card/) component

* 在 car-list component 中 "[carmodel]" 當成 input property

## Section 87. Giving our Members some style with CSS

* car-card.component.css 中 加入針對 image的動畫效果

## Section 88. Adding animated buttons to the member cards

* ul.list-inline.member-icons.animate.text-center
* unorder list, inline list, 按鈕會出現在每行水平
* member-icons: class for ability to style 
* animate: class for apply animation styles to button
* text-center: buttons are centrally aligned inside each member card

## Section 89. Using Auth0 jwtModule to send up jwt tokens automatically

* https://github.com/auth0/angular2-jwt, 看 Usage: Injection 章節

* This library provides an HttpInterceptor which automatically attaches a JSON Web Token to HttpClient requests.

* 不只有 login, 幾乎所有的http request 都應該要有 jwt token

* 在 app.module.ts 中加入JwtModule 控制白名單跟黑名單

## Section 90. Creating the Member Detailed View component class

* 建立 car-detail component 

* 在 route.ts 中 增加 網址路徑 規則: { path: 'cars/:id', component: CarDetailComponent}

* 在 car-card component 中, 要設定button 連去 car-detail component: [routerLink]="['/car/', carmodel.id]"

## Section 91. Designing the Member detailed view template - left hand side

* put more componet to car-detail component 

## Section 92. Adding a tabbed panel for the right hand side of the Member detailed page

* 用 ngx-bootstrap 的 TabModule, 在 app.module.ts 中 加入 imports

* import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';

## Section 93. Using Route Resolver to retrieve data

* to avoid using safe navigation operator "?" in side our member

* 新建立 _resolvers 資料夾 跟 car-detail.resolver.ts 檔案

* 找不到 carmodel(user) 的話, 導回 /cars (/members)

* 在 app.module.ts 中的 providers 中, 加入 car-detail resolver
          
* route.ts 檔案中也要加  { path: 'cars/:id', component: CarDetailComponent, __resolve: {carmodel: CarDetailResolver}}__

* car-detail component ts 檔中, 變成不是呼叫 this.loadCarmodel() 來取得物件. 變成用 this.carmodel = data['carmodel'] 來取得, 其中 'carmodel' 這個字串是在 route.ts 中 上一項定義的

* 在 html 檔案中, 就可以把 "?" operator 拿掉

* 在建立另外一個 car-list.resolver.ts

* 找不到carmodel 還是沒導回@@

## Section 94. Adding a photo gallery to our application

* 用 [ngx-gallery](https://www.npmjs.com/package/ngx-gallery), npm install ngx-gallery --save

* npm audit fix

* 只用後會有問題, 還要另外在 app.module.ts 中 加CustomHammerConfig, 這是別人提供的解法

# Section 10: Updating Resources

## Section 96. Introduction

* nothing 

## Section 97. Creating a Member Edit Component

* 建一個新的 car-edit component (member-edit component), 在 app.module.ts declarations 要加入

* routes.ts 中, 原本課程是 {path: 'member/edit', component: MemberEditComponent}, 因為只能編輯自己的資料

* 可能改成 member/edit/id 這邊開始會差異比較多

* { path: 'cars/edit/:id', component: CarEditComponent},

* 課程中要再用一個resolver 來取得目前登入的 user, 才能決定要edit 哪個user的資料, 先照樣建立一個 car-edit resolver

* 在 routes.ts 裡面 { path: 'cars/edit/:id', component: CarEditComponent, resolve: {carmodel: CarEditResolver}},

## Section 98. Designing the template for the member profile edit page - part 1

## Section 99. Designing the Member Edit Template - part 2

* @ViewChild('editForm', {static: true}) editForm: NgForm;
* 用ViewChild 可以取得 html 中的元件 

## Section 100. Adding a CanDeactive route guard

* 增加 guard 避免使用者未儲存就跳離開網頁: PreventUnsavedChanges

* 但是用 這個還有問題是, 從瀏覽器 "關閉" 分頁無法得知, 所以還要另外加 listener

* HostListener: 就是瀏覽器, 接收event 來處理 關閉分頁的情況

## Section 101. Persisting the Member updates

* 建立一個新的 UpdateDto 類別

* 在 CarModelsController 增加一個 UpdateCarModel function 是 'HttpPut'

* 實務上還要注意 哪些是 要放在 UpdateDto裡面的, 如果 Dto 的 property有, 但是 postman 那邊沒有的話, 好像會給預設值

## Section 102. Finishing off the Member edit component

* 在 car-model service (user-service) 中, 建立 update 的 function 連結 API, updateCarModel

* car-edit component 中, 修改 updateCarmodel function

# Section 11: Adding Photo upload functionality to the application

## Section 105. Where should we store the photos?

* DB: least efficitent place to store objects such as photographs

* File System

* Cloud provider

* Use [Cloudinary](https://cloudinary.com/)

## Section 106. Using Cloudinary as a photo storage solution

* [Documentation-Upload Image](https://cloudinary.com/documentation/upload_images)
  * [.NET version](https://cloudinary.com/documentation/dotnet_image_and_video_upload#server_side_upload)

* [Documentation-Image transformations](https://cloudinary.com/documentation/image_transformations)

* HTTPS, 用 cloud_name, api_key, api_secret

* usr our API as a kind of proxy, user load the image to our API and then our API directly upload the photo into cloudinary

* 在 appsetting.json 中 加入 cloudinary的設定

* 建立一個新的類別 CloudinarySettings 來存

* 在 Startup 類別的 ConfigureServices function, 加入下列程式碼取得 appsetting.json 的設定 

```csharp
    services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));
```

* 在 Photo 類別中, 要增加 PublicId, 用來記 cloudinary那邊的資訊

* dotnet ef migrations add AddPublicId

* dotnet ef database update

* nuget 新增 package: CloudinaryDotNet

## Section 107. Creating the Photos Controller Part 1

* 新建 PhotosController, 並在裡面設定 Account 和 Cloudinary object 

* 建立 PhotoForCreationDto 類別, 用來建立 photo 的

* 實作 AddPhotoForCarmodel function

## Section 108. Creating the Photos Controller Part 2

* 在 PhotosController 中 新增一個 HttpGet function, 用來 GetPhoto

* 在 IMatchingRepository 介面跟實作類別中, 增加一個 method GetPhotos, 為了給 controller 使用

* 另外建一個 PhotoForReturnDto class, AutoMapperProfiles 裡面也要加對應

* 完成 AddPhotoForCarmodel function

## Section 109. Testing the Photo upload with Postman

Debug 流程

1. 增加中斷點
2. dotnet watch run 執行程式
3. 打開 Visual Code的 debugger, 選擇 .NET Core Attach
4. 然後按 play button 開始debug
5. 選擇 .api.dll? api.exe?
6. 打開 postman
7. 先執行 POST login 取得 new token
8. 建立新的 request, POST http://localhost:5000/api/carmodels/43/photos
9. Header 中 加入 Authorization: Bearer token
10. Body 中選擇 form-data, KEY 中將 Text 改為 File, 並輸入 "File", 
11. 然後 VALUE 選擇檔案
12. 按下 Send
13. 在 PhotosController function 參數前面 加上 修飾字, 讓他知道是從哪邊來
14. 再重新執行一次


## Section 110. Creating the Photo upload component in Angular

* 建立一個 photo-editor component

* app.module.ts 也要加入

* 編輯 html, 匯入 上一層的 photos property

## Section 111. Adding a 3rd Party File Uploader

* [ng2-file upload](https://github.com/valor-software/ng2-file-upload)

* 從 demo 複製程式碼

* 實作 PhotoEditorComponent

* 傳入 Carmodel 進 PhotoEditComponent 的 method, 為了 傳入 API 要有ID
  原本課程 是用 authService 取得登入者的ID

## Section 112. Configuring the 3rd Party File Uploader

* Startup class Configure function 裡面 增加 AllowCredentials(), 可以解決 FileUploader 的問題

* 但是 AllowCredentials 表示 允許 cookies to be sent with our requests, 但我們現在的 Authentication, 不是 cookie based authentication, 所以不需要另外增加 particular header

```csharp
    app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
    app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().AllowCredentials());

```

* 還有另一個方式是下面這樣

```csharp

    app.UseCors(x => x.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader());
```

* 最後解法: 在 PhotoEditorComponent 中, 告訴 FileUploader, 我們的 file 是 not going with credentials

* 設定 PhotoEditorComponent UI, 還有 css

* this.uploader.onSuccessItem 負責在上傳圖片完成後, 更新 component 中的 photos property

## Section 113. Adding the Set Main photo functionality to the API

* 顯示目前哪張 photo 是 main, 先在 PhotosController 中 增加API

* 只改一個 property, 這種 simple changes 比較不用 HttpPost?, 

* 課程中也是維持傳入 user的 Id, 自己改成 carmodel Id

* MatchingRepository 增加 GetMainPhotoForUser(GetMainPhotoForCarmodel) 的 function

* 用 postman 測試, 把 photo Id 42 設定為 main (Body 設定為 {})

[GET] http://localhost:5000/api/carmodels/44

[POST] http://localhost:5000/api/carmodels/44/photos/42/setmain

## Section 114. Adding the Set Main photo functionality to the SPA

* 在 CarmodelService.ts 下面增加 setMainPhoto function, 用來 call API

* 在 PhotoEditComponent 也增加 setMainPhoto function 

* () binding event 
* [] binding property
* [ngClass] use property to set the style of button(UI component)
```html
   <button type="button" class="btn btn-sm" 
        (click)="setMainPhoto(photo)"
        [ngClass]="photo.isMain ? 'btn-success active' : 'btn-secondary'"
        [disabled]="photo.isMain">Main</button>
```

## Section 115. Using the array filter method to provide instant feedback in the SPA

* 在 setMainPhoto function 中, 也要去設定 photo 的 isMain property 讓UI 即時更新

* 下一步 要更新 parent component 的內容, PhotoEditComponent 更新 CarEditComponent. 藉由 Output properties

## Section 116. Output properties revisited

* 增加 output property
```typescript

// 使用 angular core 的 event emitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Output() getCarmodelPhotoChange = new EventEmitter<string>();

```

* 在 html中, 用 () 因為是 output, updateMainPhoto 是在 CarEditComponent 新增的 function
```html
<app-photo-editor [photos]="carmodel.photos" 
  [carmodel]="carmodel"
  (getCarmodelPhotoChange)="updateMainPhoto($event)">
</app-photo-editor>
```

## Section 117. Adding the main photo to the Nav bar

* 所有的API 都需要 token 去access, 所以希望 token 可以保持越小越好

* 自己範例改成 User 沒有 photo, 所以可能要顯示其他的東西當作範例

* (API層 AuthController class)不直接放在 token 裡面, 而是放在回傳的 Ok ActionResult 中
  用 mapper 對應到我沒有建立的 UserForListDto, 放到 Ok statement 裡面
 
* (SPA層 auth.service.ts) 也要在login method 中, 存這個資訊到 local storage

* 在 AppComponent 中, 也加入從 local storage 中讀取回來並 assign

* 在 NavComponent 中, 登出後要清除資料 localStorage.removeItem外, authService 也要將物件設定為 null

## Section 118. Any to Any component communication in Angular

* 在 Edit component 中, 更新main photo 後, 不會馬上更新 NavComponent 顯示 main photo 的元件, 所以要用 any component cmuunication

* service are designed to provice methods or properties across to any component that inject the services

* 一個解決方案是在 AuthService 增加一個 property 存放 MainPhotoUrl

* 另一個解決方案: 使用 BehaviorSubject
  * is a type of subject(is a type of Observable)
  * can be subscribed to
  * Subscribers can receive updated results
  * A subject is an observer(so we can send values to it)
  * 需要初始值, 一定要回傳值
  * on subscription returns last value of subject
  * can use the getValue() method in non observable code

## Section 119. Using BehaviorSubject to add any to any communication to our app

* 在 Auth service 裡面建立一個 BehaviorSubject, 型態為string, 並預設為 assert 資料夾下的一張圖片

```typescript
  // in AuthService class
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();

   changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }

```

```typescript
  // in NavComponent class
  photoUrl: string;

  ngOnInit() {
    // currentPhotoUrl is observable, so can subscribe
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

```


## Section 120. Adding the Delete photo function to the API

* 在 API 的 PhotosController 增加 DeletePhoto function 

* 要去 Cloudinary 的網站看 delete photo 相關用法

* 有些photo 是傳到 cloudinary, 有些是自己JSON產生, 並不一定都有 public ID, 所以還要另外做判斷

[DELETE] http://localhost:5000/api/carmodels/44/photos/42

[DELETE] http://localhost:5000/api/carmodels/44/photos/43

## Section 121. Adding the Delete photo functionality to the SPA

* add function to Carmodel Service, to call API function 

* Photo Editor Component 加入 Delete function, call Carmodel Service 裡面的那個

* 在 Photo Editor component 的 html 中 binding click event, 並設定 main photo 的 trash button 是 disable

## Section 122. Summary

# Section 12: Reactive Forms in Angular 

## Section 123. Introduction

## Section 124. Introduction to Reactive Forms in Angular

* 在 RegisterComponent 中, import FormGroup, 並建立一個物件

* 之後可能需要新增 API 用來增加 carmodel

* 在 app.module.ts 中, imports 增加 ReactiveFormsModule

* RegisterComponent 中, 不再使用 template form, 改為使用 Reactive form

* ReactiveForms, html 中的一些屬性要改變

```html

formControlName="confirmPassword"
<!--此名稱 要跟 typescript 中 宣告的 一樣-->

<!--可以印出 FormGroup的資訊, 狀態-->
<p>Form value: {{registerForm.value | json}}</p>
<p>Form Status: {{registerForm.status | json}}</p>
```

```typescript
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
```

## Section 125. Validation in Reactive forms

* 在 ts file 中 宣告的 FormGroup, 每個 FormControl 可以增加 Validate function 

```typescript
    this.registerForm = new FormGroup({
      username: new FormControl('Hello', Validators.required),
      password: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', Validators.required)
    });
```

* 另外還可以建立 Custom Validator

## Section 126. Custom Validators in Reactive forms

* 自己建立 validator, 確認 兩格 password 的內容是否一樣

```typescript
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {mismatch: true};
  }
```

## Section 127. Providing Validation feedback to the user

* 根據 error 狀況不同, 顯示不同的提示字眼

```html
 [ngClass]="{'is-invalid': registerForm.get('username').errors 
    && registerForm.get('username').touched}"

    <div class="invalid-feedback" 
      *ngIf="registerForm.get('password').hasError('required') 
        && registerForm.get('password').touched">
        Password is required
    </div>

    <div class="invalid-feedback" 
      *ngIf="registerForm.get('password').hasError('minlength') 
        && registerForm.get('password').touched">
        Password must be at least 4 characters
    </div>

    <div class="invalid-feedback" 
      *ngIf="registerForm.get('password').hasError('maxlength') 
        && registerForm.get('password').touched">
        Password cannot exceed 8 characters
    </div>
```

```html
  <!--mismatch 這個關鍵字要跟 register.component.ts 中 設定的一樣  -->
   <input type="password" 
      [ngClass]="{'is-invalid': registerForm.get('confirmPassword').errors 
        && registerForm.get('confirmPassword').touched
        || registerForm.get('confirmPassword').touched
        && registerForm.hasError('mismatch')}">
```

## Section 128. Using the Reactive Forms FormBuilder Service

* 用 FormBuilder 來取代前一個章節 建立 FormGroup/FormControl 的內容

## Section 129. Expanding the Registration form

* 增加其他欄位來填其他資訊

## Section 130. Handling Dates in Forms

* [Can I use](https://caniuse.com/) 可以查詢 component 在各個 browser支援情況

* ngx bootstrap 的 [Datepicker](https://valor-software.com/ngx-bootstrap/#/datepicker)

```typescript
// 在 app.module.ts
import { BsDatePickerModule } from 'ngx-bootstrap'

// 還要 import BrowserAnimationModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

* 在 style.css 裡面還要import css 檔案

```css
@import "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"
```

* 在 register.component.html 中, type改為"text", 並增加 bsDatepicker

* 為了要改變顏色, 要另外增加 config 在 ts file中, 使用 partial class 可以讓所有的properties 變成 optional

```typescript
  bsConfig: Partial<BsDatepickerConfig>;

  this.bsConfig = {
    containerClass: 'theme-red'
  };

  // html 那邊用 [bsConfig]="bsConfig" binding
```

## Section 131. Updating the Register method in the API

* 課程是修改 AuthController 的 Register function, 但是我是修改 CarModelsController 的 Add function 

* 課程有再修改 UserForRegisterDto, 和 AutoMapper 中 registerDto -> User class

* 測試 API, 加入成功後回傳的 Headers 會有 Location: http://localhost:5000/api/CarModels/82
 
[POST] http://localhost:5000/api/carmodels/add

## Section 132. Completing the Registration implementation

* 課程是修改 register component 內的 register method, 改為修改在 CarAdd component 的 createNewCarmodel method

* CarAdd component 要 import carmodel service

```typescript
    // createNewCarmodel() in car-add.component.ts

    if (this.createCarmodelForm.valid) {
      // parse the form value to empty object
      // 利用 Object assign 去產生轉型?
      this.carmodel = Object.assign({}, this.createCarmodelForm.value);

      // 再呼叫 API 去 create
    }
```

## Section 133. Fixing the Photos issue for newly registered users

* 在 car-card component html 中, 使用 || 來用預設的 頭像image 

* upload 完 image 之後, 如果是第一張 自動幫他設定為 main, (in photo-editor.component.ts)

# Section 13: Action Filters in ASP.NET Core 

## Section 136. Using a TimeAgo pipe for dates in Angular

* 直接在 html 裡面改變顯示格式

```html
  <p>{{carmodel.dayOfPublish | date: 'mediumDate'}}</p>
```
* 搜尋 angular time ago pipe, 使用[這個](https://www.npmjs.com/package/time-ago-pipe)

* 如果使用 Angular 9 則是用 另一個 package: npm install ngx-timeago

* 然後在 app.module.ts 中 增加 TimeagoModule.forRoot()

```powershell

cd testdotnetapp-spa
npm install time-ago-pipe --save

```

```typescript

import {TimeAgoPipe} from 'time-ago-pipe';

// add to your declarations

@NgModule({
    imports: [... etc ...],
    declarations: [..., TimeAgoPipe, ... ]
})

```

## Section 137. Using Action Filters

* Carmodel class 沒有存 last activated property, 所有就註解掉相關的 code

* 在 API/Helpers 底下新增 LogUserActivity(LogCarModelActivity) class, 實作 IAsyncActionFilter

* add LogUserActivity as service in Startup class

* 在 Controller class 最上面加入 ServiceFilter, 每個 class 內的 function 被call的時候, 都會呼叫 log activity action filter

# Section 14. Paging, Sorting and Filtering

## Section 139. Paging in ASP.NET Core Web API

* paging helps avoid performance problems

* parameters are passed by query string

* http://localhost:5000/api/users?pageNumber=1&pageSize=5

* page size should by limited, and should always page results 

* Deferred(推遲,延遲) Execution
  * store query commands in variable
  * execution is deferred
  * IQueryable<T> creates an expression tree

## Section 140. Adding a PagedList class

* 在 Helper 資料夾裡面增加 PagedList 類別

* 只取部分的資料內容, 利用 IQueryable 的 Skip + Take

* 有用 singleton pattern

## Section 141. Setting up the paging helper classes

* 在 Helper 資料夾裡面增加一個 PaginationHeader 類別, 裡面的內容會放到 http response header

* 在 Extensions 類別中, 增加一個 AddPagination function, 

```csharp

public static void AddPagination(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalPages)
{
    var paginationHeader = new PaginationHeader(currentPage, itemsPerPage, totalItems, totalPages);
    var camelCaseFormatter = new JsonSerializerSettings();
    camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
  
    response.Headers.Add("Pagination", JsonConvert.SerializeObject(paginationHeader, camelCaseFormatter));
    response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
} 

```

* 在 Helper 資料夾裡面, 增加一個 CarModelParams 類別, 裡面存放 PageSize, PageNumber 資訊

## Section 142. Implementing pagination in the API

* 把 Repo GetCarModels function 從回傳 IEnumerable 改為 PagedList, 然後把 CarModelParams 當作參數傳入, 才可以指定 要取得的頁數/數量

* 實作 GetCarModels function 中, 改為只回傳部分的 objects, 用 async 的 create method 去產生

```csharp
public async Task<PagedList<CarModel>> GetCarModels(CarModelParams carmodelParams)
{
    // pagination 
    var carmodels = _context.CarModels.Include(p => p.Photos);

    return await PagedList<CarModel>.CreateAsync(carmodels, carmodelParams.PageNumber, carmodelParams.PageSize);
}
```

* 改完 Repository 後, 再去改 Controller 的 method, 這邊API 還要再增加 header 的資訊

```csharp
[HttpGet]
public async Task<IActionResult> GetCarModels([FromQuery]CarModelParams carModelParams)
{
    var carModels = await _repo.GetCarModels(carModelParams);

    // return object of Dto class instead of Model class
    var carModelsToReturn = _mapper.Map<IEnumerable<CarModelForListDto>>(carModels);
            
    Response.AddPagination(carModels.CurrentPage, carModels.PageSize, 
                carModels.TotalCount, carModels.TotalPages);

    return Ok(carModelsToReturn);
}
```

* 在 postman 中, 送出 [GET]http://localhost:5000/api/carmodels
* 或是 http://localhost:5000/api/carmodels?pageNumber=2


* 參數 CarModelParams 要增加 [FromQuery]

* response 的 header 中, 增加 
  * Pagination: {"CurrentPage":1,"ItemsPerPage":10,"TotalItems":46,"TotalPages":5}
  * Access-Control-Expose-Headers: Pagination
  * 這個是 大寫開頭, 但是 angular 那邊是小寫開頭 camel case
  * 在 Extensions class 的 AddPagination method 增加 format 來解決

## Section 143. Setting up pagination in the SPA

* 在 app/_models/ 底下建立新的 interface 叫 pagination, 同時裡面新增一個 PaginatedResult 類別

* 然後在 CarmodelService 中, 修改連結後端的部分, 因為 pagination的相關資訊放在 header 中, 所以要取出來並存起來, 之後才可以用

```typescript
  getCarModels(page?, itemsPerPage?): Observable<PaginatedResult<Carmodel []>> {
    const paginatedResult: PaginatedResult<Carmodel []> = new PaginatedResult<Carmodel []>();

    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<Carmodel []>(this.baseUrl + 'carmodels', { observe: 'response', params})
      .pipe(
        map(response => {
          paginatedResult.result = response.body;

          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }

```

* 其他使用到這個 service 的地方也要做對應的修改, 因為回傳類型已修改

## Section 144. Using nix-boostrap pagination module

* [ngx bootstrap-pagination](https://valor-software.com/ngx-bootstrap/#/pagination)

* app.module.ts 要 import PaginationModule

* CarList component 中, 建立對應的 property& method

```html
<!-- Custom links content -->
  <pagination [boundaryLinks]="true" 
              [totalItems]="pagination.totalItems"
              [itemsPerPage]="pagination.itemsPerPage"
              [(ngModel)]="pagination.currentPage"
              (pageChanged)="pageChanged($event)"
              previousText="&lsaquo;" nextText="&rsaquo;" firstText="&laquo;" lastText="&raquo;">
  </pagination>
```

## Section 145. Filtering in the API

* 在 CarModelParams 裡面再增加 想要篩選的項目/規格/條件

* 在 CarModelsController 裡面, 進來先將傳入的參數 設定到 params 物件當中, 因為後續call repository function 需要用到

* repository 的 function 根據 params 的條件, 用 LinQ 來篩選要回傳的資料

## Section 146. Adding additional filtering parameters to the API

* 在 params 再增加條件

* 在 repository 中, 篩選條件

* 在 postman 中測試 [GET]http://localhost:5000/api/carmodels?MinCarModelLength=4700&MaxCarModelwidth=1400

## Section 147. Adding filtering functionality to the SPA

* 在 CarList component中 增加 元件讓使用者可以填入 filtering 的條件

* 在 typescript 中, 增加 carmodelParams property 用來 binding 

* html 中, 用 ngForm, ngModel 來 binding

## Section 148. Sorting results in the API

* sorting by length, 原本課程是用 date 來排序

* CarModelParams class 增加一個 OrderBy 的 string property

* 在 MatchingRepository 的 GetCarModels function 中, 預設為用Length 來排序

* 然後再用一個 switch case 判斷是用什麼來排序

## Section 149. Adding the Sorting functionality to the SPA

* [ngx bootstrap-buttons](https://valor-software.com/ngx-bootstrap/#/buttons)

```typescript
// in app.module.ts, 加進 imports
import {ButtonsModule } from 'ngx-bootstrap';

```

```html
    <!--設定 btnRadio, access 時 pass進 component  -->
    <div class="col">
      <div class="btn-group float-right">
        <button type="button" name="orderBy" class="btn btn-primary"
          btnRadio="length" (click)="loadCarModels()" [(ngModel)]="carmodelParams.orderBy">
          Length
        </button>
        <button type="button" name="orderBy" class="btn btn-primary" 
          btnRadio="bootcapacity" (click)="loadCarModels()" [(ngModel)]="carmodelParams.orderBy">
          Boot Capacity
        </button>
      </div>
    </div>
```

# Section 15: Adding the 'Likes' functionality from start to finish

## Section 152. Configuring the EF relationship so users can like each other

* 原先 User-Photos 是 One-to-Many 的關係

* 現在要做 Likes 是 Users-Users Many-To-Many

* Relational Model:  User -> Send Like -> Like -> Receive Like -> User

* 在 model creating 的時候 override, 用 Fluent API

## Section 153. Creating the Like entity

* 建立一個 Like class, 課程中 Liker 和 Likee 都是 user

* 在 User 中, 增加 Likers. 在 CarModel 中, 增加 Likees

* entity framework, 到 DataContext class

* 還要 override DbContext 的 一個 method, 設定在 create table 時 要額外做什麼事情

* 告訴 entity framework 要用哪個作為 primary key, 這邊是把 LikerId + LikeeId 當作primary key
        
```csharp
public DbSet<Like> Likes { get; set; }

protected internal virtual void OnModelCreating(ModelBuilder modelBuilder);

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Like>()
        .HasKey(k => new { k.LikerId, k.LikeeId});
    
    modelBuilder.Entity<Like>()
        .HasOne(u => u.Likee)
        .WithMany(u => u.Likers)
        .HasForeignKey(u => u.LikeeId)
        .OnDelete(DeleteBehavior.Restrict);

    modelBuilder.Entity<Like>()
        .HasOne(u => u.Liker)
        .WithMany(u => u.Likees)
        .HasForeignKey(u => u.LikerId)
        .OnDelete(DeleteBehavior.Restrict);
}
```

* 接下來建立新的 migrations, 要關掉API才可以

```cmd
cd testdotnetapp.api
dotnet ef migrations add AddedLikeEntity

dotnet ef database update
```

## Section 154. Adding the Send Like functionality in the API

* course: allow users to send each other likes

* 在 MatchingRepository 類別中, 增加一個 GetLike function

* 並在 CarModelsController 類別中, 加入 LikeCarmodel function 當作API

* 送request [POST] http://localhost:5000/api/carmodels/3/like/70

* 一樣要在 Headers 設定 Authorization, 然後 Body 先用 empty object {}

* 送出後再檢查 database 資料

## Section 155. Retrieving the list of users liked and liked by user

* 利用 filter, 只顯示 user 喜歡的那些 user(carmodel)

* 所以要再 CarModelParams 增加屬性

```csharp
  public bool Likees { get; set; } = false;
  public bool Likers { get; set; } = false;
```

* [GET] http://localhost:5000/api/users?likees=true

* [GET] http://localhost:5000/api/users?likers=true

## Section 156. Adding the Send like functionality to the SPA

* 在 carmodel.service.ts 中, 增加 sendLike function

* 在 card component 中, 點愛心button 會有反應, 新增 send like function

## Section 157. Creating the Lists component

* 先增加並使用 ListsResolver

* 修改 ListComponet

```typescript
  // * 在 route.ts 中, 會去指定各個 component 要使用的 resolver ex: lists.resovler.ts
  // * 在 resolver 中, 會去 call WebAPI, 回傳物件 ex: 回傳型別是 Observable<PaginatedResult<Carmodel []>>
  // * PaginatedResult 有定義兩個 properties, result 和 pagination
  // * 所以底下才是 res.result 和 res.pagination
  // data['carmodels'] 的關鍵字 應是因為 route.ts中 定義 resolve: {carmodels: ListsResolver}
  // list.resolver.ts 的function中, observable.pipe function 會將型別轉成 Carmodel[]
  
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.carmodels = data['carmodels'].result;
      this.pagination = data['carmodels'].pagination;
    });

    this.likesParam = 'Likers';
  }

  loadCarModels() {
    this.carmodelService
      .getCarModels(this.pagination.currentPage, this.pagination.itemsPerPage, 
        null, this.likesParam)
      .subscribe((res: PaginatedResult<Carmodel[]>) => {
        this.carmodels = res.result;
        this.pagination = res.pagination;
      },
      error => {
        this.alertify.error(error);
      });
  }

```

* 因為設計比較不一樣, 所以沒有顯示 likes 的部分, 之後要修改 MatchingRepository 的 GetCarModels 裡面, 根據params 來篩選才可以

# Section 16: Add a private messaging system to the application

## Section 160. Creating the Message Entity and relationships

* 在 API\Models 資料夾下建立 Message 類別

* 原本 Message 中, Sender & Recipient 都是 User, 但是改成 User 和 CarModel

* User 和 CarModel 加入對應的 collection 

* DataContext 加入 DbSet 並設定 relationship

```csharp
// in DataContext class

public DbSet<Message> Messages { get; set; }
 
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    #region Message Relationship
    modelBuilder.Entity<Message>()
        .HasOne(u => u.Sender)
        .WithMany(m => m.MessagesSent)
        .OnDelete(DeleteBehavior.Restrict);
                
    modelBuilder.Entity<Message>()
        .HasOne(u => u.Recipient)
        .WithMany(m => m.MessagesReceived)
        .OnDelete(DeleteBehavior.Restrict);
    #endregion
}

```

* 增加新的 migrations 並 update DB

```cmd
dotnet ef migrations add MessageEntityAdded

dotnet ef database update

```

## Section 161. Adding the repository methods for the messages

* MatchingRepository 增加 Get Message 相關 function 

```csharp

// original
Task<Message> GetMessage(int id);
Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);

// my case
#region Message Related function
        
Task<Message> GetMessage(int messageId);
Task<PagedList<Message>> GetMessagesForUser();
Task<PagedList<Message>> GetMessagesForCarModel();
Task<IEnumerable<Message>> GetMessageThread(int userID, int recipientId);
Task<IEnumerable<Message>> GetMessageThread(int carmodelId);

#endregion
```

## Section 162. Adding the Create Message method in the API

* 新增一個 controller, MessagesController

```csharp

[Route("api/users/{userId}/[controller]")]

public async Task<IActionResult> GetMessage(int userId, int id);


```

* 新增一個 DTO class, MessageForCreationDto

- 實作 CreateMessage function in MessagesController

- [POST] http://localhsot:5000/api/users/3/messages

- Postman 那邊 Body 的部分要改成 raw-json 格式 

```json
{
  "recipientId": "43",
  "content": "felix send message to 43"
}
```

## Section 163. Adding the Repository methods for an Inbox, Outbox

- 建立一個新的 MessageParams 類別

- 實作 MatchingRepository 的 GetMessagesForUser/ForCarModel method

- mycase: User only has outbox, Carmodel only has inbox

## Section 164. Creating the Message Controller

- 在 MessagesController 中 GetMessageForUser method, 根據 user ID 取得 message

- [GET] http://localhost:5000/api/users/3/messages

- [GET] http://localhost:5000/api/users/3/messages/2

- 因為我的例子裡面, user 只有寄訊息, 所以Outbox 才有東西

- [GET] http://localhost:5000/api/users/3/messages?MessageContainer=Outbox

- 另外建一個 controller, 從 carmodel 的角度讀取 message

- [GET] http://localhost:5000/api/carmodels/43/carmodelmessages/?messagecontainer=Inbox

## Section 165. Adding the Message thread methods to the API

- 新 method GetMessageThread(int userId, int recipientId)

- 取得 3 對 43 的 conversation

- [GET] http://localhost:5000/api/users/3/messages/thread/43

- [GET] http://localhost:5000/api/carmodels/43/carmodelmessages/thread

## Section 166. Working with the message component in the SPA

- 在 SPA 建立 message interface, 用來放 API return 的 DTO

- Carmodel service 建立 call API 的 method

- 另外建立一個 MessageResolver, 也要加入到 app.module.ts & route.ts 中

- 實作 message.component.ts

## Section 167. Designing the Inbox and Outbox template

- 實作 messages.component.html

## Section 168. Getting the message thread in the component

- 在 carmodel.service.ts 中 新增getMessageThread function, 不過我的是 call
CarModelMessages Controller 裡的 function

- 建立一個新的 CarMessagesComponent, 並在 app.module.ts 中加入

- 實作 car-messages.component.ts 內容, call carmodelService.getMessageThreadForCarmodel 取得 messages

## Section 169. Designing the message tab chat system

- 設計 car-messages.component.html

## Section 170. Adding Query params to an Angular route

- 希望按下 message 後, 直接到該對象的 messages tab

- https://valor-software.com/ngx-bootstrap/#/tabs

- 在 html 中, 用 # 給component 名字, 這樣可以在 ts 裡面使用

```html
<tabset class="car-tabset" #carmodelTabs>
</tabset>
```

- 在 typescript 切換選的 tab

```typescript
@ViewChild('carmodelTabs', {static: true}) carmodelTabs: TabsetComponent;

selectTab(tabId: number) {
  this.carmodelTabs.tabs[tabId].active = true;
}
```

- 加入 queryParams 之後, 點選 message 後, 網址會變成 http://localhost:4200/cars/42?tab=3


```html
<!-- add ?tab=3 behind URL -->
[queryParams]="{tab: 3}"
```

- 在 car-detail component 中, 可以依據 params 來做事情

```typescript
    this.route.queryParams.subscribe(params => {
      const selectedTab = params['tab'];
      this.carmodelTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    });
```

## Section 171. Adding the send message functionality and a challenge

- 在 carmodel.service 中 增加 sendMessage function, 呼叫API

- 在 car-messages component 中, 實作 sendMessage function 和 相關 ng-form

## Section 172. Challenge solution - resolving the issue with the photos

- debugger;

- add function GetUser in repository class

## Section 173. Adding the Delete message functionality to the API

- 用 HttpPost, 而非 HttpDelete, 因為不想兩邊都 delete 掉

## Section 174. Deleting messages in the SPA

- add delete message method in carmodel service 

- call delete message method in message component

- 按下 delete button 後, 會導到收件人的 page, 因為有設定 [routerLink] 在 table row(tr), 增加 stopPropagation()

```typescript

<button class="btn btn-danger" (click)="$event.stopPropagation()" (click)="deleteMessage(message.id)">Delete</button>

```

## Section 175. Adding the Mark as Read functionality

- MessagesController 增加 function: MarkMessageAsRead

- http://localhsot:5000/api/users/3/messages/2/read

- 在 carmodel service call API, 然後在 component 中呼叫service function

# Section 17: Publishing

## Section 435. Introduction

- using "ng build"

- Running Angular on the Kestrel server

- AOT Production Build

- Adding additional DB providers

- publishing to IIS, Linux and Azure

## Section 436. Using NG Build and running the application from the Kestrel server

- create a production version of Angular application

- 在 SPA/angular.json file, 修改 build-options-outputPath, 然後在 terminal 輸入 "ng build"

```json
{
  "outputPath": "../TestDotNetApp.API/wwwroot"
}
```
- /API/wwwroot 資料夾不要加入 git 控制, 所以加進 .gitignore

- (以下 是 .net core 2.2 作法) 在 API/Statup.cs file,

```csharp

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
  // ...
  app.UseDefaultFiles();
  app.UseStaticFiles();
  // ...

  app.UseMvc(routes =>{
      routes.MapSpaFallbackRoute(
          name: "spa-fallback",
          defaults: new {controller = "Fallback", action = "Index"}  
      );
  });
}

```

- 在呼叫 dotnet run 重新啟動API

- 建立 FallbackController : Controller

```csharp

public class FallbackController : Controller
{
    public IActionResult Index()
    {
        return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
    }
}

```

## Section 437. .Net Core 3.0 - Serving Static Files from the API

- 以下是 .net core 3.0 作法

```csharp

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
  // ...
  app.UseDefaultFiles();
  app.UseStaticFiles();
  // ...

  app.UseEndpoints(endpoints =>
  {
    endpoints.MapControllers();
    endpoints.MapFallbackToController("Index", "Fallback");
  });
}

```

## Section 438. Angular CLI AOT Production build

- [Angular ng build](https://angular.io/cli/build)

- [Angular Deployment](https://angular.io/guide/deployment)

- AOT for Ahead-of-Time

- 修改 -SPA/src/environments.prod.ts 中的 apiUrl

- 增加參數 --prod

```cli
-SPA> ng build --prod
```

- 用 production build 會有 error, 是關於 Date 轉 string的錯誤, 直接修改 lastEditedDate 的型別

- 在 .API project 直接下 dotnet run 就可以執行 http://localhost:5000

## Section 439. Installing and setting up MySQL

- [MySQL](https://www.mysql.com/) 的 Downloads 的 MySQL Community

- 選 MySQL Community Server

- 安裝好後, 開啟 terminal

```cmd
> mysql -u root -p

mysql > show databases;

mysql > CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'password';

mysql > GRANT ALL PRIVILEGES ON *.* TO 'appuser'@'localhost' WITH GRANT OPTIONS;

mysql > FLUSH PRIVILEGES

mysql > quit

> mysql -u appuser -p

mysql > show databases;

```

## Section 440. Adding additional Database providers

- using Database Provider(from Entity Framework Core) to support MySQL and SQL server

- Install packages (nuget package manager)
  - Microsoft.EntityFrameworkCore.SqlServer 3.0.0
  - Pomelo.EntityFrameworkCore.MySql 3.0.0

- 修改 appsettings.Development.json, 使用 SQLite

- 修改 appsettings.json, 使用 SQL server or MySQL

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=xxxxx; Database=xxxx; Uid=xxxx; Pwd=xxxx",
    "DefaultConnection": "Server=xxxxx; Database=xxxx; User Id=xxxx; 
    Password=xxxx"
  },
}
```

- 並修改 Startup.cs 中的流程, 讓 development 和 production 使用不同 data base

```csharp

public void ConfigureDevelopmentServices(IServiceCollection services)
{
    services.AddDbContext<DataContext>(x => x.UseSqlite
        (Configuration.GetConnectionString("DefaultConnection")));

    ConfigureServices(services);
}

// UseMySql 會有錯誤, 要再另外安裝 MySql.Data.EntityFrameworkCore package
public void ConfigureProductionServices(IServiceCollection services)
{
    services.AddDbContext<DataContext>(x => x.UseMySql
        (Configuration.GetConnectionString("DefaultConnection")));

    ConfigureServices(services);
}

```

## Section 441. Dealing with migrations and multiple Database providers

- 在 migrations 的 cs 檔案中, 增加 給不同 database providers 的 additional annotations

```csharp
Id = table.Column<int>(nullable: false)
  .Annotation("SqlServer:ValueGenerationStrategy", 
    SqlServerValueGenerationStrategy.IdentityColumn)
  .Annotation("MySql:ValueGenerationStrategy", 
    MySqlValueGenerationStrategy.IdentityColumn)    
  .Annotation("Sqlite:Autoincrement", true),
```

- ConfigureDevelopmentServices, ConfigureProductionServices

- 如果要改 Development 或 Production mode 則是在 launchSettings.json 裡面
  就可以直接控制要呼叫 ConfigureDevelopmentServices 或 ConfigureProductionServices?

```json
{
  "environmentVariables": {
    "ASPNETCORE_ENVIRONMENT": "Production"
  }
}
```

## Section 442. .Net Core 3.0 MySQL provider bug workaround

- 使用 Pomelo.EntityFrameworkCore.MySql 3.0.0 可能會碰到的問題

- migration 時有的錯誤, column: 'Created' can't have a default value (DateTime)

- 把 Migrations 資料夾放到 跟 root 同一層, 然後重建一個給 MySQL 的 migration

```cmd
> export ASPNETCORE_ENVIRONMENT=Production
> dotnet ef migrations add MySqlInitial
> dotnet run
```

## Section 443. Adding Lazy loading for out related entites

- 安裝 Microsoft.EntityFrameworkCore.Proxies 3.0.0 package

- 在 ConfigureSevices 中, DB context 使用 UseLazyLoadingProxies

```csharp
services.AddDbContext<DataContext>(x => {
  x.UseLazyLoadingProxies();
  x.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
});
```

- 在 repository class 中, 有用到 .Include 的地方 都移除

- 然後 Model 中 ICollection 的 properties 都加入 virtual keyword

## Section 444. Publishing to IIS

- 會產生在 .API/bin/Release/netcoreapp3.0/ 底下
- .API/bin/Release/netcoreapp3.0/publish 底下也有一份?

```cmd
.API > dotnet publish --configuration Release
```

- 在 控制台/程式與功能/開啟或關閉Windows功能 可以開啟 Internet Information Services

- 再打開 IIS Manager 做設定

- MSDN參考: Publish an ASP.NET Core app to IIS 

## Section 445. Setting up a Linux server for publishing 

- 用 Digital Ocean, Ubuntu, LAMP(Linux, Apache, MySQL)

- $5/m, One-time password

- 設定 hostname

- 複製 IP address, 用 powershell 來進入, 剩下的看 cheet sheet

```powershell
ssh root@ip Address
```

## Section 446. Publishing the app to Linux

- 看 cheet sheet

## Section 447. HTTPS configuration for Apache 

- 在 Startup.cs 的 Configure function

- have a domain name that you own, that you can use to assign certificate

```cmd
apache2ctl -S  ;列出資訊
sudo a2enmod ssl ;開啟SSL?
cat /etc/apache2/sites-available/datingapp.conf

cat /etc/apache2/sites-available/datingapp-ssl.conf

sudo nano /etc/systemd/system/da-kestrel.service

```

```conf
// datingapp.conf 檔案內容
<VirtualHost *:80>
ServerName datingapp.trycatchlearn.com

RedirectMatch permanent ^(.*)$ https://datingapp.trycatchlearn.com$1
</VirtualHost>

// datingapp-ssl.conf 檔案內容
<VirtualHost *:443>
ServerName datingapp.trycatchlearn.com

Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

SSLEngine on
SSLCertificateFile /etc/ssl/trycatchlearn_com.crt
SSLCertificateKeyFile /etc/ssl/private/trycatchlearn.key
SSLCertificateChainFile /etc/ssl/trycatchlearn_com.ca-bundle

ProxyPreserveHost On
ProxyPass / http://127.0.0.1:5002/
ProxyPassReverse / http://127.0.0.1:5002/

ErrorLog /var/log/apache2/datingapp-error.log
CustomLog /var/log/apache2/datingapp-access.log common

</VirtualHost>
```

- generating the certificate signing request

- https://www.namecheap.com/support/knowledgebase/article.aspx/9446/14/generating-csr-on-apache--opensslmodsslnginx--heroku/

```cmd
openssl req -new -newkey rsa:2048 -nodes -keyout sitename.key -out sitename.csr

; 輸入後, 要填一些資料, 然後會產生 sitename.key 和 sitename.csr

```

## Section 448. Setting up Azure to publish our app 

## Section 449. Publishing our App to Azure

- Extensions 中, 可以安裝 "Azure App Service", 會另外安裝 "Azure Account"
