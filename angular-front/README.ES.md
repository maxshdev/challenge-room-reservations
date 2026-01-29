
<img src="https://github.com/user-attachments/assets/07b3ff93-2118-4bfc-b0a0-ca24334b9080" width=120> <br>
[@maxshtefec](https://www.linkedin.com/in/maxshtefec/) :+1: Es el creador y donador de este fabuloso repositorio!

# Frontend de Gestión de Salones de Cumpleaños 🎉

Este proyecto es la **interfaz frontend** del desafío técnico de gestión de reservas de salones para cumpleaños.  
Desarrollado en **Angular 19** con **Nebular** como librería de componentes, integración de **MercadoPago**, validaciones en tiempo real contra la API y un **calendario interactivo** para la visualización de reservas.

## ✨ Características principales

- Formulario para crear reservas con validaciones reactivas
- Integración con API REST para obtener y crear reservas
- Prevención de solapamientos y validaciones horarias vía API
- Visualización de reservas en un calendario interactivo
- Listado compacto de reservas del usuario
- Integración de pago con **MercadoPago**
- Arquitectura modular, limpia y escalable
- Uso de **Nebular UI** para una experiencia moderna y consistente

---

## 🛠️ Tecnologías utilizadas

- Angular 19
- Nebular UI
- RxJS
- MercadoPago SDK
- Librería de calendario (`angular-calendar` o similar)
- TypeScript
- HTML5, SCSS

---

## 🧱 Arquitectura

La aplicación sigue una arquitectura **modular y escalable**, separando responsabilidades en:

- `modules/` → Módulos funcionales como reservas, pagos, calendario
- `components/` → Componentes reutilizables
- `services/` → Servicios para comunicación con la API y lógica de negocio
- `models/` → Definiciones de interfaces y DTOs
- `pages/` → Páginas de alto nivel para rutas
- `utils/` → Funciones auxiliares

Principios aplicados:
- **Separación de responsabilidades**
- **Reactive programming** con RxJS
- Buenas prácticas de Angular (OnPush, lazy loading)

---

## 📦 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/salon-reservas-front.git
cd salon-reservas-front
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

---

## 🔌 Configuración de API y MercadoPago

En el archivo `environment.ts` configura:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  mercadoPagoPublicKey: 'TU_PUBLIC_KEY'
};
```

---

## 📅 Funcionalidades del calendario

- Visualización de reservas existentes
- Integración con API para carga dinámica de eventos
- Estilos personalizados con Nebular

---

## ✅ Estado del proyecto

✅ Reservas integrada.  
✅ Validaciones API y frontend  
✅ Listado compacto de reservas  
✅ Integración con calendario  
✅ Integración de MercadoPago  
🔜 Sistema de usuarios y roles  
🔜 Mejoras de UI/UX y accesibilidad
🔜 Mejoras de funcionalidades para el calendario.

---

## 💬 Autor

Desarrollado como parte de un desafío técnico. Se aplicaron buenas prácticas de desarrollo frontend, modularización y optimización de performance en Angular.

---

## 📝 Licencia

Este proyecto es de uso libre con fines educativos y demostrativos.
