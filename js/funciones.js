<script>
		
function cuentaElementosBloque(bloque){
  var lista=document.getElementById(bloque);
  nodeCount=0
  for(i=0; i<lista.childNodes.length;i++){
  	if(lista.childNodes[i].id != undefined){
  		nodeCount++
  	}
  }
  return nodeCount
}

			
function escribeLayerCapa(cuenta, tipo){
	var capa  = document.createElement("div");
	id='capa'+cuenta
	capa.setAttribute("id", id);

	document.getElementById('capa').appendChild(capa);
	cuenta++;
    document.getElementById('agregarCapa').innerHTML = '<a href="#capa" onclick="agregarCapa(\'capa\','+cuenta+');"> Agregar capa</a><br/>';
    
    
    
}
	
function agregarCapa(bloque, cuenta){
		numeroCapas=8;//maxlength=500 implica solo 8 capaes ya que el tamanio del campo es de 4000 Bytes		
		capaForm=cuentaElementosBloque(bloque);
		if(capaForm == numeroCapas){
			alert("Solo se pueden agregar "+numeroCapas+" Capas")
		}else{
			escribeLayerCapa(cuenta, 'deResgistros')
		}
}		
			

</script>