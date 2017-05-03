

$(document).ready(function() {





	// прокрутка кругляшей

	var tyan = $(window).height();
	$('#tyanuchka').height(tyan * 0.75);


	nya();

	
	$(window).on("scroll", function() {
		nya();
    });

    function nya() {
    	var screen2ht = $('#screen2').position().top;
		var screen3ht = $('#screen3').position().top - $('#tyan-box').height();

    	if ($(window).scrollTop() <= screen2ht){
			var top = '0';
			var bottom = 'auto';
		}
		if ($(window).scrollTop() >= screen3ht){
			var top = 'auto';
			var bottom = '0';
		}
	    if ($(window).scrollTop() > screen2ht && $(window).scrollTop() < screen3ht ) {
	    	$('#tyan-box').css({'position':'fixed', 'top':40});
	    	$('#waves-free').addClass('waves-free');
	    	

	    } else { 
        	$('#tyan-box').css({'position':'absolute', 'top':top, 'bottom':bottom});
        	$('#waves-free').removeClass('waves-free');
        	
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





	// плавающий хэдэр

	var h_hght = 60; // высота шапки
	var h_mrg = 0;    // отступ когда шапка уже не видна
	                 
	$(function(){
	 
	    var elem = $('#header2');
	    var top = $(this).scrollTop();
	     
	    if(top > h_hght){
	        elem.css('top', h_mrg);
	    }           
	     
	    $(window).scroll(function(){
	        top = $(this).scrollTop();
	         
	        if (top+h_mrg < h_hght) {
	            elem.css('top', '-40px');
	        } else {
	            elem.css('top', h_mrg);
	        }
	    });
	 
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
		var position = top - 40;
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
					closeClass: 'modal-close',
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
					closeClass: 'modal-close',
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

	map.behaviors.disable('multiTouch');
	map.behaviors.disable('drag');

});