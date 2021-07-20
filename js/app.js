/* Shooting star on click function */

$(document).on("click", function(event){
    var $shootingStar = $('#shootingStar');
    $shootingStar.css({visibility:"visible", top:event.clientY+"px", left:event.clientX+"px"});
    $shootingStar.animate({top:window.innerHeight}, "10000");
});
