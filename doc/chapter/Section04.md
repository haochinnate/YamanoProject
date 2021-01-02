# Section 4: Authentication basics

## Section 32. Safe storage of passwords

- Hashing a password, password -> SHA512 -> #$@#$#@ (not secure)
- Hashing and Salting a password, password -> Hash+Salt -> #$#$#!@#!@

## Section 33. Updating the user entity

- User class 加入 PasswordHash 和 PasswordSalt property

```cmd
dotnet ef migrations add UserPasswordAdded
dotnet ef database update
```

## Section 34. Creating a base API controller

- 建立 BaseApiController class, 把 attribute 放在這邊, 後面建立的 controller 都繼承這個 class

## Section 35. Creating an Account Controller with a register endpoint

- method 中, 參數前面可以加 [FromBody] 等 attribute 來指定要從 http request 中的哪個部分取得資料

```csharp
[HttpPost("register")]
public async Task<ActionResult<User>> Register(string username, string password)
{
    using var hmac = new HMACSHA512();

    var user = new User {
        UserName = username,
        PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
        PasswordSalt = hmac.Key
    };

    _context.Users.Add(user);

    await _context.SaveChangesAsync();

    return user;
}
```

- 如果是從 body 傳入參數, 會有 500 exception, 但是在 query string 的話, 可以正常產生 (回傳 200)

- Body 選擇 raw & JSON

## Section 36. Using the debugger

1. 設定中斷點
2. 在 solution 底下的 .vscode 資料夾, 有 launch.json 和 tasks.json 檔案

- 如果沒有的話, 可以在指令那邊 找 ".NET: Generate Assets for Build and Debug"

3. 到 Debug 視窗, 選擇 .NET Core Attach, 按下 play button
4. 然後再搜尋 API.exe
5. 回 postman 再送一次 http request
6. 從 body 傳的 user name, password 都是 null, 無法變成兩個參數傳入, 所以要改用 DTO

## Section 37. Using DTOs

- 在 \API\ 底下 建立 DTOs 資料夾, 並建立 RegisterDto 類別

```csharp
public class RegisterDto
{
    public string Username { get; set; }
    public string Password { get; set; }
}
```

- 然後修改 register function 的參數型式

```csharp
public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
```

- 沒有用 [ApiController] 的話 要用 if(!ModelState.IsValid) return BadRequest(ModelState) 處理, 並參數搭配 [FromBody] attribute:

## Section 38. Adding validation

- 多個地方都可以加入 validation, ex: database, entity, DTO

- 這邊在 DTO 做, 在 API 層就檢查, 加上 DataAnnotation [Required]

- 如果 body RAW json 是空字串, call API 時, 就直接會回傳錯誤

## Section 39. Adding a login endpoint

- 新增一個 method, endpoint 在 AccountController: login

```cmd
dotnet ef database drop
dotnet ef database update // 參考 migrations, 建立新的 database
```

## Section 40. JSON web tokens

- how we authenticate to an API?

- Token Authentication: JSON Web Tokens (JWTs)
- Industry Standard for tokens (RFC 7519)
- Self-contained and can contain:
  - Credentials
  - Claims
  - Other information
- 不用再去 data store 驗證一次 user, 直接用 token 驗證 看是否能用 api

- JWT Structure, 分三個部分, 並用 "." 區隔

  - HEADER
  - PAYLOAD(放 Claims, Credentials)
    - name identifier
    - role
    - etc...
  - VERIFY SIGNATURE

- often use browser storage to hold tokens, so that we can then send the JWT with every single request

- Benefits of JWT
  - No sessions to manage - JWTs are self contained tokens
  - Potable - A single token can be used with multiple backends
  - No Cookies required - mobile friendly
  - Performance - Once a token is issued, there is no need to make a database request to verify a users authentication

## Section 41. Adding a token service

- 建立 \API\Interfaces 資料夾, 並建立 ITokenService 介面

```csharp
public interface ITokenService
{
    string CreateToken(User user);
}
```

- 建立 \API\Services 資料夾, 和 TokenSevice 類別

- 在 Startup class 中, 將 services 加入 dependency injection container
  - AddSingleton, 建立之後, 要 app 停止才砍掉
  - AddScoped, scoped to lifetime of the HTTP request, 因為在 API controller 中使用
  - AddTransient, service is going to be created and destroyed as soon as the method is finished

```csharp
services.AddScoped<ITokenService, TokenService>();
```

## Section 42. Adding the create token logic

- 安裝 packages, ctrl+shift+p, open nuget gallery

  - System.IdentityModel.Tokens.Jwt 6.8.0
  - 跟 package Microsoft.IdentityModel.Tokens 有相依

- 實作 TokenService

```csharp
public TokenService(IConfiguration config)
{
    _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
}
```

- TokenKey 會加在 config file 內

## Section 43. Creating a User DTO and returning the token

- 在 login, register 時, 回傳 DTO with token, 而不是 User class

```csharp
var returnUserDto = new UserDto
{
    Username = user.UserName,
    Token = _tokenService.CreateToken(user)
};
return returnUserDto;
```

- 先暫時在 appsettings.Development.json 裡面加入 TokenKey

```json
"TokenKey": "Super secret ungessable key",
```

- 再登入一次就可以得到 {username, token}

- JWT.io 可以觀看 tokens decoded 的內容

## Section 44. Adding the authentication middleware

- to authenticate user request

- using Microsoft.AspNetCore.Authorization

- Attribute: [Authorize], [AllowAnonymous]

- 安裝 package: Microsoft.AspNetCore.Authentication.JwtBearer 3.1.10, 要注意版本

- Authentication Middleware, 在 Startup.cs 裡面 要設定一些東西
  還有 controller 要加 attribute

```csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["TokenKey"])),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
```

- 加好之後, 再送一次 request, 回應會變成 401 Unauthorized, 因為 request 需要加上 token
  1. 複製 token
  2. 在 request 的 header 中, 有 "Authorization" Key, 取代裡面的值
  3. "Bearer " + token

## Section 45. Adding extension methods

- 在 \API\ 建立新資料夾 "Extensions", 並建立新類別 ApplicationServiceExtensions 和 IdentityServiceExtensions

- 增加 extenstion method, refactor ConfigureServices method in Startup

- 一個負責增加 application 內部使用的 DI, 一個負責 identity 相關的 DI
