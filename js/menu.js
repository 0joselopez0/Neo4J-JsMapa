/*
CÓDIGO DEL MENÚ 
Aquí van los controles del menú
*/

//Filtro por línea
function filtro_de_linea(){
    // Cargo las líneas en el select

    let filtro_de_linea= document.querySelector('#filtro-lineas');

    for (let opcion= 0; opcion<12; opcion++){
        let temp_option = document.createElement("option");
        temp_option.text='linea '+(opcion+1);
        temp_option.value=(opcion+1);
        filtro_de_linea.appendChild(temp_option);   
    }

    //Bindeo el listener

    filtro_de_linea.addEventListener('change',function(){
        //Añado el logo 
        let logo_linea= document.querySelector('#logo_linea');
        logo_linea.src='./images/linea-'+this.value+'.svg';
        for( i in  L.mylayer){
         map.removeLayer(L.mylayer[i]);
     }
        console.log(filtro_de_linea.options[filtro_de_linea.selectedIndex].text.replace(' ','_'));
        load_lines_n4j(filtro_de_linea.options[filtro_de_linea.selectedIndex].text.replace(' ','_'));
        
        //Llamo a Galle para que me devuelva la línea
    })

}
function cargatodo(){
    $(".leaflet-interactive").remove();
    load_lines_n4j();
}

function de_donde_a_donde(estaciones){

   
    estaciones.contenido =  new Set(estaciones.contenido);
    estaciones.contenido= [...estaciones.contenido];
    let de= document.querySelector('#input-origen');
    let a= document.querySelector('#input-destino');
    for( i in estaciones.contenido){

        let temp_option = document.createElement("option");
        temp_option.text=estaciones.contenido[i].toLowerCase();
        temp_option.value=estaciones.contenido[i]
        
        a.appendChild(temp_option);
    }
    for( i in estaciones.contenido){

        let temp_option = document.createElement("option");
        temp_option.text=estaciones.contenido[i].toLowerCase();
        temp_option.value=estaciones.contenido[i]

        de.appendChild(temp_option); 
    }

  

}



function recover_data_for_paint(){
    let desde= document.querySelector('#input-origen').options[document.querySelector('#input-origen').selectedIndex].value;
    console.log('DESDE')
    console.log(desde);


    let hasta= document.querySelector('#input-destino').options[document.querySelector('#input-destino').selectedIndex].value;

  console.log('HASTA')
    console.log(hasta);
    get_ruta(desde,hasta);

}