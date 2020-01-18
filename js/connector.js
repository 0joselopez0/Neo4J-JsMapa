

function load_lines_n4j (linea){
    var retorno;

   let promesa= $.ajax({url: "http://127.0.0.1:8100/all_lines"});
    $.when(promesa).done(function(respuesta){
        addOneLine(JSON.parse(respuesta),linea);
        
    });
    return retorno;
}
function getLinesN4j(data){
    return data;
}
function get_ruta(from,to){
    let promesa= $.ajax({url: "http://127.0.0.1:8100/"+from+"/rutas_Mas_Cortas/"+to});
    $.when(promesa).done(function(respuesta){
       
     
         addShortRun(JSON.parse(respuesta.contenido));
         document.getElementById('query').innerHTML=respuesta.query;
        
    });
}
function get_stations(){
    let promesa= $.ajax({url:'http://127.0.0.1:8100/all_Estaciones'});
    $.when(promesa).done(function(respuesta){
        console.log(respuesta);
        de_donde_a_donde(respuesta);
    })
}