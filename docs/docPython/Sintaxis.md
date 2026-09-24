---
sidebar_position: 2
---

# Python / Sintaxis

## Tuplas
- Son similares a las listas
- Son una colección ordenada e inmutable (no se pueden modificar) de elementos.
- A diferencia de las listas que usan `corchetes []`, una tupla se define usando `paréntesis ()`.

```python
# Es una tupla de tres elementos
colors = ("red", "green", "blue")
# Es una tupla de un solo elemento
# Para crear una tupla con un solo elemento, se debe incluir una coma después del elemento
single_item = ("glass",)

# Se accede a los elementos de la tupla mediante índices al igual que en las listas
print(colors[0])
print(colors[-1])
```

:::tip
- Las tuplas no se pueden modificar luego de crearlas, sin embargo, pueden tener objetos mutables dentro de ellas. Por ejemplo pueden tener listas dentro de ellas.
:::


## Dictionary
- Es una colección de clave-valor. En Javascript se llaman objetos.
- A diferencia de las tuplas o listas, se acceden a los valores usando la clave en lugar el índice.

```python
# Es un diccionario, en este caso almacena información sobre un estudiante
# La clave puede ser un string (cadena), un numero o una tupla. Debe ser un tipo inmutable.
# Es como definir un objeto en JavaScript
student = {"name": "Alice", "age": 25, "grade": "A"}
print(student)

# Se accede a los valores mediante sus claves, usando la sintaxis: dictionary[clave]
print(student["name"])

# Se puede agregar un nuevo par clave-valor con la sintaxis: dictionary[clave] = valor
student["subject"] = "Math"
print(student)

# Para actualizar un valor existente, se usa la misma sintaxis: dictionary[clave] = nuevo_valor
student["age"] = 32
print(student)

# Para eliminar un par clave-valor, hay varias opciones:
# Especificando la clave del par clave-valor que se desea eliminar, con la sintaxis: del dictionary[clave]
del student["grade"]
print(student)

# También se puede usar el método pop(clave) para eliminar el par clave-valor cuya clave sea igual a la clave proporcionada 
# Este método devuelve el valor del par clave-valor eliminado.
student.pop("subject")
print(student)
```

- Para verificar si existe un par clave-valor, se usa la sintaxis: `"clave" in diccionario`, que devuelve `True` si la clave existe en el diccionario, de lo contrario devuelve `False`:


```python
student = {"name": "Alice", "age": 25, "grade": "A"}


# La sintaxis: "clave" in diccionario
# Devuelve True si la clave existe en el diccionario, de lo contrario devuelve False
if "grade" in student:
    del student["grade"]

print(student)
```



#### Recorrer un dictionary

```python
# Es un diccionario, en este caso almacena información sobre un estudiante
# La clave puede ser un string (cadena), un numero o una tupla. Debe ser un tipo inmutable.
# Es como definir un objeto en JavaScript
student = {"name": "Alice", "age": 25, "grade": "A"}



for key,value in student.items():
    print(key, ":", value)
```

:::tip Observación 
- El método `items()` mete todos los pares clave–valor del diccionario en una lista, donde cada par clave–valor es una tupla (en realidad, `items()` devuelve un view object, pero es la manera más fácil de explicarlo), por ejemplo: `[('name', 'Alice'), ('age', 25), ('grade', 'A')]`.
- Este `for in` recorre un iterable (en este caso, el view object que se parece a una lista de tuplas). En cada iteración, `key` contiene la clave (el primer elemento de la tupla) y `value` contiene el valor de esa clave (el segundo elemento de la tupla).
- El método `items()` devuelve un objeto especial llamado "vista" (en inglés, view object), específicamente de tipo `dict_items`. Este objeto se comporta como si fuera una lista de tuplas, donde cada tupla contiene una clave y su valor asociado. No es una copia. Es una vista en vivo del diccionario. Eso significa que si más adelante modificas el diccionario (añades, eliminas o cambias elementos), la vista se actualiza automáticamente, sin que tengas que volver a llamar a `.items()`.
:::

:::tip View object (objeto vista)
- Un view object (objeto vista) en Python es una especie de “ventana en vivo” que te permite ver los datos de una estructura, como un diccionario. No contiene una copia de los datos, sino que refleja directamente el contenido actual de esa estructura. Si la estructura cambia, la vista también cambia automáticamente, sin necesidad de volver a crearla.
- Analogía útil: Imagina que el diccionario es una pecera, y la vista es una ventana de vidrio a través de la cual observas los peces. Si metes un pez nuevo en la pecera, lo ves inmediatamente por la ventana. La ventana no guarda peces; solo te muestra lo que hay ahora mismo dentro.
:::

:::tip Objeto Iterable
- Un objeto iterable en Python es cualquier objeto del que se pueden obtener sus elementos (valores) uno por uno, generalmente en un bucle. Es decir, es algo que "se puede recorrer". 
- Un objeto iterable es cualquier cosa que puedas recorrer con un bucle `for`, porque Python puede extraer sus elementos uno a uno.
- Analogía: la pila de libros
    - La pila completa (todos los libros juntos) es el iterable. Es la colección. Está ahí, completa, lista para usarse. Puedes usarla cuantas veces quieras.
    - Ahora, si empiezas a sacar libros uno por uno de la pila para leerlo, de arriba hacia abajo, estás usando un iterador.
    - Cada vez que tomas un libro, ya no está en la "lectura pendiente".
    - Cuando llegas al último, la pila de lectura pendiente se acabó. No puedes seguir sacando… ¡porque ya no hay más!
    - Pero… la pila original sigue intacta en tu escritorio.
    - Si quieres leer los libros de nuevo, simplemente empiezas otra vez desde el principio → eso es como crear un nuevo iterador.
- Un iterable es un objeto que puede crear un iterador. Contiene los datos, en la analogía es la pila original de libros (siempre disponible).
- El iterador es un objeto que entrega los elementos uno a uno. Una vez que se accedieron a todos los elementos no se puede volver a usar. En la analogía eres tu leyendo esa pila una sola vez, de principio a fin.
:::

## Set
- Son colecciones desordenadas de elementos únicos.
- Los conjuntos no pueden tener elementos repetidos.
- Los Set eliminan los valores duplicados.
- Los Set se crean con `llaves {}` al igual que los Dictionary.

```python
# Se define con llaves {}
# Se separa cada elemento con una coma y un espacio como si fuera una lista.
# Los elementos repetidos se eliminan automáticamente.
# No se puede acceder a los elementos mediante índices como en las listas ya que es una colección no ordenada.
numbers = {1, 2, 3 , 4}
# Crear un conjunto vacio, se hace con la función set() 
empty_set = set()
print(numbers)

# Agregar un elemento al conjunto con el método add(elemento)
numbers.add(5)
print(numbers)
# Eliminar un elemento especifico del conjunto con el método remove(elemento)
numbers.remove(2)
print(numbers)
```

#### Operaciones
##### Union
- Es la union de dos set diferentes.
- Se realiza con la sintaxis: `set1 | set2` . De esta manera se crea un nuevo conjunto(set) que tiene los valores de ambos set.
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
# La union se hace con el simbolo "|"
print (set1 | set2)
```
##### Intersección 
- Son los elementos que se repiten en dos conjuntos(set) diferentes. Son los elementos que se encuentran tanto en set1 como en set2.
- Se realiza con la sintaxis: `set1 & set2` . De esta manera se crea un nuevo conjunto(set) que tiene los valores que se encuentran tanto en set1 como en set2.

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
# La intersección se hace con el simbolo "&"
print(set1 & set2)  
```

##### Diferencia
- Son todos los elementos que pertenecen a set1 pero que no pertenecen a set2.
- Se realiza con la sintaxis: `set1 - set2` . De esta manera se crea un nuevo conjunto(set) que tiene los valores que se encuentran en set1 pero que no pertenecen a set2.
- El orden altera el resultado. `set1 - set2` es diferente a `set2 - set1`.

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
# La diferencia se hace con el simbolo "-"
print(set1 - set2)  
```

## Manejo de archivos
### Instrucción `with` 
- En esta sección usaremos mucho la palabra clave `with` por lo que la explicaremos en este apartado.
- La instrucción `with` de Python simplifica la gestión de recursos al cerrar automáticamente archivos y otros recursos cuando se dejan de usar. Garantiza que no se dejen recursos abiertos accidentalmente. 
- `with` hace que no pierdas el contenido en el que estabas trabajando en caso de que haya un error.
- La sentencia `with` en Python automatiza la gestión de recursos. Lo hace asegurándose de que, al usar un recurso (como un archivo), se ejecuten ciertos pasos al empezar (el método `__enter__()`) y al terminar (el método `__exit__()` ) su uso, sin que tú tengas que escribirlos explícitamente.
- Por ejemplo, al abrir un archivo:
    - Al empezar, se abre el archivo. (Se ejecuta el metodo  `__enter__()`)
    - Luego, se ejecuta tu código. (Lo que está adentro de `with`)
    - Al terminar (aunque haya un error), se cierra el archivo automáticamente. (Se ejecuta el metodo  `__exit__()`)
- Esto se logra gracias a un gestor de contexto, que es un objeto con métodos especiales que definen qué hacer al empezar y al terminar.
- Cuando se llama a la declaración `with`, se invoca el método `__enter__()`
- Al salir del bloque `with`, se llama a la función  `__exit__()`
##### Ventajas
- Simplifica el código.
- Reduce el riesgo de corrupción del archivo.
#### Palabra `as` dentro de un `with`
- La variable `as` crea una variable que se puede usar dentro del bloque `with`, esta contiene el valor que devuelve el metodo `__enter__()`.
- Es opcional.
#### Sintaxis
```python
with  [expresión] as nombreVariable: 
    ## Codigo que se va a ejecutar
    ## Tenemos acceso a nombreVariable
```

:::tip Observación
- [expresión] debe ser una función o método (como un constructor, un método de clase, un método de instancia, etc.) que devuelva un objeto, y ese objeto debe tener los métodos `__enter__()` y `__exit__()` para que funcione con la sentencia with.
- Al entrar al bloque `with`, se llama automáticamente a `__enter__()`.
- `nombreVariable` almacena el valor devuelto por `__enter__()`, y se puede usar dentro del bloque. Es opcional
- Al salir del bloque (incluso si hay un error), se llama automáticamente a `__exit__()`.
:::

- En este [ejemplo](#ejemplo), `with` ejecuta lo siguiente por nosotros:
```python
file = open("sample.txt", "r")
try:
    content = file.read()  # Lee todo el contenido del archivo
    print(content)
finally:
    file.close()  # Asegura que el archivo se cierra incluso si ocurre un error
```




#### Lectura y escritura de archivos de texto
#### Abrir archivos
- Para abrir archivos, podemos usar la función `open()` que viene con Python.
- Cuando abres un archivo, generalmente tienes que especificar si quieres  **leer**, **escribir**, **añadir algo** o **leer y escribir**. Entonces tenemos diferentes modos:
    - `r` : Leer (es el modo predeterminado si no se especifica).
    - `w` : Escribir (sobrescribe el archivo si ya existe; lo crea si no existe).
    - `a` : Añadir (agrega datos al final del archivo sin borrar el contenido existente).
    - `r+` : Leer y escribir (requiere que el archivo ya exista).

#### Leer archivos
- Podemos usar estos metodos para leer:
    - `read()` : Lee todo el contenido del archivo de una sola vez y lo devuelve como una única cadena de texto (o bytes si es modo binario).
    - `readline()` : Lee una sola línea del archivo (incluyendo el salto de línea \n al final) cada vez que se llama.
    - `readlines()`: Lee todas las líneas del archivo y las devuelve como una lista de cadenas, donde cada elemento es una línea (con su \n incluido).




##### Ejemplo:

```txt title="sample.txt"
Hello World
How are you
What is the plan for Today
Are you working on AI Technologies
```


```python
# El metodo open tiene dos parametros
# El primer parametro es la ruta del archivo que se va a abrir
# El segundo parametro es el modo en que se abre el archivo
with open("sample.txt" , "r") as file:
    content = file.read() # Lee todo el contenido del archivo
    print(content)
```


#### Escribir Archivos
- Podemos usar estos metodos para escribir:
    - `write()` : Escribe una cadena de texto (string) en un archivo específico. Solo escribe una línea.
    - `writelines()`: Escribe una lista de string (cadenas de texto) en un archivo específico. No agrega saltos de línea automáticamente entre los elementos. Escribe múltiples líneas desde una lista.
- Ejemplo:
```python
with open("sample.txt", "w") as file:
    file.write("Hello, World!") # Escribe en una sola línea : Hello, World!. Write solo acepta  un string (cadena de texto)
    file.writelines(["Alice", "Bob" , "Charlie"]) # Escribe en múltiples líneas. writelines acepta una lista de strings (cadena de texto)
```




### Try y Except 
- Es muy similar al `try-catch` de C# o JavaScript, con la diferencia de que en Python se **especifica  el tipo de excepción** que se quiere capturar, lo que permite manejar distintos errores de forma diferente.

##### En general (como en C#, JavaScript, etc.):
- Cuando ocurre un error en tiempo de ejecución, el lenguaje crea una excepción. Esta excepción es un objeto que encapsula información sobre el error (como el tipo de error y un mensaje descriptivo).
- El bloque `try` se encarga de ejecutar el código que podría lanzar una excepción. Si ocurre una, se ejecuta el bloque `catch` (en C#, JavaScript).
- El parámetro del `catch` (en lenguajes como C# o JavaScript), que puede tener cualquier nombre, recibe como valor la instancia (objeto) que representa el error, es decir, la excepción.

##### En Python:
- Cuando ocurre un error en Python, se crea una instancia (un objeto) de una **clase de excepción específica** (por ejemplo, ValueError, ZeroDivisionError, etc.). Esa instancia contiene información sobre el error (como el mensaje de error, la línea donde ocurrió, etc.).
- Cada clase de excepción (como ValueError, ZeroDivisionError, FileNotFoundError, etc.) contiene información específica sobre un tipo de error.
Por ejemplo:
    - ValueError: Representa un problema con el valor de una variable (por ejemplo, intentar convertir "hola" a un número).
    - ZeroDivisionError: Representa un intento de dividir por cero.
    - FileNotFoundError: Representa que no se encontró un archivo.
- En Python, el bloque `try` tiene la misma función: se encarga de ejecutar el código que podría lanzar una excepción. La única diferencia es que aquí se usa la palabra `except`, que se encarga de manejar una **clase de excepción específica**. 
- Se pueden usar varios bloques `except` en un solo bloque `try`, cada uno para manejar una clase diferente de error.
- La sintaxis es:
```python
try:
	# Codigo a ejecutar
	# Pero podria haber errores en este bloque
    
except <clase de excepción específica>:
	# Haz esto para manejar la excepcion
	# El bloque except se ejecutara si el bloque try lanza un error
    
else:
	# Esto se ejecutara si el bloque try se ejecuta sin errores
   
finally:
	# Este bloque siempre  se ejecutará después de los otros bloques
```

:::tip
- Las variables definidas en `try` se pueden usar en `except`, `else` y `finally`.
:::

- Ejemplo:

```python
try:
    with open('sampleN.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    # Aca manejamos el error si el archivo no existe
    # Si un archivo no existe, se crea una instancia de la clase FileNotFoundError
    print("File not found.")
except IOError:
    # Aca manejamos el error si hay un problema de entrada/salida
    ## Esta relacionado con los permisos de edicion del archivo
    # Si ocurre un error de entrada/salida, se crea una instancia de la clase IOError
    print("Input/Output error occurred.")
except PermissionError:
    # Aca manejamos el error si no tenemos permisos para acceder al archivo
    # Si no tenemos permisos para acceder al archivo, se crea una instancia de la clase PermissionError
    print("Permission denied.")
except Exception as e:
    # Aquí manejamos cualquier otro tipo de error que pueda ocurrir
    # Casi todas las clases de excepción heredan de la clase Exception. Hay algunas excepciones como SystemExit, KeyboardInterrupt, y GeneratorExit (salida del sistema)
    # Este except manejará todas las excepciones que sean de la clase Exception o que hereden la clase Exception.
    print(f"An unexpected error occurred: {e}")
```

:::tip
- Python verifica si la excepción lanzada es del tipo especificado o una subclase de ese tipo.
:::


- Si desea almacenar la instancia (objeto) de una excepción en una variable, puede usar la palabra clave `as nombreVariable`. Donde en `nombreVariable` se almacenará la excepción.
- Ejemplo:
```python
try:
    with open('sampleN.txt', 'r') as file:
        content = file.read()
except FileNotFoundError as e:
    # Aca manejamos el error si el archivo no existe
    # Si un archivo no existe, se crea una instancia de la clase FileNotFoundError
    print("File not found.")
    ## e contiene una instancia (objeto) de la clase FileNotFoundError
    print(e)

```

## String interpolation
- La interpolación de cadenas (string interpolation) es una técnica que permite insertar valores de variables o expresiones (código) directamente dentro de una cadena de texto (string).
- Por ejemplo, si quieres mostrar el nombre y la profesión de una persona. Podrías escribir un programa sencillo como el siguiente:
```python
name = 'Mark'
profession = 'Astronaut'
age = 7
output_string = ('My name is ' + name +
                ', I am ' + str(age) + ' years old ' +
                'and my profession is ' + profession + '.')
print(output_string)


```

- Sin embargo, podemos mejorar el código anterior usando la interpolación de cadenas:
```python
# Define variables
name = 'Mark'
profession = 'Astronaut'
age = 7


# Output info
output_string = f'My name is {name}, I am {age} years old and my profession is {profession}.'
print(output_string)
```
- En Python existen varias técnicas de interpolación de cadenas:
    - El método más recomendado son los **literales de cadena formateados**, también conocidos como **cadenas f**, que están disponibles desde Python 3.6.
    - Otro método, comúnmente visto en código anterior a Python 3.6, es el método **`.format()`**. 
    - También, puedes encontrarte con **`%-formateo`** que es bastante antiguo, pero funcional.
    - Por último, tenemos el **`string.Template`** que es el menos común, pero que es útil en contextos de seguridad o internacionalización.

#### Cadenas f (Python 3.6+)
- Se introdujeron en Python 3.6 y proporcionan una forma legible y eficaz de insertar variables, expresiones y  funciones directamente en cadenas (string).
- Sintaxis:
```python
f"Texto {variable / expresión / funcion} más texto"
```
:::tip observación 
- Empiezan con `f` seguido de una cadena de texto: "String".
- Dentro del string, puedes insertar variables, expresiones o funciones entre llaves {}.
- Al usarse el string, las variables, expresiones o funciones se ejecutan y devuelven un valor, que se inserta en el lugar correspondiente dentro del string.
:::

- Ejemplo básico:
```python
nombre = "Ana"
mensaje = f"Hola, me llamo {nombre}"
print(mensaje)
```

:::tip
- También hay maneras de formatear la expresión, variable, etc., por ejemplo, para mostrar un número con una cantidad específica de decimales. Así que te invito a continuar investigando si te interesa profundizar en ello.
:::

#### Utilizando el método .format()
- Al igual que las `cadenas f`, el  método `format()` permite insertar variables y expresiones en una cadena.
- Sintaxis:
```python
"Texto {} más texto".format(valor)
```
:::tip observación 
- La cantidad de `llaves vacías {}` que hay en el string representa la cantidad de variables, expresiones o funciones que puedes insertar en este.
- Cada valor que se especifica en el método `format()` reemplaza una `llave vacía` del string, siguiendo un orden: el primer parámetro reemplaza la primera llave vacía, el segundo parámetro la segunda llave vacía, y así sucesivamente.
:::
- Ejemplo básico:
```python
nombre = "Ana"
mensaje = "Hola, me llamo {}".format(nombre)
print(mensaje)
```
##### Indices
- Puedes usar índices para alterar el orden en los parámetros de .format().
- Sintaxis con índices:

```python
"Texto {0} más texto {1}".format(valor1, valor2)
```

:::tip Observación
- Puedes utilizar numeros enteros dentro de las llaves para indicar indices (`{0}`, `{1}`, etc.) 
- Los indices sirven para indicar el **orden** de los parámetros del método `format()`.
- El orden se establece del número más bajo hasta el más alto.
- `{0}` representa el primer parámetro, `{1}` el segundo, y así sucesivamente.
- Esto permite **reutilizar o reordenar** los valores en el string.
- Si repites un índice en el string (por ejemplo, `{0}` y `{0}`), se usará el mismo valor para ambas llaves.
:::

- Ejemplo básico:

```python
nombre = "Ana"
edad = 30
mensaje = "Hola, me llamo {0} y tengo {1} años.".format(nombre, edad)
print(mensaje)
```
##### Con nombres
- En lugar de identificar cada llave con un número como con los índices, se pueden identificar con nombres.
- Sintaxis con nombres:
```python
"Texto {nombre1} más texto {nombre2}".format(nombre1=valor1, nombre2=valor2)
```

:::tip Observación
- Puedes utilizar nombres dentro de las llaves (`{nombre}`, `{nombre2}`, etc.) para identificar cada llave.
- Luego, en el método `format()`, le indicas el valor que debe tener cada llave de la siguiente manera: `nombre=valor`. De esta manera, todas las llaves que tengan ese nombre usarán el valor proporcionado.
- Esto permite **mejor legibilidad y reutilizar o reordenar** los valores en el string.
- Si repites un nombre en el string (por ejemplo, `{nombre}` y `{nombre}`), se usará el mismo valor para ambas llaves.
:::

- Ejemplo básico:

```python
nombre = "Ana"
edad = 30
mensaje = "Hola, me llamo {n} y tengo {e} años.".format(n=nombre, e=edad)
print(mensaje)
```

:::tip
- También hay maneras de formatear la expresión, variable, etc., por ejemplo, para mostrar un número con una cantidad específica de decimales. Así que te invito a continuar investigando si te interesa profundizar en ello.
:::


#### % - Formato
- Es uno de los métodos más antiguos para interpolar cadenas en Python. Se basa en el operador `%` y en especificar el tipo de dato a través de **códigos de formato** (como `%s`, `%d`, `%f`, etc.).
- Sintaxis:
```python
"Texto %tipo" % valor
```
:::tip Observación
- `%tipo` indica el tipo de dato y los mas comunes son:
    - `%s` – String
    - `%d` – Entero
    - `%f` – Flotante
    - `%.nf` – Flotante con n decimales
- La cantidad de `%tipo` que hay en el string representa la cantidad de variables, expresiones o funciones que puedes insertar en este.
- Cada valor que se especifica después del operador `%` **reemplaza** un `%tipo` del string, siguiendo un orden: el primer valor reemplaza el primer `%tipo`, el segundo valor el segundo `%tipo`, y así sucesivamente.
- Cuando hay más de un valor, se encierran entre paréntesis:`%(valor1, valor2, ...)`.
- Con `%Formato`  el programador le indica a Python qué tipo de conversión hacer, en lugar de dejar que Python lo haga automáticamente como en otros métodos (por ejemplo, `f-strings` o `.format()`).
:::
- Ejemplo básico:
```python
nombre = "Ana"
edad = 30
mensaje = "Hola, me llamo %s y tengo %d años." % (nombre, edad)
print(mensaje)
```

:::tip
- También hay maneras de formatear la expresión, variable, etc., por ejemplo, para mostrar un número con una cantidad específica de decimales. Así que te invito a continuar investigando si te interesa profundizar en ello.
:::
#### Clase de plantilla 
- `string.Template` es una clase que permite interpolación simple y segura de cadenas (strings).
- Usa el símbolo `$` para insertar variables o o expresiones (código) directamente dentro del texto.
- Se usa principalmente para evitar problemas de seguridad en cadenas (strings) generadas dinámicamente.
- Es similar al uso de `format() con nombres`, pero con una sintaxis más simple y segura.
- Sintaxis:
```python
from string import Template

plantilla = Template("Texto $nombre más texto")
mensaje = plantilla.substitute(nombre=valor)
```
:::tip Observación
- Puedes utilizar nombres como `$nombre` , `$nombre2` , etc... , dentro del string para indicar dónde insertar el valor.
- Con el metodo  `substitute()` le indicas el valor que debe tener cada nombre de la siguiente manera: `nombre=valor`. De esta manera, todos los que tengan el mismo nombre usarán el valor proporcionado.
- Si repites un nombre en el string (por ejemplo, `{nombre}` y `{nombre}`), usarán el mismo valor ambos.
- Se crea una instancia de `Template` con un texto que tiene nombres para indicar donde insertar el valor. Luego, con la instancia, usas el método `substitute` para insertar los valores al texto.
:::
- Ejemplo básico:
```python
from string import Template

nombre = "Ana"
edad = 30
plantilla = Template("Hola, me llamo $nombre y tengo $edad años.")
mensaje = plantilla.substitute(nombre=nombre, edad=edad)
print(mensaje)
```


## POO
- La programación orientada a objetos utiliza el concepto de objetos y clases. Una clase puede considerarse como un "plano" que indica como crear objetos. Pueden tener sus propios atributos (características que poseen), y métodos (acciones que realizan).
- Un ejemplo de clase es la clase `Dog. No pienses en un perro concreto, ni en tu propio perro. Estamos describiendo lo que un perro es y puede hacer, en general. Los perros suelen tener un nombre y edad; son propiedades de instancia. Los perros también pueden ladrar; éste es un método.
- Cuando hablás de un perro concreto, en programación tendrías un objeto creado a partir de la clase `Dog`: un objeto es una instanciación de una clase (un objeto creado a partir de una clase). Éste es el principio básico en el que se basa la programación orientada a objetos. Así, mi perro Ozzy, por ejemplo, pertenece a la clase `Dog`. Sus propiedades son `nombre = 'Ozzy'` y `edad = '2'`. Un perro diferente tendrá atributos diferentes.


#### Crear una clase
- Para definir una clase en Python, puedes utilizar la palabra clave `class`, seguida del nombre de la clase y dos puntos. Dentro de la clase, hay que definir un método  `__init__` con `def`:
    - Este es el constructor que puedes utilizar después para instanciar (crear) objetos. 
    - Siempre debe recibir como primer argumento: `self`
    - Las propiedades (atributos de instancia) se definen con `self`.
- Ejemplo:

```python
class Perro:
    # El método __init__ es llamado al crear el objeto
    def __init__(self, nombre, raza):
        print(f"Creando perro {nombre}, {raza}")
        # Atributos de instancia (propiedades)
        self.nombre = nombre
        self.raza = raza
```

:::tip Observación
- `self` es como el `this` de `C#` o `Javascript`, contiene una referencia del objeto con el cual se accedió al método. O sea la instancia actual.
- `self` siempre debe definirse en el contructor y en todos los metodos de instancia en el primer argumento. Es obligatorio.
- Las propiedades se definen con `self` en el constructor.  Es como si `self` fuera un `diccionario (dictionary)` y le agregas un par clave-valor, ese par equivale a una propiedad/atributo que corresponde a una instancia (objeto) creado a partir de la clase.
- Además de `self`, que siempre debe ir como primer argumento, podemos incluir más parámetros en el constructor y en los métodos, y pasarles valores al llamarlos. 
:::


:::tip Método de instancia
- Un método de instancia es un método que:
    - Pertenece a una instancia de una clase (es decir, a un objeto específico creado a partir de esa clase).
    - Opera sobre los datos (atributos / propiedades) de esa instancia.
    - Recibe self como primer argumento, que es una referencia a la instancia desde la que se llamó.
- Se diferencian de los métodos estáticos porque estos se llaman desde la clase y los de instancia desde el objeto.
:::


####  Crear un objeto
- Para crear un objeto, se utiliza directamente al nombre de la clase seguido de paréntesis: `NombreDeLaClase()`.
- Esto invoca internamente el método `__init__` (después de crear el objeto con `__new__`), por lo que los argumentos que pases deben coincidir con los  parámetros declarados en __init__, excluyendo `self`, que Python gestiona automáticamente.
- Ejemplo:
```python
# Esto crea un objeto de la clase Perro
# Perro("Toby", "Bulldog") ejecuta el método init de la siguiente forma:  __init__(self, "Toby", "Bulldog")
mi_perro = Perro("Toby", "Bulldog")
```

#### Creando métodos
- Los métodos son funciones dentro de la clase:
```python
class Perro:
    # El método __init__ es llamado al crear el objeto
    def __init__(self, nombre, raza):
        print(f"Creando perro {nombre}, {raza}")
        # Atributos de instancia (propiedades)
        self.nombre = nombre
        self.raza = raza
    def ladra(self):
        print("Guau")

    def camina(self, pasos):
        print(f"Caminando {pasos} pasos")
        
        
# Esto crea un objeto de la clase Perro
# Perro("Toby", "Bulldog") ejecuta el método init de la siguiente forma:  __init__(self, "Toby", "Bulldog")
mi_perro = Perro("Toby", "Bulldog")
mi_perro.ladra()
mi_perro.camina(10)
```

:::tip 
- Además de `self`, que siempre debe ir como primer argumento, podemos incluir más parámetros en el constructor y en los métodos, y pasarles valores al llamarlos. 
:::

#### Definiendo atributos
- A continuación vamos a añadir algunos atributos a nuestra clase. Antes de nada es importante distinguir que existen dos tipos de atributos:
    - **Atributos de instancia:** Cada objeto tiene sus propios atributos/propiedades independientes. Todos los objetos tienen los mismos atributos, pero pueden tener valores diferentes. Se acceden mediante `nombreObjeto.nombrePropiedad` y se crean con `self` en el constructor.
    - **Atributos de clase**: Se trata de atributos que pertenecen a la clase, por lo tanto serán comunes para todos los objetos (son atributos que tienen el mismo valor para todos los perros). Se acceden mediante `nombreClase.nombrePropiedad`.

- Ejemplo:
```python
class Perro:
    # Atributo de clase
    especie = 'mamífero'

    # El método __init__ es llamado al crear el objeto
    def __init__(self, nombre, raza):
        # Atributos de instancia
        self.nombre = nombre
        self.raza = raza
        
        
        
print(Perro.especie)

mi_perro = Perro("Fido", "Labrador")
print(mi_perro.raza)
print(mi_perro.nombre)
```

:::tip Observación
- Las variables que se definen directamente dentro del cuerpo de una clase (a nivel de clase, no dentro de un método) y que no usan self, se consideran atributos de clase.
- Los atributos se acceden con `NombreClase.atributo` (atributo de clase) o `nombreObjeto.atributo` (atributo de instancia).
:::

#### Herencia
- La herencia es el proceso mediante el cual una clase adquiere los atributos y métodos de otra. A la clase que recibe los atributos/métodos  de otra clase, es decir que hereda desde otra clase, se le llama clase hija. A la clase que da la herencia a su clase hija se le llama clase padre.
- Se hereda de una clase padre creando una nueva clase y poniendo el nombre de la clase padre entre paréntesis:
```python
class Parent:
    hair_color = "brown"

class Child(Parent):
    pass
```

:::tip Observación
- En este ejemplo , la clase hija `Child` hereda de la clase padre Parent. Dado que las clases hijas adoptan los atributos y métodos de las clases padre, el valor de `Child.hair_color` es `"brown"`
:::

- Las clases hijas pueden anular o sobrescribir atributos y métodos del padre:

```python
class Parent:
    hair_color = "brown"

class Child(Parent):
    hair_color = "purple"
```
:::tip Observación
- El valor de `Child.hair_color` es `"purple"`
:::

- También puedes manipular los atributos del padre:

```python
class Parent:
    speaks = ["English"]

class Child(Parent):
    def __init__(self):
        super().__init__()
        self.speaks.append("German")

```

:::tip Observación
- Con `super()` accedemos a los métodos y a los atributos de la clase padre.
:::

#### Métodos de Python

#### `Type()`
- La función type() se utiliza en Python con dos objetivos bastante diferentes:
    - Determinar el tipo de un objeto (Todo hasta los datos primitivos son objetos)
    - Crear dinámicamente un nuevo tipo
- Si le pasamos un objeto como único parámetro. Como resultado obtenemos el tipo del objeto, por ejemplo `int` o `str`:
```python

print(type(42)) # <class 'int'>
print(type("42")) # <class 'str'>
```
:::tip Observación
- Aunque al principio puede parecer confuso lo que se muestra en la consola, tiene sentido. Python sigue el principio de “todo es un objeto”.
- En Python, cada objeto pertenece a una clase. Por eso, `type()` nos permite conocer la clase de un objeto, al igual que `__class__`.
:::
- Veamos ahora el segundo uso posible de la función `type()`. Si se llama con tres argumentos, la función nos permite crear dinámicamente un nuevo tipo:
```python
type(name, bases, dict)
```
:::tip Observación
- Con tres argumentos, la función `type()` de Python crea una clase. El código `Type = type("Name", bases, dict)` equivale aproximadamente a la siguiente definición de clase:
    ```python
       class <Name>(<bases>):
        <dict>
    ```
- `name`: Nombre de la clase como string.
- `bases`: Es una tupla con las clases padre.
- `dict`: Es un diccionario con los atributos de clase y métodos de la nueva clase.
:::



#### `isinstance()`
- La función `isinstance` recibe como argumentos un objeto y una clase y devuelve `True` si el objeto es una instancia de dicha clase o de una subclase de ella.
- El segundo argumento también puede ser una tupla que contenga varias clases o incluso otras tuplas de clases. `isinstance()` devuelve `True` si el objeto pertenece a alguna de esas clases.
- Parámetros:
  - `object`: Objeto a evaluar.
  - `classinfo`: Clase o tupla con varias clases.
- Retorna:
  - Un `booleano`.
##### Ejemplos
- Podemos comprobar si el número entero 5 pertenece a la clase int con el siguiente código:
```python
isinstance(5, int) # True
```
- Si pasásemos como segundo argumento el nombre de la clase str (cadenas de texto), la función devuelve False:
```python
isinstance(5, str)
```
- El argumento `classinfo` puede ser una tupla con varias clases. Devuelve `True` si el objeto pertenece a alguna de ellas:
```python
isinstance(5, (int, str)) # True
isinstance(5, (bool, str)) # False
```
- También puede ser una tupla que contenga otras tuplas de clases:
```python
isinstance(5, ((int, str), (float, bool))) # True
isinstance(5, ((complex, str), (float, bool))) # False
```
- Podemos probar la función con una clase personalizada:
```python
class circulo:
    def __init__(self, radio):
        self.radio = radio
c = circulo(3)
isinstance(c, circulo)
```

## `Assert` en Python
- El uso de `assert` en Python nos permite realizar comprobaciones. Si la expresión contenida dentro  del argumento   es `False`, se lanzará una excepción, concretamente `AssertionError`. Veamos un ejemplo:
```python
assert(1==2)
# AssertionError
```
- Es decir, si el contenido existente dentro del `assert` es igual a `False`, se lanzará la excepción. Se podría conseguir el mismo resultado haciendo lo siguiente, pero el uso de `assert()` resulta más cómodo:
```python
if condicion:
    raise AssertionError()
```
:::tip Observación
- En Python, `raise` se usa para lanzar  una excepción, y su equivalente en lenguajes como C#, Java o JavaScript sería `throw`.
:::

- También podemos añadir un texto (string) como segundo argumento, que se mostrará si la condición del `assert` es falsa:
```python
assert False, "El assert falló"
```
- Hay que tener cuidado, ya que la expresión anterior no es equivalente a la siguiente, que es incorrecta. Esto se debe a que `(False, "El assert falló")` se interpreta como una tupla, y una tupla siempre es `True`:
```python
# INCORRECTO
assert(False, "El assert falló")
```
:::tip Observación
- `bool((False, "El assert falló"))` siempre devuelve `True`.
- Esto sucede porque estas convirtiendo una tupla en un valor booleano.
- En Python, cualquier tupla no vacía se considera `True` en un contexto booleano. 
:::
- Por otro lado, también se puede hacer uso del `assert()` sin usar paréntesis como se muestra a continuación:
```python
x = "ElLibroDePython"
assert x == "ElLibroDePython"
```


## Operador ternario
- En Python, el operador ternario (también llamado expresión condicional) tiene la siguiente sintaxis:
```python
valor1 if condición else valor2
```
:::tip Observación
- Devuelve valor 1 si la condición es true. En caso de que sea false, devuelve valor2.
:::

- Ejemplo básico:
```python
x = 10
mensaje = "positivo" if x > 0 else "no positivo"
print(mensaje)  # Salida: positivo
```



## Generadores de Python  
- En Python, los generadores son una herramienta que permite generar secuencias de datos perezosamente (generando los datos solo cuando se necesitan).
- Piensa en los generadores como en leer un libro página por página. No necesitas arrancar todas las hojas y tenerlas esparcidas por el suelo para empezar a leer. Simplemente abres el libro, lees una página, la entiendes, y luego pasas a la siguiente. El libro “genera” cada página solo cuando la necesitas… y no ocupa más espacio del necesario.
- La magia de los generadores reside en la palabra clave `yield`. A diferencia de `return`, que devuelve un único valor y termina la función, `yield` devuelve un valor, pausa la función y guarda su estado. Cuando se vuelve a utilizar el generador, la función continúa desde donde se detuvo.

####  Un ejemplo básico de generador Python
- Practiquemos un poco para entender cómo funcionan. Aquí tienes una función generadora que produce los primeros `n` números enteros:
```python
def generate_integers(n):
    for i in range(n):
        yield i  # Pauses here and returns i

# Using the generator
for num in generate_integers(5):
    print(num)

```
:::tip Observación
- La función `generate_integers` no devuelve directamente un valor, sino un **objeto generador**.
- La primera vez que se utiliza el generador (por ejemplo, con `next()` o en un bucle `for`), la función comienza a ejecutarse hasta encontrar la primera instrucción `yield`. En ese momento, devuelve el valor indicado por `yield`, pausa su ejecución y guarda su estado (en dónde se quedó y el valor de las variables, expresiones, etc. en ese momento).
- Cada vez que se vuelve a utilizar el generador, la función continúa desde donde se quedó y sigue ejecutándose hasta encontrar el siguiente `yield`. Luego, devuelve ese nuevo valor y vuelve a pausarse.
- Cuando la función termina y no hay más `yield` (por ejemplo, llega al final o ejecuta un `return`), el generador se agota y ya no produce más valores.
- En resumen: los `yield` indican los valores que se devuelven en cada iteración, cada vez que se utiliza el generador.
:::

#### Sintaxis y patrones del generador de Python 
- Los generadores pueden crearse de varias formas. Dicho esto, hay dos formas principales: las funciones generadoras y las expresiones generadoras.

#### Funciones del generador  
- Una función generadora se define como una función normal, pero utiliza la palabra clave `yield` en lugar de `return`. Cuando se ejecuta, devuelve un objeto generador sobre el que se puede iterar.  
- Ejemplo:
```python
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num)
```

#### Expresión generadora
- Las expresiones generadoras son una forma compacta de crear generadores.
- Sintaxis:
```python
(función(item) for item in iterable)
```

:::tip Observación
- Se recorre (itera) el iterable (puede ser una lista, tupla, rango, etc.) y cada dato se almacena en la `variable item`.
- Por cada valor se ejecuta  `funcion(item)`
- Lo que devuelve `funcion(item)` es lo que la expresión generadora entrega en cada iteración cuando se la consume.
- La expresión generadora es exactamente todo lo que está dentro de los paréntesis.
- Una expresión generadora crea un nuevo generador a partir de otro iterable. En resumen: Una expresión generadora toma un iterable (lista, tupla, rango, generador, etc.) y produce un nuevo generador que "transforma" sus elementos uno por uno.
:::



- Ejemplo:
```python
def procesar(x):
    print(f"Procesando: {x}")
    return x.upper()

nombres = ["ana", "luis", "maría"]

# Expresión generadora
gen = (procesar(nombre) for nombre in nombres)

print("Generador creado. Aún no se ha ejecutado nada.")

# Ahora lo consumimos con join()
resultado = " | ".join(gen)

print("\nResultado final:")
print(resultado)
```


:::tip Observación
- El método `join()` recibe un iterable cuyos elementos deben ser cadenas (str), y devuelve una única cadena en la que todos esos elementos están concatenados (unidos), usando el string que lo llama/ejecuta como separador.
- Los generadores son iterables.
:::

## Código Pythonic
- "Código Pythonic" se refiere a código escrito en Python que no solo funciona correctamente, sino que también sigue las convenciones (reglas formadas por la comunidad de Python), principios (reglas fundamentales y a menudo  universal) y estilo idiomático (forma de hablar o escribir) del lenguaje. Es decir, aprovecha las características únicas de Python para ser claro, conciso, legible y eficiente, tal como lo haría un programador experimentado en Python.
- Se enfoca en la simplicidad, legibilidad y en aprovechar las caracteristicas integradas de Python.

:::tip
- Escribe código que puedas entenderlo incluso después de un año. 
- Si después de un año lo entendés, cualquier persona puede entenderlo.
:::

- Mejores prácticas:
    - Nombre de variables descriptivo
    - Escribe código modular a través de funciones y clases. Cada función solo debe tener una sola responsabilidad.
    - Seguimos las directrices de PEP 8 (guía oficial para escribir código Python)
    - Evita la redundancia, evita repetir código. Aprovecha las funciones integradas de Python.

## Comprensiones de lista 
- Las comprensiones de lista son una forma concisa de crear listas  en una sola línea de código.
- Una comprensión de lista crea una nueva lista a partir de un iterable. En resumen: toma un iterable (como una lista, tupla, rango o generador), itera sobre cada uno de sus elementos, aplica una transformación (modifica) a cada uno y almacena los resultados en una nueva lista que devuelve. 
- La sintaxis es:
```python
[expression for item in iterable if condition]
```

:::tip Observación
- Desglose de sus partes:
    - `expression`: La operación o transformación que se aplica a cada item que cumple la condición. Puede ser tan simple como un operador aritmético  o tan compleja como una función. Siempre debe devolver/retornar un valor que sera el resultado de la transformacion y el que se incluirá en la nueva lista que se está construyendo.
    - `item`: La variable que toma el valor de cada elemento del iterable en cada iteración.
    - `iterable` : Cualquier objeto que se pueda recorrer (como una lista, tupla, cadena, rango, etc.).
    - `condition` (opcional):  Una expresión booleana. Solo se incluyen en la lista resultante aquellos elementos para los que esta condición es `True`.
- La parte `if condition` es opcional. Si no se incluye, se procesan todos los elementos.
- `expression` puede usar `item` (o cualquier nombre que le des a la variable de iteración) y también puede incluir llamadas a funciones, operaciones, etc.
:::

- Ejemplo:
```python
squares = [x**2 for x in range(10)] #squares es una lista
print(squares)
```
- Lo anterior es equivalente a:
```python
squares = []
for x in range(10):
    if x % 2 == 0:
        squares.append(x**2)
```

- Ahora con una `conditional`:
```python
print(evens)
```
- Lo anterior es equivalente a:
```python
evens = []
for x in range(10):
    if x % 2 == 0:
        evens.append(x)
```

## Funciones Lambda
- Son funciones anónimas (que no tienen nombre, solo contiene los argumentos y el código que se ejecutara)  que se crean usando la palabra clave `lambda`.
- La sintaxis es:
```python
lambda argumentos:codigo-que-se-ejecutara
```
- Ejemplo:
```python
add = lambda x,y: x + y
print(add(2, 3))
```
:::tip
- Aunque las `funciones lambda` pueden asignarse a variables para poder ser usadas, no es lo recomendado, ya que su propósito principal es servir como funciones anónimas, especialmente como argumentos de otras funciones (como map, filter, sorted, etc.) o en contextos donde se necesita una función pequeña y temporal sin necesidad de darle un nombre. 
:::


- Lo anterior es equivalente a:
```python
def add(x, y):
    return x + y

print(add(2, 3))
```


## Métodos de iterable
#### map()
- `map()` es una función de Python que ejecuta una función por cada elemento de un iterable (como una lista o tupla).
- La función que se ejecuta/aplica recibe como argumento el valor de cada elemento y debe devolver un valor.
- `map()` devuelve un objeto `map` (un iterador) que produce los resultados —es decir, los valores devueltos por la función al ser llamada con cada elemento.
- Ejemplo:
```python
numbers = [1, 2, 3, 4, 5]
squares = map(lambda x: x**2, numbers)
print(list(squares))
```
:::tip Observación
- `map()` recibe dos parámetros:
    - Una función (en este caso, una función lambda):
        - Esa función tiene un solo parámetro `(x)`, que representa el valor de cada elemento del iterable.
        - Por cada elemento de la lista, `map()` llama a la función pasándole el valor de cada elemento al `parámetro x`. Por ejemplo, La primera vez, `x` es igual al primer elemento, que es 1, La segunda vez, `x` es 2 y Y así sucesivamente hasta el último elemento (5 → 25).
        - La función debe devolver un valor (en este caso, el cuadrado del número).
    - Un iterable (en este caso, la lista numbers).
        - map() recorre este iterable elemento por elemento y aplica la función a cada uno.
- El resultado de `map()` es un objeto de tipo `map`, que es un iterador. Esto significa que no es una lista todavía, sino un objeto que puede entregar los resultados uno a uno cuando se lo pide.
- La función `list()` toma ese iterador y crea una lista  con todos los valores que el iterador puede entregar.
:::

#### filter()
- `filter()` es una función incorporada de Python que selecciona (filtra) los elementos de un iterable según una condición. Solo "pasa" aquellos elementos para los que la condición es verdadera (True).
- `filter()` es parecido a `map()`, pero con una diferencia clave:
    - La función que se le pasa debe devolver `True` o `False` (o un valor que se pueda interpretar como tal).
    - Por cada elemento del iterable, `filter()` llama a la función:
        - Si la función devuelve `True`, el elemento se incluye en el resultado (objeto `filter` final).
        - Si devuelve `False`, se descarta.
- `filter()` devuelve un objeto `filter`, que es un iterador que produce los elementos  para los que la función devolvió True.
- Ejemplo:
```python
numbers = [1, 2, 3, 4, 5]
eventList = filter(lambda x: x % 2 == 0, numbers)
print(list(eventList))
```
:::tip Observación
- La sintaxis es igual que `map`.
:::
#### reduce()
- `reduce()` es una función que ejecuta una función por cada elemento de un iterable y devuelve solo un valor final. 
- Esta función hay que importarla desde el módulo `functools`.
- La función que recibe `reduce()` tiene dos parámetros:
    - `acumulador`: Contiene el valor que devolvió la función anteriormente. Por defecto, es el primer elemento del iterable (si no se indica otro valor inicial).
    - `elemento`: Contiene cada elemento del iterable.
- Flujo:
    - Lo que devuelve la función se almacena en el acumulador para la siguiente ejecución.
    - Este proceso se repite con cada elemento del iterable, hasta que no quedan más elementos.
    - Al final, `reduce()` devuelve el valor final del acumulador.
- Ejemplo:
```python
from functools import reduce
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(product)
```

:::tip qué pasa internamente
- Primera ejecución de la función:
    - `x = 1` (el primer elemento de la lista → se usa como valor inicial del acumulador)
    - `y = 2` (el segundo elemento de la lista → el primer "elemento" que se procesa)
    - Se ejecuta: `1 * 2`
    - Devuelve: `2`
    - Ese 2 se guarda y almacena en `x` en la próxima llamada.
- Segunda  ejecución de la función:
    - `x = 2` es el resultado de la primera multiplicación `(1 * 2)`.
    - `y = 3`  el tercer elemento de la lista (`numbers[2]`)
    - Se ejecuta: `2 * 3`
    - Devuelve: `6`
    - Ese 6 se guarda y almacena en `x` en la próxima llamada.
- Tercera  ejecución de la función:
    - `x = 6` es el resultado de la segunda multiplicación `(2 * 3)`.
    - `y = 4` el cuarto elemento de la lista (`numbers[3]`)
    - Se ejecuta: `6 * 4`
    - Devuelve: `24`
    - Ese 24 se guarda y almacena en `x` en la próxima llamada.
- Cuarta ejecución de la función:
    - Realiza el mismo proceso.
    - Devuelve: `120`
    - Como no hay más elementos, ese 120 es el resultado final del `reduce` y, por lo tanto, el valor que retorna.
:::

## Módulos `os` y `sys`
#### Módulo `os`
- Proporciona funciones para interactuar con el sistema operativo.
- Algunas de las funciones incluyen: crear una nueva carpeta, eliminar un archivo específico, obtener la ruta actual, etc.
- Ejemplo:
```python
import os 
# La función getcwd() devuelve el directorio de trabajo actual, es decir, la ruta desde el cual se está ejecutando el script.
print(os.getcwd())
# Crea un nuevo directorio llamado "test_dir" en el directorio de trabajo actual.
os.mkdir("test_dir")
# El metodo remove borra el archivo especificado en el directorio de trabajo actual.
os.remove("sample.txt")
```
#### Módulo `sys`
-  Proporciona funciones para interactuar con el intérprete de Python (entorno de ejecución).
- Facilita el acceso a las variables que utiliza o mantiene el intérprete de Python. También proporciona herramientas para acceder a los argumentos que se especifican en la línea de comandos y a los parámetros específicos del sistema.
- Algunas de las funciones incluyen: obtener los argumentos que se especificó en la línea de comandos, obtener la versión de Python, etc.
- Ejemplo:
```python
import sys 

# Obtener los argumentos de la línea de comandos
print(sys.argv)

# Imprimir la versión de Python
print(sys.version)
```


## Desestructuración/Desempaquetado 
- En Python la desestructuración se llama desempaquetado.
- El desempaquetado es una característica extremadamente útil de Python que permite extraer los valores de listas, tuplas u otros iterables  y asignarlos directamente a variables individuales.
- La sintaxis de desempaquetado es una característica  que permite extraer valores de arreglos (arrays) o objetos y asignarlos directamente a variables distintas.
- Esto facilita el almacenamiento de esos valores en variables individuales para su posterior uso, y funciona tanto con objetos como con arreglos. 

#### Sintaxis
```python
variable1, variable2, ..., variableN = iterable
```
:::tip Observación
- Cada valor que entrega el iterable se asigna, en orden, a una variable:
    - La primera variable recibe el primer elemento que entrega el iterable (por ejemplo, el primer elemento de una lista).
    - La segunda variable recibe el segundo elemento,
    - …y así sucesivamente, hasta la última variable, que recibe el último elemento.'
- En el desempaquetado básico (sin el `operador *`), la cantidad de variables debe ser exactamente igual a la cantidad de elementos que entrega el iterable. 
:::

Ejemplos:
```python
# Desempaquetado de listas en Python
miLista = ["Bob", 25]
x, y = miLista   # x = miLista[0], y = miLista[1]
print(x)  # Output: Bob
print(y)  # Output: 25


# Desempaquetado de tuplas en Python
miTupla = ("Bob", 25)
x, y = miTupla   # x = miTupla[0], y = miTupla[1]
print(x)  # Output: Bob
print(y)  # Output: 25

# Desempaquetado de cadenas en Python
miCadena = "AB"
x, y = miCadena   # x = miCadena[0], y = miCadena[1]
print(x)  # Output: A
print(y)  # Output: B

# Rango
miRango = range(10, 12)  # secuencia: 10, 11
x, y = miRango   # x = miRango[0], y = miRango[1]
print(x)  # Output: 10
print(y)  # Output: 11
```

#### Descartar valores
- ¿Qué pasa si no necesitamos usar todos los valores que extraemos de un iterable? No hay problema: no es obligatorio usarlos todos. 
- Podemos usar el símbolo `_` en lugar de un nombre de variable para indicar que ese valor se extraerá, pero que no se usará. Python lo asigna a una variable llamada `_`, pero por convención, ese nombre significa: "este valor no me importa". 
- Ejemplo:
```python
# Desempaquetado de listas en Python con descarte
miLista = ["Bob", 25, "ingeniero"]
nombre, _, profesion = miLista   # nombre = miLista[0], _ = miLista[1] (descartado), profesion = miLista[2]
print(nombre)      # Output: Bob
print(profesion)   # Output: ingeniero
```

#### `Operador *`
- El símbolo `*` se escribe antes del nombre de una variable para que almacene los valores restantes en una lista. 
- La variable con `*` siempre almacena una lista con los valores que "sobran": 
    - Si está al comienzo, toma todos los valores menos los últimos.
    - Si está en el medio, toma los valores que se encuentran entre los que se asignan antes y después.
    - Si está al final, toma todos los valores después de los primeros.
- Ejemplo:
```python
# * al comienzo
*inicio, penultimo, ultimo = [1, 2, 3, 4, 5]
# inicio = [1, 2, 3], penultimo = 4, ultimo = 5

# * en el medio
primero, *medio, ultimo = [10, 20, 30, 40]
# primero = 10, medio = [20, 30], ultimo = 40

# * al final
primero, segundo, *resto = [100, 200, 300, 400, 500]
# primero = 100, segundo = 200, resto = [300, 400, 500]
```


#### Desempaquetado de diccionarios en Python
- Si usamos la sintaxis de desempaquetado en un diccionario, solo extraeremos las claves, no los valores. 
- Ejemplo:
```python
# Desempaquetado de un diccionario en Python
miDict = {"nombre": "Ana", "edad": 30}

# Al desempaquetar, extraeremos solo las claves, no los valores
clave1, clave2 = miDict   # clave1 = "nombre", clave2 = "edad"

print(clave1)  # Output: nombre
print(clave2)  # Output: edad
```

- Para poder extraer los valores, usamos el método `.values()`, que devuelve un objeto de tipo `dict_values`. Este objeto no es una lista, pero es iterable, así que se puede desempaquetar. 
- Ejemplo:
```python
miDict = {"nombre": "Ana", "edad": 30}
nombre, edad = miDict.values()   # nombre = "Ana", edad = 30
print(nombre)
```




#### Módulo `operator`
- El módulo `operator` proporciona funciones para realizar operaciones matemáticas, pero también ofrece herramientas para manipular diccionarios, como `itemgetter()`.
- Esta función genera una función que recibe un diccionario como parámetro y devuelve una tupla con los valores de las claves especificadas en el argumento de `itemgetter()`.
- Ejemplo:
```python
from operator import itemgetter

# Diccionario de ejemplo con datos de un usuario
usuario = {
    "id": 42,
    "nombre": "Martín",
    "email": "martin@ejemplo.com",
    "rol": "administrador",
    "activo": True
}

# itemgetter() crea una FUNCIÓN que extrae
# los valores de las claves que le indiquemos.
extraer_datos = itemgetter("id", "nombre", "email", "rol")




# Al llamar esa función con el diccionario 'usuario',
# devuelve una TUPLA con los valores en el mismo orden:
# (valor de "id", valor de "nombre", valor de "email", valor de "rol")
tupla_datos = extraer_datos(usuario)  # → (42, "Martín", "martin@ejemplo.com", "administrador")

# Desempaquetamos la tupla en variables individuales
id_usuario, nombre, correo, rol = tupla_datos

# Mostramos los valores extraídos
print(id_usuario)  # 42
print(nombre)      # Martín
print(correo)      # martin@ejemplo.com
print(rol)         # administrador
```


## Proyectos

##### Contador de palabras
```python
sentence = input("Enter a Sentence: ")
# split()
# Convierte el string (cadena de texto) en una lista donde cada palabra es un elemento de la lista.
# Divide un string en partes más pequeñas, usando un separador (como un espacio, una coma, etc.) y te devuelve una lista con esas partes.
# Por defecto, el separador es un espacio en blanco.
words = sentence.split()
word_count = {}
for word in words:
    word = word.lower()
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1
        
print(word_count)
```

##### Contador de palabras - Archivo

```python
def count_words_and_lines(filename):
    try:
        with open(filename, "r") as file:
            lines = file.readlines() # Lee todas las líneas del archivo y las almacena en una lista
            line_count = len(lines) # Cuenta el número de líneas - len() devuelve el numero de elementos en una lista, tupla, diccionario, etc
                                    # o el numero de caracteres en una cadena
            word_count = sum(len(line.split()) for line in lines) # Split() divide una cadena en partes, cada parte es un elemento de una lista. 
                                                                  # Devuelve una lista. 
                                                                   # Utiliza un separador (por defecto es espacio en blanco) para saber cuando termina una parte. 
                                                                   # Sum() devuelve la suma de todos los elementos de un iterable (lista, tupla, etc)
            
            print(f"Number of lines: {line_count}")
            print(f"Number of words: {word_count}")
    except FileNotFoundError:
        print(f"File {filename} not found!")
        
count_words_and_lines("sample.txt")
```

##### Escribir y Leer una lista de elementos.
```python
# Funcion para escribir una lista de items en un archivo
# Recibe el nombre del archivo y la lista de items que se van a escribir en el archivo.
def write_iteam_to_file(filename, items):
    # Crea el archivo si no existe, y escribe los items en el archivo.
    with open(filename, "w") as file:
        for item in items:
            file.write(item + "\n")  # Con /n se agrega una nueva linea despues de cada item. Es para que cada item quede en una linea diferente.
            

# Funcion para leer elementos de un archivos.
# Recibe el nombre del archivo.
def read_items_from_file(filename):
    try:
        with open(filename, "r") as file:
            items = file.readlines() # Lee todas las lineas del archivo y las guarda en una lista.
            print("Items in the file:")
            for item in items:
                print(item.strip()) # strip() elimina los espacio en blanco al inicio y al final de cada linea.
    except FileNotFoundError:
        print(f"File {filename} not found!")
        
fruits = ["Apple", "Banana", "Cherry", "Dates"] # Lista de frutas a escribir en el archivo.
write_iteam_to_file("fruits.txt", fruits) # Escribe la lista de frutas en el archivo "fruits.txt".
read_items_from_file("fruits.txt") # Lee e imprime los items del archivo "fruits.txt".
```

##### Gestor de tareas de líneas de comandos


```python
import os

# Nombre del archivo para almacenar las tareas
FILE_NAME = "tasks.txt"

# Esta función carga las tareas desde el archivo
# Devuelve un diccionario con las tareas
def load_tasks():
    # Un diccionario vacio para almacenar las tareas
    tasks = {}
    # Verifica si el archivo existe
    # os.path.exists(ubicación del archivo) devuelve True si el archivo existe
    if os.path.exists(FILE_NAME):
        with open(FILE_NAME, "r") as file:
            for line in file:
                task_id, title, status = line.strip(). split(" | ")
                # Almacena la tarea en el diccionario, usando el ID como clave
                tasks[int(task_id)] = {"title": title, "status": status}
    # Devuelve el diccionario con todas las tareas almacenadas
    return tasks




# Esta función guarda las tareas en el archivo
def save_tasks(tasks):
    with open(FILE_NAME, "w") as file:
        for task_id, task in tasks.items():
            file.write(f"{task_id} | {task['title']} | {task['status']}\n") # Con /n se crea una nueva línea.
            
# Esta función agrega una nueva tarea
def add_task(tasks):
    # Solicita al usuario el título de la tarea
    title = input("Enter task title: ")
    
    task_id = max(tasks.keys(), default=0) + 1
    # Agrega la tarea al diccionario con el estado "incompleto"
    # La tarea es un diccionario con las claves "title" y "status"
    tasks[task_id] = {"title": title, "status": "incomplete"}
    print(f"Task '{title}' added.")
    
# Esta función muestra todas las tareas
def view_tasks(tasks):
    # Verifica si hay tareas. La sintaxis "not diccionario" , devuelve True si el diccionario está vacío
    if not tasks:
        print("No tasks available.")
    else:
        for task_id, task in tasks.items():
            print(f"[{task_id}] {task['title']} - {task['status']}")


# Esta función marca una tarea como completa
def mark_task_complete(tasks):
    # Solicita al usuario el ID de la tarea a marcar como completa
    task_id = int(input("Enter task ID to mark as complete: "))
    # Verifica si la tarea existe. La sintaxis "clave in diccionario" devuelve True si la clave existe en el diccionario
    if task_id in tasks:
        # Actualiza el estado de la tarea a "complete"
        tasks[task_id]["status"] = "complete"
        print(f"Task '{tasks[task_id]['title']}' marked as complete.")
    else:
        print("Task ID not found.")
        

# Esta función elimina una tarea
def delete_task(tasks):
    # Solicita al usuario el ID de la tarea a eliminar
    task_id = int(input("Enter task ID to Delete: "))
    # Verifica si la tarea existe
    if task_id in tasks:
        # Elimina la tarea del diccionario
        deleted_task = tasks.pop(task_id)
        print(f"Task '{deleted_task['title']}' deleted.")
    else:
        print("Task ID not found.")
        
# Esta es la función principal que mostrará el menú y interactuará con el usuario
def main():
    tasks = load_tasks()
    while True:
        print("\nTask Manager Menu:")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Mark Task as Complete")
        print("4. Delete Task")
        print("5. Exit")
        choice = input("Enter your choice: ")
        
        if choice == "1":
            add_task(tasks)
        elif choice == "2":
            view_tasks(tasks)
        elif choice == "3":
            mark_task_complete(tasks)
        elif choice == "4":
            delete_task(tasks)
        elif choice == "5":
            save_tasks(tasks)
            print("Goodbye")
            break
        else:
            print("Invalid Choice. Please try again")
            
if __name__ == "__main__":
    main()
```


:::tip 
- Es una buena práctica que el nombre de las constantes (variables que nunca cambian de valor) se definan en `MAYÚSCULA`.
:::


:::tip Observación
- El método `open()` devuelve un `objeto archivo` que se almacena en la `variable file`.
- Cuando se recorre un archivo abierto en modo lectura con un bucle `for`, Python llama al método `__iter__()` del objeto archivo, que devuelve un iterador. Entonces, el propio objeto archivo actúa como  iterador, y en cada iteración/ejecución del bucle se invoca internamente su método `__next__()`, el cual lee y devuelve la siguiente línea del archivo — de forma equivalente a `readline()`, aunque más eficiente. En resumen, al usar un bucle `for` sobre un `objeto archivo` abierto en modo lectura, Python recorre línea por línea el contenido del archivo sin cargarlo en memoria, gracias a que el `objeto archivo` es iterable y su iterador lee cada línea de forma eficiente en cada iteración. 
- En el método `add_task`, usamos el **desempaquetado** en el bucle `for`.
- El método `keys()` devuelve todas las claves del diccionario como un iterable (similar a una lista), por ejemplo: ['key1', 'key2', 'key3']. Es muy parecido a `items()` solo que devuelve todas las claves  dentro de un objeto vista de tipo `dict_keys`.
- El método `max(iterable, default=valorPorDefecto)` devolverá el valor más grande del iterable, pero si este no contiene elementos, entonces retornará valorPorDefecto.
:::

:::tip variable  `__name__`
- `__name__` es una variable especial (atributo) que Python define automáticamente en cada módulo (es decir, en cada archivo `.py`).
- Su valor depende de cómo se está usando ese archivo:
    - Si el archivo se ejecuta directamente, por ejemplo con `python mi_programa.py`, entonces su valor es `__main__`.
    - Si el archivo se importa desde otro (`import nombreModulo`), entonces su valor sera el nombreModulo (`"nombreModulo"`)
- Se suele usar en un condicional (`__name__ == "__main__"`) para ejecutar código solo cuando el archivo se corre directamente (ejecuta), y no cuando se importa desde otro módulo.
- En otros lenguajes, el método `main()` define qué código se ejecutará cuando el programa (es decir, el archivo) se ejecute. En Python no existe un método `main()`, así que se suele usar el condicional `if __name__ == "__main__":` para indicar el código que debe ejecutarse solo cuando el archivo se ejecute.
:::

