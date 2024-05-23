$(window).on("load", function(){
    var top = $(this).scrollTop();
    if (top == 0) {
      $('.nav-logo').attr('src', 'assets/images/logo-home-other.png');
    }
    $('.loading-container').fadeOut();
    $(document).scroll(function(){
      var scrollTop = $(this).scrollTop();
  
      if(scrollTop > 50){
        $('nav.sticky').addClass('scrolled');
        $('.nav-logo').attr('src', 'assets/images/logo-home.png');
      }else{
        $('nav.sticky').removeClass('scrolled');
        $('.nav-logo').attr('src', 'assets/images/logo-home-other.png');
      }
    });
  });