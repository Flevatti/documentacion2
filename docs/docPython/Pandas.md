---
sidebar_position: 5
---

# Pandas
- Pandas es una biblioteca utilizada para el análisis y la manipulación de datos.
- Proporciona estructuras de datos fáciles de usar: `Series` y `DataFrame`:
    - **Series**: Es un array unidimensional etiquetado, capaz de contener datos de cualquier tipo.
    - **DataFrame**: Es una estructura de datos bidimensional etiquetada, similar a una tabla.

:::tip Etiquetado
- En Pandas, “etiquetado” significa que cada elemento (en una `Series`) o cada fila (en un `DataFrame`) tiene un nombre o índice (una etiqueta que sirve para identificar y acceder a un dato específico) que lo identifica; por lo tanto, no depende únicamente de una posición numérica como en un array común.
:::
## Crear Serie y DataFrame
#### Crear Serie
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos


s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
print(s)
```

:::tip Observación
- El método `pd.Series(datos , index=lista)` crea una `Serie` y recibe como primer argumento una lista (los datos), y el parámetro index, que es una lista de etiquetas que identifican cada elemento que se especificó en datos.
- Podríamos decir que una `Serie` funciona como una especie de diccionario, donde `index[0]` contiene el valor de `datos[0]`, `index[1]` contiene el valor de `datos[1]`, y así sucesivamente. Es decir, cada elemento de la lista que se especificó en index se utiliza como índice para acceder a un elemento específico de datos.
- Una `Serie` entonces es como un array unidimensional, donde cada elemento se accede mediante un índice específico que se define en el argumento index. Es como si cada dato tuviera una etiqueta o un nombre que lo identifica, y con esa etiqueta se puede acceder directamente al valor.
:::


#### Crear DataFrame
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(df)
```
:::tip Observación
- El método `pd.DataFrame(datos)` crea un `DataFrame`, que es una estructura de datos bidimensional (como una tabla), donde los datos se organizan en filas y columnas (similar a una tabla de Excel o a una tabla de una base de datos).
- Como primer argumento recibe un diccionario, con una estructura similar a: `{campo1: [valor1, valor2, ...], campo2: [valor1, valor2, ...]}`.
- Cada campo representa una columna de la tabla, y la lista asociada contiene los valores de esa columna.
- Cada key del diccionario representa el encabezado de su columna. En este ejemplo, campo1 es el encabezado de la primera columna y campo2 es el encabezado de la segunda.
- Todas las listas deben tener la misma longitud, ya que cada posición representa una fila.
- Cada fila del `DataFrame` tiene un índice, que se utiliza para identificar y acceder a una fila específica; a este índice se lo denomina etiqueta. Por defecto, Pandas crea un índice numérico automáticamente (0, 1, 2…), pero también podés proporcionarlo mediante el argumento index (siguiendo la misma lógica que en `pd.Series(datos, index=lista)`).
- Cada fila está conformada por un elemento de cada lista en la misma posición. Es decir, los elementos ubicados en la posición 0 de todas las listas forman la primera fila, los de la posición 1 forman la segunda fila, y así sucesivamente. En este ejemplo, la fila 0 es: `Ana 23`, la fila 1 es: `Luis 34`, y así sucesivamente.
- Un `DataFrame` entonces es como un array de dos dimensiones, que se ve como una tabla con columnas y filas. Cada fila se accede mediante un índice específico. Es como si cada fila tuviera una etiqueta o un nombre que la identifica, y con esa etiqueta se puede acceder directamente a esa fila.
:::






## Guardar datos
- Para guardar un `DataFrame` en un archivo `CSV`, usamos el método `DataFrame.to_csv(path)`, donde path es un string que especifica la ubicación y el nombre del archivo a crear.
- Para guardar un `DataFrame` en un archivo `Excel`, usamos el método `DataFrame.to_excel(path)`, donde path es un string que especifica la ubicación y el nombre del archivo a crear. Para poder guardar archivos `Excel` (`.xlsx`), Pandas utiliza el módulo `openpyxl`, así que deberías instalarlo con `pip` si aún no lo tenés.
- Ejemplo:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
dataframe = pd.DataFrame(data)
dataframe.to_csv('personas.csv')
dataframe.to_excel('personas.xlsx')
```

- Si ejecutaron el código anterior, van a notar que la primera columna (la que no tiene nombre en la fila de encabezados) muestra los índices o etiquetas que identifican a cada fila. Para evitar que esa columna aparezca en el archivo generado, en ambos métodos se debe usar el argumento `index=False`:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
dataframe = pd.DataFrame(data)
dataframe.to_csv('personas.csv' , index=False)
dataframe.to_excel('personas.xlsx' , index=False)
```

## Cargar datos
- Para convertir un archivo `CSV` en un `DataFrame`, usamos el método `pd.read_csv(path)`, donde path es un string que especifica la ubicación del archivo.
- Para convertir un archivo `Excel` en un `DataFrame`, usamos el método `pd.read_excel(path)`, donde path es un string que especifica la ubicación del archivo. En este caso también es necesario tener instalado el módulo `openpyxl`, ya que Pandas lo utiliza para leer archivos `.xlsx`.
- Ejemplo: 



```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
dataFrame = pd.read_csv('personas.csv') # Leemos el archivo CSV y lo cargamos en un DataFrame
dataFrame2 =  pd.read_excel('personas.xlsx') # Leemos el archivo Excel y lo cargamos en otro DataFrame
print(dataFrame) # Imprimimos el contenido del DataFrame cargado desde el CSV
print('---') # Separador para mayor claridad en la salida
print(dataFrame2) # Imprimimos el contenido del DataFrame cargado desde el Excel
```

:::tip Observación
- Te recomendamos que modifiques a mano, al menos uno de los dos archivos, para que puedas notar la diferencia.
- Ambos métodos importan el archivo indicado y generan un DataFrame. Por defecto, crean un índice (etiqueta) numérico para cada fila. Sin embargo, Pandas ofrece el argumento `index_col` para especificar qué columna se debe usar como índice. Podés revisar más detalles en la documentación oficial.
:::

:::tip
- El path no necesariamente debe ser una ruta local (de algo que se encuentra en la PC), también puede ser la URL de un archivo que esté publicado en internet.
:::



:::tip Conjuntos de datos para IA
- Hay muchos sitios webs  como [Hugging Face](https://huggingface.co/) que te proporcionan una gran variedad de datasets (conjunto de datos) listos para usar en proyectos de análisis de datos y machine learning.
:::

## Operaciones básicas
- Tanto las `Series` como los `DataFrame` tienen los siguientes métodos.
### Visualización de datos
#### `head(x)`
- Te muestra las primeras x filas o elementos. Si no le especificamos un número, te muestra las primeras 5:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(s.head())
print('\n--\n')
print(df.head())
```
#### `tail(x)`
- Te muestra las últimas x filas o elementos. Si no le especificamos un número, te muestra las últimas 5:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(s.tail())
print('\n--\n')
print(df.tail(2))
```

#### `info()` 
- El método `info()` muestra un resumen de la estructura del objeto (ya sea una `Series` o un `DataFrame`) y brinda información sobre la cantidad de datos, los valores no nulos y los tipos de datos que contiene:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(s.info())
print('\n--\n')
print(df.info())
```
#### `describe()`
- El método `describe()` genera un resumen estadístico de los datos numéricos:
    - En un DataFrame, calcula estadísticas para cada columna numérica.
    - En una Serie, calcula el resumen estadístico sobre todos sus valores, siempre que sean numéricos.
- Devuelve estadísticas como:
    - count → cantidad de valores
    - mean → promedio
    - std → desviación estándar
    - min → valor mínimo
    - 25% → Ordena los datos de menor a mayor, toma el 25% inferior de esa secuencia y devuelve el valor más alto dentro de ese 25%.
    - 50% (mediana) → Ordena los datos de menor a mayor, toma el 50% inferior y devuelve el valor más alto dentro de ese 50%. Es el punto medio.
    - 75% → Ordena los datos de menor a mayor, toma el 75% inferior y devuelve el valor más alto dentro de ese 75%.
    - max → valor máximo
- Ejemplo:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(s.describe())
print('\n--\n')
print(df.describe())
```
- Para generar un resumen estadístico de tipos de datos específicos, usamos el argumento `include=valor`, donde valor puede ser:
    - `'object'` → incluye columnas de texto.
    - `'number'` → incluye columnas numéricas.
    - `'datetime'` → incluye columnas de tipo fecha.
    - `'timedelta'` → columnas con diferencias de tiempo.
    - `'all'` → Incluye todas las columnas, sin importar el tipo de dato.
    - También puede recibir una lista donde cada elemento es uno de los valores anteriores, permitiendo combinar varios tipos a la vez.
- Ejemplo:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)

print(df.describe(include='object')) 
print('\n--\n')
print(df.describe(include='all')) 
print('\n--\n')
print(df.describe(include=['object', 'number'])) 
```
:::tip Observación
- Para columnas de texto suele mostrar:
    - `count` → cuántos valores hay
    - `unique` → cuántos valores distintos
    - `top` → valor más frecuente
    - `freq` → cuántas veces aparece
:::
### Selección y filtro
#### Seleccionar columna/elemento
- Como si fuera un array, podés acceder a elementos o columnas usando corchetes `[]`:
- En lugar de usar índices numéricos, por ejemplo `array[0]` para acceder al primer elemento, en una `Series` o un `DataFrame` usamos las etiquetas, por ejemplo: `array[etiqueta]`.
- Estas etiquetas pueden ser las que Pandas genera por defecto  o las que vos definas usando el argumento `index`:
    - En una `Series`, Pandas genera por defecto índices numéricos (0, 1, 2, …), salvo que vos especifiques otros mediante `index=[...]`.
    - En un `DataFrame`, Pandas crea las etiquetas de las columnas usando los nombres de los campos (las keys del diccionario) que le pasás. Si el `DataFrame` se crea desde un archivo (CSV, Excel, etc.), entonces utiliza la fila de encabezados para asignar una etiqueta a cada columna.
- Las etiquetas funcionan de manera distinta según el tipo de estructura:
    - En una `Series`, cada etiqueta identifica un solo elemento.
    - En un `DataFrame`, cada etiqueta identifica una columna completa.
- Ejemplo:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
# Accede al elemento con índice/etiqueta 'b' en la Serie
print(s['b']) 
print('\n--\n')
# Accede a la columna 'Edad' en el DataFrame
print(df['Edad']) 
```
- En un `DataFrame`, dentro de los corchetes también podés usar una lista para indicar varias etiquetas (columnas). De esta manera accedés solo a las columnas específicas que elijas:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
# Accede a la columna 'Edad' y 'Nombre' del DataFrame
print(df[['Edad' , 'Nombre']]) 
```
#### Filtrar filas/elementos
- Podés usar la sintaxis (y lógica) de [indexado booleano de NumPy](NumPy.md#indexado-booleano) para filtrar filas o elementos. La estructura es: `nuevo = Serie/DataFrame[condición_booleana]`. 
- Ejemplo donde filtramos filas donde la edad sea mayor que 25:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
s = pd.Series([10, 20, 30] , index=['a', 'b', 'c']) 
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(df[df['Edad'] > 25])  # Filtramos y mostramos las filas donde la edad es mayor a 25
```
:::tip Observación
- Dentro de la condición booleana podés usar el nombre de la variable que contiene la `Serie` o el `DataFrame` original que querés filtrar.
- Cuando se ejecuta esta expresión, se recorren todas las filas, y dentro de la condición booleana podés usar la variable que contiene el `DataFrame` para acceder al valor de una columna específica en cada fila utilizando los corchetes. Funciona de manera similar con una variable que contiene una `Serie`, con la única diferencia de que no es necesario usar los corchetes para acceder a columnas (porque una Series no tiene columnas). La variable simplemente contiene/almacena cada elemento mientras se evalúa la condición, igual que en el `indexado booleano de NumPy`.
- En este ejemplo, estamos recorriendo la columna edad de todas las filas y comprobando que sea mayor que 25.
:::

 #### Selección por posición
 - La sintaxis `DataFrame.iloc[x]` devuelve la fila ubicada en la posición x, donde x debe ser un número.
- Cada fila del `DataFrame` tiene una posición numérica interna: la primera fila está en la posición 0, la segunda en la posición 1, la tercera en la 2, y así sucesivamente.
- Ejemplo:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(df.iloc[0])  # Imprime la primera fila del DataFrame
```
- `iloc` se usa para obtener filas o columnas usando posiciones numéricas, igual que en un array tradicional.
- Como vimos antes, cada fila tiene una posición numérica interna, y las columnas también: la primera columna está en la posición 0, la segunda en la posición 1, y así sucesivamente.
- La sintaxis general de `iloc` es:
```python
DataFrame.iloc[fila, columna]
```
:::tip Observación
- fila → qué filas querés (por posición)
- columna → qué columnas querés (por posición)
:::

- Si querés obtener una columna completa, necesitás indicar:
    - que querés todas las filas → se representa con `:`
    - y qué columna específica querés → se indica con su posición numérica
- Entonces, en el ejemplo anterior, para obtener la primera columna usás:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(df.iloc[: , 0])  # Imprimimos la primera columna
```

#### Seleccionar por etiqueta
 - La sintaxis `DataFrame.loc[x, y]` funciona de forma muy similar a `iloc`: ambas permiten seleccionar filas y columnas.
 - Sin embargo, `loc` utiliza etiquetas en lugar de posiciones numéricas (index). Es decir, usa:
    - Las etiquetas que identifican a cada fila. Por defecto, `pandas` asigna etiquetas numéricas (0, 1, 2, …), pero esas etiquetas se pueden cambiar: pueden ser strings, fechas, códigos, etc. Es decir, `loc` selecciona filas por el nombre de la fila, no por su posición.
    - Los nombres de las columnas para identificar columnas. Por defecto, `pandas` usa como nombres de columnas las keys del diccionario que le pasás al crear el `DataFrame`. Pero igual que con las filas, estos nombres también se pueden modificar.
 - La sintaxis general de `loc` es:
 ```python
DataFrame.loc[fila, columna]
 ```
:::tip Observación
- fila → qué filas querés (por etiqueta)
- columna → qué columnas querés (por etiqueta)
:::
- Ejemplo:
```python
import pandas as pd # Importamos la librería pandas para manipulación de datos
data = { 'Nombre' : ['Ana', 'Luis', 'Carlos', 'Marta'],'Edad' : [23, 34, 45, 29] }
df = pd.DataFrame(data)
print(df.loc[0]) # Imprimimos la primera fila
print(df.loc[: , 'Nombre'])  # Imprimimos la columna 'Nombre'
```


## Manejar valores faltantes
- Los valores faltantes (o missing values) son datos que deberían estar presentes en un conjunto de datos, pero no existen, están vacíos, o son desconocidos.
- Es importante manejarlos porque pueden afectar el análisis y el rendimiento del modelo.
- Por suerte Pandas proporciona herramientas poderosas para gestionar esos datos faltantes.

#### Función `dropna()`
- Nos permite eliminar filas o columnas que contienen valores faltantes.
- Ejemplo:
```python
import pandas as pd

data = {
    'Nombre': ['Ana', 'Luis', None, 'Marta'],
    'Edad': [23, None, 45, 29],
    'Ciudad': ['CABA', 'Rosario', 'Cordoba', None]
}

df = pd.DataFrame(data)

print("DataFrame original:")
print(df)

# Eliminamos filas que tengan al menos un valor faltante.
df_filas = df.dropna()

print("\nDataFrame sin filas con valores faltantes:")
print(df_filas)

# Eliminamos columnas que tengan al menos un valor faltante
df_columnas = df.dropna(axis=1)

print("\nDataFrame sin columnas con valores faltantes:")
print(df_columnas)
```

:::tip Observación
- `dropna()` sin argumentos elimina todas las filas que tengan al menos un valor faltante. En el ejemplo, probablemente solo quede la fila de Ana, que es la única sin valores faltantes.
- `dropna(axis=1)` elimina las columnas que contengan al menos un valor faltante. En este caso, probablemente se eliminen las columnas Nombre, Edad y Ciudad, dejando un `DataFrame vacío` (porque todas tienen algún None).
:::


:::tip Valores faltantes
- En Pandas, los valores faltantes representan datos que no existen, no están disponibles o no pudieron ser cargados.
- Se usan para indicar “acá debería haber un dato, pero no lo hay”.
- Los valores que Pandas reconoce como faltantes son principalmente estos:
    - `NaN` (Not a Number) : Proviene de NumPy y representa ausencia de un valor numérico.
    - `None` : Representa la ausencia de valor en Python, es decir, un dato vacío o no asignado. Pandas también lo interpreta como un valor faltante.
    - `NaT` (Not a Time) : Especial para valores faltantes en fechas y tiempos. Es la versión “temporal” de NaN.
:::


#### Función `fillna()`
- Nos permite reemplazar valores faltantes con un valor específico.
- Ejemplo:
```python
import pandas as pd

# Opcion 1: Rellenar con un valor específico
df = pd.DataFrame({
    "A": [1, None, 3],
    "B": [4, 5, None]
})

df_filled = df.fillna(0) # Remplaza todos los valores faltantes con 0
print('Opcion 1:\n', df_filled)

# Opcion 2: Rellenar con el promedio
df = pd.DataFrame({
    "A": [10, None, 20, 30]
})

promedio = df["A"].mean()  # Remplaza los valores faltantes con el promedio de la columna A
df_filled = df.fillna(promedio)

print('Opcion 2:\n' ,df_filled)


# Opcion 3: Rellenar valores faltantes por columna
df = pd.DataFrame({
    "Edad": [20, None, 30],
    "Ciudad": ["Roma", None, "Tokio"]
})

# Remplaza los valores faltantes en "Edad" con el promedio y en "Ciudad" con "Desconocida"
df_filled = df.fillna({
    "Edad": df["Edad"].mean(),
    "Ciudad": "Desconocida"
})

print('Opcion 3:\n', df_filled)
```
:::tip Observación
- `fillna()` puede ejecutarse de dos maneras diferentes, según cómo quieras completar los valores faltantes:
    - `fillna(valor)` : Reemplaza todos los valores faltantes del DataFrame o Series por el valor. Este se utiliza en las primeras dos opciones. Este valor puede ser número, texto, booleano, etc., siempre que coincida con el tipo de dato de cada columna.
    - `fillna(diccionario)` : Permite especificar un valor distinto para cada columna. Se pasa un diccionario donde:
        - La key → es el nombre o etiqueta de la columna.
        - El valor → es lo que se usará para reemplazar los valores faltantes de esa columna en particular.
:::

- Aparte de rellenar con un valor específico, también podés completar los valores faltantes usando el último valor válido encontrado, según la dirección en que se recorra el DataFrame.
- Relleno hacia adelante `(method='ffill')`:
    - El método forward fill (“relleno hacia adelante”) completa los valores faltantes copiando el valor válido que está arriba.
    - Es decir:
        - Cuando Pandas encuentra un valor faltante, mira la fila anterior (la de arriba).
        - Si en esa fila hay un valor válido, lo copia hacia abajo para rellenar el `NaN`.
        - En otras palabras: Usá el último valor válido que ya vimos mientras bajamos por la columna.
- Relleno hacia atrás (`method='bfill'`)
    - El método backward fill (“relleno hacia atrás”) completa los valores faltantes copiando el siguiente valor válido que está abajo.
    - Es decir:
        - Cuando Pandas encuentra un `NaN`, mira la fila siguiente (la de abajo).
        - Si en esa fila hay un valor válido, lo copia hacia arriba para rellenar el `NaN`.
        - En otras palabras: Usá el siguiente valor válido que todavía no vimos mientras bajamos.
- Ejemplo:
```python
import pandas as pd

df = pd.DataFrame({
    "A": [10, None, None, 40, None]
})

# Relleno hacia adelante
df_ffill = df.fillna(method='ffill')
print(df_ffill)

# Relleno hacia atrás
df_bfill = df.fillna(method='bfill')
print(df_bfill)
```

:::tip Observación
- `fillna()` también puede recibir el argumento `method` para indicar cómo rellenar los valores faltantes sin necesidad de proporcionar un valor específico. 
- Las dos opciones más comunes son:
    - `method='ffill'` → Relleno hacia adelante (forward fill). Usa el último valor válido que se encuentra hacia arriba.
    - `method='bfill'` → Relleno hacia atrás (backward fill). Usa el siguiente valor válido que se encuentra hacia abajo.
:::

:::warning
- En versiones futuras de Pandas (si estás leyendo esto y ya pasó el tiempo… revisá 😄), ya no se podrá usar porque quedará obsoleto:
    - `dataFrame.fillna(method='ffill')`
    - `dataFrame.fillna(method='bfill')`
- En su lugar, Pandas recomienda usar directamente los métodos específicos:
    - `dataFrame.ffill()` → para forward fill
    - `dataFrame.bfill()` → para backward fill
- Ejemplo:
```python
# Relleno hacia adelante
print(df.ffill())
# Relleno hacia atrás
print(df.bfill())
```
:::



#### Interpolación
- Podemos realizar una interpolación lineal, que consiste en completar los valores faltantes estimándolos a partir de los datos existentes. La idea es trazar una línea entre los valores conocidos (es decir, identificar un patrón entre ellos) y calcular el valor que debería ubicarse en el punto faltante siguiendo esa línea.
- Para hacer una `interpolación`, usamos el método `Dataframe/Series.interpolate()` de Pandas, que completa los valores faltantes  estimándolos a partir de los valores existentes en la Series o el DataFrame.
- A diferencia de `fillna()`, que usa un valor fijo para rellenar, `interpolate()` calcula un valor “intermedio” siguiendo un método matemático (por defecto, interpolación lineal), generando un valor coherente con los datos que lo rodean.
- Por ejemplo:
    - Si tenés: `10, NaN, 20`
    - `interpolate()` calcula el punto medio y lo convierte en: `10, 15, 20`
- Cómo lo logra:
    - Dependiendo del método usado, Pandas:
        - Busca los valores antes y después del `NaN`
        - Calcula un valor intermedio (lineal, polinómico, temporal, etc) utlizando esos valores.
        - Rellena los `NaN` con esos valores estimados
- Ejemplo:
```python
import pandas as pd

data = {
    'Temperatura': [20, None, 25, None, 30]
}

df = pd.DataFrame(data)

print("DataFrame original:")
print(df)

# Interpolación lineal
df_interpolado = df.interpolate()

print("\nDataFrame interpolado:")
print(df_interpolado)
```
:::tip Observación
- `interpolate()` sin argumentos usa el método lineal, que completa cada valor faltante calculando el punto intermedio entre los valores conocidos que están antes y después del `NaN` (valor faltante). En el caso del método lineal, ese punto intermedio es exactamente la mitad cuando los valores están igualmente espaciados.
- En este ejemplo:
    - Entre 20 y 25, el valor faltante se completa con la mitad entre ambos → 22.5
    - Entre 25 y 30, el valor faltante también se completa con la mitad entre ambos → 27.5
- Con `DataFrame.interpolate()` se completan los valores faltantes de todas las columnas del DataFrame, mientras que `Series.interpolate()` solo completa los valores faltantes de esa Serie (dado que no tiene columna).
:::

- Puedes interpolar solo una columna:
```python
import pandas as pd

df = pd.DataFrame({
    "edad": [20, None, 25, None, 30],
    "nombre": ["Ana", "Luis", "Pedro", "Marta", "Sofia"]
})

print("Antes de interpolar:")
print(df)

# Interpolamos solo la columna 'edad'
df["edad"] = df["edad"].interpolate()

print("\nDespues de interpolar:")
print(df)
```
:::tip Observación
- `df["edad"].interpolate()` busca los valores que faltan (NaN) solo dentro de la columna edad y los completa usando el método lineal por defecto.
- Luego, el resultado se guarda nuevamente en `df["edad"]`, es decir, reemplaza la columna edad con la versión interpolada, ya sin valores faltantes.
- Entonces, la sintaxis para interpolar solo una columna es: `DataFrame[nombre_columna].interpolate()`. Esto genera una versión de esa columna con los valores faltantes completados (pero no la modifica en el `DataFrame` original hasta que la asignes).
- Para guardar el resultado en el `DataFrame` original, hacés: `DataFrame[nombre_columna] = valor_interpolado` o directamente: `DataFrame[nombre_columna] = DataFrame[nombre_columna].interpolate()`.
:::

## Transformación de datos
####  Renombrar las columnas
- Podés renombrar una columna en Pandas usando el método `rename()`.
- La sintaxis básica es:
```python
DataFrame.rename(columns={"nombre_actual": "nombre_nuevo"})
```
:::tip Observación
- El argumento `columns` recibe un diccionario.
- La key es el nombre actual de la columna. El valor es el nuevo nombre que queremos asignarle.
:::


- Ejemplo:
```python
import pandas as pd

df = pd.DataFrame({
    "Nombre": ["Ana", "Luis", "Marta"],
    "Edad": [23, 34, 29]
})

print(df)

# Renombramos la columna "Nombre" a "Persona"
df = df.rename(columns={"Nombre": "Persona"})

print(df)
```

:::tip Observación
- `rename()` no modifica el `DataFrame` original a menos que:
    - Uses `inplace=True`
    - Asignes el resultado de `rename()` en la variable que contiene el original: `df = df.rename(...)`
:::




#### Cambiar tipos de datos 
- Podés cambiar el tipo de dato de una columna usando el método `astype()`.
- La sintaxis básica es:
```python
DataFrame["nombre_columna"] = DataFrame["nombre_columna"].astype(tipo_de_dato)
```
:::tip Observación
- `astype()` convierte todos los valores de la columna especificada al `tipo_de_dato` indicado y devuelve el resultado como una `Serie`.
- El `tipo_de_dato` puede ser: `int`, `float`, `str`, `bool`, `"category"`, etc.
:::
- Ejemplo:
```python
import pandas as pd

df = pd.DataFrame({
    "edad": [20, 30, 40],
    "altura": ["1.70", "1.82", "1.65"]   # está como string
})

print(df.dtypes)

# Convertimos la columna 'altura' a float
df["altura"] = df["altura"].astype(float)

print(df.dtypes)
```
:::tip Observación
- `astype()` tampoco modifica el DataFrame original a menos que guardes el resultado.
- `DataFrame.dtypes` muestra el tipo de dato de cada columna.
:::

- Además de `astype()`, Pandas ofrece funciones especializadas para convertir datos de forma más inteligente y flexible:
    - `pd.to_datetime()` : Convierte valores a fechas (`datetime`), incluso si vienen como `string` en distintos formatos.
    - `pd.to_numeric()` : Convierte valores a números (`int` o `float`), permitiendo manejar errores (por ejemplo, convertir textos inválidos en `NaN`).
    - `pd.to_timedelta()` : Convierte valores a duraciones de tiempo (`timedelta`).
- Los métodos especializados como `pd.to_datetime()`, `pd.to_numeric()` y `pd.to_timedelta()`:
    - Reciben como argumento la columna (o Serie) que contiene todos los valores que queremos convertir.
    - Procesan todos los valores y los transforman al tipo correspondiente.
    - Devuelven una Serie nueva con los valores ya convertidos.
    - No modifican el DataFrame original.
- Ejemplo:
```python
import pandas as pd

df = pd.DataFrame({
    "fecha": ["2024-01-10", "10/02/2024", "Mar 5, 2024"],
    "precio": ["100", "250.50", "error"],
    "duracion": ["30s", "2min", "500ms"]
})

print("Antes de convertir:")
print(df)
print(df.dtypes)

# Convertimos cada columna con su método especializado
df["fecha"] = pd.to_datetime(df["fecha"], format="mixed", dayfirst=True)
df["precio"] = pd.to_numeric(df["precio"], errors="coerce")
df["duracion"] = pd.to_timedelta(df["duracion"])

print("\nDespues de convertir:")
print(df)
print(df.dtypes)
```

:::tip Observación
- Además de recibir la columna a convertir `(df["columna"])`, cada método especializado acepta argumentos adicionales que controlan cómo debe interpretarse o manejarse la conversión.
- En el ejemplo:
    - `pd.to_datetime(df["fecha"], format="mixed", dayfirst=True)`:
        - `df["fecha"]` → La columna cuyos valores queremos convertir a fecha.
        - `format="mixed"` → Le dice a Pandas que cada valor puede tener un formato distinto, y que debe detectarlo individualmente.
        - `dayfirst=True` → Indica que, cuando vea formatos tipo `10/02/2024`, interprete el primer número como día y no como mes.
    - `pd.to_numeric(df["precio"], errors="coerce")`:
        - `df["precio"]` → La columna a convertir a número.
        - `errors="coerce"` → Convierte valores inválidos (por ejemplo `"error"`) en `NaN` en lugar de lanzar una excepción.
    - `pd.to_timedelta(df["duracion"])`:
        - `df["duracion"]` → La columna con duraciones ("30s", "2min", "500ms").
        - No usamos argumentos extra, pero podrían agregarse `(unit=, errors=, etc.)` si fuera necesario.
:::



#### Creación  de columnas
- En Pandas podés crear una columna nueva cuyos valores son el resultado de operaciones realizadas con una o más columnas existentes.
- La sintaxis básica es:
```python
DataFrame["columna_nueva"] = operación_con_otras_columnas
```
:::tip Observación
- Dentro de `operación_con_otras_columnas` va cualquier operación matemática o lógica que Pandas aplicará fila por fila, de manera automática.
- Para usar los valores de columnas existentes, tenés que escribir entre corchetes, por ejemplo: `DataFrame["columna1"]`, `DataFrame["columna2"]`, etc.
- En resumen, la expresión realiza una operación por cada fila usando los valores de las columnas especificadas. El resultado de todas esas operaciones forma una `Serie`, que luego se almacena  dentro de `DataFrame["columna_nueva"]`.
:::

- Ejemplo:
```python
import pandas as pd

# DataFrame de ejemplo
DataFrame = pd.DataFrame({
    "valor": [10, 20, 30]
})

# Crear una nueva columna multiplicando por 2
DataFrame["doble"] = DataFrame["valor"] * 2

print(DataFrame)
```

:::tip Observación
- `DataFrame["valor"] * 2` :
    - Recorre cada fila de manera automática.
    - Toma el valor de la columna "valor" en cada fila.
    - Lo multiplica por 2.
    - Genera una `Serie` nueva con todos esos resultados.
- Esa `Serie`  se asigna a `DataFrame["doble"]` como una nueva columna.
:::


## Combinar y fusionar Dataframe
#### Método `concat()`
- La concatenación en Pandas es el proceso de unir `DataFrames` o `Series` colocándolos:
    - Uno debajo del otro (unión por filas, `axis=0`).
    - Uno al lado del otro (unión por columnas, `axis=1`).
- Es decir, sirve para apilar (unir) estructuras de datos sin eliminar ni combinar filas; simplemente las une en la dirección indicada.
- El método `pd.concat()` permite unir varios `DataFrames` o `Series` y suele tener dos parámetros principales:
    - El primer parámetro: Una `lista` de `DataFrames` o `Series` que se van a concatenar.
    - El parámetro nombrado `axis`:
        - `axis=0` → une por filas (apila uno debajo del otro).
        - `axis=1` → une por columnas (pone uno al lado del otro).
        - Su valor por defecto es 0.
- El método `pd.concat()` devuelve un nuevo `DataFrame` que contiene la unión resultante.
##### Ejemplo 1: Concatenar filas (uno abajo del otro)
```python
import pandas as pd

df1 = pd.DataFrame({"A": [1, 2], "B": [3, 4]})
df2 = pd.DataFrame({"A": [5, 6], "B": [7, 8]})

resultado = pd.concat([df1, df2], axis=0)

print(resultado)
```

:::tip Observación
- Toma `df1` como base y le agrega las filas de `df2` al final, porque `axis=0` concatena por filas.
- Los índices/etiquetas de las filas originales se conservan, por lo que aparecerán valores repetidos. 
- Si querés índices nuevos consecutivos, podés usar:
    ```python
    resultado = resultado.reset_index(drop=True)
    ```
:::
##### Ejemplo 2: Concatenar columnas (uno al lado del otro)
```python
import pandas as pd

df1 = pd.DataFrame({"A": [1, 2, 3]})
df2 = pd.DataFrame({"B": [4, 5, 6]})

resultado = pd.concat([df1, df2], axis=1)
 
print(resultado)

```

:::tip Observación
- `concat()` crea un nuevo `DataFrame`, donde cada fila primero tiene las columnas de `df1` y luego las columnas de `df2`.
- La unión se hace por índice/etiqueta de fila:
    - El índice 0 de `df1` se une con el índice 0 de `df2`, formando una sola fila.
    - El índice 1 de `df1` se une con el índice 1 de `df2`, formando una sola fila.
    - El índice 2 de `df1` se une con el índice 2 de `df2`, formando una sola fila, y así sucesivamente.
    - Si algún índice no coincide entre DataFrames, se completa con `NaN`.

:::
#### Método `merge()`
- Para entender qué hace `merge()`, es fundamental entender qué hace un `join` en `SQL`, porque `merge()` funciona exactamente igual.

:::tip ¿Qué es un join en SQL?
- Un `join` combina dos tablas uniendo las filas que tienen una columna (cada una de las tablas) con el mismo valor (generalmente la clave primaria).
- Ejemplo: unir la tabla “Clientes” con la tabla “Pedidos” usando la columna “`id_cliente`”.
- Cada fila de una tabla se combina/une con una fila  de la otra solo cuando los valores coinciden en las columnas especificadas (que deberían tener el mismo valor).
:::
- Así como en `SQL` se usa la cláusula `ON` para especificar qué columnas deben tener el mismo valor para poder unir dos filas, el método `merge()` de Pandas tiene el argumento nombrado `on`, donde indicás el nombre de la columna que debe existir en ambos `DataFrames` y que solo unirá aquellas filas que tengan el mismo valor en esa columna.
- El método `merge()` se puede usar de dos formas:
    - Desde la librería `Pandas`: Lo primero que recibe son los `DataFrames` que querés combinar. No hace falta pasarlos en una lista: simplemente los separás con comas, como argumentos independientes.
    - Desde una instancia de `DataFrame` (forma más usada): El `DataFrame` que invoca el método actúa como el primer argumento de `pandas.merge()`. Al igual que en `pandas.merge()`, podés especificar múltiples `DataFrames` como argumentos separados (no es necesario pasarlos en una lista).
- Ejemplo:
```python
import pandas as pd

clientes = pd.DataFrame({
    "id_cliente": [1, 2, 3],
    "nombre": ["Ana", "Luis", "Marta"]
})

pedidos = pd.DataFrame({
    "id_cliente": [1, 1, 3],
    "producto": ["Lapicera", "Cuaderno", "Carpeta"]
})

# Forma 1 — Usando el método del DataFrame (la más común)
resultado_1 = clientes.merge(pedidos, on="id_cliente")

# Forma 2 — Usando pandas.merge() directamente
resultado_2 = pd.merge(clientes, pedidos, on="id_cliente")

print("Forma 1 (clientes.merge):")
print(resultado_1)

print("\nForma 2 (pd.merge):")
print(resultado_2)

```
:::tip Observación
- Es lo mismo que: `SELECT * FROM Clientes JOIN Pedidos ON Clientes.id_cliente = Pedidos.id_cliente;`
- Une las filas de clientes y pedidos donde `id_cliente` tienen el mismo valor.  Si no tienen el mismo valor, no se incluyen en el resultado final.
- El resultado es un nuevo `DataFrame` que coloca primero las columnas del primer `DataFrame` (clientes) y después las del segundo `DataFrame` (pedidos).
:::

- Además de `on`, el método `merge()` tiene el argumento nombrado `how`, que indica qué tipo de unión (join) querés hacer, igual que en `SQL`.
- El valor por defecto es "`inner`".
- Los valores posibles son:
    - "`inner`" → Solo combina/une filas donde la columna especificada en `on` tiene el mismo valor en ambos `DataFrames`. (El valor por defecto). Si no tienen el mismo valor, no se incluyen en el resultado final.
    - "`left`" → Mantiene todas las filas del `DataFrame` de la izquierda (el primer argumento de `pd.merge()` o la instancia que invoca `merge()`) y solo une las filas que tienen el mismo valor en la columna especificada en `on`.
    - "`right`" → Mantiene todas las filas del `DataFrame` de la derecha (el último `DataFrame` especificado en `merge()`) y solo une las filas que tienen el mismo valor en la columna especificada en `on`.
    - "outer" → Mantiene todas las filas de ambos `DataFrames`; si no hay coincidencia, completa con `NaN`.
- Ejemplo:
```python
import pandas as pd

# DataFrames de ejemplo
df1 = pd.DataFrame({
    "id": [1, 2, 3],
    "A": ["a1", "a2", "a3"]
})

df2 = pd.DataFrame({
    "id": [2, 3, 4],
    "B": ["b2", "b3", "b4"]
})

# INNER JOIN
inner_result = pd.merge(df1, df2, on="id", how="inner")

# LEFT JOIN
left_result = pd.merge(df1, df2, on="id", how="left")

# RIGHT JOIN
right_result = pd.merge(df1, df2, on="id", how="right")

# OUTER JOIN
outer_result = pd.merge(df1, df2, on="id", how="outer")

print("INNER JOIN:\n", inner_result, "\n")
print("LEFT JOIN:\n", left_result, "\n")
print("RIGHT JOIN:\n", right_result, "\n")
print("OUTER JOIN:\n", outer_result)

```
:::tip Observación
- `how="inner"` : Solo mantiene las filas donde `df1` y `df2` tienen el mismo valor en la columna `id`. Las filas donde los valores no coinciden se descartan. Es la forma más estricta de unión.
- `how="left"` : Mantiene todas las filas del `DataFrame` de la izquierda (`df1`). Solo combina/une filas con `df2` cuando el `id` coincide. Si un `id` de `df1` no existe en `df2`, completa las columnas de `df2` con `NaN`.
- `how="right"` : Mantiene todas las filas del `DataFrame` de la derecha (`df2`). Solo combina/une filas con `df1` cuando el `id` coincide. Si un `id` de `df2` no existe en `df1`, completa las columnas de `df1` con `NaN`.
- `how="outer"` : Mantiene todas las filas de ambos `DataFrames`, sin importar si coinciden o no. Cuando un `id` existe solo en uno de los `DataFrames`, las columnas del otro se completan con `NaN`. Es la unión más amplia, combina absolutamente todo.
:::

#### Método `join()`
- `join()` sirve para unir dos `DataFrames` usando el `índice/etiqueta de la fila` como punto de coincidencia. Es decir, busca qué filas tienen el mismo índice en ambos `DataFrames` y las une/combina en una sola fila.
- También puede usarse para unir por columnas, pero solo si vos lo especificás con `on=`.
- Es parecido a `merge()`, pero:
    - `merge()` une por columnas (con `on`).
    - `join()` une por índice, por eso es más simple cuando ya tenés tus `DataFrames` indexados de la forma correcta.
- Sintaxis básica:
```python
DataFrame1.join(other, how="left")
```
:::tip Observación
- Parámetros importantes
    - other:
        - El `DataFrame` (o diccionario de DataFrames) que querés unir/combinar con `DataFrame1`.
    - how:
        - El tipo de join. Igual que en `merge()`, puede recibir: "`left`", "`right`", "`inner`" o "`outer`".
    - on: Funciona igual que en `merge()`. Se usa para unir por una columna en lugar del índice.
:::
- Ejemplo:
```python
import pandas as pd

# DataFrames con índices compatibles
df1 = pd.DataFrame({
    "A": [1, 2, 3]
}, index=["x", "y", "z"])

df2 = pd.DataFrame({
    "B": [10, 20, 30]
}, index=["x", "y", "z"])

# Unir por índice usando join()
resultado = df1.join(df2)

print(resultado)
```
:::tip Observación
- Como los índices `(x, y, z)` son iguales en ambos `DataFrames`, `join()` combina las filas que comparten el mismo índice.
- El índice `x` de `df1` se une con el índice `x` de `df2`, formando una sola fila, y así con `y` y `z`.
- Une por índice, no por columnas (a menos que uses `on=`).
- El resultado es un nuevo DataFrame que tiene primero las columnas de `df1` y luego las de `df2`.
:::

:::tip ¿Qué pasaría si los dos DataFrames tienen una columna con el mismo nombre?
- Con `concat()` no pasa nada especial: como no combina filas ni columnas simplemente une los DataFrames y las columnas duplicadas se mantienen tal cual.
- En `merge()`, generalmente las columnas que comparten nombre se usan en `on` para hacer el cruce. Pero si NO se usan en `on`, Pandas las renombra automáticamente para evitar conflictos, agregando sufijos como `_x` y `_y`.
- En `join()`, ocurre lo mismo que en `merge()`: las columnas con el mismo nombre se renombran automáticamente con sufijos para diferenciarlas.
:::


## Proyectos
#### Manipular un conjunto de datos (Dataset)
- Usaremos el dataset Iris, uno de los conjuntos de datos más famosos y utilizados en estadística, machine learning y visualización.
- La biblioteca Seaborn, que se especializa en la visualización de datos en Python, lo incluye para practicar gráficos y análisis.
- El dataset Iris suele venir con 5 columnas, cada una representando una característica de las flores Iris:
    - sepal_length:
        - Longitud del sépalo (en centímetros).
        - El sépalo es la “hoja” externa que protege a la flor antes de abrirse.
    - sepal_width:
        - Ancho del sépalo (en centímetros).
    - petal_length:
        - Longitud del pétalo (en centímetros).
        - El pétalo es la parte interna y colorida de la flor.
    - petal_width:
        - Ancho del pétalo (en centímetros).
    - species:
        - La especie de la flor.
        - En este dataset hay tres especies:
            - Iris setosa: Es la especie más pequeña de las tres. Sus pétalos son cortos y bastante anchos en relación a su tamaño.
            - Iris versicolor: Tiene un tamaño intermedio. Sus pétalos son más largos que los de setosa pero más cortos que los de virginica.
            - Iris virginica : Es la especie más grande del dataset. Sus pétalos son los más largos y anchos.
- Este conjunto de datos se descarga aquí: [netj/iris.csv](https://gist.github.com/netj/8836201)

```python
import pandas as pd # Importamos la librería pandas para manipulación de datos

df = pd.read_csv('iris.csv') # Leemos un archivo CSV y lo cargamos en un DataFrame

## Explore structure
print("First 5 rows of the DataFrame: \n" , df.head()) # Mostramos las primeras 5 filas del DataFrame
print("\n")
print("Last 5 rows of the DataFrame: \n" , df.tail()) # Mostramos las últimas 5 filas del DataFrame
print("\n")
print("DataFrame Info:\n" , df.describe()) # Mostramos información sobre el DataFrame
print("\n")
selected_columns = df[['variety' , 'sepal.length']] # Seleccionamos las columnas 'variety' y 'sepal.length'
print("Selected Columns (species and sepal_length): \n" , selected_columns) # Mostramos las primeras 5 filas de las columnas seleccionadas
print("\n")
filtered_rows = df[(df['sepal.length'] > 5.0) & (df["variety"] == "Setosa")] # Filtramos las filas donde 'sepal.length' es mayor a 5.0 y 'variety' es 'setosa'
print("Selected Rows (sepal_length > 5.0 and species is setosa): \n" , filtered_rows) # Mostramos las filas filtradas

```

#### Limpieza y modificación de Dataframe
```python
import pandas as pd
import numpy as np

# Conjunto de datos de ejemplo con valores faltantes 
data = { 
        "Name" : ["Alice", "Bob", np.nan, "David", "Eva"],
        "Age" : [25, np.nan, 30, 22, 28],
        "Score" : [85, 90, np.nan, 88, 92]
       }

# Crear el DataFrame
df = pd.DataFrame(data)

print("DataFrame original con valores faltantes: \n" , df)

# Rellenar valores faltantes
df["Age"] = df["Age"].fillna(df["Age"].mean())  # Rellenar con la media los valores faltantes en "Age"
df["Score"] = df["Score"].interpolate()  # Rellenar con interpolación lineal los valores faltantes en "Score"
print("\nDataFrame despues de rellenar valores faltantes: \n", df)

## Renombrar columnas
df = df.rename(columns={"Name": "Student_Name" , "Score": "Exam_Score"})
print("\nDataFrame despues de renombrar columnas: \n", df)
```

:::tip Observación
- `np.nan` es un valor especial de `NumPy` que representa *“Not a Number”* (no es un número).  
  Es el estándar para indicar valores faltantes, vacíos o no definidos en arreglos de `NumPy` y `DataFrames` de Pandas.  
  Aunque su tipo es `float`, tiene características especiales:
    - No es igual a nada, ni siquiera a sí mismo: `np.nan == np.nan   # False`
    - Propaga operaciones: cualquier operación con `np.nan` produce `np.nan`, por ejemplo: `5 + np.nan   # nan`
    - Pandas lo utiliza internamente para representar valores faltantes en los DataFrames.
- Los métodos que rellenan valores faltantes devuelven una `Series` o un `DataFrame` nuevo con los valores modificados, manteniendo el original sin cambios:
    - Si se rellena una sola columna, el método devuelve una `Series`, que puede guardarse nuevamente en esa misma columna:
        - Ejemplo: `df["Age"] = df["Age"].fillna(df["Age"].mean())`
    - Si se aplica sobre el DataFrame completo, el método devuelve un `DataFrame` nuevo.  
        - Para conservar los cambios debe reasignarse: `df = df.fillna(0)`
:::

#### Combinar conjuntos de datos y aplicar transformaciones
```python
import pandas as pd
import numpy as np

# Conjunto de datos de ejemplo
df1 = pd.DataFrame({
    "ID": [1, 2, 3, 4, 5],
    "Name": ["Alice", "Bob", "Charlie", "David", "Eva"],
    "Age": [25, 30, 35, 40, 45],
})

df2 = pd.DataFrame({
    "ID": [1, 2, 3, 4, 5],
    "Score": [85, 90, 95, 80, 75],
   
})

print("\nDataFrame 1:\n", df1)
print("\nDataFrame 2:\n", df2)

# Merge de los DataFrames en base a la columna "ID"
merged_df = pd.merge(df1, df2, on="ID" , how="inner")
print("\nConjunto de datos fusionados:\n", merged_df)


# Crear una nueva columna "Score_Percentage" que convierte la puntuación a porcentaje
merged_df["Score_Percentage"] = (merged_df["Score"] / 100) * 100
print("\nDataFrame con columna 'Score_Percentage':\n", merged_df)
```

:::tip Fórmula `(x / máximo) * 100`
- Esta fórmula sirve para convertir cualquier valor a un porcentaje, siempre que primero estés dividiendo por el valor máximo de la escala (“Escala” significa el rango total posible de valores, es decir, desde el mínimo hasta el máximo que puede tomar algo).
- Para qué se usa:
    - Para transformar un valor que está en cualquier escala a una escala de 0 a 100%.
    - Ejemplos típicos:
        - velocidad actual / velocidad máxima  
        - vida actual / vida máxima  
        - ventas del mes / ventas objetivo  
        - puntaje obtenido / puntaje máximo  
- Qué significa:
    - Primero normalizás el valor dividiéndolo por su máximo. (“Normalizar” significa convertir un valor a una escala común —generalmente entre 0 y 1 o entre 0 y 100— para poder compararlo con otros valores.)
    - Luego lo convertís a porcentaje multiplicándolo por 100.  
- Ejemplo real: convertir una nota de una escala desconocida a porcentaje:
```python
porcentaje = (valor_actual / valor_maximo) * 100
```
- Si el valor es 85 y el máximo es 120:
```python
(85 / 120) * 100 = 70.83%
```
- Importante:
    - La fórmula solo tiene sentido cuando el divisor (máximo) no es 100.
    - Si dividís por 100 y luego multiplicás por 100, el cálculo se cancela y el valor queda igual.
:::
