$(window).on("load", function(){
	$('.loading-container').fadeOut();
	$(document).scroll(function(){
		var top = $(this).scrollTop();
		if(top > 50){
            $('.sticky').addClass('scrolled');
			$('.nav-logo').attr('src', './images/logo-home.png');
			$('.nav-logo').css('max-height', '45px');
			$('.btn-nav').css('max-height', '45px');
		}else{
            $('.sticky').removeClass('scrolled');
			$('.nav-logo').attr('src', './images/logo-home-other.png');
			$('.nav-logo').css('max-height', '70px');
			$('.btn-nav').css('max-height', '70px');
		}
	});

    $('.box').click(function(){
        var location = $(this).data('href');

        document.location = location;
    });

    if($(document).width() >= 768)
   		initHomepageBox();
});

$(window).on('resize', function(){
    console.log('resize');
    initHomepageBox();
});


function initHomepageBox(){
	$('.box').each(function(){
        var img = $(this).find('.bg-show-img');
        var top = $(this).offset().top, left = $(this).offset().left;
        
        if(!$(this).hasClass('logo-box'))
            img.css('top', -top).css('left', -left);
    });

    $('.box').mouseenter(function(){
        var src = $(this).find('.bg-show-img').data('src');

        $('#home-logo').attr('src', 'assets/images/logo-home-other.png');
        if(src == 'assets/images/bg/bg-logo.jpg')
            $('#home-logo').attr('src', 'assets/images/logo-home-active.png');

        $('.box img.bg-show-img').hide();
        $('#home-logo').show();
        $('.bg').attr('src', src).show();
        $(this).find('p').addClass('txt--gold');
        $(this).find('.img-before').hide();
        $(this).find('.img-after').show();
    }).mouseleave(function(){
        $('#home-logo').attr('src', 'assets/images/logo-home.png');
        $('.box img.bg-show-img').show();
        $('.bg').hide();
        $(this).find('p').removeClass('txt--gold');
        $(this).find('.img-before').show();
        $(this).find('.img-after').hide();
    });
}