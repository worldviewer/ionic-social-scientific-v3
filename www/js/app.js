// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ion-autocomplete', 'ion-tree-list'])

.filter("sanitize", ['$sce', function($sce) {return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);}
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

// Controller for constructs; this is where people end up after selecting a model as
// the search result
.controller('ControversyCtrl', ['$scope', '$state', '$stateParams', 'Construct',
  '$location', '$anchorScroll', '$ionicScrollDelegate', 
  function ($scope, $state, $stateParams, Construct, 
    $location, $anchorScroll, $ionicScrollDelegate) {

  $scope.tasks = [
    {
      name: "Let me respond...",
      tree: [
        {name: "I don't understand"},
        {name: "I can counter that!"},
        {name: "I've seen similar"},
        {name: "Jump to conclusions!"}
      ]
    }
  ];

  var cardId = $stateParams.cardId;
  console.log(cardId);

  Construct.getCardById(cardId, function(foundCardById) {
    if (foundCardById) {
      $scope.card = foundCardById;
    } else {
      $scope.none = "Error!";
    }
  });

  $scope.getCardById = function(cardId) {
    return Construct.getCardById(cardId, function(foundCardById) {
      if (foundCardById) {
        return foundCardById;
      } else {
        $scope.none = "Error!";
      }
    });
  };

  $scope.getExpertById = function(expertId) {
    return Construct.getExpertById(expertId, function(foundExpertById) {
      if (foundExpertById) {
        return foundExpertById;
      } else {
        $scope.none = "Error!";
      }
    });
  };

  $scope.getQuestionById = function(questionId) {
    return Construct.getQuestionById(questionId, function(foundQuestionById) {
      if (foundQuestionById) {
        return foundQuestionById;
      } else {
        $scope.none = "Error!";
      }
    });
  };

  $scope.scrollToAnchorWithinCurrentPage = function(anchor) 
  {
    $location.hash(anchor);
    var handle = $ionicScrollDelegate.$getByHandle('content');
    handle.anchorScroll();
  };

}])

// Controller for constructs; this is where people end up after selecting a model as
// the search result
.controller('ModelCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

  var cardId = $stateParams.controversyId;
  console.log(cardId);

  Construct.getCardById(cardId, function(foundCardById) {
    if (foundCardById) {
      $scope.card = foundCardById;
    } else {
      $scope.none = "Error!";
    }
  });

}])

// Controller for constructs; this is where people end up after selecting a model as
// the search result
.controller('ClaimCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

  $scope.tasks = [
    {
      name: "Let me respond...",
      tree: [
        {name: "I don't understand"},
        {name: "I can counter that!"},
        {name: "I've seen similar"},
        {name: "Jump to conclusions!"}
      ]
    }
  ];

  var cardId = $stateParams.cardId;
  console.log(cardId);

  Construct.getCardById(cardId, function(foundCardById) {
    if (foundCardById) {
      $scope.proposition = foundCardById;
    } else {
      $scope.none = "Error!";
    }
  });

  $scope.getCommentById = function(commentId) {
    return Construct.getCommentById(commentId, function(foundCommentById) {
      if (foundCommentById) {
        return foundCommentById;
      } else {
        $scope.none = "Error!";
      }
    });
  };

  $scope.getCardById = function(cardId) {
    return Construct.getCardById(cardId, function(foundCardById) {
      if (foundCardById) {
        return foundCardById;
      } else {
        $scope.none = "Error!";
      }
    });
  };

  $scope.getExpertById = function(expertId) {
    return Construct.getExpertById(expertId, function(foundExpertById) {
      if (foundExpertById) {
        return foundExpertById;
      } else {
        $scope.none = "Error!";
      }
    });
  };

  $scope.getQuestionById = function(questionId) {
    return Construct.getQuestionById(questionId, function(foundQuestionById) {
      if (foundQuestionById) {
        return foundQuestionById;
      } else {
        $scope.none = "Error!";
      }
    });
  };

}])

// Controller for constructs; this is where people end up after selecting a model as
// the search result
.controller('QuestionCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

  var questionId = $stateParams.questionId;
  console.log(questionId);

  Construct.getQuestionById(questionId, function(foundQuestionById) {
    if (foundQuestionById) {
      $scope.card = foundQuestionById;
    } else {
      $scope.none = "Error!";
    }
  });

}])

// Controller for constructs; this is where people end up after selecting a model as
// the search result
.controller('ExpertCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

  var expertId = $stateParams.expertId;
  console.log(expertId);

  Construct.getExpertById(expertId, function(foundExpertById) {
    if (foundExpertById) {
      $scope.card = foundExpertById;
    } else {
      $scope.none = "Error!";
    }
  });

}])

// Controller for constructs; this is where people end up after selecting a model as
// the search result
.controller('AnnotationCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

  var annotationId = $stateParams.annotationId;
  console.log(annotationId);

  Construct.getAnnotationById(annotationId, function(foundAnnotationById) {
    if (foundAnnotationById) {
      $scope.annotation = foundAnnotationById;
    } else {
      $scope.none = "Error!";
    }
  });

}])

.controller('SearchCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

  $scope.openCard = function (callback) {
      // print out the selected item
      console.log(callback.item); 

      // Evaluate what kind of card it is, and then transition the state to the
      // appropriate ui-router state, based upon the card.type; Use $stateParams to
      // send the construct card to render, according to id

      // $state.go('tab.controversy', {cardId: callback.item.id});
      $state.go('tab.controversy', {cardId: 0});
  }

  $scope.isModel = function(item) {
    if (item.type === "Model") { return true; }
    else { return false; }
  };

  $scope.callbackMethod = function (query) {

    // Example of a return object:
    // {
    //     "items" : [ {
    //         "name" : "item1"
    //     },{
    //         "name" : "item2"
    //     },
    //         ...
    //     ]
    // }

    return Construct.find(query, function(results) {
      return {"items": results};
    });
  }

}])

.controller('TrendingCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

}])

.controller('PostCtrl', ['$scope', '$state', '$stateParams', 'Construct', 
  function ($scope, $state, $stateParams, Construct) {

}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.trending', {
    url: '/trending',
    views: {
      'tab-trending': {
        templateUrl: 'templates/tab-trending.html',
        controller: 'TrendingCtrl'
      }
    }
  })

  .state('tab.post', {
    url: '/post',
    views: {
      'tab-post': {
        templateUrl: 'templates/tab-post.html',
        controller: 'PostCtrl'
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('tab.controversy', {
      url: '/controversies/:cardId',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-controversy.html',
          controller: 'ControversyCtrl'
        }
      }
    })

  .state('tab.model', {
      url: '/models/:cardId',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-model.html',
          controller: 'ModelCtrl'
        }
      }
    })

  .state('tab.claim', {
      url: '/claims/:cardId',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-claim.html',
          controller: 'ClaimCtrl'
        }
      }
    })

  .state('tab.question', {
      url: '/questions/:questionId',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-question.html',
          controller: 'Question1Ctrl'
        }
      }
    })

  .state('tab.expert', {
      url: '/experts/:expertId',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-expert.html',
          controller: 'ExpertCtrl'
        }
      }
    })

  .state('tab.annotation', {
      url: '/annotations/:annotationId',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-annotation.html',
          controller: 'AnnotationCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/search');

})

// This service will source the data model mock, until the data model design becomes sufficiently fixed that it
// is no longer changing
.service("Construct", [function() {

  var comments = [{
    id: 0,
    expert_id: 15,
    title: "Peratt's Galactic Simulations",
    comment: "What should probably be mentioned is that Peratt has used government supercomputers to simulate proper galactic rotation curves without the need for dark matter.  All that he did was fit the cosmic plasma models to laboratory plasma observations.\n\nSee <a href='http://www.plasma-universe.com/Galaxy_formation'>Ian Tresman's Plasma Wiki Page on Peratt</a>   <i class='icon ion-plus-circled'></i>.",
    postscript: null,
    date: "June 1, 2015 4:20 PM PST",
    score: 10,
    moderate: false

  }, {

    id: 1,
    expert_id: 16,
    title: "Bullshit",
    comment: "The Electric Universe has been debunked.  Please stop the nonsense.",
    postscript: "We kindly ask that you keep debate containered in the worldview pages.  This area is reserved for the accumulation of supporting resources.  For debate, go to<br><br><span class='blue-pane'>I Can Counter That</span><br><br>",
    date: "June 3, 2015 10:01 PM EST",
    score: 1,
    moderate: true

  }];

  var questions = [{
    id: 0,
    expert_ids: [3],
    title: "Are winds partly driven by electromagnetic forces acting on the charged particles in the air?",
    origin: ["https://youtu.be/XdrDg-Nuxdg?t=2228"],
    supporting_claims: [30,31,32,33,34],
    conventional_answers: null,
    anomalous_observations: null,
    resources: null,
    related_questions: null

  }, {

    id: 1,
    expert_ids: [3],
    title: "Are cyclones and tornados partly driven by electromagnetic forces acting on the charged water droplets?",
    origin: ["https://youtu.be/XdrDg-Nuxdg?t=2228"],
    supporting_claims: [35],
    conventional_answers: null,
    anomalous_observations: null,
    resources: [{reference: "Tinsley, B. A., 2008. The global atmospheric electric circuit and its effects on cloud microphysics. Reports on Progress in Physics, 71(6), 066801.", 
      URL: "http://gacc.nifc.gov/sacc/predictive/SOLAR_WEATHER-CLIMATE_STUDIES/GCR%20Solar%20Wind%20Influence%20on%20Global%20Electric%20Circuit%20and%20Cloud%20Microphysics%20Tinsley%202008.pdf"}],
    related_questions: null

  }, {

    id: 2,
    expert_ids: [3],
    title: "Are the jet streams primarily plasma effects whose locations are determined partly by their interactions with the ionospheric current systems above?",
    origin: ["https://youtu.be/XdrDg-Nuxdg?t=2285"],
    supporting_claims: [36],
    conventional_answers: ["The jet streams are assumed to be the result of fluid motions driven by pressure changes in the atmosphere related to Hadley Cell circulation and modified by the Coriolis effect."],
    anomalous_observations: ["It's not known why the jet stream jets are concentrated in such narrow bands."],
    resources: null,
    related_questions: null

  }, {

    id: 3,
    expert_ids: [3],
    title: "Do ionospheric changes cause the climate cycles by altering the Global Electric Circuit?",
    origin: ["https://youtu.be/XdrDg-Nuxdg?t=2397"],
    supporting_claims: [37,38,39,40],
    conventional_answers: [],
    anomalous_observations: [],
    resources: null,
    related_questions: null

  }, {

    id: 4,
    expert_ids: [3],
    title: "Can ionospheric current changes induce changes in ocean circulation? Can this be the cause of the 20-to-30-year Pacific Decadal Oscillation?",
    origin: ["https://youtu.be/XdrDg-Nuxdg?t=2397"],
    supporting_claims: [],
    conventional_answers: [],
    anomalous_observations: [],
    resources: null,
    related_questions: null

  }];

  var annotations = [{}];

  // The data model will involve constructs, which are collections of cards.
  // A card is defined as a collection of content with a scope that is easy
  // for the user to identify, and which preferably fits onto one screen.

  // Each card is the start of a linked list that points to the next card.
  // Some cards are parents, in which case they have a children array that
  // defines all of the subtopics for that topic.

  // There are also controversy cards, whose children are also parents.

  var cards = [{
    id: 0,
    controversy: true,
    parent: true,
    type: "Model",
    display: true,
    title: "Electric Joule Heating",
    sourcename: null,

    images: ["img/headers/electric-joule-heating-header.jpg"],
    definition: "Electric joule heating proposes that the Earth can be electrically heated by the flow of charged particles coming from the Sun and other cosmic plasma phenomena.",
    status: "Electric joule heating is not widely known, and much of the data necessary to judge the idea has yet to be taken. No known experiments or observational satellites are currently planned to test it. The concept is not taught to climatologists today, and it appears in no climate textbooks. Electric joule heating is a natural implication of the Electric Universe paradigm.",
    search_hit: null,
    claim_ids: [1,2,3,4,5,6,7,8,9,10,11],
    critique_ids: [12,45,46],
    cmap_ids: [13,14,15,16,17,50,51,52,53,54,55,56,57,58,59],
    article_ids: [18,19,20,47],
    forum_ids: [21],
    paper_ids: [22],
    book_ids: [23,24,25],
    media_ids: [26,27,28,29],
    question_ids: [0,1,2,3,4],
    next: 1,
    avatar: "img/avatars/electric-joule-avatar.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0,3,9],
    nodes: null,
    postscript: null

  }, {

    id: 1,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Cosmic Plasma Debate",
    sourcename: null,

    images: ["img/headers/AJ-vs-IEEE.jpg"],
    definition: "There has been a debate over how to model cosmic plasmas (such as the solar wind) for more than half a century between the Astrophysical Journal and IEEE's Transactions on Plasma Science.",
    status: null,
    search_hit: null,

    claim_ids: [41,42,43,44,48,49],
    comment_ids: [0,1],
    critique_ids: null,
    next: 2,
    avatar: "img/journals/IEEE.png",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [8],
    nodes: null,
    postscript: null

  }, {

    id: 2,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Plasmas Are Not Fluids",
    sourcename: null,

    images: null, // FILL!
    definition: "Conventional theory models this flow of charged particles fundamentally as a magnetized fluid, but these models have been in dispute since their inception.",
    status: null,
    search_hit: null,

    claim_ids: [60,62,61,63,65,66,67,68,69,70],
    critique_ids: null,
    next: 3,
    avatar: "img/avatars/plasma-not-fluids.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [9],
    nodes: null,
    postscript: null

  }, {

    id: 3,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The Solar Wind is an Electric Current",
    sourcename: null,

    images: null, // FILL!
    definition: "Electric joule heating stems from the idea that these moving charges are an electric current, and advocates point to the fact that the solar wind is oftentimes guided by planetary magnetic fields into the poles.",
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: 4,
    avatar: "img/avatars/solar-wind-current.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 4,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Polar Hot Spots",
    sourcename: null,

    images: null, // FILL!
    definition: "The presence of hot spots at the poles of Enceladus, Neptune and Venus, in particular, are suggestive of the simple idea that these moving charged particles can heat up the planets.",
    status: null,    
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: 5,
    avatar: "img/avatars/polar-hotspots.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 5,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Warming Martian Ice Caps",
    sourcename: null,

    images: null, // FILL!
    definition: "It was noted in 2005 by NASA that Mars' ice caps had also been diminishing for three summers in a row.",
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: 6,
    avatar: "img/avatars/warming-martian-ice-caps.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 6,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Pluto's Anomalous Warming",
    sourcename: null,

    images: null,
    definition: "Pluto has continued to warm up even as it moves away from the Sun.",
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: 7,
    avatar: "img/avatars/pluto-warming.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 7,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The Polar Vortex is Tricky to Model",
    sourcename: null,

    images: null, // FILL!
    definition: "Many atmospheric circulation models are unable to reproduce the observed polar stratospheric winds (aka the polar vortex).",
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: 8,
    avatar: "img/avatars/polar-vortex.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 8,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Dipolar Vortices Suggest Electrical Plasmas",
    sourcename: null,

    images: null, // FILL!
    definition: "The observed splitting of the polar vortex on both Earth and Venus is an expected feature of laboratory plasmas when they are conducting electrical currents, yet climate and planetary scientists claim to not understand either observation.",
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: 9,
    avatar: "img/avatars/dipolar-vortex.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 9,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Solar Wind Intensity Correlates With Lightning Strikes",
    sourcename: null,

    images: null, // FILL!
    definition: "The solar wind intensity correlates with lightning strikes, raising questions about lightning's underlying cause, and suggesting that the Earth is part of a larger electrical circuit.",
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: 10,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 10,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Sunspots Correlate With Lower Stratosphere Temperature Anomalies",
    sourcename: null,

    images: null, // FILL!
    definition: "Sunspot numbers appear to correlate with lower stratosphere temperature anomalies, minus the temporal effects of volcanic eruptions -- suggesting that the sunspots are related to these electrical flows. Laboratory plasma terrella experiments appear to confirm this suspicion.",
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: 11,
    avatar: "img/avatars/sunspots-stratosphere.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 11,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Electric Joule Heating Is Not Fully Captured by Existing Models",
    sourcename: null,

    images: null, // FILL!
    definition: "Electric field variability can significantly increase the amount of Joule heating, yet existing general circulation models assume a smooth field in both space and time.  In other words, the current climate models do not take electric joule heating into account.",
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/general-circulation-models.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 12,
    controversy: false,
    parent: true,
    type: "Critique",
    display: true,
    title: "The Solar Wind is Neutral",
    sourcename: null,

    images: ["img/critiques/electric-joule-heating-lsvalgaard.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/lief-svalgaard.png",
    url: ["http://wattsupwiththat.com/2013/12/26/new-paper-clouds-blown-by-the-solar-wind/#more-99909"],
    text: null, // FILL!
    highighter: null,
    expert_ids: [4],
    nodes: null,
    postscript: null

  }, {

    id: 13,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "The Primitive Equations Ignore Charge Change Phenomena",
    sourcename: "Private Communications",

    images: ["img/concept-maps/electric-joule-heating-optimized.svg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: 14,
    avatar: "img/avatars/primitive-equations.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0,1],

    // May need to create multiple maps for differing image sizes
    nodes: [{alt:"", title:"", href:"#", shape:"rect", coords:"31,13,91,52"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"162,10,225,48"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"238,71,300,98"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"105,118,148,156"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"190,143,246,180"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"188,240,249,276"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"96,245,158,274"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"7,125,54,153"},
      {alt:"", title:"", href:"#", shape:"rect", coords:"3,221,58,277"}],
    postscript: "Inspired by communication with atmospheric scientist, @BillNichols"

  }, {

    id: 14,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "Electric Joule Heating, E-fields and Magnetic Fields Explained",
    sourcename: null,

    images: null, // FILL!
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: 15,
    avatar: "img/avatars/electric-joule-avatar.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 15,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is a Plasma? And Why Does It Matter?",
    sourcename: null,

    images: null, // FILL!
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: 16,
    avatar: "img/avatars/plasma-ball.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 16,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is a General Circulation Model?",
    sourcename: null,

    images: null, // FILL!
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: 17,
    avatar: "img/avatars/general-circulation-models.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 17,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is Top of the Atmosphere Model Tuning?",
    sourcename: null,

    images: null, // FILL!
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/toa-model-tuning.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    nodes: null,
    postscript: null

  }, {

    id: 18,
    controversy: false,
    parent: false,
    type: "Article",
    display: true,
    title: "Solar Wind Surprise",
    sourcename: "Wattsupwiththat Blog",

    images: ["img/articles/wuwt-solar-wind-surprise.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: 19,
    avatar: "/img/articles/solar-wind-surprise.png",
    url: "http://wattsupwiththat.com/2009/09/10/solar-wind-suprise-this-discovery-is-like-finding-it-got-hotter-when-the-sun-went-down/",
    text: null,
    highighter: null,
    expert_ids: [5,6],
    nodes: null,
    postscript: null

  }, {

    id: 19,
    controversy: false,
    parent: false,
    type: "Article",
    display: true,
    title: "Global Warming in a Climate of Ignorance",
    sourcename: "Holoscience",

    images: ["img/articles/sun-power-surge.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: 20,
    avatar: "img/articles/changing-sun-in-xrays.jpg",
    url: "http://www.holoscience.com/wp/global-warming-in-a-climate-of-ignorance/",
    text: null,
    highighter: null,
    expert_ids: [9],
    nodes: null,
    postscript: null

  }, {

    id: 20,
    controversy: false,
    parent: false,
    type: "Article",
    display: true,
    title: "Science, Politics and Global Warming",
    sourcename: "Holoscience",

    images: ["img/articles/thornhill-on-climatologists.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/articles/AGW-cartoon.png",
    url: "http://www.holoscience.com/wp/science-politics-and-global-warming/",
    text: null,
    highighter: null,
    expert_ids: [9],
    nodes: null,
    postscript: null

  }, {

    id: 21,
    controversy: false,
    parent: false,
    type: "Forum",
    display: true,
    title: "How Plasma Connects the Sun to the Climate",
    sourcename: "Wattsupwiththat Blog",

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/forums/earth-sun-connected.jpg",
    url: "http://wattsupwiththat.com/2015/04/30/how-plasma-connects-the-sun-to-the-climate/",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: "Note that WUWT has a policy against running stories that relate to the Electric Universe, but they appear to have made an exception in this case."

  }, {

    // Another paper on this topic here:
    // http://www.ann-geophys.net/19/773/2001/angeo-19-773-2001.pdf

    id: 22,
    controversy: false,
    parent: false,
    type: "Paper",
    display: true,
    title: "Possible reasons for underestimating Joule heating in global models: E-Field variability, spatial resolution and vertical velocity",
    sourcename: "Journal of Geophysical Research",

    images: ["img/papers/electric-joule-heating.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/journals/journal-geophysical-research.png",
    url: "http://nldr.library.ucar.edu/repository/assets/osgc/OSGC-000-000-004-001.pdf",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    year: 2007, // ADD TO OTHERS?
    postscript: null                

  }, {

    id: 23,
    controversy: false,
    parent: false,
    type: "Book",
    display: true,
    title: "The Manic Sun: Weather Theories Confounded",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/manic-sun.png",
    url: "http://www.amazon.com/Manic-Sun-Weather-Theories-Confounded/dp/1899044116/",
    text: [{quote: "The solar physicists cared just as much as the official climatologists, about keeping the world safe for their grandchildren.  They said it was rash to suppose that every possible variation in the Sun's output of light had been seen by the satellites in the course of a single solar cycle. The solar-terrestrial physicists, for their part, pleaded for consideration of other ways in which the Sun might affect the Earth via the solar wind -- auroras, that sort of thing. They were awfully vague, though, about how it could happen.", page_start: 18, page_end: 18}, 
        {quote: "To achieve its remarkable projection of future temperatures, the report had to argue that the global warming of the twentieth century was largely due to carbon dioxide and other greenhouse gases. The role of the Sun had to be minimized.  The commentary concentrated entirely on changes in the output of radiant energy from the visible disk.  As for the invisible heliosphere that embraced the Earth in the solar wind, and might contain other possible ways of changing the climate, for Houghton's group it did not exist.", page_start: 41, page_end: 42}],
    fancy_text: [{quote: "The solar physicists cared just as much as the official climatologists, about keeping the world safe for their grandchildren.  <span style='background-color:yellow'>They said it was rash to suppose that every possible variation in the Sun&#39;s output of light had been seen by the satellites in the course of a single solar cycle. The solar-terrestrial physicists, for their part, pleaded for consideration of other ways in which the Sun might affect the Earth via the solar wind -- auroras, that sort of thing</span>. They were awfully vague, though, about how it could happen. -p18", page_start: 18, page_end: 18}, 
        {quote: "To achieve its remarkable projection of future temperatures, the report had to argue that the global warming of the twentieth century was largely due to carbon dioxide and other greenhouse gases. The role of the Sun had to be minimized.  The commentary concentrated entirely on changes in the output of radiant energy from the visible disk.  <span style='background-color:yellow'>As for the invisible heliosphere that embraced the Earth in the solar wind, and might contain other possible ways of changing the climate, for Houghton&#39;s group it did not exist.</span> -p41-42", page_start: 41, page_end: 42}],
    // highighter: [ [{start:128, end:342}], [{start:343, end:177}] ],
    expert_ids: [10],
    nodes: null,
    year: 2007, // ADD TO OTHERS?
    postscript: null                

  }, {

    id: 24,
    controversy: false,
    parent: false,
    type: "Book",
    display: true,
    title: "A Vast Machine: Computer Models, Climate Data, and the Politics of Global Warming",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/a-vast-machine.png",
    url: "http://www.amazon.com/Vast-Machine-Computer-Politics-Infrastructures/dp/0262518635/",
    text: null,
    highighter: null,
    expert_ids: [11],
    nodes: null,
    year: null, // FILL!
    postscript: "This is not about electric joule heating, but it will teach you how the models work."

  }, {

    id: 25,
    controversy: false,
    parent: false,
    type: "Book",
    display: true,
    title: "The Electric Universe",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/the-electric-universe.png",
    url: "http://www.amazon.com/Electric-Universe-Wallace-Thornhill-Talbott/dp/0977285138/",
    text: null,
    highighter: null,
    expert_ids: [9],
    nodes: null,
    year: null, // FILL!
    postscript: "This text is similar to Don Scott's The Electric Sky; both are useful for understanding the more electrical side of the debate over how to model cosmic plasmas."

  }, {

    // Add in video at https://www.nasa.gov/mission_pages/themis/news/themis_leaky_shield.html#.VXNBYDTF8vE

    id: 26,
    controversy: false,
    parent: true,
    type: "Video",
    display: true,
    title: "Our Changing Climate and the Variable Sun",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: null,
    avatar: "img/audio-video/space-news.png",
    url: "https://www.youtube.com/watch?v=VIAp_6FAXCY",
    text: null,
    highighter: null,
    expert_ids: [12],
    nodes: null,
    year: 2014,
    postscript: null                

  }, {

    id: 27,
    controversy: false,
    parent: true,
    type: "Video",
    display: true,
    title: "Electric Earth, Electric Weather",
    sourcename: "2013 Electric Universe Conference: Albuquerque, January 3-6",

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: null,
    avatar: "img/audio-video/bill-nichols-video.png",
    url: "https://www.youtube.com/watch?v=jqIo4WJJL90",
    text: null,
    highighter: null,
    expert_ids: [1],
    nodes: null,
    year: 2013,
    postscript: null                

  }, {

    id: 28,
    controversy: false,
    parent: true,
    type: "Video",
    display: true,
    title: "The Reality of Long Range Weather and Climate Forecasting",
    sourcename: null, // FILL ALL ENTRIES WITH CONFERENCE NAMES, WHERE APPLICABLE!

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: null,
    avatar: "img/audio-video/piers-corbyn-video.png",
    url: "https://www.youtube.com/watch?v=6R26PXRrgds",
    text: null,
    highighter: null,
    expert_ids: [2],
    nodes: null,
    year: null, // FILL!
    postscript: null                

  }, {

    id: 29,
    controversy: false,
    parent: true,
    type: "Video",
    display: true,
    title: "Our Variable Sun & Climate Change",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null, // FILL!
    critique_ids: null,
    next: null,
    avatar: "img/audio-video/bob-johnson-video.png",
    url: "https://www.youtube.com/watch?v=XdrDg-Nuxdg",
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null, // FILL!
    postscript: null                

  }, {

    id: 30,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Air is a Weak Plasma",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 31,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Charged particles in an electro-osmotic fluid can observably drag neutral particles with them.",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/electro-osmotic-pump.png",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 32,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Ionic lifters demonstrate that the movement of charged particles in air can drag along the surrounding neutral gas, creating wind.",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/lifter.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 33,
    controversy: false,
    parent: false,
    type: "Concept",
    display: true,
    title: "Marklund convection is an observed plasma physics process whereby the movement of charged particles indirectly induces a movement of neutral matter.",
    sourcename: null,

    images: ["img/articles/Marklund-convection.gif"],
    definitions: ["In the plasma laboratory, Marklund convection is a natural plasma convection process occurring in filamentary currents that causes ions and electrons to move inwards towards a central twisting filamentary axis.  In a partially ionized plasma, electromagnetic forces act on the non-ionized material indirectly through the viscosity between the ionized and non-ionized material.  The resulting temperature gradient within the plasma can also cause chemical separation based on different ionization potentials."],
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: ["http://www.plasma-universe.com/Marklund_convection", "https://www.youtube.com/watch?v=sIQRBrmEIXo"],
    text: null,
    highighter: null,
    expert_ids: [0,3,13],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 34,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Any variations in the global electric field pattern may help to generate winds.",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/global-electric-field.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 35,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Water droplets in clouds can also become charged either positively or negatively by up to 90 units of charge",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/charged-water-droplets.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 36,
    controversy: false,
    parent: false,
    type: "Concept",
    display: true,
    title: "The Equatorial Electrojet (EEJ) is an eastward current in the E-region of the ionosphere, around 100-130 km above the surface in the plane of the magnetic equator.",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/EEJ.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 37,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Seawater is an excellent conductor.",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/seawater-conductor.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 38,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "El Nino, La Nina and the ENSO cycle appear to sync with solar activity, and influence the jet stream position.",
    sourcename: null,

    images: null,
    definitions: ["During El Nino events, the subtropical jet stream is displaced either to the north or south", 
      "This displacement is similar to the way in which the auororal ring displaces downwards in response to increased solar wind activity."],
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/elnino-lanina.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 39,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "ENSO and NAO are controlled by air pressure",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/barometer.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

  }, {

    id: 40,
    controversy: false,
    parent: false,
    type: "Concept",
    display: true,
    title: "The Burns Effect links barometric pressure to the strength of the fair weather electric current density",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/fair-weather-electric-current-density.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    year: null,
    postscript: null                

 }, {

    id: 41,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Some electrical theorists have claimed that astrophysicists have not been prepared to interpet electrical astronomical events",
    sourcename: "The Electric Universe",

    images: ["img/books/the-electric-universe-on-astrophysicists.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/astrophysicists-not-prepared.jpg",
    url: "http://www.amazon.com/Electric-Universe-Wallace-Thornhill-Talbott/dp/0977285138/",
    text: null,
    highighter: null,
    expert_ids: [9],
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 42,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "IEEE is the world's largest technical professional society.",
    sourcename: "IEEE's Website",

    images: ["img/journals/IEEE-description.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/journals/IEEE.png",
    url: "https://www.ieee.org/about/ieee_history.html",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 43,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The debate over how to model cosmic plasmas was begun by the Nobel laureate who invented the cosmic plasma models used by astrophysicists to this day.",
    sourcename: "Edge Magazine (original article currently not online)",

    images: ["img/articles/hannes-alfven-bio-small.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/alfven-getting-nobel.jpg",
    url: "https://plus.google.com/108466508041843226480/posts/YoTuHGL16ur",
    text: null,
    highighter: null,
    expert_ids: [8],
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 44,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Some critics of electrical cosmology freely admit that they do not read IEEE's Transactions on Plasma Science, the journal which publishes on electrical cosmology.",
    sourcename: "International Skeptics Forum",

    images: ["img/forums/is-tim-thompson-on-ieee.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/the-galaxy-business.jpg",
    url: "http://www.internationalskeptics.com/forums/showpost.php?s=808a20363648151505620e5b174cdc4c&p=4782369&postcount=8%EF%BB%BF",
    text: null,
    highighter: null,
    expert_ids: [14],
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 45,
    controversy: false,
    parent: false,
    type: "Critique",
    display: true,
    title: "Near surface temperatures and statistical correlations do no support electric joule heating.",
    sourcename: "Google+ comments",

    images: ["img/critiques/gplus-upper-atmosphere.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/forums/gplus.png",
    url: "https://plus.google.com/+NASAEarthObservatory/posts/TG9itAM7MZm",
    text: null,
    highighter: null,
    expert_ids: [17],
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 46,
    controversy: false,
    parent: false,
    type: "Critique",
    display: true,
    title: "Navier Stokes calculations suggest that electric joule heating is negligible by 5 orders of magnitude.",
    sourcename: "Slashdot comments",

    images: ["img/critiques/navier-stokes-critique.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/navier-stokes.png",
    url: "http://news.slashdot.org/comments.pl?sid=7511261&cid=49848193",
    text: null,
    highighter: null,
    expert_ids: [18],
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 47,
    controversy: false,
    parent: false,
    type: "Article",
    display: true,
    title: "Solar physicists have traditionally assumed that the Sun's output is perfectly constant.",
    sourcename: null,

    images: ["img/articles/eddy-on-keeping-sun-perfect.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/maunder-minimum.jpg",
    url: "http://www.aip.org/history/climate/solar.htm",
    text: null,
    highighter: null,
    expert_ids: [19],
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 48,
    controversy: false,
    parent: false,
    type: "Article",
    display: true,
    title: "Astrophysicists have a lengthy history of favoring mathematics over experimentation.",
    sourcename: null,

    images: ["img/articles/birkeland-current-history-2.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/birkeland-terrella.png",
    url: "https://www.thunderbolts.info/wp/2014/06/30/currents-of-thought-2/",
    text: null,
    highighter: null,
    expert_ids: [20],
    nodes: null,
    year: null,
    postscript: null

 }, {

    id: 49,
    controversy: false,
    parent: false,
    type: "Article",
    display: true,
    title: "The debate over how to model cosmic plasmas can be dated back to much earlier attempts to dismiss Kristian Birkeland's terrella experiments.",
    sourcename: null,

    images: ["img/articles/birkeland-current-history-1.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/birkeland-terrella.png",
    url: "http://en.wikipedia.org/wiki/User:Richfj/test",
    text: null,
    highighter: null,
    expert_ids: [21],
    nodes: null,
    year: null,
    postscript: null

  }, {

    id: 50,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What are cosmic rays?  What is a Forbush decrease?  And how is it thought that they affect the climate?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/forbush-decrease.png",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 51,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is the Equatorial Electrojet (EEJ)?  And why is it there?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/EEJ.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 52,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is Marklund convection?  What planetary and astronomical processes might be explained by it?  What do we know about it, and how do we know?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 53,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "How are clouds involved in fair weather electric current and the Global Electric Circuit?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/charged-water-droplets.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 54,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is a sunspot?  And why are they thought to be associated with the Earth's climate?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/sunspots-stratosphere.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 55,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is the solar wind?  How can the solar wind fail to appreciably decelerate even as it passes the Earth's orbit?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind.gif",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 56,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is the Interplanetary Magnetic Field (IMF)?  What is magnetic flux?  What makes the 'open' solar flux lines special?  And why do they change over time?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/open-flux-lines.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 57,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What are Navier-Stokes equations?  And what part do they play in climate modeling?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/navier-stokes.png",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 58,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "Why do the oceans matter for climate modeling?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 59,
    controversy: false,
    parent: false,
    type: "Concept Map",
    display: true,
    title: "What is the Pacific Decadal Oscillation?  El Nino?  La Nina?",
    sourcename: null,

    images: [null],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/elnino-lanina.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [0],
    postscript: null

  }, {

    id: 60,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Hannes Alfven used the occasion of his 1970 Nobel lecture to warn astrophysicists that their mathematically elegant plasma models were failing to take into account plasma's observable tendencies for filamentary electrical currents.",
    sourcename: null,

    images: ["img/papers/alfven-nobel-lecture.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/alfven-getting-nobel.jpg",
    url: "http://www.nobelprize.org/nobel_prizes/physics/laureates/1970/alfven-lecture.pdf",
    text: null,
    highighter: null,
    expert_ids: [22],
    postscript: null

  }, {

    id: 61,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Fluids-based MHD models do not predict long-lived plasma filamentation",
    sourcename: null,

    images: ["img/papers/laboratory-plasma-filamentation-1.jpg", "img/papers/laboratory-plasma-filamentation-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "http://plasmauniverse.info/downloadsCosmo/KukushkinKartinovCos.pdf",
    text: null,
    highighter: null,
    expert_ids: [23,24],
    postscript: null

  }, {

    id: 62,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Plasma filamentation is commonly observed within the plasma laboratory.",
    sourcename: null,

    images: ["img/papers/plasma-filament-1.jpg", "img/papers/plasma-filament-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "http://hifweb.lbl.gov/ICC2000/Other/Rantsev-Kartinov_oral.pdf",
    text: null,
    highighter: null,
    expert_ids: [23,24],
    postscript: null

  }, {

    id: 63,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Plasma filaments can sometimes exhibit a fractal, self-repeating nature, occasionally referred to as heteromacs.",
    sourcename: null,

    images: ["img/papers/plasma-fractal.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/plasma-not-fluids.jpg",
    url: "http://epsppd.epfl.ch/Praha/98icpp/A021PR.pdf",
    text: null,
    highighter: null,
    expert_ids: [23,24],
    postscript: null

  }, {

    id: 64,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Russian plasma physicists have claimed that Voyager photographed the Earth immersed in plasma filaments.",
    sourcename: null,

    images: ["img/papers/cosmic-dust-filamentation-1.jpg","img/papers/cosmic-dust-filamentation-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/plasma-not-fluids.jpg",
    url: "http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=4287077&url=http%3A%2F%2Fieeexplore.ieee.org%2Fiel5%2F27%2F4287017%2F04287077.pdf%3Farnumber%3D4287077",
    text: null,
    highighter: null,
    expert_ids: [23,24],
    postscript: null

  }, {

    id: 65,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Novelty plasma globes plainly exhibit twisting, conducting plasma filamentation; it is also apparent from these images that there are two different things happening here: There is both long-range attraction and short-range repulsion between the filaments, as they do not appear to combine.",
    sourcename: null,

    images: ["img/articles/plasma-globe-1.jpg", "img/articles/plasma-globe-2.jpg", "img/articles/plasma-globe-3.jpg", "img/articles/plasma-globe-4.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/plasma-ball.jpg",
    url: "https://www.google.com/search?q=plasma+globe&biw=2327&bih=1183&source=lnms&tbm=isch&sa=X&ei=jxSDVemeM8TLsAX0oqfQBA&ved=0CAcQ_AUoAg",
    text: null,
    highighter: null,
    expert_ids: [],
    postscript: null

  }, {

    id: 66,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "'Questions have been raised from the beginning of the space era whether MHD theory can describe correctly space plasmas that are collisionless and rarely in thermal equilibrium.' -- George K Parks",
    sourcename: null,

    images: ["img/papers/space-physics-mhd.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/plasma-modes.jpg",
    url: "http://link.springer.com/article/10.1023/B%3ASPAC.0000042941.14372.9b",
    text: null,
    highighter: null,
    expert_ids: [25],
    postscript: null

  }, {

    id: 67,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Although some plasma physicists can see the applications of their laboratory research to cosmic phenomena, they tend to assume that magnetohydrodynamics (MHD) is required to model cosmic phenomena because they assume that the astronomical phenomena are transitory, like their laboratory experiments.",
    sourcename: null,

    images: ["img/papers/IEEE-ICOPS-2006-1.jpg", "img/papers/IEEE-ICOPS-2006-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/MHD.jpg",
    url: "https://www.thunderbolts.info/webnews/ieee_plasma_balllightening.htm",
    text: null,
    highighter: null,
    expert_ids: [9],
    postscript: null

  }, {

    id: 68,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Hannes Alfven challenged the notion that cosmic electric fields could simply be calculated from magnetohydrodynamics (MHD) equations.",
    sourcename: null,

    images: ["img/papers/cosmic-electric-fields.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/MHD.jpg",
    url: "http://plasmauniverse.info/downloads/LifeAlfven.pdf",
    text: null,
    highighter: null,
    expert_ids: [22],
    postscript: null

  }, {

    id: 69,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The concept of frozen-in magnetic field lines is a seductive implication of magnetohydrodynamics (MHD) which Hannes Alfven came to realize through study of the aurora was both unjustified and dangerously misleading.",
    sourcename: null,

    images: ["img/papers/frozen-in-field-lines.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/MHD.jpg",
    url: "http://plasmauniverse.info/downloads/LifeAlfven.pdf",
    text: null,
    highighter: null,
    expert_ids: [9],
    postscript: null

  }, {

    id: 70,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Astrophysicists generally argue that there is no significant persistent large-scale electric field in a plasma.",
    sourcename: "Conversations on Electric and Magnetic Fields in the Cosmos",

    images: ["img/papers/electric-fields-parker.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/MHD.jpg",
    url: "http://press.princeton.edu/chapters/s8454.pdf",
    text: null,
    highighter: null,
    expert_ids: [26],
    postscript: null
 }];

  var experts = [{
    id: 0,
    name: "@ChrisReeve",
    title: "Electric Universe Layperson Advocate",
    image: "img/experts/chris-reeve.png"

  },{

    id: 1,
    name: "@BillNichols",
    title: "Atmospheric Scientist",
    image: "img/experts/bill-nichols.jpg"

  },{

    id: 2,
    name: "@PiersCorbyn",
    title: "Theorist, WeatherAction",
    image: "img/experts/piers-corbyn.jpg"

  },{

    id: 3,
    name: "@BobJohnson",
    title: "Independent Plasma Theorist",
    image: "img/experts/bob-johnson.jpg"

  },{

    id: 4,
    name: "@LeifSvalgaard",
    title: "WUWT's Resident Solar Expert",
    image: "img/experts/lief-svalgaard.png"

  },{

    id: 5,
    name: "@StuartWolpert",
    title: "UCLA Journalist",
    image: "img/experts/stuart-wolpert.jpg"

  },{

    id: 6,
    name: "@AnthonyWatts",
    title: "Meteorologist / Wattsupwiththat Blogger / pragmatic skeptic",
    image: "img/experts/anthony-watts.jpg"

  },{

    id: 7,
    name: "@BCGlorfindel",
    title: "Computer Scientist, Slashdot Comments",
    image: "img/experts/anon.png"

  },{

    id: 8,
    name: "@DavidTalbott",
    title: "Comparative Mythologist",
    image: "img/experts/david-talbott.jpg"

  },{

    id: 9,
    name: "@WalThornhill",
    title: "Plasma Theorist",
    image: "img/experts/wal-thornhill.jpg"

  },{

    id: 10,
    name: "@NigelCalder",
    title: "Prolific Science Journalist",
    image: "img/experts/nigel-calder.jpg"

  },{

    id: 11,
    name: "@PaulNEdwards",
    title: "Computer/Information-Focused Historian",
    image: "img/experts/paul-edwards.jpg" 

  },{

    id: 12,
    name: "@SpaceNews",
    title: "Electric Universe Video Briefs", 
    image: "img/audio-video/space-news.png"

  },{

    id: 13,
    name: "@IanTresman",
    title: "http://plasma-universe.com Wiki", 
    image: "img/experts/ian-tresman.jpg"

  },{

    id: 14,
    name: "@TimThompson",
    title: "Electric Universe Critic / Astrophysicist",
    image: "img/experts/tim-thompson.jpg"

  },{

    id: 15,
    name: "@JimJohnson",
    title: "Electric Universe Layperson Advocate",
    image: "img/experts/jim-johnson.jpg"

  },{

    id: 16,
    name: "@BrianKoberlein",
    title: "RIT Astrophysicist / Professor",
    image: "img/experts/brian-koberlein.jpg"

  },{

    id: 17,
    name: "@ScottBarnden",
    title: "Nanotechnology / Physics / Business",
    image: "img/experts/scott-barnden-gplus.png"

  },{

    id: 18,
    name: "@Anonymous",
    title: "Unknown",
    image: "img/experts/anon.png"

  },{

    id: 19,
    name: "@JackEddy",
    title: "Astronomer",
    image: "img/experts/jack-eddy.png"

  },{

    id: 20,
    name: "@RensvanderSluijs",
    title: "Comparative Mythologist",
    image: "img/experts/rens-van-der-sluijs.png"

  },{

    id: 21,
    name: "@FrederickJRich",
    title: "Astrophysics / Climatology / Remote Sensing, PhD",
    image: "img/experts/frederick-j-rich.png"

  },{

    id: 22,
    name: "@HannesAlfven",
    title: "Nobel laureate / Inventor of magnetohydrodynamics (MHD) / Advocate for an experiment-driven approach to plasma physics",
    image: "img/experts/hannes-alfven.jpg"

  },{

    id: 23,
    name: "@ABKukushkin",
    title: "Kurchatov Institute of Atomic Energy",
    image: "img/experts/kurchatov-institute-of-atomic-energy.jpg"

  },{

    id: 24,
    name: "@VARantsev-Kartonov",
    title: "Kurchatov Institute of Atomic Energy",
    image: "img/experts/kurchatov-institute-of-atomic-energy.jpg"

  },{

    id: 25,
    name: "@GeorgeKParks",
    title: "Space Sciences Laboratories, University of California, Berkeley",
    image: "img/experts/george-k-parks.jpg"

  },{

    id: 26,
    name: "@EugeneNParker",
    title: "Solar Astrophysicist",
    image: "img/experts/eugene-n-parker.jpg"

  }];

  // I'm going to maintain two separate data structures: The cards will be
  // kept separate from the constructs, so that I can use the constructs
  // data structure for searching, and the cards data structure can include
  // browsing data in the form of a linked list.

  // In other words, each card is part of a linked list, with next and/or
  // children

  var constructs = [{
      id: 1,
      head_card_id: 1,
      claim_card_ids: [2,3,4,5,6,7,8,9,10,11,12],
      expert_ids: [0,1,2,3],
      critique_card_ids: [13],
      camp_card_ids: [14,15,16,17,18],
      article_card_ids: [19,20,21],
      forum_card_ids: [22],
      paper_card_ids: [23],
      book_card_ids: [24,25,26],
      media_card_ids: [27,28,29,30]
  }];

      // Add in electric joule paper critique?

      // CONVERT ALL OF THESE INTO CARDS!!!

      // infographics: [{
      //     title: "There's a Mistake in the Climate Models and It's Called Electric Joule Heating",
      //     url: "https://plus.google.com/108466508041843226480/posts/GfRTMJDtUZU",
      //     image: "img/infographics/electric-joule-heating-small.jpg",
      //     display: true,
      //     prescript: null,
      //     postscript: null

      // }, {

      //     title: "The Greenhouse Effect Was Not Observed on Venus by the Pioneer Venus Mission; It Was Assumed",
      //     url: "https://plus.google.com/108466508041843226480/posts/hKf2QRETTAy",
      //     image: "img/infographics/venus-heat-small.jpg",
      //     display: true,
      //     prescript: null,
      //     postscript: null

      // }, {

      //     title: "A Mythologist Tells the Story that Scientists Refuse to Teach in University Physics",
      //     url: "https://plus.google.com/108466508041843226480/posts/YoTuHGL16ur",
      //     image: "img/infographics/hannes-alfven-bio-small.jpg",
      //     display: true,
      //     prescript: null,
      //     postscript: null

      // }],

      // Add in article at https://www.nasa.gov/mission_pages/themis/news/themis_leaky_shield.html#.VXNBYDTF8vE

  this.all = function(cb) {
      return cb(cards);
  };

  // Search results should return as follows:

  // 1.  Do not return results for less than 3 characters.  Also consider
  //     a half-second delay (later).

  //     Eventually: Sort results by rankings.

  // This function checks the current section of text for highlights, and
  // if the current section has any marker in it, it will apply it

  // region == substring
  // startIndex == characters from start of original string to start of substring
  // highlights[0] == characters from start of original string to highlight
  // highlights[1] == characters to highlight
  // (startIndex + region.length) == end of substring
  this.highlight = function(region, highlights, startIndex) {

    var highlighted = region;

    if (highlights.length > 0) {
      // Our comparison will use the beginning of the original string as its
      // frame of reference

      // NEVER GETS HERE
      // return 'blah';

      var substringEnd = startIndex + region.length;

      // End of highlighting, from start of original string
      var highlightEnd = highlights.start + highlights.end;

      // If highlight starts inside of this region ...
      if (highlights.start < substringEnd) {

        // If highlight also ends inside of this region ...
        if ((highlights.start + highlights.end) < substringEnd) {

          highlighted = region.substring(0, highlights.start) + '<span class="highlighter">' +
            region.substring(highlights.start, highlightEnd) +
            '</span>' + region.substring(highlightEnd);

        // If highlight does not end inside of this region, then we need to
        // end it at the end the span at the end of the string
        } else {

          highlighted = region.substring(0, highlights.start) + '<span class="highlighter">' +
            region.substring(highlights.start) + '</span>';

        }

      // Highlighting is not in this region
      } else {
        return region;
      }
    }

    // return '<span class="highlighter">'+region+'</span>';
    return highlighted;
  };

  this.addSearchHit = function(card, prefix, hit, location, searchLength, highlightRegion) {
    var cardTemp = Object.create(null);

    // Use angular.copy because JavaScript passes objects by reference;
    // We don't want these different search hits referencing one
    // another ...
    angular.copy(card, cardTemp);

    // I'd really like to highlight in white-text-on-red-background the
    // search hit

    // var highlightedText = prefix + this.highlight(hit.substring(0, location), highlightRegion, 0) + 
    //   '<span class="search-hit">' +
    //   this.highlight(hit.substring(location, location+searchLength), highlightRegion, location) + '</span>' +
    //   this.highlight(hit.substring(location+searchLength), highlightRegion, location+searchLength);

    var highlightedText = prefix + hit.substring(0, location) + '<span class="search-hit">' +
      hit.substring(location, location+searchLength) + '</span>' +
      hit.substring(location+searchLength);

    // cardTemp['search_hit'] = hit;
    cardTemp['search_hit'] = highlightedText;
    return cardTemp;
  };

  this.getCardById = function(id, cb) {
    result = cards[id];

    if (result) {
      return cb(result);
    } else {
      return cb(false);
    }    
  };

  this.getCommentById = function(id, cb) {
    result = comments[id];

    if (result) {
      return cb(result);
    } else {
      return cb(false);
    }    
  };

  this.getExpertById = function(id, cb) {
    result = experts[id];

    if (result) {
      return cb(result);
    } else {
      return cb(false);
    }    
  };

  this.getQuestionById = function(id, cb) {
    result = questions[id];

    if (result) {
      return cb(result);
    } else {
      return cb(false);
    }    
  };

  this.getAnnotationById = function(id, cb) {
    result = annotations[id];

    if (result) {
      return cb(result);
    } else {
      return cb(false);
    }    
  };


  // This find() method is extremely important for the app, insofar as it must prioritize
  // the search results in order to facilitate a truly rapid access to scientific
  // controversies.  This will permit people to use the app to facilitate argumentation
  // insofar as a person can take a pre-existing, lengthy presentation of a scientific
  // controversy, and jump straight into the middle of it to the part that is needed.

  this.find = function(snippet, cb) {

      // results will be the concatenation of a dozen individual, prioritized searches
      var results = [];

      // Ignore case
      var lowerSnippet = snippet.toLowerCase();
      var snippetLength = snippet.length;

      // I'm going to want to add in several search features which are designed
      // to mimic the system that Google uses to do searching:

      // 1) buttons that restrict the search by type
      // 2) "" searches for exact phrase
      // 3) or produces hits that include either word
      // 4) - excludes search results with a particular word or phrase
      // 5) and is implied by default search w/ multiple words
      // 6) starting a search term with an @ indicates an author name,
      //    and author names should therefore include no spaces

      // ALSO: Post search explanation beneath search box when search box is empty

      // These are the individual search results
      var contStart = [];
      var contContain = [];

      var contConstructDescContain = [];
      var contConstructTextContain = [];

      var constructTitleStart = [];
      var constructTitleContain = [];

      var cmapForumTitleContain = [];

      var resourceStart = [];
      var resourceContain = [];

      // When somebody searches on an author, it's a special situation, because we want
      // to first show a link to the author's bio page, and then we want to display all
      // of the works that they've been associated with.  We know that the search is for
      // an author because it must start with an @ symbol.
      var authorContain = [];

      // card is the current card we're looking at
      var card = {};
      var expert = {};

      // this is the location of the hit from indexOf()
      var textLocation = 0;

      // First, check if this is an author search; our author searches will produce
      // circular icons to differentiate people on the social network from controversies
      if (lowerSnippet.indexOf('@') === 0) {

        // First the authors ...
        for (var j=0; j < experts.length; j++) {

          if (!!expert) {
            expert = experts[j];

            if (expert.name.toLowerCase().indexOf(lowerSnippet) !== -1) {

              // Do not use addSearchHit() for the experts because we don't want to
              // highlight the hits for experts or their contributions
              expertTemp = Object.create(null);
              angular.copy(expert, expertTemp);
              expertTemp['isExpert'] = true;
              expertTemp['search_hit'] = '<b>'+expert.name+'</b><br>'+expert.title;

              results.push(expertTemp);
            }

          }

        }

        // Now, if there is only one expert listed, also list his creations ...
        if (results.length === 1) {

          // First, grab the expert id ...
          var expertId = results[0].id;

          // Then list their works ...
          for (var k=0; k < cards.length; k++) {
            card = cards[k];

            if (card.expert_ids) {
              if (card.expert_ids.indexOf(expertId) !== -1) {

                // Do not use addSearchHit() for the experts because we don't want to
                // highlight the hits for experts or their contributions
                expertTemp = Object.create(null);
                angular.copy(expert, expertTemp);
                expertTemp['search_hit'] = '<b>'+card.type+':</b> '+card.title;

                results.push(expertTemp);

              }
            }
          } // End loop through all author works
        } // End if only one author match

      // Only perform a search when the non-expert search query is 3 or more characters
      // } else if (snippetLength > 2) {
      } else if (snippetLength > 0) {

        for (var i=0; i < cards.length; i++) {
            card = cards[i];

            switch(card.type) {
              case "Model":
                  textLocation = card.title.toLowerCase().indexOf(lowerSnippet);

                  if (card.controversy) {

                    // 2.  Capture all Controversy titles that START with typed letters.
                    //     These should of course display at the top of the search results.
                    if (textLocation === 0) {

                      contStart.push(this.addSearchHit(card, '<b>Controversy:</b><br>', 
                        card.title, textLocation, snippetLength, []));

                      // Exit, in order to avoid adding this card twice
                      break;
   
                    // 3.  Capture all Controversy titles that CONTAIN typed letters.
                    } else if (textLocation !== -1) {

                      contContain.push(this.addSearchHit(card, '<b>Controversy:</b><br>', 
                        card.title, textLocation, snippetLength, []));

                      // Exit, in order to avoid adding this card twice
                      break;
                    }
                  }

                  // 4.  Capture all non-controversy Model titles that START with typed letters 
                  //     (Model-specific/non-controversy case).

                  textLocation = card.title.toLowerCase().indexOf(lowerSnippet);
                  if (textLocation === 0) {
                    constructTitleStart.push(this.addSearchHit(card, '<b>'+card.type+':</b> ', 
                      card.title, textLocation, snippetLength, []));

                  // 5.  Capture all Construct titles that CONTAIN typed letters (Model-specific/
                  //     non-controversy case).

                  } else if (textLocation !== -1) {
                    constructTitleContain.push(this.addSearchHit(card, '<b>'+card.type+':</b> ', 
                      card.title, textLocation, snippetLength, []));
                  }

                  // 6. and 7. are for expert and all of the various resource names (see further down)

                  // 8.  Capture all non-controversy Construct descriptions that CONTAIN 
                  //     typed letters.  When this type of thing happens, we're going to
                  //     need to highlight for the user what caused the hit.  So, we need
                  //     to add that information in.

                  textLocation = card.definition.toLowerCase().indexOf(lowerSnippet);
                  if (textLocation !== -1) {
                      contConstructDescContain.push(this.addSearchHit(card, 
                        '<b>Controversy Description:</b><br>', card.definition, textLocation, 
                        snippetLength, []));
                  }

                  // 9.  Capture all non-controversy Construct text that CONTAIN typed
                  //     letters.

                  // card.text is an array of objects, with format {quote:string, 
                  // page_start:int, page_end:int}, so we should cycle through them

                  if (!!card.text) {
                    card.text.forEach(function(section, index) {
                      textLocation = section.quote.toLowerCase().indexOf(lowerSnippet);
                      if (textLocation !== -1) {

                          // Note that we only send the piece of highlighter that corresponds
                          // with current text
                          constructTitleContain.push(this.addSearchHit(card, 
                            '<b>Quote:</b> ', section.quote, textLocation, snippetLength,
                            
                            card.highlighter ? card.highlighter[index] : []));
                      }
                    });
                  }

                break;

              // Some types can be treated the same; critiques and claims are an example

              case "Critique":
              case "Claim":

                  // 9.  Capture all non-Model Construct text (Concept, Proposition) that CONTAIN 
                  //     typed letters.

                  if (card.text) {
                    card.text.forEach(function(section, index) {
                      textLocation = section.quote.toLowerCase().indexOf(lowerSnippet);
                      if (textLocation !== -1 && textLocation !== 0) {
                          contConstructTextContain.push(this.addSearchHit(card, 
                            '<b>Quote:</b> ', section.quote, textLocation, snippetLength,

                            card.highlighter ? card.highlighter[index] : []));
                      }
                    });
                  }

                  // 4.  Capture all non-Model Construct titles (Concept, Proposition) that 
                  //     START with typed letters.

                  textLocation = card.title.toLowerCase().indexOf(lowerSnippet);
                  if (textLocation === 0) {
                    constructTitleStart.push(this.addSearchHit(card, '<b>'+card.type+':</b> ', 
                      card.title, textLocation, snippetLength, []));

                  } else if (textLocation !== -1) {

                  // 5.  Capture all non-Model Construct titles that CONTAIN typed letters.

                    constructTitleContain.push(this.addSearchHit(card, '<b>'+card.type+':</b> ', 
                      card.title, textLocation, snippetLength, []));
                  }
                break;

              // 10. Capture all concept map + forum titles that CONTAIN typed letters.

              case "Forum":
              case "Concept Map":

                  textLocation = card.title.toLowerCase().indexOf(lowerSnippet);
                  if (textLocation !== -1) {
                    cmapForumTitleContain.push(this.addSearchHit(card, '<b>'+card.type+':</b> ', 
                      card.title, textLocation, snippetLength, []));
                  }

                break;

              case "Video":
              case "Audio":
              case "Article":
              case "Paper":
              case "Book":

                  // 6.  Capture all Journal names, Forum names, Article 
                  //     names, Article authors, Paper titles, Paper authors, Book titles, 
                  //     Book authors, Media titles, Media authors that START with 
                  //     typed letters.

                  textLocation = card.title.toLowerCase().indexOf(lowerSnippet);
                  if (textLocation === 0) {
                    resourceStart.push(this.addSearchHit(card, '<b>'+card.type+':</b> ', 
                      card.title, textLocation, snippetLength, []));

                  // 7.  Capture all Journal names, Forum names, Article 
                  //     names, Article authors, Paper titles, Paper authors, Book titles, 
                  //     Book authors, Media titles, Media authors that CONTAIN
                  //     typed letters.

                  } else if (textLocation !== -1) {

                    resourceContain.push(this.addSearchHit(card, '<b>'+card.type+':</b> ', 
                      card.title, textLocation, snippetLength, []));

                  }

                  // Careful: the value of 'this' changes inside of the Array method
                  var that = this;

                  if (card.text) {
                    card.text.forEach(function(section, index) {
                      textLocation = section.quote.toLowerCase().indexOf(lowerSnippet);
                      if (textLocation !== -1) {
                          resourceContain.push(that.addSearchHit(card, '<b>Quote:</b> ', 
                            section.quote, textLocation, snippetLength, 

                            // First check to see that there is a highlighter array,
                            // before trying to access it
                            // card.highlighter ? card.highlighter[index] : []));
                            {start:0, end:1}));
                      }
                    });
                  }

                break;

              default:

            } // End of switch() statement on card.type

            // Now, stitch all of these results into the correct order of relevance
            results = contStart.concat(contContain, contConstructDescContain, 
                      contConstructTextContain, constructTitleStart, constructTitleContain, 
                      cmapForumTitleContain, resourceStart, resourceContain);

        } // End of the for loop

      } // End of if-statement on author search

      if (results.length > 0) {
        return cb(results);
      } else {
        return cb(false);
      }
  };

  return this;

}]);