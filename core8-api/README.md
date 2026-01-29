<img src="https://github.com/user-attachments/assets/07b3ff93-2118-4bfc-b0a0-ca24334b9080" width=120> <br>
[@maxshtefec](https://www.linkedin.com/in/maxshtefec/) :+1: Is the creator and donor of this fabulous repository!

# Birthday Hall Management API 🎉

This project is a REST API developed in **.NET 8** that allows the management of birthday hall reservations. It complies with a series of time restrictions, avoids overlapping between events, and allows querying availability by date.

## ✨ Main Features

- Create hall reservations with business validations
- Query reservations by date or all reservations
- Validations:
  - Start time < end time
  - Allowed hours between 9:00 AM and 6:00 PM
  - Mandatory 30-minute margin between reservations
- PostgreSQL database running in Docker
- Integrated Swagger documentation
- Clear and maintainable structure with DTOs, EF Core, and validations
- Clean, decoupled code with best practices

---

## 🛠️ Technologies Used

- .NET 8
- ASP.NET Core
- Entity Framework Core
- PostgreSQL (with Docker)
- Swagger
- C# 12

---

## 🧱 Architecture

The project follows a **layered architecture**, separating responsibilities into:

- `Models/` → Domain entities (`Reserva`, `Salon`)
- `Dtos/` → Data Transfer Objects (`ReservaDto`, `SalonDto`)
- `Data/` → Database context (`AppDbContext`)
- `Controllers/` → REST Controllers
- `Program.cs` → Services configuration, middlewares, and migrations

SOLID principles and best practices in error handling, validations, and HTTP responses were applied.

---

## 📄 Endpoints

| Method | Endpoint              | Description |
|--------|-----------------------|-------------|
| POST   | `/api/reserva`        | Create a reservation with validations |
| GET    | `/api/reserva`        | Get all reservations |
| GET    | `/api/reserva/{fecha}`| Get reservations for a specific date (format `yyyy-MM-dd`) |

---

## 📦 Installation and Execution

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hall-reservation-api.git
cd hall-reservation-api
```

### 2. Create Docker image and start services

```bash
docker compose up --build
```

This will run the container with PostgreSQL and start the API on port `http://localhost:5000`

### 3. Access Swagger documentation

Go to [http://localhost:5000/swagger](http://localhost:5000/swagger)

---

## 🧪 Unit Tests

Currently, it is expected to cover the `ReservaController` with unit tests to validate:

- Reservation overlapping
- Allowed hours validations
- Validation of margins between reservations

(Optional implementation not yet included in this repository)

---

## 🚀 Additional Considerations

- The database includes 3 pre-loaded halls (`Salón A`, `Salón B`, `Salón C`).
- Migrations are applied automatically when the application starts.
- Instead of an in-memory database, a real database (PostgreSQL) was chosen to demonstrate Docker handling.

---

## 💬 Author

Developed as a solution to a technical challenge. Backend development best practices in .NET, layered architecture, business validations, and integrated documentation were applied.

---

## 🐳 Docker Compose

Example `docker-compose.yml` file:

```yaml
version: '3.4'

services:
  salon-db:
    image: postgres:latest
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: salon_reservas
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  salon-api:
    build: .
    depends_on:
      - salon-db
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Development

volumes:
  pgdata:
```

---

## ✅ Project Status

✅ Full functionality implemented
✅ Business validations added
✅ Docker and Swagger configured
🔜 Unit tests (to be added)
🔜 Frontend interface (optional not included)

---

## 📝 License

This project is free to use for educational and demonstrative purposes.
