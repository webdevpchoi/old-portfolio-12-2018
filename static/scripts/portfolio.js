$(document).ready(function() {
	console.log('JS loaded!')
	const carousel = $('.proj-carousel');
	const showSkills = $('.show-skills');
	const modalContent = $('.skills-modal');
	const navBar = $('.navbar');
	const closeModal = $('.close-modal');
	const offsetHeight = navBar.offset().top;

	//slick.js settings initialized
	carousel.slick({
		centerPadding: '400px',
		centerMode: true,
		slidesToShow: 3,
		dots: true,
		rows: 0,
		prevArrow: "<div class='prev-proj'><i class='fas fa-arrow-alt-circle-left prev-proj'></i></div>",
		nextArrow: "<div class='next-proj'><i class='fas fa-arrow-alt-circle-right next-proj'></i></div>",
		responsive: [{
			breakpoint: 2355,
			settings: {
				slidesToShow: 3,
				centerPadding: '250px',
			}
		},
		{
			breakpoint: 1920,
			settings: {
				slidesToShow: 3,
				centerPadding: '100px',
			}
		},
		{
			breakpoint: 1664,
			settings: {
				slidesToShow: 3,
				centerPadding: '60px',
			}
		},
		{
			breakpoint: 1283,
			settings: {
				slidesToShow: 1,
				centerPadding: '350px',
			}
		},
		{
			breakpoint: 1178,
			settings: {
				slidesToShow: 1,
				centerPadding: '250px',
			}
		}, 
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 1,
				centerPadding: '200px',
			}
		}, 
		{
			breakpoint: 888,
			settings: {
				centerPadding: '150px',
				slidesToShow: 1,
				// arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerPadding: '120px',
				slidesToShow: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 600,
			settings: {
				centerPadding: '80px',
				slidesToShow: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 514,
			settings: {
				centerPadding: '50px',
				slidesToShow: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 430,
			settings: {
				centerPadding: '30px',
				slidesToShow: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 365,
			settings: {
				centerPadding: '15px',
				slidesToShow: 1,
				arrows: false,
			}
		},
		{

		}]
	})

	//initialize smoothscroll
	var scroll = new SmoothScroll('a[href*="#"]');

	//toggle view of skills modal
	showSkills.on('click', function() {
		modalContent.css({'display': 'block'});
	})
	// When the user clicks anywhere outside of the modal, close it
	$(window).on('click', function(e) {
		if(e.target == modalContent[0]) {
			modalContent[0].style.display = 'none';
		}
	})
	// When the user clicks on close in modal, close the modal
	closeModal.on('click', function() {
		modalContent[0].style.display = 'none';
	})

	//checks to see the navbar position, and sticks it to the top if scrolling past it
	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		if(scrollPosition >= offsetHeight) {	
			navBar.addClass('sticky');
		} else {
			navBar.removeClass('sticky');
		}
	})
})