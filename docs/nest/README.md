---
sidebar_position: 1
---
# Nest
- Es un framework que está desarrollado con typescript para crear aplicaciones web backend.
- Combina elementos de programación funcional, POO y programación reactiva.
- Aplica los conceptos de Angular, pero en el backend.

## Comandos
- Instalamos el CLI para gestionar los proyectos de Next.js con el siguiente comando:
```powershell
npm i -g @nestjs/cli
```
- Para crear un proyecto:
```powershell
nest new nombre-proyecto
```
- Para ver la versión de nest:
```powershell
nest -v
```
- Para construir(compilar) la aplicación:
```powershell
nest build
```
- Para iniciar la aplicación (incluye el proceso de compilación):
```powershell
nest start
```
- Para ver información de los comandos:
```powershell
nest
```
- Para iniciar la aplicación y que se refresque si encuentra algún cambio (para iniciar modo desarrollo):
```powershell
nest start --watch
```

## Estructura de archivos
- Carpeta dist: Acá esta todo el código Javascript que se ejecuta en un servidor.
- Carpeta src: Aca esta ubicado todo el código de backend.
- Carpeta test: Sirve para crear test para probar toda la aplicación.
- tsconfig.json: Para configurar las reglas bases de Typescript
- tsconfig.build.json : Sirve para configurar “reglas extras” que se aplican en producción.

:::warning Iconos de Angular
- En Visual studio code en algunos archivos esta el icono de Angular.
- Para arreglarlo:
    - Pulsamos F1
    - Escribimos: Open Workspace Settings
    - En el json, escribimos lo siguiente:
```json
{
    "material-icon-theme.activeIconPack": "nest"
}

```
:::


## Archivos de Nest.js
#### Modulo
- Una Aplicación NEST consiste en un conjunto de módulos.
- Un módulo en NestJS es como una caja donde guardas todo lo relacionado con una parte específica de tu aplicación. Por ejemplo, si estás creando una aplicación que maneja usuarios, podrías tener un módulo que agrupe todo lo necesario para trabajar con los usuarios: cómo manejarlos, qué hacer cuando alguien se registra, etc. Este módulo se encarga de mantener todo lo relacionado con los usuarios bien organizado y fácil de encontrar.
- Un módulo se enfoca en manejar la lógica de una tarea específica dentro de la aplicación, como la autenticación, la gestión de productos o de usuarios, manteniendo cada tarea separada de las demás.
Cada módulo contiene:
    - controller
    - service
    - dto
    - interceptor
    - etc
#### Controller
- Contiene funciones que se van a ejecutar cuando una url es visitada.
- [Mas información](https://flevatti.github.io/documentacion/docs/C--/API#controlador-teoria)

#### Service
- Son funciones que se pueden utilizar en diferentes controladores.
- Contiene la lógica reutilizable.


#### DTO
-  Contiene la descripción de cómo se van a recibir los datos en el backend.

#### Interceptors
- Son funciones que se ejecutan antes o despues del controlador.


:::tip
- los archivos que terminan en .spec.ts en NestJS son específicamente para probar y asegurarse de que el módulo y sus componentes funcionen correctamente. Estos archivos contienen pruebas automatizadas que ayudan a verificar que el código se comporte como se espera.
:::

## Archivos principales

```js title="app.module.ts"
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

:::tip Observación
- Este es el módulo que utiliza la aplicación de Nest.JS para construir e iniciar la aplicación.
- Este es el módulo que va a contener todos los módulos, controladores, servicios, etc que va a tener la aplicación.
- Contiene un controlador que gestiona las solicitudes y un proveedor que básicamente su función es “importar funciones” de un servicio para que el controlador la pueda usar.
:::

```js title="main.ts"
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

:::tip Observación
- Es el archivo que arranca la aplicación.
- La función NestFactory.create() crea la app y como parámetro recibe el módulo principal que se va a usar en el proceso de compilación y ejecución.
- Con el método listen() la aplicación empieza a escuchar en el puerto que le especificamos.
:::


## Modulo
- Un módulo es una clase con el decorador @Module el cual proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.
- Cada aplicación tiene al menos un módulo, un módulo raíz. El módulo raíz es el punto de partida que utiliza Nest para crear el gráfico de la aplicación: la estructura de datos interna que utiliza Nest para resolver las relaciones y dependencias entre módulos y proveedores. Si bien, en teoría, las aplicaciones muy pequeñas pueden tener solo el módulo raíz, este no es el caso típico. Queremos enfatizar que los módulos son muy recomendables como una forma eficaz de organizar los componentes. Por lo tanto, para la mayoría de las aplicaciones, la arquitectura resultante empleará varios módulos, cada uno de los cuales encapsulará un conjunto de capacidades estrechamente relacionadas.
- El decorador  @Module() toma un único objeto cuyas propiedades describen el módulo:
    - providers:	Los “servicios” que utilizara el modulo.
    - controllers:	Los “controladores” que usara el modulo.
    - imports:	Una lista de módulos que se importaran a este módulo. Lo que se importa sobre todo son los proveedores de otros módulos para poder usarlo en este. El Módulo principal deberá importar todos los módulos que va a usar la aplicación.
    - exports:	Una lista de “providers” de este módulo. Especifica los providers que se exportan para que otros modulos los pueden usar al importar.

#### Crear módulo

- Con el siguiente comando creamos un módulo:
```powershell
nest generate module [nombreModulo]
```
:::tip Observación
- Al ejecutar el comando, se creará una carpeta en src que contendrá toda la lógica que usara el módulo (al principio estará vacía pero cuando le añadas controladores, servicios, etc se llenara).
:::


:::tip
- Para que desaparezcan los errores de Eslint si usamos Windows, escribimos lo siguiente en .eslintrc , debajo del apartado de rules:

```json
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  "prettier/prettier" : [
    "error" , {
      "endOfLine" : "auto"
    }
  ]
};

```
:::

- El archivo que representa el módulo termina en .module.ts y contiene lo siguiente:
```js
import { Module } from '@nestjs/common';

@Module({})
export class TasksModule {}


```
:::tip Observación
- Es una clase con un decorador que contiene un objeto vacio (sin metadatos).
:::

- El app.module.ts :
```js

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [TasksModule],

})
export class AppModule {}

```
:::tip Observación
- La propiedad imports del decorador recibe un array con todos los módulos que se “importara”.
- La propiedad imports se utiliza para traer otros módulos que el módulo actual necesita para funcionar. Es como decirle al módulo: "Para hacer mi trabajo, necesito usar las funcionalidades de estos otros módulos."
- La propiedad imports en un módulo de NestJS se utiliza para importar otros módulos que contienen los proveedores que el módulo actual necesita. Cuando un módulo es importado a través de imports, sus proveedores se vuelven accesibles para ser inyectados en los componentes del módulo que realiza la importación.
- En este caso el módulo principal importa el módulo TasksModule para que se pueda utilizar en la aplicación.
- Es importante importar todos los módulos que se van a utilizar en la aplicación en el módulo principal.

:::

## Controlador
- Se genera con el siguiente comando:
```powershell
nest generate controller [NombreController]
```
:::tip Observación
- Si lo creas con el mismo nombre que el módulo, se crea en la carpeta asignada al módulo y hace las configuraciones correspondientes en este.
- El comando genera dos archivos: uno que termina en controller.ts (el controlador) y otro que termina en spec.ts (para testear el controlador).
:::

- El controlador se vería así:
```js
import { Controller } from '@nestjs/common';

@Controller('tasks')
export class TasksController {}

```
:::tip Observación
- Es una clase con un decorador que recibe como parámetro el nombre del controlador (representa la ruta base para las peticiones HTTP que el módulo gestionara).
:::

- Y en el módulo que tiene el mismo nombre, lo añadimos (él  comando lo hace solo):
```js
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController]
})
export class TasksModule {}

```
:::tip Observación
- La propiedad controllers del decorador es un array con todos los controladores que va a contener el módulo.

:::


## Asignar endpoint
- A través de la clase del controlador, podemos asignar varios endpoint (rutas) que va a gestionar ese controlador:

```js
import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get('/')
   getAllTasks(){
       return 'Obteniendo todas las tareas'
   }

}


```
:::tip Observación
- getAllTask es una función se ejecuta durante la petición GET http://localhost:3000/tasks.
- Su decorador especifica el tipo de petición (GET, POST, DELETE, ETC) y su parámetro la ruta (endpoint) que va a gestionar ese método.  Acordate que se concatena con la ruta base (nombre del controlador). 
- Al especificar ‘/’ estamos diciéndole que sea la ruta base (nombre controlador).
- Cada método de la clase controlador se suele llamar endpoint. El método en si es lo que se ejecuta cuando hacemos una petición al endpoint.
:::


#### Tipo de petición
- Hay un decorador para cada tipo de petición, pero todos como primer parámetro reciben la ruta(endpoint) que va a gestionar el método decorado.
- Ejemplo:
```js
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
   


    @Get('/')
   getAllTasks(){
        return 'Obteniendo todas las tareas'
   }

   
   @Post('/')
   createTask(){
    return 'Creando tarea'
   }
   
   @Put('/')
   updateTask(){
    return 'Actualizando tarea'
   }
   

   @Delete('/')
   deleteTask(){
     return 'Eliminando tarea';
   }

   @Patch('/')
   pathTask(){
     return 'Modificando tarea';
   }

}


```

## Servicio
#### Proveedores
- Proveedores son un concepto clave en NestJS. Se refiere a cualquier clase que pueda ser inyectada como una dependencia (el concepto se denomina inyección de dependencia) dentro de otra clase. Los proveedores incluyen servicios, repositorios, fábricas, ayudantes, y otras clases que se usan para cumplir una función específica dentro de la aplicación.
- La idea principal detrás de un proveedor es que permite establecer relaciones entre diferentes objetos de la aplicación de manera automática y eficiente, delegando la responsabilidad de "conectar" estos objetos al sistema de ejecución de Nest.
- NestJS usa un patrón de diseño llamado inyección de dependencias, que facilita la gestión de dependencias. Gracias a TypeScript, Nest puede resolver y gestionar estas dependencias simplemente por tipo, lo que simplifica el código y reduce errores.

#### Servicio
- Son un tipo específico de proveedor en NestJS. Se encargan de contener la lógica de negocio de la aplicación. Los servicios realizan tareas como acceder a bases de datos, interactuar con APIs externas, realizar cálculos, entre otras.
- Al ser proveedores, los servicios pueden ser inyectados en otros componentes, como controladores o incluso otros servicios, utilizando el sistema de inyección de dependencias de Nest.
- La inyección de dependencias en NestJS permite que los servicios se conecten fácilmente con otros componentes de la aplicación, lo que mejora el modularidad y facilita el mantenimiento del código.
- Un servicio en NestJS es una clase que contiene lógica reutilizable. Esto significa que agrupa funciones o métodos que realizan tareas específicas y que pueden ser usadas en diferentes partes de la aplicación. En lugar de repetir la misma lógica en múltiples lugares, puedes definirla una vez en un servicio y luego simplemente "llamar" a ese servicio desde cualquier parte de la aplicación que lo necesite.

#### Inyección de dependencia
- Inyección de Dependencias es un patrón de diseño que se usa para gestionar las dependencias entre clases en una aplicación. En NestJS, esto se realiza a través del sistema de inyección de dependencias que facilita la creación y gestión de instancias de clases.
- Entonces la inyección de dependencia tiene tres conceptos:
  - Instancias Inyectables: Te permite utilizar instancias (que corresponden a una clase que sea inyectable (especificado por su decorador)) para realizar operaciones.
  - Uso de funciones/Métodos: Básicamente estas importando “funciones/métodos” que ya algún proveedor (servicio, por ejemplo) las creo para usarlas.
  - Constructor: Estas “instancias” el programador las especifica en el constructor de la clase y Nest.js se encarga de crearlas y gestionarla para que las puedas usar. Lo único que necesita Nest para saber que instanciar es el tipo de dato de la clase inyectable que se necesita.
#### Ejemplo para entenderlo
- El comando para crear un servicio es:

```powershell
nest generate service [NombreServicio]
```
:::tip Observación
- Si lo creas con el mismo nombre que el módulo, se crea en la carpeta asignada al módulo y hace las configuraciones correspondientes en este.
- Un servicio es un archivo que termina en “.service.ts” 
- También generara uno que termina en spec.ts (para testear el servicio).
:::

- Entonces en el servicio:

```js
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
   
    getTasks(){
         return ['Task 1' , 'Task 2' , 'Task 3'];
    }
    

}

```
:::tip Observación
- La clase está decorada con el decorador Inyectable para que se pueda acceder a los métodos que contenga desde otras partes de la aplicación

:::

- En el módulo tenemos que configurar que proveedor se va a usar (el comando lo hace solo):
```js
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}


```
:::tip Observación
- providers es un array que recibe las diferentes clases inyectables (contiene el decorador @ Injectable) que pueden usar todos los componentes del módulo.
- Ahora podemos usar una instancia de la clase Inyectable en el controlador TasksController.
:::

- Ahora usemos la clase inyectable en el controlador (es un componente del módulo y por lo tanto la puede usar):

```js
import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks/tasks.service';

@Controller('tasks')
export class TasksController {
    taskService : TasksService
    constructor(taskService : TasksService){
        this.taskService = taskService;
    }

    @Get('/')
   getAllTasks(){
       return this.taskService.getTasks();
   }

 

}

```
:::tip Observación
- En los parámetros del constructor especificamos las clases inyectables que necesitamos, esto se realiza mediante el tipo de dato.
- Cuando se inicia la aplicación, Nest.js utiliza los tipos de datos que especificamos en el constructor, para generar las instancias de las clases inyectables que especificamos.
- Se podría decir que Nest.js se la ingenia para invocar al constructor que especificamos con los “parámetros” que declaramos.
- Nest.js busca en el array providers del módulo para encontrar una clase que coincida con el tipo de dato especificado en el constructor. Si la encuentra, crea una instancia de la clase encontrada en el array providers y la pasa al constructor de la clase que la necesita. Si no la encuentra, NestJS no podrá proporcionar una instancia para ese tipo. Como resultado, la aplicación fallará al intentar crear una instancia del controlador o servicio que lo requiere, generando un error.
- Entonces en este ejemplo Nest.js genera la instancia de la clase inyectable, invoca el constructor con la instancia y nosotros se la asignamos a la variable taskService para poder usarla en el endpoint.
:::


#### Abreviación
- Hay otra manera de usar un inyectable, para esto hacemos lo siguiente.
- En el servicio:

```js
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    
   private service = ['Task 1' , 'Task 2' , 'Task 3']

    getTasks(){
         return this.service;
    }

}

```
- En el controlador:

```js
import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks/tasks.service';

@Controller('tasks')
export class TasksController {
   


    constructor(private taskService : TasksService){}

    @Get('/')
   getAllTasks(){
       return this.taskService.getTasks();
   }

 

}



```
:::tip Observación
- Con la palabra reservada “private” le decimos a Nest que nos cree una variable llamada taskService (nombre del parámetro) que contenga la instancia de la clase inyectable que estamos solicitando.
- De esta manera nos ahorramos lógica en el constructor.


:::

## Response
- Un método de un controlador debe retornar algo, ósea una respuesta a la petición que se hace.
- Nest emplea dos maneras diferentes para enviar una respuesta.


#### 1- Por defecto (Lo maneja Nest)
- Si se devuelve un objeto o un array, se serializa automáticamente en JSON. Sin embargo cuando se devuelve un tipo primitivo de Javascript (String , number , boolean , etc) , Nest enviara solo el valor sin intentar serializarlo.
- El código de estado de la respuesta siempre es 200 de forma predeterminada, excepto para las solicitudes POST que usan 201. Aunque esto podemos cambiarlo con el decorador @HttpCode().
- Si lanzas un error que no corresponda a uno que maneja Nest (“throw new Error”) acabas con la ejecución del programa y como como respuesta devuelves el código de estado  500.


#### 2- Utilizar la sintaxis de express
- A través de decoradores podemos acceder a los típicos objetos que manejamos en Express (req , res , next , req.session , req,params , etc).
- [Mas información.](https://docs.nestjs.com/controllers#request-object)
- Ejemplo:

```js
import { Controller, Delete, Get, Patch, Post, Put, Req, Res } from '@nestjs/common';
import { Request , Response } from 'express';
@Controller('tasks')
export class TasksController {
   


    @Get('/')
   getAllTasks(@Req() request: Request , @Res() response: Response){
       response.status(200).json({
        message: 'Hello world'
       })
   }


```
:::tip Observación
- Gracias a los decoradores tenemos acceso a Request y Response de express.
:::

#### Métodos de respuesta
- Existen varios métodos que brindan Nest que te permiten devolver una respuesta con un código de estado diferente al “por defecto”.
- Por ejemplo:
```js
   @Get('/')
   getAllTasks(){
     throw new NotFoundException('Tarea no encontrada');
   }

```
:::tip Observación
- Lanzas una excepción con el método NotFoundException() que la maneja Nest para devolver una respuesta con el código de estado 404 con un mensaje (el que especificamos en el parámetro).
- [¡Existe un método para cada código de estado asique te invito a investigar!](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)
:::


#### Http status error
- También podemos cambiar el código de estado por defecto de la respuesta, con un decorador:
```js
   @Get('/')
    @HttpCode(404)
   getAllTasks(){
       return 'No encontrada';
   }

```
:::tip Observación
- Con el decorador @HttpCode(X) especificamos que el código de estado de la respuesta debe ser X.
- En este ejemplo remplazamos el código de estado por defecto (que en este caso seria 200) por el 404.
:::

#### HttpException
- HttpException es una clase que se utiliza para lanzar excepciones que maneja Nest para generar una respuesta a una petición HTTP.
- Cuando quieres devolver una respuesta con un código de error específico (como 404, 403, 500, etc.), puedes usar HttpException para hacerlo de manera sencilla. Esta clase te permite controlar tanto el mensaje como el código de estado de la respuesta.
- Ejemplo:
```js
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
   
  @Get('/')
 getAllTasks(){
  throw new HttpException('Mensaje', HttpStatus.FORBIDDEN);
 }

```
:::tip Observación
- En este ejemplo, se lanza una excepción que genera una respuesta HTTP con el código 403 (Forbidden) y el mensaje "Mensaje".
- Parametros de HttpException:
  - 1: El mensaje de error que será devuelto al cliente en la respuesta HTTP. Puede ser un string simple, y es lo que el usuario verá como parte del cuerpo de la respuesta.
  - 2: El código de estado que indica el tipo de error. En este caso, HttpStatus.FORBIDDEN es equivalente al código 403. NestJS proporciona una enumeración (HttpStatus) que facilita el uso de códigos de estado HTTP en lugar de escribir directamente los números (por ejemplo, 403 para "Forbidden").
:::

- También puedes personalizar más la respuesta, incluyendo un objeto con información adicional:
```js
  @Get('/')
 getAllTasks(){
  throw new HttpException(
    {
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    },
    HttpStatus.FORBIDDEN,
  );
 }

```
:::tip Observación
- Parametros de HttpException:
  - 1: Un objeto que contiene más información que un simple mensaje:
    - status: Define el código de estado HTTP (en este caso, HttpStatus.FORBIDDEN o 403).
    - error: Este es un mensaje más personalizado, que puede incluir más detalles sobre el error.
    - Puedes agregar otros campos en este objeto, según lo que quieras devolver al cliente. El objeto será convertido a JSON y enviado como parte de la respuesta HTTP.
  - 2: Código de estado HTTP (HttpStatus.FORBIDDEN):
    -  Al igual que en el primer ejemplo, este es el código de estado HTTP.
    -  Aunque ya se indicó el código en el objeto de respuesta, se vuelve a pasar como un segundo parámetro porque HttpException siempre espera recibir explícitamente el código de estado aquí.

- [Mas información en su sitio web.](https://docs.nestjs.com/exception-filters)
:::


## Body
- Con un decorador tenemos acceso al body de una petición:
```js
import { Body, Controller, Delete, Get, Patch, Post, Put, Req, Res } from '@nestjs/common';
import { Request , Response } from 'express';
@Controller('tasks')
export class TasksController {
   


    @Get('/')
   getAllTasks(@Req() request: Request , @Res() response: Response){
       response.status(200).json({
        message: 'Hello world'
       })
   }

   
   @Post('/')
   createTask(@Body() task: any){
    console.log('Informacion recibida del body' , task);
    return 'Creando tarea'
   }

```
:::tip Observación
- El parámetro que tiene el decorador @Body() contiene el valor de req.body.
:::

## Query
- Con un decorador tenemos acceso a los query de una petición:
```js
import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
@Controller('tasks')
export class TasksController {
   
   

    @Get('/')
   getAllTasks(@Query() query : any){
    console.log("Informacion recibida por query" , query);
       return 'Obteniendo tareas';
   }


```
:::tip Observación
- El parámetro que tiene el decorador @Query() contiene el valor de req.query
:::
## Params
- Cuando especificamos el endpoint (url) en el decorador que indica el tipo de petición, podemos usar el signo “:” para crear params.
- La sintaxis es “:nombreParams” al igual que en Express.js:
```js
  @Get('/:id')
  getTask(@Param() param ){
   console.log("Informacion recibida por param" , param );
      return 'Obteniendo tareas';
  }

```
:::tip Observación
- El parámetro que tiene el decorador @Param() contiene el valor de req.params.

:::

- Aunque podemos acceder a un valor directamente de esta manera:
```js
  @Get('/:id')
  getTask(@Param('id') param ){
   console.log("Informacion recibida por param" , param );
      return 'Obteniendo tareas';
  }

```
:::tip Observación
- El decorador @Param() recibe como parámetro el nombre del param que se quiere acceder, en este ejemplo sería algo como req.params.id.
- Podes realizar lo mismo con los decoradores anterior (@body y @query).


:::

## Dto y Validación
#### Dto
- El DTO es una interface o clase para especificar:
  -	Qué es lo que esperamos recibir 
  -	Que información debe ser “expuesta” al usuario.
- Un DTO describe un objeto que contiene solo los datos necesarios para una operación específica, sin incluir lógica de negocio ni comportamiento. 
- Por lo general creas una carpeta llamada dto dentro de la carpeta del modulo que la va a usar y creas los archivos con nombres como nombreDto.dto.ts
- Ejemplo: 
```js title="task/dto/create-task.dto.ts"
export interface createTaskDto {
    title : string 
    description : string

}

```
- O también puede ser:
```js
export class createTaskDto {
    title : string 
    description : string

}

```

 - Y en los servicios o controladores los usas para especificar qué tipos de datos esperamos recibir o incluso que tipo vamos a retornar para la respuesta:
 ```js
import { createTaskDto } from './dto/create-task.dto';
@Controller('tasks')
export class TasksController {
   
   
 

    @Get('/')
   getAllTasks(){
     throw new NotFoundException('Tarea no encontrada');
   }

   
   @Post('/')
   createTask(@Body() task: createTaskDto){
    console.log('Informacion recibida del body' , task);
    return 'Creando tarea'
   }

 ```
 :::tip Observación
- Si lo probaste te darás cuenta que solo estamos usando las opciones que nos brinda Typescript para mejorar nuestro autocompletado, pero no hay ninguna validación.
 :::


 #### Validación
- Podemos usar las DTO para crear las validaciones. 
- Para realizar las validaciones usaremos dos paquete que nos recomienda Nest: class-validator y class-transformer.
- [Mas información.](https://docs.nestjs.com/techniques/validation)



##### Especificar validaciones
- Ahora podemos usar los decoradores que nos brindan class-validator en una DTO para especificar validaciones (NO IMPLEMENTAR):
```js
import { IsString, MinLength } from "class-validator"

export class createTaskDto {
    @IsString()
    @MinLength(1)
    title : string 


    @IsString()
    @MinLength(1)
    description : string

}

```
:::tip Observación
- [Ver listado de decoradores.](https://github.com/typestack/class-validator#validation-decorators).
- Al implementar validaciones, es obligatorio que cada campo contenga un decorador que especifique el tipo de dato, como @IsString(). De lo contrario, no serán reconocidos como campos.
:::

##### Implementar validaciones
- Ahora nos queda implementar las validaciones que especificamos en el dto, en este caso haremos que nuestro controlador utilice las validaciones:

```js
import { Body, Controller, Delete, Get, NotFoundException, Patch, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
   
   
 

    @Get('/')
   getAllTasks(){
     throw new NotFoundException('Tarea no encontrada');
   }

   @UsePipes(new ValidationPipe())
   @Post('/')
   createTask(@Body() task: createTaskDto){
    console.log('Informacion recibida del body' , task);
    return 'Creando tarea'
   }

```
:::tip Observación
- Con el decorador @UsePipes(new ValidationPipe()) implementamos la validación para el método especifico.
- @UsePipes es un decorador que indica a Nest que utilice una tubería (una clase que implementa la interfaz PipeTransform) para transformar o validar los datos de entrada (lo veremos más tarde).
- new ValidationPipe() crea una instancia de la clase ValidationPipe, que es una tubería incorporada en Nest que realiza la validación basada en los metadatos de validación (por ejemplo, decoradores como @IsString(), @MinLength(), etc.) que se especificó en la dto.
- La tubería ValidationPipe en NestJS utiliza class-validator para realizar la validación de los datos de entrada.
- La validación se realiza de la siguiente manera:
  1.	Nest crea una instancia de la clase ValidationPipe.
  2.	La tubería ValidationPipe analiza los metadatos (decoradores) de validación aplicados a los datos de una dto(en este caso, createTaskDto).
  3.	La tubería ValidationPipe verifica si los datos de entrada cumplen con las reglas de validación definidas en los metadatos.
  4.	Si los datos de entrada son válidos, la tubería ValidationPipe devuelve los datos de entrada sin modificarlos.
  5.	Si los datos de entrada son inválidos, la tubería ValidationPipe lanza una excepción ValidationException que es manejada por Nest devolviendo una respuesta con código de estado 400 y indicando los errores de validaciones.
:::

- También podemos hacer que se apliquen validaciones en toda la aplicación, sin importa que controlador sea.
- Para esto en el archivo principal, main.ts:
```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

```
:::tip Observación
- En lugar de usar el decorador @UsePipes, usamos el método useGlobalPipes que contiene la aplicación que se crea.
- Con el método useGlobalPipes le indicamos a Nest que use una tubería en toda la aplicación (en todas las peticiones básicamente).
- De esta manera las validaciones se van a implementar en todas las peticiones de la aplicación en la que se utilizan una DTO con validaciones.
:::

##### Whitelist
- Podemos configurar la tubería ValidationPipe() para que elimine los campos o propiedades que no figuren en el DTO.
- Para esto hacemos lo siguiente:
```js
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));

```
:::tip Observación
- ValidationPipe puede aceptar un objeto con varias opciones. Cuando configuras whitelist en true, automáticamente elimina cualquier propiedad que no esté definida en el DTO (Data Transfer Object). Esto ayuda a asegurar que solo los datos esperados pasen a las funciones de los controladores, aumentando la seguridad y limpieza del proceso de validación.
:::

- Ahora  hacemos una petición a http://localhost:3000/tasks con el siguiente body:
```json
{
  "title" : "titulo" ,
  "description" : "campo extra" ,
  "campo extra" : "campo extra"
}

```
:::tip Observación
- El “campo extra” se elimina del body antes de que llegue al controlador gracias a la tubería.
- Una tubería sirve para modificar o validar datos antes de que llegue al controlador (lo veremos más adelante).
:::

## Pipe
- Un Pipe (tubería) es una clase con el decorador @Injectable(), la cual implementa la interface PipeTransform.
- Los pipes en NestJS tienen dos usos principales:
  1.	Transformación: Convierte los datos de entrada en el formato deseado. Por ejemplo, podrías convertir un dato que te llega como texto (string) en un número entero (integer).
  2.	Validación: Evalúa los datos de entrada para ver si son correctos. Si los datos son válidos, se dejan pasar tal cual; si no, el pipe genera un error.
- En ambos casos, los pipes funcionan sobre los parámetros (datos) que recibe un método del controlador (la información que llega a una ruta específica de tu aplicación). Antes de que el método del controlador se ejecute, NestJS coloca un pipe(tubería), para que reciba los datos, los transforme o los valide, y luego pase esos datos al controlador. Es en este momento cuando ocurre cualquier transformación o validación, y después, el método del controlador se llama con los parámetros modificados (si es necesario).
- NestJS ya incluye varios pipes predefinidos que puedes usar directamente. También puedes crear tus propios pipes personalizados.
En resumen, los pipes interceptan los datos antes de que lleguen al método del controlador, los validan o transforman, y luego los pasan al método del controlador. 

#### ¿Por qué se llaman tubería?
- Comparar un pipe con una "tubería" viene de cómo funcionan: tal como una tubería transporta agua de un punto a otro, los pipes en NestJS "transportan" los datos de entrada hacia el método del controlador. Durante este proceso, pueden "filtrar" los datos (validándolos) o "modificarlos" (transformándolos) antes de que lleguen a su destino.
- Es decir, el pipe actúa como un conducto por el que pasan los datos, pero antes de que lleguen al controlador, pueden ser revisados (validación) o cambiados (transformación).


#### Pipes predefinidos
- Se puede adjuntar un pipe a un dato en específico:
```js
import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
   
   
 
    
   @Get('/:number')
   getAllTasks(@Param('number',ParseIntPipe) num : number){
       return num + 10;
   }

```
:::tip Observación
- Los valores que recibimos por param generalmente son String asique usamos el pipe ParseIntPipe que viene de Nest para convertir el valor en int.
- Como puedes ver en el segundo parámetro de algunos decoradores podés especificar los pipes a aplicar para ese dato en específico.
- En este caso estamos aplicando una tubería solo para el dato que contiene el param number, el valor de number pasa por esta tubería, se aplica una transformación (se vuelve en int) y luego se lo pasa ya transformado al método del controlador.
:::

- Otro ejemplo convirtiendo el valor en booleano:

```js
import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Post, Put} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
   
   
 
    
   @Get('/:boolean')
   getAllTasks(@Param('boolean', ParseBoolPipe) boolean : boolean){
       return boolean
   }

```
#### Pipe personalizado
- Para este ejemplo usaremos este endpoint:
```js
   @Get('/')
   getAllTasks(@Query() query: {name: string , age: number}){
    console.log("age" , typeof query.age);
    console.log("name" ,typeof query.name);
       return `Es la tarea de ${query.name}, tiene ${query.age} años  `
   }

```
- Podemos generar un pipe con el comando:

```powershell
nest generate pipe [Nombre]
```
:::tip Observación
- Este comando genera un archivo base para definir un pipe personalizado.
:::

- El pipe se vería así:

```js
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { isNumber } from 'class-validator';

@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    const ageNumber = parseInt(value.age.toString() , 10);
    if (isNaN(ageNumber)) {
        throw new HttpException('La edad debe ser un numero' , HttpStatus.BAD_REQUEST);
    }
    return {...value , age: ageNumber};
  }
}

```
:::tip Observación
- Un pipe debe implementar el  método transform que es el encargado de validar o transformar los datos de entrada antes de que lleguen al método del controlador. Se ejecuta antes de la lógica del controlador y permite modificar o validar datos como el cuerpo de la solicitud (body), los parámetros (params), o las consultas (query), asegurando que la información ingresada cumpla con los requisitos antes de ser procesada.
- El método transform en un pipe personalizado recibe dos parámetros clave:
  1.	value: Este es el primer parámetro, y representa los datos de entrada que se desean validar o transformar. Dependiendo de la solicitud HTTP, estos datos pueden provenir del cuerpo de la petición (body), de los parámetros de ruta (params), de las consultas (query), entre otros. Es el objeto principal que el pipe debe manipular o verificar para asegurar que cumpla con los criterios establecidos antes de que llegue al método del controlador.
  2. metadata: Este es el segundo parámetro, un objeto que contiene información adicional sobre la ejecución del pipe. Incluye detalles como el tipo de dato que se está manejando (por ejemplo, body, query, params) y el tipo de método que lo está recibiendo (si es un método de GET, POST, etc.).
    - Algunas de sus opciones son:
      - Metatype: Representa el constructor de la clase que pertenece el parámetro value. Es decir, indica el tipo de dato que se espera para el valor que se está procesando en el pipe. Cuando ves algo como metatype: [Function: Object], significa que el dato recibido en value está siendo interpretado como un objeto genérico, no una instancia de una clase específica. Si no has especificado un tipo de dato concreto para los parámetros del método del controlador, NestJS por defecto asume que el tipo es Object, y por lo tanto el metatype en el pipe será [Function: Object].
      - Type:  Indica el origen de los datos que está recibiendo el pipe. Los valores pueden ser: query , body , param y header.
      - Data: Contiene información adicional asociada al parámetro específico que está siendo procesado. Contiene los metadatos que están asociados a decoradores.
- El método transform en un pipe personalizado devuelve el valor transformado o validado que luego se pasará al método del controlador. Básicamente, lo que el pipe devuelve es lo que finalmente recibe el controlador como parametro.
- Entonces:
  -	Si devuelves el valor sin modificarlo: El controlador recibirá el dato tal como fue enviado originalmente en la solicitud.
  -	Si transformas o validas el valor: El valor modificado o validado será el que llegue al controlador.
  -	Si los datos no cumplen con ciertas validaciones, puedes lanzar una excepción ([ver Métodos de respuesta](README.md#httpexception)) en lugar de devolver un valor.
- En este ejemplo:
  -	Se toma el valor de la propiedad age del objeto value, y se convierte a un número entero con parseInt().
  -	Si el valor de age no es un número (es decir, si ageNumber es NaN), se lanza una excepción con un código de estado 400 Bad Request utilizando HttpException, devolviendo un mensaje personalizado: 'La edad debe ser un número'.
  -	Si la conversión es exitosa, se devuelve el objeto original (value), pero con la propiedad age convertida a un número.
  -	Este pipe se asegura de que el valor de la propiedad age sea un número. Si no lo es, lanza un error HTTP 400 (Bad Request). Si la validación pasa, devuelve el objeto original con age ya convertido a un número.

:::
- Lo implementamos:
```js
import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Post, Put, Query} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { ValidatePipe } from './pipes/validate/validate.pipe';

@Controller('tasks')
export class TasksController {
   
   
 
    
   @Get('/')
   getAllTasks(@Query(ValidatePipe) query: {name: string , age: number}){
    console.log("age" , typeof query.age);
    console.log("name" ,typeof query.name);
       return `Es la tarea de ${query.name}, tiene ${query.age} años  `
   }

```
:::tip Observación
- En el decorador @Query () especificamos directamente las tuberías(pipe) en el primer parámetro para que se apliquen a TODAS las query. Sucede lo mismo en los otros decoradores.
:::

## Guards
- Es una clase que implementa el decorador @Inyectable() que implementa la interface CanActivate.
- La función de un Guard es controlar si una solicitud puede acceder o no a un endpoint (método del controlador) en función de permisos o autenticación:
  -  Autorización: Se refiere a si el usuario tiene los permisos necesarios para acceder a una ruta específica.
  -  Autenticación: Normalmente está vinculada con validar la identidad de un usuario mediante tokens o credenciales.

#### Diferencia con middleware
- El middleware es una función intermedia que se ejecuta antes que el método del controlador. Sin embargo, el middleware no sabe qué se va a ejecutar después de llamar a next (). Solo hace su tarea y pasa la solicitud, sin importar qué viene después.
- Los guards son más "inteligentes" que el middleware porque tienen acceso a una instancia llamada ExecutionContext. Esto les da información sobre qué se ejecutará a continuación, después de que el guard termine su trabajo. Esto es importante porque permite a los guards tomar decisiones más precisas basadas en su contexto.
- Los guards, están diseñados para permitir que coloques lógica específica (como validar permisos) en el momento exacto que se necesita en el ciclo de solicitud/respuesta. Esto mantiene tu código más limpio, sin duplicar lógica en varios lugares (DRY, que significa "Don't Repeat Yourself").
- Los guards se ejecutan después de que todo el middleware ha hecho su trabajo, pero antes de que entren en juego los interceptores (Interceptors) o las tuberías (pipe). Esto los coloca en una posición ideal para manejar la autorización, ya que pueden decidir si la solicitud debe continuar antes de que se realicen más operaciones en ella.
- Un buen uso de los guards es controlar el acceso a rutas específicas, donde solo ciertos usuarios (por ejemplo, usuarios autenticados con permisos adecuados) pueden acceder. Un ejemplo común es un AuthGuard, que valida que un token de autenticación esté presente en la solicitud, lo extrae y verifica si el usuario tiene permiso para continuar.

#### Crear un guard
- Para crear un Guard usamos el siguiente comando:
```powershell
nest generate guard [Nombre]
```
:::tip Observación
- Crea un archivo base para definir un guard.
:::

- El Guard se vería así:

```js
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TasksGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log(context);
    
    // Obtenemos el request
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);
    if (request.url === '/tasks') return false;
    return true;
  }
}

```
:::tip Observación
- Un Guard debe implementar el método canActivate , que devuelve un valor booleano o una promesa/observable que resuelve a true o false. Si devuelve true, la solicitud puede continuar y llegar al controlador; si devuelve false, se bloquea el acceso al endpoint y se devuelve una respuesta 403.
- El parámetro ExecutionContext contiene un objeto que tiene acceso a la solicitud y contexto de ejecución (en pocas palabras contiene información de la petición, que es mucha más completa que un middleware). Se puede usar para obtener detalles de la solicitud HTTP, los parámetros, la autenticación, etc. Básicamente encapsula toda la información de la solicitud y su contexto, permitiéndote acceder a datos específicos según el tipo de transporte que se esté utilizando (HTTP, WebSocket, gRPC, etc.). Esto te permite manejar y personalizar la lógica de autorización, interceptación y manejo de errores de manera efectiva en diversos entornos de aplicación.
- Algunos de sus métodos son:
  - switchToHttp(): Esto transforma el contexto en un contexto HTTP, lo que te permite obtener la solicitud y respuesta HTTP
  - getHandler(): Obtiene el manejador (handler) actual, es decir, el método del controlador que está siendo ejecutado. Esto es útil si quieres acceder a las anotaciones o metadatos del manejador, como los decoradores.
  - getClass(): Devuelve la clase del controlador en la que se encuentra el manejador que está siendo ejecutado.
  - getArgs(): Devuelve un arreglo con los argumentos que fueron pasados al manejador, dependiendo del tipo de contexto (HTTP, RPC, WebSocket, etc.).
  - getType(): Devuelve el tipo de transporte (HTTP, WebSocket, etc.). Esto es útil si estás desarrollando una aplicación con múltiples tipos de transporte y necesitas actuar de manera diferente según el tipo de solicitud.
- En este ejemplo, si la URL no tiene ninguna QUERY le bloqueamos el acceso.
:::


:::tip Contexto de ejecución
- El "contexto de ejecución" se refiere al entorno de ejecución donde se ejecuta una pieza de código.
- En NestJS, cambiar de contexto te permite acceder a información específica de un tipo de solicitud o transporte (como HTTP, WebSocket, gRPC, etc.). Esto se logra mediante métodos proporcionados por el framework que facilitan la adaptación a diferentes contextos.
- Por ejemplo, cuando trabajas con solicitudes HTTP, puedes usar métodos como switchToHttp() para acceder a los objetos request y response. Esto es útil cuando necesitas manejar solicitudes HTTP en tus interceptores, guards, o middlewares.
- Cambiar de contexto en NestJS es una técnica que te permite acceder a la información de un tipo de solicitud o transporte (HTTP, WebSocket, gRPC, etc.). Utilizando métodos como switchToHttp(), switchToWs(), o switchToRpc(), puedes manejar diferentes tipos de solicitudes de manera flexible y estandarizada, lo que facilita la adaptación de tu código a distintos entornos y tipos de comunicación.
- Cambiar de contexto en NestJS te proporciona un objeto que te permite acceder a la información específica del tipo de transporte o contexto en el que se está ejecutando el código. Este enfoque estandariza cómo se accede a la información relevante según el tipo de solicitud o transporte.
- [Mas información.](https://docs.nestjs.com/fundamentals/execution-context#current-application-context)
:::

#### Implementar guards
- Con el decorador @UseGuards implementamos los guard:
```js
import { Body, Controller, Delete, Get,  Post, Put, Query, UseGuards} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { ValidatePipe } from './pipes/validate/validate.pipe';
import { TasksGuard } from './tasks.guard';

@Controller('tasks')
export class TasksController {
   

 
  @UseGuards(TasksGuard)
   @Get('/')
   getAllTasks(@Query(ValidatePipe) query: {name: string , age: number}){
    console.log("age" , typeof query.age);
    console.log("name" ,typeof query.name);
       return `Es la tarea de ${query.name}, tiene ${query.age + 20} años  `
   }

```
:::tip Observación
- Como solo estamos decorando un método del controlador, solo se implementaría en ese endpoint específico.
- El parámetro del decorador @UseGuards especifica los Guards a implementar. 
- En este ejemplo estamos implementando el Guard que creamos en el endpoint get de tasks. Ahora cada vez que se haga una petición get a /tasks se ejecutara el guard después del middleware (si contiene alguno).
:::

## Middleware
- Un middleware es una función que se ejecuta antes de que se ejecute el método de un controlador. 
- Las funciones middleware pueden realizar las siguientes tareas:
  1.	Ejecutar cualquier código.
  2.	Hacer cambios en los objetos de solicitud y respuesta.
  3.	Finalizar el ciclo de solicitud-respuesta (devolver una respuesta).
  4.	Llamar a la siguiente función middleware en la pila (o al método del controlador).
- Si un middleware no finaliza el ciclo de solicitud-respuesta, necesita llamar a la función next(). Esto permite que el siguiente middleware en la pila sea ejecutado (o el método del controlador si no hay ningún middleware más). Si no se llama a next(), la solicitud se queda "colgada", es decir, no llega a su destino.
- Nest usa el mismo concepto de middleware que Express, por lo que cualquier persona que conozca Express podrá usar middleware en Nest de manera similar.
- Nest permite que los middleware utilicen inyección de dependencias, lo que significa que pueden acceder a servicios u otras clases del mismo módulo a través del constructor, similar a cómo se haría en controladores o servicios.
- Puedes implementar middleware usando una clase (donde aplicas el decorador @Injectable() y la interfaz NestMiddleware para hacerla más robusta), o simplemente con una función, que es más directa y no tiene requisitos especiales.

#### Generar middleware
- Ejecutamos el comando:
```powershell
nest g middleware [nombre]
```
:::tip Observación
- Crea un archivo base para definir un middleware.
:::

- Se vería así:
```js
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class TasksMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    next();
  }
}

```
:::tip Observación
- El método use() es la función que se ejecutara antes del método del controlador y contiene los tres parámetros de Express.js

:::

#### Implementar middleware
- Los middlewares se implementan en el módulo que va a contener los controladores (Acordate que un middleware en NestJS es una función que se ejecuta antes de que una solicitud llegue al controlador).
- Entonces en el módulo de task:

```js
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksMiddleware } from './tasks.middleware';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
       consumer.apply(TasksMiddleware).forRoutes('tasks')
   }
}

```
:::tip Observación
- La clase que representa el módulo, debe implementar la interfaz NestModule. Esto es necesario cuando se quiere implementar el middleware dentro de un módulo. Esta interfaz obliga a la clase a tener el método configure, que es donde se define qué middleware se va a aplicar y a qué rutas.
- El método configure es parte de la interfaz NestModule. Aquí es donde realmente configuras el middleware:
  - consumer: MiddlewareConsumer: Este parámetro del método configure es una instancia de la clase MiddlewareConsumer, que te permite aplicar uno o varios middlewares a las rutas del módulo:
  -	apply(): Método del MiddlewareConsumer que indica qué middleware se va a aplicar. En este caso, se está aplicando el middleware TasksMiddleware.
  -	forRoutes(): Método que indica a qué rutas se va a aplicar el middleware. En este caso, se aplicará a todas las rutas 'tasks'.
  - Apply() devuelve un objeto que permite seguir configurando cómo y dónde debe aplicarse el middleware mediante métodos encadenados como forRoutes(), exlude() , etc…

:::

- Cambiamos solo para la ruta GET:

```js
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksMiddleware } from './tasks.middleware';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
       consumer.apply(TasksMiddleware).forRoutes({
         path: '/tasks' , method: RequestMethod.GET
       })
   }
}

```
:::tip Observación
- Podemos especificar un objeto para indicar en qué tipo de petición de la ruta/endpoint (path) se va a implementar el middleware.
- En este ejemplo solo se implementa en las peticiones GET de la ruta /tasks.
- Podes especificar varios objetos para indicar los diferentes tipos de peticiones para un middleware y muchas otras cosas, te toca chequear la documentación.
:::

#### Ejemplo de un Middleware de autenticación
```js
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class TasksMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {authorization} = req.headers;
    if (!authorization) {
      throw new HttpException('Unathorized' , HttpStatus.UNAUTHORIZED);
    }
    next();
  }
}

```


## Interceptors
- Un interceptor es una clase con el decorador @Inyectable que implementa la interfaz NestInterceptor.
- Los interceptores en NestJS se inspiran en la técnica de Programación Orientada a Aspectos (AOP), que permite aplicar lógica adicional alrededor de la ejecución de métodos, sin modificar directamente el código del método en cuestión. Esto significa que los interceptores pueden influir en el comportamiento de los controladores y servicios de NestJS de diversas maneras, como ejecutar lógica antes y después de un método, transformar su resultado, o incluso anular la ejecución completa del método bajo condiciones específicas.
- Permiten:
  1.	Vincular lógica antes y después de la ejecución de un método:
  Los interceptores permiten ejecutar código tanto antes de que un controlador o método de servicio se ejecute como después de su finalización.
  2.	Transformar el resultado devuelto por una función:
  Después de que un método devuelva una respuesta, el interceptor puede modificar el resultado antes de enviarlo de vuelta al cliente.
  3.	Transformar excepciones lanzadas por una función:
  Si un método lanza una excepción, el interceptor puede capturarla y manejarla o transformarla en un mensaje diferente.
  4.	Ampliar el comportamiento de una función básica:
  El interceptor puede agregar lógica adicional que no está presente en el método original, ampliando su funcionalidad sin modificar el código del controlador o servicio.
  5.	Anular una función dependiendo de condiciones específicas:
  6. En ciertos casos, el interceptor puede decidir no ejecutar el método del controlador, por ejemplo, si la respuesta ya está en caché y no es necesario recalcularla.

#### Metodo intercept()
- Cada interceptor implementa el método intercept(). Este método toma dos argumentos principales:
  -	ExecutionContext:
    - Este objeto proporciona detalles sobre el contexto en el que se está ejecutando el método, como el tipo de transporte (HTTP, WebSocket, etc.), los argumentos de la solicitud, o incluso los detalles de autenticación. Los interceptores pueden usar estos detalles para construir lógica más genérica que funcione en una amplia gama de controladores y métodos. [Este mismo objeto se utiliza en los guards](README.md#crear-un-guard).
  - CallHandler:
    - Este objeto proporciona el método handle(), que se usa para invocar el método del controlador de ruta. Si handle() no es llamado dentro de intercept(), el método del controlador no se ejecutará.
    - Como handle() devuelve un Observable, podemos aplicar operadores de RxJS para manipular la respuesta antes de devolverla al cliente.


####  Primer ejemplo
```js
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TasksInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}

```
:::tip Observación
- Lo podés generar con el comando “nest generate interceptor [nombre]”.
:::

:::tip Explicación del código
- Todo Interceptor tiene el método `intercept` (te obliga la interfaz `NestInterceptor`), el cual tiene dos parámetros:
  - `context: ExecutionContext`: Proporciona información sobre el contexto de la ejecución actual, como el tipo de transporte (HTTP, WebSocket, etc.) y los detalles de la solicitud.
  - `next: CallHandler`: Proporciona el método `handle()` que se encarga de ejecutar el método que maneja la solicitud.
- Flujo dentro del método `intercept`:
  - `console.log('Before...')`:
    - Esta línea imprime el mensaje `"Before..."` en la consola antes de que se ejecute el método del controlador. Esto sirve para registrar cuando el interceptor está siendo invocado antes de que el método del controlador sea llamado.
  - `const now = Date.now()`:
    - Esta línea captura el momento actual en milisegundos para medir cuánto tarda en ejecutarse el método del controlador.
  - `return next.handle().pipe(...)`:
    - El método `handle()` del `CallHandler` es invocado aquí. Este método ejecuta el controlador correspondiente (el método del controlador que maneja la solicitud entrante).
    - `pipe()`: Es un método de los Observables de RxJS que permite manipular o reaccionar a la respuesta del método.
  - `tap(() => console.log(After... ${Date.now() - now}ms))`:
    - El operador `tap()` es usado para realizar una acción sin modificar el valor de la respuesta del controlador. Aquí, se usa para imprimir el tiempo transcurrido desde que se capturó `now` hasta que el controlador terminó de ejecutarse. Este cálculo se hace restando `Date.now()` (el tiempo actual después de la ejecución) del valor de `now` (el tiempo capturado antes de la ejecución).
    
- Así, el mensaje `"After... Xms"` se imprimirá, donde `X` es el tiempo que tardó en ejecutarse el método del controlador en milisegundos.
:::


- Para implementar el interceptor, simplemente lo especificamos en el controlador (se implementa en todos los métodos) o método que lo va a usar mediante el decorador @UseInterceptors():

```js
import { Body, Controller, Delete, Get,  Post, Put, Query, UseInterceptors} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { ValidatePipe } from './pipes/validate/validate.pipe';
import { ApiTags } from '@nestjs/swagger';
import { queryTaskDto } from './dto/query-task.dto';
import { TasksInterceptor } from './tasks.interceptor';

@ApiTags('task')
@Controller('tasks')
export class TasksController {

  @UseInterceptors(TasksInterceptor)
   @Get('/')
   getAllTasks(@Query(ValidatePipe) query: queryTaskDto){
    console.log("age" , typeof query.age);
    console.log("name" ,typeof query.name);
       return `Es la tarea de ${query.name}, tiene ${query.age + 20} años  `
   }
```
:::tip Observación
- El Interceptor que creamos antes se especifica en el decorador @UseInterceptors. Esto significa que cuando se ejecute el método del controlador, también se ejecutará el interceptor que creamos.
- Puedes usar el decorador @UseInterceptors en dos lugares:
  - En la clase del controlador:
    - Si aplicas @UseInterceptors a la clase del controlador, el interceptor se aplicará a todos los métodos dentro de esa clase.
  - En un método específico del controlador:
    - Si aplicas @UseInterceptors a un método específico, el interceptor solo se aplicará a ese método en particular.
- Así que, en resumen, @UseInterceptors se puede usar a nivel de clase para afectar todos los métodos del controlador o a nivel de método para afectar solo el método específico.

:::


#### Interceptor global
- La aplicación de Nest tiene el método useGlobalInterceptors() para poder especificar los interceptores que se van a implementar de manera global (en toda la aplicación).
- Ejemplo:
```js
import { TasksInterceptor } from './tasks/tasks.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule );
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));
app.useGlobalInterceptors(new TasksInterceptor());
  await app.listen(3000);

```
:::tip Observación
- Le pasamos una instancia de la clase que contiene el interceptor al método useGlobalInterceptors().
- El interceptor que le indicamos al método se va a implementar en todos los controladores de la aplicación.
:::

#### Segundo ejemplo
- Vamos a modificar el primer ejemplo para poder manipular la respuesta:
```js
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  nuevaPropiedad: T;
}
@Injectable()
export class TasksInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ nuevaPropiedad : data })));
  }
}

```
:::tip Explicación del código
- `TasksInterceptor<T>`: Esta clase es un interceptor genérico en NestJS. `T` es un tipo genérico que define el tipo de datos que el interceptor manejará. Implementa la interfaz `NestInterceptor`. Al ser genérico, puede trabajar con cualquier tipo de dato.
- `NestInterceptor<T, Response<T>>`:
  - `T`: Es el tipo de dato que el interceptor recibirá como entrada, es decir, el resultado que devuelve el método del controlador. Por ejemplo, si el método del controlador devuelve un `string`, `T` sería `string`.
  - `Response<T>`: Es el tipo de dato que el interceptor devolverá. Esto significa que el interceptor transformará el resultado en un objeto que tendrá la estructura definida por `Response`, donde `nuevaPropiedad` contendrá el dato original de tipo `T`.
- `next.handle().pipe(map(data => ({ nuevaPropiedad: data })))`:
  - `next.handle()`: Devuelve un `Observable` que emite el resultado del método del controlador.
  - `pipe(map(data => ({ nuevaPropiedad: data })))`: Usa el operador `map` de RxJS para transformar el resultado. En lugar de devolver el resultado original (`data`), envuelve el resultado en un objeto con una propiedad `nuevaPropiedad` cuyo valor es el resultado original.
:::


- Entonces el endpoint donde implementamos el interceptor quedaría así:

```js
   @Get('/')
   getAllTasks(@Query(ValidatePipe) query: queryTaskDto){
    console.log("age" , typeof query.age);
    console.log("name" ,typeof query.name);
       return `Es la tarea de ${query.name}, tiene ${query.age + 20} años  `
   }

```
:::tip Observación
- Valor de T en TasksInterceptor&lt;T>: T es el valor que devuelve el método del controlador:
  - El método retorna un string, ya que la respuesta es una cadena que incluye el nombre y la edad.
  - Así, cuando se usa el interceptor en este contexto, se puede deducir que T es string.
- NestInterceptor&lt;T, Response&lt;T>>:
  - T: es string (lo que devuelve el método del controlador).
  - Response&lt;T>: se convierte en Response&lt;string>. 
- Conclusión: Los tipos genéricos se deducen del tipo de datos que el método del controlador devuelve. En este caso, dado que el método devuelve un string, se infiere que el interceptor manejará cadenas y retornará un objeto que encapsula esa cadena en una propiedad nuevaPropiedad. Esto permite que el interceptor se ajuste a diferentes tipos de datos en otros métodos, haciéndolo más flexible y reusable.
- [Mas información.](https://docs.nestjs.com/interceptors#interceptors)
:::

## Base de datos prisma
- [Documentación de prisma.](https://docs.nestjs.com/recipes/prisma)
- Prisma es una herramienta que facilita la interacción con bases de datos en aplicaciones Node.js y TypeScript. En lugar de escribir consultas SQL a mano o utilizar otras herramientas que ayudan a construir consultas SQL (como knex.js) o usar otros ORM (como TypeORM y Sequelize), Prisma ofrece una manera de gestionar la base de datos de una forma más estructurada y segura.

#### ¿Qué hace Prisma?
- ORM (Object-Relational Mapping): Prisma actúa como un intermediario entre tu código y la base de datos. Te permite manipular base de datos usando objetos y clases, en lugar de tener que escribir SQL directamente.
- Alternativa a SQL y otras herramientas: Prisma se puede considerar como una alternativa a escribir SQL directamente o a usar otros generadores de consultas SQL y ORM que ya existen. Es decir, en lugar de construir consultas SQL manualmente o usar otras bibliotecas que lo hacen, puedes usar Prisma para interactuar con tu base de datos de manera más conveniente.
- Soporte para varias bases de datos: Prisma actualmente es compatible con varias bases de datos, incluyendo PostgreSQL, MySQL, SQL Server, SQLite, MongoDB y CockroachDB (aunque el soporte para CockroachDB está en una fase preliminar).
- Integración con TypeScript: Aunque puedes usar Prisma con JavaScript puro, está diseñado para integrarse muy bien con TypeScript. Esto significa que Prisma ofrece un nivel alto de "seguridad de tipos", lo que ayuda a evitar errores de tipo y a proporcionar una mejor experiencia de desarrollo cuando se usa TypeScript. La seguridad de tipos es una característica importante en TypeScript que ayuda a garantizar que los tipos de datos se utilicen correctamente en el código.
- Comparación con otros ORM: Prisma proporciona garantías de seguridad de tipos que superan a las que ofrecen otros ORM en el ecosistema de TypeScript. Esto significa que ofrece una mayor protección y confiabilidad en el uso de los tipos de datos en comparación con otras herramientas como TypeORM.


:::tip ORM
- ORM es una técnica de programación que permite interactuar con una base de datos relacional utilizando objetos y clases en lugar de escribir consultas SQL directamente. Básicamente, el ORM actúa como un intermediario entre tu código y la base de datos, traduciendo las operaciones que realizan los objetos en operaciones de bases de datos.
:::

#### Instalamos prisma
```powershell
npm install prisma --save-dev
```

:::tip Paquete prisma
- Es el CLI de Prisma
- Este paquete contiene herramientas para ejecutar comandos como:
  -	prisma init: para inicializar un proyecto de Prisma.
  -	prisma migrate: para crear y aplicar migraciones a la base de datos.
  -	prisma generate: para generar el cliente Prisma basado en el esquema definido.
- No es necesario que este paquete esté en producción, ya que solo se utiliza durante el desarrollo.
- Se encarga de generar y ejecutar los scripts SQL que modifican la estructura de la base de datos. La CLI es la que realiza estos cambios directamente en la base de datos.
:::

- Inicializamos prisma:

```powershell
npx prisma init
```

:::tip Observación
- Crea una carpeta llamada prisma, este va a contener toda la configuración y tablas de la base de datos.
- Crea un archivo .ENV con una variable para señalar la URL de conexión.


:::


#### Ejecutamos una BD en Postgesql en docker

```powershell
docker run -p5432:5432 -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=demodb  -e POSTGRES_USER=usuario  -d postgres  
```

:::tip Observación
- Iniciamos postgres con una BD que se llama demodb con el usuario:
  - user: usuario
  - password: 123
:::


#### Archivo .env
```js
DATABASE_URL="postgresql://usuario:123@localhost:5432/demodb?schema=public"
```
:::tip Observación
- Modificamos la URL de conexión para que se pueda conectar a la Base de datos de docker (fíjate donde puse los datos).
- En La mayoría de los ORM te conectas a una BD por una URL de conexión como la que contiene la variable de entorno DATABASE_URL, te invito a que investigues más sobre el tema!


:::


#### Schema.prisma

```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id String @id @default(cuid())
  email String @unique
  name String?
  password String 
  createdAt DateTime @default(now())
  updateAt DateTime @updatedAt
}

```
:::tip Observación
- generator client: Especifica qué paquete o herramienta Prisma va a usar para generar el cliente. Por defecto, Prisma usa prisma-client-js, que es el que genera el cliente para JavaScript/TypeScript. Este cliente generado es una instancia que contiene métodos como create(), .findMany(), .update(), etc., para que puedas realizar operaciones en la base de datos desde tu código sin necesidad de escribir SQL. El cliente contiene los métodos para consultar, insertar, actualizar y eliminar datos. En resumen: Crea un “objeto” con múltiples métodos para manipular la BD que se especificó en este archivo.
- datasource db: Aquí se especifica a que base de datos se conectara
  -	provider: Especifica el tipo de base de datos que se está utilizando. En este caso, postgresql indica que se está usando una base de datos PostgreSQL.
  -	url: Es la URL de conexión a la base de datos. env("DATABASE_URL") indica que Prisma debe obtener la URL de conexión desde una variable de entorno llamada DATABASE_URL. Esto es útil para mantener la configuración sensible fuera del código fuente.
- Por ultimo cada “model” representa una tabla en la base de datos, en este caso definimos un modelo (model) llamado User con los siguientes campos:
  -   `id String @id @default(cuid())`:
      -	id: Es el nombre del campo
      -	String: Es el tipo de dato del campo id, que es una cadena de texto.
      -	@id: Indica que este campo es la clave primaria(primary key) de la tabla.
      -	@default(cuid()): Establece un valor predeterminado para el campo id, que es generado automáticamente usando una función cuid() (Create Unique ID).
  -  `email String @unique`:
      -	email: Es el nombre del campo
      -	@unique: Asegura que el valor del campo email sea único en la tabla, es decir, no puede haber dos usuarios con el mismo correo electrónico.
  -  `name String?`:
      -	name: Es el nombre del campo
      -	String?: El signo de interrogación (?) indica que este campo es opcional, por lo que puede ser null.
  -  `password String`:
      -	password: Es el nombre del campo
  -  `createdAt DateTime @default(now())`:
      -	createdAt: Es el nombre del campo
      -	DateTime: Es el tipo de dato del campo, que es una fecha y hora.
      -	@default(now()): Establece que el valor predeterminado de este campo sea la fecha y hora actual en el momento de la creación del registro.
  -  `updateAt DateTime @updatedAt`:
      -	updateAt: Es el nombre del campo
      -	DateTime: Es el tipo de dato del campo, que es una fecha y hora.
      -	@updatedAt: Indica que este campo se actualizará automáticamente cada vez que el registro sea modificado.
- Como te darás cuentas se usan decoradores para especificar validaciones, restricciones o funciones típicas de una BD.
:::


#### Comando migrate
- Ejecutamos el siguiente comando:

```powershell
npx prisma migrate dev --name init
```
:::tip Observación
- migrate dev: Es un comando especifico de prima que se utiliza para:
  -  Detectar cambios en el esquema de tu base de datos. Prisma compara el archivo schema.prisma (donde defines los modelos y relaciones de la base de datos) con la estructura actual de la base de datos.
  -  Crear una nueva migración que refleja esos cambios.
  -  Aplicar automáticamente esos cambios a la base de datos.
- El --name permite asignar un nombre a la migración. En este caso, la migración se llama init (que suele usarse para indicar que es la primera migración, la inicialización de la base de datos).
- Este nombre es importante porque ayuda a identificar de qué se trata cada migración. Si más adelante haces otro cambio en el esquema, podrías usar algo como --name add-users-table para que sea fácil reconocer qué hace esa migración en particular.
- Cuando ejecutas el comando npx prisma migrate dev --name init, lo que sucede es lo siguiente:
  1.	Prisma revisa el archivo schema.prisma para ver si hay cambios en los modelos de la base de datos.
  2.	Genera un archivo de migración (en una carpeta como prisma/migrations) que contiene los comandos necesarios (en SQL) para aplicar esos cambios en la base de datos.
  3.	Aplica esos cambios a la base de datos, asegurando que tu esquema esté actualizado.
  4.	Guarda esa migración bajo el nombre init, para que puedas rastrear fácilmente qué cambios fueron hechos.
:::


:::tip Migración
- Las migraciones son como un historial de cambios. Cada vez que realizas un cambio en el diseño de la base de datos, creas una nueva "migración" que contiene las instrucciones necesarias para aplicar esos cambios. Esta migración se guarda como un archivo de texto que tiene el SQL o código específico para modificar la base de datos.
- Prisma, como ORM, facilita este proceso al permitirte describir tu base de datos en un archivo de esquema (schema.prisma). Luego, Prisma genera automáticamente las migraciones necesarias al comparar tu esquema con el estado actual de la base de datos. Así, no necesitas escribir manualmente el SQL, solo describes los cambios en el esquema, y Prisma se encarga del resto.

:::

#### Servicio para conectarte a la Base de datos
- Instalamos el paquete para el cliente:
```powershell
npm install @prisma/client
```
:::tip Observación
- Este paquete contiene las clases y métodos que permiten hacer consultas a la base de datos con Prisma, como prisma.user.findMany() o prisma.post.create().
- Este paquete sí es necesario en producción, ya que es el que permite la conexión y consulta a la base de datos.
- Es el paquete que prisma utilizara para crear una clase (se llama cliente) que permita manipular la base de datos que especificamos en el esquema.
- Durante la instalación de @prisma/client, se invoca automáticamente el comando prisma generate para crear el cliente basado en los modelos definidos en el archivo schema.prisma.
- Después de esa instalación inicial, cada vez que hagas un cambio en tus modelos (por ejemplo, agregues una nueva tabla o modifiques una existente), deberás ejecutar prisma generate para que Prisma actualice el cliente con los cambios reflejados en tu esquema. Esto asegura que el cliente generado siempre esté alineado con la estructura actual de tu base de datos.
:::

- En la carpeta src creamos el archivo prisma.service.ts que será un servicio que interactúe con la BD

```js
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

```
:::tip Observación
- Hereda la clase PrismaClient. 
- La clase PrismaClient es la que Prisma genera y contiene todos los métodos para interactuar con tu base de datos (como .findMany(), .create(), .update(), etc.).
- La Clase PrismaClient es el “cliente” que genera Prisma.
:::

- En algún controlador lo podemos usar, en nuestro caso será uno de User, para esto en su servicio:

```js
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){}
  findAll() {
    return this.prisma.user.findMany();
  }
  create(user: CreateUserDto) {
    return this.prisma.user.create({data : user });
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

```
:::tip Observación
- Cada propiedad del servicio es un modelo ósea una tabla de la BD que se definió en el archivo schema.prisma.
- Por ejemplo, si tenés un modelo User en tu esquema, el cliente Prisma tendrá una propiedad user que representa esa tabla.
- Cada propiedad del cliente (user, post, etc.) tiene métodos para manipular la tabla que representa su modelo. Estos métodos incluyen operaciones básicas de CRUD (crear, leer, actualizar y eliminar).
- Por ejemplo:
  - `findMany()` : Regresa todas las filas del modelo
  - `create({data: X})` : Crea una fila usando los valores de la propiedad data. X debe ser un objeto donde cada propiedad es una columna de la fila.
- [Para más información consulte en la documentación.](https://www.prisma.io/docs/orm/prisma-client/queries/crud)
:::


#### A probar el código!
- A estas alturas ya deberías tener el conocimiento suficiente para hacer los cambios correspondientes para probar este código.
- Si vas a implementar ValidationPipe(), deberías añadir decoradores en el DTO para especificar el tipo de dato (como @IsString()) de cada campo. De lo contrario, no serán reconocidos como campos y serán eliminados con whitelist: true.



## Swagger
- [Nest nos ofrece la opcion de poder usar swagger.](https://docs.nestjs.com/openapi/introduction)
- [¿Qué es swagger?](https://flevatti.github.io/documentacion/docs/C--/API#swagger)

#### Lo instalamos en el proyecto
- Ejecutamos el comando:
```powershell
npm install --save @nestjs/swagger
```
- En main.ts:
```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();


```
:::tip Observación
- `const config = new DocumentBuilder()`:
  -	¿Qué hace?: Crea una instancia de DocumentBuilder, que es una clase proporcionada por NestJS para construir una configuración personalizada para Swagger.
  -	Objetivo: Inicializar el objeto config para configurar el título, descripción, versión y otros detalles del documento Swagger.
- `.setTitle('Cats example')` :
  -	¿Qué hace?: Configura el título de la documentación de la API que se mostrará en Swagger.
  -	Objetivo: Define que el título de la documentación será "Cats example".
- `.setDescription('The cats API description')`:
  -	¿Qué hace?: Configura una descripción para la API.
  -	Objetivo: Describe que esta API es sobre "The cats API description".
- `.setVersion('1.0')`:
  -	¿Qué hace?: Especifica la versión de la API.
  -	Objetivo: Define que la versión de la API es "1.0".
- `.addTag('cats')`:
  -	¿Qué hace?: Añade una etiqueta (tag) llamada "cats", que sirve para organizar o categorizar los endpoints relacionados con gatos. Es importante aclarar que solo crea la etiqueta, no asigna automáticamente todos los endpoint a esta.
  -	Objetivo: Etiquetar los endpoints de la API relacionados con "cats" para que se puedan agrupar en la documentación.
- `.build();`:
  -	¿Qué hace?: Finaliza la configuración del objeto config y lo devuelve completamente construido.
  -	Objetivo: Completar la creación del documento de configuración para Swagger.
- `const document = SwaggerModule.createDocument(app, config);`:
  -	¿Qué hace?: Crea el documento Swagger a partir de la configuración config y la instancia de la aplicación app.
  -	Objetivo: Genera la documentación que describe todos los endpoints y modelos de la API, usando la configuración previamente establecida.
- `SwaggerModule.setup('api', app, document);`:
  -	¿Qué hace?: Publica la documentación de la aplicación. El primer parámetro 'api' es el path (ruta) donde estará disponible la documentación interactiva (en este caso, /api), app es la aplicación NestJS y document es el documento generado por createDocument().
  -	Objetivo: Publicar la documentación generada en la ruta /api, permitiendo a los usuarios ver la documentación y probar los endpoints de la API directamente desde el navegador.
:::

#### Decoradores
- Mediante decoradores podemos asignarle una etiqueta a un endpoint.

:::tip etiqueta (tag)
- Una tag en Swagger es como una carpeta (representada como una lista desplegable) que agrupa endpoints. 
- Sirve para organizar y clasificar los endpoints.
- Supongamos que tienes una API que gestiona usuarios y productos. Puedes usar dos tags:
  -	Tag "users": Agrupa todos los endpoints relacionados con usuarios, como GET /users para obtener usuarios.
  -	Tag "products": Agrupa todos los endpoints relacionados con productos, como GET /products para obtener productos.

:::

- Con el decorador @Apitags le asignamos una etiqueta a un endpoint.
- Podes asignarle una etiqueta a solo algunos endpoint, decorando solo el método:

```js
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @ApiTags('user')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @ApiTags('user')
  @Get()
  findAll() {
    return this.userService.findAll();
  }

```
- También podes asignarle una etiqueta a todos los endpoint de un controlador decorando la clase:
```js
import { ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('tasks')
export class TasksController {
   

 
  @UseGuards(TasksGuard)
   @Get('/')
   getAllTasks(@Query(ValidatePipe) query: {name: string , age: number}){
    console.log("age" , typeof query.age);
    console.log("name" ,typeof query.name);
       return `Es la tarea de ${query.name}, tiene ${query.age + 20} años  `
   }

```

- Con el decorador @ApiOperation podemos describir un endpoint, para esto le pasamos un objeto con la propiedad summary, su valor es la descripción:

```js
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @ApiTags('user')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

 @ApiOperation({summary : 'Get all tasks'})
  @ApiTags('user')
  @Get()
  findAll() {
    return this.userService.findAll();
  }


```
- Con el decorador @Apiresponse podemos documentar el código de respuestas de un endpoint, cada objeto que le proporciones es una “posible respuesta” y contiene estas propiedades:
  - status: Código de respuesta, puede ser 200, 400, etc..
  - description: La descripción, acá indicamos que sucede cuando como respuesta nos devuelve el status que especificamos.
- Ejemplo:
```js
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @ApiTags('user')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

 @ApiOperation({summary : 'Get all tasks'})
 @ApiResponse({status: 200 , description: 'Return All tasks.'})
 @ApiResponse({status: 403 , description: 'Forbidden.'})
  @ApiTags('user')

  @Get()
  findAll() {
    return this.userService.findAll();
  }

```
:::tip
- Esto solo son algunos de los decoradores, pero hay muchos más… ¡Te invito a investigar!
:::

## Comandos

#### Generate
- Con el siguiente comando generas un elemento de Nest:
```powershell
Nest generate [TipoDeArchivo] [Nombre] [Opciones]
```

:::tip Observación
- Podes remplazar “generate” por “g” (es la abreviación de generate).
- Tipo de Archivo puede ser controller, service , etc . También puedes utilizar abreviaciones como co para controller y s para service. 
- Si el [nombre] es igual al que tiene el módulo, se añade en la misma carpeta y se hacen las configuraciones correspondientes para que permanezca en este.
- Si el [Nombre] que proporcionas coincide con el nombre del módulo, el archivo se creará en la carpeta del módulo. No obstante, si usas una sintaxis como: nombreModulo/otraUbicacion/otraUbicacion/nombreArchivo, estás especificando la ruta exacta donde se guardará el archivo dentro del módulo. Las carpetas indicadas en otraUbicacion se crearán automáticamente si no existen, y al final se especifica el nombre del archivo. 
- Por ejemplo, en el siguiente comando, se crearía una carpeta pipes adentro de la carpeta task (representa el módulo) y en esta se crearía el pipe llamado validate:  nest g pipe task/pipes/validate.
- Cada elemento viene con su archivo de testing (spect.ts).
- Algunas de las opciones son:
  - --no-spect : Sirve para no crear el archivo de testing.
:::

#### Generate resource
- Como te habrás dado cuenta, cada módulo contiene servicios, controladores, dto , etc..
- Existe una manera en Nest para crear todos los archivos necesarios para un módulo con un solo comando generate:
```powershell
nest g resource [nombre]
```
:::tip Observación
- Una vez ejecutado el comando, te van a preguntar:
  - Para qué tipo de aplicación es: REST API, GraphQL , Microservice , etc..
  - Te preguntaría si deseas generar un CRUD básico.
- Una vez completada las dos preguntas te generara el módulo, el controlador, los servicios, dto , entities para el nombre que especificaste. A su vez lo añadirá al modulo principal para que lo puedas probar al iniciar la aplicación.
:::

## Cors
- CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad que permite a las aplicaciones web hacer solicitudes HTTP a recursos que están alojados en un dominio diferente al del de la aplicación. En otras palabras, si tu aplicación se ejecuta en "dominio-a.com" y necesitas acceder a una API en "dominio-b.com", CORS permite que se realicen esas solicitudes de manera controlada y segura. Sin este mecanismo, los navegadores modernos bloquearían las solicitudes entre diferentes dominios debido a restricciones de seguridad, lo que se conoce como política de mismo origen (Same-Origin Policy).   
- El funcionamiento básico de CORS implica que el navegador envía una solicitud especial llamada "preflight request" (solicitud de preevaluación) antes de enviar la solicitud principal. En esta preevaluación, el navegador pregunta al servidor si permite solicitudes desde el dominio de la aplicación que está haciendo la petición. Si el servidor lo autoriza, incluye ciertos encabezados en su respuesta, indicando qué métodos HTTP y qué orígenes están permitidos. De esta forma, se establece un control sobre qué dominios pueden interactuar con los recursos del servidor, reduciendo el riesgo de ataques como el Cross-Site Scripting (XSS).
- Para habilitar las cors , editamos main.ts:
```js
app.enableCors();
  await app.listen(3000);

```
:::tip Observación
- La aplicación tiene el método enableCors() que habilita los cors.
- La configuración por defecto admite peticiones de todos los dominios.
:::

- El método enableCors() puede recibir como parámetro un objeto de configuración opcional:
```js
app.enableCors({
  origin: 'https://www.google.com/', // Solo permite solicitudes desde este dominio
  methods: 'GET,POST',           // Permite solo estos métodos HTTP
  credentials: true,             // Permite el uso de cookies
});

```
- También puedes pasarle un callback para generar la configuración de forma asíncrona según la solicitud:
```js
app.enableCors((req, callback) => {
  const corsOptions = { origin: false }; // Configuración por defecto
  if (req.header('Origin') === 'https://example.com') {
    corsOptions.origin = true; // Habilita CORS solo para este dominio
  }
  callback(null, corsOptions); // Devuelve la configuración basada en la solicitud
});
  await app.listen(3000);

```
:::tip Observación
- Tenemos acceso a la solicitud y el callback en el primer parámetro devolvemos un error y en el segundo el objeto de configuración que se usara para la cors de esa solicitud.

:::

- Tambien puedes habilitar las cors con el segundo parámetro del método create() que crea la aplicación:
```js
 const app = await NestFactory.create(AppModule , {cors : true});
```
:::tip Observación
- El segundo parámetro del método create() es un objeto de configuraciones y una de esas son las cors.
- La propiedad cors puede recibir true que es lo mismo que ejecutar el método “app.enableCors()”, también puede recibir un objeto de configuración o un callback como los ejemplos anteriores.

:::


## Lifecycle Events
- Un ciclo de vida en desarrollo de software describe las etapas por las que pasa un componente o aplicación desde su creación hasta su destrucción. Esto incluye la inicialización, la ejecución, el manejo de eventos y finalmente la destrucción del objeto o componente.
- NestJS, al ser un framework modular basado en Node.js, aplica el concepto de ciclo de vida a varios niveles, especialmente en el manejo de servicios, controladores y módulos.

#### 1- Módulos
-	En NestJS, los módulos organizan el código. Cada módulo tiene su propio ciclo de vida.
-	Cuando una aplicación NestJS arranca, el módulo raíz (AppModule) es el primero en ser cargado. Luego, los submódulos son instanciados y configurados en función de sus dependencias.


#### 2- Inyección de dependencias
- NestJS sigue un patrón de inyección de dependencias para administrar servicios. Cuando un servicio es requerido, se instancia automáticamente si no existe ya una instancia.
- Un servicio en NestJS tiene dos posibles ciclos de vida

##### 1- Servicio Singleton (Instancia única)
-	Por defecto, todos los servicios en NestJS son singleton. Esto significa que solo se crea una instancia del servicio durante toda la vida de la aplicación.
-	Una vez creado, esta instancia es compartida entre todos los componentes que lo necesiten (controladores, otros servicios, etc.).
-	Ejemplo: Si un servicio se utiliza en varios controladores, no se crea una nueva instancia del servicio para cada controlador, sino que todos comparten la misma instancia.
- Este enfoque tiene varias ventajas:
  -	Eficiencia: Al compartir una sola instancia, no es necesario crear nuevos objetos cada vez que se necesita el servicio.
  -	Estado compartido: Si el servicio mantiene algún estado (como un caché en memoria o alguna variable), ese estado será el mismo para todos los que utilicen ese servicio.
##### 2- Servicio Transitorio (Vida corta)
-	Si un servicio necesita ser transitorio (es decir, crear una nueva instancia cada vez que se necesita), puedes configurar el ciclo de vida para que sea así.
-	Esto significa que cada vez que un componente (como un controlador) necesite el servicio, NestJS creará una nueva instancia. Una vez que el trabajo con esa instancia termine, será destruida.

#### 3- Controladores
- Los controladores manejan las solicitudes HTTP y responden con datos
- El ciclo de vida de un controlador está estrechamente relacionado con las solicitudes que recibe. A continuación, te lo explico paso a paso.

##### Creación del controlador
- Por defecto, los controladores en NestJS se comportan como singleton, lo que significa que, al igual que los servicios, se crea una sola instancia del controlador cuando la aplicación se inicializa.
-	Cuando NestJS arranca la aplicación, se crea una instancia de cada controlador registrado.
-	Esta instancia se mantiene activa durante toda la vida de la aplicación.
-	Cada vez que una solicitud HTTP llega a una ruta gestionada por ese controlador, se reutiliza la misma instancia para procesar la solicitud.

##### Manejo de la solicitud
- Cuando una solicitud HTTP llega a un endpoint gestionado por un controlador, sigue este flujo:
  1.	Recepción de la solicitud:
        -	Cuando el cliente (por ejemplo, un navegador o una aplicación móvil) envía una solicitud HTTP, NestJS enruta esa solicitud al controlador adecuado en función del endpoint.
        -	El controlador tiene métodos decorados con @Get(), @Post(), etc., que están asociados a rutas específicas.
  2.	Procesamiento de la solicitud:
        -	El controlador llama a los servicios (que pueden haber sido inyectados en él) para manejar la lógica de negocio.
        -	Los servicios realizan el trabajo necesario, como consultar una base de datos o aplicar reglas de negocio.
  3.	Respuesta al cliente:
        -	Una vez que el controlador ha recibido la información del servicio (por ejemplo, datos de usuarios), devuelve la respuesta al cliente que hizo la solicitud.
        -	Esto podría ser una respuesta JSON, un archivo o cualquier tipo de dato que el cliente necesita.

##### Finalización de la solicitud
- Una vez que el controlador procesa la solicitud y envía la respuesta al cliente:
  -	El ciclo de vida de esa solicitud termina.
  -	Sin embargo, el controlador sigue existiendo (si es singleton) y espera más solicitudes en el futuro.

##### Destrucción
- El controlador, al ser singleton, generalmente no se destruye hasta que la aplicación finaliza o se reinicia. Esto es diferente de un ciclo de vida "transitorio", donde una nueva instancia se crea y destruye para cada solicitud.

#### Middleware y Guards
-	Middleware: Pueden interceptar solicitudes antes de que lleguen al controlador, y tienen su propio ciclo de vida dentro de una aplicación Nest.
-	Guards: Son ejecutados antes que cualquier método de controlador para verificar permisos o autenticación, por lo que también forman parte del ciclo de vida de la solicitud.

#### Hooks
- NestJS tiene un conjunto de eventos del ciclo de vida que permiten ejecutar código en momentos clave como el arranque o apagado de la aplicación. Estos eventos se manejan mediante métodos de gancho (hooks), que se pueden registrar en módulos, servicios (proveedores) o controladores.
- NestJS tiene varios métodos de gancho que puedes usar para controlar estos eventos del ciclo de vida:
  -	onModuleInit(): Se llama cuando un módulo ha sido completamente inicializado.
  -	onModuleDestroy(): Se llama cuando un módulo está a punto de ser destruido (antes de que la aplicación se cierre).
- Además, hay otros ganchos que pueden controlarse más específicamente al cerrar la aplicación:
  -	beforeApplicationShutdown(): Se ejecuta justo antes de que la aplicación se apague. Aquí puedes hacer operaciones que necesiten realizarse antes de que se cierren conexiones o procesos (por ejemplo, cerrar conexiones a bases de datos).
  -	onApplicationShutdown(): Se llama cuando la aplicación está siendo cerrada. Este método te permite ejecutar tareas finales antes de que la aplicación se termine.
- En NestJS, los ganchos de ciclo de vida son métodos especiales que te permiten ejecutar acciones en momentos clave del ciclo de vida de una aplicación (como la inicialización o el apagado). Estos ganchos están representados por interfaces que son implementadas por clases específicas, como controladores, servicios (proveedores) o módulos.
- Aunque en TypeScript las interfaces no existen después de la compilación (son eliminadas en el código JavaScript), implementarlas es una buena práctica por varias razones:
  1.	Proporcionan tipado estático: Esto ayuda a detectar errores en tiempo de compilación y permite obtener sugerencias y autocompletado en el editor.
  2.	Claridad y mantenimiento: Al implementar una interfaz, queda claro qué métodos y comportamientos se esperan de la clase que la implementa, lo que mejora la legibilidad del código.
- Cada interfaz de ciclo de vida en NestJS te obliga a declarar el método que se va a ejecutar cuando se active el "evento" especificado. Al implementar una interfaz de ciclo de vida, te comprometes a definir el método que esa interfaz espera, lo que asegura que tu clase responderá a ese evento del ciclo de vida.
- Por ejemplo si implementas la interfaz OnModuleInit, debes definir el método onModuleInit(), que se ejecutará cuando el módulo haya sido completamente inicializado.
- Ejemplo en un Servicio:
```js
import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService  implements OnModuleInit{

  onModuleInit() {
    console.log('Se inicializo el modulo')
  }

  constructor(private prisma: PrismaService){}
  findAll() {
    return this.prisma.user.findMany();
  }
  create(user: CreateUserDto) {
    console.log(user);
    return this.prisma.user.create({data : user });
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

```
:::tip Observación
- El método onModuleInit() se ejecutará automáticamente cuando el módulo al que pertenece esta clase (en este caso, UserService) haya sido completamente inicializado. Esto ocurre después de que NestJS haya creado todas las instancias de los proveedores (servicios) definidos en el módulo y haya completado la configuración inicial.
- Esto significa que el onModuleInit() se invocará una vez que el contenedor de Nest haya terminado de construir el módulo que incluye UserService. La función se ejecuta antes de que se comiencen a manejar las solicitudes HTTP o se interactúe con otros componentes de la aplicación.


:::


## Entity
- Las entidades(entity) son clases que representan una tabla de la BD y cada instancia puede ser una fila de esta.
- Se utilizan para interactuar directamente con la base de datos. Cuando quieres guardar, buscar, actualizar o eliminar un registro, usas las entidades.

#### Diferencia con DTO
##### Propósito
- Entidades: Representan la estructura de los datos en la base de datos. Se utilizan para definir cómo se almacenan los datos.
- DTOs: Se utilizan para enviar y recibir datos a través de la API. Sirven para validar y estructurar los datos en las solicitudes y respuestas.
##### Interración
-	Entidades: Interactúan directamente con la base de datos (por ejemplo, realizar operaciones CRUD).
-	DTOs: Se utilizan en la capa de controlador para manejar y validar la entrada/salida de datos.
##### Estructura y decoradores
-  Entidades: Usan decoradores de un ORM (como TypeORM) para definir la estructura de la base de datos, incluyendo columnas y relaciones.
-  DTOs: Usan decoradores de validación (como class-validator) para definir y validar la estructura de los datos que se envían y reciben, pero no tienen lógica de base de datos.
