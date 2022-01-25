

jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

     

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

  

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});



$(window).load(function(){
    $('.preloader').fadeOut(1000);   
});



$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});



$(function(){


  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


 
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


 
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });


  
  // $(function(){
  //   jQuery(document).ready(function() {
  //   $('#inicio').backstretch([
  //       "images/home-bg-slideshow1.jpg", 
  //       "images/home-bg-slideshow2.jpg",
  //       "images/home-bg-slideshow3.jpg",
  //       ],  {duration: 2500, fade: 800});
  //   });
  // })

  // EDITADO MATHEUS
  $(function(){
    jQuery(document).ready(function() {
    $('#inicio').backstretch([
        "images/bg_1.jpeg"
        ],);
    });
  })

  if (is.not.ie() && is.not.edge()){
    $("#container-inicio").addClass("container-inicio");
  }
});

