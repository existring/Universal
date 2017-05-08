

$(document).ready(function() {



	//наведение на кругляши

	$('.item-box').hover(
		function(){
			$('.white-more', this).addClass('border-green');
			$('.white-more span', this).show();
			$('.more-magnifier', this).show();
			
		},

		function(){
			$('.white-more', this).removeClass('border-green');
			$('.white-more span', this).hide();
			$('.more-magnifier', this).hide();
		
	});

	// Экран1
	var winHeight = $(window).innerHeight();
	var screen1height = winHeight - $('header').innerHeight();
	$('#screen1').innerHeight(screen1height);
	console.log(screen1height);

	// прокрутка кругляшей 
	
	
	var screen2ht = $('#screen2').position().top - 47;
	var screen3ht = $('#akcii').position().top - winHeight - 47;
	$('#tyan-box').height(winHeight);
	
	nya();

	
	$(window).on("scroll", function() {
		nya();
		hideshapka();
    });


    // плавающий хэдэр

    hideshapka();

	function hideshapka() {
		var topc = $(window).scrollTop();

		if (topc <= 60) {
			//$('#header2').animate({'top':'-62px'}, 300);
			$('#header2').fadeOut();
		}
		else {
			//$('#header2').animate({'top':'0'}, 300);
			$('#header2').fadeIn();
		}
	}

    function nya() {
	    if ($(window).scrollTop() >= screen2ht && $(window).scrollTop() < screen3ht && !$('#tyan-box').hasClass('tyan-fixed')) {
			$('#tyan-box').addClass('tyan-fixed');			
			$('#tyan-box').removeClass('tyan-top');			
			$('#tyan-box').removeClass('tyan-bottom');
	    }
		if ($(window).scrollTop() < screen2ht && !$('#tyan-box').hasClass('tyan-top')){
			$('#tyan-box').removeClass('tyan-fixed');			
			$('#tyan-box').addClass('tyan-top');			
			$('#tyan-box').removeClass('tyan-bottom');
		}
		if ($(window).scrollTop() >= screen3ht && !$('#tyan-box').hasClass('tyan-bottom')){
			$('#tyan-box').removeClass('tyan-fixed');			
			$('#tyan-box').removeClass('tyan-top');			
			$('#tyan-box').addClass('tyan-bottom');
		}			
    }




	// переключение карты

	$('#addr2').click(function(){
		$(this).addClass('green');
		$(this).removeClass('cursor-pointer');
		$('#addr1').addClass('cursor-pointer');
		$('#addr1').removeClass('green');
		$('#map1').hide();
		$('#map2').show();


	});

	$('#addr1').click(function(){
		$(this).addClass('green');
		$(this).removeClass('cursor-pointer');
		$('#addr2').addClass('cursor-pointer');
		$('#addr2').removeClass('green');
		$('#map2').hide();
		$('#map1').show();
	});

	// Попуп выбор адреса для первого экрана

	$('#addr-input, #map-pin').click(function(){
        $('#modal-contacts').bPopup({
        		closeClass: 'b-close',
                speed: 300,
                transition: 'slideUp'
            });
    });


    


	$('#modal-contacts #addr2').click(function(){
		var addr = $(this).attr('data-addr');
		$('#addr-input').attr('value', addr);
		$(this).addClass('green');
		$(this).removeClass('cursor-pointer');
		$('#modal-contacts #addr1').addClass('cursor-pointer');
		$('#modal-contacts #addr1').removeClass('green');
		$('#modal-contacts #map1').hide();
		$('#modal-contacts #map2').show();
		$('.z-close').css('color', '#fff');


	});


	$('#modal-contacts #addr1').click(function(){
		var addr = $(this).attr('data-addr');
		$('#addr-input').attr('value', addr);
		$(this).addClass('green');
		$(this).removeClass('cursor-pointer');
		$('#modal-contacts #addr2').addClass('cursor-pointer');
		$('#modal-contacts #addr2').removeClass('green');
		$('#modal-contacts #map2').hide();
		$('#modal-contacts #map1').show();
		$('.z-close').css('color', '#17b49c');
	});

	// буллиты

	
	$('#s3-bullet1').addClass("hidden-b").viewportChecker({
		classToAdd: 'visible-b anim fadeInLeft animated',
		offset: -200,
	});

	$('#s3-bullet2').addClass("hidden-b").viewportChecker({
		classToAdd: 'visible-b anim fadeInRight animated',
		offset: -200,
	});

	$('#s3-bullet3').addClass("hidden-b").viewportChecker({
		classToAdd: 'visible-b anim fadeInLeft animated',
		offset: 0,
	});

	$('#s3-bullet4').addClass("hidden-b").viewportChecker({
		classToAdd: 'visible-b anim fadeInRight animated',
		offset: 0,
	});
	$('#s3-bullet5').addClass("hidden-b").viewportChecker({
		classToAdd: 'visible-b anim fadeInRight animated',
		offset: 0,
	});
	$('#s3-bullet6').addClass("hidden-b").viewportChecker({
		classToAdd: 'visible-b anim fadeInLeft animated',
		offset: 0,
	});

	$('#s7-bullet1, #s7-bullet2, #s7-bullet3').addClass("hidden-b").viewportChecker({
		classToAdd: 'visible-b anim fadeInRight animated',
		offset: 0,
	});





	// scrollto

	$('#header2 span').click(function(){
		var scrollToId = $(this).attr('data-scrollTo');
		console.log('124');
		var top = $(scrollToId).offset().top;
		if ($('#header2').css('top')=='40') {
			var headerHeight = $('#header2').height();
		} else {
			var headerHeight = 0;
		}
		var position = top - 47;
		$('body').stop().animate({scrollTop:position}, '500');
	});



	// модалки

	$('#services .item-box').click(function(){
		var shead = $('span:eq(1)', this).html();
		var simg = $('img:eq(0)', this).attr('src');
		var stext = $('p', this).html();
		$('#modal-services h3').html(shead);
		$('#modal-services .serv-scroll p').html(stext);
		$('#modal-services img:eq(0)').attr('src', simg);
        $('#modal-services').bPopup({
        		closeClass: 'modal-close',
                speed: 300,
                transition: 'slideUp'
            });
    });

    				// врачи


    $('.screen4 .item-box').click(function(){
		var shead = $('span:eq(1) b', this).html();
		var simg = $('img:eq(0)', this).attr('src');
		var stext = $('p', this).html();
		var vrach = $('span:eq(1) div', this).html();
		$('#modal-services h3').html(shead);
		$('#modal-services .serv-scroll p').html(stext);
		$('#modal-services img:eq(0)').attr('src', simg);
        $('#modal-services').bPopup({
        		closeClass: 'modal-close',
                speed: 300,
                transition: 'slideUp'
            });
    });


	$('.call-button').click(function(){
    	$('#callback-modal').bPopup({
    		closeClass: 'modal-close',
            speed: 300,
            transition: 'slideUp'
        });
    });




    // input mask

    $('input[name="phone"]').mask("+7 (999) 999-99-99");


    // mail


    $("#form1").submit(function() {
		
		var name = $('input[name="name"]', this);
		var contact = $('input[name="contact"]', this);
	
				
		if(!name.val()) {                      
            name.attr('placeholder', 'Введите имя');
            name.addClass('form-error shake animated');

        }
        if(!contact.val()) {                      
            contact.attr('placeholder', 'Введите контакт');
            contact.addClass('form-error shake animated');                     
        }


		
		var condition = name.val()&&contact.val();
		
		if (condition) {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$('.thankyou-modal').bPopup({
					speed: 300,
					onOpen: function () {
						$('body').css('overflow', 'hidden'); 
					},
					onClose: function () {
						$('body').css('overflow', 'auto');
					}
				});
			});
		}
		
		return false;
	});



	$("#form2, #form3, #form4").submit(function() {
		
		var name = $('input[name="name"]', this);
		var phone = $('input[name="phone"]', this);


		
				
		if(!name.val()) {                      
            name.attr('placeholder', 'Введите имя');
            name.addClass('form-error shake animated');

        }

        if(!phone.val()) {                      
            phone.attr('placeholder', 'Введите телефон');
            phone.addClass('form-error shake animated');                     
        }
		

		
		var condition = name.val()&&phone.val();
		
		if (condition) {

			$.ajax({
				type: "GET",
				url: "mail2.php",
				data: $(this).serialize()
			}).done(function() {
				$('.thankyou-modal').bPopup({
					speed: 300,
					onOpen: function () {
						$('body').css('overflow', 'hidden'); 
					},
					onClose: function () {
						$('body').css('overflow', 'auto');
					}
				});
			});
		}
		
		return false;
	});

		// карусель

	// $("#akcii-slider").owlCarousel({
			
	// 		items: 1,
	// 		navigation : true,
	// 		navigationText : ['<a class="white_arrows inner-left-arrow"></a>','<a class="white_arrows inner-right-arrow"></a>'],
	// 		responsive: false,
	// 		pagination : true,
	// 		autoPlay: true
			
	// });

	$('#akcii-slider').slick();
	$('#slider-about').slick();
	
	$('#slider-about img').on('click', function(){
    	var imgc = $(this).attr('src');
    	$('#img-modal img').attr('src', imgc);
        $('#img-modal').bPopup({
        		closeClass: 'modal-close',
                speed: 300,
                transition: 'slideUp'
            });
    });



});