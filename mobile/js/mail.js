$(document).ready(function(){
	
	$(".callback-modal-form, .x-callback-modal-form").submit(function() {
		
		var name = $('input[name="name"]', this);
		var phone = $('input[name="phone"]', this);
		var email = $('input[name="email"]', this);
		
		var pattern = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
				
		if(!name.val()) {                      
            name.attr('placeholder', 'Введите имя');
            name.addClass('form-error');
        }
        if(!phone.val()) {                      
            phone.attr('placeholder', 'Введите телефон');
            phone.addClass('form-error');                      
        }
        if(!email.val()) {                      
            email.attr('placeholder', 'Введите E-mail');
            email.addClass('form-error');                      
        }
		
		if (email.val().search(pattern) == 0) {
			var emailValid = true;
		} else {
			var emailValid = false;
            email.addClass('form-error');
		}
		
		var condition = name.val()&&phone.val()&&email.val()&&emailValid;
		
		if (condition) {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$('.b-close').click();
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
	
	$('input[name="name"]').focusin(function(){
        $('input[name="name"]').removeClass('form-error').attr('placeholder','Ваше имя');
    });

    $('input[name="phone"]').focusin(function(){
        $('input[name="phone"]').removeClass('form-error').attr('placeholder','Телефон');
    });

    $('input[name="email"]').focusin(function(){
        $('input[name="email"]').removeClass('form-error').attr('placeholder','Email');
    });
	
	$('input[name="phone"]').mask("+7 (999) 999-99-99");
	
});