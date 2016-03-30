base = {
  fullHeight:function(){
    var windowHeight = $(window).height();
    $(".full-height").height(windowHeight);
  },
  navbar: function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });
  },
  blockLink:function(){
    $(document).on("click","[href]", function() {
      location.href = $(this).attr("href");
    });
  }
}

$(document).ready(function(){
  base.fullHeight();
  base.navbar();
  base.blockLink();
})
