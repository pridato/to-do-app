# ToDo App

![Todo App](./todo-app.png)

Este proyecto es una aplicación de gestión de tareas (ToDo App) inspirada en Todoist. Utiliza Next.js para el front-end, Spring Boot para el back-end con arquitectura de microservicios y MySQL como base de datos en un contenedor Docker.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js y npm (para Next.js)
- JDK (Java Development Kit) y Maven (para Spring Boot)
- Docker y Docker Compose (para ejecutar MySQL en un contenedor)

## Configuración del Proyecto

### Front-end (Next.js)

1. **Instalación de Dependencias**:
   ```bash
   cd frontend/
   npm install
   npm run dev
   ``` 

  El front-end estará disponible en http://localhost:3000.

### Back-end (spring boot)

1. ## Configuración de entorno**:
     Asegúrate de tener JDK y Maven configurados en tu entorno.
2. ## Ejecución del Servidor:
   ```bash
     cd backend/
    mvn spring-boot:run
   ```

El servidor estará disponible en http://localhost:8080.
