(function(){

	var vidStartButton = $('.promo__shadow__video-button');
	var vidIframe = vidStartButton.parent().siblings('iframe');
	var playVideo = function(evt){
		evt.preventDefault();
		vidIframe.removeClass('hidden');
		vidStartButton.parent().addClass('hidden');

		var vidSrc = vidIframe[0].src;
		if ( vidSrc.indexOf('?') == -1 ) {
			vidIframe[0].src += "?autoplay=1";
		} else {
			vidIframe[0].src += "&autoplay=1";
		};
	};

	vidStartButton.on('click', playVideo);

}());