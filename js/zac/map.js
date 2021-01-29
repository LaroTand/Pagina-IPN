$('#collapseMap').on('shown.bs.collapse', function(e){
	(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Single_hotel': [
			{
				name: 'Hotel Quinta Real Zacatecas',
				location_latitude: 22.76872888298918, 
				location_longitude: -102.57588969877668,
				map_image_url: 'img/zacatecas/quinta.jpg',
				name_point: 'Hotel Quinta Real Zacatecas',
				description_point: 'Este hotel de estilo boutique de la zona de Centro histórico se sitúa a pocos pasos de Acueducto El Cubo y Parque Sierra de Alica.',
				
			}
			],
			'Sightseeing': [
			{
				name: 'Plaza Bicentenario',
				location_latitude: 22.76945491868767, 
				location_longitude: -102.57189417577968,
				map_image_url: 'img/zacatecas/bice.jpg',
				name_point: 'Plaza Bicentenario',
				description_point: 'Plaza que conmemora el bicentenario de la Independencia y Revolución Mexicana.',
				
			},
			{
				name: 'Senna River Tour',
				location_latitude: 48.854183,
				location_longitude: 2.354808,
				map_image_url: 'img/thumb_map_1.jpg',
				name_point: 'Senna River Tour',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'single_tour.html'
			}
			],
			'Museums': [
			{
				name: 'Louvre',
				location_latitude: 48.863893, 
				location_longitude: 2.342348,
				map_image_url: 'img/thumb_map_1.jpg',
				name_point: 'Louvre',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'single_tour.html'
			},
			{
				name: 'Museo Zacatecano ',
				location_latitude: 22.775153014347207,
				location_longitude: -102.573752946627,
				map_image_url: 'img/zacatecas/mus.jpg',
				name_point: 'Museo Zacatecano',
				description_point: 'El Museo Zacatecano recrea parte de la historia de Zacatecas y exhibe en sus salas un amplio y rico acerco de arte huichol, piezas de hierro forjado del periodo colonial, obras de arte sacro popular, maquinaria de acuñación antigua y monedas acuñadas en esta Casa de Moneda.',
				
			}
			],
			'Skyline': [
			{
				name: 'Teleferico',
				location_latitude: 22.778340142356484, 
				location_longitude: -102.57363762182035,
				map_image_url: 'img/zacatecas/tele.jpg',
				name_point: 'Teleferico',
				description_point: 'Circuito turístico es uno de los más atractivos y visitados de Zacatecas, ya que ofrece la alternativa de conocer la ciudad a través de diferentes experiencias que van, desde la aventura, hasta la reseña y vivencia histórica. ',
			},
			{
				name: 'Montparnasse',
				location_latitude: 48.837273,
				location_longitude: 2.335387,
				map_image_url: 'img/thumb_map_1.jpg',
				name_point: 'Montparnasse',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'single_tour.html'
			}
			],
			'Eat_drink': [
			{
				name: 'Beaubourg',
				location_latitude: 48.860819, 
				location_longitude: 2.354507,
				map_image_url: 'img/thumb_map_1.jpg',
				name_point: 'Beaubourg',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'single_tour.html'
			},
			{
				name: 'Gorditas Doña Julia',
				location_latitude: 22.773728512736295,
				location_longitude: -102.57346259750113,
				map_image_url: 'img/zacatecas/gor.jpg',
				name_point: 'Gorditas Doña Julia',
				description_point: 'Gorditas tradicionales zacatecanas.',
				
			}
			],
			'Walking': [
			{
				name: 'Alameda',
				location_latitude: 22.773857114185635, 
				location_longitude: -102.57771993376002,
				map_image_url: 'img/zacatecas/ala.jpg',
				name_point: 'Alameda',
				description_point: 'la Alameda José Trinidad García de la Cadena fue construida a principios del Siglo XIX para los Zacatecanos. Se adornó con álamos, sauces y moreras para marcar en dónde terminaba la ciudad.',
				url_point: 'single_tour.html'
			},
			{
				name: 'Mina del edén',
				location_latitude: 22.776919074454828,
				location_longitude: -102.57959866371789,
				map_image_url: 'img/zacatecas/mina.jpg',
				name_point: 'Mina del edén',
				description_point: 'La Mina el Edén abre las puertas a sus visitantes los 365 días del año. Los recorridos guiados por su interior se pueden realizar:',
				
			}
			],
			'Churches': [
			{
				name: 'Cerro de la bufa',
				location_latitude: 22.778624230509607, 
				location_longitude: -102.56806550022998,
				map_image_url: 'img/zacatecas/ce.jpg',
				name_point: 'Cerro de la bufa',
				description_point: 'El Cerro de la Bufa es una reconocida elevación ubicada al este del centro histórico de la ciudad de Zacatecas.',
			},
			{
				name: 'Catedral',
				location_latitude: 22.775735715776836, 
				location_longitude: -102.57239743542709,
				map_image_url: 'img/zacatecas/ca.jpg',
				name_point: 'Catedral de zacatecas',
				description_point: 'La catedral de Zacatecas, dedicada a la Virgen de la Asunción, es el templo principal de la diócesis de Zacatecas. Ubicado en centro histórico de la ciudad, declarado Patrimonio Cultural de la Humanidad por la Unesco. ',
				
			}
			]

		};


			var mapOptions = {
				zoom: 15,
				center: new google.maps.LatLng(22.771890038348943, -102.57047311809697),
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				mapTypeControl: false,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.TOP_LEFT
				},
				scrollwheel: false,
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.TOP_LEFT
				},
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.LEFT_TOP
				},
				styles: [
							 {
					"featureType": "landscape",
					"stylers": [
						{
							"hue": "#FFBB00"
						},
						{
							"saturation": 43.400000000000006
						},
						{
							"lightness": 37.599999999999994
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.highway",
					"stylers": [
						{
							"hue": "#FFC200"
						},
						{
							"saturation": -61.8
						},
						{
							"lightness": 45.599999999999994
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.arterial",
					"stylers": [
						{
							"hue": "#FF0300"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 51.19999999999999
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.local",
					"stylers": [
						{
							"hue": "#FF0300"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 52
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{
							"hue": "#0078FF"
						},
						{
							"saturation": -13.200000000000003
						},
						{
							"lightness": 2.4000000000000057
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{
							"hue": "#00FF6A"
						},
						{
							"saturation": -1.0989010989011234
						},
						{
							"lightness": 11.200000000000017
						},
						{
							"gamma": 1
						}
					]
				}
				]
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: 'img/pins/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

	});
	
		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};

		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
				'<div class="marker_info" id="marker_info">' +
				'<img src="' + item.map_image_url + '" alt="Image"/>' +
				'<h3>'+ item.name_point +'</h3>' +
				'<span>'+ item.description_point +'</span>' +
				'<div class="marker_tools">' +
				'<form action="http://maps.google.com/maps" method="get" target="_blank" style="display:inline-block""><input name="saddr" value="'+ item.get_directions_start_address +'" type="hidden"><input type="hidden" name="daddr" value="'+ item.location_latitude +',' +item.location_longitude +'"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Directions</button></form>' +
					
					'</div>' +
					
				'</div>',
				disableAutoPan: false,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(10, 125),
				closeBoxMargin: '5px -20px 2px 2px',
				closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
				isHidden: false,
				alignBottom: true,
				pane: 'floatPane',
				enableEventPropagation: true
			});


		};

    });