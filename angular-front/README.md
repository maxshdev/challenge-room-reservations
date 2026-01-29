
<img src="https://github.com/user-attachments/assets/07b3ff93-2118-4bfc-b0a0-ca24334b9080" width=120> <br>
[@maxshtefec](https://www.linkedin.com/in/maxshtefec/) :+1: Is the creator and donor of this fabulous repository!

# Birthday Hall Management Frontend 🎉

This project is the **frontend interface** for the technical challenge of managing birthday hall reservations.
Developed in **Angular 19** with **Nebular** as the component library, **MercadoPago** integration, real-time validations against the API, and an **interactive calendar** for reservation visualization.

## ✨ Main Features

- Form to create reservations with reactive validations
- Integration with REST API to get and create reservations
- Overlap prevention and time validations via API
- Visualization of reservations in an interactive calendar
- Compact list of user reservations
- Payment integration with **MercadoPago**
- Modular, clean, and scalable architecture
- Use of **Nebular UI** for a modern and consistent experience

---

## 🛠️ Technologies Used

- Angular 19
- Nebular UI
- RxJS
- MercadoPago SDK
- Calendar library (`angular-calendar` or similar)
- TypeScript
- HTML5, SCSS

---

## 🧱 Architecture

The application follows a **modular and scalable** architecture, separating responsibilities into:

- `modules/` → Functional modules such as reservations, payments, calendar
- `components/` → Reusable components
- `services/` → Services for API communication and business logic
- `models/` → Interface definitions and DTOs
- `pages/` → High-level pages for routes
- `utils/` → Helper functions

Applied Principles:
- **Separation of Concerns**
- **Reactive programming** with RxJS
- Angular best practices (OnPush, lazy loading)

---

## 📦 Installation and Execution

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hall-reservation-front.git
cd hall-reservation-front
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
ng serve
```

The application will be available at `http://localhost:4200`

---

## 🔌 API and MercadoPago Configuration

In the `environment.ts` file configure:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  mercadoPagoPublicKey: 'YOUR_PUBLIC_KEY'
};
```

---

## 📅 Calendar Features

- Visualization of existing reservations
- Integration with API for dynamic event loading
- Custom styles with Nebular

---

## ✅ Project Status

✅ Integrated Reservations.
✅ API and frontend validations.
✅ Compact reservation list.
✅ Calendar integration.
✅ MercadoPago integration.
🔜 User and roles system.
🔜 UI/UX and accessibility improvements.
🔜 Calendar functionality improvements.

---

## 💬 Author

Developed as part of a technical challenge. Frontend development best practices, modularization, and performance optimization in Angular were applied.

---

## 📝 License

This project is free to use for educational and demonstrative purposes.
