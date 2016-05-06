function mediaQueries()
{
	// Tamaño XS
enquire.register("screen and (max-width:767px)", function() 
{ 
    $('.letrasNav').hide();
    $('.hideXS').hide();
    $('#titulo-tab').show();


    // Vertical 
    enquire.register("screen and (orientation: portrait)", function()
    {
    $('#alertas #alerta-horizontal').hide();
    $('#alertas #alerta-vertical').show();

    $('div[id^=contenido]:has(canvas)').hide();
    $('div[id^=contenido]:has(select)').hide();
    $('div[id^=contenido]:has(table)').show();


   

    })

	// Horizontal 
    enquire.register("screen and (orientation: landscape)", function()
    {
    	$('#alertas #alerta-vertical').hide();
    	$('#alertas #alerta-horizontal').show();

        $('div[id^=contenido]:has(table)').hide();
        $('div[id^=contenido]:has(canvas)').show();
        $('div[id^=contenido]:has(select)').show();



    })
})

// Tamaño SM
enquire.register("screen and (min-width:768px) and (max-width:991px)", function() 
{ 
    $('.letrasNav').show();
    $('.hideXS').show();
    $('#titulo-tab').hide();

    // Vertical 
    enquire.register("screen and (orientation: portrait)", function()
    {
	    $('#alertas #alerta-horizontal').hide();
	    $('#alertas #alerta-vertical').show();

        $('div[id^=contenido]:has(canvas)').hide();
        $('div[id^=contenido]:has(select)').hide();
        $('div[id^=contenido]:has(table)').show();


 
    })

    // Horizontal 
    enquire.register("screen and (orientation: landscape)", function()
    {
    	$('#alertas #alerta-vertical').hide();
    	$('#alertas #alerta-horizontal').show();

        $('div[id^=contenido]:has(table)').hide();
        $('div[id^=contenido]:has(canvas)').show();
        $('div[id^=contenido]:has(select)').show();


    })
})

// Tamaño MD
enquire.register("screen and (min-width:992px)", function() 
{ 
	$('.letrasNav').show();
    $('.hideXS').show();
    $('#titulo-tab').hide();
	$('#alertas #alerta-vertical').hide();
    $('#alertas #alerta-horizontal').hide();
 
    $('div[id^=contenido]:has(table)').show();
    $('div[id^=contenido]:has(canvas)').show();
    $('div[id^=contenido]:has(select)').show();

})

// Tamaño LG
enquire.register("screen and (min-width:1200px)", function() 
{ 

})
}

(function(){

	mediaQueries();

})();