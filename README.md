# Proyecto de Gestión de Productos con Local Storage

Este proyecto implementa la gestión de productos mediante la manipulación del DOM (Document Object Model) y utiliza el Local Storage para almacenar datos de manera persistente en el navegador.

## Tecnologías Utilizadas

- HTML5
- JavaScript (ES6)
- Tailwind CSS

## Archivos Principales

### 1. Página HTML (`index.html`)

**Descripción:** La página HTML proporciona la estructura básica de la interfaz de usuario. Contiene un formulario para agregar productos y una sección para listar los productos existentes.

**Uso:** Abre el archivo `index.html` en tu navegador para interactuar con la interfaz de usuario. Puedes agregar productos utilizando el formulario y verlos listados en la sección correspondiente.

### 2. Archivo JavaScript (`app.js`)

**Descripción:** El archivo JavaScript contiene la lógica de la aplicación. Define las clases `Product` y `UI` para representar productos y manejar la interfaz de usuario, respectivamente. Además, se encarga de la interacción con el Local Storage para almacenar y recuperar productos.

**Uso:** El código JavaScript está vinculado a la página HTML y se ejecuta automáticamente cuando se carga la página. No es necesario realizar acciones adicionales para su ejecución.

## Clases JavaScript

### 1. Clase `Product`

**Descripción:** La clase `Product` se utiliza para representar los productos en la aplicación. Cada instancia de esta clase tiene propiedades como nombre, descripción y precio.

### 2. Clase `UI`

**Descripción:** La clase `UI` maneja la manipulación del DOM y las interacciones de interfaz de usuario. Contiene métodos para agregar productos al DOM, resetear el formulario, eliminar productos y mostrar mensajes.

## Local Storage

**Almacenamiento y Recuperación de Datos:** El código JavaScript utiliza el Local Storage para almacenar datos de productos de manera persistente en el navegador. Esto garantiza que los datos persistan incluso después de recargar la página.

**Métodos Relacionados con Local Storage:**
- `saveToLocalStorage(product)`: Almacena un producto en el Local Storage.
- `removeFromLocalStorage(productName)`: Elimina un producto del Local Storage.

## Instalación y Uso

1. Descarga o clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. Interactúa con la interfaz de usuario para agregar y eliminar productos.

## Contribuciones

Si encuentras problemas o tienes sugerencias de mejora, por favor, crea un problema (issue) o envía una solicitud de extracción (pull request). ¡Todas las contribuciones son bienvenidas!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

---

¡Gracias por contribuir al proyecto! Esperamos que sea útil y educativo.
```