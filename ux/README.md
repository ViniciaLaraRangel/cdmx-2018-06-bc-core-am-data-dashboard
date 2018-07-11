# **Data Dashboard**

## **Proceso de UX**

Nuestro primer acercamiento lo haremos a través del proceso de diseño, donde pasamos por diferentes etapas como:

### **1. Descubrimiento e investigación**


1) ¿Quiénes son los principales usuarios de producto?.

Todas las personas de Laboratoria involucradas en el proceso de mejora continua del Bootcamp.

2) ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Mantener un buen control de situación, visualizar los datos recopilados del desempeño de aprendizaje y tomar decisiones que les permitan aplicar los cambios necesarios para el mejor aprovechamiento de las estudiantes.

3) ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?. Cómo los descubriste.

Se ejecutaron entrevistas a usuarios (TM y AC) con lo que descubrimos que lo mas importante para el usuario es conocer la cantidad de alumnas activas en el bootcamp para asì detectar el porcentaje de deserciòn desde el inicio a la fecha, asì como datos integrales del perfil (softskills) de cada alumna y su aprovechamiento.

4) ¿Cuándo revisan normalmente estos datos los usuarios?.

Todos los dìas en todo momento, esto depende de quien les solicite esta informaciòn y para què la van a aplicar.  

5) ¿Cómo crees que el producto les está resolviendo sus problemas?.

Facilitarà el diagnóstico y la toma de decisiones. permitirà organizar y configurar la información asì como agilizar la consulta que actualmente poseen y mejora el entendimiento del desempeño de todos los colaboradores de Laboratoria.
Ayudarà a minimizar e integrar las herramientas (bases de datos) utilizadas actualmente para manipular la información.

6)  Cómo fue tu proceso de diseño.

Se realizaron 3 sketches borrador y se seleccionò solo uno para mostrar la pantalla principal y que esta fuera fija para que la interfaz permitiera mostrar y ocultar elementos conforme la interacciòn del usuario.

[entrevista TM](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DihvJ8wsalj4%26index%3D14%26list%3DWL%26t%3D0s&h=AT1B5nyqfUp4UcbP3oBc6SJ84vDsy4zDwN-YFYRWPlMVyKbABLR7Tkxp3anbDSvaa8bJcJp6C8Qbp27x8QoPeZzLMBu6MlZlGhxLLw-EmKFRHkML2gQra47_A49TTUBJTuMa)

#### 2) Sketch de la solución (prototipo de baja fidelidad)

 ![sketch1](https://imageshack.com/a/img921/8002/oxsAgR.jpg)
 ![sketch2](https://imageshack.com/a/img924/8337/9NYSwM.jpg)
 ![sketch3](https://imageshack.com/a/img922/6254/JlcbEP.jpg)
 ![sketch4](https://imageshack.com/a/img924/5736/uEP9m0.jpg)
 ![sketch5](https://imageshack.com/a/img923/2649/vHrfLh.jpg)
 ![sketch6](https://imageshack.com/a/img921/1008/0ORHRE.jpg)

 _diagrama de flujo_

 ![sketch7](https://imageshack.com/a/img921/5562/ottPh6.jpg)

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

_Solicita usuario y contraseña para acceder_

![Prototipo1](https://imageshack.com/a/img924/1163/QoKhZu.jpg)

_Se observar las sedes listadas e informaciòn general de laboratoria_

![Prototipo2](https://imageshack.com/a/img922/4650/1WmdPt.jpg)

_Permite seleccionar la generaciòn y buscar por nombre de alumna, muestra informacion de la generacion: Promedio de la generación, status estudiantes debajo del 60 porciento de completitud, status de estudiantes con 90 o más en su porcentaje de completitud, filtrar estudiantes por estos dos status_

![Prototipo3](https://imageshack.com/a/img922/9652/JGFAB8.jpg)

_Muestra porcentaje general de completitud y reporte de progreso de la alumna: porcentaje de completitud, porcentaje de tiempo completado de cada tema, lista subtemas y filtra subtemas completados, no completado y el tipo_

![Prototipo4](https://imageshack.com/a/img921/4885/crSZ1s.jpg)

__Usuarixs:__  
Hasta el momento lo que se puede observar de lxs Usuarixs es que deben tomar decisiones de forma continua, todos los días sus planes deben ajustarse y adicionalmente, deben mantener alimentadas con información las bases de datos que actualmente utilizan.

__Necesidades de las usuarias:__
Dentro de las necesidades que pudimos observar se encuentra la del acceso a la información de forma eficiente, práctica y en cualquier lugar. De esta observación se deduce que hay una grann necesidad de tener un data dashboard que tenga una interfaz Responsive.


__Objetivos de las usuarias:__ 
Esperan dar una imagen aún mas profesional cuando interactuen con empresas, representantes, clientes al tener la información que solicitan en juntas/presentaciones, así cómo poder apoyar más a las estudiantes midiendo el desarrollo de su aprendizaje.


__Pain points:__ 
Descubrimos que alimentar las bases de datos en excel TODOS los días no es malo, pero no es lo ideal. Causa mucha dificultad y gasto de tiempo acceder a esa información que ya se recolecto y para identificarla se debe leer e interpretar, lo cual no es nada ágil.

__Sentimientos:__
Se determina que el principal sentimiento es: Cansancio y frustación cuando esta info se muestra a otras personas.

### **2. Síntesis y definición**
__1. Cuáles crees que son los datos más importantes a tener en cuenta para el Data Dashboard:__

   - Sobre las estudiantes:
   Porcentaje de Completitud, sede, generación a la que pertenecen y el promedio de la generación.
   [entrevista TM](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DihvJ8wsalj4%26index%3D14%26list%3DWL%26t%3D0s&h=AT1B5nyqfUp4UcbP3oBc6SJ84vDsy4zDwN-YFYRWPlMVyKbABLR7Tkxp3anbDSvaa8bJcJp6C8Qbp27x8QoPeZzLMBu6MlZlGhxLLw-EmKFRHkML2gQra47_A49TTUBJTuMa)

### **3. Ideación**
Hemos imaginado una interfaz sencilla de leer y con un diseño muy neutro, por lo que decidimos usar un diseño basado en componentes de BootStrap y CSS basado en el framework "PURE".

### **4. Prototipado**

 ![sketch1](https://imageshack.com/a/img921/8002/oxsAgR.jpg)
 ![sketch2](https://imageshack.com/a/img924/8337/9NYSwM.jpg)
 ![sketch3](https://imageshack.com/a/img922/6254/JlcbEP.jpg)
 ![sketch4](https://imageshack.com/a/img924/5736/uEP9m0.jpg)
 ![sketch5](https://imageshack.com/a/img923/2649/vHrfLh.jpg)
 ![sketch6](https://imageshack.com/a/img921/1008/0ORHRE.jpg)

