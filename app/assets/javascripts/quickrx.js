$(".custom-icons")
  .mouseover(function () {
      var address = "#" + this.id + " .icon";
      var src = $(address).attr("src").match(/[^\.]+/) + "over.png";
      $(address).attr("src", src);
  })
  .mouseout(function () {
      var address = "#" + this.id + " .icon";
      var src = $(address).attr("src").replace("over.png", ".png");
      $(address).attr("src", src).fadeIn(700);
  });
