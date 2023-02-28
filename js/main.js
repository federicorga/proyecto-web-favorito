
window.onload=function(){
  var contenedor= document.getElementById('loader');
  contenedor.style.transition='0.9s'
  contenedor.style.visibility= 'hidden';
  contenedor.style.opacity = '0';
}

async function runApp() { //inicia la aplicacion con todos sus componentes

  await ArrayJsonToOtherArray(convertJsonToArrayJson(catalogJson), listaPageWeb);
  //almacena arrayJson en un array existente (listaPageWeb)
  await renderAllListArrayToCard(listaPageWeb);
  //renderiza el array existente ya modificado en tarjetas (card) y las visualiza en el navegador.

  //Otra formaEjemplo  await renderAllListArrayToCard(await convertJsonToArrayJson(catalogJson));

  vincularBarraDeBusqueda();
  //ejecuta la barra de busqueda vinculada

  runFiltro();
  //Ejecuta el filtro de los links del NavBar
}




//-----------------Ejecutar-----------------

runApp();

