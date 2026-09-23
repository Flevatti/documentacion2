---
sidebar_position: 1
---
# Python
- Python es un lenguaje de programación que usamos para darle instrucciones a la computadora. Es como aprender a hablarle a tu computadora para que haga lo que tú quieres.
#### ¿Cómo es esto?
- Imagina que tu computadora es como una persona que solo entiende un idioma muy específico: el lenguaje de la máquina (código binario o ensamblador). Nosotros, al programar, necesitamos un intérprete que traduzca lo que decimos al idioma que ella entiende. Python es como ese intérprete.
#### ¿Cómo es aprender Python?
- Es como aprender a tener una conversación con tu computadora, pero en un lenguaje que ambos pueden entender. Tú le das órdenes paso a paso, y Python se encarga de que la computadora las entienda y las ejecute.
- Por ejemplo, le puedes decir:
    - “Toma estos dos números y súmalos”
    - “Guarda este texto en una variable (RAM)”
    - “Repite este proceso 10 veces”
- Y la computadora lo hará, siempre y cuando se lo digas en el lenguaje correcto.
#### ¿Para qué se usa Python?
- Python es un lenguaje muy popular y se utiliza en muchos campos, como:
    - Aplicaciones web (como sitios de internet)
    - Desarrollo de software
    - Ciencia de datos (analizar grandes cantidades de información)
    - Machine Learning (ML) (enseñarle a la computadora a aprender de los datos)
#### ¿Por qué es tan popular Python?
- Es fácil de aprender, ideal para principiantes.
- Es muy eficiente: permite hacer muchas cosas con poco código.
- Se puede ejecutar en muchas plataformas diferentes (Windows, Mac, Linux, etc.).
- Es software gratuito y se puede integrar fácilmente con otros sistemas.

#### En resumen:
- Python es un lenguaje que entiende la computadora.
- Nosotros escribimos instrucciones paso a paso.
- Python actúa como un traductor entre tú y la computadora.
- Aprender Python es como aprender a hablar con tu computadora para que haga lo que tú necesitas.
- Se usa en muchos campos como web, datos, inteligencia artificial, etc.
- Es fácil de aprender, gratuito, y funciona en muchas plataformas.


## Python para la IA
- Python se ha convertido en el lenguaje preferido para la IA debido a su simplicidad, legibilidad, extensas bibliotecas y comunidad de apoyo.
- Tiene muchas bibliotecas relacionadas con el aprendizaje automático y el análisis de datos como NumPy, Pandas, TensorFlow, PyTorch y Scikit-learn.
- Entonces tenemos para abarcar estas áreas:
    - Machine Learning (aprendizaje automatico) : Utilizamos Scikit-learn que permite construir y desplegar modelos ML.
    - Deep Learning (Aprendizaje Profundo) : Utilizamos TensorFlow y PyTorch, que impulsan las redes neuronales y la arquitectura de aprendizaje profundo.
    - Ciencia de datos y análisis: Utilizamos NumPy, Pandas Y Matplobib para manipular y visualizar datos
    - Procesamiento de lenguaje natural (NLP): Utilizamos NLTK, Spacy y Transformers que son claves para trabajar con el lenguaje.
    - Automatización y Scripts: La simplicidad y flexibilidad de Python lo hacen perfecto para automatizar tareas repetitivas.

## Descarga
- Para descargarlo hay que ir a su [sitio web](https://www.python.org/) y en la sección de "Downloads" buscar la versión que se adapte a tu sistema operativo.
- Piénsalo como instalar un traductor que habla tanto el idioma de la computadora como Inglés.
- Editores para escribir el código en Python:
    - [Thonny](https://thonny.org/)
    - [Visual studio code](https://code.visualstudio.com/)
    - [Google Colab](https://colab.research.google.com/)
    - [Jupyter Notebooks (es un paquete de Python, que se parece a Google Colab)](https://jupyter.org/)

#### Imprimir por consola
- La función para escribir por consola (generar un output) es ``print(X)``, donde ``x`` es lo que se va  mostrar por consola.
```python
print("Hello World!")
```
- Puede recibir multiples parametros:



## Variables
- Las variables son como "cajas" que almacenan información.
- Sirven para almacenar información en la RAM.


```python
name = "Vivian" #String, es una cadena de texto
age = 15  # Integer, es un numero entero
height = 5.8 # Float, es un numero decimal
is_gamer = True # Boolean, es un valor logico, puede ser True o False
numbers = [1, 2, 3, 4, 5] # List, es una lista de elementos, en otros lenguajes se llaman arrays
coordinates = (10, 20) # Tuple, es una lista inmutable de elementos
person = {"name": "Vivian", "age": 15} # Dictionary, es una coleccion de pares clave-valor. En otros lenguajes se llaman objetos.
print(name)
print(age)
print(height)
print(is_gamer)
print(numbers)
print(coordinates)
print(person)
```
:::tip Tipado dinámico y Tipado fuerte
- A diferencia de lenguajes como Java y C++, Python es un lenguaje de tipado dinámico. Esto significa que el tipo de una variable se determina en tiempo de ejecución, no en tiempo de compilación. Por tanto, no es necesario declarar el tipo de una variable cuando se crea.
- - Los tipos de datos pueden ser: Integers, Floats, Strings , Lists, Tuple, Dictionaries, Booleans, etc
- A pesar de ser dinámico, el tipado de Python es fuerte. Esto significa que el intérprete de Python no realiza conversiones automáticas entre tipos incompatibles. Esto evita muchos errores sutiles.
:::

- La funcion ``print()`` puede recibir la cantidad de parametros que quieras:

```python
print(name, age, height, is_gamer)
```

### Alcance y vida útil de las variables (Scope)
- El scope tiene dos tipos diferentes:
  - Local Scope: Las variables solo son accesibles dentro del bloque de código donde se definió. Por ejemplo si la creas dentro de una función esta es accesible solo dentro de esta. Las variables locales solo existen mientras el bloque de código se ejecuta.
  ```python
  def greet():
       message = "Hello World" ## Variable local 
       print(message)


  greet()
  # print(message) Error - La variable message no existe
  ``` 
  - Global Scope: Las variables son accesibles en todo el programa. Las variables globales persisten a lo largo del programa a menos que se modifiquen.
  ```python
  greeting = "Hi" ## Variable global

  def say_hello():
       print(greeting + " from inside the function")

  say_hello()
  print(greeting + " from outside the function")
  ``` 





:::tip Bloque de código
- Las Llaves (``{}``) no existen en Python. En lugar de usar llaves para especificar bloques de código, Python usa dos puntos ``:`` y ``sangría`` (indentación, 4 espacios en blanco). Todo lo que esté indentado (tenga el mismo espacio) después del ``:`` pertenece al  bloque.  Todas las líneas que tengan la misma indentación (y estén una después de la otra) pertenecen al mismo bloque de código.
:::


## Input()
- La función ``input()`` en Python le solicita datos al usuario a través de la consola.
- Pausa la ejecución del programa, para mostrar un mensaje que le indica al usuario que ingresar y espera a que escriba algo y presione Enter.
- Como parametro puede recibir un string que se mostrara como un mensaje para el usuario, guiándolo sobre qué ingresar.
- Devuelve una cadena (string): independientemente de lo que escriba el usuario (números, letras, símbolos), la función ``input()`` siempre devuelve los datos ingresados ​​como una cadena.

```python
user_name = input("Whats your name?")
print(user_name)
```

## Concatenacion
- En Python, puedes concatenar cadenas/strings usando el operador ``+``.

```python
user_name = input("Whats your name?")
print("welcome " + user_name + "!!")
```

#### Dividir un string largo en varias líneas
- En Python, podemos dividir una línea larga en varias líneas dentro del código usando el símbolo `\`, lo que permite **escribir una sola cadena (string) en varias líneas**. Sin embargo, esto **no se considera concatenación**, ya que no une cadenas distintas, sino que permite escribir una sola cadena de forma más legible.
- Ejemplo:

```python
mensaje = "Esta es una línea larga " \
    "que se divide en varias líneas " \
    "para mejor lectura."
print(mensaje)
```

:::tip Observación
- El símbolo `\` se coloca al final de la línea para indicar que la cadena (string) continúa en la siguiente línea, , donde se define otro string, pero que **en realidad es el mismo** (también pertenece a `mensaje` y  es la continuación del string anterior).
- Lo anterior es lo mismo que `mensaje = "Esta es una línea larga que se divide en varias líneas para mejor lectura."`
:::



## Operaciones matematicas
```python
x = 3
y = 10

print(x + y)   # Suma
print(y - x)   # Resta
print(x * y)   # Multiplicación
print(x / y)   # División (real, devuelve un número flotante) 
print(y // x)  # División  (entera, descarta la parte decimal)
print(y % x)   # Módulo (resto de la división)
print(y ** x)  # Potencia / (Elevar un número a una potencia) / 10 elevado a la 3 → 10 × 10 × 10 = 1000
```


:::tip Potenciación o Potencia
- **Potenciación** es multiplicar un número por sí mismo varias veces.
- La potenciación consiste en multiplicar un número (la **base**) por sí mismo tantas veces como indica el **exponente**.
- Por ejemplo: 
    - 10 elevado a la 3 (10<sup>3</sup>):
        - (10 elevado a la 3) significa: 10 × 10 × 10 = 1000
    - El número de abajo (10) se llama base, y el de arriba (3) se llama exponente.
    - El exponente te dice cuántas veces debes multiplicar la base por sí misma.
:::


:::tip
- Las operaciones son casi las mismas que en otros lenguajes por lo que puede consultar en estos dos links:
  - [JavaScript - Operadores](https://flevatti.github.io/guide-software-development/docs/Javascript/basico#operadores)
  - [C# - Operadores](https://flevatti.github.io/guide-software-development/docs/CSharp#operadores-aritm%C3%A9ticos)

:::


## Condicionales
#### If / Else
```python
age = int(input("Enter you age:"))

if age >= 18:
  print("You are an adult.")
else:
  print("You are a minor.")
```

:::tip Observación 
- En Python, no necesitas paréntesis generalmente para el ``if``, ``else``, etc. Puedes ponerlos si quieres (por ejemplo, para claridad en condiciones complejas), pero no son obligatorios.
- Las Llaves (``{}``) no existen en Python. En lugar de llaves, Python usa dos puntos ``:`` y ``sangría`` (indentación, 4 espacios en blanco) para marcar bloques de código. Todo lo que esté indentado (con 4 espacios o una tabulación) después del ``:`` pertenece al bloque.  Todas las líneas que tengan la misma indentación (y estén una después de la otra) pertenecen al mismo bloque de código.
- ``int(x)``  intenta convertir ``x`` en un número entero (int). Falla si no se puede convertir (ej. tipo de dato no compatible).
:::

#### elif
- Equivale al ``If else``

```python
age = int(input("Enter you age:"))

if age >= 18:
  print("You are an adult.")
elif age > 13:
  print("You are a teenager.")
else:
  print("You are a minor.")
```

#### Condiciones anidadas
```python
age = 25
if age > 18:
    if age < 30:
        print("Young Adult")
    else:
        print("Adult")
```


## Bucles
### For
- El `for in` de Python Equivale al `for of` de Javascript.
```python
# Recorre cada valor del iterable que genera range(10) y almacena cada valor en la variable i
for i in range(10): #range(10) == [0,1,2,3,4,5,6,7,8,9]
     print(i)
```

:::tip Método range()
- Crea un objeto de tipo ``range``.
- Es iterable, así que se puede recorrer con ``for ... in``.
- Representa una secuencia de números desde un inicio (por defecto es 0) hasta un fin (excluyendo el fin), con un paso (por defecto 1). Es muy eficiente en memoria: no almacena todos los números a la vez.
- Un objeto ``range``, solo guarda el inicio, fin y paso (Define cuánto avanzas entre un número y el siguiente), y genera cada número cuando lo necesita.
- Cuando lo usas en un bucle, se crea un iterador temporal para recorrer todos los valores.
- Sintaxis: range(start, stop, step):
  - start (Opcional): Define el número de inicio, el número en que comienza la secuencia. Es un integer. Su valor por defecto es 0.
  - stop (Obligatorio): Define cuál es el fin, el número en que termina la secuencia (excluyéndolo). Es un integer.
  - step (Opcional): Define cuánto avanzas entre un número y el siguiente. Es un integer. Su valor por defecto es 1.
- Por lo tanto, con un solo parametro definís el stop, con dos definís el start y el stop.
:::



### While

```python
count = 0
while count < 5:
  print("Count is:", count)
  count +=1
```

#### Uso de break
- En Python, la instrucción  ``break `` cierra o deja de ejecutar el bucle que esta activo.
- Debe poner la instrucción ``break `` dentro del bloque de código que pertenece al bucle, generalmente después de una instrucción if condicional.
- Ejemplo:
```Python
number = 0

for number in range(10):
    if number == 5:
        break    # break here

    print('Number is ' + str(number))

print('Out of loop')
```

:::tip Observación 
- En el bucle for, existe una instrucción if que presenta la condición de que si la variable number es equivalente al  5, entonces el bucle se romperá.
- Para saber cuándo estamos fuera del bucle, hemos incluido una instrucción print() final fuera del bucle for.
- Método `str(valor)`: Convierte el valor en una cadena de texto (string) 
:::



#### Uso de Continue
- En Python, la instrucción  ``continue `` omite o rompe la iteración actual para empezar la siguiente, o sea el programa volverá a evaluar la condición del bucle.
- Debe poner la instrucción ``continue `` dentro del bloque de código que pertenece al bucle, generalmente después de una instrucción if condicional.
- Ejemplo:
```python
for number in range(10):
    if number == 5:
        continue    # continue here

    print('Number is ' + str(number))

print('Out of loop')
```

:::tip Observación 
- A pesar de que se omite la iteración del número 5, el bucle continúa con su ejecución.
:::

#### Uso de Pass
- A diferencia de ``break`` (que detiene el bucle) o ``continue`` (que salta a la siguiente iteración), ``pass`` simplemente "no hace nada" y se sigue leyendo el código normalmente.
- Es como un "aquí no pasa nada, pero necesito una línea de código para que no dé error".
- Se usa cuando sintácticamente Python exige que haya código, pero tú no quieres hacer nada.
- En Python, los bloques de código (como los de if, for, while, def, etc.) no pueden estar vacíos. Si intentas dejarlos vacíos. Para evitar ese error, usas ``pass``.
- Ejemplo:
```python
number = 0

for number in range(10):
    if number == 5:
        pass    # pass here

    print('Number is ' + str(number))

print('Out of loop')
```

:::tip Observación 
- Al usar la instrucción ``pass`` en este programa, observamos que el programa se ejecuta exactamente como lo haría si no hubiera instrucción condicional en el programa. La instrucción ``pass`` le indica al programa que ignore esa condición y continúe ejecutando el programa como de costumbre.
:::

## Lista
- También denominadas array en otros lenguajes, las listas en Python son objetos de tipo colección (iterable, se puede recorrer), que permiten almacenar cualquier tipo de dato y acceder a cada valor  utilizando un índice.
- Almacena elementos de diferentes tipos en un orden particular. 
- Las listas en Python se implementaron como listas doblemente enlazadas, por lo que desde un elemento se puede acceder tanto al siguiente en la lista como al anterior.
- La forma de crear una lista es usando el constructor de listas ``list`` o simplemente usando ``[]``.
- Son mutables y dinámicas, o sea no hace falta especificar el tamaño de la lista y esta se puede modificar con el tiempo.


:::warning No confundir con Array
- Un array es un tipo de lista, que solo contiene elementos que pertenecen al mismo tipo de datos.
- Para declarar un array, se necesita importar el ``módulo de array``.
:::

#### Diferencias entre Lista y Array

| Lista (List) | Array (Arreglo) |
|--------------|-----------------|
| Puede contener elementos de diferentes tipos de datos | Solo contiene elementos del mismo tipo de dato |
| No necesita importar ningún módulo para declarar | Se debe importar explícitamente el módulo `array` para declarar |
| No puede manejar operaciones aritméticas directamente | Puede manejar operaciones aritméticas directamente |
| Preferida para secuencias cortas de elementos | Preferida para secuencias largas de elementos |
| Mayor flexibilidad para modificar datos (agregar, eliminar) | Menor flexibilidad, las modificaciones son elemento por elemento |
| Se puede imprimir toda la lista sin bucle explícito | Se requiere un bucle para imprimir o acceder a los elementos del array |
| Consume más memoria para facilitar la adición de elementos | Es más compacto en cuanto al tamaño de memoria |
| Las listas anidadas pueden tener diferentes tamaños  (cantidad de elementos)   | Los arrays anidados deben tener el mismo tamaño |
| Permite operaciones directas con funciones como: `count()`, `sort()`, `max()`, `min()`, `sum()`, `index()`, `append()`, `remove()` (Sin necesidad de importar nada adicional) | Se debe importar los módulos adecuados para operar de forma similar |
| **Ejemplo:** `mi_lista = [1, 2, 3, 4]` | **Ejemplo:** `import array arr = array.array('i', [1, 2, 3])` |


#### Crear una lista y recorrerla con for 
- El `for in` de Python Equivale al `for of` de Javascript.

```python
# Una lista
video_games = ["Game 1", "Game 2" , "Game 3"]

# Recorre cada valor de video_games y se almacena en la variable game
for game in video_games:
  print(game)

```

#### Recorrer por indice
- Son como los arrays de otros lenguajes:
```python
# Una lista
video_games = ["Game 1", "Game 2" , "Game 3"]

print(video_games[0])
print(video_games[1])
print(video_games[2])
```

:::tip
- Si usas números negativos en el índice podemos acceder a los ítems desde el último elemento:
  - `-1` : Último elemento
  - `-2` : Penúltimo elemento
  - etc
:::


#### Algunos métodos

```python
# Una lista
video_games = ["Game 1", "Game 2" , "Game 3"]

# Agrega un elemento al final de la lista
video_games.append("Game 4")

# Agrega un elemento en la posicion indicada por el primer parametro
# En este caso, agregamos "Game 6" en la posicion 1, si habia un elemento en esa posicion, el resto del array se acomoda hacia la derecha 
# (sumandole 1 a su indice)
video_games.insert(1, "Game 6")

# Cambiamos el valor de Game 2 (indice 1)
video_games[1] = "Game 8"

# Elimina un elemento por su valor
video_games.remove("Game 3") 

# Elimina un elemento por su indice
del video_games[0] # Elimina el primer elemento

# Elimina y retorna el ultimo elemento
print(video_games.pop())

print(video_games)
```

##### Corte de Listas
- El corte es una forma de obtener elementos de un lugar en particular de la lista.

```python
# Una lista
video_games = ["Game 1", "Game 2" , "Game 3"]


# Entre los corchetes se indican el índice inicial y final del corte: [indice_inicial:indice_final]
# Entonces se obtienen los elementos desde el índice inicial hasta el índice final - 1.
sliced_games = video_games[0:2]
print(sliced_games)  # Salida: ['Game 1', 'Game 2']
```









## Comentar
- Se hace con los siguientes caracteres:
  - ``#``
  -   ``Triples comillas de cualquier tipo``



```python
# Comenta solo una linea el simbolo símbolo #

'''
Con triples comillas podes crear un bloque de comentario multilinea.
Este bloque de comentario en realidad es un docstring 
Todo el texto que este dentro es un string.
Este bloque de comentario a diferencia del anterior (#), Python lo procesa como un string
y sirve para crear documentación
'''
```

## Funciones
- Se usa la palabra clave `def` seguida del nombre de la función  para crearla.
- La sintaxis es:
```python
def nombre_funcion(parametros):
  # Bloque de codigo
```
- Ejemplo:
```python
# Creamos una función
def say_hello():
  print("Hello from your very first function")

# Llamamos a la función
say_hello()
```

:::tip Observación 
- Las Llaves (``{}``) no existen en Python. En lugar de llaves, Python usa dos puntos ``:`` y ``sangría`` (indentación, 4 espacios en blanco) para marcar bloques de código. Todo lo que esté indentado (con 4 espacios o una tabulación) después del ``:`` pertenece al bloque.  Todas las líneas que tengan la misma indentación (y estén una después de la otra) pertenecen al mismo bloque de código.
:::

- Ejemplo con parámetros:

```python
def say_hello(person_name):
  print("Hello " + person_name     +" from your very first function")

say_hello("Federico")
```

- Ejemplo con `return`:

```python
def multiply(a,b):
  return a * b

print(multiply(5,7))
```

## Importar
- El sistema de importación de Python permite organizar y reutilizar código, usando la palabra clave ``import`` para acceder a funciones, clases o variables de otro módulo.
- Un modulo puede ser un:
  - Archivo (modulo) : Por lo general con extensión .py, en ocasiones .pyd si se trata de un módulo compilado.
  - Paquete : Una carpeta que en su interior contiene archivos u otros paquetes.
- Usando las palabras reservadas ``from`` e ``import`` que provee Python, podemos utilizar variables, funciones, clases, excepciones y cualquier otro objeto que estén dentro de un módulo.

#### Sintaxis
- Esta es la forma más común. Importa el módulo completo, y para usar sus elementos debes usar el nombre del módulo seguido de un ``punto``  (por ejemplo, `math.sqrt(16)` para la función `sqrt` del módulo `math`), como si el nombre del módulo fuera un objeto (Dictionary) que contiene todas las funcionalidades de este:
```python
import <nombre_modulo>
```
- Ejemplo:
```python title="mimodulo.py"
# mimodulo.py
pi = 3.141592
def sumar(a, b):
    return a + b
def es_par(n):
    return n % 2 == 0
```
```python title="principal.py"
# principal.py
import mimodulo
resultado = mimodulo.sumar(7, 5)
print(resultado)
print(mimodulo.pi)
```
:::tip
- Todos los import deben ir siempre, por convención, al inicio del archivo.
- Cuando importamos un módulo, le indicamos a Python que queremos hacer uso de algún método/variable/etc (objetos) del modulo. En este caso, estamos usando la función sumar() y la variable pi. No hemos utilizado es_par(), pero no hay inconveniente. No es necesario usar todas las funcionalidades del modulo.
- Nótese que al indicar  `import mimodulo `, no especificamos la extensión del archivo: el mimodulo podría ser un archivo  `mimodulo.py ` o  `mimodulo.pyd`; Python importará el primero que encuentre.
:::


#### ¿Donde buscara el módulo?
- El primer lugar donde buscará Python cuando le indicamos que debe importar un módulo es el directorio actual de trabajo (current working directory). El directorio actual de trabajo es la ubicación desde la cual un programa es ejecutado. Por ejemplo:
  - Si ejecutamos un archivo de Python desde la terminal, la ubicación de la terminal al momento de ejecutar el archivo es el directorio actual de trabajo.
  -  Si ejecutamos un archivo desde un editor de código (como Geany, Visual Studio Code o PyCharm), el directorio actual de trabajo por lo general es la misma carpeta donde se encuentra el archivo en cuestión.
- Si Python no encuentra el módulo en el directorio actual de trabajo, buscará en las carpetas `Lib` y `Lib/site-packages`, que se encuentran en el directorio de instalación de Python. De modo que cualquier módulo que se encuentre dentro de alguna de esas dos carpetas podrá ser importado desde cualquier ubicación.


:::tip Averiguar el directorio de instalación
- Para ver donde se instaló, hay que usar uno de estos dos comandos en la consola del SO:
- Windows: `where python` 
- Linux y macOS: `which python` 
:::

#### Lib
- Si revisamos la carpeta `Lib`, encontraremos ahí una gran cantidad de archivos (modulos) y paquetes que se incluyen con la  instalación de Python y proveen soluciones para problemas comunes (y otros no tanto). Por ejemplo, el módulo estándar `statistics` contiene una función mean() para calcular el promedio de una lista de números.
- En la carpeta `Lib/site-packages`  se almacenan los módulos (archivos)  y paquetes desarrollados por la comunidad (listados en `pypi.org`), los cuales podemos instalar vía `pip`, que es la herramienta oficial del lenguaje para gestionar paquetes de terceros.


#### Sintaxis con From
- Una sintaxis alternativa a la anterior es la siguiente:

```python title="principal.py"
# principal.py
from mimodulo import sumar, pi
resultado = sumar(7, 5)
print(resultado)
print(pi)
```

:::tip Observación
- Con el `from` indicamos el módulo y con el `import` las variables/métodos/etc que queremos obtener del módulo.
- Al usar la forma `from ... import ...`, le indicamos a Python específicamente que queremos importar de un módulo en particular.
- Lo que especificamos con `import`, se incorporan a nuestro archivo.
- De esta forma, no utilizamos un `punto` para acceder a su contenido.
:::


:::tip
- Es importante saber que no hay diferencia de rendimiento entre este método y el anterior (`import`). Cuando usamos la sintaxis `import mimodulo`, simplemente le indicamos a Python que en algún momento haremos uso de algo dentro de mimodulo; luego se importarán  cuando sean utilizados. ¿Cuál de las dos sintaxis conviene utilizar, entonces? Depende de lo que se esté importando. En la mayoría de los casos es indiferente, y podemos elegir la sintaxis que nos resulte más cómoda. Pero en ciertas ocasiones una sintaxis tiene mejor legibilidad que otra. Si tenemos una línea de estas características:
  ```python 
  import twisted.python.threadpool
  tp = twisted.python.threadpool.Threadpool()
  ```
- Para evitar tener que indicar el nombre completo del módulo (`twisted.python.threadpool`) para utilizar la clase `Threadpool`, seguramente sea más sencillo:
  ```python 
  from twisted.python.threadpool import Threadpool
  tp = Threadpool()
  ```
- A veces, en cambio, usar el nombre del módulo como prefijo es muy esclarecedor, por lo cual conviene usar `import`. Por ejemplo, la función `choice()` («elegir») dentro del módulo estándar `random` («aleatorio»), selecciona un elemento aleatoriamente de la lista que pasamos como argumento. Si optamos por `from random import choice`, usaríamos la función de esta manera:
  ```python 
  print(choice([1, 2, 3, 4, 5]))
  ```
- Al ver esta línea de código, no sabemos con qué criterio `choice()` selecciona un elemento. En cambio, esto es bien claro:
  ```python 
  print(random.choice([1, 2, 3, 4, 5]))
  ```
- Cuando nos enfrentamos a un caso donde ninguna sintaxis tiene evidentemente un beneficio sobre la otra (en cuanto legibilidad), lo mejor es seguir la convención que encontremos en los ejemplos de la documentación oficial del módulo con el que estemos trabajando.
:::

#### Añadir Alias
- Con la palabra clave `as` podemos asignarle un nombre  más corto o diferente al módulo importado.
- Por ejemplo:

```python title="principal.py"
# principal.py
import mimodulo as operacionesMatematicas
resultado = operacionesMatematicas.sumar(7, 5)
print(resultado)
print(operacionesMatematicas.pi)
```
:::tip Observación
- En este ejemplo `mimodulo` se importa, pero le asignamos otro nombre.
- En este caso con el nombre `operacionesMatematicas` accedemos a las funcionalidades del `mimodulo`.
:::

### Importación circular
- El sistema de importación de Python está diseñado para ser sencillo e intuitivo. En la mayoría de los casos, puedes organizar tu código en varios archivos y unirlo todo mediante sencillas sentencias `import`.
- Sin embargo, cuando los módulos empiezan a depender unos de otros, puedes encontrarte con un problema frustrante: la importación circular. Estos errores suelen aparecer de forma inesperada, con mensajes confusos como:
```Python
ImportError: cannot import name 'X' from 'Y' (most likely due to a circular import)
```

#### ¿Qué es una importación circular en Python?
- Una importación circular se produce cuando dos o más módulos de Python dependen entre sí, directa o indirectamente. Cuando Python intenta importar estos módulos, se queda atascado en un bucle y no consigue completar el proceso de importación.
- He aquí un ejemplo sencillo en el que intervienen dos módulos:

```python title="module_a.py"
# file: module_a.py
from module_b import func_b

def func_a():
    print("Function A")
    func_b()
```

```python title="module_b.py"
# file: module_b.py
from module_a import func_a

def func_b():
    print("Function B")
    func_a()
```
- La ejecución de cualquiera de estos archivos producirá el siguiente error:
```Python
ImportError: cannot import name 'func_a' from 'module_a' (most likely due to a circular import)
```
##### ¿Qué ocurre aquí si ejecutamos module_a.py? 
- Python comienza cargando `module_a,` que importa `module_b`. Pero entonces `module_b` intenta importar de nuevo `module_a`, y este **todavia no tiene  definido func_a**. Como Python **sólo inicializa cada módulo una vez**, acaba trabajando con una versión parcialmente cargada de `module_a`, y la importación falla.
- Esto crea un ciclo de dependencia. Como todavia no esta definido `func_a`, encuentra definiciones que faltan y lanza un error.





#### Cómo arreglar las importaciones circulares
- Una vez que hayas identificado una importación circular en tu código, la buena noticia es que hay varias formas eficaces de resolverla. Recorramos las técnicas más fiables.

#### Refactoriza tus módulos
- A menudo, las importaciones circulares se producen porque los módulos hacen demasiado o están demasiado conectados. Una de las soluciones más limpias es reorganizar tu código:
  - Trasladar la funcionalidad compartida a un tercer archivo (por ejemplo, common.py, utils.py, o base.py)
  - Fusionar dos módulos interdependientes en uno solo, si lógicamente forman parte de la misma unidad.
#### Utiliza importaciones locales o perezosas
- En lugar de importar al principio de un archivo, coloca la importación dentro de la función o método que realmente la utiliza. Esto retrasa la importación hasta que se llama a la función, después de que todos los módulos hayan terminado de cargarse. Aquí tienes un ejemplo de importación perezosa dentro de un método:
```Python
# file: physics.py
def apply_gravity(entity):
    from entities.post import Player  # Local import
    if isinstance(entity, Player):
        print("Applying gravity")
```

#### Utiliza `'import module'` en lugar de `'from module import ...'`
- Utilizar `import module` aplaza la resolución de nombres (es decir, el momento en que Python realmente busca y accede a una variable, función o clase dentro del módulo). Realiza la  resolución de nombres cuando se utiliza algo del modulo en el código durante la ejecución. Esto contrasta con la importación directa (`from module import name`), que resuelve el nombre inmediatamente al importar, es decir, antes de que el resto del módulo se haya cargado por completo.
- Al posponer el acceso al nombre hasta el momento en que se necesita (por ejemplo, dentro de una función o más adelante en el flujo del programa), `import module` puede evitar errores causados por búsquedas anticipadas en situaciones de importaciones circulares, donde un módulo intenta acceder a un nombre que aún no ha sido definido porque el otro módulo todavía está en proceso de carga.
- El siguiente código es un ejemplo de importación directa que provoca una búsqueda anticipada:
```python
from physics import apply_gravity  # May cause a circular import
```
- Un enfoque más adecuado es posponer el momento en que accedes a un atributo de un objeto:
```python
import physics
def update():
    physics.apply_gravity()
```
:::tip
- Este método es sencillo y eficaz en muchos casos, sobre todo cuando sólo necesitas acceder ocasionalmente a una función o clase.
:::

#### Mover las importaciones al fondo
En algunos casos, basta con colocar la sentencia `import` al final del archivo, después de las definiciones de clase/función, para resolver el problema. He aquí un buen ejemplo:
```python
# file: module_a.py
def func_a():
    print("Function A")
from module_b import func_b  # Import after definitions
```
#### Utiliza importlib para importaciones dinámicas
- El módulo `importlib` de Python te permite importar otros módulos "manualmente" mientras tu programa se está ejecutando, en lugar de hacerlo al inicio con `import`.
- Esto es útil cuando no sabes de antemano qué módulo necesitarás, como en sistemas de plugins o cuando quieres cargar funcionalidades solo si hacen falta.
- Aquí tienes un ejemplo utilizando `importlib.import_module`
```python
import importlib
def get_player_class():
    entities = importlib.import_module("entities.post")
    return entities.Player
```


## Como se ejecuta un archivo Python
- Python no se compila de la misma manera que otros lenguajes como C o Java. En realidad, Python es un lenguaje interpretado, lo que significa que el código fuente no se convierte directamente a código máquina, sino que pasa por una etapa intermedia.
- Primero, el código se compila a un bytecode (un lenguaje intermedio), el cual es almacenado en archivos `.pyc`. Luego, un intérprete (como CPython) ejecuta ese bytecode línea por línea, convirtiéndolo en código que la máquina puede leer y ejecutar.


#### Ciclo de vida de un script en Python
##### 1. Lectura del archivo
- Python lee el archivo con extensión `py`.
##### 2. Compilación a bytecode
- El código fuente se compila a bytecode (un lenguaje intermedio).
- Este bytecode se guarda temporalmente en la carpeta `__pycache__/` con el nombre `archivo.cpython-XX.pyc` (donde XX es la versión de Python).
- Si el archivo `.py` no ha cambiado desde la última vez, Python reutiliza el archivo `.pyc` existente para ganar velocidad.
##### 3.  Ejecución del bytecode
- El intérprete de Python (CPython por defecto) lee y ejecuta el bytecode generado.
- El intérprete lo convierte en codigo maquina y ejecuta ese codigo maquina.

#### Relación entre tiempo de compilación y tiempo de ejecución
##### Tiempo de compilación
- Python convierte el código fuente (tu archivo `.py`) en bytecode (código intermedio).
- Este bytecode se almacena en memoria (o en archivos `.pyc` en la carpeta __pycache__ para reutilización).
- En esta fase, Python analiza la sintaxis: si hay errores como `print("hola"` (falta paréntesis), falla aquí.
- No se ejecuta ninguna lógica de tu programa aún (no se llaman funciones, no se asignan variables, etc.).
##### Tiempo de ejecución
- Python interpreta y ejecuta el bytecode línea por línea.
- Aquí es donde:
  - Se definen funciones y clases (¡sí, definir una función es una operación en tiempo de ejecución!)
  - Se ejecutan sentencias `import`
  - Se asignan variables
  - Se llaman funciones
  - Se acceden a atributos como modulo.funcion.

####  Cómo ejecutar un archivo Python
1. Asegúrate de tener Python instalado:
- Abre tu terminal o consola y escribe uno de los dos comandos:
```cmd
python --version
python3 --version
```

2. Para ejecutar un archivo Python, puedes usar uno de los dos comandos:
```
python ubicacionDelArchivo.py
python3 ubicacionDelArchivo.py
```
- Ejemplo:
```cmd
python mi_script.py
```
- Alternativamente, puedes ejecutarlo desde cualquier lugar si usas la ruta completa:

```cmd
python /ruta/completa/a/mi_script.py
```


## Manejar dependencias 
#### Pip
- `pip` es un sistema de gestión de paquetes para Python. Su nombre proviene de “Pip Installs Packages” o “Pip Instala Paquetes” en español.
- Con `pip`, podemos instalar, actualizar y desinstalar paquetes de Python de manera sencilla.
- Es el equivalente a `npm` de Node.js . La diferencia es que con `npm`, es que `npm install` instala de forma predeterminada los paquetes localmente en un proyecto, mientras que `pip install` de forma predeterminada los instala globalmente.
- Con `pip` puedes instalar paquetes de Python, que son, efectivamente, código escrito por otros programadores (o comunidades) para resolver problemas comunes o proporcionar funcionalidades específicas (como hacer peticiones HTTP, trabajar con fechas, crear interfaces gráficas, manejar datos, etc.). Una vez instalado un paquete con `pip`, puedes importarlo y usarlo en tu propio proyecto. 





#### Comandos

##### Comprobar versión
- En la mayoría de las distribuciones de Python modernas, `pip` ya está incluido de forma predeterminada. Sin embargo, para asegurarte de tener la última versión, puedes verificar si está instalado y su versión:
```powershell
pip --version
```
##### Instalar `pip`
- Si `pip` no está instalado, podemos instalarlo utilizando el siguiente comando:
```powershell
python get-pip.py # Windows
sudo apt-get install python3-pip  # Linux o MacOS
```
##### Instalar un paquete

- Para instalar un paquete de Python con `pip` es: 
```powershell
pip install nombre-del-paquete
```
- Ejemplos:
```powershell
pip install requests
pip install numpy
pip install django
```

##### Instalar un paquete en una versión determinada
Puede que necesites instalar un paquete en una versión determinada. Esto es bastante fácil con `pip`. Sólo tienes que especificar la versión que quieres instalar:
```powershell
pip install nombre-paquete==version
```
- Ejemplo:
```powershell
pip install pandas==1.4.0
```
:::tip Observación
- Esto instalará la versión 1.4.0 de pandas.
:::

- En caso de que quieras instalar un paquete que cumpla determinadas condiciones en cuanto a versiones, `pip` te permite utilizar ciertas condiciones booleanas. Por ejemplo, si quieres instalar una versión de pandas mayor o igual que v.1.0.0 y menor que 1.5:
```powershell
pip install pandas>=1.0.0,<1.5.0
```




##### Desinstalar un paquete
- Para desinstalar un paquete  es: 
```powershell
pip uninstall nombre-del-paquete
```
- Ejemplo:
```powershell
pip uninstall requests
```
##### Listar paquetes instalados
- Podemos ver una lista de los paquetes instalados en nuestro entorno con `pip list`. Esto mostrará los paquetes y sus versiones:
```powershell
pip list
```
##### Actualizar un paquete
- Para actualizar un paquete a su última versión, utilizamos:
```powershell
pip install --upgrade nombre-del-paquete
```
- Ejemplo:
```powershell
pip install --upgrade requests
```

##### Help
Si necesitas información adicional sobre los distintos comandos `pip` disponibles y cómo utilizarlos, utilizamos:
```powershell
pip help
```
##### Ver un resume
- Para ver un resumen de un paquete de tu interés:
```powershell
pip show nombre-del-paquete
```




#### Archivo requirements.txt
- En muchos proyectos, es común tener un archivo `requirements.txt` que lista todos los paquetes y sus versiones necesarios para ejecutar el proyecto. 
- `Pip` puede instalar todos estos paquetes a la vez desde este archivo.
- Supongamos que tenemos un archivo `requirements.txt` con el siguiente contenido:
```txt
Flask==2.0.2
requests==2.26.0
numpy==1.21.2
```
- Para instalar todos estos paquetes, ejecutamos:
```powershell
pip install -r requirements.txt
```
:::tip Observación
- Esto instalará los paquetes `Flask`, `requests` y `numpy` con las versiones especificadas en el archivo.
:::

- Si quieres crear un archivo de requisitos para compartirlo con el resto del equipo, puedes utilizar el siguiente comando:

```powershell
pip freeze > requirements.txt
```
:::tip Observación
- `pip freeze`: Este comando muestra en la terminal una lista de todos los paquetes instalados en el entorno de Python actual, en el mismo formato que tiene el archivo `requirements.txt`.
- `>`: Es un operador de redirección en la terminal que toma la salida del comando anterior (`pip freeze`) y la escribe en un archivo en lugar de mostrarla en pantalla.
- `requirements.txt`: Es el nombre del archivo de salida. Por convención, este archivo se llama `requirements.txt` y se usa comúnmente en proyectos de Python para especificar las dependencias necesarias.
:::


- Para actualizar todos los paquetes enumerados en un `requirements.txt`, podrías utilizar:
```powershell
pip install -r requirements.txt --upgrade
```


#### pip vs pip3 vs pip2
- Tras el lanzamiento de Python 3, pip incorporó el nuevo comando `pip3`, que funciona siempre en el entorno Python 3 de tu ordenador. Lo mismo ocurre con el comando `pip2`. Por tanto, si quieres asegurarte de que pip funciona en tu entorno Python 3 o en tu entorno Python 2, utiliza los comandos pip3 o pip2, respectivamente.
- En cambio, el comando `pip` opera en el entorno Python que sea adecuado al contexto. Esto es relevante cuando tienes tanto Python 2 como Python 3 instalados en tu ordenador. 
- Por ejemplo, los ordenadores MacOS dependen de Python 2 para ejecutar algunas de sus funcionalidades básicas.  Si estás trabajando en un entorno Python 2, el comando `pip` instalará, desinstalará, actualizará o gestionará paquetes Python para Python 2. Lo mismo ocurre si trabajas en un entorno Python 3. 

### Entornos virtuales de Python
- Generalmente cuando instalamos un paquete con `pip installer`, lo hacemos a nivel sistema (global). Por lo que tendremos acceso a estos paquetes (dependencias) en cualquier parte de nuestro sistema operativo. Ya sea en documentos, descargar, imágenes etc…
- Esto puede sonar como una muy buena idea, pero la realidad es que no lo es. Ya que, en teoría, todos los proyectos son diferentes. Cada proyecto tiene su propia lista dependencias y de versiones que debe usar para poder funcionar.
- Imagina que tienes dos aplicaciones, App1 y App2. Ambos usan el paquete Pak, pero requieren versiones diferentes. Si instala Pak versión 2.3 para App1, no podrá ejecutar App2 porque requiere la versión 3.1.
- La solución a este problema es crear un entorno virtual, un directorio que contiene una instalación de Python de una versión en particular, además de una lista de paquetes (con sus versiones correspondiente).
- Diferentes aplicaciones pueden entonces usar entornos virtuales diferentes. Para resolver el ejemplo  anterior, la aplicación App1 puede tener su propio entorno virtual con la versión 2.3 instalada mientras que la aplicación App2 tiene otro entorno virtual con la versión 3.1. Si la aplicación App2 requiere que actualizar la librería a la versión 3.0, ésto no afectará el entorno virtual de la aplicación A.
- Para crear entornos virtuales podemos usar `Venv`, `Virtualenv` y `Conda`.





#### Ventajas
- Aislamiento de proyectos: Los entornos virtuales permiten aislamiento completo entre proyectos. Cada proyecto puede tener su propia versión de Python y sus propias dependencias sin interferir con otros proyectos.
- Portabilidad: Puedes compartir un "archivo de requisitos" con otros desarrolladores para que puedan crear el mismo entorno virtual en sus sistemas, lo que garantiza que todos trabajen en el mismo entorno.
- Gestión de dependencias: Puedes instalar y gestionar fácilmente las bibliotecas y paquetes requeridos para un proyecto específico dentro de su propio entorno virtual. Esto garantiza que todas las dependencias se mantengan bajo control y se puedan replicar fácilmente.

#### Venv
- Venv, abreviatura de entorno virtual, es un módulo que viene incluido con Python 3.3 y versiones posteriores. Está diseñado para crear entornos de Python aislados para cada proyecto. Cuando se utiliza python `-m venv myenv` , crea una carpeta llamada `'myenv'` con un nuevo intérprete de Python. Venv es liviano y parte de la biblioteca estándar, lo que significa que no necesita instalar nada adicional para usarlo. Sin embargo, es más básico y carece de algunas de las características que ofrecen las herramientas de terceros.
##### Como gestionar entornos
- Si trabajas con una versión superior a Python 3, la creación de los entornos se hace de la siguiente manera. En terminal ejecutamos el siguiente comando:
```powershell
python -m venv env
```
:::tip
- Esto creará una carpeta `env` en nuestro directorio de proyecto que contendrá el entorno virtual.
- Por buenas practicas los entornos debemos nombrarlos como `env`. Si bien es cierto que podemos definir el nombre que deseemos, te recomiendo siempre seguir una convención.
:::
- Una vez el entorno haya sido creado, lo siguiente será activarlo. La activación depende completamente del sistema operativo. Aquí los comandos que necesitas:

```powershell
source env/bin/activate # Unix
env\\Scripts\\activate # Windows

```
:::tip Observación
- Una vez con el entorno activado, ya seremos capaces de instalar todo lo que nuestro proyecto necesite. Las instalaciones ya no se harán a nivel sistema, si no ahora a nivel entorno.
- Por lo tanto, si queremos ejecutar nuestro proyecto siempre debemos tener nuestro entorno activado.
- Todos los comandos con `pip` se realizaran en el entorno virtual.
:::


- Para desactivar el entorno, independientemente de tu sistema operativo, debes ejecutar el comando `deactivate` en consola. Este comando generalmente cierra la ventana de terminal donde hayamos activado el entorno virtual, y listo. Sirve para volver a usar el entorno global de Python.


##### ¡A investigar! ¿Cómo se usa? ¿Cómo se configura? 


#### Virtualenv
- Virtualenv es una herramienta de terceros que es anterior a venv y ofrece más funcionalidades. Funciona con una gama más amplia de versiones de Python, a partir de Python 2.6. Virtualenv crea entornos aislados al igual que venv, pero también te permite elegir el intérprete de Python para cada entorno. Puedes instalarlo usando pip con `pip install virtualenv` . Para aquellos que trabajan en proyectos heredados o que necesitan más control sobre sus entornos, virtualenv suele ser la opción preferida.
##### Algunos comandos:
- Ver versión:
```powershell
virtualenv --version
```
- Crear un entorno:
```powershell
virtualenv my-env
```
:::tip Observación
- Esto crea una carpeta en el directorio actual con el nombre del entorno (my-env/). Esta carpeta contiene los directorios para instalar módulos y ejecutables de Python.
:::

- También puedes especificar la versión de Python con la que quieres trabajar. Simplemente usa el argumento `--python=/ruta/a/la/version/de/python`. Por ejemplo, python2.7:
```powershell
virtualenv --python=/usr/bin/python2.7 my-env
```
- Puedes usar el paquete `virtualenvwrapper` para implementar mas funciones:
```powershell
pip install virtualenvwrapper
```

##### ¡A investigar! ¿Cómo se usa? ¿Cómo se activa el entorno antes de empezar a instalar paquetes? ¿Cómo se configura? ¿Como se desactiva el entorno para volver a usar los paquetes globales?


#### Conda
- Conda es un administrador de paquetes que viene con la distribución Anaconda de Python. Es mucho más que un simple gestor de paquetes; Puede manejar varios lenguajes y está diseñado para aplicaciones de ciencia de datos que pueden requerir dependencias complejas. Los entornos de Conda se crean mediante el comando `Conda create -n myenv python=3.8`.
- Conda es una gestor de paquetes, dependencias y entornos para muchos lenguajes, incluido Python.
##### Algunos comandos:
- Para crear un entorno virtual, use:
```powershell
conda create --name my-env
```
:::tip Observación
- Conda creará la carpeta correspondiente dentro del directorio de instalación de Conda.
:::

- También puedes especificar con qué versión de Python quieres trabajar:
```powershell
conda create --name my-env python=3.6
```
- Puedes enumerar los entornos disponibles con:
```powershell
conda info --envs
```
##### ¡A investigar! ¿Cómo se usa? ¿Cómo se activa el entorno antes de empezar a instalar paquetes? ¿Cómo se configura? ¿Como se desactiva el entorno para volver a usar los paquetes globales?

## Crear un ejecutable
- Uno de los problemas de Python es que para ejecutar un código necesitas tener instalado Python. Y no sólo eso. También necesitas instalar las dependencias como numpy, pandas o las que uses.
- Si quieres distribuir tu código a un usuario final que no sepa de Python ni de programación, obligarle a instalar todo esto supone un problema.
- Por suerte `pyinstaller` nos permite generar programas ejecutables. Es decir, que puedan ser ejecutados sin tener Python instalado. 
- `PyInstaller` es una herramienta que convierte los scripts de Python (`.py`) en ejecutables (`.exe`, `.app`, etc.) que pueden ejecutarse en máquinas que no tienen Python instalado. Este proceso de empaquetado incluye todos los archivos necesarios, como bibliotecas, módulos y recursos, dentro del ejecutable, lo que simplifica la distribución de aplicaciones.

#### Características de PyInstaller
- Compatible con Python 2.7 y 3.3+
- Soporta múltiples plataformas: Windows, macOS, Linux.
- Puede generar ejecutables de un solo archivo (`onefile`).
- Soporta la inclusión de recursos adicionales como imágenes y archivos de datos.
- Detecta automáticamente las dependencias del script.



#### Instalación de PyInstaller
- Para instalar PyInstaller, simplemente usa `pip`, el gestor de paquetes de Python. Esto lo haces abriendo la linea de comandos de tu sistema operativo, y escribiendo:
```powershell
pip install pyinstaller
```
- Una vez instalado, puedes verificar la instalación con el siguiente comando:
```powershell
pyinstaller --version
```

#### Uso Básico de PyInstaller
- El comando que usa `PyInstaller` es:
```powershell
pyinstaller ubicacion/del/archivo/python.py
```
:::tip Observación
- Esto generará un directorio `dist/` que contiene los archivos necesarios para ejecutar tu aplicación, incluyendo el ejecutable.
- Cuando ejecutas este comando sigue estos pasos:
  1. Análisis del script: PyInstaller analiza tu script para determinar todas las dependencias (módulos, bibliotecas, etc.).
  2. Creación de la estructura de archivos: Crea una carpeta `build/` donde organiza los archivos temporales necesarios para la creación del ejecutable.
  3. Empaquetado: Coloca todos los archivos necesarios en la carpeta `dist/`, junto con el ejecutable.
- Es importante tener en cuenta que si usas Windows, el ejecutable será para Windows. Si usas Mac, lo mismo. Desafortunadamente pyinstaller no permite la cross-compilation, es decir, generar un ejecutable de Windows desde Mac.
:::


#### Parámetros y Opciones de PyInstaller
- PyInstaller ofrece una variedad de opciones que te permiten personalizar el proceso de creación del ejecutable. Aquí te explico las más importantes

##### `--onefile`
- Genera un único archivo ejecutable que contiene todos los archivos necesarios:
```powershell
pyinstaller --onefile tu_script.py
```
:::tip
- Esto es útil si deseas distribuir tu aplicación como un solo archivo, lo que facilita la distribución y la instalación.
:::
##### `--noconsole` o `--windowed`
- `--noconsole`: Este parámetro elimina la consola cuando ejecutas aplicaciones con interfaz gráfica (GUI). Es especialmente útil en Windows para evitar que aparezca la ventana de la consola.
```powershell
pyinstaller --onefile --noconsole tu_script.py
```
:::tip
- `--windowed`: Hace lo mismo que `--noconsole` y es un alias de esta opción.
:::
##### `--name`
- Permite especificar el nombre del archivo ejecutable generado.
```powershell
pyinstaller --onefile --name=mi_app tu_script.py
```
##### `--icon`
- Permite especificar un icono para el ejecutable (generalmente en formato `.ico` para Windows o `.icns` para macOS):
```powershell
pyinstaller --onefile --icon=mi_icono.ico tu_script.py
```
##### `--add-data`
- Este parámetro se utiliza para incluir archivos adicionales, como imágenes, archivos de datos, etc., que tu aplicación necesita para funcionar. La sintaxis varía según el sistema operativo.
- Windows:
```powershell
 pyinstaller --onefile --add-data "ruta_del_archivo;carpeta_destino" tu_script.py
```
- Linux/macOS:
```powershell
 pyinstaller --onefile --add-data "ruta_del_archivo:carpeta_destino" tu_script.py
```
:::tip Observación
- La `carpeta_destino` si es una ruta relativa, la carpeta raiz seria `dist/`. Por lo que `"." == dist`

:::


##### `--hidden-import`
- PyInstaller a veces no detecta automáticamente todas las dependencias. Si tu aplicación falla porque falta un módulo, puedes usar `--hidden-import` para incluirlo manualmente:
```powershell
pyinstaller --onefile --hidden-import nombre_modulo tu_script.py
```
##### `--additional-hooks-dir`
- PyInstaller utiliza scripts de "hooks" para detectar dependencias especiales en ciertos módulos. Si has creado un hook personalizado, puedes especificar su directorio con esta opción:
```powershell
pyinstaller --onefile --additional-hooks-dir=mi_directorio_hooks tu_script.py
```
:::tip
- Se recomienda leer la Documentación para entender el tema de los hooks.
:::

#####  `--collect-data` y `--collect-binaries`
- Estos parámetros se utilizan para incluir automáticamente datos o binarios de módulos específicos que PyInstaller podría no detectar.
- `--collect-data`: Incluye archivos de datos de un módulo específico:
```powershell
 pyinstaller --collect-data nombre_modulo tu_script.py
```
- `--collect-binaries`: Incluye binarios de un módulo específico.
```powershell
 pyinstaller --collect-binaries nombre_modulo tu_script.py
```
#####   `--clean`
- Elimina los archivos temporales creados por PyInstaller durante el proceso de construcción, dejando una estructura de archivos más limpia:
```powershell
pyinstaller --clean tu_script.py
```
##### `--upx-dir`
- UPX es una herramienta que comprime ejecutables para reducir su tamaño. Si tienes UPX instalado, puedes usarlo con PyInstaller para comprimir el ejecutable final:
```powershell
pyinstaller --onefile --upx-dir=ruta_a_upx tu_script.py
```
##### `--key`
- Permite cifrar el código fuente de tu aplicación con una clave especificada. Esto añade una capa de seguridad, evitando que se pueda extraer fácilmente el código fuente:
```powershell
pyinstaller --onefile --key=mi_clave_secreta tu_script.py
```
##### `--runtime-hook`
- Permite especificar scripts de hook que se ejecutan durante la inicialización del ejecutable, lo que puede ser útil para configurar el entorno antes de que se ejecute el script principal:

```powershell
pyinstaller --onefile --runtime-hook=mi_hook.py tu_script.py
```

:::tip
- Se recomienda leer la Documentación para entender el tema de los hooks.
:::

##### `--exclude-module`
- Este parámetro te permite excluir módulos específicos que podrían estar incluidos por defecto pero que no necesitas en tu aplicación final:
```powershell
pyinstaller --onefile --exclude-module=tkinter tu_script.py
```

##### `--debug`
- Genera un ejecutable con información adicional de depuración. Esto es útil si necesitas solucionar problemas durante la ejecución:
```powershell
pyinstaller --onefile --debug tu_script.py
```

#### Ejemplo Completo
- Vamos a crear un ejemplo práctico donde se usan varias de estas opciones:
```powershell
pyinstaller --onefile --noconsole --name=mi_aplicacion --icon=icono.ico --add-data "datos.csv;." --hidden-import=requests --clean tu_script.py
```

:::tip Observación
- `--onefile`: Genera un único archivo ejecutable.
- `--noconsole`: No muestra la consola.
- `--name=mi_aplicacion`: El ejecutable se llamará `mi_aplicacion`.
- `--icon=icono.ico`: Usa `icono.ico` como icono del ejecutable.
- `--add-data "datos.csv;."`: Incluye el archivo `datos.csv` en la raíz del ejecutable. Lo incluye en la carpeta `dist`.
- `--hidden-import=requests`: Asegura que el módulo `requests` esté incluido.
- `--clean`: Limpia los archivos temporales después de la construcción.
:::


## Proyectos

####  Adivina el Número!
```python
import random # Se importa el modulo random (todas las variables/metodos/etc del modulo son accesible desde la variable random)

## Usamos el metodo randint de random para crear un numero entero aleatorio entre 1 y 10
## La variable secret_number tendra ese numero aleatorio.
secret_number = random.randint(1,10)
## Intentos del usuario para adivinar el numero aleatorio
attempts = 3

print ("I`m thinking of a number between 1 and 10")

while attempts > 0:
  guess = int(input("Take a Guess: "))
  if guess == secret_number:
    print("Congratulations! You guessed the number!")
    ## Usamos break para salir del while
    break
  elif guess < secret_number:
    print("Too low! Try again.")
  else:
    print("Too high! Try again.")
  attempts -=1

if attempts == 0:
  print("Sorry, you `ve run out of attempts. The secret number was: " , secret_number)
```


#### Detecta número primo

```python

num = int(input("Enter a number: "))

# Queremos saber si un número es primo, es decir, si solo se puede dividir exactamente por 1 y por sí mismo.
if num > 1:
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            print(f"{num} is not a prime number")
            break
    else:
        print(f"{num} is a prime number")
else:
    print(f"{num} is not a prime number")
            
```

:::tip Observación
- `num**0.5` equivale a la `raiz cuadrada de num` (formulas matematicas)
- Para determinar si un número n es primo, basta con comprobar si es divisible por algún entero entre 2 y la raiz cuadrada de num (inclusive). Si no tiene divisores en ese rango, entonces es primo.
- Si un número no es primo, entonces se puede escribir como la multiplicación de dos números más pequeños.
- Por ejemplo:
  - 15 = 3 × 5
  - 21 = 3 × 7
  - 36 = 6 × 6
- En todos estos casos, al menos uno de los dos números es pequeño.
- Entonces en otras palabras:
  - `A x B = n`
  - Si aumentas `a`, entonces disminuyes `b` para que siga dando `n`.
  - Si `A = B`, entonces el valor de ambos es igual a la raíz `cuadrada de N`.
  - Para todos los demás pares de a y b, habría que aumentar uno y disminuir el otro. Eso significa que siempre hay un número en esa pareja que no es más grande que la raíz cuadrada del número original. Así que basta con buscar solo los divisores pequeños.
:::

#### Flujo con el número primo → 13
- Busca el primer número que, multiplicado por sí mismo, ya sea igual o mayor que 13: En este caso es 4 ya que `4 × 4 = 16`. 
- Por lo que prueba con 2,3,4 → ninguno divide → dice que es primo.


#### Calculadora con Menu
```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Division by zero is not allowed"
    
while True:
    print("\nMenu:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit")
    
    choice = input("Enter your choice: ")
    
    if choice == "5":
        print("Exiting Program.")
        break
    
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    
    if choice == "1":
        print("Result: ", add(num1, num2))
    elif choice == "2":
        print("Result: ", subtract(num1, num2))
    elif choice == "3":
        print("Result: ", multiply(num1, num2))
    elif choice == "4":
        print("Result: ", divide(num1, num2))
    else:
        print("Invclid choice. Please try again.")
```

##### Calculadora con módulos

```python title="math_operations.py"
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Division by zero is not allowed"
```

```python title="main.py"
import math_operations as mo
num1 = 10
num2 = 5
print("Addition: ", mo.add(num1, num2))
print("Subtraction: ", mo.subtract(num1, num2))
print("Multiplication: ", mo.multiply(num1, num2))
print("Division: ", mo.divide(num1, num2))
```

#### Calcular número factorial
```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

def print_factorial(n):
    result = factorial(n)
    print(f"The factorial of {n} is {result}")
    
print_factorial(2)
```


:::tip Función recursiva
- La función `factorial(n)` es recursiva.
- Es una función que se llama a sí misma, reduciendo la complejidad del problema en cada llamada, hasta llegar a un caso base que puede resolverse sin tener que volver a ejecutar la función.
- No es un bucle infinito, porque cada llamada se acerca más al caso base, y cuando lo alcanza, la función deja de llamarse a sí misma y empieza a "volver" (resolviendo cada llamada pendiente en orden inverso).
- Es como bajar una escalera:
  - Cada paso te acerca al suelo (el caso base).
  - Cuando tocas el suelo, ya no bajas más.
  - Entonces empiezas a subir de nuevo (si hay que devolver resultados).
- El caso base es una condición que le dice a la función: “¡Hasta aquí! Ya no necesitas llamarte a ti misma. Este problema es tan simple que lo puedo resolver directamente.” 
- Sin el caso base, estarías en un bucle infinito, por ejemplo:
  - Imagina que estás en el piso 5 de un edificio y quieres llegar al piso 0 (la planta baja).
  - Tu caso base es:  "Si ya estás en el piso 0, detente (retorna algo)".
  - Sin esa regla, seguirías bajando… ¡incluso al sótano, al centro de la Tierra, al infinito! 
:::

