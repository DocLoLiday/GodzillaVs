app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Godzilla Vs...!'; 
  $scope.promo = 'What kind of city-stomping romp suits your mood?';
  $scope.reviews = [ 
  { 
    title: 'Godzilla (King of the Monsters)',
    promo: 'A tale of two countries',
    releaseYear: 1954, 
    postDate: new Date('2015', '06', '22'), 
    header: 'img/GodzillaKingOfTheMonsters.jpg',
    reviewContent: 'partials/GodzillaKotM.html'
  }
];


}]);