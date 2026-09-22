---
sidebar_position: 1
---
# Nest
* Es un framework de **backend** desarrollado con **TypeScript** que utiliza **Node.js**.
* Permite crear aplicaciones y **APIs** aplicando conceptos de **Angular**.
* Utiliza **módulos**, **controladores** y **servicios**.


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
* **Carpeta `dist`**: Contiene el código JavaScript generado a partir del código TypeScript.
* **Carpeta `src`**: Contiene el código que se ejecuta en el servidor.
* **Carpeta `test`**: Contiene los archivos utilizados para realizar pruebas de la aplicación.
* **`tsconfig.json`**: Permite configurar **TypeScript**.
* **`tsconfig.build.json`**: Permite modificar la configuración de **TypeScript**. Esta configuración solo se utiliza durante el proceso de compilación.



:::warning Iconos de NestJS

En **Visual Studio Code**, algunos archivos pueden mostrar el icono de **Angular**.

Para solucionarlo:

1. Pulsamos `F1`.
2. Escribimos **Open Workspace Settings (JSON)**.
3. Agregamos la siguiente configuración:

```json
{
    "material-icon-theme.activeIconPack": "nest"
}
```
:::



## Archivos de NestJS
#### Módulo
* Una aplicación de **NestJS** está formada por un conjunto de módulos.
* Un módulo agrupa todo lo relacionado con una parte específica de la aplicación, como usuarios, productos o autenticación.
* Cada módulo puede contener:
  * **Controller**
  * **Service**
  * **DTO**
  * **Interceptor**
  * **Etc.**

#### Controller

* Contiene funciones que se ejecutan cuando se accede a una URL.
* [Más información](https://flevatti.github.io/guide-software-development/docs/CSharp/API#controlador-teoria)

#### Service

* Contiene funciones que pueden ser utilizadas por diferentes controladores.
* Contiene la lógica reutilizable de la aplicación.

#### DTO

* Son como "objetos" que especifican qué datos son visibles al usuario.
* [Más información](https://flevatti.github.io/guide-software-development/docs/CSharp/API#dto-teoria)

#### Interceptor

* Contiene funciones que se ejecutan antes o después de una función del controlador.
* Son similares a los middlewares.


:::tip
Los archivos que terminan en `.spec.ts` en **NestJS** se utilizan para realizar pruebas y verificar que los módulos y sus componentes funcionen correctamente.
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
* Este es el módulo principal que utiliza **NestJS** para ejecutar e iniciar la aplicación.
* Es el módulo que contiene los demás módulos, controladores, servicios, etc. que utiliza la aplicación.
* Contiene un **Controller** que gestiona las solicitudes y un **Service** que contiene las funciones que puede utilizar el controlador.
:::

```js title="main.ts"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

:::tip Observación
* Es el archivo que crea y ejecuta la aplicación.
* La función `NestFactory.create()` crea la aplicación y recibe como parámetro el módulo principal que se va a utilizar (el que vimos anteriormente) para ejecutar e iniciar la aplicación.
* Con el método `listen()` especificamos el puerto que va a utilizar la aplicación para recibir solicitudes.
:::



## Módulo
* Un módulo es una clase que utiliza el decorador `@Module()`. Este decorador proporciona información que **NestJS** utiliza para crear la aplicación y su estructura.
* Cada aplicación tiene al menos un módulo, llamado **módulo raíz** o **módulo principal**. Este módulo es utilizado por **NestJS** para crear la aplicación.
* Cuando nos referimos a la estructura de la aplicación, hablamos de:
  * Cómo se comunican los diferentes módulos entre sí para lograr algo.
  * La idea es que sean independientes, pero que puedan interactuar entre ellos.
* Si vamos a **React** o **Vue**, podemos pensar en un módulo como un componente que se encarga de algo específico y es independiente.
* El decorador `@Module()` recibe un objeto con diferentes propiedades:
  * **providers**: Los servicios que utilizará el módulo.
  * **controllers**: Los controladores que utilizará el módulo.
  * **imports**: Los módulos que se importarán en este módulo.
  * **exports**: Los providers que podrán ser utilizados por otros módulos.







#### Crear módulo

- Con el siguiente comando creamos un módulo:
```powershell
nest generate module [nombreModulo]
```
:::tip Observación
* Al ejecutar el comando, se creará una carpeta dentro de `src` que contendrá toda la lógica que utilizará el módulo. Al principio estará vacía, pero cuando se agreguen controladores, servicios, etc., se irá llenando.
:::


:::tip
* Para que desaparezcan los errores de **ESLint** al utilizar **Windows**, escribimos lo siguiente en `.eslintrc`, debajo del apartado `rules`:

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

* El archivo que representa al módulo termina en `.module.ts` y contiene lo siguiente:
```js
import { Module } from '@nestjs/common';

@Module({})
export class TasksModule {}


```
:::tip Observación
* Es una clase con un decorador que contiene un objeto vacío (sin metadatos).
:::

* El archivo `app.module.ts`:
```js

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [TasksModule],

})
export class AppModule {}

```
:::tip Observación
* La propiedad `imports` recibe un array con todos los módulos que se van a importar.
* La propiedad `imports` se utiliza para traer otros módulos que el módulo actual necesita para funcionar. Es como decirle al módulo: "Para hacer mi trabajo, necesito utilizar las funcionalidades de estos otros módulos".
* Cuando importamos un módulo, podemos utilizar los **providers** que este módulo exporta.
* En este caso, el módulo principal importa `TasksModule` para que sus funcionalidades puedan utilizarse en la aplicación.
* Es importante importar en el módulo principal todos los módulos que se van a utilizar en la aplicación.
:::

## Controlador
- Se genera con el siguiente comando:
```powershell
nest generate controller [NombreController]
```
:::tip Observación
* Si lo creamos con el mismo nombre que el módulo, se creará dentro de la carpeta del módulo y se realizarán las configuraciones correspondientes en este.
* El comando genera dos archivos: uno que termina en `.controller.ts`, que corresponde al controlador, y otro que termina en `.spec.ts`, que se utiliza para realizar pruebas del controlador.
:::

- El controlador se vería así:
```js
import { Controller } from '@nestjs/common';

@Controller('tasks')
export class TasksController {}

```
:::tip Observación
- Es una clase con un decorador que recibe como parámetro el nombre del controlador, que representa la ruta base.
- Es decir, todas las peticiones que vayan a `servidor/nombreControlador` serán gestionadas por este controlador.
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
- A través de la clase del controlador, podemos asignar varios endpoints (rutas) que gestionará ese controlador:

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
- `getAllTask` es una función que se ejecuta durante la petición `GET http://localhost:3000/tasks`.
- Su decorador especifica el tipo de petición (`GET`, `POST`, `DELETE`, etc.) y su parámetro indica la ruta (endpoint) que va a gestionar ese método. Recordemos que esta ruta se concatena con la ruta base (nombre del controlador).
- Al especificar `/`, estamos indicando que el método utilizará la ruta base (nombre del controlador).
- Cada método de la clase controlador se suele llamar endpoint. El método en sí es lo que se ejecuta cuando hacemos una petición al endpoint.
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
- Los proveedores son un concepto clave en **NestJS**. Se refiere a cualquier clase que pueda ser utilizada como una dependencia dentro de otra clase. Es decir, son clases que pueden ser importadas para su posterior uso.
- Los proveedores pueden ser llamados **servicios, repositorios, fábricas, ayudantes** (según cómo se crean) y se utilizan para proporcionar funciones específicas que pueden utilizar diferentes módulos.
- **NestJS** utiliza la **inyección de dependencias** para conectar estas clases automáticamente. De esta forma, una clase puede utilizar las funciones de otra clase sin tener que crearla directamente.

:::tip Dependencia dentro de otras clases
- Una clase puede tener dependencias.
- Las dependencias son "clases" que la clase necesita utilizar para poder ejecutar una función correctamente.
- Es como decir: "Necesitamos las instancias de estas clases" para poder ejecutar el código.
:::


#### Servicio
- Son un tipo específico de proveedor en **NestJS**. Se encargan de contener funciones que realizan tareas específicas dentro de la aplicación, como acceder a bases de datos, interactuar con APIs externas, realizar cálculos, entre otras.
- Al ser proveedores, los servicios pueden ser inyectados en otros componentes, como controladores o incluso otros servicios, utilizando el sistema de **inyección de dependencias** de **NestJS**.
- Cuando nos referimos a que los servicios pueden ser inyectados en otros componentes, hablamos de que estos componentes pueden utilizar las funciones del servicio inyectado.
- Un servicio en **NestJS** es una clase que contiene código reutilizable. Esto significa que agrupa funciones o métodos que realizan tareas específicas relacionadas entre sí y que pueden ser utilizadas en diferentes partes de la aplicación. En lugar de repetir el mismo código en múltiples lugares, podemos definirlo una vez en un servicio y luego utilizar ese servicio desde cualquier parte de la aplicación que lo necesite.

#### Inyección de dependencia
- La **inyección de dependencias** es un patrón de diseño que se utiliza para gestionar las dependencias de las clases en una aplicación. En **NestJS**, esto se realiza a través del sistema de inyección de dependencias que facilita la creación y gestión de instancias de clases.
- Entonces, la inyección de dependencia tiene tres conceptos:
  - **Instancias inyectables:** Te permite utilizar instancias de una clase que sea inyectable (una clase es inyectable cuando tiene el decorador `@Injectable`) para realizar operaciones.
  - **Uso de funciones/métodos:** Básicamente, estás importando funciones o métodos que algún proveedor (servicio, por ejemplo) creó para usarlas.
  - **Constructor:** Estas instancias (dependencias) las especifica el programador en el constructor de la clase y **NestJS** se encarga de crearlas y gestionarlas para que las puedas usar. Lo único que necesita **NestJS** para saber qué instanciar es el nombre de la clase inyectable que se necesita. Es como decirle a **NestJS**: "Para esta clase, necesito que me crees instancias que correspondan a X clase inyectable".


#### Ejemplo para entenderlo
- El comando para crear un servicio es:

```powershell
nest generate service [NombreServicio]
```
:::tip Observación
- Si lo creas con el mismo nombre que el módulo, se creará en la carpeta asignada al módulo y se realizarán las configuraciones correspondientes en este.
- Un servicio es un archivo que termina en `.service.ts`.
- También generará uno que termina en `.spec.ts`, que se utiliza para realizar pruebas del servicio.
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
- La clase está decorada con el decorador `@Injectable()` para que se pueda acceder a los métodos que contiene desde otras partes de la aplicación.
:::

- En el módulo tenemos que configurar qué proveedor se va a utilizar (el comando lo hace automáticamente):
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
- `providers` es un array que recibe las diferentes clases inyectables (contienen el decorador `@Injectable()`) que pueden utilizar todos los componentes del módulo.
- Ahora podemos utilizar una instancia de la clase inyectable en el controlador `TasksController`.
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
- En los parámetros del constructor especificamos las clases inyectables que necesitamos. Esto se realiza mediante el tipo de dato.
- Cuando se inicia la aplicación, **NestJS** utiliza los tipos de datos que especificamos en el constructor para generar las instancias de las clases inyectables que especificamos.
- Se podría decir que **NestJS** se las ingenia para invocar al constructor que especificamos con los “parámetros” que declaramos.
- **NestJS** busca en el array `providers` del módulo una clase que coincida con el tipo de dato especificado en el constructor. Si la encuentra, crea una instancia de la clase encontrada en el array `providers` y la pasa al constructor de la clase que la necesita. Si no la encuentra, **NestJS** no podrá proporcionar una instancia para ese tipo. Como resultado, la aplicación fallará al intentar crear una instancia del controlador o servicio que la requiere, generando un error.
- Entonces, en este ejemplo, **NestJS** genera la instancia de la clase inyectable, invoca el constructor con la instancia y nosotros se la asignamos a la variable `taskService` para poder usarla en el endpoint.
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
- Con la palabra reservada `private` le decimos a **NestJS** que nos cree una variable llamada `taskService` (nombre del parámetro) que contenga la instancia de la clase inyectable que estamos solicitando.
- De esta manera nos ahorramos lógica en el constructor.
:::

## Response
- Un método de un controlador debe retornar algo, ósea una respuesta a la petición que se hace.
- Nest emplea dos maneras diferentes para enviar una respuesta.


#### 1- Por defecto (Lo maneja Nest)
- Si se devuelve un objeto o un array, **NestJS** lo serializa (convierte) automáticamente en JSON. Sin embargo, cuando se devuelve un tipo primitivo de JavaScript (`String`, `number`, `boolean`, etc.), **NestJS** envía solo el valor sin intentar serializarlo.
- El código de estado de la respuesta siempre es `200` de forma predeterminada, excepto para las solicitudes `POST`, que utilizan `201`. Esto se puede cambiar con el decorador `@HttpCode()`.
- Si lanzas un error que no corresponda a uno que maneja **NestJS** (`throw new Error()`), se detiene la ejecución y se devuelve como respuesta el código de estado `500`.

#### 2- Utilizar la sintaxis de express
- A través de los decoradores podemos acceder a los típicos objetos que manejamos en **Express** (`req`, `res`, `next`, `req.session`, `req.params`, etc.).
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
- Existen varios métodos que ofrece **NestJS** que permiten devolver una respuesta con un código de estado diferente al **predeterminado**.
- Por ejemplo:
```js
   @Get('/')
   getAllTasks(){
     throw new NotFoundException('Tarea no encontrada');
   }

```
:::tip Observación
- El método `NotFoundException()` lanza una excepción (error) que **NestJS** maneja para devolver una respuesta con el código de estado `404` y un mensaje (el que especificamos en el parámetro).
- [¡Existe un método para cada código de estado, así que te invito a investigar!](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)
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
- Con el decorador `@HttpCode(X)` especificamos que el código de estado de la respuesta debe ser `X`.
- En este ejemplo reemplazamos el código de estado por defecto (que en este caso sería `200`) por el `404`.
:::

#### HttpException
- `HttpException` es una clase que se utiliza para lanzar excepciones (errores) que **NestJS** maneja para generar una respuesta a una petición HTTP.
- Cuando quieres devolver una respuesta con un código de error específico (como `404`, `403`, `500`, etc.), puedes usar `HttpException` para hacerlo de manera sencilla. Esta clase te permite controlar tanto el mensaje como el código de estado de la respuesta.
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
- En este ejemplo, se lanza una excepción que genera una respuesta HTTP con el código `403` (Forbidden) y el mensaje `"Mensaje"`.
- Parámetros de `HttpException`:
  - **1:** El mensaje de error que será devuelto al cliente en la respuesta HTTP. Puede ser un string simple y es lo que el usuario verá como parte del cuerpo (body) de la respuesta.
  - **2:** El código de estado que indica el tipo de error. En este caso, `HttpStatus.FORBIDDEN` es equivalente al código `403`. **NestJS** proporciona un enum (`HttpStatus`) para acceder a los códigos de estado HTTP en lugar de escribir directamente los números (por ejemplo, `403` para "Forbidden").
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
- Parámetros de `HttpException`:
  - **1:** Un objeto que contiene más información que un simple mensaje:
    - `status`: Define el código de estado HTTP (en este caso, `HttpStatus.FORBIDDEN` o `403`).
    - `error`: Es un mensaje más personalizado, que puede incluir más detalles sobre el error.
    - Puedes agregar otros campos en este objeto, según lo que quieras devolver al cliente. El objeto será convertido a JSON y enviado como respuesta HTTP.
  - **2:** Código de estado HTTP (`HttpStatus.FORBIDDEN`):
    - Al igual que en el primer ejemplo, este es el código de estado HTTP.
    - Aunque ya se indicó el código en el objeto, se vuelve a pasar como segundo parámetro porque `HttpException` siempre espera recibir explícitamente el código de estado aquí.
- [Más información en su sitio web.](https://docs.nestjs.com/exception-filters)
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
- El parámetro que tiene el decorador `@Body()` contiene el valor de `req.body`.
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
- El parámetro que tiene el decorador `@Query()` contiene el valor de `req.query`.
:::
## Params
- Cuando especificamos el endpoint (URL) en el decorador que indica el tipo de petición, podemos usar el signo `:` para crear parámetros (params).
- La sintaxis es `:nombreParametro`, al igual que en **Express.js**:
```js
  @Get('/:id')
  getTask(@Param() param ){
   console.log("Informacion recibida por param" , param );
      return 'Obteniendo tareas';
  }

```
:::tip Observación
- El parámetro que tiene el decorador `@Param()` contiene el valor de `req.params`.
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
- El decorador `@Param()` recibe como parámetro el nombre del param al que se quiere acceder. Por ejemplo, si tenemos un endpoint como `tasks/:id`, podemos utilizar `@Param('id')` para acceder al valor de `req.params.id`.
- De esta forma, `@Param('id')` nos permite obtener únicamente el valor del param `id`, en lugar de obtener todos los parámetros de `req.params`.
- Se puede realizar lo mismo con los decoradores anteriores (`@Body()` y `@Query()`), especificando el nombre de la propiedad a la que queremos acceder.
:::

## Dto y Validación
#### Dto
- El DTO es una interfaz o clase que se utiliza para especificar:
  - Qué datos esperamos recibir.
  - Qué información debe ser "expuesta" al usuario.
- Un DTO es un objeto que contiene solo los datos necesarios para realizar una operación específica, sin incluir lógica de negocio.
- Por lo general, se crea una carpeta llamada `dto` dentro de la carpeta del módulo que la va a utilizar. Dentro de esta carpeta se crean archivos con nombres como `nombreDto.dto.ts`.
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

- Y en los servicios o controladores los usamos para especificar qué tipos de datos esperamos recibir o incluso qué tipo de dato vamos a retornar como respuesta:
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
- Si lo probaste, te darás cuenta de que solo estamos utilizando las opciones que nos brinda **TypeScript** para mejorar nuestro autocompletado, pero no hay ninguna validación.
:::


 #### Validación
- Podemos usar las DTO para crear las validaciones. 
- Para realizar las validaciones, usaremos dos paquetes que nos recomienda **NestJS**: `class-validator` y `class-transformer`.
- [Mas información.](https://docs.nestjs.com/techniques/validation)



##### Especificar validaciones
- Ahora podemos usar los decoradores que nos brinda `class-validator` en un DTO para especificar las validaciones que queremos realizar (NO IMPLEMENTAR):
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
- Al especificar validaciones, es obligatorio que cada campo contenga un decorador que especifique el tipo de dato, como `@IsString()`. De lo contrario, no serán reconocidos como campos y no se validarán.
:::

##### Implementar validaciones
- Ahora nos queda implementar las validaciones que especificamos en el DTO. En este caso, haremos que nuestro controlador utilice las validaciones:

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
- Con el decorador `@UsePipes(new ValidationPipe())` implementamos la validación para el método específico.
- `@UsePipes` es un decorador que indica a **NestJS** que utilice una tubería (una clase que implementa la interfaz `PipeTransform`) para transformar o validar los datos de entrada (lo veremos más adelante).
- `new ValidationPipe()` crea una instancia de la clase `ValidationPipe`, que es una tubería incorporada en **NestJS** que realiza la validación definida en los metadatos (decoradores) que especificamos en el DTO, como `@IsString()`, `@MinLength()`, etc.
- La tubería `ValidationPipe` de **NestJS** utiliza `class-validator` para realizar la validación de los datos de entrada.
- La validación se realiza de la siguiente manera:
  1. **NestJS** crea una instancia de la clase `ValidationPipe`.
  2. La tubería `ValidationPipe` analiza los metadatos (decoradores) de validación que contiene el DTO (en este caso, `CreateTaskDto`).
  3. La tubería `ValidationPipe` verifica si los datos de entrada cumplen con las validaciones definidas en los metadatos.
  4. Si los datos de entrada son válidos, la tubería `ValidationPipe` devuelve los datos de entrada sin modificarlos.
  5. Si los datos de entrada son inválidos, la tubería `ValidationPipe` lanza una excepción de validación que es manejada por **NestJS**, devolviendo una respuesta con código de estado `400` e indicando los errores de validación.
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
- En lugar de usar el decorador `@UsePipes()`, podemos utilizar el método `useGlobalPipes()`, que lo contiene la aplicación que creamos.
- Con el método `useGlobalPipes()` le indicamos a **NestJS** que utilice una tubería en toda la aplicación, es decir, en todas las peticiones que reciba.
- De esta manera, las validaciones se van a implementar en todas las peticiones de la aplicación en las que se utilice un DTO que tenga validaciones.
:::

##### Whitelist
- Podemos configurar la tubería `ValidationPipe()` para que elimine los campos o propiedades que no figuren en el DTO.
- Para esto hacemos lo siguiente:
```js
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));

```
:::tip Observación
- `ValidationPipe` puede aceptar un objeto con varias opciones. Cuando configuramos `whitelist` en `true`, automáticamente elimina cualquier propiedad que no esté definida en el DTO (Data Transfer Object).
- Esto ayuda a asegurar que solo pasen los datos esperados al controlador.
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
- Un Pipe (tubería) es una clase con el decorador `@Injectable()`, la cual implementa la interfaz `PipeTransform`.
- Los Pipes en **NestJS** tienen dos usos principales:
  1. **Transformación:** Convierte los datos de entrada al formato deseado. Por ejemplo, podemos convertir un dato que llega como texto (`string`) en un número entero (`integer`).
  2. **Validación:** Evalúa los datos de entrada para comprobar si son correctos. Si los datos son válidos, se dejan pasar; si no, el Pipe genera un error.
- En ambos casos, los Pipes se aplican a los parámetros (datos) de un método del controlador, es decir, a la información que el usuario le envía al servidor.
- **NestJS** utiliza Pipes (tuberías) para recibir los datos que el usuario envía al servidor, transformarlos o validarlos y, luego, pasarlos al controlador.
- **NestJS** ya incluye varios Pipes predefinidos que podemos utilizar directamente. También podemos crear nuestros propios Pipes personalizados.

En resumen, los Pipes reciben los datos antes de que lleguen al método del controlador, los validan o transforman y, luego, los pasan al método del controlador.

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
- Los valores que recibimos por `param` generalmente son `String`, así que usamos el Pipe `ParseIntPipe`, que viene con **NestJS**, para convertir el valor en `int`.
- Como puedes ver, en el segundo parámetro de algunos decoradores podemos especificar los Pipes que se van a aplicar a ese dato en específico.
- En este caso, estamos aplicando una tubería solo para el dato que contiene el `param number`. El valor de `number` pasa por esta tubería, se aplica una transformación (se convierte en `int`) y luego se lo pasa ya transformado al método del controlador.
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
* Un Pipe debe implementar el método `transform`, que es el encargado de validar o transformar los datos de entrada antes de que lleguen al método del controlador. Se ejecuta antes de la lógica del controlador y permite modificar o validar datos como el cuerpo de la solicitud (`body`), los parámetros (`params`) o las consultas (`query`), asegurando que la información ingresada cumpla con los requisitos antes de ser procesada.
* El método `transform` de un Pipe personalizado recibe dos parámetros clave:
  1. **`value`**: Es el primer parámetro y representa los datos de entrada que se desean validar o transformar. Dependiendo de dónde se use este Pipe, estos datos pueden provenir del cuerpo de la petición (`body`), de los parámetros de ruta (`params`), de las consultas (`query`), entre otros. Es lo que se debe modificar o verificar para asegurar que cumpla con los criterios establecidos antes de que llegue al método del controlador.
  2. **`metadata`**: Es el segundo parámetro y contiene información sobre el dato (`value`) que está recibiendo el Pipe. Por ejemplo, indica de dónde proviene el dato (`body`, `query`, `params`, etc.), qué tipo de dato es y qué tipo de dato espera recibir el controlador.
     * Algunas de sus opciones son:
          - **`metatype`**: Indica el tipo de dato de `value` según el controlador. Por ejemplo, si el parámetro de un método del controlador es de tipo `Number`, `metatype` indicará que se espera un número. Cuando vemos algo como `metatype: [Function: Object]`, significa que el dato recibido en `value` está siendo interpretado como un objeto genérico y no como una instancia de una clase específica. Si no se especifica un tipo concreto para el parámetro del controlador, **NestJS** puede asumir que el tipo es `Object`, por lo que `metatype` será `[Function: Object]`.
          - **`type`**: Indica de dónde provienen los datos que está recibiendo el Pipe. Puede indicar si los datos vienen de `query`, `body`, `param` o `header`.
          - **`data`**: Contiene información adicional sobre lo que se está validando o transformando. Esta información es proporcionada por los decoradores que se utilizan en el controlador.
- El método `transform` de un Pipe personalizado devuelve el valor transformado o validado, que luego se pasará al método del controlador. Básicamente, lo que el Pipe devuelve es lo que finalmente recibe el método del controlador como parámetro.
- Entonces:
  - Si devuelves el valor sin modificarlo: El método del controlador recibirá el dato tal como fue enviado originalmente en la solicitud.
  - Si transformas o validas el valor: El valor modificado o validado será el que llegue al método del controlador.
  - Si los datos no cumplen con ciertas validaciones, puedes lanzar una excepción ([ver Métodos de respuesta](README.md#httpexception)) en lugar de devolver un valor.
- En este ejemplo:
  - Se toma el valor de la propiedad `age` del objeto `value` y se convierte a un número entero con `parseInt()`.
  - Si el valor de `age` no es un número (es decir, si `ageNumber` es `NaN`), se lanza una excepción utilizando `HttpException` para devolver una respuesta con el código de estado `400 Bad Request` y un mensaje personalizado: `'La edad debe ser un número'`.
  - Si la conversión es exitosa, se devuelve el objeto original (`value`), pero con la propiedad `age` convertida a un número.
  - De esta forma, el Pipe se asegura de que el valor de `age` sea un número antes de que llegue al método del controlador.

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
- En el decorador `@Query()` especificamos directamente las tuberías (Pipes) en el primer parámetro para que se apliquen a todas las `query`. Sucede lo mismo con los demás decoradores.
:::


:::tip Otras maneras de aplicar tuberías
- También podemos aplicar tuberías utilizando `@UsePipes()` o el método `useGlobalPipes()`:
  - **`@UsePipes()`**: Permite aplicar una o varias tuberías a un método específico del controlador. De esta forma, las tuberías se aplicarán solamente cuando se tenga que ejecutar este método.
    - En este caso, `value` contiene todos los datos que recibe el método del controlador al que se aplicó la tubería.
  - **`useGlobalPipes()`**: Permite aplicar una o varias tuberías a toda la aplicación. De esta forma, las tuberías se aplicarán a todas las peticiones que reciba la aplicación.
    - En este caso, `value` contiene todos los datos que recibe cada método del controlador al que se aplique la tubería.
:::


## Guards
- Es una clase que tiene el decorador `@Injectable()` y que implementa la interfaz `CanActivate`.
- La función de un Guard es comprobar si una solicitud puede acceder o no a un endpoint (método del controlador), en función de permisos o autenticación:
  - **Autorización:** Se refiere a comprobar si el usuario tiene los permisos necesarios para acceder a una ruta específica.
  - **Autenticación:** Normalmente está relacionada con validar la identidad de un usuario mediante tokens o credenciales.

#### Diferencia con middleware
- El middleware es una función intermedia que se ejecuta antes que el método del controlador. Sin embargo, el middleware no sabe qué se va a ejecutar después de llamar a `next()`. Solo realiza su tarea y pasa la solicitud, sin importar qué viene después.
- Los Guards son más "inteligentes" que el middleware porque tienen acceso a una instancia llamada `ExecutionContext`. Esto les proporciona información sobre qué se ejecutará a continuación, después de que el Guard termine su trabajo. Esto es importante porque permite a los Guards tomar decisiones más precisas.
- Los Guards permiten ejecutar lógica específica, como comprobar si el usuario tiene permiso, antes de que se ejecute el método del controlador. De esta forma, evitamos repetir la misma lógica en diferentes partes de la aplicación (DRY, que significa "Don't Repeat Yourself").
- Los Guards se ejecutan después de que todo el middleware ha hecho su trabajo, pero antes de que entren en juego los interceptores (Interceptors) o las tuberías (Pipes). Esto los coloca en una posición ideal para manejar la autorización, ya que pueden decidir si la solicitud debe continuar antes de que se realicen más operaciones sobre ella.
- Un buen uso de los Guards es comprobar si el usuario tiene acceso a rutas específicas. Por ejemplo, un `AuthGuard` puede comprobar si el usuario está autenticado y tiene los permisos necesarios para continuar.

#### Crear un guard
- Para crear un Guard usamos el siguiente comando:
```powershell
nest generate guard [Nombre]
```
:::tip Observación
- Crea un archivo base para definir un Guard.
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
- Un Guard debe implementar el método `canActivate`, que devuelve un valor booleano o una promesa/observable que resuelve a `true` o `false`. Si devuelve `true`, la solicitud puede continuar y llegar al método del controlador. Si devuelve `false`, se bloquea el acceso al endpoint y se devuelve una respuesta `403`.
- El parámetro `ExecutionContext` contiene información sobre la solicitud y el contexto de ejecución. Es más completo que la información que recibe un middleware y permite acceder a datos específicos de la solicitud, como los parámetros, la autenticación, el método del controlador, entre otros.
- Algunos de sus métodos son:
  - `switchToHttp()`: Indica que se trata de una solicitud HTTP. Al tratarse de una solicitud HTTP, podemos acceder al `request`, por ejemplo, mediante el método `getRequest()`.
  - `getHandler()`: Obtiene el método del controlador que se ejecutará si el Guard permite continuar con la solicitud.
  - `getClass()`: Obtiene la clase del controlador a la que pertenece el método que se ejecutará.
  - `getArgs()`: Obtiene los argumentos que se pasarán al método del controlador.
  - `getType()`: Obtiene el tipo de transporte utilizado, como `HTTP`, `WebSocket`, etc.
- En este ejemplo, si la URL no tiene ninguna `query`, bloqueamos el acceso.
:::


:::tip Contexto de ejecución
- El "contexto de ejecución" se refiere al entorno en el que se está ejecutando una pieza de código. Es decir, indica qué programa está ejecutando ese código.
- En **NestJS**, `ExecutionContext` permite acceder a información específica del tipo de solicitud o transporte que se está utilizando para trasladar los datos, como `HTTP`, `WebSocket` o `gRPC`.
- Podemos cambiar de contexto utilizando métodos como `switchToHttp()`, `switchToWs()` o `switchToRpc()`. Con estos métodos le indicamos el tipo de solicitud (`HTTP`, `WebSocket`, `gRPC`, etc.) que se está haciendo para poder obtener información sobre esta. Por ejemplo, si utilizamos `switchToHttp()`, podemos obtener el `request` o el `response`.
- Esto permite que los **Guards**, **Interceptors** y otros componentes puedan acceder a la información correspondiente al tipo de solicitud que están procesando.
- [Más información.](https://docs.nestjs.com/fundamentals/execution-context#current-application-context)
:::

#### Implementar guards
- Con el decorador `@UseGuards()` implementamos los Guards:
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
- Como solo estamos decorando un método del controlador, el Guard se aplicará únicamente a ese endpoint específico.
- El parámetro del decorador `@UseGuards()` especifica los Guards que se van a implementar.
- En este ejemplo, estamos implementando el Guard que creamos en el endpoint `GET` de `tasks`. Ahora, cada vez que se haga una petición `GET` a `/tasks`, se ejecutará el Guard después del middleware (si contiene alguno).
:::

## Middleware
- Un middleware es una función que se ejecuta antes de que se ejecute el método de un controlador.
- Las funciones middleware pueden realizar las siguientes tareas:
  1. Ejecutar cualquier código.
  2. Hacer cambios en los objetos de solicitud y respuesta.
  3. Dejar de procesar la solicitud (devolver una respuesta).
  4. Llamar a la siguiente función middleware en la pila (o al método del controlador).
- Si un middleware no devuelve una respuesta, debe llamar a la función `next()`. Esto permite que se ejecute el siguiente middleware en la pila (o el método del controlador si no hay ningún middleware más). Si no se llama a `next()`, la solicitud se queda "colgada", es decir, no llega a su destino.
- **NestJS** utiliza el mismo concepto de middleware que **Express**, por lo que cualquier persona que conozca **Express** podrá utilizar middleware en **NestJS** de manera similar.
- **NestJS** permite que los middleware utilicen inyección de dependencias, lo que significa que pueden acceder a métodos de otras clases si los especificamos en el constructor. Se aplica el concepto de inyección de dependencias que ya vimos.
- Puedes implementar middleware utilizando una clase (aplicando el decorador `@Injectable()` y la interfaz `NestMiddleware`) o simplemente utilizando una función, que es más directa y no tiene requisitos especiales.

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
- El método `use()` es la función que se ejecutará antes del método del controlador y contiene los tres parámetros de **Express.js**.
:::

#### Implementar middleware
- Los middlewares se implementan en el módulo que va a contener los controladores. Acordate de que un middleware en **NestJS** es una función que se ejecuta antes de que una solicitud llegue al controlador.
- Entonces, en el módulo de `Tasks`:

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
- La clase que representa el módulo debe implementar la interfaz `NestModule`. Esto es necesario cuando se quiere implementar un middleware dentro de un módulo. Esta interfaz obliga a la clase a tener el método `configure`, que es donde se define qué middleware se va a aplicar y a qué rutas.
- El método `configure` es parte de la interfaz `NestModule`. Aquí es donde configuramos el middleware:
  - **`consumer: MiddlewareConsumer`**: Es un parámetro del método `configure` que permite aplicar uno o varios middlewares a las rutas del módulo.
  - **`apply()`**: Es un método de `MiddlewareConsumer` que indica qué middleware se va a aplicar. En este caso, se está aplicando el middleware `TasksMiddleware`.
  - **`forRoutes()`**: Es un método que indica a qué rutas se va a aplicar el middleware. En este caso, se aplicará a todas las rutas de `tasks`.
  - `apply()` devuelve un objeto que permite seguir configurando cómo y dónde se debe aplicar el middleware mediante métodos encadenados como `forRoutes()`, `exclude()`, etc.
:::

:::tip Métodos encadenados
- Los métodos encadenados (o method chaining) permiten ejecutar varios métodos en una sola línea de código, llamando a un método inmediatamente después de otro.
- Por lo tanto, un método encadenado es un método que devuelve una especie de objeto que permite seguir invocando otro método en la misma línea.
:::


- Cambiamos para que se aplique solamente a la ruta `GET`:

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
- Podemos especificar un objeto para indicar en qué tipo de petición de la ruta/endpoint (`path`) se va a implementar el middleware.
- En este ejemplo, solo se implementa en las peticiones `GET` de la ruta `/tasks`.
- El objeto puede tener muchas otras propiedades, así que tocará revisar la documentación.
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
- Un interceptor es una clase con el decorador `@Injectable()` que implementa la interfaz `NestInterceptor`.
- Los interceptores permiten ejecutar lógica adicional antes o después de que se ejecute un método, sin modificar directamente el código de ese método.
- Permiten:
  1. **Ejecutar lógica antes y después de un método:**
     Los interceptores pueden ejecutar código antes de que se ejecute un método y después de que termine su ejecución.
  2. **Transformar el resultado de un método:**
     Después de que un método devuelva una respuesta, el interceptor puede modificar el resultado antes de enviarlo al cliente.
  3. **Transformar excepciones:**
     Si un método lanza una excepción, el interceptor puede capturarla y transformarla en otra respuesta.
  4. **Agregar lógica adicional:**
     El interceptor puede agregar funcionalidades sin modificar el código del controlador o servicio.
  5. **Evitar la ejecución de un método:**
     En algunos casos, el interceptor puede evitar que se ejecute el método del controlador, por ejemplo, si la respuesta ya se encuentra en caché.

#### Método `intercept()`
- Cada interceptor implementa el método `intercept()`. Este método recibe dos parámetros principales:
  - **`ExecutionContext`**:
    - Contiene información sobre la solicitud y el método del controlador que se va a ejecutar, como el tipo de transporte (`HTTP`, `WebSocket`, etc.) y los argumentos de la solicitud. Es el mismo objeto que utilizan los Guards ([ver Crear un Guard](README.md#crear-un-guard)).
  - **`CallHandler`**:
    - Contiene el método `handle()`, que se utiliza para ejecutar el método del controlador. Si `handle()` no se llama dentro de `intercept()`, el método del controlador no se ejecutará.
    - `handle()` devuelve un `Observable`, lo que permite utilizar operadores de **RxJS** para modificar la respuesta antes de devolverla al cliente.


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
- Lo podés generar con el comando `nest generate interceptor [nombre]`.
:::

:::tip Explicación del código
- Todo Interceptor tiene el método `intercept()` (la interfaz `NestInterceptor` lo requiere), que recibe dos parámetros:
  - `context: ExecutionContext`: Proporciona información sobre la solicitud y el contexto de ejecución.
  - `next: CallHandler`: Proporciona el método `handle()`, que se encarga de ejecutar el método del controlador.
- Flujo dentro del método `intercept()`:
  - `console.log('Before...')`:
    - Imprime el mensaje `"Before..."` en la consola antes de que se ejecute el método del controlador.
  - `const now = Date.now()`:
    - Guarda el momento actual en milisegundos para poder calcular cuánto tarda en ejecutarse el método del controlador.
  - `return next.handle().pipe(...)`:
    - `handle()` ejecuta el método del controlador.
    - `pipe()` permite utilizar operadores de **RxJS** para trabajar con la respuesta.
  - `tap(() => console.log("After... ${Date.now() - now}ms"))`:
    - `tap()` permite ejecutar una acción sin modificar la respuesta.
    - En este caso, muestra en la consola cuánto tiempo tardó en ejecutarse el método del controlador.
- De esta forma, se mostrará el mensaje `"After... Xms"`, donde `X` representa el tiempo que tardó en ejecutarse el método del controlador en milisegundos.
:::


- Para implementar un interceptor, simplemente lo especificamos en el controlador (se aplicará a todos sus métodos) o en el método que lo va a utilizar, mediante el decorador `@UseInterceptors()`:

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
- El Interceptor que creamos antes se especifica en el parámetro del decorador `@UseInterceptors` que decora un método. Esto significa que, cuando se ejecute el método del controlador, también se ejecutará el Interceptor que creamos.
- Puedes usar el decorador `@UseInterceptors` en dos lugares:
  - En la clase del controlador:
    - Si se utiliza `@UseInterceptors` en la clase del controlador, el Interceptor se aplicará a todos los métodos dentro de esa clase.
  - En un método específico del controlador:
    - Si se utiliza `@UseInterceptors` en un método específico, el Interceptor solo se aplicará a ese método.
- En resumen, `@UseInterceptors` se puede usar a nivel de clase para afectar a todos los métodos del controlador o a nivel de método para afectar solo a un método específico.
:::


#### Interceptor global
- La aplicación de **NestJS** tiene el método `useGlobalInterceptors(X)` para especificar los interceptores que se van a implementar de manera global (sería como decorar con `@UseInterceptors(X)` a todos los controladores de la aplicación).
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
- Le pasamos una instancia de la clase que contiene el Interceptor al método `useGlobalInterceptors()`.
- El Interceptor que le indicamos al método se va a implementar en todos los controladores de la aplicación.
- Sería como decorar con `@UseInterceptors(TasksInterceptor)` todos los controladores de la aplicación.
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
- `TasksInterceptor<T>`: `T` es un tipo genérico que representa el tipo de dato que devuelve el método del controlador. Al ser genérico, podemos utilizar este Interceptor con múltiples métodos sin necesidad de limitarnos a un tipo de dato específico.
- `NestInterceptor<T, Response<T>>`:
  - `T`: Es el tipo de dato que devuelve el método del controlador. Por ejemplo, si el método devuelve un `string`, `T` será `string`.
  - `Response<T>`: Es el tipo de dato que devolverá el Interceptor. En este caso, será un objeto que tendrá una propiedad `nuevaPropiedad` que contendrá el dato original.
- `next.handle().pipe(map(data => ({ nuevaPropiedad: data })))`:
  - `next.handle()`: Ejecuta el método del controlador y devuelve la respuesta.
  - `pipe(map(...))`: Utiliza el operador `map` de **RxJS** para modificar la respuesta.
  - `map(data => ({ nuevaPropiedad: data }))`: Recibe la respuesta del método del controlador y la convierte en un objeto que tiene la propiedad `nuevaPropiedad`, cuyo valor será la respuesta original.
- De esta forma, el Interceptor modifica la respuesta del método del controlador agregándole la propiedad `nuevaPropiedad`.
:::


- Entonces el endpoint donde implementamos el interceptor quedaría así:

```js
@UseInterceptors(TasksInterceptor)
@Get('/')
getAllTasks(@Query(ValidatePipe) query: queryTaskDto) {
    console.log("age", typeof query.age);
    console.log("name", typeof query.name);

    return `Es la tarea de ${query.name}, tiene ${query.age + 20} años`;
}
```
:::tip Observación
- Valor de `T` en `TasksInterceptor<T>`: `T` representa el tipo de dato que devuelve el método del controlador:
  - El método retorna un `string`, ya que la respuesta es una cadena que incluye el nombre y la edad.
  - Por lo tanto, en este caso, `T` es `string`.
- `NestInterceptor<T, Response<T>>`:
  - `T`: Es `string`, porque es el tipo de dato que devuelve el método del controlador.
  - `Response<T>`: Se convierte en `Response<string>`.
- Entonces, en este caso el Interceptor recibe el `string` que devuelve el método del controlador y lo convierte en un objeto que tiene una propiedad `nuevaPropiedad` con ese `string`.
- Al utilizar un tipo genérico, el mismo Interceptor puede utilizarse con métodos que devuelvan diferentes tipos de datos.
- [Más información.](https://docs.nestjs.com/interceptors#interceptors)
:::

## Base de datos Prisma
- [Documentación de Prisma.](https://docs.nestjs.com/recipes/prisma)
- Prisma es una herramienta que facilita la interacción con bases de datos en aplicaciones Node.js y TypeScript. Permite gestionar la base de datos sin tener que escribir las consultas SQL directamente y facilita el trabajo con los datos.
- Existen otras herramientas y ORM que cumplen funciones similares, como **Knex.js**, **TypeORM** y **Sequelize**.
#### ¿Qué hace Prisma?
- **ORM (Object-Relational Mapping):** Prisma actúa como un intermediario entre nuestro código y la base de datos. Permite interactuar con la base de datos utilizando código de JavaScript o TypeScript, sin tener que escribir las consultas SQL directamente.
- **Alternativa a otras herramientas:** Existen otras herramientas que permiten interactuar con bases de datos, como **Knex.js**, **TypeORM** y **Sequelize**. Prisma es una alternativa a estas herramientas.
- **Soporte para varias bases de datos:** Prisma es compatible con varias bases de datos, como **PostgreSQL**, **MySQL**, **SQL Server**, **SQLite**, **MongoDB** y **CockroachDB**.
- **Integración con TypeScript:** Prisma se integra con **TypeScript** y proporciona información sobre los tipos de datos que estamos utilizando. Esto ayuda a detectar errores relacionados con los tipos mientras desarrollamos la aplicación.


:::tip ORM

- ORM es una técnica de programación que permite interactuar con una base de datos relacional utilizando objetos y clases, en lugar de escribir consultas SQL directamente.
- Básicamente, el ORM actúa como un intermediario entre nuestro código y la base de datos. Los métodos que proporciona el ORM se encargan de realizar las consultas a la base de datos y nosotros solo tenemos que invocarlos.

:::

#### Instalamos prisma
```powershell
npm install prisma --save-dev
```

:::tip Paquete `prisma`
- Es el **CLI de Prisma**.
- Este paquete contiene herramientas para ejecutar comandos como:
  - `prisma init`: inicializa un proyecto de Prisma.
  - `prisma migrate`: crea y aplica migraciones a la base de datos.
  - `prisma generate`: genera el cliente de Prisma que utilizaremos en nuestro código para realizar operaciones en la base de datos. Es decir, genera el objeto que contiene los métodos que utilizaremos para interactuar con la base de datos.
- No es necesario que este paquete esté en producción, ya que se utiliza durante el desarrollo.
- La CLI se encarga de generar y ejecutar las consultas SQL necesarias para modificar la estructura de la base de datos. Es la CLI la que realiza estos cambios directamente en la base de datos.
:::

- Inicializamos prisma:

```powershell
npx prisma init
```

:::tip Observación
- Crea una carpeta llamada `prisma`, que contiene toda la configuración y las tablas de la base de datos.
- Crea un archivo `.env` con una variable que contiene la URL de conexión a la base de datos.

:::


#### Ejecutamos una BD en Postgesql en docker

```powershell
docker run -p5432:5432 -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=demodb  -e POSTGRES_USER=usuario  -d postgres  
```

:::tip Observación
- Iniciamos PostgreSQL con una base de datos llamada `demodb` con el usuario:
  - **user:** `usuario`
  - **password:** `123`
:::


#### Archivo .env
```js
DATABASE_URL="postgresql://usuario:123@localhost:5432/demodb?schema=public"
```
:::tip Observación
- Modificamos la URL de conexión para poder conectarnos a la base de datos de Docker (fíjate dónde puse los datos).
- En la mayoría de los ORM, te conectas a una base de datos mediante una URL de conexión como la que contiene la variable de entorno `DATABASE_URL`. ¡Te invito a que investigues más sobre el tema!
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
- **`generator client`**: Especifica qué herramienta va a utilizar Prisma para generar el cliente. Por defecto, Prisma utiliza `prisma-client-js`, que genera el cliente para JavaScript/TypeScript. Este cliente es un objeto que contiene métodos como `create()`, `findMany()`, `update()`, etc., que permiten consultar, insertar, actualizar y eliminar datos de la base de datos desde nuestro código sin necesidad de escribir SQL.
- **`datasource db`**: Aquí se especifica a qué base de datos se conectará Prisma.
  - **`provider`**: Especifica el tipo de base de datos que se está utilizando. En este caso, `postgresql` indica que se está utilizando una base de datos PostgreSQL.
  - **`url`**: Es la URL de conexión a la base de datos. `env("DATABASE_URL")` indica que Prisma debe obtener la URL de conexión desde una variable de entorno llamada `DATABASE_URL`. Esto permite mantener la configuración de conexión fuera del código fuente.
- Por último, cada **`model`** representa una tabla en la base de datos. En este caso, definimos un modelo llamado `User` con los siguientes campos:
  - **`id String @id @default(cuid())`**:
    - `id`: Es el nombre del campo.
    - `String`: Es el tipo de dato del campo `id`, que es una cadena de texto.
    - `@id`: Indica que este campo es la clave primaria (primary key) de la tabla.
    - `@default(cuid())`: Establece un valor predeterminado para el campo `id`, generado automáticamente mediante `cuid()`.
  - **`email String @unique`**:
    - `email`: Es el nombre del campo.
    - `@unique`: Asegura que el valor del campo `email` sea único en la tabla. Es decir, no puede haber dos usuarios con el mismo correo electrónico.
  - **`name String?`**:
    - `name`: Es el nombre del campo.
    - `String?`: El signo de interrogación (`?`) indica que este campo es opcional, por lo que puede ser `null`.
  - **`password String`**:
    - `password`: Es el nombre del campo.
    - `String`: Es el tipo de dato del campo `password`, que es una cadena de texto.
  - **`createdAt DateTime @default(now())`**:
    - `createdAt`: Es el nombre del campo.
    - `DateTime`: Es el tipo de dato del campo, que representa una fecha y hora.
    - `@default(now())`: Establece como valor predeterminado la fecha y hora actual en el momento de crear el registro.
  - **`updateAt DateTime @updatedAt`**:
    - `updateAt`: Es el nombre del campo.
    - `DateTime`: Es el tipo de dato del campo, que representa una fecha y hora.
    - `@updatedAt`: Indica que este campo se actualizará automáticamente cada vez que el registro sea modificado.
- Como te darás cuenta, se utilizan **decoradores** (aunque Prisma los considera anotaciones) para especificar tipos de datos, restricciones o comportamientos de los campos de la base de datos.
:::


#### Comando migrate
- Ejecutamos el siguiente comando:

```powershell
npx prisma migrate dev --name init
```
:::tip Observación
- `migrate dev` es un comando específico de Prisma que se utiliza para:
  - Detectar cambios en el archivo `schema.prisma`.
  - Crear una nueva migración que refleja esos cambios.
  - Aplicar automáticamente esos cambios a la base de datos.
- El parámetro `--name` permite asignar un nombre a la migración. En este caso, la migración se llama `init`, que suele utilizarse para indicar que es la primera migración o la inicialización de la base de datos.
- Este nombre es importante porque ayuda a identificar de qué se trata cada migración. Por ejemplo, si más adelante agregamos una tabla de usuarios, podemos utilizar `--name add-users-table` para identificar fácilmente qué cambios realiza esa migración.
- Cuando ejecutamos `npx prisma migrate dev --name init`, sucede lo siguiente:
  1. Prisma revisa el archivo `schema.prisma` para detectar cambios en los modelos de la base de datos.
  2. Genera una migración dentro de una carpeta como `prisma/migrations`, que contiene las consultas SQL necesarias para aplicar esos cambios.
  3. Aplica esos cambios a la base de datos.
  4. Guarda la migración con el nombre `init`, para poder identificarla posteriormente.
:::


:::tip Migración
- Las migraciones son como un historial de cambios. Cada vez que modificas el diseño de la base de datos, creas una nueva "migración" que contiene las instrucciones necesarias para aplicar esas modificaciones. Esta migración se guarda como un archivo de texto que contiene las consultas SQL necesarias para modificar la base de datos.
- Prisma, como ORM, facilita este proceso al permitirte definir la "estructura" de la base de datos en un archivo de esquema (`schema.prisma`). Luego, Prisma genera automáticamente las migraciones necesarias al comparar el esquema con el estado actual de la base de datos. Así, no necesitas escribir manualmente las consultas SQL: solo defines la estructura en el esquema y Prisma se encarga del resto.
:::

#### Cliente de Prisma
- Instalamos el paquete que se utiliza para crear el cliente de Prisma:
```powershell
npm install @prisma/client
```
:::tip Observación
- El comando `prisma generate` utiliza un paquete para crear el cliente de Prisma. En nuestro caso, como utilizamos JavaScript/TypeScript, se utiliza el paquete `@prisma/client`.
- Este paquete contiene las clases y métodos que permiten realizar consultas a la base de datos con Prisma, como `prisma.user.findMany()` o `prisma.post.create()`.
- Es necesario en producción, ya que permite conectarnos y realizar consultas a la base de datos.
- Prisma utiliza este paquete para generar el cliente, que es una clase que permite manipular la base de datos que especificamos en el esquema.
- Durante la instalación de `@prisma/client`, se ejecuta automáticamente el comando `prisma generate` para crear el cliente basado en los modelos definidos en el archivo `schema.prisma`.
- Después de la instalación inicial, cada vez que hagamos un cambio en nuestros modelos (por ejemplo, agregar una nueva tabla o modificar una existente), debemos ejecutar `prisma generate` para actualizar el cliente con los cambios realizados en el esquema.
:::

- En la carpeta `src` creamos el archivo `prisma.service.ts`, que será un servicio que interactuará con la base de datos.

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
- Hereda de la clase `PrismaClient`.
- La clase `PrismaClient` es el "cliente" que genera Prisma y contiene los métodos para interactuar con la base de datos, como `.findMany()`, `.create()`, `.update()`, etc.
- `async onModuleInit()`: Se ejecuta cuando el servicio se inicializa y utiliza `this.$connect()` para establecer la conexión con la base de datos. Para utilizar este método, se debe implementar la interfaz `OnModuleInit` (lo veremos más adelante en **Lifecycle Events**).
- `await this.$connect()`: Espera a que se establezca la conexión con la base de datos antes de continuar.
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
- Cada propiedad del cliente es un modelo, es decir, una tabla de la base de datos que se definió en el archivo `schema.prisma`.
- Por ejemplo, si tenemos un modelo `User` en nuestro esquema, el cliente de Prisma tendrá una propiedad `user` que representa esa tabla.
- Cada propiedad del cliente (`user`, `post`, etc.) representa un modelo y contiene métodos para manipular esa tabla, como crear, consultar, actualizar y eliminar registros.
- Por ejemplo:
  - `findMany()`: Devuelve todas las filas del modelo.
  - `create({ data: X })`: Crea una fila utilizando los valores de la propiedad `data`. `X` debe ser un objeto donde cada propiedad representa una columna de la fila.
- [Para más información, consulte la documentación.](https://www.prisma.io/docs/orm/prisma-client/queries/crud)
:::


#### ¡A probar el código!
- A estas alturas, ya deberías tener el conocimiento suficiente para realizar los cambios correspondientes y probar este código.
- Si vas a implementar `ValidationPipe()`, deberías añadir decoradores en el DTO para especificar el tipo de dato de cada campo, como `@IsString()`. De lo contrario, no serán reconocidos como campos y serán eliminados al utilizar `whitelist: true`.



## Swagger
- [NestJS nos ofrece la opción de utilizar Swagger.](https://docs.nestjs.com/openapi/introduction)
- [¿Qué es Swagger?](https://flevatti.github.io/guide-software-development/docs/CSharp/API#swagger)

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
  - Crea una instancia de `DocumentBuilder`, que es una clase proporcionada por NestJS para configurar Swagger.
- `.setTitle('Cats example')`:
  - Define el título de la documentación.
- `.setDescription('The cats API description')`:
  - Define una descripción de la API.
- `.setVersion('1.0')`:
  - Define la versión de la API.
- `.addTag('cats')`:
  - Crea una etiqueta (`tag`) llamada `cats`, que sirve para organizar los endpoints relacionados con gatos.
  - Es importante aclarar que solo crea la etiqueta; no asigna automáticamente los endpoints a ella.
- `.build()`:
  - Finaliza la configuración y devuelve el objeto `config` que utilizaremos para generar la documentación.
- `const document = SwaggerModule.createDocument(app, config)`:
  - Genera la documentación teniendo en cuenta la `app` pasada y la configuración `config`.
  - `app` es la aplicación, o sea, se va a crear una documentación de la aplicación que le pasemos.
  - `config` es la configuración que va a utilizar Swagger para crear la documentación.
  - El resultado se guarda en `document`, que representa la documentación generada por Swagger.
- `SwaggerModule.setup('api', app, document)`: 
  - Publica la documentación para que el usuario la pueda ver.
  - El primer parámetro, `'api'`, indica la ruta donde estará disponible la documentación, en este caso `/api`.
  - `app` es la aplicación de **NestJS** que estamos documentando y `document` es la documentación que generamos anteriormente.
  - Desde esta ruta podemos ver la documentación y probar los endpoints de la API directamente desde el navegador.
  - Se pasa `app` porque **Swagger** necesita conocer la aplicación de **NestJS** para generar las funciones necesarias que permiten utilizar la API desde el navegador.
:::

#### Decoradores
- Mediante decoradores podemos asignar un **tag** a un endpoint.

:::tip Etiqueta (tag)
- Un **tag** en Swagger es como una carpeta (representada como una lista desplegable) que agrupa endpoints.
- Sirve para organizar y clasificar los endpoints.
- Supongamos que tienes una API que gestiona usuarios y productos. Puedes usar dos tags:
  - **Tag `users`**: Agrupa todos los endpoints relacionados con usuarios, como `GET /users` para obtener usuarios.
  - **Tag `products`**: Agrupa todos los endpoints relacionados con productos, como `GET /products` para obtener productos.
:::

- Con el decorador `@ApiTags()` asignamos un **tag** a un controlador.
- Podemos asignar un **tag** solo a algunos endpoints, decorando únicamente el método:

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
- También podés asignarle una etiqueta a todos los endpoints de un controlador decorando la clase:
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

- Con el decorador `@ApiOperation()` podemos agregar una descripción a un endpoint. Para esto, le pasamos un objeto con la propiedad `summary`, cuyo valor será la descripción:

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
- Con el decorador `@ApiResponse()` podemos documentar los códigos de respuesta posibles de un endpoint. Cada objeto que le proporcionamos representa una **posible respuesta** y contiene estas propiedades:
  - **`status`**: Indica el código de respuesta, por ejemplo `200`, `400`, etc.
  - **`description`**: Es la descripción de lo que sucede cuando el endpoint devuelve el código de respuesta especificado.

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
- Estos solo son algunos de los decoradores, pero hay muchos más… ¡Te invito a investigar!
:::

## Comandos

#### Generate
- Con el siguiente comando podemos generar un elemento de **NestJS**:
```powershell
Nest generate [TipoDeArchivo] [Nombre] [Opciones]
```

:::tip Observación
- Podés reemplazar `generate` por `g` (es la abreviación de `generate`).
- **Tipo de archivo** puede ser `controller`, `service`, etc. También podés utilizar abreviaciones como `co` para `controller` y `s` para `service`.
- Si el **nombre** es igual al que tiene el módulo, el archivo se añade en la misma carpeta y se realizan las configuraciones correspondientes para que permanezca en este.
- Si el **nombre** que proporcionás coincide con el nombre del módulo, el archivo se creará en la carpeta del módulo. No obstante, si usás una sintaxis como `nombreModulo/otraUbicacion/otraUbicacion/nombreArchivo`, estás especificando la ruta donde se guardará el archivo dentro del módulo. Las carpetas indicadas en `otraUbicacion` se crearán automáticamente si no existen, y al final se especifica el nombre del archivo.
- Por ejemplo, en el siguiente comando se crearía una carpeta `pipes` dentro de la carpeta `task` (que representa el módulo) y en esta se crearía el Pipe llamado `validate`:
  `nest g pipe task/pipes/validate`.
- Cada elemento viene con su archivo de testing (`.spec.ts`).
- Algunas de las opciones son:
  - `--no-spec`: Sirve para no crear el archivo de testing.
:::

#### Generate resource
- Como te habrás dado cuenta, cada módulo contiene servicios, controladores, DTO, etc.
- En **NestJS** existe una forma de crear todos los archivos necesarios para un módulo utilizando un solo comando `generate`:
```powershell
nest g resource [nombre]
```
:::tip Observación
- Una vez ejecutado el comando, te van a preguntar:
  - Para qué tipo de aplicación es: REST API, GraphQL, Microservice, etc.
  - Si deseás generar un CRUD básico.
- Una vez completadas las dos preguntas, se generará el módulo, el controlador, el servicio, los DTO y las entidades para el nombre que especificaste. A su vez, se añadirá al módulo principal para que lo puedas probar al iniciar la aplicación.
:::


## CORS
- CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad que permite a las aplicaciones web realizar solicitudes HTTP a servidores que están alojados en un dominio diferente al de la aplicación. En otras palabras, si tu aplicación se ejecuta en `dominio-a.com` y necesita acceder a una API en `dominio-b.com`, CORS permite realizar esas solicitudes.
- Sin este mecanismo, los navegadores modernos bloquearían las solicitudes entre diferentes dominios debido a restricciones de seguridad, lo que se conoce como política de mismo origen (Same-Origin Policy).
- El funcionamiento básico de CORS implica que, en determinadas solicitudes, el navegador envía una solicitud especial llamada **preflight request** (solicitud de preevaluación) antes de enviar la solicitud principal. En esta preevaluación, el navegador pregunta al servidor si permite la solicitud desde el origen de la aplicación que está haciendo la petición. Si el servidor lo autoriza, incluye ciertos encabezados en su respuesta, indicando qué métodos HTTP y qué orígenes están permitidos.
- Para habilitar CORS, editamos `main.ts`:
```js
app.enableCors();
  await app.listen(3000);

```
:::tip Observación
- La aplicación tiene el método `enableCors()`, que habilita CORS.
- La configuración por defecto permite peticiones desde todos los dominios.
:::

- El método `enableCors()` puede recibir como parámetro un objeto de configuración opcional:
```js
app.enableCors({
  origin: 'https://www.google.com/', // Solo permite solicitudes desde este dominio
  methods: 'GET,POST',           // Permite solo estos métodos HTTP
  credentials: true,             // Permite el uso de cookies
});

```
- También podés pasarle un callback para generar la configuración de forma asíncrona según la solicitud:
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
- Tenemos acceso a la solicitud mediante el primer parámetro del callback.
- El callback recibe dos parámetros: en el primero podemos devolver un error y en el segundo, el objeto de configuración que se utilizará en esa solicitud.
:::

- También podés habilitar las CORS con el segundo parámetro del método `create()`, que es el que crea la aplicación:
```js
 const app = await NestFactory.create(AppModule , {cors : true});
```
:::tip Observación
- El segundo parámetro del método `create()` es un objeto de configuración y una de sus propiedades es `cors`.
- La propiedad `cors` puede recibir `true`, que es equivalente a ejecutar el método `app.enableCors()`. También puede recibir un objeto de configuración o un callback, como en los ejemplos anteriores.
:::


## Lifecycle Events
- Un ciclo de vida en desarrollo de software describe las etapas por las que pasa un componente o una aplicación desde su creación hasta su destrucción. Esto incluye la inicialización, la ejecución y, finalmente, la destrucción del objeto o componente.
- En **NestJS**, cada servicio, controlador o módulo tiene su propio ciclo de vida independiente.

#### 1- Módulos
- En **NestJS**, los módulos organizan el código. Cada módulo tiene su propio ciclo de vida.
- Cuando una aplicación de **NestJS** se ejecuta, el módulo raíz (`AppModule`) es el primero en ser cargado. Luego, los submódulos son cargados y configurados según sus dependencias.


#### 2- Inyección de dependencias
- **NestJS** utiliza la inyección de dependencias para administrar los servicios. Cuando se necesita un servicio, se crea automáticamente la instancia de dicho servicio si todavía no existe.
- Un servicio en NestJS tiene dos posibles ciclos de vida

##### 1- Servicio Singleton (Instancia única)
- Por defecto, todos los servicios en **NestJS** son singleton. Esto significa que solo se crea una instancia del servicio durante toda la vida de la aplicación.
- Una vez creada, esta instancia es compartida entre todos los componentes que la necesiten (controladores, otros servicios, etc.).
- Ejemplo: Si un servicio se utiliza en varios controladores, no se crea una nueva instancia del servicio para cada controlador, sino que todos comparten la misma instancia.
- Este enfoque tiene varias ventajas:
  - **Eficiencia:** Al compartir una sola instancia, no es necesario crear nuevos objetos cada vez que se necesita el servicio.
  - **Estado compartido:** Todos los componentes que utilicen el servicio comparten la misma información que este tenga almacenada.
##### 2- Servicio Transitorio (Vida corta)
- Si un servicio necesita ser transitorio (es decir, crear una nueva instancia cada vez que se necesita), podemos configurar su ciclo de vida para que sea así.
- Esto significa que cada vez que un componente, como un controlador, necesite el servicio, **NestJS** creará una nueva instancia. Una vez que termine de utilizarse, esa instancia será destruida.

#### 3- Controladores
- Los controladores reciben las solicitudes HTTP y devuelven una respuesta para cada solicitud.
- El ciclo de vida de un controlador está relacionado con las solicitudes que recibe. A continuación, te lo explico paso a paso.

##### Creación del controlador
- Por defecto, los controladores en **NestJS** se comportan como singleton, lo que significa que se crea una sola instancia del controlador cuando la aplicación se inicializa.
- Esta instancia se mantiene durante toda la vida de la aplicación y se reutiliza cada vez que llega una solicitud HTTP a una ruta gestionada por ese controlador.

##### Manejo de la solicitud
- Cuando una solicitud HTTP llega a un endpoint gestionado por un controlador, sigue este flujo:
  1. **Recepción de la solicitud:**
     - Cuando el cliente (por ejemplo, un navegador o una aplicación móvil) envía una solicitud HTTP, **NestJS** la dirige al controlador correspondiente según el endpoint.
     - El controlador tiene métodos decorados con `@Get()`, `@Post()`, etc., que indican qué tipo de solicitud HTTP recibe cada método.
  2. **Procesamiento de la solicitud:**
     - El controlador llama a los servicios o métodos que necesita para realizar la operación solicitada por el cliente.
     - Los servicios o métodos se encargan de realizar el trabajo necesario, como consultar una base de datos o procesar la información.
  3. **Respuesta al cliente:**
     - Una vez que se completan todas las operaciones solicitadas, el controlador devuelve una respuesta al cliente que realizó la solicitud.
     - La respuesta puede ser un JSON, un archivo o cualquier otro tipo de dato.

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
