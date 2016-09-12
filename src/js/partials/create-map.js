(function(){

		var mapPosition = {lat: 40.414010, lng: -3.720968};
		var imaguruCampusPosition = {lat: 40.412657, lng: -3.718302};
		var imaguruOfficePosition = {lat: 40.415483, lng: -3.723999};

		var imaguruCampusInfoWindowContent = '<b>IMAGURU Campus</b>';
		var imaguruOfficeInfoWindowContent = '<b>IMAGURU Office</b>';

		var mapContainer = $('.lets-keep-in-touch__map')[0];
		// Create a map object and specify the DOM element for display.
		var mapImaguruES = new google.maps.Map(mapContainer, {
			center: mapPosition,
			scrollwheel: false,
			zoom: 16
		});
// Markers and info windows
		var imaguruCampusMarker = new google.maps.Marker({
			position: imaguruCampusPosition,
			map: mapImaguruES,
			title: 'IMAGURU Campus',
		});

		var imaguruOfficeMarker = new google.maps.Marker({
			position: imaguruOfficePosition,
			map: mapImaguruES,
			title: 'IMAGURU Office',
		});

		var imaguruCampusInfoWindow = new google.maps.InfoWindow({
			content: imaguruCampusInfoWindowContent,
		});

		var imaguruOfficeInfoWindow = new google.maps.InfoWindow({
			content: imaguruOfficeInfoWindowContent,
		});

		imaguruCampusInfoWindow.open(mapImaguruES, imaguruCampusMarker);
		imaguruOfficeInfoWindow.open(mapImaguruES, imaguruOfficeMarker);




	var campusOfficeRoute = [
		{lat: 40.412657, lng: -3.718302},
		{lat: 40.412636, lng: -3.718388},
		{lat: 40.413925, lng: -3.718388},
		{lat: 40.413939, lng: -3.720464},
		{lat: 40.414006, lng: -3.721427},
		{lat: 40.414045, lng: -3.724203},
		{lat: 40.415210, lng: -3.724063},
		{lat: 40.415461, lng: -3.723932},
		{lat: 40.415483, lng: -3.723999}
	];

	var routePath = new google.maps.Polyline({
		path: campusOfficeRoute,
		geodesic: true,
		strokeColor: '#f34f30',
		strokeOpacity: 1.0,
		strokeWeight: 4
	});

	routePath.setMap(mapImaguruES);

}());

