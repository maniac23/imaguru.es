(function(){

	var forEqHeight_1 = $('.course-programm__article__title:first-child, course-programm__article__title:nth-child(2)');
	var forEqHeight_2 = $('.course-programm__article__title:nth-child(3), course-programm__article__title:nth-child(4)');

	var makeEqHeight = function(elements){
		if (elements.eq(0).height() > elements.eq(1).height()) {
			elements.eq(1).height(elements.eq(0).height());
		} else {
			if (elements.eq(0).height() > elements.eq(1).height()) {
				elements.eq(1).height(elements.eq(0).height());
			};
		};
	};

	var checkEqHeight = function(){
		if (window.matchMedia("(min-width: 768px)").matches) {
			makeEqHeight(forEqHeight_1);
			makeEqHeight(forEqHeight_2);
		};
	};

	$(window).on('resize load', checkEqHeight);

}());