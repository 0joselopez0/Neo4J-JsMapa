var estaciones_testlogo= {
    line: 1,
  
    stations: [
        {
            name: 'Estacion1',
            lat_long: [40.372636, -3.91934],
            isInter: false
        },
        {
            name: 'Estacion2',
            lat_long: [40.35701, -3.900232],
            isInter: true
        },
        {
            name: 'Estacion3',
            lat_long: [40.374667, -3.881006],
            isInter: false
        }
    ]


}
var estaciones_testlogo2= {
    line: 5,
    
    stations: [
        {
            name: 'Estacion1',
            lat_long: [40.472636, -3.91934],
            isInter: false
        },
        {
            name: 'Estacion2',
            lat_long: [40.35701, -3.900232],
            isInter: true
        },
        {
            name: 'Estacion3',
            lat_long: [40.474667, -3.881006],
            isInter: false
        }
    ]


}
//Asi deberia ser el array de estaciones
var stations= {
    stations: [
        {
            name: 'Estacion1',
            lat_long: [40.372636, -3.91934],
            isInter: false,
            line: 12
        },
        {
            name: 'Estacion2',
            lat_long: [40.35701, -3.900232],
            isInter: true,
            line: 2
        },
        {
            name: 'Estacion3',
            lat_long: [40.374667, -3.881006],
            isInter: false,
            line: 4
        },
        {
            name: 'Estacion1',
            lat_long: [40.472636, -3.91934],
            isInter: false,
            line: 3
        },
        {
            name: 'Estacion2',
            lat_long: [40.35701, -3.900232],
            isInter: true,
            line: 2
        },
        {
            name: 'Estacion3',
            lat_long: [40.474667, -3.881006],
            isInter: false,
            line: 5
        }
    ]
}


var lineas ={
    linea_11: {
        end: [
            {
                id_estacion: 208,
                lat: "40.375868636656733",
                long: "-3.734168856530466",
                name: "PAN BENDITO"
            },
            {
                id_estacion: 255,
                lat: "40.372002421685401",
                long: "-3.751906344267269",
                name: "CARABANCHEL ALTO"
            },
            {
                id_estacion: 305,
                lat: "40.357953128926525",
                long: "-3.777825849896004",
                name: "LA FORTUNA"
            },
            {
                id_estacion: 207,
                lat: "40.380833614731245",
                long: "-3.727900249121708",
                name: "ABRANTES"
            },
            {
                id_estacion: 256,
                lat: "40.364224011811579",
                long: "-3.756902710588123",
                name: "LA PESETA"
            },
            {
                id_estacion: 254,
                lat: "40.37359884105576",
                long: "-3.739102929190019",
                name: "SAN FRANCISCO"
            }
        ],
        start: [
            {
                id_estacion: 207,
                lat: "40.380833614731245",
                long: "-3.727900249121708",
                name: "ABRANTES"
            },
            {
                id_estacion: 254,
                lat: "40.37359884105576",
                long: "-3.739102929190019",
                name: "SAN FRANCISCO"
            },
            {
                id_estacion: 256,
                lat: "40.364224011811579",
                long: "-3.756902710588123",
                name: "LA PESETA"
            },
            {
                id_estacion: 206,
                lat: "40.384600790382066",
                long: "-3.718252093606752",
                name: "PLAZA ELIPTICA"
            },
            {
                id_estacion: 255,
                lat: "40.372002421685401",
                long: "-3.751906344267269",
                name: "CARABANCHEL ALTO"
            },
            {
                id_estacion: 208,
                lat: "40.375868636656733",
                long: "-3.734168856530466",
                name: "PAN BENDITO"
            }
        ]
    },
    linea_12: {
        end: [
    {
    id_estacion: 213,
    lat: "40.335122976598605",
    long: "-3.872179606424482",
    name: "UNIVERSIDAD REY JUAN CARLOS"
    },
    {
    id_estacion: 216,
    lat: "40.316524281645606",
    long: "-3.874712477719213",
    name: "HOSPITAL DE MOSTOLES"
    },
    {
    id_estacion: 220,
    lat: "40.285175696495507",
    long: "-3.80632299228354",
    name: "PARQUE EUROPA"
    },
    {
    id_estacion: 236,
    lat: "40.336163147895952",
    long: "-3.775873625300736",
    name: "SAN NICASIO"
    },
    {
    id_estacion: 222,
    lat: "40.286835800532621",
    long: "-3.786974043457501",
    name: "PARQUE DE LOS ESTADOS"
    },
    {
    id_estacion: 225,
    lat: "40.300813961926536",
    long: "-3.736636971712462",
    name: "ALONSO DE MENDOZA"
    },
    {
    id_estacion: 218,
    lat: "40.296812664055288",
    long: "-3.837683457120192",
    name: "LORANCA"
    },
    {
    id_estacion: 221,
    lat: "40.282675775140497",
    long: "-3.798906900782018",
    name: "FUENLABRADA CENTRAL"
    },
    {
    id_estacion: 233,
    lat: "40.326602721384234",
    long: "-3.75942499130863",
    name: "CASA DEL RELOJ"
    },
    {
    id_estacion: 214,
    lat: "40.328500218331541",
    long: "-3.863542175638656",
    name: "MOSTOLES CENTRAL"
    },
    {
    id_estacion: 230,
    lat: "40.329072367482894",
    long: "-3.729633180489337",
    name: "EL BERCIAL"
    },
    {
    id_estacion: 223,
    lat: "40.288741769149418",
    long: "-3.756823356667385",
    name: "ARROYO CULEBRO"
    },
    {
    id_estacion: 232,
    lat: "40.334749107830561",
    long: "-3.75265895099191",
    name: "JULIAN BESTEIRO"
    },
    {
    id_estacion: 226,
    lat: "40.309927909041662",
    long: "-3.734025028929001",
    name: "GETAFE CENTRAL"
    },
    {
    id_estacion: 228,
    lat: "40.318623157885447",
    long: "-3.709854042300059",
    name: "EL CASAR"
    },
    {
    id_estacion: 229,
    lat: "40.324227014937343",
    long: "-3.718197864524398",
    name: "LOS ESPARTALES"
    },
    {
    id_estacion: 235,
    lat: "40.328985230945548",
    long: "-3.771536996688428",
    name: "LEGANES CENTRAL"
    },
    {
    id_estacion: 219,
    lat: "40.285755485877637",
    long: "-3.816416808685618",
    name: "HOSPITAL DE FUENLABRADA"
    },
    {
    id_estacion: 212,
    lat: "40.345894380413725",
    long: "-3.849338616599969",
    name: "PARQUE OESTE"
    },
    {
    id_estacion: 215,
    lat: "40.321676964744668",
    long: "-3.864889402970309",
    name: "PRADILLO"
    },
    {
    id_estacion: 234,
    lat: "40.321770270088287",
    long: "-3.767973047304618",
    name: "HOSPITAL SEVERO OCHOA"
    },
    {
    id_estacion: 227,
    lat: "40.31180236485632",
    long: "-3.722240122704442",
    name: "JUAN DE LA CIERVA"
    },
    {
    id_estacion: 217,
    lat: "40.309030055836459",
    long: "-3.864021197226151",
    name: "MANUELA MALASAÑA"
    },
    {
    id_estacion: 224,
    lat: "40.293243846316578",
    long: "-3.745761040443378",
    name: "CONSERVATORIO"
    },
    {
    id_estacion: 231,
    lat: "40.336638243777507",
    long: "-3.740184882914837",
    name: "EL CARRASCAL"
    },
    {
    id_estacion: 211,
    lat: "40.350084340279416",
    long: "-3.831778620631979",
    name: "ALCORCON CENTRAL"
    }
],
        start: [
    {
    id_estacion: 212,
    lat: "40.345894380413725",
    long: "-3.849338616599969",
    name: "PARQUE OESTE"
    },
    {
    id_estacion: 215,
    lat: "40.321676964744668",
    long: "-3.864889402970309",
    name: "PRADILLO"
    },
    {
    id_estacion: 219,
    lat: "40.285755485877637",
    long: "-3.816416808685618",
    name: "HOSPITAL DE FUENLABRADA"
    },
    {
    id_estacion: 235,
    lat: "40.328985230945548",
    long: "-3.771536996688428",
    name: "LEGANES CENTRAL"
    },
    {
    id_estacion: 221,
    lat: "40.282675775140497",
    long: "-3.798906900782018",
    name: "FUENLABRADA CENTRAL"
    },
    {
    id_estacion: 224,
    lat: "40.293243846316578",
    long: "-3.745761040443378",
    name: "CONSERVATORIO"
    },
    {
    id_estacion: 217,
    lat: "40.309030055836459",
    long: "-3.864021197226151",
    name: "MANUELA MALASAÑA"
    },
    {
    id_estacion: 220,
    lat: "40.285175696495507",
    long: "-3.80632299228354",
    name: "PARQUE EUROPA"
    },
    {
    id_estacion: 232,
    lat: "40.334749107830561",
    long: "-3.75265895099191",
    name: "JULIAN BESTEIRO"
    },
    {
    id_estacion: 213,
    lat: "40.335122976598605",
    long: "-3.872179606424482",
    name: "UNIVERSIDAD REY JUAN CARLOS"
    },
    {
    id_estacion: 229,
    lat: "40.324227014937343",
    long: "-3.718197864524398",
    name: "LOS ESPARTALES"
    },
    {
    id_estacion: 222,
    lat: "40.286835800532621",
    long: "-3.786974043457501",
    name: "PARQUE DE LOS ESTADOS"
    },
    {
    id_estacion: 231,
    lat: "40.336638243777507",
    long: "-3.740184882914837",
    name: "EL CARRASCAL"
    },
    {
    id_estacion: 225,
    lat: "40.300813961926536",
    long: "-3.736636971712462",
    name: "ALONSO DE MENDOZA"
    },
    {
    id_estacion: 227,
    lat: "40.31180236485632",
    long: "-3.722240122704442",
    name: "JUAN DE LA CIERVA"
    },
    {
    id_estacion: 228,
    lat: "40.318623157885447",
    long: "-3.709854042300059",
    name: "EL CASAR"
    },
    {
    id_estacion: 234,
    lat: "40.321770270088287",
    long: "-3.767973047304618",
    name: "HOSPITAL SEVERO OCHOA"
    },
    {
    id_estacion: 218,
    lat: "40.296812664055288",
    long: "-3.837683457120192",
    name: "LORANCA"
    },
    {
    id_estacion: 211,
    lat: "40.350084340279416",
    long: "-3.831778620631979",
    name: "ALCORCON CENTRAL"
    },
    {
    id_estacion: 214,
    lat: "40.328500218331541",
    long: "-3.863542175638656",
    name: "MOSTOLES CENTRAL"
    },
    {
    id_estacion: 233,
    lat: "40.326602721384234",
    long: "-3.75942499130863",
    name: "CASA DEL RELOJ"
    },
    {
    id_estacion: 226,
    lat: "40.309927909041662",
    long: "-3.734025028929001",
    name: "GETAFE CENTRAL"
    },
    {
    id_estacion: 216,
    lat: "40.316524281645606",
    long: "-3.874712477719213",
    name: "HOSPITAL DE MOSTOLES"
    },
    {
    id_estacion: 223,
    lat: "40.288741769149418",
    long: "-3.756823356667385",
    name: "ARROYO CULEBRO"
    },
    {
    id_estacion: 230,
    lat: "40.329072367482894",
    long: "-3.729633180489337",
    name: "EL BERCIAL"
    },
    {
    id_estacion: 210,
    lat: "40.349687281522193",
    long: "-3.821195732552155",
    name: "PARQUE LISBOA"
    }
]
    }
}
