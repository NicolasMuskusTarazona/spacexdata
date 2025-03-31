# Temas



## API

 API de SpaceX : https://api.spacexdata.com/v3/rockets



## Temática a diagnosticar

Operadores, Condicionales, estructuras repetitivas, funciones, numbers, strings, objetos, spread desestructuración, colecciones de datos y asincronía async/await.



## Ejercicios



| N    | **Función**                                                  | Tipo de Dato Retornado Sugerido                            | **Temática Principal**                    | **Temáticas Secundarias**                  |
| ---- | ------------------------------------------------------------ | ---------------------------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| 1    | Filtrar los `engines` de tipo *merlin* y *raptor* y obtener `rocket_name` | `Colección de string` — Lista de nombres de cohetes        | Colecciones de datos, Objetos             | Condicionales, Funciones                   |
| 2    | Obtener una `description` corta usando `substring` delimitado por puntos | `string` — Texto corto con la primera oración              | Strings, Funciones                        | Colecciones de datos                       |
| 3    | Obtener solo los `name` de `payload_weights`                 | `Colección de string` —  Lista de nombres de cargas útiles | Colecciones de datos, Objetos             | Funciones, Destructuración                 |
| 4    | Calcular el total de los `cost_per_launch` de todos los rockets | `number` — Suma total de los costos                        | Operadores, Colecciones de datos, Numbers | Funciones, Estructuras repetitivas         |
| 5    | Calcular el rocket más liviano omitiendo su peso con carga   | `Object` — Objeto del rocket más liviano                   | Operadores, Objetos, Colecciones de datos | Funciones, Estructuras repetitivas         |
| 6    | Calcular el rocket más pesado omitiendo su peso con carga    | `Object` — Objeto del rocket más pesado                    | Operadores, Objetos, Colecciones de datos | Funciones, Estructuras repetitivas         |
| 7    | Obtener un listado de todas las fotos de `flickr_images`     | `Colección de string` — Lista de URLs de imágenes          | Colecciones de datos, Objetos             | Funciones, Spread                          |
| 8    | Obtener el `rocket_name` que permita perder más motores (`engine_loss_max`) | `string` — Nombre del rocket                               | Objetos, Condicionales, Operadores        | Funciones, Colecciones de datos            |
| 9    | Obtener los rockets(`id`,`rocket_id`,`rocket_name`,`active`, `first_flight`,`country`) ordenados por el más alto al más bajo | `Colección de Object` — Lista de rockets ordenados         | Colecciones de datos, Numbers, Operadores | Funciones, Estructuras repetitivas, Spread |
| 10   | Obtener los distintos materiales `landing_legs`              | `Colección de string` — Lista de materiales únicos         | Colecciones de datos, Objetos, Set        | Funciones, Strings                         |
| 11   | Obtener los distintos tipos de propulsores `propellant_1` y `propellant_2` | `Colección de string` — Lista de propelentes únicos        | Colecciones de datos, Objetos, Set        | Funciones, Strings                         |



## Rúbricas



| **Criterio**                                                 | **Insuficiente (1)**                                         | **Aceptable (2)**                                            | **Bueno (3)**                                                | **Excelente (4)**                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **1. Analiza el requerimiento planteado por el Trainer**     | No comprende el requerimiento, su solución es errónea o inexistente. | Requiere apoyo para comprender el requerimiento, su solución es parcial o poco clara. | Entiende el requerimiento con mínimos errores y desarrolla una solución funcional. | Interpreta con claridad el requerimiento, identifica correctamente el objetivo y propone una solución lógica y completa. |
| **2. Realiza preguntas si presenta dudas ante las indicaciones del Trainer** | No realiza preguntas a pesar de mostrar confusión o errores de interpretación. | Formula preguntas vagas o poco claras que no permiten mejorar su comprensión. | Realiza algunas preguntas pertinentes pero no profundiza en los aspectos más críticos del requerimiento. | Formula preguntas precisas, relevantes y orientadas a mejorar su comprensión del problema o los detalles técnicos. |
| **3. Comprende y extiende la estructura del código planteado** | No comprende el código base o sus modificaciones afectan negativamente la funcionalidad. | Modifica el código base con errores menores, su comprensión es parcial o limitada. | Realiza extensiones correctas del código base, aunque con oportunidades de mejora en optimización o estilo. | Comprende completamente el código base y es capaz de modificarlo o extenderlo de forma funcional y optimizada. |
| **4. Demuestra dominio en el requerimiento planteado por el Trainer** | La solución es incompleta, incorrecta o no relacionada con el requerimiento. | La solución cumple parcialmente con el requerimiento, con errores o ausencias conceptuales. | Resuelve el requerimiento de manera efectiva, aunque puede mejorar en claridad o eficiencia. | Elabora una solución eficiente, clara, escalable y ajustada al requerimiento; demuestra amplio conocimiento del tema. |



