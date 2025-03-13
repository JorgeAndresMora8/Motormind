# 🚗 Diagnóstico de Autos - Full Stack App

## 🏁 Breve Descripción

A lo largo del desarrollo de la aplicación, se implementaron los principios de **Clean Architecture** para garantizar una estructura modular, organizada y fácilmente mantenible.  

Clean Architecture permite separar claramente las responsabilidades dentro de la aplicación, promoviendo el principio de **Separation of Concerns**. Esto significa que tanto el frontend como el backend están diseñados en capas independientes, donde cada una cumple una función específica.  

Esta estructura proporciona múltiples beneficios, como la reducción de la dependencia entre módulos, la facilidad para realizar pruebas, la escalabilidad del proyecto y la flexibilidad para futuras modificaciones sin afectar el núcleo de la aplicación.

## Frontend


### 📂 Estructura de Carpetas

```
│── Motormind/
│   ├── src/
│   │   ├── adapters/      # Se encargan de recibir información de servicios externos y adaptarla a los modelos de la aplicación.
│   │   ├── assets/        # Archivos estáticos como imágenes, íconos.
│   │   ├── components/    # Componentes reutilizables de UI.
│   │   ├── config/        # Configuraciones generales de la aplicación.
│   │   ├── constants/     # Constantes estáticas (URLs de API, etc.).
│   │   ├── context/       # Provee contexto en React.
│   │   ├── hooks/         # Custom hooks para la reutilización de lógica.
│   │   ├── pages/         # Vistas o páginas de la aplicación.
│   │   ├── services/      # Llamadas a la API y otros servicios externos.
│   │   ├── types/         # Tipos/Interfaces de TypeScript.
│   │   ├── utilities/     # Funciones utilitarias que se pueden usar en toda la aplicación.
│
│── README.md
```

## 📦 Paquetes Usados y Razones

### **Dependencias**

| Paquete | Versión | Razón de Uso |
|---------|---------|-------------|
| **Bootstrap** | `^5.3.3` | Estilos y diseño responsivo |
| **Mongoose** | `^8.12.1` | Modelado de datos para MongoDB |
| **React** | `^19.0.0` | Biblioteca para construir la UI |
| **React-Bootstrap** | `^2.10.9` | Componentes estilizados con Bootstrap |
| **React-Bootstrap-Icons** | `^1.11.5` | Íconos para mejorar la UI |
| **React-DOM** | `^19.0.0` | Manejo del DOM en React |
| **React-Router-DOM** | `^7.3.0` | Manejo de rutas en el frontend |
| **React-Toastify** | `^11.0.5` | Notificaciones visuales para mejorar UX |
| **Socket.io Client** | `^4.8.1` | Comunicación en tiempo real |

## Decisiones de Diseño

### Uso de Socket.IO
Socket.IO se ha implementado en la aplicación para proporcionar una comunicación en tiempo real entre el cliente y el servidor. Esto es especialmente útil para casos como la actualización de diagnósticos de vehículos, donde se requieren respuestas instantáneas sin la necesidad de recargar la página. Socket.IO permite una interacción más fluida y dinámica, mejorando la experiencia del usuario final.

### Uso de Barrels
Cada carpeta del proyecto contiene un archivo `index.ts` (también conocido como "barrel") que facilita la importación de componentes, hooks, servicios y otros módulos. Esta práctica ayuda a reducir las rutas relativas largas y a mejorar la organización del código. Al agrupar y reexportar módulos, logramos una estructura más limpia y mantenible, lo que facilita la escalabilidad de la aplicación a medida que crece.

### Funcion de carpeta Adapters
Cada carpeta del proyecto contiene un archivo `index.ts` (también conocido como "barrel") que facilita la importación de componentes, hooks, servicios y otros módulos. Esta práctica ayuda a reducir las rutas relativas largas y a mejorar la organización del código. Al agrupar y reexportar mó


---
## Backend


### 📂 Estructura de Carpetas

```
│── Motormind/
│   ├── src/
│   │   ├── config/          # Se encargan de recibir información de servicios externos y adaptarla a los modelos de la aplicación.
│   │   ├── constant/        # Archivos estáticos como imágenes, íconos.
│   │   ├── controller/      # Componentes reutilizables de UI.
│   │   ├── DB/              # Configuraciones generales de la aplicación.
│   │   ├── middleware/      # Constantes estáticas (URLs de API, etc.).
│   │   ├── modules/         #
│   │   ├── routes/          # Custom hooks para la reutilización de lógica.
│   │   ├── socket/          # Vistas o páginas de la aplicación.
│   │   ├── types/           # Llamadas a la API y otros servicios externos.
│   │   ├── utilities/       # Tipos/Interfaces de TypeScript.
│
│── README.md
```

## 📦 Paquetes Usados y Razones

| Paquete | Versión | Razón de Uso |
|---------|---------|-------------|
| **cors** | `^2.8.5` | Middleware para habilitar CORS (Cross-Origin Resource Sharing |
| **dotenv** | `^8.12.1` | Carga de variables de entorno desde un archivo .env |
| **express** | `^19.0.0` | Framework para construir la API RESTful |
| **http** | `^2.10.9` | Proporciona la funcionalidad de HTTP en node.js |
| **mongoose** | `^1.11.5` | Modelado de datos en mongoDB |
| **openai** | `^19.0.0` | Cliente para interactuar con la api de OpenAI y generar diagnosticos |
| **socket.io** | `^7.3.0` | Comunicacion en tiempo real entre el servidor y los clientes. |
| **uui** | `^11.0.5` | Generacion de identificadores unicos (UUID) para los registros |

## Decisiones de Diseño

### Arquitectura SOLID
controller, service, repository, dao

### Implementacion Socket.io

### Integracion Con OPEN AI.
---
