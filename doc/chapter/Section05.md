# Section 5: Client side login and register

## Section 48. Creating a nav bar

- 用 angular CLI 來建立 component

```cmd
ng g -h
cd src/app
ng g c nav --skip-tests
```

- 會建立 nav.component.html, nav.component.ts, nav.component.css 在 /src/app/nav 底下, 並更新 app.module.ts

- 要在其他地方使用 nav component, 要用 <app-nav>

```typescript
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
```

## Section 49. Introduction to Angular template forms

- forms module 加入倒 app.module.ts

- 將 html 中的 <form> tag 設定成 angular form,

```html
<form #loginForm="ngForm" (ngSubmit)="login()"></form>
```

- 變成 ngForm 之後, 可以用 method 來 submit data, (ngSubmit)="login()"

- login method 則是在 nav.component.ts 中宣告

- 只要 form 裡面, 有 type 是 submit, 或是按 enter 的時候 ngSubmit 就會被觸發

- 給予 UI 元件名稱, 設定 name="..."

- twoway binding (快捷鍵: a-ngModel)

- [] 用來 receiving from our components
- () 用來 把資料給 components, template to components

```html
<input
  name="username"
  [(ngModel)]="model.username"
  class="form-control mr-sm-2"
  type="text"
  placeholder="Username"
/>
<input
  name="password"
  [(Model)]="model.password"
  class="form-control mr-sm-2"
  type="password"
  placeholder="Password"
/>
```

## Section 50. Introduction to Angular services

- 在 \client\src\app 底下建立資料夾 \_services

- cd 到 \_services 底下, 利用 angular CLI 建立 services

```cmd
ng g s account --skip-tests
// 會建立 _servcies\account.service.ts
```

```typescript
// Injectable decorator, 可以被 injected 到其他 components or services in our application
@Injectable({
  providedIn: 'root'
})

// 之前要放到 app.module.ts 的 providers array 中, 現在不用了 因為有 providedIn 'root' ?

// service inject 是 singleton, 直到 app 關閉才會沒有
```

```typescript
login(model: any) {
  return this.http.post(this.baseUrl + 'account/login', model);
}
```

## Section 51. Injection services into components

- inject AccountService 到 NavComponent

```typescript
constructor(private accountService: AccountService) { }

login() {
  // response 會是 UserDto, 在 AccountController 的 Login method
  this.accountService.login(this.model)
    .subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
  });

  console.log(this.model);
}

```

## Section 52. Using conditionals to show and remove content

- 以 loggedIn 這個 property 決定要不要顯示 component

```html
*ngIf="loggedIn" // 這個是完全沒有, 

// 如果要隱藏的話, 則是用
[hidden]
```

## Section 53. Using the angular bootstrap components - dropdown

- BsDropdownModule.forRoot() 的意思是 有 some services or components that it needs to initialize along with the roots

## Section 54. Introduction to observables

- New standard for managing async data included in ES7(ES2016)

- Observables are lazy collections of multiple values over time

- RxJS, want to transform that data before we pass it onto the subscriber

- 用 **pipe** method on to the request or onto the observable

- 在 pipe 裡面, 對傳回來的資料作處理

- 用 **map** 來 transform

```typescript
getMembers() {
  return this.http.get('api/users').pipe(
    map(members => {
      console.log(member.id);
      return member.id;
    })
  );
}
```

- subscribe
  1. what to do next with data (ex: assign to property)
  2. what to do if there is an error (200以外都是)
  3. what to do when complete

```typescript
getMembers() {
  this.service.getMembers().subscribe(members => {
    this.members = members
  }, error => {
    console.log(error);
  } () => {
    console.log('completed');
  });
}

```

- ToPromise(), do activate this request, 這邊不會用

```typescript
getMembers() {
  return this.http.get('api/users').toPromise();
}
```

- 用 angular function 來取得 observable: **Async Pipe**
- automatically subscribes/unsubscribes from the Observable

```html
<li *ngFor='let member of service.getMembers() | async'>
  {{member.username}}
</li>
```

## Section 55. Persisting the login

- 要用 map function, 要 import { map } from 'rxjs/operators' 

- 將取回來的 response 變成 JSON 存在 localStorage

```typescript
// account.service.ts 

login(model: any) {
  // the return value of this API is UserDto in backend
  return this.http.post(this.baseUrl + 'account/login', model)
    .pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
  );
}
```

- 建立 _models 資料夾, 並建立 user.ts, interface 是設定 type

```typescript
export interface User {
    username: string;
    token: string;
}
```

- 建立一個 observable 來儲存 user in, ReplaySubject is kind of buffer object, is going to store the value inside 

```typescript
private currentUserSource = new ReplaySubject<User>(1);
currentUser$ = this.currentUserSource.asObservable();
```

- 瀏覽器/Debug Tool/Application/Local Storage

- 程式流程說明
  1. AppComponent 藉由DI 可以使用 AccountService
  2. AppComponent method: setCurrentUser, 先嘗試從 localStorage 取得看看有沒有現有登入的 user, 並呼叫 AccountService 的 setCurrentUser method來設定, 如果沒有就是設定成 null
  3. NavComponent 在 ngOnInit 呼叫自己的 getCurrentUser method, 這個 method 會註冊 AccountService 的 currentUser observable property, 有更改時會loggedIn屬性
  4. NavComponent 中的 login, logout method 則是呼叫 AccountService 中對應的 method, 裡面會對 localStorage 儲存/刪除
  
## Section 56. Using the async pipe

- 直接在 NavComponent 中, 建立一個 currentUser observable property, assign 到 AccountService 的currentUser$, 就可以把 loggedIn 這個 boolean property 移除

- 在 html 的部分, 也做修改, 用 currentUser$ 判斷

```html
*ngIf="loggedIn"

*ngIf="currentUser$ | async"

*ngIf="!loggedIn"

*ngIf="(currentUser$ | async) === null"
```

- 再把 NavComponent 的 currentUser observable property 拿掉, 直接使用 AccountService 的, 但是 accountService 要設定為 public 

- 在 html 中變成用 accountService.currentUser$ 存取

- 因為有用 async pipe, 所以當 NavComponent 不見時, 會自動 unsubscribe

## Section 57. Adding a home page

- 建立 HomeComponent 在 app 資料夾底下

```cmd
cd .\client\src\app
ng g c home --skip-tests
```

## Section 58. Adding a register form

- 建立 RegisterComponent 在 app資料夾底下

```cmd
cd .\client\src\app
ng g c register --skip-tests
```

- 在 html ngForm 中, input 都要記得給 name="...", 才可以 track


## Section 59. Parent to child communication

- ex: 從 HomeComponent 傳到 RegisterComponent

- 用 input property, 在 child component 中, 宣告 property with input decorator

```typescript
@Input() userFromHomeComponent: any;

```

- 在 Parent component template 中, 使用 []指定 property

- users 是 HomeComponent 的 property, 傳下去到 RegisterComponent

```html
<div class="col-4">
    <app-register [userFromHomeComponent]="users"></app-register>
</div>
```

- 在 RegisterComponent 中, 使用 input property 就可以取得值, 但要注意 property的 case: userName
```html
<select class="form-control">
    <option *ngFor="let user of userFromHomeComponent" [value]="user.userName">
        {{user.userName}}
    </option>
</select>
```

## Section 60. Child to parent communication

- 用 Output property 在 child component 中, 宣告 property with output decorator

- 目標控制 HomeComponent 的 registerMode

```typescript
@Output() cancelRegister = new EventEmitter();

cancel(){  
  this.cancelRegister.emit(false);
  // emit 表示要傳 false 出去
}

```

- parent 用 "()" 來取得值

```html
<div class="col-4">
    <app-register [userFromHomeComponent]="users" (cancelRegister)="cancelRegisterMode($event)" ></app-register>
</div>
```

```typescript
// 在 parent 宣告一個method 
cancelRegisterMode(event: boolean) {
  this.registerMode = event;
}
```

## Section 61. Hooking up the register method to the service

- 在 service 內呼叫API 要回傳 API的結果, 要在 pipe function 內再回傳

```typescript
  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model)
      .pipe(
        map((user: User) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
          return user;
        })
    );
  }
```
