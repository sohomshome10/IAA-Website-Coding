function scrollToInnerSection(){
    $('.down-arrow').click(function(e){
        e.preventDefault();
        var getElem = $(this).attr('href');
        var getOffset = $(getElem).offset().top;

        $('html').animate({
            scrollTop:getOffset
        },700);

    });
}
window.onload = function(){
    document.querySelector('.modal-bg').classList.add('bg-active');
    document.querySelector('.loader').style.display = 'none';
};
document.querySelector('.mbtn').addEventListener('click', function(){
    document.querySelector('.modal-bg').classList.remove('bg-active');
    document.querySelector('body').classList.remove('no-scroll');
});
document.querySelector('.cross h2').addEventListener('click', function(){
    document.querySelector('.modal-bg').classList.remove('bg-active');
    document.querySelector('body').classList.remove('no-scroll');
});
if(document.querySelector('.modal-bg').classList.contains('bg-active')){
    document.querySelector('body').classList.remove('no-scroll');
}else{
    document.querySelector('body').classList.add('no-scroll');
}
$(function(){
    // Hamburger toggle.
    $('.hamburger').click(function(){
        $(this).toggleClass('navactive');
        $('.navlinks').slideToggle();
    });
    // Back to top button.
    $('body').append('<a href="#home" class="top scroll"><i class="fas fa-chevron-up"></i></a>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
        }else{
             $('.top').fadeOut('slow');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      dotsEach:true,
      lazyLoad:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  })
  $('.filtr-container').filterizr({
        animationDuration: 0.5,
        easing: 'ease-out',
        layout: 'sameSize',
    });
    scrollToInnerSection();
    $('.venobox').venobox({
        overlayColor: 'rgba(0, 0, 0, 0.9)',
        spinner: 'cube-grid',
        spinColor: '#0496ff',
    });
});