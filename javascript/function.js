// header color change

// $(document).ready(function(){
//   var scroll_pos = 0;
//     $(document).scroll(function() {
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 10) {
//             $(".header1").css('display', 'none');
//             $(".header2").fadeIn('slow');
//             $("header").css('background-color', '#5C7AB8');
//         } else {
//             $(".header1").fadeIn('slow');
//             $(".header2").fadeOut('slow');
//             $("header").css('background-color', '#fff');

//         }
//     });
//     });
//comment rgba(0, 0, 255, 0.0000001) ,, rgba(53,54,59,0.925)

// smooth scroll
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function() {
  // $('div.toshow').fadeIn(4000);
});
// fading in elements on scroll
$(function() {
  // $(document).ready shorthand
  //  $('.about').fadeIn('slow');
  //  $('.boxes').fadeIn('slow');
  //  $('.services').fadeIn('slow');
});

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  // $(window).scroll( function(){
  //     /* Check the location of each desired element */
  //     $('.hideme').each( function(i){
  //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
  //         var bottom_of_window = $(window).scrollTop() + $(window).height();
  //         /* If the object is completely visible in the window, fade it it */
  //         if( bottom_of_window > bottom_of_object ){
  //             $(this).animate({'opacity':'1'},3000);
  //         }else{
  //         }
  //     });
  //});
});
