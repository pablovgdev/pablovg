---
paginate: true
backgroundColor: #1A202C
color: #ffffff
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap');

section {
  font-family: 'Readex Pro', sans-serif !important;
}
</style>

# Introducción a <span style="color: dodgerblue">TypeScript (TS)</span>

- Es un superset de <span style="color: yellow">JavaScript (JS)</span>
  - Amplia funcionalidad de <span style="color: yellow">JS</span> para agregarle tipado
- Todo código <span style="color: yellow">JS</span> es código valido de <span style="color: dodgerblue">TS</span>
  - Previene errores de tipo en tiempo de compilación
  - El código <span style="color: dodgerblue">TS</span> se compila en codigo <span style="color: yellow">JS</span>
- Desarrollado en 2012 en **Microsoft** por **Anders Hejlsberg** (Creador de C#)

---

# ¿Por qué se creó TypeScript?

- <span style="color: yellow">JS</span> es un lenguage bastante extraño ([wtfjs](https://github.com/denysdovhan/wtfjs))
  - Fue creado en 10 días por Brendan Eich durante la guerra de los navegadores
- Conocer el tipo de tus variables tiene muchas ventajas
  - Mejor autocompletado
  - Mejor detección de errores
  - Mejor refactorización
- Coincidió con la revolución de los frameworks
  - <span style="color: red">AngularJS</span>
  - <span style="color: dodgerblue">ReactJS</span>
  - <span style="color: green">VueJS</span>

---

# ¿Por qué usar TypeScript?

El uso de TypeScript tiene varios beneficios para los desarrolladores:

1. **Tipo de datos estáticos:** TypeScript permite declarar tipos de datos en el código, lo que proporciona una capa adicional de seguridad y ayuda a prevenir errores de tipo en tiempo de compilación. Esto permite una detección temprana de errores y una mayor confiabilidad en el código.

2. **Mejor soporte para herramientas de desarrollo:** TypeScript incluye un sistema de tipos que proporciona información adicional a las herramientas de desarrollo, como editores de código y entornos de desarrollo integrados (IDE). Esto permite una mejor autocompletación de código, navegación y detección de errores en tiempo real, lo que mejora la productividad del desarrollador.

3. **Compatibilidad con JavaScript:** Como TypeScript es un superset de JavaScript, todo código JavaScript válido es también código TypeScript válido. Esto significa que los desarrolladores pueden adoptar TypeScript gradualmente en proyectos existentes sin necesidad de reescribir todo el código.

4. **Características modernas de ECMAScript:** TypeScript admite las características modernas de ECMAScript (la especificación en la que se basa JavaScript), lo que permite a los desarrolladores utilizar sintaxis y características más recientes incluso si el entorno de ejecución no lo soporta completamente.

5. **Comunidad activa y amplia:** TypeScript tiene una comunidad activa y en crecimiento, con una gran cantidad de bibliotecas y herramientas disponibles. Además, está respaldado por Microsoft, lo que garantiza su continuidad y soporte a largo plazo.

---

# ¿Cómo funciona TypeScript?

TypeScript es un lenguaje de programación compilado, lo que significa que el código TypeScript se compila a código JavaScript antes de ser ejecutado en el navegador o en un entorno de Node.js. El proceso de trabajo con TypeScript generalmente implica los siguientes pasos:

1. **Declaración de tipos de datos:** En TypeScript, se pueden declarar tipos de datos para variables, funciones, parámetros y otros elementos del código. Esto permite especificar el tipo de valor que se espera en cada caso y ayuda a prevenir errores de tipo.

2. **Compilación del código TypeScript:** Una vez que se ha escrito el código TypeScript, se debe compilar a código JavaScript utilizando el compilador de TypeScript. Esto se puede hacer a través de la línea de comandos o mediante herramientas de compilación integradas en los IDE.

3. **Ejecución del código JavaScript resultante:** El código JavaScript resultante de la compilación de TypeScript se puede ejecutar en cualquier entorno que admita JavaScript, como navegadores web, servidores Node.js u otros entornos de ejecución.

---

# Conclusiones

TypeScript es una herramienta poderosa para los desarrolladores que desean agregar tipos estáticos y características modernas a sus proyectos JavaScript. Proporciona una mayor seguridad en tiempo de compilación, mejor soporte para herramientas de
