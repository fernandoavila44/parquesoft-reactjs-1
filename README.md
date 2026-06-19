# 🚀 Curso de React.js - Parquesoft

¡Bienvenido al repositorio oficial del curso de **React.js** en **Parquesoft**! Este proyecto está estructurado como una guía progresiva para aprender desarrollo web moderno utilizando React, partiendo desde los conceptos básicos de JavaScript y JSX hasta patrones avanzados de diseño y optimización de rendimiento.

El proyecto está configurado con **Vite** para ofrecer un entorno de desarrollo sumamente rápido con HMR (Hot Module Replacement), y hace uso de **TypeScript** para un tipado estático seguro y **Sass** para estilos dinámicos.

---

## 📚 Temáticas del Curso

El curso está organizado en **9 clases**. Cada clase cuenta con una sección de **teoría** (conceptos fundamentales y explicaciones teóricas) y otra de **práctica** (ejercicios guiados y aplicaciones interactivas).

A continuación se detallan los temas cubiertos en cada módulo:

| Clase | Tema Principal | Contenido y Conceptos Clave |
| :--- | :--- | :--- |
| **Clase 1** | **JSX & JavaScript para React** | Fundamentos de la sintaxis JSX, renderizado condicional, renderizado de listas, estilos en línea/clases y repaso de conceptos clave de JavaScript moderno (desestructuración, arrays, métodos `.map()`, `.filter()`, etc.). |
| **Clase 2** | **Componentes & Props** | Arquitectura basada en componentes funcionales, pasaje y validación de propiedades (`props`), modularización de interfaces y creación de layouts. |
| **Clase 3** | **Estado, Eventos y Ciclo de Vida** | Manejo de eventos, interactividad del usuario, gestión del estado interno de los componentes mediante el hook `useState` y ciclo de vida de los componentes. |
| **Clase 4** | **Hooks de Performance** | Optimización de renderizados y rendimiento en la aplicación utilizando los hooks `useMemo` y `useCallback`. |
| **Clase 5** | **Props Drilling & Context API** | Gestión del estado compartido/global a través de `useContext` y solución al patrón problemático de *Props Drilling*. |
| **Clase 6** | **useEffect & Data Fetching** | Ciclo de vida y efectos secundarios utilizando `useEffect`, y consumo de datos desde APIs externas mediante peticiones HTTP. |
| **Clase 7** | **useReducer & Estados Complejos** | Estructuración y manejo de estados complejos mediante el hook `useReducer` implementando el patrón Reducer. |
| **Clase 8** | **React Router (Navegación)** | Creación de aplicaciones SPA (Single Page Applications) utilizando rutas declarativas, parámetros dinámicos, navegación programática y layouts anidados. |
| **Clase 9** | **Patrones Avanzados** | Patrones avanzados de diseño y reutilización de lógica en React, incluyendo Custom Hooks y estructuración avanzada de componentes. |

---

## 🛠️ Stack Tecnológico

*   **React 19**: Biblioteca de UI para construir interfaces de usuario declarativas y eficientes.
*   **Vite**: Entorno y empaquetador de desarrollo moderno y rápido.
*   **TypeScript**: Superconjunto de JavaScript que aporta tipado estático seguro.
*   **Sass (SCSS)**: Preprocesador CSS para estilos más modulares y estructurados.
*   **React Router v7**: Enrutamiento declarativo para el lado del cliente.
*   **JSON Server**: Herramienta para simular una API REST local a partir de un archivo JSON.

---

## 🚀 Cómo Empezar

Para correr el proyecto de manera local, sigue los siguientes pasos:

### 1. Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/).

### 2. Instalar Dependencias
Clona el repositorio e ingresa a la carpeta raíz del proyecto. Luego, ejecuta:
```bash
npm install
```

### 3. Iniciar el Servidor de Desarrollo (Vite)
Para levantar el servidor local de desarrollo con HMR:
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

### 4. Servidor Mock API (JSON Server)
Para simular el backend y poder realizar peticiones HTTP (data fetching/formularios):
```bash
npm run mock-api
```
Esto iniciará un servidor en el puerto `3001` (configurado mediante `db.json` en la raíz del proyecto).
