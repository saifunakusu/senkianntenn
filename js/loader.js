$(function() {
var h = $(window).height();
// $('#container').css('display','none');
	 $('#loader-bg ,#loader').height(h).css('display','block');
	});
// $(window).load(function () {
//
// });
(window.onload = function() {
	setTimeout(function(){


	$('#loader-bg').delay(900).fadeOut(800);
	$('#loader').delay(600).fadeOut(300);
	$('#container').css('display', 'block');
	},2000)

})();
