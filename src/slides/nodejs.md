---
theme: default
class:
  - invert
paginate: true
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap');

section {
  font-family: 'Readex Pro', sans-serif !important;
}
</style>

# Introducción a <span style="color: green">NodeJS</span>

---

# ¿Qué es <span style="color: green">NodeJS</span>?

Es un entorno de ejecución de <span style="color: yellow">JS</span> desarrollado en 2009 por **Ryan Dahl**

- Utiliza el motor de <span style="color: yellow">JS</span> **V8** de **Google**
- Permite ejecutar <span style="color: yellow">JS</span> fuera del navegador
- Usa un modelo asíncrono y orientado a eventos
- Facilita la creación de servidores web escalables

---

# ¿Por qué se creó <span style="color: green">NodeJS</span>?

Antes los servidores eran síncronos y utilizaban paralelismo:

- Por defecto, una petición tenía que esperar hasta que el servidor terminaba de procesarla
- Se creaban hilos para cada petición para que el servidor no se bloqueara
- Esto era muy ineficiente, ya que los hilos consumen muchos recursos y son limitados

---

# ¿Cómo funciona <span style="color: green">NodeJS</span>?

Aprovecha el modelo asíncrono del motor **V8** de Google:

- Utiliza un solo hilo para procesar las peticiones
- Las operaciones "rápidas" (no bloqueantes) se ejecutan en el hilo principal
- Las operaciones "lentas" (bloquantes) se delegan al sistema operativo (libuv)
  - Mientras, el hilo principal puede seguir procesando otras peticiones
  - Cuando la operación lenta termina, se ejecuta un callback

---

# Vídeo explicativo

<iframe width="800" height="600"src="https://www.youtube.com/watch?v=lqLSNG_79lI"></iframe>

---

# El ecosistema de <span style="color: green">NodeJS</span>

- Tiene el ecosistema más grande de paquetes de código abierto
- El gestor de paquetes es **npm** (Node Package Manager)
- Paquetes recomendados para hacer APIs:
  - [Express](https://expressjs.com) (El más popular y con más soporte)
  - [Fastify](https://www.fastify.io) (El más rápido y ligero)
  - [NestJS](https://nestjs.com) (El más estructurado y escalable)

---

# Extra: [Deno](https://deno.com/runtime), el nuevo Node

- Creado también por **Ryan Dahl** (creador de <span style="color: green">NodeJS</span>)
- Es nuevo entorno de ejecución de <span style="color: yellow">JS</span>
  - Mejora y actualiza muchas cosas de <span style="color: green">NodeJS</span>
- Está escrito en <span style="color: orange">Rust</span>

---

# ¿Preguntas?
