$(document).ready(function () {
  let hoverTimeout;
  var balance = $(".balance-count-js").outerWidth(true);
  $(".balance-count-js").css('width', 0);
  
  $(".sidebarBtn-js").on("mouseenter", function () {
    $('.sidebar').addClass('active');
    clearTimeout(hoverTimeout);
    
    hoverTimeout = setTimeout(() => {
      $(this).closest(".sidebar").addClass("effect");
    }, 300);

    $(".balance-count-js").css('width', balance);
    
    console.log(balance);
  });
  $(".sidebar").on("mouseleave", function () {
    $('.sidebar').removeClass('active');
    clearTimeout(hoverTimeout);
    $(this).removeClass("effect");
    $(".balance-count-js").css('width', 0);
    
  });




});
