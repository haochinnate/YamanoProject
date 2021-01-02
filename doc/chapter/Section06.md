# Section 6: Routing in Angular

## Section 64. Creating some more components

```cmd
cd src\app

mkdir members
cd members

ng g c member-list  --skip-tests
ng g c member-detail --skip-tests

cd .. 
ng g c lists --skip-tests
ng g c messages --skip-tests

```

- 在 app-routing.module.ts 裡面 的 routes array 設定 routing 規則

```typescript
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'course/members', component: MemberListComponent},
  {path: 'course/members/:id', component: MemberDetailComponent},
  {path: 'course/lists', component: ListsComponent},
  {path: 'course/messages', component: MessagesComponent},
  // wildcard route, return back to home
  {path: '**', component: HomeComponent, pathMatch: 'full'}, 
];
```

- 在 AppComponent template 中, 內容換成 <router-outlet>

```html
<router-outlet></router-outlet>
```

## Section 65. Adding the nav links

- 在 NavComponent template 中, 將 href 修改成 routerLink 指定路徑

- 路徑記得 加上 / 開頭

- routerLinkActive 代表是該路徑的時候要 highlight 顯示

```html
<li><a class="dropdown-item" routerLink='/members' routerLinkActive='active'>Matches</a></li>
```

## Section 66. Routing in code

- 希望 logout 的時候, 回到 HomeComponent, login 的時候則是到 MemberListComponent

- inject router class 到 NavComponent 中

```typescript
import { Router } from '@angular/router';
private router: Router
this.router.navigateByUrl('/course/members')
```

## Section 67. Adding a toast service for notifications

- 切到 client 資料夾, 安裝 ngx-toastr

```cmd
npm install ngx-toastr
```

- 在 angular.json 設定一些 style

```json
{
  "styles": [ 
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
    "./node_modules/font-awesome/css/font-awesome.css",
    "./node_modules/ngx-toastr/toastr.css",
    "src/styles.css"
  ],
}
```

- 在 app.module.ts 內也要設定使用 toastr

```typescript
import { ToastrModule } from 'ngx-toastr';

imports: [
  ToastrModule.forRoot({
      positionClass: 'toast-buttom-right'
  })
]
```

- 在其他檔案內使用 toastr

```typescript
import { ToastrService } from 'ngx-toastr';

private toastr: ToastrService

this.toastr.error(error.error);

// 第一個 error 是 HttpErrorResponse
// 第二個 error 是 response 中的 資訊
```

## Section 68. Adding an Angular route guard

- 在 /client/src/app 底下建立資料夾 _guards

- 在 _guards 資料夾底下建立 auth.guard.ts

```cmd
cd src/app/_guards
ng g guard auth --skip-tests

CanActivate
```

- guard 會自動 subscribes to any observables

- 在 AuthGuard 的 canActivate method 中, 實作過濾的邏輯

- 在 AppRoutingModule 中, 加入設定哪些 path 要用 guard

```typescript
{path: 'course/members', component: MemberListComponent, canActivate: [AuthGuard]},
```

## Section 69. Adding a dummy route

- 改寫 AppRoutingModule 的 Routes 變數

```typescript
const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'course/members', component: MemberListComponent},
      {path: 'course/members/:id', component: MemberDetailComponent},
      {path: 'course/lists', component: ListsComponent},
      {path: 'course/messages', component: MessagesComponent},
    ]
  },
  // wildcard route, return back to home
  {path: '**', component: HomeComponent, pathMatch: 'full'}, 
];
```

- 因為有可能之後會增加其他的 link 讓, 沒認證的user也可以看, 增加一個 angular container/ ng-container, apply a conditional to something, 這個container 不會產生有效的 html 碼

- 所以可以用這個來包元件

```html
<ng-container *ngIf="accountService.currentUser$ | async" >
</ng-container>
```

## Section 70. Adding a new theme

- 使用 bootstrap theme, [Bootswatch](https://bootswatch.com/)

```cmd
cd client
npm install bootswatch
```

- 安裝好後, 到angular.json 去設定 styles, 這邊選擇 sandstone

```json
{
    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
        "./node_modules/bootswatch/dist/sandstone/bootstrap.css",
        "./node_modules/font-awesome/css/font-awesome.css",
        "./node_modules/ngx-toastr/toastr.css",
        "src/styles.css"
    ],
}
```
- 在html裡面 直接利用pipe 修改呈現的內容, ex: titlecase

```html
<a class="dropdown-toggle text-light" dropdownToggle>Welcome {{user.username | titlecase}}</a>
```

## Section 71. Tidying up the app module by using a shared module 

- 把 ngx-bootstrap module 相關的東西移到一起, 不要全部都擺在 AppModule 底下

- 切到 /src/app/ 目錄底下, 建立新資料夾 _modules, 建立 SharedModule

```cmd
cd src/app
mkdir _modules
cd modules
ng g m shared --flat
```

- 把 AppModule 的部分內容移到 SharedModule, 還要設定 exports

```typescript
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  exports: [
    BsDropdownModule,
    ToastrModule
  ]
})
export class SharedModule { }
```

- 然後在 AppModule 中 import SharedModule
