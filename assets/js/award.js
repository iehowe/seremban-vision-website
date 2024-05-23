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

  $(document).ready(function () {

    $('.section1').slick({
      arrows: false,
      autoplay: true,
      fade: true,
      easing: 'ease-in-out',
      speed: 750,
      centerMode: true,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    });

    $('.section1').each(function(){
      var item = $(this).data('slick');
      var playPause = '<li><i class="fas fa-pause slick-button" data-action="pause" data-slick="'+item+'"></i></li>';

      $(this).find('.slick-dots').append(playPause);
    });
    
    $('.service-box-container .subtitle').matchHeight();
    $('p.same-height1').matchHeight();
    $('p.same-height2').matchHeight();
  });