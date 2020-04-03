$(document).ready(function(){
	$('.responsive-menu-icon').click(function(){
		var responsiveMenu = $('.responsive-menu');
		responsiveMenu.show();
		responsiveMenu.animate({
			right: 0
		},400);
		$('body').append('<div class="back-container"></div>');
		$('.back-container').click(function(){
			var responsiveMenu = $('.responsive-menu');
			responsiveMenu.animate({
				right: '-220px'
			},400,function(){
				responsiveMenu.hide();
			});
			$(this).remove();
		});
	});
});