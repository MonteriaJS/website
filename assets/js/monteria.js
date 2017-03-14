$(document).ready(function () {
	$('.menu__list__item__link').click(function (e) {
		e.preventDefault();
		var hash = this.hash;
		// Creamos un each para quitar clase a cada item antes de pornerla al que se le está dando click
		$('.menu__list__item__link').each(function () {
			$(this).removeClass('menu__list__item__link--active');
		});
		$(this).addClass('menu__list__item__link--active');

		show_hide('.monteriajs', hash);
		show_hide('.about-us', hash);
		show_hide('.events', hash);
		show_hide('.suport', hash);
	});
});

// Esta función recibe el nombre de cada article para aplicar el efecto de entrada y salida
function show_hide(section, hash) {
	if ($(section).hasClass('section--show')) {
		$(section).removeClass('section--show');
		$(section).addClass('section--hide');
		setTimeout(function () {
			$(section).css('display', 'none');
		}, 510);
	}
	setTimeout(function () {
		$(hash).addClass('section--show');
		$(hash).css('display', 'flex');
	}, 520);
}