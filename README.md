# AlkeWallet_ProyectoModulo02

AlkeWallet es una billetera digital desarrollada como proyecto frontend del Módulo 2 del Bootcamp de Desarrollo de Aplicaciones Full Stack JavaScript Trainee. La aplicación permite a los usuarios simular la gestión de su dinero de forma simple e intuitiva, sin conexión a bases de datos.

📋 Tabla de Contenidos

Descripción del Proyecto
Características
Tecnologías Utilizadas
Estructura del Proyecto
Instalación
Uso
Funcionalidades Principales
Capturas de Pantalla
Roadmap
Contribuciones
Autor
Licencia


🎯 Descripción del Proyecto
AlkeWallet es una aplicación web que simula las funcionalidades básicas de una billetera digital. El proyecto fue desarrollado como parte de un bootcamp de desarrollo full stack, enfocándose en la implementación del frontend y la lógica de negocio del lado del cliente utilizando JavaScript vanilla.
Objetivo del Proyecto
Crear una interfaz funcional que permita:

Visualizar el saldo actual de la billetera
Realizar depósitos de dinero
Enviar dinero a otros usuarios
Mantener un historial completo de transacciones

Todo esto sin necesidad de backend o base de datos, utilizando el almacenamiento local del navegador (LocalStorage).

✨ Características

✅ Interfaz Intuitiva: Diseño limpio y fácil de usar
✅ Gestión de Saldo: Visualización en tiempo real del saldo disponible
✅ Sistema de Depósitos: Añade fondos a tu billetera
✅ Envío de Dinero: Simula transferencias a otros usuarios
✅ Historial de Transacciones: Registro completo de todas las operaciones
✅ Persistencia de Datos: Los datos se mantienen incluso al cerrar el navegador
✅ Validaciones: Control de errores en las transacciones
✅ Diseño Responsive: Adaptable a diferentes dispositivos


🛠 Tecnologías Utilizadas
TecnologíaUsoHTML5Estructura y semántica de la aplicaciónCSS3Estilos y diseño visualJavaScriptLógica de negocio y manipulación del DOMLocalStoragePersistencia de datos en el navegador

📁 Estructura del Proyecto
AlkeWallet_ProyectoModulo02/
│
├── index.html              # Página de inicio
├── login.html              # Pantalla de login
├── menu.html               # Menú principal de la aplicación
├── deposit.html            # Pantalla para realizar depósitos
├── sendmoney.html          # Pantalla para enviar dinero
├── transactions.html       # Historial de transacciones
│
├── css/
│   └── styles.css          # Estilos de la aplicación
│
├── js/
│   ├── main.js             # Lógica principal
│   ├── deposit.js          # Lógica de depósitos
│   ├── sendmoney.js        # Lógica de envío de dinero
│   └── transactions.js     # Lógica del historial
│
└── README.md               # Este archivo

🚀 Instalación
Prerrequisitos

Navegador web moderno (Chrome, Firefox, Safari, Edge)
No requiere instalación de dependencias ni servidor

Pasos de Instalación

Clonar el repositorio

bashgit clone https://github.com/kary-alett/AlkeWallet_ProyectoModulo02.git

Navegar al directorio del proyecto

bashcd AlkeWallet_ProyectoModulo02

Abrir en el navegador

Simplemente abre el archivo index.html en tu navegador preferido:

Opción 1: Doble clic en index.html
Opción 2: Arrastrar el archivo al navegador
Opción 3: Usar un servidor local (opcional)

bash# Si tienes Python instalado
python -m http.server 8000

# O con Node.js y npx
npx http-server

💻 Uso
1. Inicio de Sesión
Al abrir la aplicación, serás dirigido a la pantalla de login. Ingresa tus credenciales (simuladas) para acceder.
2. Menú Principal
Desde el menú principal podrás:

Ver tu saldo actual
Acceder a las diferentes funcionalidades

3. Realizar un Depósito

Selecciona "Depositar"
Ingresa el monto que deseas agregar
Confirma la transacción
Tu saldo se actualizará automáticamente

4. Enviar Dinero

Selecciona "Enviar Dinero"
Ingresa el destinatario
Ingresa el monto a enviar
Confirma la transacción
El monto se descontará de tu saldo

5. Ver Historial
Accede a "Transacciones" para ver el registro completo de todas tus operaciones, incluyendo:

Fecha y hora
Tipo de transacción (depósito/envío)
Monto
Destinatario (en caso de envíos)


🎨 Funcionalidades Principales
Gestión de Saldo
javascript// Ejemplo de actualización de saldo
function updateBalance(amount, type) {
    let currentBalance = getBalance();
    
    if (type === 'deposit') {
        currentBalance += amount;
    } else if (type === 'send') {
        if (currentBalance >= amount) {
            currentBalance -= amount;
        } else {
            alert('Saldo insuficiente');
            return false;
        }
    }
    
    saveBalance(currentBalance);
    return true;
}
Registro de Transacciones
Cada transacción se registra con la siguiente información:

ID único de transacción
Fecha y hora
Tipo de operación
Monto
Saldo resultante
Destinatario (si aplica)

Validaciones
La aplicación incluye validaciones para:

Montos válidos (números positivos)
Saldo suficiente para envíos
Campos requeridos completos
Formato de datos correcto

🗺 Roadmap
Posibles mejoras futuras:

 Integración con backend y base de datos
 Sistema de autenticación real
 Múltiples usuarios
 Transferencias entre usuarios reales
 Gráficos de gastos
 Categorización de transacciones
 Exportación de historial a PDF/Excel
 Notificaciones de transacciones
 Modo oscuro
 Internacionalización (i18n)


🤝 Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto:

Fork el repositorio
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request


👤 Autor
Kary Alett

GitHub: @kary-alett
Proyecto: AlkeWallet_ProyectoModulo02


📝 Contexto Académico
Este proyecto fue desarrollado como parte del Módulo 2 del Bootcamp de Desarrollo de Aplicaciones Full Stack JavaScript Trainee.
Objetivos de aprendizaje cumplidos:

Manipulación del DOM con JavaScript
Gestión de eventos
Almacenamiento local (LocalStorage)
Validación de formularios
Estructura de aplicación web
Diseño responsive
Buenas prácticas de código


📄 Licencia
Este proyecto es de código abierto y está disponible para fines educativos.

🙏 Agradecimientos

Al bootcamp por proporcionar el contexto y los requisitos del proyecto
A la comunidad de desarrolladores por recursos y tutoriales
A todos los que contribuyan a mejorar este proyecto


⭐ Si este proyecto te resultó útil, no olvides darle una estrella en GitHub

Nota: Este es un proyecto educativo con fines de aprendizaje. No se recomienda usar para gestión de dinero real.
