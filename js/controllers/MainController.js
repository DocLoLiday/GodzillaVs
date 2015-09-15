app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Godzilla Vs...!'; 
  $scope.promo = 'What kind of city-stomping romp suits your mood?';
  $scope.reviews = [ 
  { 
    id:0,
    title: 'Godzilla (King of the Monsters)',
    promo: 'A tale of two countries',
    releaseYear: 1954, 
    postDate: new Date('2015', '06', '22'), 
    header: 'img/GodzillaKingOfTheMonsters.jpg',
    reviewContent: 'partials/GodzillaKotM.html'
  },
  { 
    id:1,
    title: 'Godzilla Raids Again',
    promo: 'Gigantus, What A Big Big Ball',
    releaseYear: 1955, 
    postDate: new Date('2015', '06', '22'), 
    header: 'img/GodzillaKingOfTheMonsters.jpg',
    reviewContent: 'partials/GodzillaKotM.html'
  }
];


}]);