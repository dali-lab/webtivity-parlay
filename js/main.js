(function($) {

  // Setup variables
  $window = $(window);
  $slide = $('.cover, .content');
  $body = $('body');



  //FadeIn all sections
  $body.imagesLoaded(function() {
    setTimeout(function() {
      // Resize sections
      adjustWindow();
      // Fade in sections
      $body.removeClass('loading').addClass('loaded');
    }, 10);
  });


  function adjustWindow() {

    // Init Skrollr
    var s = skrollr.init({
      render: function(data) {
        //Debugging - Log the current scroll position.
        //console.log(data.curTop);
      },
      smoothScrolling: true

    });


    // Get window size
    winH = $window.height();
    // Keep minimum height 550
    if (winH <= 450) {
      winH = 450;
    }

    // Resize our slides
    $slide.height(winH);
    var halfWindowHeight = winH - (winH / 2);
    var onethirdsHeight = (winH) / 3;
    $('#cover-1').height(2*onethirdsHeight);
    $('#cover-2').height(2*onethirdsHeight);
    $('#content-1').height(6*onethirdsHeight);

    // Refresh Skrollr after resizing our sections
    s.refresh($('.cover, .content'));
  }

  causeRepaintsOn = $("h1, h2, h3, p");

  $(window).resize(function() {
    causeRepaintsOn.css("z-index", 1);
    adjustWindow();
  });

})(jQuery);
