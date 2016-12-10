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
  $scope.categoria_elegida={};
  $scope.sub_categorias=['Cámaras','Aires Acondicionados', 'Todos'];
  $scope.rubro="";
  $scope.buscar=function(){
    $location.path("/app/search");
  };
  $scope.filtrar=function(){
    $location.path("/app/playlists/Búsqueda");
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
    { title: 'Instalaciones (Cámaras, AA, etc)', id: 1, sub_categorias: ['Cámaras','Aires Acondicionados', 'Todos']},
    { title: 'Electrónica', id: 2 , sub_categorias:['TV','Radio','Todos']},
    { title: 'Albañilería', id: 3 ,sub_categorias: ['Todos']},
    { title: 'Plomería', id: 4 ,sub_categorias: ['Todos']},
    { title: 'Informática', id: 5 ,sub_categorias: ['Todos']},
    { title: 'Enseñanza particular', id: 6 ,sub_categorias: ['Todos']},
    { title: 'Electricidad', id: 7,sub_categorias: ['Todos']}
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
    { title: 'Instalaciones (Cámaras, AA, etc)', id: 1 },
    { title: 'Electrónica', id: 2 },
    { title: 'Albañilería', id: 3 },
    { title: 'Plomería', id: 4 },
    { title: 'Informática', id: 5 },
    { title: 'Enseñanza particular', id: 6 },
    { title: 'Electrónica', id: 7}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.rubro=$stateParams.playlistId;
  if($scope.rubro==='Instalaciones (Cámaras, AA, etc)'){
    $scope.trabajadores = [
      {
        nombre: 'Juan Gonzalez',
        id: 1,
        rubro: "Aires Acondicionados",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 5
      },
      {nombre: 'Pedro Fernandez', id: 2, rubro: "Cámaras", contacto: 123456, zona: "San Lorenzo", calificacion: 5},
      {nombre: 'Pedro Fernandez', id: 3, rubro: "Cámaras", contacto: 123456, zona: "San Lorenzo", calificacion: 4},
      {
        nombre: 'Pedro Fernandez',
        id: 4,
        rubro: "Aires Acondicionados",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 4.5
      },
      {
        nombre: 'Pedro Fernandez',
        id: 5,
        rubro: "Aires Acondicionados",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 1
      },
      {
        nombre: 'Pedro Fernandez',
        id: 6,
        rubro: "Aires Acondicionados",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 3
      }
    ];
  }else if($scope.rubro==='Búsqueda'){
    $scope.trabajadores=[{
      nombre: 'Pedro Fernandez',
      id: 4,
      rubro: "Aires Acondicionados",
      contacto: 123456,
      zona: "San Lorenzo",
      calificacion: 4.5
    },
      {
        nombre: 'Pedro Fernandez',
        id: 5,
        rubro: "Aires Acondicionados",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 1
      },
      {
        nombre: 'Pedro Fernandez',
        id: 6,
        rubro: "Aires Acondicionados",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 3
      }]
  }
  else {
    $scope.trabajadores = [
      {
        nombre: 'Juan Gonzalez',
        id: 1,
        rubro: "N/A",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 5
      },
      {nombre: 'Pedro Fernandez', id: 2, rubro: "N/A",contacto: 123456, zona: "San Lorenzo", calificacion: 5},
      {nombre: 'Pedro Fernandez', id: 3, rubro: "N/A", contacto: 123456, zona: "San Lorenzo", calificacion: 4},
      {
        nombre: 'Pedro Fernandez',
        id: 4,
        rubro: "N/A",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 4.5
      },
      {
        nombre: 'Pedro Fernandez',
        id: 5,
        rubro:"N/A",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 1
      },
      {
        nombre: 'Pedro Fernandez',
        id: 6,
        rubro: "N/A",
        contacto: 123456,
        zona: "San Lorenzo",
        calificacion: 3
      }
    ];
  }
})
  .controller('PerfilCtrl', function($scope, $stateParams, $ionicPopup) {
    $scope.estrellas=["ion-android-star-outline", "ion-android-star-outline","ion-android-star-outline",
      "ion-android-star-outline","ion-android-star-outline"];
    $scope.favorito='ion-ios-heart-outline';
    $scope.fav = function (){
      if($scope.favorito=='ion-ios-heart-outline'){
        $scope.favorito='ion-ios-heart';
      }else{
        $scope.favorito='ion-ios-heart-outline';
      }
    };
    $scope.calificar=function (i){
      angular.forEach($scope.estrellas, function(value, key) {
        if (key<=i){
          $scope.estrellas[key]="ion-android-star";

        }else {
          $scope.estrellas[key]= "ion-android-star-outline";
        }
      });

    };
    if($stateParams.rubro==='Instalaciones (Cámaras, AA, etc)'){
      $scope.trabajadores= [
        { nombre: 'Juan Gonzalez', id: 1, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
        "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
          comentarios:[{id:1,nombre:"Anónimo", contenido: "Muy buen servicio."}, {id:2,nombre:"Anónimo", contenido: "Puntualidad excelente."}] },
        { nombre: 'Pedro Fernandez', id: 2, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
        "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
          comentarios:[]},
        { nombre: 'Pedro Fernandez', id: 3, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
        "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}] ,
          comentarios:[] },
        { nombre: 'Pedro Fernandez', id: 4, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
        "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
          comentarios:[]  },
        { nombre: 'Pedro Fernandez', id: 5, contacto: 123456, zona: "San Lorenzo" , descripcion:"Profesional con titulo del SNPP" +
        "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
          comentarios:[] },
        { nombre: 'Pedro Fernandez', id: 6, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
        "y 15 años de trabajo con instalaciones domesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
          comentarios:[]  }
      ]
    }else{
    $scope.trabajadores= [
      { nombre: 'Juan Gonzalez', id: 1, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
        comentarios:[{id:1,nombre:"Anónimo", contenido: "Muy buen servicio."}, {id:2,nombre:"Anónimo", contenido: "Puntualidad excelente."}] },
      { nombre: 'Pedro Fernandez', id: 2, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
      comentarios:[]},
      { nombre: 'Pedro Fernandez', id: 3, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}] ,
        comentarios:[] },
      { nombre: 'Pedro Fernandez', id: 4, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
        comentarios:[]  },
      { nombre: 'Pedro Fernandez', id: 5, contacto: 123456, zona: "San Lorenzo" , descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domeesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
        comentarios:[] },
      { nombre: 'Pedro Fernandez', id: 6, contacto: 123456, zona: "San Lorenzo", descripcion:"Profesional con titulo del SNPP" +
      "y 15 años de trabajo con instalaciones domesticas", tarifas:[{nombre: "Instalacion de fluorescentes", tarifa: 500000}],
        comentarios:[]  }
    ];}
    $scope.trabajador_actual=$scope.trabajadores[$stateParams.trabajadorId-1];
    console.log($scope.trabajador_actual);


    $scope.abrirModal=function () {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<div class="list">'+
                    '<label class="item item-input">'+
                     '<input type="text" placeholder="Nombre" style="font-size: smaller;" ng-model="data.nombre">'+
                    '</label>'+
                    '<label class="item item-input">'+
                      '<textarea placeholder="Por favor, comente su experiencia" style="font-size: smaller;" ng-model="data.contenido"></textarea>'+
                    '</label>'+
                  '</div>',
        title: 'Comentario',
        scope: $scope,
        buttons: [
          { text: 'Cancelar' },
          {
            text: '<b>Comentar</b>',
            type: 'button-positive',
            onTap: function(e) {

              if (!$scope.data.nombre) {
                  $scope.data.nombre='Anónimo';

              }
              if(!$scope.data.contenido){
                  alert("Introduzca un comentario");
                  e.preventDefault();
              }
              $scope.data.id=$scope.trabajador_actual.comentarios.length+1;
              $scope.trabajador_actual.comentarios.unshift($scope.data);

              return $scope.data;

            }
          }
        ]
      });

      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });


    };





  });
