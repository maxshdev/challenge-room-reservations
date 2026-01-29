# 🎈 Birthday Hall Management System

> **Challenge Overview**: This repository contains a full-stack solution for managing birthday hall reservations. It features a robust .NET 8 API and a modern Angular 19 frontend, designed with scalability and business rules in mind.

---

## 🏛️ Architectural Overview

The project is structured into two main components, ensuring a clear separation between the backend logic and the frontend user experience.

### 1. The Stack
- **Backend**: .NET 8 REST API with Entity Framework Core and PostgreSQL.
- **Frontend**: Angular 19 using Nebular UI for a professional and consistent interface.
- **Database**: PostgreSQL, containerized with Docker for easy deployment and consistency.
- **Payments**: Integrated with MercadoPago for secure transaction handling.

---

## ✨ Features & Implementation

| Feature | Description | Status |
| :--- | :--- | :---: |
| **REST API** | Secure and documented API for reservation management. | ✅ |
| **Business Validations** | Strict rules for reservation times and 30-min margins. | ✅ |
| **Interactive Calendar** | Visual representation of hall availability and bookings. | ✅ |
| **Payment Integration** | Seamless payment flow using MercadoPago. | ✅ |
| **Docker Support** | One-command setup for the entire backend environment. | ✅ |
| **Modular Design** | Scalable architecture for both frontend and backend. | ✅ |

---

## 🛠️ Project Structure

- `core8-api/`: The .NET 8 backend service. Handles logic, database, and validations.
- `angular-front/`: The Angular 19 frontend application. User interface and client-side logic.

---

## 🚀 Getting Started

### Prerequisites
- .NET 8 SDK
- Node.js & npm
- Docker & Docker Compose

### 1. Backend Setup (API)
```bash
cd core8-api
docker compose up --build
```
*The API will be available at http://localhost:5000 and Swagger documentation at http://localhost:5000/swagger*

### 2. Frontend Setup
```bash
cd angular-front
npm install
ng serve
```
*The application will be accessible at http://localhost:4200*

---

## 📜 Documentation

Detailed documentation for each component can be found in their respective directories:
- [Backend README](file:///f:/Proyectos/challenge-room-reservations/core8-api/README.md)
- [Frontend README](file:///f:/Proyectos/challenge-room-reservations/angular-front/README.md)

---

**Max Shtefec** - *Software Architect / Full Stack Developer*
[GitHub](https://github.com/maxshdev) | [LinkedIn](https://linkedin.com/in/maxshtefec)
