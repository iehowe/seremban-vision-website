$(window).on("load", function(){
  var top = $(this).scrollTop();
  if (top == 0) {
    $('.nav-logo').attr('src', 'assets/images/logo-home-other.png');
  }
  $('.loading-container').fadeOut();
});

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

$(document).ready(function () {
  $('.slick-1, .slick-1-mobile').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    easing: 'ease-in-out',
    speed: 100,
    centerMode: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  $('.slick-1, .slick-1-mobile').each(function(){
    var item = $(this).data('slick');
    var playPause = '<li><i class="fas fa-pause slick-button" data-action="pause" data-slick="'+item+'"></i></li>';

    $(this).find('.slick-dots').append(playPause);
  });

  $(document).on('click', '.slick-1 .slick-button, .slick-1-mobile .slick-button', function(){
    var action = $(this).data('action');
    var slick = $(this).data('slick');
    console.log(slick);

    if(action == 'pause') {
      $(this).removeClass('fa-pause').addClass('fa-play');
      $(this).data('action', 'play');
      $('.slick-' + slick).slick('slickPause');
    } else {
      $(this).removeClass('fa-play').addClass('fa-pause');
      $(this).data('action', 'pause')
      $('.slick-' + slick).slick('slickPlay');
    }
  });

  $('.slick-2, .slick-2-mobile').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    easing: 'ease-in-out',
    speed: 100,
    centerMode: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  $('.slick-2, .slick-2-mobile').each(function(){
    var item = $(this).data('slick');
    var playPause = '<li><i class="fas fa-pause slick-button" data-action="pause" data-slick="'+item+'"></i></li>';

    $(this).find('.slick-dots').append(playPause);
  });

  $(document).on('click', '.slick-2 .slick-button, .slick-2-mobile .slick-button', function(){
    var action = $(this).data('action');
    var slick = $(this).data('slick');

    if(action == 'pause') {
      $(this).removeClass('fa-pause').addClass('fa-play');
      $(this).data('action', 'play');
      $('.slick-' + slick).slick('slickPause');
    } else {
      $(this).removeClass('fa-play').addClass('fa-pause');
      $(this).data('action', 'pause')
      $('.slick-' + slick).slick('slickPlay');
    }
  });

  $('.slick-3, .slick-3-mobile').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    easing: 'ease-in-out',
    speed: 100,
    centerMode: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  $('.slick-3, .slick-3-mobile').each(function(){
    var item = $(this).data('slick');
    var playPause = '<li><i class="fas fa-pause slick-button" data-action="pause" data-slick="'+item+'"></i></li>';

    $(this).find('.slick-dots').append(playPause);
  });

  $(document).on('click', '.slick-3 .slick-button, .slick-3-mobile .slick-button', function(){
    var action = $(this).data('action');
    var slick = $(this).data('slick');

    if(action == 'pause') {
      $(this).removeClass('fa-pause').addClass('fa-play');
      $(this).data('action', 'play');
      $('.slick-' + slick).slick('slickPause');
    } else {
      $(this).removeClass('fa-play').addClass('fa-pause');
      $(this).data('action', 'pause')
      $('.slick-' + slick).slick('slickPlay');
    }
  });

  $('.slick-4, .slick-4-mobile').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    easing: 'ease-in-out',
    speed: 100,
    centerMode: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  $('.slick-4, .slick-4-mobile').each(function(){
    var item = $(this).data('slick');
    var playPause = '<li><i class="fas fa-pause slick-button" data-action="pause" data-slick="'+item+'"></i></li>';

    $(this).find('.slick-dots').append(playPause);
  });

  $(document).on('click', '.slick-4 .slick-button, .slick-4-mobile .slick-button', function(){
    var action = $(this).data('action');
    var slick = $(this).data('slick');

    if(action == 'pause') {
      $(this).removeClass('fa-pause').addClass('fa-play');
      $(this).data('action', 'play');
      $('.slick-' + slick).slick('slickPause');
    } else {
      $(this).removeClass('fa-play').addClass('fa-pause');
      $(this).data('action', 'pause')
      $('.slick-' + slick).slick('slickPlay');
    }
  });

  $(".grid").imagesLoaded( function() {
        $(".grid").masonry({
      itemSelector: '.grid-item',
      percentPosition: true
    });
  }); 

});