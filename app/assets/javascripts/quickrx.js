$(".custom-icons")
  .mouseover(function () {
      if ( this.className.split( " " ).length === 1 ) {
        var address = "#" + this.id + " .icon";
        var src = $(address).attr("src").match(/[^\.]+/) + "over.png";
        $(address).attr("src", src);
      };
  })
  .mouseout(function () {
      if ( this.className.split( " " ).length === 1 ) {
        var address = "#" + this.id + " .icon";
        var src = $(address).attr("src").replace("over.png", ".png");
        $(address).attr("src", src).fadeIn(700);
      };
  });
