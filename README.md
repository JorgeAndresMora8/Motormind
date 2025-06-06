# 🚗 Diagnóstico de Autos - Full Stack App

## 🏁 Breve Descripción

A lo largo del desarrollo de la aplicación, se implementaron los principios de **Clean Architecture** para garantizar una estructura modular, organizada y fácilmente mantenible.  

Clean Architecture permite separar claramente las responsabilidades dentro de la aplicación, promoviendo el principio de **Separation of Concerns**. Esto significa que tanto el frontend como el backend están diseñados en capas independientes, donde cada una cumple una función específica.  

Esta estructura proporciona múltiples beneficios, como la reducción de la dependencia entre módulos, la facilidad para realizar pruebas, la escalabilidad del proyecto y la flexibilidad para futuras modificaciones sin afectar el núcleo de la aplicación.

## Ejecutar Aplicacion
Para clonar el repositorio, ejecuta el siguiente comando en tu terminal:

```bash
git clone https://github.com/JorgeAndresMora8/Motormind.git
```

Luego, navega a la carpeta del proyecto:
```
cd Motormind
```
### Instalar Dependencias
El proyecto está dividido en dos carpetas principales: Frontend y Backend. Debes instalar las dependencias para ambas partes.
####Instalar dependencias del Frontend:
```
cd Frontend
npm install
```
#### Instalar dependencias del Backend:
```
cd Backend
npm install
```
#### Configurar Variables de Entorno
En la carpeta backend, debes crear un archivo .env para configurar las variables de entorno necesarias. Puedes usar el siguiente ejemplo como referencia:
```
MONGO_DB_URI=***
PORT=8080
OPENAI_API_KEY=***
```
#### Ejecutar La Aplicacion: 
Una vez configuradas las dependencias y las variables de entorno, puedes ejecutar tanto el frontend como el backend en modo de desarrollo.

##### Ejecutar Backend: 
Navega a la carpeta backend y ejecuta:
```
npm run dev
```
Esto iniciará el servidor backend en el puerto especificado en el archivo .env (por defecto, 8080), siendo la url: http://localhost:8080.

##### Ejecutar Frontend: 
Navega a la carpeta frontend y ejecuta:
```
npm run dev
```
Esto iniciará el servidor de desarrollo del frontend. Por defecto, la aplicación estará disponible.

## Frontend


### 📂 Estructura de Carpetas

```
│── Motormind/
│   ├── src/
│   │   ├── adapters/    # Se encargan de recibir información de servicios externos y adaptarla a los modelos de la aplicación.
│   │   ├── assets/      # Archivos estáticos como imágenes, íconos.
│   │   ├── components/  # Componentes reutilizables de UI.
│   │   ├── config/      # Configuraciones generales de la aplicación.
│   │   ├── constants/   # Constantes estáticas (URLs de API, etc.).
│   │   ├── context/     # Provee contexto en React.
│   │   ├── hooks/       # Custom hooks para la reutilización de lógica.
│   │   ├── pages/       # Vistas o páginas de la aplicación.
│   │   ├── services/    # Llamadas a la API y otros servicios externos.
│   │   ├── types/       # Tipos/Interfaces de TypeScript.
│   │   ├── utilities/   # Funciones utilitarias que se pueden usar en toda la aplicación.
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
Se empleó socket.io-client, para establecer una comunicación bidireccional con el backend y recibir, mediante sockets, las notificaciones de las operaciones asincrónicas finalizadas. Esto proporciona una mayor fluidez y una mejor experiencia de usuario, permitiendo que el sistema trabaje en segundo plano mientras el usuario continúa interactuando con la aplicación sin interrupciones.

### Uso de Barrels
Cada carpeta del proyecto contiene un archivo `index.ts` (también conocido como "barrel") que facilita la importación de componentes, hooks, servicios y otros módulos. Esta práctica ayuda a reducir las rutas relativas largas y a mejorar la organización del código. Al agrupar y reexportar módulos, logramos una estructura más limpia y mantenible, lo que facilita la escalabilidad de la aplicación a medida que crece.

### Arquitecura CLEAN ARCHITECTURE
Un esquema mas estructurado de como se estructuro la aplicacion, promoviendo los principios de separation of concerns: 
| Capa          | Propósito                                                                                     |
|---------------|-----------------------------------------------------------------------------------------------|
| Capa Externa  | Gestiona la comunicación con servicios y APIs externos, manejando solicitudes y respuestas mediante protocolos específicos. (carpeta service) |
| Adapters      | Transforman los datos externos al formato requerido por la aplicación, garantizando compatibilidad entre los tipos del backend y los modelos del frontend. (carpeta adapters) |
| Casos de Uso  | Coordinan la lógica de negocio: orquestan interacciones entre modelos, adapters y servicios para ejecutar operaciones específicas del sistema. (components) |
| Models        | Representan las entidades centrales del dominio, definiendo su estructura de datos, comportamientos y relaciones. (states/context) |

### Representacion De Modelos
Representacion de Autos:
```

interface ICar {
    id: string;       // ID del registro del auto
    brand: string;    // Marca del auto 
    year: string;     // Año del auto
    model: string;    // Modelo del auto
    mileage: number;  // Kilometraje del auto
    image: string;    // Imagen del auto (URL)
}
/* Ejemplo */
{
    "id": "198d3ab1-efbb-461d-9b2c-d96fd3e306b9",
    "brand": "Ford",
    "year": "2024",
    "model": "Raptor",
    "mileage": 0,
    "image": "https://th.bing.com/th/id/OIP.dfDrE-cGmqHqUZwdXiz1dgAAAA?rs=1&pid=ImgDetMain"
}
```

Representación de diagnóstico:
```

 interface IDiagnosis {
    id: string;        // ID del diagnóstico
    carId: string;     // ID del auto que se realizó el diagnóstico
    date: string;      // Fecha que se realizó el diagnóstico
    diagnosis: { 
        high: string,   // Probabilidad alta del problema
        medium: string, // Probabilidad media del problema
        low: string     // Probabilidad baja del problema
    },
    symptoms: string,   // Síntomas registrados
}
/* Ejemplo */
    {
        "id": "54e867ec-5045-4556-be52-7dc37500b2cb",
        "carId": "ac1fc860-44a0-4462-bc21-52b2f977de7c",
        "date": "13/03/2025",
        "diagnosis": {
            "high": "Los fusibles de las luces delanteras podrían estar quemados.",
            "medium": "El interruptor de las luces delanteras podría estar dañado.",
            "low": "Puede ser un problema con el cableado de las luces delanteras."
        },
        "symptoms": "las luces delanteras no encienden"
    }
```
---
## Backend


### 📂 Estructura de Carpetas

```
│── Motormind/
│   ├── src/
│   │   ├── config/          # Configuraciones generales de la aplicación (variables de entorno).
│   │   ├── constant/        # Constantes estáticas de la aplicación (URLs de API, valores fijos, etc.).
│   │   ├── controller/      # Maneja las solicitudes entrantes, procesa datos y envía respuestas.
│   │   ├── DB/              # Configuración y conexión a la base de datos, modelos y operaciones relacionadas.
│   │   ├── middleware/      # Funciones intermedias que procesan solicitudes y respuestas (autenticación, validación, etc.).
│   │   ├── modules/         #  Módulos específicos de la aplicación que agrupan funcionalidades relacionadas.
│   │   ├── routes/          # Definición de las rutas de la aplicación y su asociación con controladores.
│   │   ├── socket/          # Configuración y manejo de conexiones en tiempo real usando WebSockets.
│   │   ├── types/           # Definiciones de tipos e interfaces de TypeScript.
│   │   ├── Server/          # Configuración y lógica del servidor (inicialización, middlewares globales, etc.).
│   │   ├── utilities/       # Funciones de utilidad reutilizables (helpers, formateadores, etc.).
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
Se aplico principios de solid a la hora de construir la aplicacion, donde esta divido en capas:
| Capa         | Propósito                                                                 |
|--------------|---------------------------------------------------------------------------|
| Controller   | Gestiona las solicitudes HTTP y actúa como intermediario entre el cliente y la aplicación. Contiene instancias de la capa de Service para manejar la lógica asociada a cada ruta (endpoint). |
| Service      | Alberga la lógica de negocio de la aplicación. Se encarga de procesar, transformar y validar los datos antes de enviarlos a otras capas o devolver una respuesta al Controller. |
| Repository   | Funciona como intermediario entre la capa de Service y la base de datos. Su objetivo es abstraer las operaciones de la base de datos y devolver los datos en formato DTO (Data Transfer Object) para su uso en la capa de Service. |
| DAO          | Se encarga de la interacción directa con la base de datos. Ejecuta consultas, inserciones, actualizaciones y eliminaciones de datos, proporcionando una capa de acceso a los datos crudos. |


### Implementación Socket.io
se implementa para resolver el problema de la espera bloqueante en operaciones de larga duración. Al realizar solicitudes a APIs externas (como la generación de un diagnóstico), el tiempo de respuesta es impredecible, lo que obligaría al usuario a permanecer inactivo hasta completar la tarea, degradando la experiencia de usuario.

Con socket.io, gracias a su comunicación bidireccional en tiempo real:

- El servidor responde inmediatamente con un código 200 al validar la petición, notificando que el diagnóstico está en proceso.

- El usuario puede continuar interactuando con la aplicación sin restricciones.

- Una vez finalizada la operación, el servidor envía una notificación específica al frontend mediante un socket, informando que el diagnóstico está listo.
Esto elimina la espera forzada, optimiza el uso de recursos y permite multitarea, manteniendo al usuario informado en tiempo real.

### Uso de MongoDB Atlas
Se utilizó MongoDB Atlas como servicio en la nube para alojar y gestionar la base de datos MongoDB.

### Representación De Modelos
Representacion de Autos:
```

interface ICar {
    id: string;       // ID del registro del auto
    brand: string;    // Marca del auto 
    year: string;     // Año del auto
    model: string;    // Modelo del auto
    mileage: number;  // Kilometraje del auto
    image: string;    // Imagen del auto (URL)
}
/* Ejemplo */
    {
        "id": "52d4d683-b40c-43fb-ac15-e444865b917c",
        "brand": "Audi",
        "year": "2023",
        "model": "R8",
        "milaege": 0,
        "image": "https://th.bing.com/th/id/OIP.pR8uy3W_DDPzxeAcwiBHgAHaE4?rs=1&pid=ImgDetMain"
    }
```

Representación de diagnóstico:
```

 interface IDiagnosis {
    id: string;        // ID del diagnóstico
    carId: string;     // ID del auto que se realizó el diagnóstico
    date: string;      // Fecha que se realizó el diagnóstico
    diagnosis: { 
        high: string,   // Probabilidad alta del problema
        medium: string, // Probabilidad media del problema
        low: string     // Probabilidad baja del problema
    },
    symptoms: string,   // Síntomas registrados
}
/* Ejemplo */
    {
        "id": "54e867ec-5045-4556-be52-7dc37500b2cb",
        "carId": "ac1fc860-44a0-4462-bc21-52b2f977de7c",
        "date": "13/03/2025",
        "diagnosis": {
            "high": "Los fusibles de las luces delanteras podrían estar quemados.",
            "medium": "El interruptor de las luces delanteras podría estar dañado.",
            "low": "Puede ser un problema con el cableado de las luces delanteras."
        },
        "symptoms": "las luces delanteras no encienden"
    }
```
---
