# 🎈 Sistema de Gestión de Salones de Cumpleaños

> **Resumen del Desafío**: Este repositorio contiene una solución full-stack para la gestión de reservas de salones de cumpleaños. Cuenta con una robusta API en .NET 8 y un frontend moderno en Angular 19, diseñado pensando en la escalabilidad y las reglas de negocio.

---

## 🏛️ Descripción Arquitectónica

El proyecto está estructurado en dos componentes principales, asegurando una clara separación entre la lógica del backend y la experiencia de usuario del frontend.

### 1. El Stack
- **Backend**: API REST .NET 8 con Entity Framework Core y PostgreSQL.
- **Frontend**: Angular 19 utilizando Nebular UI para una interfaz profesional y consistente.
- **Base de Datos**: PostgreSQL, contenedorizada con Docker para facilitar el despliegue y la consistencia.
- **Pagos**: Integrado con MercadoPago para la gestión segura de transacciones.

---

## ✨ Características e Implementación

| Característica | Descripción | Estado |
| :--- | :--- | :---: |
| **API REST** | API segura y documentada para la gestión de reservas. | ✅ |
| **Validaciones de Negocio** | Reglas estrictas para horarios y márgenes de 30 min. | ✅ |
| **Calendario Interactivo** | Representación visual de disponibilidad y reservas. | ✅ |
| **Integración de Pagos** | Flujo de pago fluido utilizando MercadoPago. | ✅ |
| **Soporte Docker** | Configuración de un solo comando para el backend. | ✅ |
| **Diseño Modular** | Arquitectura escalable tanto en frontend como backend. | ✅ |

---

## 🛠️ Estructura del Proyecto

- `core8-api/`: El servicio backend en .NET 8. Maneja la lógica, base de datos y validaciones.
- `angular-front/`: La aplicación frontend en Angular 19. Interfaz de usuario y lógica del cliente.

---

## 🚀 Primeros Pasos

### Prerrequisitos
- .NET 8 SDK
- Node.js & npm
- Docker & Docker Compose

### 1. Configuración del Backend (API)
```bash
cd core8-api
docker compose up --build
```
*La API estará disponible en http://localhost:5000 y la documentación Swagger en http://localhost:5000/swagger*

### 2. Configuración del Frontend
```bash
cd angular-front
npm install
ng serve
```
*La aplicación será accesible en http://localhost:4200*

---

## 📜 Documentación

La documentación detallada de cada componente se encuentra en sus respectivos directorios:
- [README del Backend](file:///f:/Proyectos/challenge-room-reservations/core8-api/README.ES.md)
- [README del Frontend](file:///f:/Proyectos/challenge-room-reservations/angular-front/README.ES.md)

---

**Max Shtefec** - *Software Architect / Full Stack Developer*
[GitHub](https://github.com/maxshdev) | [LinkedIn](https://linkedin.com/in/maxshtefec)
