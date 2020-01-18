/*
--------------------------------------------------------------
DICCIONARIO DE COLORES Y URLS 
--------------------------------------------------------------
*/

const metro_colors =['#30a3dc','#ff0000','#FFE114','#944248','#96BF0D','#9FA4A6','#FAA64A','#FF00FF','#A3228D','#084594', '#008B43','#A49A00','#000080'];
const metro_line_icons =['./images/linea-1.svg','./images/linea-2.svg','./images/linea-3.svg','./images/linea-4.svg','./images/linea-5.svg','./images/linea-6.svg','./images/linea-7.svg','./images/linea-8.svg','./images/linea-9.svg','./images/linea-10.svg','./images/linea-11.svg','./images/linea-12.svg','./images/intercambiador.png'];


/*
--------------------------------------------------------------
CREAR ICONO 
Función para decirle al mapa que cree un icono en su lenguaje y luego le pasamos la url del mismo.
--------------------------------------------------------------
*/
function createIcon(line,esruta){
    
    
        let line_icon_metro = L.Icon.extend({
            options: {
                iconSize:     [25, 15],
                popupAnchor:  [-3, -6]
            }
            });
            if(esruta){
                 line_icon_metro = L.Icon.extend({
                    options: {
                        iconSize:     [35, 25],
                        popupAnchor:  [-3, -6]
                    }
                    });
        
            }
    
    
    if(typeof line ==='undefined'){
        
        return  new line_icon_metro({iconUrl: './images/MetroMadridLogo.png'});
    }else{
        return  new line_icon_metro({iconUrl: metro_line_icons[line]});
    }
    
}

/*
--------------------------------------------------------------
AÑADIR LINEA SINGULAR 
Función para añadir las lineas de 1 en 1 
--------------------------------------------------------------
*/


function addOneLine(lineas,numero){


    if(typeof numero != 'undefined'){
        let line_val = numero.split('_')[1];
        document.getElementById('query').innerHTML=lineas[numero].query;
        for (i in lineas[numero].start){
            





            let intercambia;
            if(lineas[numero].start[i].isInter==true)
                intercambia= createIcon(12);
        
            //Pinto estaciones de start
            let coordinates = [lineas[numero].start[i].lat , lineas[numero].start[i].long];

            L.mylayer.push(L.marker(coordinates,
            {
                draggable: false,
                icon: intercambia ||createIcon(line_val-1)
            }).addTo(map).bindPopup('<b>Estacion: </b>'
                                    + lineas[numero].start[i].name + '<br/>' +
                                    '<b>Linea: </b>' +
                                    line_val));
            
            //Pinto estaciones de end. Queda un poco sucio hacerlo asi pero no vienen ordenadas y sino queda 1 estacion sin pintar
            let coordinates2 = [lineas[numero].end[i].lat , lineas[numero].end[i].long];
            L.mylayer.push(L.marker(coordinates2,
            {
                draggable: false,
                icon: intercambia ||createIcon(line_val-1)
            }).addTo(map).bindPopup('<b>Estacion: </b>'
                                    + lineas[numero].end[i].name + '<br/>' +
                                    '<b>Linea: </b>' +
                                    line_val));
            
            for(let i=0; i<lineas[numero].start.length; i++){
            
            let start = [lineas[numero].start[i].lat , lineas[numero].start[i].long];
            let end = [lineas[numero].end[i].lat , lineas[numero].end[i].long];
            
            //Pinto lineas 
            let arrayDrawed= [start,end];
            L.mylayer.push(new L.Polyline(arrayDrawed,{
                                                        color: metro_colors[line_val-1],
                                                        weight: 3,
                                                        opacity: 1,
                                                        smoothFactor: 1
            }).addTo(map));
          
        
            }   
        }
    }else{

        for (var line in lineas){
                
            let line_val = line.split('_')[1];
            
            for (i in lineas[line].start){
                
                let intercambia;
                if(lineas[line].start[i].isInter==true)
                    intercambia= createIcon(12);
            
                //Pinto estaciones de start
                let coordinates = [lineas[line].start[i].lat , lineas[line].start[i].long];
    
                L.mylayer.push(L.marker(coordinates,
                {
                    draggable: false,
                    icon: intercambia ||createIcon(line_val-1)
                }).addTo(map).bindPopup('<b>Estacion: </b>'
                                        + lineas[line].start[i].name + '<br/>' +
                                        '<b>Linea: </b>' +
                                        line_val));
                
                //Pinto estaciones de end. Queda un poco sucio hacerlo asi pero no vienen ordenadas y sino queda 1 estacion sin pintar
                let coordinates2 = [lineas[line].end[i].lat , lineas[line].end[i].long];
                L.mylayer.push(L.marker(coordinates2,
                {
                    draggable: false,
                    icon: intercambia ||createIcon(line_val-1)
                }).addTo(map).bindPopup('<b>Estacion: </b>'
                                        + lineas[line].end[i].name + '<br/>' +
                                        '<b>Linea: </b>' +
                                        line_val));
                
                for(let i=0; i<lineas[line].start.length; i++){
                
                let start = [lineas[line].start[i].lat , lineas[line].start[i].long];
                let end = [lineas[line].end[i].lat , lineas[line].end[i].long];
                
                //Pinto lineas 
                let arrayDrawed= [start,end];
                L.mylayer.push(new L.Polyline(arrayDrawed,{
                                                            color: metro_colors[line_val-1],
                                                            weight: 3,
                                                            opacity: 1,
                                                            smoothFactor: 1
                }).addTo(map));
                
            
                }   
            }   
        }

    }

    
}
/* AÑADIR LA RUTA A SEGUIR 
Función que inserta en el mapa la ruta mas corta entre 2 estaciones

*/
function addShortRun(short){
    // let colorporparada= [];
    // for(i in short.stops_lines[0]){

    //     let control=0;
    //     short.stops_lines[0][i].stops
    //     for(j in short.stops_lines[0][i].stops){
    //         if(i=='Intercambiador'){
    //             colorporparada.push(12)
    //         }else{
    //             colorporparada.push(parseInt(i.replace(/[\[\]&]+/g, '')))
                

    //         }
    //     }
    // }
    //var layerTest= L.layerGroup().addTo(map);
    
  
   
    // console.log(colorporparada);
  
    // for( i in  L.mylayer){
    //     map.removeLayer(L.mylayer[i]);
    // }
    document.querySelector('#costellegar').innerHTML=short.totalCost[0];
    pintaendiv(short.places[0]);
    paintbuttons(short.places,short);
   
    for(i in short.places[0]){
    
        



        console.log(short.places[0][i][0]);
        let coordinates = [short.lat_long[0][i][0] , short.lat_long[0][i][1]];

        L.mylayer.push(L.marker(coordinates,
            {
                draggable: false,
               
            }).addTo(map).bindTooltip('<b> Estación '+i+1 +' </b><br>'
                                    + short.places[0][i] 
                                    ).openTooltip()  ) ;
  
    }

    for(let i=0; i<short.places[0].length-1; i++){
      
        let arrayDrawed= [short.lat_long[0][i],short.lat_long[0][i+1]];
        console.log(short.lat_long[0][i]);
        L.mylayer.push(new L.Polyline(arrayDrawed,{
                                                            color: 'black',
                                                            weight: 6,
                                                            opacity: 0.5,
                                                            smoothFactor: 1
                }).addTo(map));
                
    }
     
   
    
   
}

/**PINTA LA RUTA EN UNA DIV */
function pintaendiv(secuencia){
    let dondesepinta= document.querySelector('#comollego');
    let image= '<img src="images/arrow-logo-png-2.png" style="width:10px"><br>'
    dondesepinta.innerHTML="";
    for(let i=0; i<secuencia.length; i++){
        if(dondesepinta.innerHTML.indexOf(secuencia[i])!=-1){
            dondesepinta.innerHTML+='(Cambio de linea)<br>'+image

        }else{
            if(i==secuencia.length-1){
                dondesepinta.innerHTML+=secuencia[i]
            }else{
                dondesepinta.innerHTML+=secuencia[i]+'<br>'+image
            }
            
        }
    }

}
/*PINTA LOS BOTONES de otras rutas*/
function paintbuttons(rutas,short){
    document.querySelector('#botones_ruta').innerHTML="";
let intento= Object.values(rutas);
console.log(intento.length);
    for(let i=0 ;i< intento.length; i++){
       
        let boton= document.createElement('button');
        boton.name="otrasrutas";
        boton.classList.add("btn");
        boton.textContent="Ruta "+i;
        boton.addEventListener('click', function(){
            
            addShortRunCustom(short,i);
        });
        
        document.querySelector('#botones_ruta').appendChild(boton);
    }

}
/**Lo mismo que la de arriba pero con custom shit */
function addShortRunCustom(short,cus){
    for( i in  L.mylayer){
        map.removeLayer(L.mylayer[i]);
    }
    console.log(short);
    //for(i in  L.mylayer) 
       
    //$(".leaflet-marker-icon").remove()
  

    //document.querySelector('#costellegar').innerHTML=short.totalCost[cus];
    
    console.log(cus);
    pintaendiv(short.places[cus]);
    for(i in short.places[cus]){
        //Controlo que icono mostrar 
        
        

        let coordinates = [short.lat_long[cus][i][0] , short.lat_long[cus][i][1]];

        L.mylayer.push(L.marker(coordinates,
        {
            draggable: false,
           
        }).addTo(map).bindTooltip('<b> Estación '+i+1 +' </b><br>'
                                + short.places[cus][i] 
                                ).openTooltip());
  
    }

    for(let i=0; i<short.places[cus].length-1; i++){
      
        let arrayDrawed= [short.lat_long[cus][i],short.lat_long[cus][i+1]];
        console.log(short.lat_long[cus][i]);
        L.mylayer.push(new L.Polyline(arrayDrawed,{
                                                            color: 'black',
                                                            weight: 6,
                                                            opacity: 0.5,
                                                            smoothFactor: 1
                }).addTo(map));
                
    }
    
   
}

/*
--------------------------------------------------------------
AÑADIR TODAS LAS ESTACIONES
Función para pintar todas las estaciones a saco
--------------------------------------------------------------
*/
//Empleo un Json con un nuevo campo "linea" por estacion para pintar cada icono adecuadamente
//Tambien he colocado adecuadamente el popup ya que se mostraba mal en el mapa(<br>)
function addAllStations(stations){
    
    for(i in stations.stations){
        //Compruebo intercambiador 
        let intercambia;
        if(stations.stations[i].isInter==true)
            intercambia= createIcon(12);
        //Pinto estaciones
        let coordinates = stations.stations[i].lat_long;
        let p_line;
        if (stations.stations[i].isInter){
            p_line = 'Intercambiador';
        }else{
            p_line = stations.stations[i].line;
        }
        L.mylayer.push( L.marker(coordinates,
            {
                draggable: false,
                icon: intercambia || createIcon(stations.stations[i].line-1)
            }).addTo(map).bindPopup('<b>Estacion: </b>'   
                                    +stations.stations[i].name + '<br/>' +
                                    '<b>Linea: </b>' +
                                    p_line));
    }
}