var map;





function iniciar(){
    
	initMap();
    //load_data();
   
    get_stations();
    //addOneLine(todaslaslineas);
    //addOneLine(estaciones_testlogo2);
    //addAllStations(stations);
    filtro_de_linea();
}

//Iniciar el mapa
function initMap() {
    
	var posicion = {lat: 40.372636, lng: -3.91934};
    
    map = L.map('map').setView([40.4167278, -3.7033387], 11);

    L.mylayer =[];
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18, 
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        
		id: 'mapbox.streets'
	}).addTo(map);
    
    /*
    //Mostrar coords en un popup
    map.on('click', function(e) {        
        L.popup()
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);      
    });
	*/
    
}

//Cargar datos( DEPRECADO )
function load_data() {
    
    //Creo el custom icon
    var metro = L.Icon.extend({
    options: {
        iconSize:     [40, 30],
        shadowSize:   [50, 64],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -6]
    }
    });
    
    //Custom icon
	var icono_metro = new metro({iconUrl: './images/MetroMadridLogo.png'});
    
    //Array de posiciones para las estaciones
    var lat_long = [[-3.751906344267269, 40.372002421685401], [40.364224011811579,-3.756902710588123], [40.357953128926525 ,-3.777825849896004]];
    
    //Pintamos las estaciones
    for (var i=0;i<lat_long.length;i++){
        var ll= lat_long[i];
        L.marker(ll,{draggable: false, icon: icono_metro}).addTo(map).bindPopup("Estacion : <br/>" + 'Latitud: ' + lat_long[i][0] + '<br/>' + 'Longitud: '+ lat_long[i][1]).openPopup();
    }
    
    //Función que pinta las lineas de metro
    for (var i=0;i<lat_long.length;i++){
        var d1= lat_long[i];
        var d2= lat_long[i+1];
        var pointList = [d1, d2];
        var firstpolyline = new L.Polyline(pointList, {
            color: 'red',
            weight: 3,
            opacity: 1,
            smoothFactor: 1
        });
        firstpolyline.addTo(map);
    }
}






var intercambiadores = 
        {
            intercambiadores: 'Chamartin',
            lat_long: [40.372636, -3.91934],
            lines: [1,10]
        };

        paintsIntercambiadores(intercambiadores);

function paintsIntercambiadores(intercambiadores){

    
}

//JUST IN CASE 

function centrarMap(){
	
	var comboMuns = document.getElementById("sel2");
	var seleccionada = comboMuns.value;
	
	$.get( "coords.php",{q: seleccionada}, function(data) {
		//console.log( data );
		
		// pasar de String a un array json
		var json = JSON.parse(data);
				
		json.forEach(function(obj) { 
			
			map.setView([obj.latitud, obj.longitud], 13);
			var marker = L.marker([obj.latitud, obj.longitud]).addTo(map);
		});
		
	});
	
}
/*
1.-Dividir la funcion addOneLine en dos una pa pintar las estaciones tal cual y otra para pintar las lineas (Carlos)
2.-Añadarir los botones + listeners para llamara a las funciones que contactan con el python  (Carlos)
3.-Añadir las funciones que contactan con el python (Jose+Carlos+Galle)
4.-Pintar las querys que nos llegan (Carlos + Jose)
5.-Encajar todo en el html de la presentación. (JOse)
*/
//CArgarse markers $(".leaflet-marker-icon").remove()

//CArgarse markers $(".leaflet-interactive").remove()