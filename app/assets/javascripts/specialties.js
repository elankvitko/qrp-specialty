$( ".custom-icons" ).on( "click", function( e ) {
  e.preventDefault();

  var article = "";

  if ( document.getElementsByClassName( "active-article" ).length >= 1 ) {
    var address = "#" + document.getElementsByClassName( "active-article" )[ 0 ].id + " .icon";
    var src = $(address).attr("src").replace("over.png", ".png");
    $( address ).attr( "src", src );
  }

  var checkBool = $( ".white-impt-bg" ).html().includes( "over" );

  if ( checkBool === true ) {
    var address = "#" + $( ".white-impt-bg" ).attr( "id" ) + " .icon";
    var src = $(address).attr("src").replace("over.png", ".png");
    $(address).attr("src", src).fadeIn(700);
  }

  $( "body" ).find( ".active-article" ).removeClass( "active-article" );
  $( "body" ).find( ".white-impt-bg" ).removeClass( "white-impt-bg" );
  $( this ).addClass( "active-article" );

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
    var findIcon = $( response ).find( ".article-no-display" ).html();
    var src = $( findIcon ).attr("src");
    $( findIcon ).attr( "src", src );
    $( findIcon.split( " " )[ 0 ] ).addClass( "white-impt-bg" );
  });
})
