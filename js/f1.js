  function recuperarDatos(url,contenidoN ,callback){
		$.ajax({

          url: url,
          type: 'GET',
          dataType:"jsonp",
          success: function(data) {
            callback(data, contenidoN);
            mediaQueries(); //Para garantizar que la información se muestra adaptada al dispositivo desde el principio
            
          },
          error: function(jqXHR, textStatus, error) {
            alert( "error: " + jqXHR.responseText);
          }
        });
	}


  /////////////////////////////////////
  //Funciones generadoras de gráficos//
  /////////////////////////////////////

  //Estos 2 primeros gráficos generan información estática para mostrar mayor contenido en las secciones gráficas
  function generarGraficoLine(contenidoN, titulo)  //contenidoN = número del id "contenido" que albergará el gráfico 
  {
    

    var opcionesChart = 
      {
          responsive:true,
          scaleGridLineColor : "rgba(236, 240, 241, .2)",
          scaleLineColor: "rgba(236, 240, 241, .2)",
          scaleFontColor: "#ecf0f1",
          scaleBeginAtZero: true
      }

      var data = {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
          datasets: [
              {
                  label: "Hamilton",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [25, 18, 25, 25, 18, 15, 25,18, 25, 8, 25, 25, 0, 25, 25, 25, 18]
              },
              {
                  label: "Rosberg",
                  fillColor: "rgba(93, 149, 177,0.2)",
                  strokeColor: "rgba(93, 149, 177,1)",
                  pointColor: "rgba(93, 149, 177,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [18, 15, 18, 15, 25, 25, 18, 25, 18, 4, 18, 0, 12, 18, 0, 18, 25]
              },
              {
                  label: "Vettel",
                  fillColor: "rgba(26, 188, 156,0.2)",
                  strokeColor: "rgba(26, 188, 156,1)",
                  pointColor: "rgba(26, 188, 156,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [15, 25, 15, 10, 15, 18, 10, 12, 15, 25, 0, 18, 25, 15, 19, 15, 0]
              }
          ]
      };

      //Estuctura del div #contenidoN
      $('#contenido' + contenidoN).append('<h2>' + titulo + '</h2><div><canvas id="chart' + contenidoN + '"></canvas></div>' +
                                          '<div class="leyenda"></div>');
      $('#contenido' + contenidoN).show();

      //Creación de gráfica y leyenda
      var ctx = $('#chart' + contenidoN).get(0).getContext("2d");
      var grafica = new Chart(ctx).Line(data, opcionesChart);
      var leyenda = grafica.generateLegend();
      $('#contenido' + contenidoN + ' .leyenda').append(leyenda);
      
  }

  function generarGraficoLine2(contenidoN, titulo)  //contenidoN = número del id "contenido" que albergará el gráfico 
  {
    

    var opcionesChart = 
      {
          responsive:true,
          scaleGridLineColor : "rgba(236, 240, 241, .2)",
          scaleLineColor: "rgba(236, 240, 241, .2)",
          scaleFontColor: "#ecf0f1",
          scaleBeginAtZero: true
      }

      var data = {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
          datasets: [
              {
                  label: "Hamilton",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [25, 43, 68, 93, 111, 126, 151,169, 194, 202, 227, 252, 252, 277, 302, 327, 345]
              },
              {
                  label: "Rosberg",
                  fillColor: "rgba(93, 149, 177,0.2)",
                  strokeColor: "rgba(93, 149, 177,1)",
                  pointColor: "rgba(93, 149, 177,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [18, 33, 52, 67, 92, 117, 135, 160, 178, 182, 200, 200, 212, 230, 230, 248, 272]
              },
              {
                  label: "Vettel",
                  fillColor: "rgba(26, 188, 156,0.2)",
                  strokeColor: "rgba(26, 188, 156,1)",
                  pointColor: "rgba(26, 188, 156,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [15, 40, 55, 65, 80, 98, 108, 120, 135, 160, 160, 178, 203, 218, 237, 251, 251]
              }
          ]
      };

      //Estuctura del div #contenidoN
      $('#contenido' + contenidoN).append('<h2>' + titulo + '</h2><div><canvas id="chart' + contenidoN + '"></canvas></div>' +
                                          '<div class="leyenda"></div>');
      $('#contenido' + contenidoN).show();

      //Creación de gráfica y leyenda
      var ctx = $('#chart' + contenidoN).get(0).getContext("2d");
      var grafica = new Chart(ctx).Line(data, opcionesChart);
      var leyenda = grafica.generateLegend();
      $('#contenido' + contenidoN + ' .leyenda').append(leyenda);
      
  }

  //Gráfico de barras con información dinámica.
  function generarGraficoBar(dataChart, contenidoN, titulo)  //contenidoN = número del id "contenido" que albergará el gráfico 
  {  

    var opcionesChart = 
      {
          responsive:true,
          scaleGridLineColor : "rgba(236, 240, 241, .2)",
          scaleLineColor: "rgba(236, 240, 241, .2)",
          scaleFontColor: "#ecf0f1",
          scaleBeginAtZero: true  //vigilar si es exclusiva
      }

      

      //Estuctura del div #contenidoN
      $('#contenido' + contenidoN).append('<h2>' + titulo + '</h2><div><canvas id="chart' + contenidoN + '"></canvas></div>' +
                                          '<div class="leyenda"></div>');
      $('#contenido' + contenidoN).show();

      //Creación de gráfica y leyenda
      var ctx = $('#chart' + contenidoN).get(0).getContext("2d");
      var grafica = new Chart(ctx).Bar(dataChart, opcionesChart);
      var leyenda = grafica.generateLegend();
      $('#contenido' + contenidoN + ' .leyenda').append(leyenda);  
  }


  function generarMapa(idMapa, latitud, longitud, circuito)
  {

    var mapDiv = document.getElementById(idMapa);

    var posicion = new google.maps.LatLng(latitud, longitud);

    var options = 
    {
    center: posicion,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapa = new google.maps.Map(mapDiv, options);


    var marker = new google.maps.Marker({
    position: posicion,
    map: mapa,
    title: circuito
    });     
  }


  ///////////////////////////////////////
  //Funciones reseteadoras de contenido//
  ///////////////////////////////////////

  function activarTab(id)   
  {
    $('header a').removeClass("actual");
    $('#'+id).addClass("actual");
  }

  function limpiarContenido()
  {
    $('#titulo-tab').empty();
    $('#contenido1').empty();
    $('#contenido2').empty();
    $('#contenido3').empty();
    $('#contenido4').empty();
    $('#contenido5').empty();
    $('#contenido6').empty();

    $('[id^=contenido]:empty').hide(); //Oculta los contenidos vacíos
  }

  function mostrarContenido()
  {
    $('[id^=contenido]').not(':empty').show(); //Muestra los contenidos con información
  }

  
  ///////////////////////////////////////////////
  // Contenedores de funciones de cada sección //
  ///////////////////////////////////////////////
  
  function datosGeneral()
  {
    NProgress.start(); //Inicia la barra de loading

    //Reseteo contenido
    limpiarContenido();
    activarTab('general'); 
    $('#titulo-tab').append('<h1>General</h1>');

    //Datos General
    recuperarDatos('http://ergast.com/api/f1/current.json', 2, calendario);
    recuperarDatos('http://ergast.com/api/f1/current/driverStandings.json', 3, clasificacion);
    generarGraficoLine(4, "TOP3 Ptos/Carrera 2015");

    mostrarContenido();
    NProgress.done(); //Termina la barra de loading
  }


  function datosStats()
  {
    NProgress.start(); //Inicia la barra de loading
    //Reseteo contenido
    limpiarContenido();
    $('#titulo-tab').append('<h1>Stats</h1>');
    $('#stats').on('click', function(){ activarTab('stats'); });
    activarTab('stats'); 

    //Datos Stats  
    generarGraficoLine2(1, "Top3 2015");
    recuperarDatos('http://ergast.com/api/f1/current.json', 4, generarSelectStats);
    mostrarContenido();
    NProgress.done(); //Termina la barra de loading
  }


  function datosPilotos()
  {
    NProgress.start(); //Inicia la barra de loading
    //Reseteo contenido
    limpiarContenido();
    $('#titulo-tab').append('<h1>Pilotos</h1>');
    activarTab('pilotos'); 

    //Datos Pilotos
    
    recuperarDatos('http://ergast.com/api/f1/current/driverStandings.json', 1, graficoBarPilotos); 
    recuperarDatos('http://ergast.com/api/f1/current/driverStandings.json', 4, clasificacion);
    mostrarContenido();
    NProgress.done(); //Termina la barra de loading
  }


  function datosCircuitos()
  {
    NProgress.start(); //Inicia la barra de loading
    //Reseteo contenido
    limpiarContenido();
    $('#titulo-tab').append('<h1>Circuitos</h1>');
    activarTab('circuitos');

    //Datos Circuitos
    recuperarDatos('http://ergast.com/api/f1/current/circuits.json', 1, circuitos);
    recuperarDatos('http://ergast.com/api/f1/current/circuits.json', 4, generarSelectMapas);

    mostrarContenido();
    NProgress.done(); //Termina la barra de loading
  }

  //////////////////////////////////
  //Funciones generadoras de datos//
  //////////////////////////////////

  function calendario(data, contenidoN) 
  {
    var carreras = data.MRData.RaceTable.Races;
    var temporada = data.MRData.RaceTable.season;

    
    $('#contenido' + contenidoN).append('<h2>Calendario ' + temporada + '</h2>');
    $('#contenido' + contenidoN).append('<table class="table table-striped indiceNumerico"><thead><tr><th>N.</th><th class="hideXS">Circuito</th><th>Fecha</th>' + 
                            '<th>Hora</th><th>País</th></tr></thead><tbody>');

    for (var i=0; i < carreras.length; i++)
    {
      var carrera = carreras[i];
      $('#contenido' + contenidoN + ' table')
      .append('<tr><td>' + carrera.round + '</td><td class="hideXS">' + carrera.Circuit.circuitName + '</td><td>' + carrera.date + 
              '</td><td>'  + carrera.time + '</td><td>' + 
              '<img src="icons/paises/' + carrera.Circuit.Location.country + '.png" alt="' + carrera.Circuit.Location.country +'" height="32" width="32">' + 
              ' <span class="hideXS">' + carrera.Circuit.Location.country + '</span></td></tr>');
        
    }

    $('#contenido' + contenidoN + ' table').append('</tbody></table>');

  }


  function clasificacion(data, contenidoN) 
  {
    var pilotos = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    var temporada = data.MRData.StandingsTable.StandingsLists[0].season;


    
    $('#contenido' + contenidoN).append('<h2>Clasificación ' + temporada +'</h2>');
    $('#contenido' + contenidoN).append('<table class="table table-striped indiceNumerico"><thead><tr><th>Pos.</th><th>Piloto</th><th>Puntos</th>' + 
                            '<th class="hideXS">Escudería</th></tr></thead><tbody>');

    for (var i=0; i < pilotos.length; i++)
    {
      var piloto = pilotos[i];

      $('#contenido' + contenidoN + ' table')
      .append('<tr><td>' + (i+1) + '</td><td>' + piloto.Driver.givenName + ' ' + piloto.Driver.familyName + 
              '</td><td>'  + piloto.points + '</td><td class="hideXS">' + piloto.Constructors[0].name + '</td></tr>');
        
    }
    $('#contenido' + contenidoN + ' table').append('</tbody></table>');
    
  }


  function generarClasificacionAnio(anio, contenidoN)
  {
    $('#contenido' + contenidoN + ' table').prev().remove();
    $('#contenido' + contenidoN + ' table').remove();

    recuperarDatos('http://ergast.com/api/f1/' + anio +'/driverStandings.json', 4, clasificacion);

  }


  function generarSelectStats(data, contenidoN)
  {
    var temporadaActual = data.MRData.RaceTable.season;

    $('#contenido' + contenidoN).append('<h2>Temporadas</h2> <select id="selectAnioClasificacion" class="form-control">');

    for (var i = temporadaActual; i >= 1950; i--) 
    {
      $('#contenido' + contenidoN + ' #selectAnioClasificacion').append('<option value="' + i + '">' + i + 
                                                               '</option>');
    }
    $('#contenido' + contenidoN).append('</select>');

    recuperarDatos('http://ergast.com/api/f1/' + temporadaActual +'/driverStandings.json', contenidoN, clasificacion);

    $("#selectAnioClasificacion").on('change', function(){ generarClasificacionAnio(this.value, contenidoN);});

  }


  function graficoBarPilotos(data, contenidoN)
  {
    var pilotos = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    var nombres = [];
    var puntos = [];

    for (var i=0; i < pilotos.length; i++)
    {
      var piloto = pilotos[i];
      nombres[i] = piloto.Driver.code;
      puntos[i] = piloto.points;
    }

    var dataChart = {
          labels: nombres,
          datasets: [
              {
                  label: "Puntos",
                  fillColor: "rgba(26, 188, 156,0.2)",
                  strokeColor: "rgba(26, 188, 156,1)",
                  pointColor: "rgba(26, 188, 156,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: puntos
              }
          ]
      };

      generarGraficoBar(dataChart, contenidoN, "Gráfico pilotos");
  }
    
  function pilotos(data, contenidoN) 
  {
    var pilotos = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;


    $('#contenido' + contenidoN).empty();
    $('#contenido' + contenidoN).append('<h2>Clasificación Pilotos</h2>');
    $('#contenido' + contenidoN).append('<table class="table table-striped">');

    for (var i=0; i < pilotos.length; i++)
    {
      var piloto = pilotos[i];
      $('#contenido' + contenidoN + ' table')
      .append('<tr><td>' + (i+1) + '</td><td>' + piloto.Driver.givenName + " " + piloto.Driver.familyName + 
              " </td><td> " + piloto.points + "  </td><td>" + piloto.Constructors[0].name + '</td></tr>');      
    }
  }


  function circuitos(data, contenidoN) 
  {
    
    var circuitos = data.MRData.CircuitTable.Circuits;
    $('#contenido' + contenidoN).empty().append('<h2>Circuitos</h2>' + '<table class="table table-striped">' +
                                                '<thead><tr><th>Circuito</th><th>Ubicación</th><th class="hideXS">' + 
                                                'Información</th></tr></thead><tbody>');
    for (var i=0; i < circuitos.length; i++) 
    {
      $('#contenido' + contenidoN + ' table').append('<tr><td>' + circuitos[i].circuitName + '<td>' + 
                                                        '<img src="icons/paises/' + circuitos[i].Location.country + 
                                                      '.png" alt="' + circuitos[i].Location.country +'" height="32" width="32"><span class="hideXS"> ' + 
                                                      circuitos[i].Location.locality + ', ' + circuitos[i].Location.country +
                                                      '</span></td><td class=hideXS>' +  '<a href="' + circuitos[i].url + 
                                                      '" target="_blank">Wikipedia</a></td></tr>');
    }
    $('#contenido' + contenidoN).append('</tbody></table>');
  
  }



  function generarMapaCircuito(circuito)
  {
 
    var circuito = circuito.split(",");

    generarMapa('mapaCircuito', circuito[0], circuito[1], circuito[2]);
  }

  function generarSelectMapas(data, contenidoN)
  {
    var circuitos = data.MRData.CircuitTable.Circuits;
    $('#contenido' + contenidoN).append('<h2>Mapas</h2> <select id="selectMapaCircuito" class="form-control">');

    for (var i=0; i < circuitos.length; i++) 
    {
      circuito = circuitos[i];
      valor = [circuito.Location.lat, circuito.Location.long, circuito.circuitName];

      $('#contenido' + contenidoN + ' #selectMapaCircuito').append('<option value="' + valor + '">' + circuito.circuitName + ' (' +
                                                                circuito.Location.locality + ', ' + circuito.Location.country + 
                                                                ')</option>');
    }
    $('#contenido' + contenidoN).append('</select>');
    $('#contenido' + contenidoN).append('<div id="mapaCircuito"</div>');
    generarMapa('mapaCircuito', circuitos[0].Location.lat, circuitos[0].Location.long, circuitos[0].circuitName);
    $("#selectMapaCircuito").on('change', function(){ generarMapaCircuito(this.value);});
  }

  function funcion(nombre)
  {
    $('#prueba').append('<h2>'+nombre+'</h2>');
  }



  function gestos(direccion)
  { 
    
    tabActual = $('.actual .letrasNav').text();
    switch(direccion)
    {
      case "izquierda":
        switch(tabActual)
        {
          case "General":
          datosStats();
          break;

          case "Stats":
          datosPilotos();
          break;

          case "Pilotos":
          datosCircuitos();
          break;

          case "Circuitos":
          break;
        }
      break;


    case "derecha":
      switch(tabActual)
        {
          case "General":
          break;

          case "Stats":
          datosGeneral();
          break;

          case "Pilotos":
          datosStats();
          break;

          case "Circuitos":
          datosPilotos();
          break;
        }
      break;

    

    case "doble":
      switch(tabActual)
        {
          case "General":
          datosStats();
          break;

          case "Stats":
          datosPilotos();
          break;

          case "Pilotos":
          datosCircuitos();
          break;

          case "Circuitos":
          datosGeneral();
          break;
        }
      break;

    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    (function(){

      var touch = $('body');

      $(document).ready(function(){ datosGeneral(); });

      $('#general').on('click', function(){ datosGeneral(); });
      $('#stats').on('click', function(){ datosStats(); });
      $('#pilotos').on('click', function(){ datosPilotos(); });
      $('#circuitos').on('click', function(){ datosCircuitos(); });


      //Gestos táctiles
      touch.enableTouch({useMouse: false});

      touch.on('swipeLeft', function() { gestos("izquierda"); });
      touch.on('swipeRight', function() { gestos("derecha"); });
      touch.on('doubleTap', function() { gestos("doble"); });

      
    })();
