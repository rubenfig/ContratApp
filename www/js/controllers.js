angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.buscar=function(){
    $location.path("/app/search");
  };
  $scope.goToLogin= function (){

  };
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.categorias = [
    { title: 'Electricidad', id: 1 },
    { title: 'Electrónica', id: 2 },
    { title: 'Albañilería', id: 3 },
    { title: 'Plomería', id: 4 },
    { title: 'Informática', id: 5 },
    { title: 'Enseñanza particular', id: 6 }
  ];

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Electricidad', id: 1 },
    { title: 'Electrónica', id: 2 },
    { title: 'Albañilería', id: 3 },
    { title: 'Plomería', id: 4 },
    { title: 'Informática', id: 5 },
    { title: 'Enseñanza particular', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.trabajadores= [
    { nombre: 'Juan Gonzalez', id: 1, contacto: 123456, zona: "San Lorenzo" },
    { nombre: 'Pedro Fernandez', id: 2, contacto: 123456, zona: "San Lorenzo"  },
    { nombre: 'Pedro Fernandez', id: 3, contacto: 123456, zona: "San Lorenzo"  },
    { nombre: 'Pedro Fernandez', id: 4, contacto: 123456, zona: "San Lorenzo"  },
    { nombre: 'Pedro Fernandez', id: 5, contacto: 123456, zona: "San Lorenzo"  },
    { nombre: 'Pedro Fernandez', id: 6, contacto: 123456, zona: "San Lorenzo"  }
  ]

})
  .controller('PerfilCtrl', function($scope, $stateParams) {
    $scope.estrellas=["ion-android-star-outline", "ion-android-star-outline","ion-android-star-outline",
      "ion-android-star-outline","ion-android-star-outline"];
    $scope.calificar=function (i){
      angular.forEach($scope.estrellas, function(value, key) {
        if (key<=i){
          $scope.estrellas[key]="ion-android-star";

        }else {
          $scope.estrellas[key]= "ion-android-star-outline";
        }
      });

    };
    $scope.trabajadores= [
      { nombre: 'Juan Gonzalez', id: 1, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
        comentarios:[{nombre:"Anónimo", contenido: "Muy buen servicio."}, {nombre:"Anónimo", contenido: "Puntualidad excelente."}] },
      { nombre: 'Pedro Fernandez', id: 2, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}]  },
      { nombre: 'Pedro Fernandez', id: 3, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}]  },
      { nombre: 'Pedro Fernandez', id: 4, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}]  },
      { nombre: 'Pedro Fernandez', id: 5, contacto: 123456, zona: "San Lorenzo" , descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}] },
      { nombre: 'Pedro Fernandez', id: 6, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}]  }
    ];
    $scope.trabajador_actual=$scope.trabajadores[$stateParams.trabajadorId-1];
    console.log($scope.trabajador_actual);

  });
