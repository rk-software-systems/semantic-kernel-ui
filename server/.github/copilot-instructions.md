# GitHub Copilot Instructions

These instructions define how GitHub Copilot should assist with this project. The goal is to ensure consistent, high-quality code generation aligned with our conventions, stack, and best practices.

## 🧠 Context

- **Project Type**: Web API / Console App  / Microservice / SignalR Hub
- **Language**: C#
- **Framework / Libraries**: .NET 9+ / ASP.NET Core / Entity Framework Core / xUnit
- **Architecture**: Clean Architecture / MVC / Onion 

## 🔧 General Guidelines

- Use C#-idiomatic patterns and follow .NET coding conventions.
- Use PascalCase for class names and methods; camelCase for local variables and parameters.
- Use named methods instead of anonymous lambdas in business logic.
- Use nullable reference types (`#nullable enable`) and async/await.
- Format using `dotnet format` or IDE auto-formatting tools.
- Prioritize readability, testability, and SOLID principles.

## 📁 File Structure

Use this structure as a guide when creating or updating files:

```text
server/
  Libraries/
    Domain/
    Services/
  Api/
    Commands/
    Queries/
    Services/
    Interfaces/
  Tests/
    Unit/
    Integration/
```

## 🧶 Patterns

### ✅ Patterns to Follow
- Use Clean Architecture with layered separation.
- Use Dependency Injection for services and repositories.
- Don't use FluentValidation for input validation.
- Map DTOs to domain models using Statis Extension Methods.
- Use ILogger<T> or Serilog for structured logging.
- For APIs:
  - Use Minimal APIs.\
  - Do not use Controllers.

### 🚫 Patterns to Avoid
- Don’t use static state or service locators.
- Don’t hardcode config—use appsettings.json and IOptions.
- Avoid God classes.
- Don't use Controllers, use Minimal APIs.

## 🧪 Testing Guidelines
- Use xUnit for unit and integration testing.
- Use Moq for mocking dependencies.
- Follow Arrange-Act-Assert pattern in tests.
- Validate edge cases and exceptions.
- Prefer TDD for critical business logic and application services.

## 🧩 Example Prompts
- `Copilot, generate an ASP.NET Core controller with CRUD endpoints for Product.`
- `Copilot, create an Entity Framework Core DbContext for a blog application.`
- `Copilot, write an xUnit test for the CalculateInvoiceTotal method.`

## 🔁 Iteration & Review
- Copilot output should be reviewed and modified before committing.
- If code isn’t following these instructions, regenerate with more context or split the task.
- Use /// XML documentation comments to clarify intent for Copilot and future devs.
- Use Rider or Visual Studio code inspections to catch violations early.

## 📚 References
- [Microsoft C# Coding Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0)
- [Entity Framework Core Docs](https://learn.microsoft.com/en-us/ef/core/)
- [xUnit Documentation](https://xunit.net/)
- [Serilog Docs](https://serilog.net/)
- [Clean Architecture in .NET (by Jason Taylor)](https://github.com/jasontaylordev/CleanArchitecture)