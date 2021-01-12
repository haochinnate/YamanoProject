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

## Section 87. Generating seed data

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