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

# Introducción a TypeScript ([Handbook](https://www.typescriptlang.org/docs/handbook/intro.html))

- TypeScript -> <span style="color: dodgerblue">TS</span>
- JavaScript -> <span style="color: yellow">JS</span>

---

# ¿Qué es TypeScript?

- Es un superset de <span style="color: yellow">JS</span> desarrollado en 2012 en **Microsoft** por **Anders Hejlsberg** (Creador de C#)
  - Amplía la funcionalidad de <span style="color: yellow">JS</span> para agregarle tipado
  - El código <span style="color: dodgerblue">TS</span> se compila en código <span style="color: yellow">JS</span>
  - Todo código <span style="color: yellow">JS</span> es código valido de <span style="color: dodgerblue">TS</span>

---

# ¿Por qué se creó TypeScript?

- <span style="color: yellow">JS</span> es un lenguage bastante extraño ([wtfjs](https://github.com/denysdovhan/wtfjs))
  - Fue creado en 10 días por Brendan Eich durante la guerra de los navegadores
- Tener variables tipadas tiene muchas ventajas para proyectos grandes
  - Mejor detección de errores
  - Mejor autocompletado
  - Mejor refactorización
- Coincidió con la revolución de los frameworks
  - <span style="color: red">AngularJS</span>
  - <span style="color: dodgerblue">ReactJS</span>
  - <span style="color: green">VueJS</span>

---

# [TypeScript](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAZgSwE7QHIEMC2BTAXDaJBMAcxgF4YAiABXQCMAbEKgbgChRJZ0S8YwAV0z1sSCjABMADg5doMBBACy2MFBBJ89ECEbZ0YCVCSDsrIA) paso a paso

## ¿Cómo añadir tipos a las variables?

```ts
const variable: Type = value;
```

Ejemplo:

```ts
const name: string = "Pablo";
const age: number = 28;
const isMentor: boolean = true;
```

---

# [TypeScript](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABABwE4zFAIgQyjgCmBlQGcoA5HAWwFMAuRc9MAcwBpEAbHcquxswwdEtajhhdBUFqwCUiAN4AoRGsQQEpOF1oA6LnFZESfGrU48zdTmIlc5AbmUBfZctCRYCFCygEoWgAPKEYcMABPBRV1DS0dfUNjQJCnV3c0DH8ARjTMzAIAIgALWi5DQry-ANQQWiqsgjAQcoaC8AATWmIwWg62-0UXAYIAbQBdOSA) paso a paso

## Otros tipos de variables:

- `any`
- `void`
- `undefined`
- `null`
- `object`
- `array`

---

# [TypeScript](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgJIAVoGcD2JkDeAUMsiHALYQBcyWYUoA5gNwnJxM1kCuFARtDYBfIkQR56yAA5x+AGxy0M2PMgC8hduSq0AROjmK9AGnaduAJgAcZ4WyIB6R8gDCa6VBxMolRMABn-BxGCHA4ABM4DmQcfgArCDAcLHF5OCwsZEwoXHxgCml5CCpwLJVctWJSCRB6KB4EZKgACmkeBWAEMkpueuYTGQ75Lo4uWhA+QSgASkJRUXFJMGQI4AgmJWzVfE0QCAB3bcqQFr0AEXXN02RLADYZliA) paso a paso

## Interfaces y clases

```ts
interface IPerson {
  name: string;
  age: number;
}

const pablo: IPerson = {
  name: "Pablo",
  age: 28,
};

// Con programación orientada a objetos
class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

const diego: Person = new Person("Diego", 26);
```

---

# [TypeScript](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwghsKBeKBvAUFKA7OBbCALigGdgAnAS2wHMBuTKMOAdxOOwFc8AjCchgF8G6UJCgAhSuQAmyNI1wFiZKrQZYW1Guxzc+A9MPToA9KagBJbMH4kIAYweUAz9mIBlAPYAbL1D8SKAQqHk5gLyCHLzxObAgSdGjsMiYIYAA5fCJYBCgAH0lpORRUHGziACIAGU4ADy9KgBomVl0AFhatWl0ABihjMwsAVWxXdygAFS8ZSIC5kMowiMTk1MhgAEEfH2J4RAAyItl5MqUcyoAFXxBm1rZiXq7tXQAmAbogA) paso a paso

## Operaciones de tipos

```ts
type Cat = {
  name: string;
  paws: number;
};

type Bird = {
  name: string;
  wings: number;
};

// Intersección: Solo los atributos comunes
const petName: Cat | Bird = { name: "Luxo", paws: 4, wings: 0 };

// Unión: Todos los atributos
const petAll: Cat & Bird = { name: "Poly", paws: 0, wings: 2 };
```

---

# [TypeScript](https://www.typescriptlang.org/play) paso a paso

## [Diferencia](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) entre `interface` y `type`

Usa `interface` siempre, principalmente para definir tipos de objetos:

```ts
interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = { name: "Pablo", age: 28 };
```

Utiliza `type` para definir tipos de datos primitivos:

```ts
type Color = "red" | "blue" | "green";
```

---

# ¿Cómo se usa TypeScript?

- Utilizar la extensión de archivo `.ts` en vez de `.js`
- Compilar usando el comando `tsc`
  - También se puede ejecutar directamente con `ts-node`

---

# ¿Preguntas?
