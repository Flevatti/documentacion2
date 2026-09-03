---
sidebar_position: 4
---

# NumPy
- NumPy es una biblioteca fundamental en Python para cálculos numéricos.
- Proporciona una manera rápida y eficiente de realizar operaciones en grandes conjuntos de datos.
- Utiliza matrices (arrays) y soporta operaciones matemáticas complejas.
- Se recomienda usarlo en el campo de IA debido a las siguientes razones:
    - Rendimiento: Las matrices (arrays) de NumPy son más eficientes que las listas de Python.
    - Facilidad de uso: Viene con herramientas para operaciones matemáticas y de álgebra lineal (cálculos con vectores y matrices).
    - Integración: Se puede usar junto con bibliotecas como Pandas, Matplotlib, TensorFlow y PyTorch.



## Crear Arrays
- Se pueden crear arrays de diferentes maneras.

##### Desde una lista
```python
import numpy as np # Importamos la librería numpy
# Crear un array desde una lista de Python
array = np.array([1, 2, 3, 4, 5])
print("Array creado desde una lista de Python:")
print(array)
```

:::tip Observación
- El método `np.array(lista)`, convierte la lista que le indicamos en el parámetro en un array y lo retorna.
:::

#### Desde funciones
##### Método `np.zeros(forma)`
- El método `np.zeros(forma)` crea un array con la forma especificada, inicializando todos sus elementos en cero.
El argumento forma puede ser:   
    - Un `número entero`: crea un array de una dimensión (vector / unidimensional ) con esa cantidad de ceros. Ejemplo: `np.zeros(5)` → `[0. 0. 0. 0. 0.]`.
    - Una `tupla de enteros`: la cantidad de elementos indica el número de dimensiones que va a tener el array, y cada número indica el tamaño (cantidad de elementos) de cada dimensión. El primer elemento indica el tamaño de la primera dimensión, el segundo el de la segunda dimensión, y así sucesivamente. Ejemplo: `np.zeros((2, 3)) → [[0. 0. 0.] [0. 0. 0.]]`. 
- Ejemplo:

```python
import numpy as np # Importamos la librería numpy


zeroes = np.zeros((3, 3)) # Creamos un array de 3x3 de ceros. [[0. 0. 0.] [0. 0. 0.][0. 0. 0.]]

print(zeroes)
```

##### Método `np.ones(forma)`
- El método `np.ones(forma)` es igual que `np.zeros(forma)`, solo que inicializa todos sus elementos en uno.
- Ejemplo:
```python
import numpy as np # Importamos la librería numpy
ones = np.ones((3, 4)) # Creamos una matriz de 3x4 llena de unos
print("Matriz de unos:\n", ones) # Imprimimos la matriz de unos
```

##### Método `np.arange()`
`np.arange()` es una función de NumPy que crea un array de números enteros (o flotantes) en un rango especificado, similar a la función `range()` de Python, pero devuelve un `array de NumPy` en lugar de un objeto iterable.
- Sintaxis básica:
```python
np.arange(stop)
np.arange(start, stop) 
np.arange(start, stop, step)
```
:::tip ¿Qué hace?
- Genera una secuencia de números empezando en start (por defecto 0), hasta (pero sin incluir) stop, avanzando de a step (por defecto 1).
- La secuencia generada se almacena en un array de NumPy.
:::

- Puede recibir tres argumentos:
    - `start` (opcional): define el número de inicio, es decir, el primer valor de la secuencia. Puede ser entero o flotante. Su valor por defecto es 0.
    - `stop` (obligatorio): define el valor final de la secuencia, excluyéndolo. Puede ser entero o flotante.
    - `step` (opcional): define el incremento entre un número y el siguiente. Puede ser entero o flotante. Su valor por defecto es 1.
- Ejemplo:
```python
import numpy as np # Importamos la librería numpy
range_array = np.arange(1 , 10 , 2) # Creamos un array con valores desde 1 hasta 10 con un paso de 2 (a cada elemento se le suma 2 para obtener el siguiente valor) 
print(range_array) # Salida : [1 3 5 7 9]
```

##### Método `np.linspace()` 
- Devuelve un arreglo (array) de números espaciado uniformemente dentro de un intervalo específico.
-  Sintaxis básica:

```python
np.linspace(start, stop, num=50, endpoint=True, ...)
```

:::tip Observación
- Parámetros principales:
    - `start`: valor inicial del intervalo.
    - `stop`: valor final del intervalo.
    - `num`: especifica exactamente cuántos números quieres que genere en total, dentro del intervalo indicado. (por defecto: 50).
    - `endpoint`: si es True (valor predeterminado), stop se incluye en el arreglo; si es False, no se incluye.
:::


:::tip ¿Qué es un intervalo?
- Un intervalo es simplemente un rango (conjunto de valores) entre dos números.
-  Ejemplo:
    - Del `0 al 10` → ese es un intervalo.
    - Del `-5 al 5` → otro intervalo.
    - De `1.5 a 3.7` → también es un intervalo.
:::

:::tip ¿Qué significa “números espaciados uniformemente”?
- Significa que los números están separados por la misma distancia entre sí.
- Imagina que quieres tener "5 números (este valor se indica por el argumento `num`)" que tengan la misma distancia entre 0 y 10:
```python
0 ---- 2.5 ---- 5 ---- 7.5 ---- 10
```
- La distancia entre cada número es siempre 2.5. Eso es espaciado uniforme: cada valor se obtiene sumando 2.5 al anterior.
:::

- Ejemplo:
```python
import numpy as np # Importamos la librería numpy
linspace = np.linspace(0, 1, 5 ) # Creamos un array con 5 valores que tengan la misma distancia entre 0 y 1
print(linspace) # [0. ,  0.25 ,0.5 , 0.75 ,  1. ] . Todos los numeros tienen la misma distancia entre ellos. La distancia es 0.25
```

## Manipular Arrays
- Podemos hacer un montón de cosas diferentes, como cambiar la forma de una matriz, y también podemos añadir dimensiones a una matriz.

##### Método `array.reshape(forma)` 
- El método `reshape(forma)` cambia la forma (es decir, las dimensiones) de un arreglo (array) sin cambiar sus datos.
- Es como reorganizar los mismos elementos en una nueva estructura, como si reacomodaras bloques sin añadir ni quitar ninguno.
- El argumento `forma` que recibe el método `reshape` es el mismo que usan `np.zeros(forma)` y `np.ones(forma)`. La única diferencia es que, cuando se trabaja con una estructura de más de una dimensión, `reshape` permite especificar el tamaño de cada dimensión con paréntesis (como una tupla) o sin ellos, mientras que `np.zeros()` y `np.ones()` requieren que la forma se pase obligatoriamente como una tupla.

- Ejemplo:
```python
import numpy as np # Importamos la librería numpy

arr = np.array([1, 2, 3, 4, 5 , 6]) 
reshaped_arr = arr.reshape(2, 3)  # Cambiamos la forma del array a 2x3 y mantenemos los datos
print(reshaped_arr)
# Si intentamos cambiar la forma a una que no sea compatible con el número de elementos, obtendremos un error
# Por ejemplo, la siguiente línea lanzaría un ValueError:
reshaped_arr = arr.reshape(3, 3) # Esto lanzará un error porque para una matriz de 3x3 se necesitan 9 elementos (multiplicamos 3x3), pero solo tenemos 6.
```

##### `np.newasis` 
- Con `np.newaxis` podemos agregarle una dimensión adicional a un arreglo, sin cambiar sus datos.
- La sintaxis es:
```python
array[posición1, posición2, posición3, ...]
```

:::tip Observación
- En cada posición dentro de los corchetes `(array[pos, pos, ...])`, puedes usar: 
    -  El carácter '`:`' :  Toma todos los elementos del array en esa dimensión.
    - Un número (como 0, 5, 50) : Selecciona una rebanada (parte) del arreglo correspondiente a esa posición en la dimensión correspondiente (es decir, en la dimensión que ocupa ese lugar en los corchetes). 
    - `np.newaxis` : Agrega una nueva dimensión  de tamaño 1 en esa posición.
- Cada posición en los corchetes corresponde a una dimensión: la posición1 corresponde a la dimensión 0, la posición2 a la dimensión 1, la posición3 a la dimensión 2, etc. En NumPy, las dimensiones se numeran desde 0, así como los índices de los elementos. Por eso, la primera dimensión es la dimensión 0, la segunda es la dimensión 1, y así sucesivamente.
:::



:::tip Posición útil
- `:` toma todos los elementos de una dimensión determinada del array original. Para lograr esto, utiliza una **posicion util** que le indica que dimension del array original debe usar.
- La **posicion util** al comienzo es 0 y apunta a la dimensión 0 del array original. 
- Por cada posición va aumentando en 1, por ejemplo en la posición2 apunta a la  dimensión 1, en la posición3 apunta a la  dimensión2, etc…
- La **posicion util** no aumenta, si en una posición esta `np.newaxis`.
- Por ejemplo en `array[np.newaxis, :]`, el "`:`" todavía está en la **posicion util** 0, ya que ignora `np.newaxis`.
:::


:::tip ¿Que es una dimensión?
- Cada dimensión es como una caja (que puede contener una cierta cantidad de elementos o cajas; esa cantidad representa el tamaño de la dimensión), y cada caja representa un array.
- Cuando hablamos de agregar una dimensión nos referimos a poner una caja dentro de otra caja.
- Un array de 1 dimensión → una sola caja que contiene elementos: `[10, 20, 30]`
- Un array de 2 dimensiones → una caja grande que contiene cajas más pequeñas: `[[10, 20], [30, 40]]`
- Un array de 3 dimensiones → una caja que contiene cajas, que a su vez contienen cajas: `[[[1, 2],[3, 4]],[[5, 6],[7, 8]]]`
:::

- Ejemplos:
```python
import numpy as np # Importamos la librería numpy

array = np.array([1, 2, 3]) # Creamos un array de numpy
expanded = array[:, np.newaxis] # Expandimos las dimensiones del array
print( expanded) # Resultado : [[1] ,[2] , [3]]
```

:::tip Observación
- Como hay dos posiciones, tiene dos dimensiones.
- El array nuevo (expanded), usa  la dimension 0 del array original ya que el `:`le indica que deje la dimension 0 tal como esta. 
- `np.newaxis` crea una nueva dimensión (en este caso la dimensión 1) de tamaño 1. Que sea de tamaño 1 implica que cada valor (elemento) de la dimensión anterior se envuelve en una nueva caja (array) de un solo elemento (tamaño 1).
:::

```python
import numpy as np # Importamos la librería numpy
array = np.array([1, 2, 3]) # Creamos un array de numpy
expanded = array[ np.newaxis , :] # Expandimos las dimensiones del array
print( expanded) # Resultado : [[1 2 3]]
```

:::tip Observación
- Como hay dos posiciones `(np.newaxis, :)`, el resultado tiene dos dimensiones.
- El array nuevo (expanded) no usa la dimensión 0 del array original como dimensión 0, sino como dimensión 1 (porque `np.newaxis` la desplaza).
- Al usar `np.newaxis` en la primera posición, se crea una nueva dimensión 0 de tamaño 1, es decir, una caja nueva que contendrá todo lo demás.
- El `:` en la segunda posición indica: “usa todos los elementos de la dimensión 0 del array original tal como están en la dimension 1".
- Como el array original es de una sola dimensión (una caja con 3 elementos), esa caja original  se coloca íntegramente dentro de la nueva caja, formando una única fila: `[[1 2 3]]`.
:::

```python
import numpy as np

A = np.array([[10, 20, 30],
              [40, 50, 60]]) 


fila_1 = A[1, :]  

print(fila_1)
# Salida: [40 50 60]
```

:::tip Observación
- `A[1, :]` tiene dos posiciones en los corchetes, pero el resultado tiene una sola dimensión, porque al usar un número (1) en la primera posición, esa dimensión se elimina del resultado.
- Primera posición: `1` (un número): Selecciona el segundo elemento del array original en la dimensión cero (que es un array, por eso decimos que es una parte de un array). Los números no crean una dimensión en el array que se genera, por lo tanto, podríamos decir que recorta el array para que la siguiente posición utilice lo seleccionado para crear la dimensión 0.
- Segunda posicion: `:`: Selecciona todos los elementos que se encuentran dentro de ese sub-array (que se seleccionó en la posición 1). Esto genera la dimensión 0 del array resultante.
- Como conclusión:
    - Lo recortado o seleccionado por un número se utiliza en la siguiente posición; por ejemplo, con `:` se toman todos los elementos de lo que fue seleccionado.
    - Al usar un número, estamos aplanando (o quitando) una dimensión en el array resultante.
:::

```python
import numpy as np

B = np.array([[1, 2, 3, 4],
              [5, 6, 7, 8],
              [9, 10, 11, 12]])

# Seleccionar la segunda columna (índice 1)
columna_2 = B[:, 1]

print(columna_2)
# Salida: [ 2, 6 , 10]
# 2 = [1, 2, 3, 4][1]
# 6 = [5, 6, 7, 8][1]
# 10 = [9, 10, 11, 12][1]
```

:::tip Observación
- `B[:, 1]` tiene dos posiciones en los corchetes, pero el resultado tiene una sola dimensión, porque al usar un número (1) en la segunda posición, esa dimensión se reduce (se “aplana”) en el array resultante.
- Primera posición (`:`): Mantiene la dimensión 0 del array original, conservando sus tres elementos (las tres filas).
- Segunda posición (1): El número indica que se va a usar la posición (indice) 1 en todos los elementos (todas las filas / arrays). Es decir, se accede a la posición 1 de cada fila (array), y con esos valores se forma el array resultante. Como es un número, no crea una nueva dimensión, solo toma los valores seleccionados para construir el nuevo array.
- Como conclusión:
    - Es como seleccionar, de cada fila o sub-array, el elemento `array[posición]`, y usar todos esos valores para crear el nuevo array (que solo tiene una dimensión definida).
    - Al usar un número, estamos aplanando (o quitando) una dimensión en el array resultante. En este caso, se reduce la segunda dimensión , y se utilizan los valores recortados de cada fila para formar el nuevo array.
    - Los números se usan para reducir una dimensión del array y, dependiendo de su posición en los corchetes, seleccionan un elemento específico de cada elemento (si hay más dimensiones), o un elemento específico dentro del array.
:::


:::tip Función del número
- El número recorta (elimina todo menos lo seleccionado) la dimensión correspondiente, según su posición.
- Lo que selecciona depende de la dimensión que representa:
    - Si es la dimensión 0 (primera posición), selecciona un elemento (completo) del array (por ejemplo, una fila o un sub-array).
    - Si es una dimensión intermedia o la última (es decir, una posición mayor que la primera), selecciona un elemento específico dentro de cada elemento de la dimensión anterior.
:::

:::tip Analogía
- Imaginá que un array es una caja:
    - Cada dimensión puede imaginarse como una caja (array) que contiene otras cajas:
        - La dimensión 0 es la caja grande, que contiene todas las demás cajas.
        - La dimensión 1 está formada por las cajas dentro de la caja grande.
        - La dimensión 2 son las cajas dentro de las cajas de la dimensión 1, y así sucesivamente…
        - Hasta llegar a la última dimensión, que contiene los valores finales (los elementos que están dentro de las últimas cajas).
- Ahora veamos qué representan los valores que puede tener cada posición en los corchetes:
    - Los números (0, 1, 2, …):
        - Abren una caja específica en ese nivel y descartan el resto.
        - Si el número está en la dimensión 0, abre una caja de las que tiene la caja grande.
        - Si el número está en la dimensión 1 o superior, abre una cajita específica dentro de cada caja de la dimensión anterior, y con todo lo que hay dentro de esas cajitas crea una nueva dimensión. Esta nueva dimensión no se incluirá en el resultado final, pero se utilizará para construir la siguiente dimensión, salvo que sea la última dimensión, en cuyo caso solo se incluirán sus valores.
        - Los números eliminan una dimensión en el resultado final.
    - Signo `:`:
        - El `:` significa “usar todas las cajas de esta dimensión para la nueva dimensión que estoy creando”.
        - Es decir, no se descarta ninguna caja: todas las de ese nivel se se usan para formar la siguiente dimensión del array.
        - No crea ni elimina dimensiones; simplemente mantiene la estructura.
    - `np.newaxis`:
        - `np.newaxis` significa “envolver cada caja en una nueva caja”.
        - No modifica el contenido, solo agrega una capa extra alrededor, es decir, una nueva dimensión (de tamaño 1).
::::


## Operaciones básicas
#### Operaciones elemento por elemento

```python
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b) # Output: [5 7 9]
print(a * b) # Output: [ 4 10 18]
print(a / b) # Output: [0.25 0.4  0.5 ]
```

:::tip Observación
- Al sumar dos arrays, NumPy realiza una suma elemento por elemento. Es decir, suma el primer elemento de `a` con el primero de `b`, el segundo con el segundo, y así sucesivamente. NumPy utiliza esta misma lógica para realizar el resto de las operaciones matemáticas.
- En las operaciones elemento por elemento, NumPy toma los valores que están en el mismo índice de cada array y los suma, multiplica, divide, resta, etc., según la operación matemática que se esté realizando.
:::

#### Operaciones matemáticas

```python
import numpy as np
a = np.array([4, 16, 25])
print(np.sqrt(a))
print(np.sum(a))
print(np.mean(a))
print(np.max(a))
```


:::tip Observación
- `np.sqrt(a)` calcula la raíz cuadrada de cada elemento del array `a`
- `np.sum(a)`: Suma todos los elementos del array `a` y devuelve el resultado como un único número.
- `np.mean(a)`: Calcula el promedio (media aritmética) de todos los elementos del array `a` y devuelve el resultado como un único número.
- `np.max(a)`: Devuelve el valor más grande dentro del array `a`.
:::


## Indexado (Indexing) / Corte (Slicing) / Reshaping (Reestructuración)

#### Indexing
- El indexing nos permite obtener el valor que se encuentra en un índice específico (posición) del array.
```python
import numpy as np

array = np.array([10 , 20 , 30 , 40 , 50])
print(array[2]) # Mostrara 30 porque es el elemento en el indice 2.
print(array[-1]) # Mostrara 50 porque es el ultimo elemento del array.
```

#### Slicing
- Nos permite dividir un array en arrays más pequeños.

```python
import numpy as np

array = np.array([10 , 20 , 30 , 40 , 50])
print(array[1:4])  # Output: [20 30 40]
print(array[:3])  # Output: [10 20 30]
print(array[3:])  # Output: [40 50]
```


:::tip Observación
- La sintaxis `array[indice_inicial:indice_final]` crea un nuevo array que contiene los elementos desde el índice inicial hasta el índice final sin incluirlo. En otras palabras, toma todos los elementos cuyo índice sea mayor o igual que `indice_inicial` y menor (no igual) que `indice_final`.
- La sintaxis `array[:indice]` devuelve un nuevo array con todos los elementos desde el inicio hasta el índice indicado, sin incluirlo. Es equivalente a `array[0:indice]`.
- La sintaxis `array[index:]` devuelve un nuevo array con todos los elementos desde el índice indicado hasta el final del array.  En otras palabras, toma todos los elementos cuyo índice sea mayor o igual que `index`.
:::


#### Reshaping
- Nos permite reestructurar un array (modificar las dimensiones de este).
```python
import numpy as np
array = np.array([10 , 20 , 30 , 40 , 50 , 60])
reshaped = array.reshape(2, 3)
print(reshaped)
```

## Transpuesta de una matriz
- La transpuesta de una matriz es una nueva matriz que se obtiene al invertir (cambiar) el orden de sus dimensiones. Por ejemplo
    - Una matriz de 2×3×4 se convierte en una de 4×3×2.
    - Una matriz de 3×2 se convierte en una de 2×3.
- Para obtener la transpuesta de una matriz (array) en NumPy, usamos la propiedad `.T` de un array.

:::tip 
- Un vector es un array de una dimensión, y una matriz es un array de dos o más dimensiones (es decir, un array multidimensional).
- En una matriz, para indicar el tamaño solemos usar una notación del tipo `número × número × número...`, donde cada número representa una dimensión y el tamaño de esa dimensión.
- En una matriz de dos dimensiones (2D) se usan 2 números, por ejemplo: 3×3 → 3 filas por 3 columnas
- En una matriz de tres dimensiones (3D) se usan 3 números, por ejemplo:  2x3x4:
    - Significa un array de 3 dimensiones donde:
        - Primera dimensión: 2 cajas
        - Segunda dimensión: cada caja tiene 3 cajas adentro
        - Tercera dimensión: cada una de esas cajas internas tiene 4 elementos
:::


#### Matriz 2D
- En una matriz 2D, para acceder a un elemento usamos `array[dim0, dim1]` (fila, columna). En Python/NumPy no es necesario usar un corchete por cada dimensión; basta con separarlas por comas dentro de un único par de corchetes.
- Al transponer la matriz, las dimensiones se invierten, por lo que para acceder a los mismos elementos usaríamos `array_transpuesta[dim1, dim0]`.
- Por ejemplo:
    - Para acceder al valor que estaba en `array[1,2]` en el array transpuesto (`array.T`), deberías usar `array_transpuesta[2,1]`.
    - Para acceder al valor que estaba en `array[0,1]` en el array transpuesto (`array.T`), deberías usar `array_transpuesta[1,0]`.
    - Para acceder al valor que estaba en` array[2,0]` en el array transpuesto (`array.T`), deberías usar `array_transpuesta[0,2]`.




```python
import numpy as np

matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
print("Original Matrix: \n", matrix)

transpose = matrix.T
print("Transposition: \n", transpose)

# Ejemplos de acceso a elementos después de transponer
print("\nAcceso a elementos en la transpuesta:")
print("Valor que estaba en array[1,2] -> array_transpuesta[2,1]:", transpose[2,1])
print("Valor que estaba en array[0,1] -> array_transpuesta[1,0]:", transpose[1,0])
print("Valor que estaba en array[2,0] -> array_transpuesta[0,2]:", transpose[0,2])

```
:::tip Observación
- En una matriz 2D, transponer significa intercambiar filas por columnas. Es decir, la primera fila (en este caso `[1, 2, 3]`) de la matriz original se convierte en la primera columna de la matriz transpuesta, la segunda fila (`[4, 5, 6]`) en la segunda columna, y así sucesivamente. 
:::


#### Matrices de 3 dimensiones o mas
- En una matriz de 3 o más dimensiones, para acceder a un elemento usamos `array[dim0, dim1, dim2, ...]`. Cada índice corresponde a una dimensión.
- Al transponer la matriz (usando `.T`), las dimensiones se invierte, por lo que para acceder a los mismos elementos deberíamos invertir también los índices.
- Por ejemplo, en un array 3D (`array[dim0, dim1, dim2]`):
    - Para acceder al valor que estaba en `array[0,1,2]` en el array transpuesto (`array.T`), usaríamos `array_transpuesta[2,1,0]`.
    - Para acceder al valor que estaba en `array[2,0,1]` en el array transpuesto (`array.T`), usaríamos `array_transpuesta[1,0,2]`.
    - Para acceder al valor que estaba en `array[1,2,0]` en el array transpuesto (`array.T`), usaríamos `array_transpuesta[0,2,1]`.

```python
import numpy as np

# Creamos un array 3x3x3 con valores del 1 al 27
array = np.arange(1, 28).reshape(3, 3, 3)
print("Array original (3x3x3):\n", array)

# Transposición
array_T = array.T
print("\nArray transpuesto (3x3x3):\n", array_T)

# Ejemplos de acceso a elementos después de transponer
print("\nAcceso a elementos en la transpuesta:")
print("Valor que estaba en array[0,1,2] -> array_transpuesta[2,1,0]:", array_T[2,1,0])
print("Valor que estaba en array[2,0,1] -> array_transpuesta[1,0,2]:", array_T[1,0,2])
print("Valor que estaba en array[1,2,0] -> array_transpuesta[0,2,1]:", array_T[0,2,1])
```
:::tip Observación
- En una matriz 3D (o superior), las filas se reorganizan y pasan a formar parte de nuevas columnas según se invierten las dimensiones. Es decir, los elementos que antes estaban alineados horizontalmente (fila) ahora quedan alineados verticalmente (columna) dentro de la nueva disposición de las dimensiones.
- Te invito a ejecutar el ejemplo anterior y observar cómo las filas de la matriz original se reorganizan y pasan a formar columnas en la matriz transpuesta para entenderlo mejor.
:::


## Broadcasting
- La difusión (Broadcasting) permite a NumPy realizar operaciones aritméticas entre arrays que tienen diferentes formas (dimensiones).
- Las matrices más pequeñas se expanden automáticamente para coincidir con la forma de las matrices más grandes.
- Algunas reglas de la difusión son:
    - Las dimensiones se alinean desde la derecha (NumPy las compara de derecha a izquierda, es decir, de la última dimensión hacia la primera).
    - Una dimensión es compatible si:
        - Coincide con la dimensión (tamaño) de la otra matriz
        - Una de las dimensiones es 1.

#### Ejemplos
```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr + 10) # Esto le suma 10 a cada elemento del array
```
:::tip Observación
- En `arr + 10`, el número 10 es un escalar, es decir, un valor numérico que no tiene dimensiones ni estructura de array.
- Cuando un escalar realiza una operación con un array, NumPy lo trata como si fuera un array del mismo tamaño que el otro array, para poder realizar la operación elemento por elemento.
- En este caso, NumPy difunde  automáticamente el escalar 10 a cada elemento del array, como si fuera `[10, 10, 10]`, y luego realiza la suma, dando `[11, 12, 13]`.
:::

```python
import numpy as np
matrix = np.array([[1, 2 , 3], [4 , 5 , 6]])
vector = np.array([1 , 0 , 1])
print(matrix + vector)
```

:::tip Observación
- Matrix es una matriz de 2x3 (2, 3) y vector solo tiene una dimension de 3 elementos (3,).
- NumPy compara el (2, 3) con (3,) de derecha a izquierda:
    - Se comparan las últimas dimensiones primero: 3 vs 3 → compatible ✅
    - Como vector tiene una dimensión menos que matrix, no se puede comparar directamente la primera dimensión (2 de la matriz vs nada del vector). Por eso, NumPy añade implícitamente una dimensión de tamaño 1 a la izquierda, convirtiendo el vector en (1, 3).
- En este caso, NumPy convierte el vector a la forma (1, 3) y luego lo difunde (lo replica implícitamente) a lo largo de la dimensión 0 —es decir, a cada elemento que pertenece a esa dimensión— como si fuera `[[1, 0, 1], [1, 0, 1]]`. Después de eso, realiza la suma elemento por elemento.
:::

## Funciones de agregación
- Son funciones que toman todos los valores de un array y los combinan en un solo resultado, por ejemplo: sumar todos los valores, encontrar el mínimo, el máximo, calcular el promedio, contar elementos, etc.
- Estas funciones son muy útiles para obtener información resumida o analizar rápidamente un conjunto de datos, que es justamente uno de los objetivos de la estadística.
- Algunas de las funciones son:

```python
import numpy as np

arr = np.array([[1, 2, 3] , [4, 5, 6]])

print("Sum:" , np.sum(arr)) # Sum(array) suma todos los elementos del array
print("Mean:" , np.mean(arr)) # Mean(array) calcula el promedio de todos los elementos del array
print("Max:" , np.max(arr)) # Max(array) devuelve el valor mas grande de todos los elementos del array
print("Min:" , np.min(arr)) # Min(array) devuelve el valor mas pequeño de todos los elementos del array
print("Deviation:" , np.std(arr)) # Std(array) calcula la desviación estándar de todos los elementos del array
```

:::tip Desviación estándar
- La desviación estándar es un valor que indica qué tanto se alejan los datos de un conjunto respecto a su promedio: si es baja, significa que los valores están cerca del promedio; si es alta, significa que los valores están muy dispersos o separados del promedio.
:::




#### Parámetro `axis`
- `axis` es un parámetro nombrado que suelen tener las funciones de agregación y sirve para indicar sobre qué dimensión querés que se realice la operación.
- La dimensión indicada se combinará (se “colapsará”) y desaparecerá del resultado final.
#### Ejemplo con un array de 2 dimensiones
```python
import numpy as np

arr = np.array([[1, 2, 3] , [4, 5, 6]])

print("Sum Dim0:" , np.sum(arr , axis=0))  
print("Sum Dim1:" , np.sum(arr , axis=1))  
```
:::tip Observación
- La dimensión 0 tiene 2 elementos y cada uno se representa como una fila en una matriz 2D.
- La dimensión 1 tiene 3 elementos y cada uno se representa como una columna en una matriz 2D.
- Es decir: `arr[dim0, dim1]`, donde `dim0 = filas` y `dim1 = columnas`.
:::

##### Axis =  0
- Le estás diciendo a NumPy: combiná (sumá) todos los valores que comparten el mismo índice en dim1, recorriendo la dimensión 0.
- En el ejemplo:
    - `arr[0,0] + arr[1,0] = 1 + 4 = 5`
    - `arr[0,1] + arr[1,1] = 2 + 5 = 7`
    - `arr[0,2] + arr[1,2] = 3 + 6 = 9`
- En otras palabras: se suman las columnas.
- Como se colapsa la dimensión 0, el array pasa de tener forma (2, 3) a (3,).
##### Axis =  1
- Le estás diciendo a NumPy: combiná (sumá) todos los valores que comparten el mismo índice en dim0, recorriendo la dimensión 1.
- En el ejemplo:
    - `arr[0,0] + arr[0,1] + arr[0,2] = 1 + 2 + 3 = 6`
    - `arr[1,0] + arr[1,1] + arr[1,2] = 4 + 5 + 6 = 15`
- En otras palabras: se suman las filas.
- Como la dimensión 1 se colapsa, el array pasa de forma (2, 3) a (2,) (una suma por cada fila).

#### Ejemplo con un array de 3 dimensiones
```python
import numpy as np

arr = np.array([
    [ [1,  2,  3],    # arr[0,0,*]
      [4,  5,  6] ],  # arr[0,1,*]

    [ [7,  8,  9],    # arr[1,0,*]
      [10, 11, 12] ]  # arr[1,1,*]
]) #2x2x3


print("Sum Dim0:" , np.sum(arr , axis=0))  
print("Sum Dim1:" , np.sum(arr , axis=1))  
print("Sum Dim1:" , np.sum(arr , axis=2))  
```

:::tip Observación
- La dimensión 0 tiene 2 elementos → son dos cajas grandes.
- La dimensión 1 tiene 2 elementos → dentro de cada caja grande hay dos cajas medianas.
- La dimensión 2 tiene 3 elementos → dentro de cada caja mediana hay tres cajas pequeñas (Que como es la última dimensión, cada elemento es un valor y no un array, pero para seguir la metáfora  las llamamos cajas pequeñas)
- Es decir: `arr[dim0, dim1, dim2]`, donde
    - `dim0 = cajas grandes`,
    - `dim1 = cajas medianas`,
    - `dim2 = cajas pequeñas`.
:::

##### Axis =  0
- Siguiendo la metáfora de las cajas:
    - Colapsás las cajas grandes (dim0).
    - Eso significa:
        - Abrís las 2 cajas grandes (dim0 = 0 y dim0 = 1)
        - Mirás las cajas medianas dentro de cada una.
        - Y sumás las cajas pequeñas que están en la misma posición(indice) dentro de las cajas medianas.
        - Resumen: Sumá las cajas grandes entre sí, combinando las que están en la misma posición.
- Le estás diciendo a NumPy: Combiná (suma) todos los valores que comparten el mismo índice en dim1 y dim2, recorriendo la dimensión 0.”
- En el ejemplo:
    - `arr[0,0,0] + arr[1,0,0] = 1 + 7 = 8`
    - `arr[0,0,1] + arr[1,0,1] = 2 + 8 = 10`
    - `arr[0,0,2] + arr[1,0,2] = 3 + 9 = 12`
    - `arr[0,1,0] + arr[1,1,0] = 4 + 10 = 14`
    - `arr[0,1,1] + arr[1,1,1] = 5 + 11 = 16`
    - `arr[0,1,2] + arr[1,1,2] = 6 + 12 = 18`
- Se elimina dim0 → pasa de (2,2,3) a (2,3)

##### Axis =  1
- Siguiendo la metáfora de las cajas:
    - Colapsás las cajas medianas dentro de cada caja grande.
    - Significa:
        - Entrás a una caja grande.
        - Encontrás dos cajas medianas.
        - Abrís las 2.
        - Y sumás sus cajas pequeñas que estén en las mismas posiciones.
        - Lo hacés para cada caja grande.
        - Resumen: Sumá las cajas medianas entre si, dentro de cada caja grande, combinando las que están en la misma posición. En este caso:
            - `[1,2,3] + [4,5,6] = [5,7,9]`
            - `[7,8,9] + [10,11,12] = [17,19,21]`
- Le estás diciendo a NumPy: Combiná (suma) todos los valores que comparten el mismo índice en dim0 y dim2, recorriendo dim1. ”
- En el ejemplo:
    - Caja grande 0:
        - `arr[0,0,0] + arr[0,1,0] = 1 + 4 = 5` 
        - `arr[0,0,1] + arr[0,1,1] = 2 + 5 = 7`
        - `arr[0,0,2] + arr[0,1,2] = 3 + 6 = 9`
    - Caja grande 1:
        - `arr[1,0,0] + arr[1,1,0] = 7 + 10 = 17`
        - `arr[1,0,1] + arr[1,1,1] = 8 + 11 = 19`
        - `arr[1,0,2] + arr[1,1,2] = 9 + 12 = 21`
- Se elimina dim1 → pasa de (2,2,3) a (2,3)

##### Axis =  2
- Siguiendo la metáfora de las cajas:
    - Colapsás las cajas pequeñas dentro de cada caja mediana.
    - Significa:
        - Para cada caja grande y para cada caja mediana adentro, abrís sus 3 cajas pequeñas y combinás su contenido (sumás). Como cada caja pequeña es un número, simplemente sumás cada fila.
        - Resumen: Sumá el contenido de cada caja mediana.
- Le estás diciendo a NumPy: Combiná (suma) todos los valores que comparten el mismo índice en dim0 y dim1, recorriendo la dimensión 2.”
- En el ejemplo:
    - Caja grande 0:
        - `arr[0,0,0] + arr[0,0,1] + arr[0,0,2] = 1 + 2 + 3 = 6`
        - `arr[0,1,0] + arr[0,1,1] + arr[0,1,2] = 4 + 5 + 6 = 15`
    - Caja grande 1:
        - `arr[1,0,0] + arr[1,0,1] + arr[1,0,2] = 7 + 8 + 9 = 24`
        - `arr[1,1,0] + arr[1,1,1] + arr[1,1,2] = 10 + 11 + 12 = 33`
- Se elimina dim2 → forma final: (2, 2)

:::tip
- Cuando usamos una función de agregación con axis=N en un array de n dimensiones:
    - Se recorre la dimensión N y se combinan sus valores (sumar, promedio, máximo, etc.).
    - Se combinan los valores que comparten los mismos índices en todas las demás dimensiones (distintas a N).
    - La dimensión especificada por axis se elimina en el resultado final.
- Por ejemplo en un `arr[dim0, dim1, dim2, dim3]` → 4 dimensiones:
    - axis=0 → combina los valores que tienen los mismos índices en dim1, dim2 y dim3
    - axis=1 → combina los valores que tienen los mismos índices en dim0, dim2 y dim3
    - axis=2 → combina los valores que tienen los mismos índices en dim0, dim1 y dim3
    - axis=3 → combina los valores que tienen los mismos índices en dim0, dim1 y dim2
- Cuando usamos un axis = N, estamos especificando qué tipo de cajas se van a combinar entre sí:
    - Cada dimensión representa un tipo de caja:
        - dim0 → cajas grandes
        - dim1 → cajas medianas
        - dim2 → cajas pequeñas
        - dim3 → cajas que están dentro de las cajas pequeñas (y así sucesivamente para más dimensiones)
- La operación (sumar, promedio, máximo, etc.) se aplica entre **cajas que pertenecen a la misma dimensión**, y solo combinando los **valores que están en la misma posición** dentro de esas cajas, como si fuera una operación elemento por elemento. 
- NumPy nunca mezcla posiciones distintas, porque cada índice dentro de una dimensión representa un tipo de dato diferente. Por ejemplo, el índice 0 podría contener el precio total, el índice 1 podría contener el impuesto, y el índice 2 alguna cantidad. Como cada posición tiene un significado fijo, NumPy solo combina “el mismo tipo de cosa” entre cajas equivalentes.
- En resumen, se comporta de esta manera:
    - Con `axis=0`, NumPy opera con todos los elementos que estan en la dimensión 0. En el ejemplo anterior, la dimensión 0 tiene dos elementos, por lo que realiza la operación entre esos dos elementos.
    - A partir de `axis=1`, la operación se realiza una vez por cada elemento de esa dimensión. En el ejemplo, la dimensión 1 también tiene dos elementos, por lo que NumPy realiza dos operaciones separadas, una para cada elemento, usando el contenido interno de cada uno.
- La **única excepción es la última dimensión**, porque allí ya no hay más “cajas dentro de cajas”: esa dimensión **contiene directamente los valores**. Por lo tanto, cuando la operación se aplica sobre la última dimensión, NumPy simplemente combina todos los valores de cada caja, que en una representación 2D suelen aparecer como una fila, en 3D como una lista de valores dentro de una caja mediana, etc.
:::


## Indexado booleano
#### Filtrar array
- El indexado booleano es un método para filtrar y seleccionar elementos en un array o conjunto de datos utilizando  valores lógicos (verdadero/falso).
- Podés crear un nuevo array usando esta sintaxis:
```python
nuevo = array[condición_booleana]
```
:::tip Observación
- Dentro de los corchetes ponés una condición booleana, y esa condición se evalúa para cada elemento del array original.
- Dentro de esa condición booleana podés usar el nombre del array, es decir, la variable que contiene el array original que vas a filtrar. NumPy toma esa variable y la usa para almacenar “el valor de cada elemento” mientras recorre el array (en términos técnicos el nombre `array` dentro de la condición no representa un elemento individual, sino todo el array, pero NumPy interpreta la operación “por elemento”).
- Cuando se ejecuta la sentencia `array[condición]`, NumPy aplica la condición booleana a todos los elementos del array, evaluando elemento por elemento. Solo los valores que pasaron validación (la condición booleana dio `true`) pasan al nuevo array.
- La lógica equivalente sería así:
    ```python
    nuevo = []
    for elemento in array:
        if condición_booleana_aplicada_a(elemento):
            nuevo.append(elemento)
    nuevo = np.array(nuevo)
    ```
:::
- Ejemplo:
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5 , 6])


evens = arr[arr % 2 == 0]
print("Even numbers in the array:", evens)
```
#### Modificar valores
- En lugar de crear un nuevo array, podemos simplemente asignar un nuevo valor a todos los elementos que cumplan con la condición con la siguiente sintaxis:
```python
array[condición_booleana] = nuevoValor
```
:::tip Observación
- NumPy evalúa la condición booleana para cada elemento del array, igual que en el filtrado.
- En todos los lugares donde la condición resulte `True`, NumPy asigna el nuevo valor.
- Los elementos donde la condición dio `False` permanecen sin modificaciones.
- Es decir, funciona como un “seleccionar y reemplazar” basado en una condición.
:::

- Ejemplo:
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5 , 6])


arr[arr > 3] = 0
print(arr)  
```

## Generación de números aleatorios y semillas
#### Método np.random.rand()
- Genera un array con valores aleatorios entre 0 (incluido) y 1 (excluido).
- La distribución es uniforme, o sea, todos los valores tienen la misma probabilidad de aparecer.
- Podés especificar la forma del nuevo array a través de los argumentos: cada valor que pases representa una dimensión y su tamaño, igual que cuando usás el método `array.reshape(forma)`.
- Ejemplo:
```python
import numpy as np
random_array = np.random.rand(3, 3)
print(random_array)
```
#### Método np.random.randint()
- Genera un array con valores enteros aleatorios que están dentro de un rango especificado.
- Argumentos:
    - El primer argumento es el límite inferior (incluido).
    - El segundo argumento es el límite superior (excluido).
    - Además, podés indicar la forma del array usando el argumento `size`, cuyo funcionamiento es igual que en `rand` o en `reshape`.
- Entonces, genera valores aleatorios tales que: `límiteInferior <= valor < límiteSuperior`.
- En resumen: genera un array con valores aleatorios entre el límite inferior (primer argumento) y el límite superior (segundo argumento), incluyendo el límite inferior pero excluyendo el límite superior.
- Ejemplo:
```python
import numpy as np
random_array = np.random.randint(1, 10, size=(2,3))
print(random_array) 
```
#### Semilla aleatoria
- NumPy usa un sistema interno que genera números “aleatorios”, pero en realidad siguen una fórmula matemática.
- Esa fórmula necesita un punto de inicio, llamado semilla (seed).
- La fórmula funciona así:
    1. Empieza con un valor inicial → la seed.
    2. Usa ese valor para calcular el primer número “aleatorio”.
    3. Toma ese número y calcula el siguiente.
    4. Y así sucesivamente.
- Es como una cadena: cada número depende del anterior:
    - Si el primer eslabón (la seed) es siempre el mismo, toda la secuencia será igual.
    - Si el primer eslabón cambia, toda la secuencia cambia.
- `np.random.seed()` recibe un número entero y lo usa como seed, es decir, como el valor inicial que NumPy toma para calcular el primer número “aleatorio”. Y como consecuencia, cada vez que uses el mismo número entero como seed, NumPy generará exactamente los mismos valores “aleatorios”.
- Ejemplo:
```python
import numpy as np
np.random.seed(42) 
random_array = np.random.rand(3, 3)
random_array_2 = np.random.randint(1, 10, size=(2,3))
print(random_array) 
print(random_array_2)
```

:::tip Observación
- En este ejemplo, como la seed es 42, NumPy va a generar siempre los mismos valores aleatorios tanto para `rand()` como para `randint()`.
- Da igual cuántas veces ejecutes el programa o en qué computadora: mientras la seed sea 42, las dos líneas que generan números aleatorios van a producir exactamente los mismos resultados.
:::


## Proyectos
#### Operaciones matemáticas con una Matriz 3x3

```python
import numpy as np
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
print("Original Matrix: \n", matrix)



another_matrix = np.array([[9, 8, 7],
                           [6, 5, 4],
                           [3, 2, 1]])
print("Addition with another matrix: \n", matrix + another_matrix)
print("Multiplication with another matrix: \n", matrix * another_matrix)
```


#### Operaciones con broadcasting
```python
import numpy as np


matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
vector = np.array([1, 0, -1])


result_add = matrix + vector
print("Add: \n" , result_add)
result_mult = matrix * 2
print("Mult: \n" , result_mult)
```


#### Generar valores aleatorios y filtrar
```python
import numpy as np
dataset = np.random.randint(0, 51, size=(5,5))
print("Original:\n", dataset)
dataset[dataset > 25] = 0
print("Modified:\n", dataset)
print("Sum:" , np.sum(dataset))
print("Mean:" , np.mean(dataset))  
print("Std Dev:" , np.std(dataset))
```

:::tip Observación
- La línea `dataset[dataset > 25] = 0` hace que la desviación estándar baje porque reemplaza los valores grandes por ceros, reduciendo la dispersión de los datos.
- Cambiar valores grandes por otros más cercanos al promedio hace que la desviación estándar disminuya.
- Cambiar valores muy chicos por otros más cercanos al promedio también reduce la desviación estándar.
- Si hacés lo contrario, sube.
:::