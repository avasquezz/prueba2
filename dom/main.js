//------------------------Acceder a Elementos------------------------

//var cajas = document.getElementsByTagName('div');
var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');
//primeraCaja.innerHTML = '<u>Hola Mundo</u>';
//cajas[0].textContent = "HOla MUndito";
//cajas[0].innerHTML = '<h1>Hola</h1>';

//---------------CREANDO NODOS---------------
//1. Crear elemento
var caja = document.createElement('div');
//2. Crear nodo de texto
var contenido = document.createTextNode('Hola Mundo');
//3. Añadir el nodo de texto al elemento
caja.appendChild(contenido);//Agregar contenido al div
//4. Agregar  atributos a la caja
//caja.setAttribute('class', 'caja naranja');//Agregar atributo
//caja.setAttribute('id', 'nuevo');//Agregar atributo

//5. Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

//---------------Modificando la clase o id de un elemento---------------
caja.id = 'primera'
caja.className = 'caja naranja';

//Insertar caja en la N posición
var padre = cajas[0].parentNode;
//padre.insertBefore(caja, primeraCaja);
//padre.insertBefore(caja, cajas[2]);


//Reemplazar nodo
padre.replaceChild(caja, cajas[0]);

//Eliminar nodo
padre.removeChild(cajas[3]);