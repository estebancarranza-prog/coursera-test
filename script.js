// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function dato () {
  var paga="hola mundo"
  document
     .getElementById("pago1")
     .textContent = paga;
} 

var consulta = document.querySelector('#consulto')
function llenar () {
  fetch('texto.json')
    .then (res => res.json())
    .then (datos => {
      relleno(datos)
    }) 
}
function relleno(datos) { 
  //console.log(datos[0].nombre)
  for (var i of datos) {
    consulto.innerHTML += `
    <p> ${ i.nombre } ${ i.id } ${ i.estado} </p>

    `
  }
}

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos (){

  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'texto.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if(this.readyState ==4 && this.status == 200) {
      //console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      
      console.log(datos);

      let res = document.querySelector('#res');
      res.innerHTML = '';

      for (let item of datos) {
        res.innerHTML += `
        <tr> 
          <td>${item.nombre}</td>
          <td>${item.id}</td>
          <td>${item.estado}</td>
        </tr>
        `
      }
    }
  }

}

