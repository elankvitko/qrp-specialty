$( ".custom-icons" ).on( "click", function( e ) {
  debugger;
  e.preventDefault();

  var article = "";

  if ( e.target.id === "" ) {
    article = "article=" + e.target.parentElement.id;
  } else {
    article = "article=" + e.target.id;
  };

  $.ajax({
    type: 'get',
    url: '/our-specialties/article',
    data: article
  }).done( function( response ) {
    $( "#profile" ).html( response );
  });
})
