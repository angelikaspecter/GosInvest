$(document).ready(function () {
	$(window).on('load', function () {
		$('.str3').liMarquee({
			circular: true,
			startShow: true
		});
	})

	function date() {
		let date = new Date();
		let dd = String(date.getDate()).padStart(2, '0');
		let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = date.getFullYear();
		let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		let string = yyyy + "/" + mm + "/" + dd + " " + hours + ":" + minutes + ":" + seconds;
		$('.time').html(string);
	}
	setInterval(date, 1000);
	function datetime() {
		let date = new Date();
		let hours = (23 - date.getHours()) < 10 ? '0' + (23 - date.getHours()) : (23 - date.getHours());
		let minutes = (59 - date.getMinutes()) < 10 ? '0' + (59 - date.getMinutes()) : (59 - date.getMinutes());
		let seconds = (60 - date.getSeconds()) < 10 ? '0' + (60 - date.getSeconds()) : (60 - date.getSeconds());
		let Value = "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + (7 - date.getDay()) + "</span>" + "<span>  Дней  </span>" + "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + hours + "</span>" + " : " + "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + minutes + "</span>" + " : " + "<span class='num' style=' background-color:#807ae2; padding:0.5vw;border-radius:15px;'>" + seconds + "</span>";
		$('#timee').html(Value);
	}
	setInterval(datetime, 1000);
	$('.pop_up_active').on('click', function () {
		if (window.innerWidth > 760) {
			$('.pop_up_fon').css('display', 'block');
			$('.pop_up').css('display', 'block');
			$('.closer').css('display', 'block');
		}
		else {
			$('.pop_up_fon').css('display', 'block');
			$('.pop_up').css('display', 'block');
			$('.pop_up_fon').on('click', function () {
				if (window.innerWidth < 760) {
					$('.pop_up_fon').css('display', 'none');
					$('.pop_up').css('display', 'none');
				}
			});
		}
	});
	$('.closer').on('click', function () {
		$('.pop_up_fon').css('display', 'none');
		$('.pop_up').css('display', 'none');
		$('.closer').css('display', 'none');
	});

	$('#accordeon .acc-head').on('click', f_acc);

	let $element = $('.info-frame');
	let counter = 0;
	$(window).scroll(function () {
		let scroll = $(window).scrollTop() + $(window).height();
		let offset = $element.offset().top + $element.height();

		if (scroll > offset && counter == 0) {
			$('#regModal').modal('show').fadeIn(500);
			counter = 1;
		}
	});
	$('.btn-close').click(function () {
		$('#regModal').slideUp();
	});
});

function f_acc() {
	$('#accordeon .acc-body').not($(this).next()).slideUp(100);
	$(this).next().slideToggle(100);
}

AOS.init();