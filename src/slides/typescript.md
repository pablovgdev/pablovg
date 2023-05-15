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

## ¿Cómo añadir tipos?

```ts
// Variables
const variable: Type = value;
```

```ts
// Funciones
function functionName(param1: Type, param2: Type): ReturnType {
  return value;
}
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

# [TypeScript](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAbgQwE4EsECMA2BTAXDaVMAcxgB8YwBXAW3WyRgF4YAiACW00xBgHUQSTABNWAbgBQElADMYACigBPAA7YQcxKgw5mTFq0IoSrAJQwA3hJgxQkEDgB0PYvNYBJWCggwEMKNgAHrBGJqaSAL4wXBDYlta24BAO2M4grh5ePn7UdAxmkUA) paso a paso

## Comprobación de tipos primitivos

Con la keyword `typeof` podemos comprobar el tipo de una variable primitiva

```ts
const variable: string | number = "Hello World";

if (typeof variable === "string") {
  console.log("It is a text string");
} else {
  console.log("It is a number");
}
```

---

# [TypeScript](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgJIAVoGcD2JkDeAUMsiHALYQBcyWYUoA5gNwnJxM1kCuFARtDYBfIkQR56yAFY4AFiFoZseZAF5C7clVoAiAFLyQugDTtO3AEwAOM8LZEA9I+QBhVQAcoOJlEqJgAGf8HEYIcDgAEzgOZBx+aQgwHCxxABs4LCxkTChcfGAKDzSIKnBs5TzVYlIJEHooHgRkqAAKDx5+NOAEMkpuBuYTZA6uno4uWhA+QSgASkJRUXFJMBk4EG5c-PUyCAB3HJUQVoMNiFNkSwA2OZYgA) paso a paso

## Interfaces y clases

```ts
interface IPerson {
  name: string;
  age: number;
}

const john: IPerson = {
  name: "John",
  age: 28,
};

// Con programación orientada a objetos
class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

const jane: Person = new Person("Jane", 26);
```

---

# [TypeScript](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgJIAVoGcD2JkDeAUMsiHALYQBcyWYUoA5gNwnJxM1kCuFARtDYBfIkQQAbOFizJMUXPmAUADhIhVwsjNjyF2CPPSg8EYHFAAUKnvwnAEZSt2PMANMht2HHLrRB8glAAlISiouJSMsgAohIwyBAAHpAgACay8ophkdKyABJ8cPjJqRlyuvgEEYYg9HQ4VHjcWXoAvGQQAO6x8ZYARAAyEEw4Uf0eAEwAHMFsRMAJlrhNICig9MVIOAlxMKHEpLW46gB0EjhMA6hgyMCyxYnx-XNEwqQQEljrSysQzXc6mAtv8EoUKMUDgYjGMIOdLtdbvcOMgABZFEAvERAA) paso a paso

## Comprobación de tipos de instancias de clases

Con la keyword `instanceof` podemos comprobar el tipo de una instancia de una clase

```ts
class Elf extends Person {}
class Human extends Person {}

const someone: Person = new Elf("Legolas", 28);

if (someone instanceof Elf) {
  console.log("It is an elf");
} else if (someone instanceof Human) {
  console.log("It is a human");
}
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

# [TypeScript](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwghsKBeKBvAUFKA7OBbCALigGdgAnAS2wHMBuTKMOAdxOOwFc8AjCchgF8G6UJCgAhSuQAmyNI1wFiZKrQZYW1Guxzc+A9MPToAxgHtsZJhGABZOAGt+8gBSRgAFXBEoAIlMEPygAH38eaRk-AEpieEQwqVlkAD5GD29xJGz-QOBggH40HHxfPwAZTgAPcz8AGiZWXQAWKEEoYlQS5X8ABXMAGxB6qC1aXQAmNpELK0RKEni3DziEUMlI2Jt5klg1pBT-ZjZg6m2Zy2sFpLkUd1tVhI3ZLY8oBefbtKx7xDhdm7RAB0Yx0UAAhDlONgZBAAGbUCAyC5zbbyDwOZzkVwBILREQAegJUAAIhASGBOABL3awqCcEhwcj03BQGicJkyShwKB04CUMDmBoQAZQfmC3nQAY8gBuTO5PAG0ECvG56EocKgrgW8V+0WiCiwsxIgwgQIG5hovyBxxIDT8tpiQigIpI0A1WuukT1BowRsupvNlutoLt-lDTqMQA) paso a paso

## Comprobación de tipos de objetos y guardias de tipo

Con la keyword `is` podemos hacer una guardia de tipo
Con la keyword `in` podemos ver si una propiedad existe en un objeto

```ts
const isCat = (pet: Cat | Bird): pet is Cat => "paws" in pet;
```

</br>

Con la keyword `as` podemos hacer una aserción de tipo
Evita usar `as` en la medida de lo posible, es una mala práctica

```ts
const isBird = (pet: Cat | Bird): pet is Bird =>
  (pet as Bird).wings !== undefined;
```

---

# [TypeScript](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwghsKBeKBvAUFKA7OBbCALigGdgAnAS2wHMBuTKMOAdxOOwFc8AjCchgF8G6UJCgAhSuQAmyNI1wFiZKrQZYW1Guxzc+A9MPToAxgHtsZJhGABZOAGt+8gBSRgAFXBEoAIlMEPygAH38eaRk-AEpieEQwqVlkAD5GD29xJGz-QOBggH40HHxfPwAZTgAPcz8AGiZWXQAWKEEoYlQS5X8ABXMAGxB6qC1aXQAmNpELK0RKEni3DziEUMlI2Jt5klg1pBT-ZjZg6m2Zy2sFpLkUd1tVhI3ZLY8oBefbtKx7xDhdm7RAB0Yx0UAAhDlONgZBAAGbUCAyC5zbbyDwOZzkVwBILREQAegJUAAIhASGBOABL3awqCcEhwcj03BQGicJkyShwKB04CUMDmBoQAZQfmC3nQAY8gBuTO5PAG0ECvG56EocKgrgW8V+0WiCiwsxIgwgQIG5hovyBxxIDT8tpiQigIpI0A1WuukT1BowRsupvNlutoLt-lDTqMQA) paso a paso

## Cómo aplicar una guardia de tipo

```ts
const petMaker = (petType: "cat" | "bird"): Cat | Bird =>
  petType === "cat" ? { name: "Luxo", paws: 4 } : { name: "Poly", wings: 2 };

const pet = petMaker("cat");

// Después de usar una guardia de tipo, el tipo de la variable cambia
if (isCat(pet)) {
  console.log(pet.paws);
} else if (isBird(pet)) {
  console.log(pet.wings);
}
```

---

# [TypeScript](https://www.typescriptlang.org/play?#code/Q) paso a paso

## [Diferencia](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) entre `interface` y `type`

Usa `interface` siempre, principalmente para definir tipos de objetos:

```ts
interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = { name: "John", age: 28 };
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
