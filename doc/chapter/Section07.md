# Section 7: Error handling

## Section 74. Creating an error controller for testing errors

- 在 \API\Controllers\ 底下建立 BuggyController, 拋出error 才做測試

- 模擬5種error
    1. authorize
    2. Not Found
    3. Server Error
    4. Bad Request
    5. Validation Error

1. authorize
    - URL: {{url}}/api/buggy/auth
    - 回傳 401 Unauthorized
2. Not Found
    - URL: {{url}}/api/buggy/not-found
    - 回傳 404 Not Found
    - 內容: json 格式
```json
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.4",
    "title": "Not Found",
    "status": 404,
    "traceId": "|df4e5491-44ebf646333c081a."
}
```
3. Server Error
    - URL: {{url}}/api/buggy/server-error
    - 回傳 500 Internal Server Error 
    - 內容: System.NullReferenceException ... 
4. Bad Request
    - URL: {{url}}/api/buggy/bad-request
    - 回傳 400 Bad Request
    - 內容: This was not a good request
5. Validation Error
    - URL: {{url}}/api/account/register
    - 回傳 400 Bad Request
    - 內容 json 格式

```json
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "|df4e5496-44ebf646333c081a.",
    "errors": {
        "Password": [
            "The Password field is required."
        ],
        "Username": [
            "The Username field is required."
        ]
    }
}
```

## Section 75. Handling server errors

- 在 Startup.cs 的 Configure function 中, 第一步是 UseDeveloperExceptionPage

- 處理 Server Error 是用 try-catch 包住, 並在 catch block 回傳 StatusCode

```csharp
return StatusCode(500, "Computer says no!");
```

- 但是這樣 terminal 不會有紀錄

## Section 76. Exception handling middleware

- 但這樣加try-catch很麻煩, 所以改加 global exception handle middleware

- 在 \API\ 加入新資料夾 \Errors\, 並在裡面建立類別 ApiException

- 在 \API\ 加入新資料夾 \Middleware\, 並在裡面建立類別 ExceptionMiddleware

- 

```csharp
public ExceptionMiddleware(RequestDelegate next, 
    ILogger<ExceptionMiddleware> logger,
    IHostEnvironment env)
{
    _next = next;
    _logger = logger;
    _env = env;
}
```

```csharp
public async Task InvokeAsync(HttpContext context)
{
    try
    {
        await _next(context);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, ex.Message);
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;

        var response = _env.IsDevelopment() 
            ? new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace?.ToString())
            : new ApiException(context.Response.StatusCode, "Internal Server Error"); 

        var options = new JsonSerializerOptions{ PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

        var json = JsonSerializer.Serialize(response, options);

        await context.Response.WriteAsync(json);
    }
}
```


- startup 的 Configure 改成使用 middleware
```csharp
app.UseMiddleware<ExceptionMiddleware>();
```


## Section 77. Testing errors in the client

## Section 78. Adding an error interceptor

## Section 79. Validation error

## Section 80. Handling not found

## Section 81. Adding a server error page

