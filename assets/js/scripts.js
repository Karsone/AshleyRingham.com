base = {
  jqNeeds:function(){
    var windowHeight = $(window).height();
    $(".full-height").height(windowHeight);
  }
}

$(document).ready(function(){
  base.jqNeeds();
})
