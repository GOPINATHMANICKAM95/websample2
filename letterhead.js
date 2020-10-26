// code is for color box

$(document).ready(function(){
$(".color").colorbox({rel:'color'});	});

// code is for toggle the menu
var i=0;
$(document).ready(function(){
  $("#switch").click(function(){
    $(".navbar").slideToggle()
  })
});
var wow = new WOW(
                    {
                    boxClass:     'wow',      // default
                    animateClass: 'animated', // default
                    offset:       0,          // default
                    mobile:       true,       // default
                    live:         true        // default
                  }
                  )
                  wow.init();
