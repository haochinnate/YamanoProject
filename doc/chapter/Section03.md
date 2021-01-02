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
  - declarations: 宣告那些在我們的 application 中, 可以使用哪些 components
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

- 在 main.ts 中, 會 bootstrap AppModule

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
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

- CORS is a security machanism, (Cross Origin Resource Sharing)

- Startup.cs 的 ConfigureService 加入支援

```csharp
services.AddCors();
```

- Configure function 也要加, 而且順序很重要

```csharp
app.UseRouting();

//app.UseCors();
app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

app.UseAuthorization();
```

## Section 25. Displaying the fetched users in the browser

- 在 html 裡面打 ngFor, 顯示目前的資料

```html
<ul>
  <li *ngFor="let manufacturer of carmanufacturers">
    {{manufacturer.id}}-{{manufacturer.name}}-{{manufacturer.chineseName}}
  </li>
</ul>
```

## Section 26. Adding bootstrap and font-awesome

- [bootstrap](https://getbootstrap.com/),

- jQuery 和 Angular 混用 有可能會產生 conflict?, 都會處理 DOM

- 安裝 [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/), 會自己安裝 boot-strap

```cmd
cd client
ng add ngx-bootstrap
```

- package.json, angular.json, app.module.ts 會更新

- 安裝 font-aweson

```cmd
cd client
npm install font-awesome
```

## Section 27. Using HTTPS in angular - MAC

## Section 28. Using HTTPS in angular - WINDOWS

- 在 \StudentAssets\generateTrustedSSL 中, 參照 Instructions.txt 步驟

- 安裝完憑證後, 在 \client\ 底下建立新的資料夾 ssl, 並將憑證+key 放入

- 告訴 Angular 要使用這個憑證, 在 Angular.json 檔案中

```json
{
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "sslKey": "./ssl/server.key",
      "sslCert": "./ssl/server.crt",
      "ssl": true,
      "browserTarget": "client:build"
    }
  }
}
```

- 重新執行 api & client, 可能要再執行一次 dotnet dev-certs https --trust // 安裝憑證

- https://localhost:4200
