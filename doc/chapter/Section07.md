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

## Section 76. Exception handling middleware

## Section 77. Testing errors in the client

## Section 78. Adding an error interceptor

## Section 79. Validation error

## Section 80. Handling not found

## Section 81. Adding a server error page

