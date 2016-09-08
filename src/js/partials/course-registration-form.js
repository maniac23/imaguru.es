(function(){

	var continueButton = $('.course-registration__continue');
	var formSecondPart = $('.course-registration__second-part')
	var secondPartCloseButton = $('.course-registration__second-part__close-button');

	continueButton.on('click', function(event){
		event.preventDefault();
		formSecondPart.removeClass('hidden');
	});

	secondPartCloseButton.on('click', function(){
		formSecondPart.addClass('hidden');
	});



	var wholeCoursesCB = $('.course-registration__label .whole-courses');
	var eduLevelCB = $('.course-registration__label .edu-level');
	var totalPrice = $('.course-registration__total__count');
	var paymentRadio = $('.course-registration__second-part__payment input[type="radio"]');

	updateTotal = function(){
		var total = 0;
		eduLevelCB.each(function(){
			if(this.checked){
				total += $(this).data('price');
			};
		});
		paymentRadio.each(function(){
			if(this.checked){
				var discount = ($(this).data('discount') || 0) / 100;
				var comission = ($(this).data('comission') || 0) / 100;
				total *= 1 - discount;
				total *= 1 + comission;
			}
		})
		totalPrice.text(total + ' eur');
	};

	wholeCoursesCB.on('change', function(){
		if (this.checked){
			eduLevelCB.each(function(){
				if(!this.checked){
					$(this).trigger('click');
				};
			});
		} else {
			eduLevelCB.each(function(){
				if(this.checked){
					$(this).trigger('click');
				};
			});
		};
	});

	eduLevelCB.on('change', function(){
		updateTotal();
	});

// check first checkbox :
	if(!eduLevelCB.eq(0).checked){
		eduLevelCB.eq(0).trigger('click');
	};

// second part 

	console.log(paymentRadio);
	paymentRadio.on('change', function(){
		updateTotal();
	});



}());