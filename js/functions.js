$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2  +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4  +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /40  +'%)'
  });

  if(wScroll > $('.clothes-pics').offset().top){

    $('.clothes-pics figure').each(function(){

      $('.clothes-pics figure').addClass('is-showing');
    });
  }

});
