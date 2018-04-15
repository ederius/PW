

	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat:11.0038147, lng:-74.8243003},
	    zoom: 16,
	    mapTypeId: google.maps.MapTypeId.TERRAIN,
	    	scrollwheel:false
	  });


		var myLatlng = new google.maps.LatLng(11.005289, -74.826060);
		  var infowindow = new google.maps.InfoWindow({
		    content: "<img src='img/logo.gif' width=70><h4>PW | Papel a la web</h4>"
		  });

	    var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'Estoy aqui!'
	    });
		infowindow.open(map, marker);

	}