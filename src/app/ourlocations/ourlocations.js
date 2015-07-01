angular.module( 'ngBoilerplate.ourlocations', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'ourlocations', {
    url: '/ourlocations',
    views: {
      "main": {
        controller: 'LocationsCtrl',
        templateUrl: 'ourlocations/ourlocations.tpl.html'
      }
    },
    data:{ pageTitle: 'Our locations' }
  });
})

.controller( 'LocationsCtrl', function LocationsController( $scope ) {
        var map;
        var places = [
            {
                'name': 'ACAPULCO',
                'icao': 'MMAA',
                'lat': 16.756944,
                'lot': -99.753611,
                'fbo': 'ICCS ACAPULCO FBO',
                'desc': "130.45",
                'adress': '',
                'picture': 'Acapulco.jpg',
                'thumb': 'Acapulco.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'AGUASCALIENTES',
                'icao': 'MMAS',
                'lat': 21.705278,
                'lot': -102.317778,
                'adress': '',
                'desc': '',
                'picture': 'Aguascalientes.jpg',
                'thumb': 'Aguascalientes.jpg',
                'fbo':'',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'CABO SAN LUCAS',
                'icao': 'MMSL',
                'lat': 22.949186,
                'lot': -109.940357,
                'fbo': 'CABO SAN LUCAS FBO',
                'adress': '',
                'desc': '',
                'picture': 'Cabo-San-Lucas.jpg',
                'thumb': 'Cabo-San-Lucas.jpg',
                'type': 'International',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'CAMPECHE',
                'icao': 'MMCP',
                'lat': 19.81188,
                'lot': -90.500567,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Campeche.jpg',
                'thumb': 'Campeche.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{

                'name': 'CANCUN',
                'icao': 'MMUN',
                'lat': 21.040341,
                'lot': -86.873564,
                'fbo': 'ASUR FBO',
                'adress': '',
                'desc': '',
                'picture': 'Cancun.jpg',
                'thumb': 'Cancun.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'CHICHEN ITZA',
                'icao': 'MMCT',
                'lat': 20.641539,
                'lot': -88.449444,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Chichen-Itza.jpg',
                'thumb': 'Chichen-Itza.jpg',
                'type': 'International (under request)',
                'time': '1500-2200 Z'
            },{
                'name': 'CIUDAD DEL CARMEN',
                'icao': 'MMCE',
                'lat': 18.651106,
                'lot': -91.802425,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Ciudad-del-Carmen.jpg',
                'thumb': 'Ciudad-del-Carmen.jpg',
                'type': 'International (under request)',
                'time': '1300-0100 Z'
            },{
                'name': 'CIUDAD JUAREZ',
                'icao': 'MMCS',
                'lat': 31.636111,
                'lot': -106.428611,
                'fbo': 'ICCS CIUDAD JUAREZ FBO',
                'adress': '',
                'desc': '',
                'picture': 'Ciudad-Juarez.jpg',
                'thumb': 'Ciudad-Juarez.jpg',
                'type': 'International',
                'time': '1400-0400 Z'
            },{
                'name': 'CIUDAD OBREGON',
                'icao': 'MMCN',
                'lat': 27.398143,
                'lot': -109.833456,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Ciudad-Obregon.jpg',
                'thumb': 'Ciudad-Obregon.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'CIUDAD VICTORIA',
                'icao': 'MMCV',
                'lat': 25.770556,
                'lot': -97.525000,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Ciudad-Victoria.jpg',
                'thumb': 'Ciudad-Victoria.jpg',
                'type': 'International',
                'time': '1200-0100 Z'
            },{
                'name': 'COLIMA',
                'icao': 'MMIA',
                'lat': 19.280404,
                'lot': -103.577271,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Colima.jpg',
                'thumb': 'Colima.jpg',
                'type': 'Domestic',
                'time': '1300-0100 Z'
            },{
                'name': 'COZUMEL',
                'icao': 'MMCZ',
                'lat': 20.511567,
                'lot': -86.930323,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Cozumel.jpg',
                'thumb': 'Cozumel.jpg',
                'type': 'International',
                'time': '1300-0300 Z'
            },{
                'name': 'CUERNAVACA',
                'icao': 'MMCB',
                'lat': 18.834571,
                'lot': -99.261732,
                'fbo':'ICCS CUERNAVACA FBO',
                'desc': '130.42',
                'adress': '',
                'picture': 'Cuernavaca.jpg',
                'thumb': 'Cuernavaca.jpg',
                'type': 'International',
                'time': '1200-0100 Z'
            },{
                'name': 'CULIACAN',
                'icao': 'MMCL',
                'lat': 24.766655,
                'lot': -107.470162,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Culiacan.jpg',
                'thumb': 'Culiacan.jpg',
                'type': 'International',
                'time': '1300-0600 Z'
            },{
                'name': 'CHETUMAL',
                'icao': 'MMCM',
                'lat': 18.506481,
                'lot': -88.324193,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Chetumal.jpg',
                'thumb': 'Chetumal.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'CHIHUAHUA',
                'icao': 'MMCU',
                'lat': 28.702424,
                'lot': -105.962706,
                'fbo':'ICCS CHIHUAHUA FBO',
                'desc': '130.45',
                'adress': '',
                'picture': 'Chihuahua.jpg',
                'thumb': 'Chihuahua.jpg',
                'type': 'International',
                'time': '1400-0400 Z'
            },{
                'name': 'CHILPANCINGO',
                'icao': 'MMCH',
                'lat': 17.576971,
                'lot': -99.517118,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Chilpancingo.jpg',
                'thumb': 'Chilpancingo.jpg',
                'type': 'Domestic',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'DURANGO',
                'icao': 'MMDO',
                'lat': 24.122315,
                'lot': -104.532166,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Durango.jpg',
                'thumb': 'Durango.jpg',
                'type': 'International',
                'time': '1200-0200 Z'
            },{
                'name': 'ENSENADA',
                'icao': 'MMES',
                'lat': 31.793139,
                'lot': -116.600754,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Ensenada.jpg',
                'thumb': 'Ensenada.jpg',
                'type': 'International',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'GUADALAJARA',
                'icao': 'MMGL',
                'lat': 20.525956,
                'lot': -103.307625,
                'fbo':'AEROTRON FBO',
                'adress': '',
                'desc': '',
                'picture': 'Guadalajara.jpg',
                'thumb': 'Guadalajara.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'GUAYMAS',
                'icao': 'MMGM',
                'lat': 27.93649,
                'lot': -110.924898,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Guaymas.jpg',
                'thumb': 'Guaymas.jpg',
                'type': 'International',
                'time': '1400-Sunset'
            },{
                'name': 'GUERRERO NEGRO',
                'icao': 'MMGR',
                'lat': 28.000601,
                'lot': -114.075000,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Guerrero-Negro.jpg',
                'thumb': 'Guerrero-Negro.jpg',
                'type': 'Domestic',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'HERMOSILLO',
                'icao': 'MMHO',
                'lat': 29.095556,
                'lot': -111.047778,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Hermosillo.jpg',
                'thumb': 'Hermosillo.jpg',
                'type': 'International',
                'time': '1300-0300 Z'
            },{
                'name': 'HUATULCO',
                'icao': 'MMBT',
                'lat': 15.772566,
                'lot': -96.256803,
                'fbo':'',
                'adress': '',
                'desc': '',
                'picture': 'Huatulco.jpg',
                'thumb': 'Huatulco.jpg',
                'type': 'International',
                'time': '1300-0000 Z'
            },{
                'name': 'JALAPA',
                'icao': 'MMJA',
                'lat':18.952648,
                'lot': -99.212601,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Jalapa.jpg',
                'thumb': 'Jalapa.jpg',
                'type': 'International',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'LA PAZ',
                'icao': 'MMLP',
                'lat': 24.076112,
                'lot': -110.367182,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'La-Paz.jpg',
                'thumb': 'La-Paz.jpg',
                'type': 'International',
                'time': '1400-0600 Z'
            },{
                'name': 'LEON / BAJIO',
                'icao': 'MMLO',
                'lat': 20.993517,
                'lot': -101.48057,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Leon-Bajio.jpg',
                'thumb': 'Leon-Bajio.jpg',
                'type': 'International',
                'time': '1300-2300 Z'
            },{
                'name': 'LORETO',
                'icao': 'MMLT',
                'lat': 25.989722,
                'lot': -111.346944,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Loreto.jpg',
                'thumb': 'Loreto.jpg',
                'type': 'International',
                'time': '1000-0600 Z'
            },{
                'name': 'LOS MOCHIS',
                'icao': 'MMLM',
                'lat': 25.686962,
                'lot': -109.083009,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Los-Mochis.jpg',
                'thumb': 'Los-Mochis.jpg',
                'type': 'International',
                'time': '1400-0400 Z'
            },{
                'name': 'MANZANILLO',
                'icao': 'MMZO',
                'lat': 19.144722,
                'lot': -104.558333,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Manzanillo.jpg',
                'thumb': 'Manzanillo.jpg',
                'type': 'International',
                'time': '1400-0200 Z'
            },{
                'name': 'MATAMOROS',
                'icao': 'MMMA',
                'lat': 25.770556,
                'lot': -97.525000,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Matamoros.jpg',
                'thumb': 'Matamoros.jpg',
                'type': 'International',
                'time': '1400-0200 Z'
            },{
                'name': 'MAZATLAN',
                'icao': 'MMMZ',
                'lat': 23.167041,
                'lot': -106.270178,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Mazatlan.jpg',
                'thumb': 'Mazatlan.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'MERIDA',
                'icao': 'MMMD',
                'lat': 20.933804,
                'lot': -89.662936,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Merida.jpg',
                'thumb': 'Merida.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'MEXICALI',
                'icao': 'MMML',
                'lat': 32.630556,
                'lot': -115.241667,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Mexicali.jpg',
                'thumb': 'Mexicali.jpg',
                'type': 'International',
                'time': '1400-0900 Z'
            },{
                'name': 'MEXICO',
                'icao': 'MMMX',
                'lat': 19.436076,
                'lot': -99.071908,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Mexico.jpg',
                'thumb': 'Mexico.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'MINATITLAN',
                'icao': 'MMMT',
                'lat': 18.102376,
                'lot': -94.577313,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Minatitlan.jpg',
                'thumb': 'Minatitlan.jpg',
                'type': 'Domestic',
                'time': '1300-0100 Z'
            },{
                'name': 'MONCLOVA',
                'icao': 'MMMV',
                'lat': 26.955833,
                'lot': -101.470000,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Monclova.jpg',
                'thumb': 'Monclova.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'MONTERREY',
                'icao': 'MMMY',
                'lat': 25.777819,
                'lot': -100.107985,
                'fbo':'ICCS MONTERREY FBO',
                'desc': '132.45',
                'adress': '',
                'picture': 'Monterrey.JPG',
                'thumb': 'Monterrey.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'MONTERREY DEL NORTE',
                'icao': 'MMAN',
                'lat': 25.86861,
                'lot': -100.237503,
                'fbo':'ICCS MONTERREY DEL NORTE FBO',
                'desc': '',
                'adress': '',
                'picture': 'Monterrey-del-Norte.jpg',
                'thumb': 'Monterrey-del-Norte.jpg',
                'type': 'International',
                'time': '1300-0600 Z'
            },{
                'name': 'MORELIA',
                'icao': 'MMMM',
                'lat': 19.846465,
                'lot': -101.028137,
                'fbo':'ICCS MORELIA FBO',
                'desc': '118.5',
                'adress': '',
                'picture': 'Morelia.jpg',
                'thumb': 'Morelia.jpg',
                'type': 'International',
                'time': '24 Hours (with overtime)'
            },{
                'name': 'NOGALES',
                'icao': 'MMNG',
                'lat': 31.225532,
                'lot': -110.975744,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Nogales.jpg',
                'thumb': 'Nogales.jpg',
                'type': 'International',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'NUEVO LAREDO',
                'icao': 'MMNL',
                'lat': 27.443333,
                'lot': -99.570000,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Nuevo-Laredo.jpg',
                'thumb': 'Nuevo-Laredo.jpg',
                'type': 'International',
                'time': '1400-0200 Z'
            },{
                'name': 'OAXACA',
                'icao': 'MMOX',
                'lat': 17.000639,
                'lot': -96.721882,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Oaxaca.jpg',
                'thumb': 'Oaxaca.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'PACHUCA',
                'icao': 'MMPC',
                'lat': 20.07663,
                'lot': -98.782886,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Pachuca.jpg',
                'thumb': 'Pachuca.jpg',
                'type': 'Domestic',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'PALENQUE',
                'icao': 'MMPQ',
                'lat': 17.533894,
                'lot': -91.986778,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Palenque.jpg',
                'thumb': 'Palenque.jpg',
                'type': 'Domestic',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'PIEDRAS NEGRAS',
                'icao': 'MMPG',
                'lat': 28.629406,
                'lot': -100.544384,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Piedras-Negras.jpg',
                'thumb': 'Piedras-Negras.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'PLAYA DEL CARMEN',
                'icao': 'PCM',
                'lat': 20.616712,
                'lot': -87.106806,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Playa-del-Carmen.jpg',
                'thumb': 'Playa-del-Carmen.jpg',
                'type': 'Domestic',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'POZA RICA',
                'icao': 'MMPA',
                'lat': 20.502923,
                'lot': -97.470961,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Poza-Rica.jpg',
                'thumb': 'Poza-Rica.jpg',
                'type': 'Domestic',
                'time': '1300-0100 Z'
            },{
                'name': 'PUEBLA',
                'icao': 'MMPB',
                'lat': 19.158056,
                'lot': -98.371389,
                'fbo':'ICCS OFFICE',
                'desc': '',
                'adress': '',
                'picture': 'Puebla.jpg',
                'thumb': 'Puebla.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'PUERTO ESCONDIDO',
                'icao': 'MMPS',
                'lat': 15.875009,
                'lot': -97.091796,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Puerto-Escondido.jpg',
                'thumb': 'Puerto-Escondido.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'PUERTO VALLARTA',
                'icao': 'MMPR',
                'lat': 20.680518,
                'lot': -105.252376,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Puerto-Vallarta.jpg',
                'thumb': 'Puerto-Vallarta.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'PUERTO PEÑASCO',
                'icao': 'MMPE',
                'lat': 31.352602,
                'lot': -113518102,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Puerto-Peñasco.jpg',
                'thumb': 'Puerto-Peñasco.jpg',
                'type': 'International',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'QUERETARO',
                'icao': 'MMQT',
                'lat': 21.250827,
                'lot': -99.480010,
                'fbo':'BUSSINAIR',
                'desc': '',
                'adress': '',
                'picture': 'Queretaro.jpg',
                'thumb': 'Queretaro.jpg',
                'type': 'International',
                'time': '1200-0400 Z'
            },{
                'name': 'REYNOSA',
                'icao': 'MMRX',
                'lat': 26.012500,
                'lot': -98.230000,
                'fbo':'AEROREX',
                'desc': '',
                'adress': '',
                'picture': 'Reynosa.jpg',
                'thumb': 'Reynosa.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'SALTILLO',
                'icao': 'MMIO',
                'lat': 25.544230,
                'lot': -100.930759,
                'fbo':'MERCURIO ICCS SALTILLO FBO',
                'desc': '135.25',
                'adress': '',
                'picture': 'Saltillo.jpg',
                'thumb': 'Saltillo.jpg',
                'type': 'International',
                'time': '1300-0300 Z'
            },{
                'name': 'SAN CRISTOBAL DE LAS CASAS',
                'icao': 'MMSC',
                'lat': 16.692332,
                'lot': -92.539773,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'San-Cristobal-de-las-Casas.jpg',
                'thumb': 'San-Cristobal-de-las-Casas.jpg',
                'type': 'International',
                'time': '1500-0000 Z'
            },{
                'name': 'SAN FELIPE',
                'icao': 'MMSF',
                'lat': 30.931881,
                'lot': -114.808713,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'San-Felipe.jpg',
                'thumb': 'San-Felipe.jpg',
                'type': 'International',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'SAN JOSE DEL CABO',
                'icao': 'MMSD',
                'lat': 23.145536,
                'lot': -109.718267,
                'fbo':'GAP FBO',
                'desc': '',
                'adress': '',
                'picture': 'San-Jose-del-Cabo.jpg',
                'thumb': 'San-Jose-del-Cabo.jpg',
                'type': 'International',
                'time': '1400-0100 Z'
            },{
                'name': 'SAN LUIS POTOSI',
                'icao': 'MMSP',
                'lat': 22.256886,
                'lot': -100.934151,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'San-Luis-Potosi.jpg',
                'thumb': 'San-Luis-Potosi.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'TAMPICO',
                'icao': 'MMTM',
                'lat': 22.290288,
                'lot': -97.869301,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tampico.jpg',
                'thumb': 'Tampico.jpg',
                'type': 'International',
                'time': '1230-0300 Z'
            },{
                'name': 'TAMUIN',
                'icao': 'MMTN',
                'lat': 22.045221,
                'lot': -98.805762,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tamuin.jpg',
                'thumb': 'Tamuin.jpg',
                'type': 'Domestic',
                'time': '1400-2400 Z'
            },{
                'name': 'TAPACHULA',
                'icao': 'MMTP',
                'lat': 14.790572,
                'lot': -92.368801,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tapachula.jpg',
                'thumb': 'Tapachula.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'TEHUACAN',
                'icao': 'MMHC',
                'lat': 18.492046,
                'lot': -97.418592,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tehuacan.jpg',
                'thumb': 'Tehuacan.jpg',
                'type': 'Domestic',
                'time': '1300-0100 Z'
            },{
                'name': 'TEPIC',
                'icao': 'MMEP',
                'lat': 21.417094,
                'lot': -104.83922,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tepic.jpg',
                'thumb': 'Tepic.jpg',
                'type': 'Domestic',
                'time': '1400-0100 Z'
            },{
                'name': 'TIJUANA',
                'icao': 'MMTJ',
                'lat': 32.541423,
                'lot': -116.997751,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tijuana.jpg',
                'thumb': 'Tijuana.jpg',
                'type': 'International',
                'time': '1500-0800 Z'
            },{
                'name': 'TOLUCA',
                'icao': 'MMTO',
                'lat': 19.338948,
                'lot': -99.569836,
                'fbo':'ICCS OFFICE / ASERTEC FBO',
                'desc': '',
                'adress': '',
                'picture': 'Toluca.jpg',
                'thumb': 'Toluca.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'TORREON',
                'icao': 'MMTC',
                'lat': 25.563094,
                'lot': -103.398987,
                'fbo':'ICCS TORREON FBO',
                'desc': '130.45',
                'adress': '',
                'picture': 'Torreon.jpg',
                'thumb': 'Torreon.jpg',
                'type': 'International',
                'time': '1300-0300 Z'
            },{
                'name': 'TULUM',
                'icao': 'MMTU',
                'lat': 20.226900,
                'lot': -87.433601,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tulum.jpg',
                'thumb': 'Tulum.jpg',
                'type': 'International',
                'time': 'Sunrise / Sunset'
            },{
                'name': 'TUXPAN',
                'icao': 'MMTX',
                'lat': 19.598900,
                'lot': -103.371100,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tuxpan.jpg',
                'thumb': 'Tuxpan.jpg',
                'type': '',
                'time': '1300-0100 Z'
            },{
                'name': 'TUXTLA GUTIERREZ',
                'icao': 'MMTG',
                'lat': 16.739033,
                'lot': -93.17169,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Tuxtla-Gutierrez.jpg',
                'thumb': 'Tuxtla-Gutierrez.jpg',
                'type': 'International',
                'time': '1300-0100 Z'
            },{
                'name': 'URUAPAN',
                'icao': 'MMPN',
                'lat': 19.40048,
                'lot': -102.038836,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Uruapan.jpg',
                'thumb': 'Uruapan.jpg',
                'type': 'International',
                'time': '1200-0500 Z'
            },{
                'name': 'VERACRUZ',
                'icao': 'MMVR',
                'lat': 19.144811,
                'lot': -96.186400,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Veracruz.jpg',
                'thumb': 'Veracruz.jpg',
                'type': 'International',
                'time': '1300-0500 Z'
            },{
                'name': 'VILLAHERMOSA',
                'icao': 'MMVA',
                'lat': 17.992994,
                'lot': -92.819252,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Villahermosa.jpg',
                'thumb': 'Villahermosa.jpg',
                'type': 'International',
                'time': '1300-0300 Z'
            },{
                'name': 'ZACATECAS',
                'icao': 'MMZC',
                'lat': 22.900585,
                'lot':-102.682770,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Zacatecas.jpg',
                'thumb': 'Zacatecas.jpg',
                'type': 'International',
                'time': '24 Hours'
            },{
                'name': 'ZIHUATANEJO',
                'icao': 'MMZH',
                'lat': 17.606276,
                'lot': -101.463555,
                'fbo':'',
                'desc': '',
                'adress': '',
                'picture': 'Zihuatanejo.jpg',
                'thumb': 'Zihuatanejo.jpg',
                'type': 'International',
                'time': '1300-0300 Z'
            }
        ];


        $(window).ready(function(){
            var windowH = $(window).height();
            var headerH = $(".header").height();
            var footerH = $(".footer").height();
            var result = (windowH-(headerH));
            $(".allSides").css({height: result});
            $("#map").css({height: result});
            $("#map2").css({height: result});

            $("#instructions").css({height: (result-80-$("#aux").height())});

            $("#three").css({width: ($("#allSides").width() - ($("#one").width() + $("#two").width()) - 82)});

            $("#big").css({width: ($("#allSides").width() - ($("#one").width()) - 42)});

            var myLatlng = new google.maps.LatLng(19.34449,-99.273841);
            var mapOptions = {
                zoom: 15,
                center: myLatlng
            };
            map = new google.maps.Map(document.getElementById("map"), mapOptions);

            marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title:"Hello World!"
            });

            var myLatlng2 = new google.maps.LatLng(-11.7133685,-73.99785);
            var mapOptions2 = {
                zoom: 4,
                center: myLatlng2
            };
            map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);


            var geocoder;
            var world_geometry;
            var first = 0;
            $("#paises li").click(function(e){
                $("#paises li").removeClass("active");
                $(this).addClass("active");

                var country = $(this).text();
                var key = $(this).attr('data-country');
                var zoom = parseInt($(this).attr('data-zoom'),10);

                geocoder = new google.maps.Geocoder();
                geocoder.geocode( {'address' : country}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        map2.setCenter(results[0].geometry.location);
                        map2.setZoom(zoom);
                    }
                });

                if(first === 1){
                    world_geometry.setMap(null);
                }
                world_geometry = new google.maps.FusionTablesLayer({
                    query: {
                        select: 'geometry',
                        from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
                        where: "ISO_2DIGIT IN ('"+key+"')"
                    },
                    options : {suppressInfoWindows:true},
                    styles : [
                        {
                            polygonOptions:
                            {
                                fillColor: "#FE8484",
                                strokeColor: "#bcbcbc",
                                fillOpacity: ".5"
                            }
                        }
                    ]
                });
                world_geometry.setMap(map2);
                first = 1;

            });

            loadPlace(0);

            var newlocation;
            $("#locations").change(function(){
                var index = parseInt($(this).val(), 10);
                $("#instructions li").removeClass('active');
                $("#instructions li:eq("+index+")").addClass('active');
                loadPlace(index);
            });

            jQuery.each(places, function(index){
                $("#instructions").append('<li><a href="#">' +
                    '<div class="half photo"><img src="' +"assets/images/airports/"+ places[index].picture+ '" alt="'+ places[index].name +'"/></div>' +
                    '<div class="half info">' +
                    '<p class="title">'+places[index].name+'</p>' +
                    '<p>'+places[index].icao+'</p>' +
                    '</div>' +
                    '</a></li>');

                $("#locations").append('<option value="'+index+'">'+places[index].icao+' | '+places[index].name+'</option>');
            });

            $("#instructions li:eq(0)").addClass('active');

            $("#instructions li a").click(function(e){
                e.preventDefault();
                var index = $(this).parent().index();
                $("#instructions li").removeClass('active');
                $(this).parent().addClass('active');

                $('#locations').val(index);
                loadPlace(index, 'no');
            });

            $("#locations").searchable();

            $(".menu ul li a").click(function(e){
                e.preventDefault();
                var padre = $(this).parent();
                $(".menu ul li").removeClass('active');
                padre.addClass('active');
                var data = padre.attr('data-action');
                if(data === "contry"){
                    $(".countries").addClass('active');
                }else{
                    $(".countries").removeClass('active');
                }
            });
        });

        function loadPlace(value, go){
            $("#name").html(places[value].name+ '<br/><small>'+places[value].icao+'</small>');

            if(places[value].fbo !== '' || typeof places[value].fbo === 'undefined'){
                $("#fbo").html('FBO: <span>'+places[value].fbo+'</span>');
            }else{
                $("#fbo").html('');
            }
            if(places[value].desc !== '' || typeof places[value].desc === 'undefined'){
                $("#desc").html('FREQ: <span>'+places[value].desc+'</span>');
            }else{
                $("#desc").html('');
            }

            if(places[value].type !== '' || typeof places[value].type === 'undefined'){
                $("#type").html('TYPE: <span>'+places[value].type+'</span>');
            }else {
                $("#type").html('');
            }

            if(places[value].time !== '' || typeof places[value].time === 'undefined'){
                $("#hour").html('TIME: <span>'+places[value].time+'</span>');
            }else{
                $("#hour").html('');
            }

            $("#image").attr('src', 'assets/images/airports/'+ places[value].thumb);
            $("#image").attr('alt', places[value].name);

            marker.setMap(null);
            newlocation = new google.maps.LatLng(places[value].lat, places[value].lot);
            marker = new google.maps.Marker({
                position: newlocation,
                map: map
            });
            map.setCenter(marker.getPosition());

//            POSITION DROPBOX
            var nav = $('#instructions li.active');
            if (nav.length) {
                if(go === 'no'){

                }else{
                    $("#instructions").scrollTop(0);
                    var contentNav = nav.position().top;
                    $("#instructions").scrollTop(contentNav - 100);
                }

//                $("#instructions").scrollTop(contentNav - (nav.height()+20));
            }
        }
    })

;
