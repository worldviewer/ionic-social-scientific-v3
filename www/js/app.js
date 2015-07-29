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
        {name: "Jump to conclusions!"},
        {name: "Remember this card"}
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
        {name: "Jump to conclusions!"},
        {name: "Remember this card"}
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
    title: "Plasma-Coupled Heating",
    sourcename: null,

    images: ["img/headers/electric-joule-heating-header.jpg"],
    definition: "Plasma-coupled heating proposes that the Earth can be electrically heated by the flow of charged particles coming from the Sun and other cosmic plasma phenomena.",
    status: "Plasma-coupled heating is not widely known, has no particular conceptual label, and much of the data necessary to judge the idea has yet to be taken. No known experiments or observational satellites are currently planned to test it. The concept is not taught to climatologists today, and it appears in no climate textbooks. Plasma-coupled heating is a natural implication of the Electric Universe paradigm.",
    search_hit: null,
    claim_ids: [146,153,120,2,3,4,5,6,7,8,104,9,10,184,172,94,1,131],
    critique_ids: [12,45,46],
    cmap_ids: [13,14,15,16,17,50,51,52,53,54,55,56,57,58,59],
    article_ids: null,
    forum_ids: [21],
    paper_ids: null,
    book_ids: [23,24,25,213],
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
    title: "The Largely Unknown Cosmic Plasma Debate",
    sourcename: null,

    images: ["img/headers/AJ-vs-IEEE.jpg"],
    definition: "There has been a widely overlooked debate over how to model cosmic plasmas (such as the solar wind) for more than half a century between the Astrophysical Journal and IEEE's Transactions on Plasma Science. This debate is important because it relates to the way we model the universe's most common state for matter -- which necessarily implies that it is relevant to numerous scientific disciplines beyond just astrophysics and cosmology. The climate debate cannot be fully understood without understanding this other controversy.",
    status: null,
    copy_text: "Although rarely mentioned in press releases or academic journals, <b>there has been a debate for more than half a century now between two respected journals over how to model the universe's most common state for matter</b>. It started with an assumption that would turn out to be wrong: that space is a vacuum. There could be no electrical currents through space without a medium over which those currents might travel. And it was with this line of reasoning that many of our textbook theories for space that persist to this day came to be.<br><br>It is remarkable that since the late 50's when it was realized that the electrically conductive medium of plasma was pervasive -- <b>essentially switching our perception of the universe's fundamental state for matter</b> -- <b>there was no substantive reaction within our textbook theories for how the universe works</b>.<br><br>In the laboratory, plasmas exhibit long-lived filaments which can conduct charge to limitless distances. Yet, with the observation of cosmic plasmas, theorists immediately suggested that the cosmic plasma could be modeled as a fluid -- <b>the principle difference being that fluids do not form such charge-carrying filaments</b>.<br><br>What is further remarkable is now that Herschel has confirmed that the universe is indeed criss-crossed by filaments -- <b>which only as of 2009 have been confirmed, beyond a dobut, as ubiquitous</b> -- <b>there is still a hostile resistance within journals like The Astrophysical Journal to consider that the cosmic plasma is behaving much like our observations of laboratory plasmas</b>.<br><br>If the public was aware of the full history of this debate, they'd be stunned -- for not only was a filamentary universe a fundamental prediction for a Plasma Universe, but <b>the inventor of the MHD cosmic plasma models used to this day by the astrophysical community, was overtly critical of their refusal to consider electric current causes for cosmic magnetic fields. Alfven even used the occasion of his 1970 Nobel lecture (awarded for his invention of MHD) to distance himself from their approach</b>.<br><br>Claims that cosmic plasmas can be modeled as fluids, without the filaments that we today directly observe, have been controversial <b>from their inception</b>. Some of these critics have pointed to issues related to <b>the way in which we train astrophysicists today</b>; others have pointed to a <b>longstanding refusal to give credit to Kristian Birkeland</b>; yet more pin the blame on the ongoing astrophysical tendency, couched in a long history, of <b>favoring mathematics over laboratory observations</b>. At least one astrophysicist has pointed out that <b>galaxy experts (and one presumes most astrophysicists) do not actually read IEEE's Transactions on Plasma Science, where the more electrical cosmic plasma ideas are explored</b>.<br><br>What is clear is that this debate over how to model cosmic plasmas which rages between The Astrophysical Journal and IEEE's Transactions on Plasma Science <b>is not today taught to graduate students</b>, and this explains how it can be that when evidence supports the electrical view of cosmic plasmas, there is rarely any recognition within the scientific community.",
    search_hit: null,

    claim_ids: [41,42,43,44,48,49],
    comment_ids: null, // [0,1],
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
    title: "Contrary to Many Mathematically Elegant Models in Use Today, Plasmas Are Not Simply Magnetized Fluids",
    sourcename: null,

    images: null, // FILL!
    definition: "Conventional theorists will oftentimes model plasma's electrodynamic nature as a magnetized fluid, but these models have been in dispute since their inception.  In light of plasma's now-accepted prevalence in space, the general lack of critical discussion amongst established scientists about how to model it should be viewed as a bit of a red flag when contrasted with the eagerness with which far more exotic and hypothetical matters are conjectured.  If plasmas are so common, then it stands to reason that only minor modeling mistakes could have a profound effect upon our interpretations of cosmic phenomena.",
    status: null,
    copy_text: "Although it's rarely mentioned, many of the most popular theories for space phenomena today depend upon an untested assumption about cosmic plasmas that prioritizes mathematically elegant simplifications over many decades of laboratory plasma observations.<br><br>Astrophysicists and other scientists who study astronomical imagery commonly assert that cosmic plasmas, unlike their laboratory counterparts, are essentialy like <b>fluids with frozen-in magnetic fields</b>; that plasmas can be modeled as <b>superconductors, with infinite conductivity, that instantaneously charge-neutralize</b>; and because of this lack of electrical resistance, the cosmic plasmas <b>cannot sustain an electric field</b>.<br><br>Left out of the numerous popular science articles and peer-reviewed publications is any mention of the <b>questions which have been raised since the beginning of the space era whether this modeling approach -- known as magnetohydrodynamics (MHD) -- can correctly describe space plasmas</b>.<br><br>It's probably not a coincidence that the combined effect of these assumptions is to remove the cosmic plasma's ability to interact electromagnetically (an inescapable fact of the plasma laboratory), rendering the cosmic plasma much like a gas or fluid with a magnetic field embedded within it. It's a suspicious approach insofar as it puts off any need to reconsider the gas-based theories which preceded the acceptance of plasma's prevalence.<br><br>Neither is it commonly mentioned that <b>the man who invented this approach in 1953 -- Hannes Alfven -- would subsequently distance himself from its widespread application within the astrophysical community to phenomena</b> which it clearly did not apply.  Astrophysicists would give Alfven the Nobel for his creation of MHD in 1970, and in what will one day surely be the subject of screenplays, <b>Alfven chose to use the occasion of his Nobel lecture to instruct astrophysicists on why this MHD approach could not possibly succeed</b>.<br><br>What is astounding is that anybody who actually looks at plasma's behavior can intuitively distinguish it from that of a fluid: <b>Chances are that not a single person who has ever looked at a novelty plasma globe's long-lived filaments which are attracted to and twist around one another without combining, has likely ever remarked at how much it looks like a fluid!</b><br><br>It is a very curious (and unfortunate) fact that many avid enthusiasts of the abstract mathematics of fractals appear completely uninterested in contemplating the implications of a universe who's dominant state for matter exhibits these same self-similar tendencies.",
    search_hit: null,

    claim_ids: [70,60,62,61,63,65,66,67,68,69],
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
    title: "The Solar Wind Can Conduct Electric Currents",
    sourcename: null,

    images: null, // FILL!
    definition: "The solar wind is not actually a wind, like on Earth.  Unlike a wind of air, the solar wind is a highly conductive plasma medium that can support the transmission of electric currents.  It's vital to consider such currents because not only can they be difficult to observe, but they can also, in theory, suddenly dump energy into the Earth's weather and climate systems.",
    status: null,
    copy_text: "There exists a common misconception that the solar wind cannot carry electric currents for the simple reason that it generally exhibits the same number of electrons and protons.<br><br>And yet, throughout most of the volume of a glow discharge lamp (such as a high-pressure sodium bulb), the plasma just the same exhibits equal numbers of opposite charges.  <b>Yet, electrical currents plainly power these bulbs</b>.<br><br>Such a plasma with equal charges is said to be <b>quasi-neutral</b>.  Our tendency, based upon observations of solids under similar circumstances, is to imagine that the solar wind is therefore non-conductive.  However, this could not be further from the truth, for <b>conductivity is a measure of the freedom of charge carriers within a medium</b> -- and in that light, plasmas are clearly extremely conductive.<br><br><b>What surely confuses the discussion is the fact that astrophysicists tend to avoid usage of the term 'electric current' within the context of astronomical observations, even when the term clearly applies</b>.  Peer-reviewed papers instead point to the magnetic fields that we can see, and which we can expect to be associated with electric currents.  They refer to those fields variously as <b>magnetic ropes</b>, <b>flux tubes</b> or even in some instances, <b>elephant trunks</b>.",
    search_hit: null,

    claim_ids: [80,78,81,79,82,169,177,83],
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
    title: "Why Do Some Planets Exhibit Polar Hot Spots?",
    sourcename: null,

    images: ["img/headers/earth-dipole.gif"],
    definition: "The presence of hot spots at the poles of Enceladus, Neptune and Saturn, among others, are suggestive of the simple idea that these moving charged particles can heat up the planets where planetary magnetic fields concentrate them.",
    status: null,    
    copy_text: "In stark contrast with the Earth's temperature profile, a number of solar system planets and moons exhibit hot poles. It's a remarkable observation insofar as electrical currents traveling in and out of planetary bodies would be expected to concentrate at the poles, since they are typically guided by the planet's magnetic field lines. Hot poles raises the largely undiscussed possibility that in certain cases, the contribution of electrical plasma-based heating can dwarf the heating that would be expected from solar irradiance (light).<br><br><b>What is remarkable is that planetary scientists appear to avoid such an inference even in cases like Enceladus, where the electrical connection (with Saturn) to this same pole has already been confirmed.</b><br><br>The electrical inference is not even made for Neptune, the 8th and farthest planet from the Sun (<b>30 times the distance between Earth and the Sun!</b>).  Despite this enormous distance, Neptune's south pole is a full <b>50 degrees F warmer</b> than the rest of the planet. Yet, planetary scientists make no mention of magnetic fields or solar wind plasma when they speculate on its cause.<br><br>The hot spots at the poles of Saturn present similar difficulties for planetary scientists, particularly in light of the fact that <b>the northern polar hot spot had been deprived of sunlight for a full 13 years when it was observed!</b>",
    search_hit: null,

    claim_ids: [140,141,142,143,144,145],
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
    title: "Are the Martian Ice Caps Warming?",
    sourcename: null,

    images: ["img/headers/martian-polar-ice-cap.jpg"],
    definition: "It was noted in 2005 by NASA that Mars' ice caps had also been diminishing for three summers in a row.  But, how much faith can we place in this claim?",
    status: null,
    copy_text: "While claims that the Martian ice caps are melting deserve an open-minded investigation, critics are nevertheless correct that the data is far from strong enough to justify a confident claim.<br><br>What is interesting, however, is that experts implicate the global Martian dust storms in sudden alterations to the planet's albedo. <b>What is notably left out of this conversation is the fact that these global dust storms are observably filamentary</b>. In light of (1) the extraordinarily thin Martian atmosphere (<b>1% Earth's</b>), (2) the observation of <b>luminous cores within dust devils</b> observed up-close by rovers, and (3) the <b>black marks these dust devils etch into the Martian surface</b>, all of these observations should raise questions about the underlying cause for not only the global Martian dust storms, but also tornadoes here on Earth.<br><br>But, this claim that Mars might be warming should not be treated as a fact based upon the limited dataset that is currently available.",
    search_hit: null,

    claim_ids: [71,72,73,74,75,76,77],
    critique_ids: null,
    next: 6,
    avatar: "img/avatars/warming-martian-ice-caps.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [27],
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
    definition: "Although the data remains sparse, there's reason to suspect that Pluto might have continued to warm up even as it moves away from the Sun.",
    status: null,
    copy_text: "Some people gravitate to claims of warming on other planets because of their simplicity.<br><br>Nevertheless, claims that Pluto is warming are at this point just as speculative as claims that Mars is warming.<br><br>However, the rebuttal that warming should be observable on all of the planets assumes a specific cause of solar radiation for the warming (electrical warming could depend upon numerous unseen factors).  And suggestions that any warming on Pluto might be the result of a greenhouse effect are just as speculative as the original claim.",
    search_hit: null,

    claim_ids: [92,93],
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
    title: "The Polar Vortex Has Proven Resistant to Conventional Modeling",
    sourcename: null,

    images: ["img/papers/magnetosphere-diagram.jpg", "img/papers/high-latitude-convection-diagram.jpg"],
    definition: "Many atmospheric circulation models are unable to reproduce the observed polar stratospheric winds (aka the polar vortex), and that is a huge problem for these models because things happening at the polar vortex can influence the entire planet's climate.",
    status: null,
    copy_text: "It's today recognized that wild weather in North America and Europe can oftentimes be attributed to dramatic changes in the polar vortex.  Meteorologists and climate scientists frequently discuss the polar vortex in a manner that is completely divorced from the Earth's larger plasma environment. <b>There have even been attempts to speculate that the changes in the polar vortex which can result in intensely cold weather events are a side effect of global warming</b>.<br><br>But, what sense does it make to discuss Earth's polar regions without regard for its larger plasma environment? <b>These are regions where the planet's magnetic field is known to concentrate the surrounding cosmic plasma medium into a funnel, where the solar wind can make its closest approach to the Earth's surface</b>.<br><br>When AGW advocates speculate on cooling caused by warming, what they tend to leave out is the fact that many atmospheric general circulation models and chemistry-climate models have <b>so far failed to reproduce in simulations the observations of the polar stratospheric winds</b>.  This failure to mention the failure to simulate does not inspire confidence in the speculations that are eagerly offered.",
    search_hit: null,

    claim_ids: [173,101,102,103],
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
    title: "Double Polar Vortices Suggest Electrical Plasmas",
    sourcename: null,

    images: ["img/headers/polar-vortex-split.jpg", "img/headers/venus-polar-vortex-2.jpg"],
    definition: "The observed splitting of the polar vortex on both Earth and Venus is an expected feature of laboratory plasmas when they are conducting electrical currents, yet climate and planetary scientists claim to not understand either observation.",
    status: null,
    copy_text: "Scientists tend to view the quasi-stable rotating structures above the poles much like a stable cyclone very high in the sky -- <b>notably without consideration of Earth's larger electromagnetic plasma environment</b>. Yet, quite unlike hurricanes, <b>the polar vortices are occasionally observed to split into two separate vortices</b>. How is this possible?<br><br>What is rarely mentioned amongst climatologists is that a similar pattern is observed not only on Venus, but also on much smaller scales, within the plasma laboratory.<br><br>A fundamental principle in electromagnetism is that two-charge carrying wires will tend to attract one another when carrying current in the same direction.  Observations of laboratory plasmas, and even close inspection of novelty plasma globes, reveal similar behavior.  In that context, these twisting plasma filaments are called <b>Birkeland currents</b>.  Astrophysicists also observe such structures through telescopes, on far larger scales, and in that context, they are referred to as <b>magnetic ropes</b>, <b>flux tubes</b> or even <b>elephant trunks</b>.<br><br>Numerous aspects of the Venusian atmosphere can be explained in these electrical terms, and this suggests that theorists may eventually do the same for Earth's atmospheric features.",
    search_hit: null,

    claim_ids: [112,114,113,116,117,118,119],
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
    definition: "The solar wind intensity correlates with lightning strikes, raising questions about lightning's underlying cause, and suggesting that the Earth is possibly part of a larger electrical circuit.",
    status: null,
    copy_text: "There's a rarely discussed approach in the planetary and astrophysical sciences which, despite its poor track record, is to this day applied with rigor: <b>Where evidence for electricity in space is observed, assume that it's an isolated, closed system</b>.<br><br>This approach stalled research on the aurora for half a century, but it's getting a second go today with lightning. Unfortunately, this attempt is turning out to be much like the last, because there are by now <b>three</b> outstanding issues with the idea which all appear to point to the same exact conclusion -- that lightning is a charge-neutralization between Earth and space.<br><br>First, nobody can explain with any confidence what actually causes lightning, because <b>the textbook, closed-system worldview cannot produce an electric field that is sufficient to seed the discharge</b>.<br><br>But, second, <b>we can already plainly see that there is some sort of larger connection between lightning and space</b> -- and for more than one reason: because the Van Allen radiation belts thousands of miles above the Earth become cleared by lightning; because a correlation has already been observed between solar wind speeds and intensities with the rate of lightning strikes; and because we today understand that there are lightning phenomena which actually connect to space (aka sprites).<br><br>The third red flag for the closed lightning circuit is that <b>ordinary lightning should be an order of magnitude too weak to produce the energetic emmissions we see</b> -- like gamma rays, antimatter and neutrons, <b>phenomena typically associated with supernovae and solar flares</b>. Yet, there is a growing recognition that lightning emits all of these things.<br><br>It seems just a matter of time that lightning will become recognized as an aspect of Earth's interconnection with its larger plasma environment -- a conclusion which would resolve all three anomalies at once.",
    search_hit: null,

    claim_ids: [176,84,86,85,87,89,88,90,111],
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
    title: "The Sun's Electromagnetic Activity Can Be Correlated with the Earth's Temperature Anomalies",
    sourcename: null,

    images: ["img/articles/kristian-birkeland-terrella.png", "img/articles/birkeland-terrella-2.jpg", "img/headers/birkeland-terrella-1.jpg", "img/articles/solar-plasmoid-side.jpg", "img/articles/solar-plasmoid-top.jpg"],
    definition: "The Sun exhibits a variety of overlapping solar cycles, and there is a 60-year cycle which appears to coincide with recent temperature changes here on Earth.",
    status: null,
    copy_text: "It's not entirely a secret that Earth's weather and temperature correlate with solar activity; the problem is that nobody has yet unraveled the intricate details of how it actually happens. <b>The puzzle is that the overall brightness of the Sun varies by less than 0.1% during the 11-year solar cycle, which is not enough to explain the observed changes in the weather.</b><br><br>Yet, consider what we <b>do</b> know:<br><br>(1) <b>Sunspot numbers generally correlate with lower stratosphere temperature anomalies, minus the temporal effects of volcanic eruptions.</b><br><br>(2) There are two fundamental modes by which the solar wind can influence the Earth's weather and temperature: over the equatorial closed magnetic field lines and the polar open magnetic field lines.<br><br>(3) The first laboratory astrophysicist, Kristian Birkeland, discovered that a magnetized sphere known as a terrella within a vacuum subjected to a voltage gradient can elicit fundamentally divergent modes of electromagnetic behavior which resemble the Sun's.<br><br>(4) Fluctuations in the Earth's temperature appear to follow a number of overlapping solar cycles which operate at different timespans, and whose duration appears to slightly change from one cycle to the next. These solar cycles apparently even exhibit resonances between one another -- <b>a characteristic feature of electrical transmission lines</b>.<br><br>(5) <b>The recent warming hiatus around 2000 was not predicted by any of the IPCC models</b>, but it should have been expected as a consequence of natural solar cycles which have been observed over three stages: 1860-80, 1910-40 and 1975<b>-2000</b>. <b>In each of these solar magnetic maxima, the temperature increased by about 0.15 C per decade, and between them, the temperatures cooled</b>.",
    search_hit: null,

    claim_ids: [171,178,179,216,98,19,95,96,97,99,175,100],
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
    parent: false,
    type: "Paper",
    display: true,
    title: "Electric field variability can significantly increase the amount of Joule heating, yet existing general circulation models assume a smooth field in both space and time.  In other words, the current climate models do not take electric joule heating into account.",
    sourcename: "Journal of Geophysical Research",

    images: ["img/papers/electric-joule-heating.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/journals/journal-geophysical-research.png",
    url: "http://nldr.library.ucar.edu/repository/assets/osgc/OSGC-000-000-004-001.pdf",
    text: null,
    highighter: null,
    expert_ids: [51],
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
    title: "Recent observations reveal the surprising observation that particle and field energies in the magnetosphere can vary by as much as ten times over timescales as short as a half hour.",
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
    title: "Solar experts do not understand the physics of the varying solar luminosity.",
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
    title: "Eddington's solar model assumed the Sun was isolated in the vacuum of space.",
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

  }, {

    id: 71,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The head of the Russian side of the International Space Station published a scientific paper suggesting an impending ice age, based upon the current sunspot trends.  In this article, he pointed to data suggesting that Mars might be losing its ice caps.",
    sourcename: "Russian journal 'Nauka i Zhizn' ('Science and Life'), 2009, N1, pp. 34-42.",

    images: ["img/papers/the-sun-defines-the-climate-1.jpg", "img/papers/the-sun-defines-the-climate-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/habibullo-abdussamatov.jpg",
    url: "http://www.gao.spb.ru/english/astrometr/abduss_nkj_2009.pdf",
    text: null,
    highighter: null,
    expert_ids: [27],
    postscript: null

  }, {

    id: 72,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Habibullo Abdussamatov's claims were run in a National Geographic article.  Many critics of anthropogenic warming have pointed to this quote within this publication.",
    sourcename: "National Geographic",

    images: ["img/articles/mars-heating.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/journals/national-geographic.jpg",
    url: "http://news.nationalgeographic.com/news/2007/02/070228-mars-warming.html",
    text: null,
    highighter: null,
    expert_ids: [28],
    postscript: null

  }, {

    id: 73,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The admission that Mars might be heating up in recent years sources to an April 2007 Nature Letter",
    sourcename: "Nature Letters",

    images: ["img/papers/mars-warming-3.jpg", "img/papers/mars-warming-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/journals/nature.jpg",
    url: "http://humbabe.arc.nasa.gov/~fenton/pdf/fenton/nature05718.pdf",
    text: null,
    highighter: null,
    expert_ids: [29],
    postscript: null

  }, {

    id: 74,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "While it may indeed be true that albedo is playing a role in Martian heating, a commonly overlooked set of observations relates to the unexpectedly filamentary nature of the global dust storms.",
    sourcename: "Thunderbolts.info Website",

    images: ["img/articles/mars-global-dust-storm-2.jpg", "img/articles/mars-global-dust-storm-3.jpg", "img/articles/mars-global-dust-storm-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/martian-dust-devil.jpg",
    url: "https://www.thunderbolts.info/tpod/2007/arch07/071025dustdevils.htm",
    text: null,
    highighter: null,
    expert_ids: [8,9],
    postscript: null

  }, {

    id: 75,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Planteary scientists will occasionally mention the role of electric fields in Martian dust devil formation, but they rarely point to direct observation of luminosities at dust devil cores by landers; nor the possibility that dark tracks might be burn marks; nor the argument that the Martian atmosphere is not thick enough to support their mechanistic explanation of Martian dust devils.",
    sourcename: "Thunderbolts.info Website",

    images: ["img/articles/mars-dust-devils-1.jpg", "img/articles/mars-dust-devils-2.jpg", "img/articles/mars-dust-devils-3.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/martian-dust-devil.jpg",
    url: "https://www.thunderbolts.info/wp/2014/03/26/electric-devils-3/",
    text: null,
    highighter: null,
    expert_ids: [30],
    postscript: null

  }, {

    id: 76,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The SkepticalScience website argues against a long-term trend in Martian albedo.",
    sourcename: "SkepticalScience.com Website",

    images: ["img/articles/mars-warming.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/journals/skeptical-science.png",
    url: "http://www.skepticalscience.com/Climate-Change-on-Mars.html",
    text: null,
    highighter: null,
    expert_ids: [31],
    postscript: null

  }, {

    id: 77,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The SkepticalScience website explains observable warming on Mars with orbital eccentricity, thermal inertia, global dust storms and lack of data.",
    sourcename: "SkepticalScience.com Website",

    images: ["img/articles/mars-warming-6.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/journals/skeptical-science.png",
    url: "https://www.skepticalscience.com/global-warming-on-mars.htm",
    text: null,
    highighter: null,
    expert_ids: [31],
    postscript: null

  }, {

    id: 78,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Throughout most of the volume of a glow discharge the plasma is nearly neutral, with almost equal numbers of protons and electrons.  Yet, plasma glow discharges are very commonly used for lighting, and we power them by running an electric current through them.  So, by basic observation of a common lamp, charge neutrality cannot be a gauge of whether or not a plasma is conducting.",
    sourcename: null,

    images: ["img/articles/glow-discharge-curves.svg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/grow-lamp.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Glow_discharge_structure_-_English.svg",
    text: null,
    highighter: null,
    expert_ids: [8,9],
    postscript: null

  }, {

    id: 79,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "When a plasma has the same number of plus and minus charge, it is said to be quasi-neutral.  However, a common mistake is to confuse quasi-neutrality for non-conductivity.  This is not the case because in a plasma, unlike in a neutral solid, the charge carriers are free to move about.",
    sourcename: null,

    images: ["img/articles/quasi-neutral.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/grow-lamp.jpg",
    url: "http://www.thunderbolts.info/faq/quasineutral.htm",
    text: null,
    highighter: null,
    expert_ids: [8,9],
    postscript: null

  }, {

    id: 80,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "There exists a common misconception that the solar wind cannot carry electric currents for the simple reason that it generally exhibits the same number of electrons and protons.",
    sourcename: null,

    images: ["img/forums/cosmoquest-solar-wind.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/grow-lamp.jpg",
    url: "http://cosmoquest.org/forum/showthread.php?20051-Solar-Wind-as-an-electric-current&s=8bd4b18dec956bed33cfda9b95c87829&p=451127#post451127",
    text: null,
    highighter: null,
    expert_ids: [13],
    postscript: null

  }, {

    id: 81,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Solar experts and planetary scientists will occasionally point out that the solar wind is an excellent conductor; the issue of whether or not it is conducting an electrical current is a slightly different question.",
    sourcename: null,

    images: ["img/articles/ask-a-solar-physicist-excellent-conductor.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/grow-lamp.jpg",
    url: "http://solar-center.stanford.edu/FAQ/Qsolwindcomp.html",
    text: null,
    highighter: null,
    expert_ids: [32],
    postscript: null

  }, {

    id: 82,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Scientists directly witnessed in May of 2007 an electrical current from the Sun connecting with the Earth over the solar wind medium.",
    sourcename: null,

    images: ["img/articles/themis-magnetic-ropes-pic.jpg", "img/articles/themis-magnetic-ropes.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-current.jpg",
    url: "http://www.nasa.gov/mission_pages/themis/auroras/northern_lights.html#.VYZGlDTF8vE",
    text: null,
    highighter: null,
    expert_ids: [33],
    postscript: null

  }, {

    id: 83,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The fact that the solar wind fails to appreciably decelerate even as it passes the Earth's orbit is really quite unexpected for a thermonuclear Sun, and it supports the notion that we are possibly part of a much larger electrodynamic system.",
    sourcename: null,

    images: ["img/articles/solar-electric-field.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/grow-lamp.jpg",
    url: "https://www.thunderbolts.info/tpod/2005/arch05/050427sun.htm",
    text: null,
    highighter: null,
    expert_ids: [8,9],
    postscript: null

  }, {

    id: 84,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The textbook theory on lightning is that the charge is generated within the thunderclouds, and that the electrical circuit is largely confined to the Earth, like a closed, looping electrical system.",
    sourcename: null,

    images: ["img/articles/fair-weather-current-0.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: "http://science.nasa.gov/science-news/science-at-nasa/1999/essd15jun99_1/",
    text: null,
    highighter: null,
    expert_ids: [33],
    postscript: null

  }, {

    id: 85,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Fair weather electric current is an ambient electric current that spans the entire globe at all times.  It is driven by a global electric field that spans the vertical height of the Earth's atmosphere from ground to ionosphere, and scientists today recognize that it is related to thunderstorms, the magnetosphere and especially the electrical activity at the polar regions, where the magnetosphere's reach is closest to the Earth's surface.",
    sourcename: null,

    images: ["img/articles/fair-weather-current-diagram.jpg", "img/articles/fair-weather-current.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: "http://science.nasa.gov/science-news/science-at-nasa/1999/essd15jun99_1/",
    text: null,
    highighter: null,
    expert_ids: [33],
    postscript: null

  }, {

    id: 86,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The textbook theory on lightning remains speculative insofar as the electric fields that are observed in the thunderclouds appear insufficient to induce the discharge, so researchers believe that there must be something else that seeds the event.",
    sourcename: null,

    images: ["img/articles/lightning-mystery.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: "http://www.bbc.com/future/story/20120926-what-causes-lightening",
    text: null,
    highighter: null,
    expert_ids: [34],
    postscript: null

  }, {

    id: 87,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "One problem with the hypothesis that the charge separation is created within the thunderclouds is the fact that we today understand that there are forms of lightning called upper-atmosphere lightning which basically connect to space.  This opens up the possibility that the thundercloud is simply a conduit for a far larger electrical circuit.",
    sourcename: null,

    images: ["img/articles/upper-atmosphere-lightning-sprite.jpg", "img/articles/upper-atmosphere-lightning-sprite-2.jpg", "img/articles/upper-atmosphere-lightning-diagram.jpg", "img/articles/lightning-to-space.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: "http://rense.com/general68/gint.htm",
    text: null,
    highighter: null,
    expert_ids: [35],
    postscript: null

  }, {

    id: 88,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Yet another problem with the idea that charge separation is created within the clouds is the simple fact that gamma rays and anti-matter are observed to be associated with lightning bursts -- problem being is that the energies required to create such waves are an order of magnitude larger than the textbook theory's ability to make them.",
    sourcename: null,

    images: ["img/articles/lightning-gamma-rays.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: "http://space.io9.com/lightning-mysterious-gamma-ray-bursts-1549723614",
    text: null,
    highighter: null,
    expert_ids: [36],
    postscript: null

  }, {

    id: 89,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Supporting the hypothesis that lightning is a part of a much larger electrical circuit is the observation that lightning strikes can clear out the inner region of the Van Allen Radiation Belts.",
    sourcename: null,

    images: ["img/articles/lightning-van-allen-belts-diagram.jpg", "img/articles/lightning-van-allen-belts.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: "http://www.nasa.gov/home/hqnews/2005/mar/HQ_05070_radiation_belt.html",
    text: null,
    highighter: null,
    expert_ids: [33],
    postscript: null

  }, {

    id: 90,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The observed correlation between solar wind intensity and lightning strikes suggests a research direction for lightning discharge's seed.",
    sourcename: null,

    images: ["img/articles/solar-wind-lightning.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind-lightning.jpg",
    url: "http://www.bbc.com/news/science-environment-27406358",
    text: null,
    highighter: null,
    expert_ids: [37],
    postscript: null

  }, {

    id: 91,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Astrophysicist Piers Corbyn claims to accurately predict the weather with an 80-85% accuracy rate by simply correlating present solar plasma activity with past solar plasma activity, and then checking to see what impact that past solar activity had upon the Earth's upper atmosphere systems and jet stream.",
    sourcename: null,

    images: ["img/articles/piers-corbyn.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/piers-corbyn.jpg",
    url: "http://www.telegraph.co.uk/comment/columnists/borisjohnson/8213058/The-man-who-repeatedly-beats-the-Met-Office-at-its-own-game.html",
    text: null,
    highighter: null,
    expert_ids: [2,38],
    postscript: null

  }, {

    id: 92,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Although we really only have two vague data points, it appears that Pluto's atmosphere has been going through dramatic transformations over the past few decades.",
    sourcename: null,

    images: ["img/articles/pluto-warming.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/pluto-warming.jpg",
    url: "http://www.space.com/3159-global-warming-pluto-puzzles-scientists.html",
    text: null,
    highighter: null,
    expert_ids: [39],
    postscript: null

  }, {

    id: 93,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "A variety of arguments are used to cast simultaneous warming on other planets, like Pluto, as a climate myth: a claim that the Sun's energy output has not increased since direct measurements began in 1978; that it's a chance observation due to independent localized planetary warmings; that it's too early to start drawing conclusions; and it is speculated that Pluto's warming might actually be a delayed greenhouse effect.",
    sourcename: null,

    images: ["img/articles/TSI-decreasing.jpg", "img/articles/mars-and-pluto.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/pluto-warming.jpg",
    url: "http://www.newscientist.com/article/dn11642-climate-myths-mars-and-pluto-are-warming-too.html#.VYjQGDTF8vE",
    text: null,
    highighter: null,
    expert_ids: [40],
    postscript: null

   }, {

    id: 94,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Top-of-the-Atmosphere Drivers Cannot Be Ignored",
    sourcename: null,

    images: ["img/headers/stratosphere-ocean-circulation.jpg"],
    definition: "Conventional meteorology assumes that weather drives weather, and it arguably minimizes the effect of top-of-the-atmosphere drivers.  But, new lines of investigation are today being funded to learn more about the role that the polar vortex has upon the Earth's weather and temperature.",
    status: null,
    copy_text: "Conventional wisdom suggests that weather reports typically become inaccurate at around two weeks because the atmosphere is chaotic, and because small rounding errors are known to produce different results on different computers.<br><br>However, there can be yet a third cause: space 'weather', or more formally, the Earth's electrically conductive solar plasma environment. Theorists like to point to the accepted fact that the Sun's total solar irradiance (TSI) does not vary by more than 0.1% over the entire solar cycle, and the Earth's magnetic field is extremely effective at deflecting or trapping this solar radiation. Yet, <b>some theorists will admit that this line of reasoning does not apply to solar radiation and solar plasma at the polar regions.</b><br><br>Nobody actually knows the energy balance at the top of the atmosphere (TOA), but what we can observe is that <b>climate models tend to be very sensitive to this TOA energy balance</b>. IPCC models accordingly make sweeping assumptions about this TOA energy balance -- the problem being that <b>any claims that are subsequently made about the cause for climate changes can simply reflect this assumption of an energy balance</b>. The IPCC does not generally discuss such assumptions within its Summary for Policymakers, but this problem of model tuning is indeed mentioned in its scientific assessments.<br><br>Such concerns are not without warrant, as <b>a link has been observed between sudden stratospheric warming (SSW) events at the poles with mile-deep oceanic circulation patterns</b>, which are in turn known to be associated with Earth's climate. <b>That's an enormously surprising observation in light of the fact that the ocean's energy content is on the order of a thousand times the atmospheric energy content.</b><br><br>There are several different groups currently studying the Sun's electrical influence upon the Earth's weather and climate. Piers Corbyn is already widely known for his occasional successes predicting extreme weather events a full four weeks in advance based upon lunar, magnetic and especially energetic solar patterns.<br><br>Less known is the fact that <b>NASA has recently invested almost a million dollars to-date into the creation of a new Global Ionosphere-Thermoshere Model (GITM), which like Corbyn's approach, will take into account sudden influxes of solar electrical energy at the poles</b>.<br><br>Yet another group, which is using infrasound data from the 300+ CTBTO network of sensors more commonly used to monitor nuclear explosions across the globe, believes that <b>they will eventually be able to predict the weather a full month or season in advance</b> by observing the same SSW events that both NASA and Corbyn are closely tracking.",
    search_hit: null,

    claim_ids: [180,122,124,123,174,125,126,18,121,115,129,130,127,128,11],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/toa-model-tuning.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [2],
    postscript: null

   }, {

    id: 95,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The sunspot number has traditionally been used as an indicator of solar activity even though it does not fully represent solar activity.",
    sourcename: null,

    images: ["img/papers/geomagnetic-activity-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/sunspots-stratosphere.jpg",
    url: "http://sait.oat.ts.astro.it/MmSAI/76/PDF/969.pdf",
    text: null,
    highighter: null,
    expert_ids: [41],
    postscript: null

   }, {

    id: 96,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Sunspots are not a consistent indicator of solar activity because there are particular phases of the solar cycle where coronal holes (CH's) emit very fast solar wind, and the sunspot activity would not reflect this activity.",
    sourcename: null,

    images: ["img/papers/geomagnetic-activity-5-pic.jpg", "img/papers/geomagnetic-activity-6-pic.gif", "img/papers/geomagnetic-activity-0.jpg", "img/papers/geomagnetic-activity-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/coronal-hole.png",
    url: "http://sait.oat.ts.astro.it/MmSAI/76/PDF/969.pdf",
    text: null,
    highighter: null,
    expert_ids: [41],
    postscript: null

   }, {

    id: 97,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "When solar activity is represented by the ak index of geomagnetic activity rather than sunspots alone, the Earth's global temperature changes correlate surprisingly well with solar activity.",
    sourcename: "Paper: Once Again About Global Warming and Solar Activity + Book: The Neglected Sun",

    images: ["img/papers/geomagnetic-activity-3.jpg", "img/papers/geomagnetic-activity-4.jpg", "img/books/neglected-sun-sunspot-vs-solar-magnetic-field.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/coronal-hole.png",
    url: "http://sait.oat.ts.astro.it/MmSAI/76/PDF/969.pdf",
    text: null,
    highighter: null,
    expert_ids: [41],
    postscript: null

   }, {

    id: 98,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Sunspot numbers appear to generally correlate with lower stratosphere temperature anomalies, minus the temporal effects of volcanic eruptions -- suggesting that the sunspots are somehow related to these electrical flows.",
    sourcename: null,

    images: ["img/articles/sunspot-lower-troposphere.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/sunspots-stratosphere.jpg",
    url: "https://www.youtube.com/watch?v=VIAp_6FAXCY",
    text: null,
    highighter: null,
    expert_ids: [42],
    postscript: null

   }, {

    id: 99,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The two fundamental modes of solar wind heating appear to correspond with two of the states observed by Kristian Birkeland's terrella experiments -- a fundamental electromagnetic laboratory plasma physics form which appears to apply to both the Sun and the Earth.",
    sourcename: null,

    images: ["img/headers/birkeland-terrella-1.jpg", "img/articles/auroral-currents.jpg", "img/articles/birkeland-terrella-2.jpg", "img/articles/equatorial-tubes.jpg", "img/articles/solar-plasmoid-top.jpg", "img/articles/solar-plasmoid-side.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/birkeland-terrella.png",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [9],
    postscript: null

   }, {

    id: 100,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Many climate modelers have decided to ignore the role of solar cycles in Earth's recent warming and subsequent cooling, even though there exists a 60-year solar cycle which coincides with these temperature changes.",
    sourcename: null,

    images: ["img/books/neglected-sun-schwabe-cycle.jpg", "img/books/neglected-sun-PDO-cycle.jpg", "img/books/neglected-sun-60-year-cycle.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/birkeland-terrella.png",
    url: "http://www.amazon.com/Neglected-Sun-Precludes-Catastrophe-Independent-ebook/dp/B00I2O5WDQ/",
    text: null,
    highighter: null,
    expert_ids: [43,44],
    postscript: null

   }, {

    id: 101,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "It's not uncommon for weather and climate experts to discuss the polar vortex without any mention of the larger twisting geometry of the polar magnetic field and the electric currents moving in and out of this region -- as if the polar vortex is completely unrelated to that electromagnetic activity.",
    sourcename: null,

    images: ["img/articles/polar-vortex-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://www.slate.com/blogs/bad_astronomy/2014/09/15/polar_vortex_deep_meanders_in_vortex_linked_to_global_warming.html",
    text: null,
    highighter: null,
    expert_ids: [45],
    postscript: null

   }, {

    id: 102,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Some theorists have gone so far as to claim that the intense chill of the polar vortex results from global warming.",
    sourcename: null,

    images: ["img/articles/polar-vortex-2.jpg", "img/articles/polar-vortex-3.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://www.slate.com/blogs/bad_astronomy/2014/02/21/polar_vortex_weather_climate_and_meandering_jet_streams.html",
    text: null,
    highighter: null,
    expert_ids: [45],
    postscript: null

   }, {

    id: 103,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "What is rarely mentioned about the polar vortex is that modelers have thus far struggled to replicate its features.",
    sourcename: null,

    images: ["img/articles/polar-vortex-4.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://wattsupwiththat.com/2014/01/07/a-sober-look-at-the-northern-polar-vortex/",
    text: null,
    highighter: null,
    expert_ids: [46],
    postscript: null

   }, {

    id: 104,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Anomalously Fast Winds Perplex Planetary Scientists",
    sourcename: null,

    images: ["img/headers/uranus-winds-two-day-timeframe-1.jpg", "img/headers/uranus-winds-two-day-timeframe-2.jpg"],
    definition: "The winds are so unexpectedly fast on some planets that they raise questions about the underlying cause of winds on all planets.",
    status: null,
    copy_text: "One of the best ways that we can push science forward is to attempt to re-frame questions on anomalous observations which textbook theory has simply failed to explain. These outlier observations are like keys to a future, better scientific theory -- but oddly enough, most science journalism today pays only occasional heed to them, lending the confident impression to science enthusiasts that it's all been figured out.  <b>No need to think, right?</b><br><br>The anomalous winds on both Uranus and Neptune give us an invaluable opportunity to question our textbook theories. After all, the winds of Uranus can move as fast as <b>560 miles per hour</b>, while winds on Neptune have been clocked at an astounding <b>1,500 miles per hour</b>! In neither case can the go-to source for energy input -- thermal energy from the Sun -- possibly be the cause. The fact that Neptune is <b>emitting</b> 2.61 times more thermal energy than it receives from the Sun emphasizes the point.<br><br>Not only do such observations beg us to ask if there's another, yet-unaccounted-for source for energy in our solar system, but we should also be seeking to understand if there's more than one way to create a wind. <b>Right?</b><br><br>The wrong reaction is to confuse the speculative expert explanations offered as reason to avoid thinking and asking questions.",
    search_hit: null,

    claim_ids: [105,106,170,107,108,109,110],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/uranus.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [9],
    postscript: null

   }, {

    id: 105,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Uranus' extremely low temperatures and its enormous distance from the Sun cast doubt on a thermal driver for its incredible winds.",
    sourcename: null,

    images: ["img/articles/uranus-winds.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/uranus.jpg",
    url: "https://www.thunderbolts.info/wp/2014/08/15/father-sky/",
    text: null,
    highighter: null,
    expert_ids: [9],
    postscript: null

   }, {

    id: 106,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Like Uranus, Neptune's anomalously fast winds remain a mystery in light of the amount of sunlight it receives.",
    sourcename: null,

    images: ["img/articles/neptune-winds.jpg", "img/articles/neptune-strongest-winds.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/neptune.jpg",
    url: "https://www.thunderbolts.info/wp/2014/05/05/neptune-is-plugged-in-2/",
    text: null,
    highighter: null,
    expert_ids: [9],
    postscript: null

   }, {

    id: 107,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "A homopolar motor (aka Faraday disc, unipolar generator, acyclic generator or disk dynamo) spins due to the application of a voltage difference, which creates an electric current whose magnetic field curls according to the right-hand-rule.",
    sourcename: null,

    images: ["img/audio-video/homopolar-motor-1.jpg", "img/audio-video/homopolar-motor-2.jpg", "img/audio-video/homopolar-motor-3.jpg", "img/audio-video/homopolar-motor-4.jpg", "img/audio-video/homopolar-motor-5.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/homopolar-motor.jpg",
    url: "https://www.youtube.com/watch?v=M8hm29KuyXk",
    text: null,
    highighter: null,
    expert_ids: null,
    postscript: null

   }, {

    id: 108,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The winds on Neptune and Venus might be anomalous for the very reason that planetary scientists are underestimating the role of electromagnetic forces in planetary winds.",
    sourcename: null,

    images: ["img/articles/planetary-faraday-motor.jpg", "img/articles/electromotive-power.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/homopolar-motor.jpg",
    url: "http://www.holoscience.com/wp/global-warming-in-a-climate-of-ignorance/",
    text: null,
    highighter: null,
    expert_ids: [9],
    postscript: null

   }, {

    id: 109,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The homopolar motor concept can possibly be used to explain Earth's shifting latitudes and speeds of the jet streams, insofar as changes in the larger electromagnetic environment can conceivably alter the geometry and rotational speeds of the larger plasma features.",
    sourcename: null,

    images: ["img/audio-video/jet-stream-shifting.jpg", "img/papers/historical-trends-in-the-jet-streams.jpg", "img/papers/jet-streams-move-poleward.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/homopolar-motor.jpg",
    url: "https://www.youtube.com/watch?t=65&v=UTFY9uDlhIE",
    text: null,
    highighter: null,
    expert_ids: [47],
    postscript: null

   }, {

    id: 110,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The homopolar motor concept can possibly be used to explain the Sun's rapid changes in rotation at the poles, and indeed these changes are observed to reflect sudden changes in its electromagnetic environment.",
    sourcename: null,

    images: ["img/papers/solar-polar-vortex.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/homopolar-motor.jpg",
    url: "http://www4.nso.edu/press/newsletter/SolarPolarVortex.pdf",
    text: null,
    highighter: null,
    expert_ids: [48],
    postscript: null

   }, {

    id: 111,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "There exists a largely untested idea that since Earth is a small charged body embedded within the Sun's larger plasma environment that weather on Earth is the result of changes in its surrounding plasma's electromagnetic environment.",
    sourcename: null,

    images: ["img/articles/electric-weather.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "https://www.thunderbolts.info/tpod/2004/arch/040917electric-weather.htm",
    text: null,
    highighter: null,
    expert_ids: null,
    postscript: null

   }, {

    id: 112,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Planetary scientists who are certain that Venus' heat results from a runaway greenhouse effect nevertheless remain baffled with Venus' transient double polar vortex.",
    sourcename: null,

    images: ["img/articles/venus-dipolar-vortex.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/venus.jpg",
    url: "http://www.holoscience.com/wp/global-warming-in-a-climate-of-ignorance/",
    text: null,
    highighter: null,
    expert_ids: [9,49],
    postscript: null

   }, {

    id: 113,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "A fundamental principle in electromagnetism is that two charge-carrying wires will tend to attract one another when carrying current in the same direction (when the movements of charge are aligned in parallel, meaning the currents flow in the same direction).",
    sourcename: null,

    images: ["img/audio-video/parallel-currents-1.jpg", "img/audio-video/parallel-currents-2.jpg", "img/audio-video/parallel-currents-3.jpg", "img/audio-video/parallel-currents-4.jpg", "img/audio-video/parallel-currents-5.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "http://techtv.mit.edu/tags/441-physics/videos/813-mit-physics-demo----forces-on-a-current-carrying-wire",
    text: null,
    highighter: null,
    expert_ids: null,
    postscript: null

   }, {

    id: 114,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Venus' polar vortex is, like Earth's, not stable; they both occasionally split.",
    sourcename: null,

    images: ["img/articles/venus-transient-polar-vortex.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://www.wired.com/2010/09/venus-polar-vortex/",
    text: null,
    highighter: null,
    expert_ids: null,
    postscript: null

   }, {

    id: 115,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Researchers using infrasound data from a US government project initially designed to monitor nuclear explosions are trying to create new weather prediction models that make accurate predictions several weeks or even months in advance.",
    sourcename: null,

    images: ["img/headers/ctbo-station.jpg", "img/articles/ctbto-weather-predictions.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/ctbo-station.jpg",
    url: "https://www.ctbto.org/press-centre/press-releases/2015/nothing-escapes-the-global-ear-nuclear-tests-volcanoes-earthquakes-or-meteors/",
    text: null,
    highighter: null,
    expert_ids: null,
    postscript: null

   }, {

    id: 116,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Laboratory observations of plasmas conducting electric currents demonstrate that they tend to form into filaments which exhibit both a long-range attraction and short-range repulsion with one another, making double twisting filaments a common aspect of electrical currents over the plasma medium.",
    sourcename: null,

    images: ["img/articles/birkeland-currents-1.jpg", "img/articles/birkeland-currents-2.jpg", "img/articles/birkeland-currents-3.jpg", "img/articles/birkeland-currents-4.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "https://www.thunderbolts.info/wp/2012/01/04/essential-guide-to-the-eu-chapter-7/",
    text: null,
    highighter: null,
    expert_ids: [3],
    postscript: null

   }, {

    id: 117,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Renowned Venus expert, FW Taylor's, confusion on Venus' double polar vortex is an important tell insofar as he appears to not connect the flow of charged particles at Venus' pole to laboratory observations of conducting plasmas.",
    sourcename: null,

    images: ["img/articles/birkeland-currents-5.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://www.space.com/19209-venus-atmosphere-magnetic-ropes.html",
    text: null,
    highighter: null,
    expert_ids: [50],
    postscript: null

   }, {

    id: 118,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The confusion over Venus' Birkeland Currents and splitting polar vortex tells us that atmospheric scientists are not connecting the dots on Earth's splitting polar vortex either.",
    sourcename: null,

    images: ["img/articles/birkeland-currents-6.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://www.theguardian.com/science/2006/apr/09/starsgalaxiesandplanets.spaceexploration",
    text: null,
    highighter: null,
    expert_ids: [49],
    postscript: null

   }, {

    id: 119,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The fact that the electrical plasma explanation for Venus' polar vortex can fully explain all of its small-scale features is a strong predictor of what will come of Earth's climate and weather prediction models.",
    sourcename: null,

    images: ["img/headers/venus-polar-vortex.jpg", "img/articles/birkeland-currents-7.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://www.holoscience.com/wp/venus-isnt-our-twin/",
    text: null,
    highighter: null,
    expert_ids: [9,49],
    postscript: null

  }, {

    id: 120,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "So, What is a Plasma and Why Does it Matter?",
    sourcename: null,

    images: null, // FILL!
    definition: "A plasma is a gas that has some percentage of unbound, charged particles.  Its behavior often fundamentally differs from that of a gas, yet the models we use in the space sciences today -- including our weather and climate models -- continue to largely disregard these differences as well as its pervasiveness.  It's taking a surprisingly long time for these space sciences discoveries to have an effect upon related domains.",
    status: null,
    copy_text: "<b>10 Things You Need to Know to Understand the Debate Over How to Model Cosmic Plasmas</b><br><br>1. A plasma is a gas with enough unbound charged particles (ions and/or electrons) that it behaves different from a gas. In some instances, <b>it may take as little as 1% unbound particles to induce a gas to behave as a plasma</b>. The plasma exhibits collective, yet inhomogeneous, behaviors as it interacts with the ambient electromagnetic fields. And as it interacts, it contributes new electromagnetic fields.<br><br>2. Plasmas are categorized into three fundamental states -- dark, glow and arc modes -- based upon the intensity of their photon emissions. Just as a wire can conduct a current without glowing, it's important to realize that <b>plasmas can conduct currents even when there are no photon emissions. An important implication of this observation is that electricity in space should in many instances be quite difficult to observe</b>.<br><br>3. A magnetic field (typically denoted by B) is a collective alignment of charged particles along field lines which can be drawn, and which tend to guide electric currents. These field lines are mathematical constructs, so the field lines should be distinguished from their underlying physical cause (which people still debate). An electric field (E-field) is an electric force that originates from a concentration of similar electric charges, which tend to repel one another. E-fields will tend to disperse the concentration of charge unless there is something which is replenishing it.<br><br>4. Electric currents and magnetic fields tend to go hand-in-hand, and are related by a construct known as the right hand rule. The right hand rule says that if a current is represented by the thumb, then the magnetic field will tend to wrap around the current in the direction of the fingers of a right hand, as the hand forms a closed thumbs up. <b>This is a fundamental construct in electrodynamics which is commonly ignored by astrophysicists when they observe large-scale cosmic magnetic fields</b>.<br><br>5. Plasmas exhibit a complex relationship between applied voltage or electric field with current density. One important observation to note is the leftmost portion of this graph, where the current density is zero. The V or E-field never actually goes to zero, even in the absence of an electric current. That's an important observation, becasue Ohm's Law (V = IR) suggests that the resistance (R) of a plasma must neither go to zero. There is always at least some tiny electrical resistance associated with a plasma. <b>This fact turns out to be very important to the debate over how to model cosmic plasmas, as the most popular cosmic plasma equations in use today (MHD) treat the plasma as a superconductor, free of any electrical resistance. That's significant because an E-field cannot exist within the plasma without some resistance.</b>.<br><br>6. <b>The concept of temperature is not the same for plasmas as it is for gases</b>. In a gas, temperature is a measure of the thermal energy of the particles in matter. That thermal energy is the kinetic energy of the particles’ random thermal motion. However, in a plasma, field-aligned electric currents can exhibit large non-random, collective motions. When this happens, the temperature may be lower, and the energy carried by the plasma is not simplistically represented by the plasma's temperature.<br><br>7. Observations of laboratory plasmas indicate that they can form into an unexpected structure called a double layer. <b>These are adjacent thin layers of positive and negative charge, separated by a relatively small distance</b>. Their presence in space remains a somewhat controversial or neglected matter, as they are in fact <b>electrodynamic</b> structures, and <b>it's really quite extraordinary that the opposite charges do not simply recombine</b>. The plasma distributions near a double layer are said to be 'non-Maxwellian', and are therefore <b>inaccessible to fluids-based modeling attempts</b>.<br><br>8. Double layers can lead to the formation of <b>complex wire-like structures</b> in plasmas <b>which can essentially extend to infinite distances, obviously long after the force of gravity becomes negligable</b>. When carrying current in the same direction, these plasma filaments can exhibit a <b>long-range attraction. Yet, they will oftentimes not combine at short distances because each plasma filament exhibits counter-rotating spiraling electrons. Such structures are observed in space, and go by a host of names</b> (such as Birkeland currents or magnetic ropes).<br><br>9. <b>Marklund convection</b> is a little-studied process observed in the plasma laboratory whereby a current-carrying plasma filament will tend to attract charged particles in the surrounding medium. As those particles are drawn into the filament, the neutral matter can be drawn in as a consequence. The resulting filaments can potentially exhibit extraordinary complexity, with <b>concentric tubes</b>, <b>separation of elements</b> and <b>neutral cores</b>.<br><br>10. Plasma filaments can induce extreme twisting of filaments, and extreme charge densities as a result. There comes a point where the state of this plasma can fundamentally change. Such transitions are called <b>pinches</b> (sometimes <b>z-pinches</b>). What is important to understand about this process is that <b>it closely matches observations of stellar formation, which Herschel has observed tend to form like beads along filaments -- in contradiction to the textbook nebular (aka core accretion) hypothesis for stellar birth</b>. It is conceivable that as the initial discharge recedes, gravity may take over, and all that might remain is a far more subtle electrical connection between those stars. Thus, laboratory plasma physics observations suggest an alternative way to create a star, which differs from the astrophysical textbook theory.<br><br>Plasmas are extraordinarily complex phenomena which even today, supercomputers still struggle to simulate. This short list is simply a Cliff's notes approach to understanding aspects of cosmic and laboratory plasmas which are relevant to the debate over how to model it. A more thorough treatment of these subjects is available online at both https://www.plasma-universe.com and the Essential Guide to the Electric Universe at https://www.thunderbolts.info/wp/eu-guides/eg-contents/.",
    search_hit: null,

    claim_ids: [210,211,212],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/plasma-ball.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [9],
    nodes: null,
    postscript: null

  }, {

    id: 121,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "There are recent hints that changes associated with the polar vortex known as sudden stratospheric warming (SSW) events can significantly alter not only the weather which follows, but also possibly ocean circulation.",
    sourcename: null,

    images: ["img/articles/stratosphere-ocean-circulation.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "http://phys.org/news/2012-09-north-atlantic-achilles-heel-upper.html",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 122,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Weather experts traditionally point to uncertainties in weather data as a primary cause for inaccuracurate weather predictions.",
    sourcename: null,

    images: ["img/articles/weather-predictions-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "http://unofficialnetworks.com/2014/01/weather-climate-longrange-forecasting-inaccurate",
    text: null,
    highighter: null,
    expert_ids: [52],
    nodes: null,
    postscript: null

  }, {

    id: 123,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Climate experts currently treat Earth's weather and climate systems as though the space weather which Earth is immersed in has minimal influence.",
    sourcename: null,

    images: ["img/articles/space-earth-weather.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: "http://www.ips.gov.au/Educational/1/3/3",
    text: null,
    highighter: null,
    expert_ids: [53],
    nodes: null,
    postscript: null

  }, {

    id: 124,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "There is a popular meme known as the Butterfly Effect that is occasionally invoked to explain systems which exhibit difficult-to-predict changes.  Scientists refer to these modeling phenomena as nonlinearities, and they can potentially disguise the effects of foreign influences upon the Earth's weather system.",
    sourcename: null,

    images: ["img/articles/butterfly-effect.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/butterfly.png",
    url: "http://unofficialnetworks.com/2014/01/weather-climate-longrange-forecasting-inaccurate",
    text: null,
    highighter: null,
    expert_ids: [52],
    nodes: null,
    postscript: null

  }, {

    id: 125,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "It's been claimed online that general circulation models tend to reflect similar results because climate change comes from energy imbalances at the top of the atmosphere, yet climate models all hand-tune the top-of-the-atmosphere (TOA) energy balance.",
    sourcename: null,

    images: ["img/forums/slashdot-toa-part4.jpg", "img/forums/slashdot-toa-part7.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/general-circulation-models.jpg",
    url: "http://slashdot.org/comments.pl?sid=7511261&cid=49849281",
    text: null,
    highighter: null,
    expert_ids: [7],
    nodes: null,
    postscript: null

  }, {

    id: 126,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The IPCC freely admits to its practice of TOA tuning; it's not a secret.",
    sourcename: null,

    images: ["img/forums/slashdot-toa-part5.jpg", "img/forums/slashdot-toa-part6.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/IPCC.jpg",
    url: "http://www.ipcc.ch/pdf/assessment-report/ar5/wg1/WG1AR5_Chapter09_FINAL.pdf",
    text: null,
    highighter: null,
    expert_ids: [54],
    nodes: null,
    postscript: null

  }, {

    id: 127,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "NASA is today funding the creation of a new 'non-hydrostatic' model which will strive to more accurately model Earth's electrical interactions with space.",
    sourcename: null,

    images: ["img/articles/yue-deng-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: "http://www.uta.edu/news/releases/2014/02/Deng-NASAgrant.php",
    text: null,
    highighter: null,
    expert_ids: [51],
    nodes: null,
    postscript: null

  }, {

    id: 128,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "These new Global Ionosphere-Thermosphere Models (GITM's) will take into account the charge change phenomena that the IPCC has been ignoring.",
    sourcename: null,

    images: ["img/articles/yue-deng-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: "http://www.uta.edu/news/releases/2013/03/deng-nasagrant.php",
    text: null,
    highighter: null,
    expert_ids: [51],
    nodes: null,
    postscript: null

  }, {

    id: 129,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "High-speed vertical winds that switch direction and oscillate have been observed at the poles.  They are currently referred to as 'thermospheric vertical winds'.",
    sourcename: null,

    images: ["img/papers/thermospheric-vertical-winds-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: "http://arxiv.org/pdf/1412.0077.pdf",
    text: null,
    highighter: null,
    expert_ids: [56],
    nodes: null,
    postscript: null

  }, {

    id: 130,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Although the researchers noticed that the thermospheric vertical winds were more sustained during solar maximum, they caution that there is no obvious driver for them.",
    sourcename: null,

    images: ["img/papers/thermospheric-vertical-winds-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: "http://onlinelibrary.wiley.com/doi/10.1029/2012JA017843/abstract",
    text: null,
    highighter: null,
    expert_ids: [55],
    nodes: null,
    postscript: null

  }, {

    id: 131,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Solar Lunar Action Technique (SLAT)",
    sourcename: null,

    images: ["img/headers/piers-corbyn-beat-uk-govt-predictions.png"],
    definition: "Maverick weather predictor, Piers Corbyn, has made a name for himself as the only person in the world who can sometimes accurately predict extreme weather phenomena 30-45 days in advance, to the day.  His technique is based upon intense solar events, which he predicts with the help of the 60-year solar cycle.",
    status: null,
    copy_text: null,
    search_hit: null,

    claim_ids: [91,135,136,133,132,137,138,134,139],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind.gif",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 132,
    controversy: false,
    parent: false,
    type: "Video",
    display: true,
    title: "Is it possible that the two solar cycles are indicative of a reversal in the direction of net charge movement for the solar current sheet?",
    sourcename: null,

    images: ["img/audio-video/piers-corbyn-odd-even-solar-cycles.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind.gif",
    url: "https://youtu.be/6R26PXRrgds?t=640",
    text: [{quote: "<b>Piers Corbyn:</b> 'What's going on, then, in terms of the Sun every 22 years? ... And I did this after a conversation with Dave on the phone ... You see, there's a current sheet coming from the equator ... it's a bit wavy thing ... But, it comes out from the Sun ... in the old cycle, you're gonna have positive current moving in, so it means the particles coming out are electrons in the old cycle.  In the even cycle, it's gonna be protons is the net charge coming out.  So, that could be important -- the difference.'"}],
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 133,
    controversy: false,
    parent: false,
    type: "Video",
    display: true,
    title: "Piers Corbyn claims that the Moon is important to jet stream activity (and hence weather prediction) insofar as it can pass through the Earth's magnetic tail when the Moon is full and well-eclipsed.",
    sourcename: null,

    images: ["img/audio-video/piers-corbyn-varying-magnetic-sectors.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind.gif",
    url: "https://youtu.be/6R26PXRrgds?t=695",
    text: [{quote: "<b>Piers Corbyn:</b> 'This is the current sheet, which is very wavy and it goes round and round.  And in fact, the direction of the field changes ... might be once a week even, as the magnetic sectors change ... These are fundamental to what happens to the jet stream and the circulation of the Earth. And the interesting one here is the magnetic tail, which is connected, way back there, which of course the Moon hits every full Moon, depending how close it is ... how close to an eclipse.'"}],
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 134,
    controversy: false,
    parent: false,
    type: "Video",
    display: true,
    title: "Piers Corbyn attributes the 60-year solar cycle modulation to the orbit of the Moon interacting with the 22-year magnetic solar cycle.",
    sourcename: null,

    images: ["img/audio-video/piers-corbyn-60year-cycle.jpg", "img/audio-video/piers-corbyn-SLAM.jpg", "img/audio-video/piers-corbyn-SLAM-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/moon.jpg",
    url: "https://youtu.be/6R26PXRrgds?t=602",
    text: [{quote: "<b>Piers Corbyn:</b> 'Another very important thing is these 60-year modulation, which is beats between the rotation of the nodes of the orbit of the Moon, where it crosses the ecliptic, and the 22-year magnetic cycle'"},
           {quote: "<b>Piers Corbyn:</b> 'In detail, how does this 60 year cycle work?  Well, don't take these things literally, but this graph, it shows these temperatures, see ... Now, the yellow is an odd cycle, so we've just marked the peak of an odd sunspot cycle to the minimum following.  So, that is just the maximum falling stage of the odd sunspot cycle.  Okay?  The blue arrow means that there was a nodal crossing -- an eclipse of the Sun -- ... in the first half of December of ... a year.  And you mark it if it happens.  And that's just a measure of saying where is the nodal rotation of that year ... So, that is a measure ... of when we're gonna get these extra warmings, explicable in astronomical terms.  And must be involving electricity, just because of certain things I've said anyway.'"}],
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 135,
    controversy: false,
    parent: false,
    type: "Video",
    display: true,
    title: "Piers Corbyn claims that changes in the solar wind influence the complex system of electric currents that surround the Earth, which in turn alter the jet stream.",
    sourcename: null,

    images: ["img/audio-video/piers-corbyn-jet-stream-solar-wind.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: "https://youtu.be/6R26PXRrgds?t=1007",
    text: [{quote: "<b>Piers Corbyn:</b> 'Our revolution is we predict changes in the jet stream due to a solar-driven thing, which are driven by those currents above ... You know, the electrojet, lots of stuff going on.  And furthermore, we can say that sometimes the jet stream will wave around wildly, like it did when we predicted this, and give you these great big incursions of cold air ... And during periods of low solar activity, the jet stream is generally longer, and therefore it's got more wiggle room (which politicians like of course).  And [with] more wiggle room, it can go up and down more, but also, we think the solar wind changes actually MAKE it go up and down more.  So, you've got these wild changes, big extremes.'"}],
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 136,
    controversy: false,
    parent: false,
    type: "Video",
    display: true,
    title: "CO2-based models are apparently unable to replicate the observable changes in the jet stream.",
    sourcename: null,

    images: ["img/audio-video/piers-corbyn-jet-stream-position.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/jet-streams.jpg",
    url: "https://youtu.be/6R26PXRrgds?t=951",
    text: [{quote: "<b>Piers Corbyn:</b> 'So, the key question is: What causes weather extremes and climate change?  And the answer to that is -- and all the standard meteorologists say -- yeesss, jet stream ... the position of the jet stream is fundamental.  And I was at a meeting in the Royal Society recently where the other side said ... oh, we're doing this loads of fantastic work on CO2, but unfortunately, we've put lots of CO2 into the models, and the jet stream just does what it always did.  It doesn't wave around wildly like it is now.  And I stood up and said, well, I'm not surprised.  We predicted that it would wave around wildly now because of solar activity.  Then, they sort of look a bit bemused, and said ... well, well, we could consider some of your inputs into our models, perhaps.  Perhaps, Mr. Corbyn.  Then, I thought that's insane: You cannot put sensible stuff into a model of madness.'"}],
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 137,
    controversy: false,
    parent: false,
    type: "Video",
    display: true,
    title: "The Solar Lunar Action Technique (SLAT) has not been fully disclosed to the public, but it is based upon solar activity indicators, the Sun-Earth magnetic field link and lunar modulation.",
    sourcename: null,

    images: ["img/audio-video/piers-corbyn-SWT-TWS.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind.gif",
    url: "https://youtu.be/6R26PXRrgds?t=1117",
    text: [{quote: "<b>Piers Corbyn:</b> 'Now, the key to all of this -- the basic idea is -- we're gonna have world temperatures, or indeed any world parameter, is going to be a result of solar activity, which is an 11-year cycle, modulated by magnetic links, which together, of course, gives primarily a 22-year cycle with some wobbles in it, and lunar modulation, which is about this rotation of the plane of the Moon's orbit -- which on a monthly basis is 27.2 days, but it's to do with the 18.6 year rotation.  Now, obviously we haven't got a computer big enough to solve any of this, even given the arguments about what equations to apply anyway.  So, what we've done is we've got these magic ... equations where I predict what are called weather action indicators which are essentially descriptions of solar activity, magnetic links, lunar modulation, the total Sun-Earth magnetic linkage state ... and there are a few parameters ... w1, w2, w3, and so on.  So, we say okay, these are varying.  What are they going to be at Christmas, and when were they last like that in the past around Christmas? ... This world is simple enough maybe to have one input give roughly one output ... And we use weather maps in the past as models for the future.  And we modify them a little bit ... because, ah hang on, there's an R5 ... Big storms ... But we can look in the past ... We can find where obviously there was a lot of activity going on.  And we can even make estimates of what the Sun was doing, but you've gotta be careful with that.'"}],
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 138,
    controversy: false,
    parent: false,
    type: "Video",
    display: true,
    title: "Piers Corbyn claims to have had success predicting sudden stratospheric warming events.",
    sourcename: null,

    images: ["img/articles/sudden-stratospheric-warming-data.gif"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/solar-wind.gif",
    url: "https://youtu.be/6R26PXRrgds?t=1239",
    text: [{quote: "<b>Piers Corbyn:</b> 'We've also done predictions of sudden warmings of the stratosphere, known in the trade as sudden stratospheric warmings (SSW's).  And these were known about to astrophysicists years ago, in the 60's.  And they noticed that the jet stream actually started waving more a week or so after these things.  But they didn't tell the meteorologists, and the meteorologists wouldn't have been interested anyways.  It's only recently that this has come to light, and we've made successful predictions of them ... When they wave around in the winter, you get big waves in the jet stream, and then you might get shunting out of cold air and snow.'"}],
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 139,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Piers Corbyn's work is enormously controversial amongst meteorologists, and there are a number of caveats to his claims.",
    sourcename: null,

    images: ["img/forums/piers-corbyn-wuwt-1.jpg", "img/forums/piers-corbyn-wuwt-2.jpg", "img/forums/piers-corbyn-wuwt-3.jpg", "img/forums/piers-corbyn-wuwt-4.jpg", "img/forums/piers-corbyn-wuwt-5.jpg", "img/forums/piers-corbyn-wuwt-6.jpg", "img/forums/piers-corbyn-wuwt-7.jpg", "img/forums/piers-corbyn-wuwt-8.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/piers-corbyn.jpg",
    url: "http://wattsupwiththat.com/2012/07/05/putting-piers-corbyn-to-the-test/",
    text: null,
    highighter: null,
    expert_ids: [2],
    nodes: null,
    postscript: null

  }, {

    id: 140,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "One of the most potentially clear-cut examples of planetary-scale electrical heating in the solar system is that of Saturn's moon, Enceladus.",
    sourcename: "@NASA",

    images: ["img/articles/saturn-enceladus-connection.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-hotspots.jpg",
    url: "https://www.nasa.gov/multimedia/imagegallery/image_feature_2069.html",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 141,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The electrical connection between Saturn and Enceladus has been confirmed by Cassini.  It shows up in at least two different ways: in Saturn's electromagnetic field, and in the synchronicity between the Saturnian aurora and Enceladus' polar activity.",
    sourcename: null,

    images: ["img/articles/enceladus-saturn-auroral-footprint.jpg", "img/articles/enceladus-saturn-time-variable-emissions.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-hotspots.jpg",
    url: "https://www.thunderbolts.info/wp/2011/10/19/electric-enceladus/",
    text: null,
    highighter: null,
    expert_ids: [30],
    nodes: null,
    postscript: null

  }, {

    id: 142,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Remarkably, despite the observation of an electrical connection between Saturn and Enceladus, NASA never even mentions the possibility of electric joule heating as a cause for Enceladus' unexpected polar hot spot.  It's an awkward disconnect in light of the fact that many people today commonly cook with electrically-heated filaments.",
    sourcename: "@NASA",

    images: ["img/articles/enceladus-hot-poles.jpg", "img/articles/enceladus-heat.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-hotspots.jpg",
    url: "http://www.nasa.gov/mission_pages/cassini/multimedia/pia06432.html",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 143,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "NASA has observed a hot pole for Neptune as well.",
    sourcename: "@NASA",

    images: ["img/articles/neptune-hot-pole.jpg", "img/articles/neptune-hot-pole-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-hotspots.jpg",
    url: "http://www.jpl.nasa.gov/spaceimages/details.php?id=PIA09927",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 144,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Planetary scientists attribute Neptune's hot poles to selective heating of Neptune's northern and southern hemispheres.",
    sourcename: null,

    images: ["img/articles/neptune-hot-pole-4.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-hotspots.jpg",
    url: "https://www.thunderbolts.info/wp/2014/05/05/neptune-is-plugged-in-2/",
    text: null,
    highighter: null,
    expert_ids: [30],
    nodes: null,
    postscript: null

  }, {

    id: 145,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Planetary scientists admitted their surprise with their observation of a hot spot at Saturn's north pole.",
    sourcename: null,

    images: ["img/articles/saturn-hot-spot.jpg", "img/articles/saturn-hexagon.gif", "img/articles/saturn-pole.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-hotspots.jpg",
    url: "https://www.thunderbolts.info/wp/2013/05/27/saturns-northern-hot-spot-2/",
    text: null,
    highighter: null,
    expert_ids: [30],
    nodes: null,
    postscript: null

  }, {

    id: 146,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Our Technology Chronology Complicates Innovation in the Space Sciences; And Our Weather and Climate Theories Can Become Confused as a Result",
    sourcename: null,

    images: ["img/articles/space-and-the-radiation-belt.jpg"],
    definition: "Up until the late 1950's, it was commonly assumed that space was a vacuum.  All of our scientific theories which preceded the direct observation of the Van Allen radiation belts in 1958 with the first space rockets essentially based upon this false premise.  This problem is in fact a pattern for the space sciences, and it repeatedly pits the momentum of textbook theory against the potential disruption of unexpected, novel observations.",
    status: null,
    copy_text: "Our understanding of space physics has undergone dramatic changes over the past half-century, and these discoveries are only just now trickling into the other scientific domains.<br><br><b>Space was initially assumed to be a vacuum, and the notion of space-based rockets was considered absurd.</b> By the mid-40's, rockets were raining down on London.  By the late 50's, some of the first rockets to actually enter space conclusively demonstrated that space exhibited varying amounts of charged particles.<br><br>In the 40's, when radio engineers first spotted the radio waves which astronomers never thought to look for, <b>the astronomers responded that it had to be a hoax or a mistake</b>. Radio astronomy would not be recognized as an actual discipline until the late 50's.<br><br>The observation of large-scale magnetic fields associated with objects as large as galaxies to this day evokes awkward silence and speculative explanations amongst theorists <b>who were all taught in either high school or college that magnetic fields tend to go hand-in-hand with electric currents</b>.<br><br>We did not definitively understand that filaments are ubiquitous in the universe until the launch of Herschel in 2009. <b>Few people today realize that that was in fact one of Hannes Alfven's predictions for a plasma universe</b>.<br><br>Most of the electromagnetic spectrum was unavailable to us up until the mid-1970's. <b>People don't yet understand the significance of observing these filaments, nor that we've only recently developed an ability to see them</b>.<br><br>The term 'plasma' was coined right around the time that the Big Bang was hypothesized (in the early 30's), but the concept of a 'Plasma Universe' was not proposed until the mid-1980's.<br><br>The Big Bang theory therefore had a half-century head-start on the Plasma Universe to capture the public's imagination, but <b>many of the most important astronomical discoveries over the past half-century have related to electromagnetism and plasmas</b>.<br><br>What is largely ignored is that <b>these recent discoveries were all made through the lens of that former non-electrical worldview</b>. So, it is not at all a surprise what is happening with the climate models today. But for those who are paying attention to the larger chronology which weather and climate theories fit into, it is clear that the most surprising recent astronomical discoveries are collectively pointing to the possibility of energy flows through space -- flows of plasma which the Earth is of course embedded in.",
    search_hit: null,

    claim_ids: [147,20,47,148,154,155,149,150,151,152],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/first-radio-telescope.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 147,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Our textbook theories for the Sun, the Earth's weather and climate, and the space that separates the planets and stars were all based upon a now-disproven premise that space was essentially a vacuum.  The fact that space is filled with charged particles, making it a plasma, was not definitively settled until we first sent rockets into space, in the late 1950's.",
    sourcename: "The Electric Universe",

    images: ["img/books/plasma-history.jpg"],
    definition: null,
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
    postscript: null

  }, {

    id: 148,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The existence of large-scale interstellar magnetic fields was realized and then gradually demonstrated over the course of two decades, from the early 50's to the late 60's, but to this day, attempts to explain this observation continue to evoke speculative notions.",
    sourcename: "The Invisible Universe",

    images: ["img/books/cosmic-magnetic-fields.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/the-invisible-universe.png",
    url: "http://www.amazon.com/Invisible-Universe-Story-Radio-Astronomy/dp/1441921567/",
    text: null,
    highighter: null,
    expert_ids: [57],
    nodes: null,
    postscript: null

  }, {

    id: 149,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The first observations of radio waves coming from space were so antithetical to the theories at the time, in the 40's, when they were first observed by radio engineers, that the astronomers of the time assumed it was either a hoax or a mistake.  Radio astronomy would not be considered a legitimate discipline until the late 1950's.",
    sourcename: "The Invisible Universe",

    images: ["img/books/radio-waves-from-space.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/the-invisible-universe.png",
    url: "http://www.amazon.com/Invisible-Universe-Story-Radio-Astronomy/dp/1441921567/",
    text: null,
    highighter: null,
    expert_ids: [57],
    nodes: null,
    postscript: null

  }, {

    id: 150,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Our ability to make observations throughout the electromagnetic spectrum did not come all at once.  In fact, most of the spectrum was not accessible to us until the mid-1970's (!) -- long after most of our theories about space had solidified.",
    sourcename: null,

    images: ["img/books/em-chronology-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/first-radio-telescope.jpg",
    url: "https://books.google.com/books?id=ZSlJRAeL95sC&lpg=PA57&pg=PA56#v=onepage",
    text: null,
    highighter: null,
    expert_ids: [58],
    nodes: null,
    postscript: "From the text: 'Graph shows approximate years when new technology made possible observation in the different regions of the electromagnetic spectrum.  As shown, most of the spectrum was not accessible until the mid-1970's'"

  }, {

    id: 151,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Although there have certainly been numerous observations which already suggested it, it has only been with the launch of the Herschel telescope in 2009 designed to observe the EM wavelengths from far infrared to sub-millimeter that we can now claim with absolute confidence that the universe is in fact filamentary on all astronomical scales.  The Earth's atmosphere is the exception; not the rule.",
    sourcename: null,

    images: ["img/articles/herschel.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/ESA.gif",
    url: "http://sci.esa.int/herschel/55942-herschels-hunt-for-filaments-in-the-milky-way/",
    text: null,
    highighter: null,
    expert_ids: [59],
    nodes: null,
    postscript: null

  }, {

    id: 152,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "The filamentary nature of the universe was a fundamental prediction of a plasma-based universe, but the prediction was made so long before its vindication that mainstream theorists are largely no longer aware of it.  Thus, it has yet to have any substantive impact upon mainstream scientific theories.  Yet, filaments are indicators of charge/energy transfer within the plasma laboratory, so it is likely that they will come to be recognized as playing a similar role in space.",
    sourcename: null,

    images: ["img/books/plasma-filamentary-assumption.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "https://books.google.com/books?vid=ISBN079235527X&id=ZSlJRAeL95sC&pg=PA57&lpg=PA57#v=onepage",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 153,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Surprise: Plasma is the Universe's Fundamental State for Observable Matter",
    sourcename: null,

    images: null,
    definition: "Although scientists and science journalists have (so far) failed to go out of their way to advertise the fact to the public, numerous academic textbooks today agree that the Earth's atmosphere is an exceedingly thin shell of largely neutral gas which is immersed within an immense sea of charged particles.  It stands to reason that this far larger sea of charged particles has a tremendous influence upon that thin shell of neutral gas embedded within it.",
    status: null,
    copy_text: "Although you wouldn't know it from popular science journalism, <b>it is today recognized that more than 99% of all observable matter in the universe is in the plasma state</b>.<br><br>Scientists today do not actually debate that point. When questions are raised about plasmas, the arguments tend to focus more on plasma's <b>behavior and modeling</b> than its <b>prevalence</b>.<br><br>Plasma's prevalence should come as a shock to many avid fans of science for at least two reasons:<br><br>First, because our Earth's atmosphere does not fall into this 99%+ category, suggesting the possibility that we are applying phenomena which we are far more familiar with to astronomical observations where they oftentimes do not apply.<br><br>But, second, because most of the attempts we see in the astrophysical community to explain astronomical observations are far more focused upon the more speculative questions of dark matter and dark energy, than on the half-century-old debate over how to model the universe's fundamental state for matter. <b>How can it be that there is essentially no public discussion about the details of how to model the universe's most fundamental state for its observable matter?</b><br><br><b>The very fact that we tend to call plasma the 'fourth' state of matter, despite its acknowledged prevalence, is surely an indicator of its order of discovery in the cosmos, and arguably suggests a potential bias against the plasma state</b>.",
    search_hit: null,

    claim_ids: [181,156,157,158,159,160,161,162,163,164,165,166,167,168],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 154,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The observation of cosmic magnetic fields as large as entire galaxies is difficult to reconcile without large-scale electric currents to cause them.",
    sourcename: null,

    images: ["img/articles/M51-magnetic-field.jpg", "img/articles/magnetic-fields-uncomfortable-silence-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cosmic-magnetic-fields.jpg",
    url: "http://www.universetoday.com/85087/astronomy-without-a-telescope-cosmic-magnetic-fields/",
    text: null,
    highighter: null,
    expert_ids: [60],
    nodes: null,
    postscript: null

  }, {

    id: 155,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "It is increasingly recognized by astrophysicists and astronomers that electrical currents must be the cause for the magnetic fields which are associated with the arms of spiral galaxies.",
    sourcename: null,

    images: ["img/articles/milky-way-magnet-electrical-currents.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cosmic-magnetic-fields.jpg",
    url: "http://www.space.com/29819-magnets-attract-from-deep-space-to-your-desktop.html",
    text: null,
    highighter: null,
    expert_ids: [61],
    nodes: null,
    postscript: null

  }, {

    id: 156,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "There are some basic facts about plasma's prevalence which are important to know -- the first being that it is the dominant state of observable matter.",
    sourcename: null,

    images: ["img/books/plasma-99-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-1-cover.png",
    url: "https://books.google.com/books?vid=ISBN079235527X&id=ZSlJRAeL95sC&pg=PA57&lpg=PA57&ots=jnEIJGfx6t#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: [58],
    nodes: null,
    postscript: null

  }, {

    id: 157,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Notice the lack of debate over plasma's prevalence; each of the sources in this list admit its prevalence.",
    sourcename: null,

    images: ["img/books/plasma-99-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-2-cover.png",
    url: "https://books.google.com/books?vid=ISBN9812381554&id=v99GV71BNccC&pg=PA14&lpg=PA14&ots=nyCdxEoDvA#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 158,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Plasmas on Earth are somewhat rare, and the argument can be made that our attempts to understand our observations of space are complicated by our perspective from this slim non-plasma pocket of space.",
    sourcename: null,

    images: ["img/books/plasma-99-3.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-3-cover.png",
    url: "https://books.google.com/books?vid=ISBN354065285X&id=4cHkd77TSHcC&pg=PA11&lpg=PA11&ots=xdaxcYVbbx&dq=plasma+99.9%25+universe&sig=m9CJtNeOS5UD_v8_C6OC-gxJ6Pk#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 159,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The natural sources of plasma that we are familiar with here on Earth tend to be brief and high energy, but in a vacuum, plasmas can also exhibit low-energy attributes.",
    sourcename: null,

    images: ["img/books/plasma-99-4.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-4-cover.png",
    url: "https://books.google.com/books?vid=ISBN186094079X&id=e4yupcOzJxkC&pg=PP1&lpg=PP1&ots=6xtjT18iOQ&dq=plasma+99%25+universe&sig=i96aK5VoNeZsM9B3rN7igy2umyE#v=onepage&q=plasma%2099%25%20universe&f=false",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 160,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "It is curious that although plasmas play a major role in the universe, the popular science literature tends to mention them only in passing.",
    sourcename: null,

    images: ["img/books/plasma-99-5.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-5-cover.png",
    url: "https://books.google.com/books?vid=ISBN0521364833&id=VcueZlunrbcC&pg=PA2&lpg=PA2&ots=SwBeJMiXx9&dq=plasma+99%25+universe&sig=YdQ9lsMb-JB1BK19STcBe_vumXw#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 161,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Notice how these texts admit that plasmas play a fundamental role in nature, and yet astrophysicists and cosmologists nevertheless insist that it is dark matter and dark energy which are responsible for most of what we see happening in space.  Do you see the contradiction?",
    sourcename: null,

    images: ["img/books/plasma-99-6.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-6-cover.png",
    url: "https://books.google.com/books?vid=ISBN3540652841&id=wLN69UmwyJsC&pg=PP1&lpg=PP1&dq=plasma+99%25+universe&sig=DObg7XXvjV_CYCYIAGDnJd_PvDE#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 162,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The fact that we still call plasma the 'fourth' state of matter demonstrates the chronology of its discovery (and arguably our legacy bias) rather than its importance to cosmic observations.",
    sourcename: null,

    images: ["img/books/plasma-99-7.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-7-cover.png",
    url: "http://www.amazon.com/Spacecraft-power-technologies-Space-Technology/dp/1860941176/ref=sr_1_1?s=books&ie=UTF8&qid=1436332400&sr=1-1&keywords=9781860941177",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 163,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Astrophysicists and astronomers today only rarely discuss plasma's ability to conduct electrical currents within the astronomical context, but there is no doubt by now that it's true.",
    sourcename: null,

    images: ["img/books/plasma-99-8.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-8-cover.png",
    url: "http://www.nap.edu/openbook.php?record_id=10816&page=188",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 164,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The fact is that there is only about 50 miles of atmosphere before the electron density starts to significantly increase, and it is virtually all plasma from there to the nearest rocks.",
    sourcename: null,

    images: ["img/books/plasma-99-9.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-9-cover.png",
    url: "https://books.google.com/books?id=w1CJHagviVsC&dq=plasma%2099%20universe%20date%3A2003-2007&source=gbs_book_other_versions",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 165,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Part of the reason that there's a debate over how to model cosmic plasmas is that the plasma state is tricky to model, and the simplifications that are commonly deployed present an opportunity for theorists to impose the former pre-plasma worldview upon observations.",
    sourcename: null,

    images: ["img/books/plasma-99-10.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-10-cover.png",
    url: "https://books.google.com/books?vid=ISBN3540206175&id=HnyPP4B4n-4C&pg=PA4&lpg=PA4&ots=JYLozZJ9Sq&dq=plasma+99+universe+date:2003-2007&num=50&sig=CsyG2Lat1MiND3usk1bMYyItd9Q#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 166,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The fact that we exist in an atmosphere which is largely not a plasma is unlikely to be an accident.",
    sourcename: null,

    images: ["img/books/plasma-99-11.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "http://science.nasa.gov/science-news/science-at-nasa/1999/ast07sep99_1/",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 167,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Astrophysicists have a long history of referring to interstellar matter as gases dominated by gravitational forces, but we'd be wise to question that approach in light of the observed ionization of interstellar space.",
    sourcename: "@NASA",

    images: ["img/books/plasma-99-12.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "http://helios.gsfc.nasa.gov/qa_cr.html#plasma",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 168,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Is it not just a little bit odd how little discussion we see in the popular science press today in light of plasma's apparent prevalence and importance?  The contradiction raises numerous important questions -- and many of these questions pertain specifically to weather and climate.",
    sourcename: null,

    images: ["img/books/plasma-99-13.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/plasma-99-13-cover.png",
    url: "https://books.google.co.uk/books?id=u8nvAAAAMAAJ&q=99%25+plasma+universe&dq=99%25+plasma+universe&hl=en&sa=X&ei=mfirUIu2DLG00QWy9YH4AQ",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 169,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Birkeland currents are commonly referred to by astrophysicists in a variety of terms which disguise their electric current nature: magnetic ropes, flux tubes, even elephant trunks.",
    sourcename: null,

    images: ["img/articles/magnetic-ropes.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/Marklund-convection.jpg",
    url: "https://www.thunderbolts.info/wp/2012/01/04/essential-guide-to-the-eu-chapter-7/",
    text: null,
    highighter: null,
    expert_ids: [3],
    nodes: null,
    postscript: null

  }, {

    id: 170,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Planetary scientists see no reason to ask big questions about how the winds on Neptune can move so fast, even as they note that Neptune apparently emits 2.61 times more energy than it receives from solar irradiance.",
    sourcename: null,

    images: ["img/articles/neptune-winds-explanations.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/neptune.jpg",
    url: "http://www.universetoday.com/22067/weather-on-neptune/",
    text: null,
    highighter: null,
    expert_ids: [60],
    nodes: null,
    postscript: null

  }, {

    id: 171,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "It's not entirely a secret that the weather correlates with solar activity; the problem is that nobody has yet unraveled the details of how it happens.",
    sourcename: null,

    images: ["img/articles/climate-puzzle.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/sunspots-stratosphere.jpg",
    url: "http://www.holoscience.com/wp/global-warming-in-a-climate-of-ignorance/",
    text: null,
    highighter: null,
    expert_ids: [62],
    nodes: null,
    postscript: null

  }, {

    id: 172,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The Limits of Climate Models and the IPCC Process",
    sourcename: null,

    images: ["img/articles/cray-gaea.jpg", "img/articles/IPCC-predictions-vs-observations.png"],
    definition: "There are some important limitations to climate models which everybody today should be fluent in.",
    status: null,
    search_hit: null,
    copy_text: "Despite a growing acceptance that IPCC predictions over-estimated its temperature predictions since 2000, James Hansen insists that general circulation models do a 'good job of simulating atmosphere and ocean circulations' and have a 'long pedigree.'<br><br>The models are only accurate if you do not care at all about clouds. They're accurate if you are willing to ignore the polar vortex winds, whose winds they've so far struggled to explain. They are accurate if you don't care about validating the models against a data set which is distinct from the one used to create it. They're also accurate if you are willing to ignore any dramatic changes in electric field which may occur at the poles, as such changes should not be expected to survive the smoothing process. They are accurate if you accept that weather is exactly the same for the volume of every 200-mile cell in a general circulation model.  And they're accurate if you have the most simple notions of a Hadley Cell imaginable.<br><br>If none of those things are relevant to the purpose of the model, then yes, they are in theory <b>very</b> accurate at demonstrating the modeler's point.  But, such models -- like the shadows in Plato's cave -- are also inherently incomplete in contrast to the complexity of the actual atmosphere.<br><br>Since atmospheric scientists are not today taught that the solar wind plasma can influence Earth's climate, the GCM models they've coded that knowledge into can say nothing at all about this other possible energy input.  The only way to test that hypothesis is to create new models which take such electrical inputs into account.  And given what we know today about the IPCC's process and purpose, there's no reason to believe that the IPCC will ever create models for that purpose.",

    claim_ids: [215,198,182,199,214,200,201,202,203,204,205,206,207,208,209,217,218,219,220],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/general-circulation-models.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 173,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "NASA announced only quite recently -- in 2007 -- that a major cause of extreme, sometimes persistent, weather events is changing global wind patterns, alternatively referred to as Rossby or Planetary Waves.",
    sourcename: null,

    images: ["img/articles/rossby-waves-1.png", "img/articles/rossby-waves-3.jpg", "img/articles/rossby-waves-paper.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: [33],
    nodes: null,
    postscript: null

  }, {

    id: 174,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "An important point that is not commonly emphasized amongst climate scientists is that the atmosphere's tropopause is significantly thinner at the poles than the equator; it varies between 7 and 10 km at the poles, but it's 17 to 18 km thick at the equator.",
    sourcename: null,

    images: ["img/articles/tropopause-height-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/polar-vortex.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 175,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Equatorial structures surprisingly similar to Kristian Birkeland's terrella experiments appear to validate the notion that the Earth is immersed in an electrical plasma environment.",
    sourcename: null,

    images: ["img/papers/ionization-by-sunlight.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/birkeland-terrella-2.jpg",
    url: "http://arxiv.org/pdf/1504.06470v1.pdf",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 176,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "It's been claimed that Sydney Chapman's insistence that it was impossible for currents to cross space, and that such currents can only come from the Earth, slowed the advancement of geomagnetic and auroral physics for half of a century.  It's an important claim because theorists to this day continue to assert, where electricity is observed in space, that these electrical systems are isolated islands.",
    sourcename: null,

    images: ["img/books/birkeland-geomagnetic-physics-slowed.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/the-northern-lights.png",
    url: "https://books.google.com/books?id=C9iVxsMjSp4C&pg=PT229&dq=%22but+rejection+of+his+theories+probably+slowed+the+advance+of+geomagnetic+and+auroral+physics+for+nearly+half+a+century%22&hl=en&sa=X&ved=0CB4Q6AEwAGoVChMIre2Ez5vmxgIVj6SICh2_sgFT#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: [63],
    nodes: null,
    postscript: null

  }, {

    id: 177,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Dusty interstellar filaments are sometimes called elephant trunks.",
    sourcename: null,

    images: ["img/articles/elephant-trunks.png"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/elephant-trunks.jpg",
    url: "http://dictionary.obspm.fr/index.php?showAll=1&formSearchTextfield=elephant+trunk",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 178,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Solar physicist Willie Soon is under pressure by some scientists because he claims that sunspots generate high levels of energy which then heat the Earth's atmosphere.  What is striking about the reporting on and conversations about his claims is that there is oftentimes a failure to distinguish electromagnetic solar radiation (photons) from solar wind plasma (electrons and ions).",
    sourcename: null,

    images: ["img/articles/willie-soon-sunspots-magnetism.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/TSI.jpg",
    url: "http://www.thecrimson.com/article/2009/4/14/sunspots-may-cause-climate-fluctuations-sunspot/",
    text: null,
    highighter: null,
    expert_ids: [64],
    nodes: null,
    postscript: null

  }, {

    id: 179,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The concepts of radiation and plasma are easy to confuse because plasma can create radiation, and radiation can in turn create plasma.  But, strictly speaking, radiation refers to electromagnetic radiation (photons), whereas plasma refers to a gas with some percentage of unbound charged particles (electrons and/or ions).",
    sourcename: null,

    images: ["img/forums/radiation-vs-plasma.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/TSI.jpg",
    url: "https://www.physicsforums.com/threads/difference-between-plasma-and-radiation.588623/",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 180,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Advocates for anthropogenic climate change tend to ignore the Earth's larger plasma and magnetic environment in discussions of phenomena like the polar vortex and possible heating mechanisms, and they will occasionally honestly admit this.",
    sourcename: null,

    images: ["img/forums/i-do-ignore-plasma.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/forums/physorg.jpg",
    url: "http://phys.org/news/2015-07-mini-ice-age-hoopla-giant.html",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 181,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "It is very easy to demonstrate online that the public not only does not understand what a plasma is, but neither have they been informed by astrophysical experts that space is a plasma.",
    sourcename: null,

    images: ["img/forums/space-is-not-a-plasma.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/forums/gplus.png",
    url: "https://plus.google.com/106562040211983246504/posts/RDbBS61FLH6",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 182,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Plato's cave is a possible metaphor for what is happening with climate change simulations today: Simulators have control over enough 'free parameters' to influence the simulation's outcome, and the final simulation is much like the shadows in Plato's construct; the fire is the climate scientists' worldview; society's chains are its inability to technically critique the simulations.",
    sourcename: null,

    images: ["img/articles/platos-cave.jpg", "img/articles/platos-cave-explanation.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://faculty.washington.edu/smcohen/320/cave.htm",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 183,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The weight of a typical cloud is around a million pounds.  So, how can it be that the cloud simply hangs in the sky?  The answer may surprise you.",
    sourcename: null,

    images: ["img/articles/cloud-weight.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "http://mentalfloss.com/article/49786/how-much-does-cloud-weigh",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 184,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Water Has an Ordered Phase Between Liquid and Solid, and There Are Important Implications for Clouds",
    sourcename: null,

    images: ["img/audio-video/fourth-state-of-water-explains-a-lot.jpg"],
    definition: "Some researchers have shifted their focus from the study of individual water molecules to the study of the collective behavior of water molecules.  What they've observed has not been expected: That water molecules frequently charge-separate themselves, and that these charge-separated structures actually do things of enormous importance.",
    status: null,
    copy_text: null,
    search_hit: null,

    claim_ids: [183,185,186,187,188,189,196,197,190,191,192,193,194,195],
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: null,
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 185,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The riddle of how clouds stay up in the air seems foremost related to this issue of cloud density.  And this raises an important question: Why is it that water molecules converge into a cloud, yet not sufficiently so that they fall from the sky, due to their own weight?",
    sourcename: null,

    images: ["img/articles/fourth-state-of-water.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "http://faculty.washington.edu/ghp/research-themes/water-science/",
    text: null,
    highighter: null,
    expert_ids: [65],
    nodes: null,
    postscript: null

  }, {

    id: 186,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "University of Washington Professor Gerald Pollack focuses the question by asking why the evaporating water ends up as clouds, rather than simply a haze ...",
    sourcename: null,

    images: ["img/audio-video/gerald-pollack-on-clouds-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "https://youtu.be/i-T7tCMUDXU?t=107",
    text: [{quote: "So, here's something that you see every day.  You see a cloud in the sky, and probably you haven't asked the question: How does the water get there?  Um, why -- I mean -- there's only one cloud sitting there ... and the water is evaporating everywhere.  Why does it go to this cloud, forming what you see there?"}],
    fancy_text: [{quote: "So, here's something that you see every day.  You see a cloud in the sky, and probably you haven't asked the question: How does the water get there?  Um, why -- I mean -- <span class='highlighter'>there's only one cloud sitting there ... and the water is evaporating everywhere.  Why does it go to this cloud, forming what you see there?</span>"}],
    highighter: null,
    expert_ids: [65],
    nodes: null,
    postscript: null

  }, {

    id: 187,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Detailed observations of water in the presence of hydrophilic materials reveals an 'exclusion zone' which forms a net charge opposite to the bulk water it forms from.",
    sourcename: null,

    images: ["img/audio-video/gerald-pollack-on-clouds-2.jpg", "img/audio-video/gerald-pollack-on-clouds-3.jpg", "img/audio-video/gerald-pollack-on-clouds-0.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "https://youtu.be/i-T7tCMUDXU?t=484",
    text: [{quote: "What we found is that we stuck electrodes into the EZ water because we thought there might be some electrical potential.  It turned out that there's lots of negative charge in that zone.  And we used some dyes to see some positive charge, and we found that in the bulk water zone, there was an equal amount of positivity.  But, what's going on, it looked like, is that next to these interfaces, the water molecule was somehow splitting up into a negative part and a positive part.  And the negative part sat right next to the water-loving material, and the positive charges went out beyond that."}],
    highighter: null,
    expert_ids: [65],
    nodes: null,
    postscript: null

  }, {

    id: 188,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The same exclusion zone (EZ) explanation holds for atmospheric water, but in a spherical geometry ...",
    sourcename: null,

    images: ["img/audio-video/gerald-pollack-on-clouds-4.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "https://youtu.be/i-T7tCMUDXU?t=560",
    text: [{quote: "And, um, we found, actually, it's the same, you didn't need a straight interface, you could also have a sphere.  So, you put a sphere in the water, and any sphere that's suspended in the water develops one of these exclusion zones ... with a negative charge, and beyond that is all of the positive charge -- charge separation.  It didn't have to be only a material sphere, in fact, you could put a droplet in there -- a water droplet -- or, in fact, even a bubble.  You get the same result.  Surrounding each one of these entities is a negative charge, and the separated positive charge."}],
    highighter: null,
    expert_ids: [65],
    nodes: null,
    postscript: null

  }, {

    id: 189,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Two spheres of water with EZ layer surfaces will tend to attract to one another, despite the fact that they exhibit the same net electrical charge.  This explanation can explain how clouds stay in the air without any recourse to updrafts, because the electrical nature of this colloid structure leaves it susceptible to levitation by the Earth's electric field.",
    sourcename: null,

    images: ["img/audio-video/gerald-pollack-on-clouds-5.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "https://youtu.be/i-T7tCMUDXU?t=623",
    text: [{quote: "So, here's a question for you: If you take two of these negatively charged entities, and you drop them in a beaker of water, near each other, what happens to the distance between them?<br><br>Now, I bet that 95% of you would say: Well, that's easy.  I learned in physics negative and negative repel each other, so therefore they're gonna go apart from one another, right?  Is that what you'd guess?<br><br>Well, the actual result -- if you think about it -- is that it's not only the ... negative charge, but you also have positive charge.  And the positive charge is especially concentrated in between those two spheres, because they come from contributions from both of those spheres.  So, there are a lot of them there.<br><br>When you have positive in between two negatives, what happens is that you get an attractive force.  And so you expect these two spheres to actually come together despite the fact that they have the same charge.  And that's exactly what happens.  It's been known for many years.<br><br>They come together.  If you have many of them instead of just two of them, you'll get something that looks like this.  They'll come together, and this is called a colloid crystal.  It's a stable structure ...<br><br>The same thing is true if you have droplets ... So, when you think of droplets and aerosol droplets in the air, and think about the cloud ... the reason these aerosol droplets come together is because of this opposite charge.  So, the droplets from the air, similarly charged, come together, coalesce, giving you that cloud in the sky."}],
    highighter: null,
    expert_ids: [65],
    nodes: null,
    postscript: null

  }, {

    id: 190,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The electrical colloidial nature of clouds neatly explains why they are observed to vertically shift up and down, alongside changes in the electric field.",
    sourcename: null,

    images: ["img/articles/earths-electrical-heartbeat.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "http://phys.org/news/2013-03-revealed-earth-electrical-heartbeat-clouds.html",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 191,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "One type of upper-atmosphere clouds called noctilucent clouds originate at the periphery of the polar vortex.  These clouds have proven extremely useful to atmospheric researchers for decoding the global interconnections between different layers of the ionosphere, and their ability to 'teleconnect' over many thousands of miles is suggestive of a larger electrical circuit.",
    sourcename: null,

    images: ["img/articles/noctilucent-clouds-polar-hole-1.jpg", "img/articles/noctilucent-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "https://www.thunderbolts.info/wp/2014/10/20/polar-mesospheric-clouds-2/",
    text: null,
    highighter: null,
    expert_ids: [30],
    nodes: null,
    postscript: null

  }, {

    id: 192,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Noctilucent clouds are frequently filamentary",
    sourcename: null,

    images: ["img/articles/noctilucent-clouds-filaments-1.jpg", "img/articles/noctilucent-clouds-filaments-2.jpg", "img/articles/noctilucent-clouds-filaments-3.jpg", "img/articles/noctilucent-clouds-stockholm.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "https://tr.wikipedia.org/wiki/Gece_parlayan_bulutlar",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 193,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Noctilucent clouds exhibit a curious anti-correlation with solar activity.",
    sourcename: null,

    images: ["img/articles/noctilucent-anticorrelation.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/oceans.jpg",
    url: "http://science.nasa.gov/science-news/science-at-nasa/2013/07jun_nlcs/",
    text: null,
    highighter: null,
    expert_ids: [33],
    nodes: null,
    postscript: null

  }, {

    id: 194,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "It is by now fairly well known that cosmic rays (which originate outside of our solar system) can possibly seed clouds within Earth's atmosphere.",
    sourcename: null,

    images: ["img/books/the-neglected-sun-cosmic-ray-seeding.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/the-neglected-sun.png",
    url: "http://www.amazon.com/Neglected-Sun-Precludes-Climate-Catastrophe/dp/1934791547/",
    text: null,
    highighter: null,
    expert_ids: [43,44],
    nodes: null,
    postscript: null

  }, {

    id: 195,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "What is much less known, however, is the magnitude of change in the flow of these incoming cosmic ray particles; it is quite significant, and we should expect consequences for the Earth's global electric circuit.",
    sourcename: null,

    images: ["img/articles/forbush-decrease-diagram.jpg", "img/articles/forbush-decrease.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/forbush-decrease.png",
    url: "http://inspirehep.net/record/1228994/plots",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 196,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "There is an enormously important implication of the simple observation that light can separate the charge in water, as the observation contradicts a critical assumption inherent to most astrophysical theories.",
    sourcename: null,

    images: ["img/articles/teaspoon-of-salt.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/teaspoon-of-salt.jpg",
    url: "https://www.thunderbolts.info/tpod/2004/arch/040803charge-space.htm",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 197,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The history of water research is a very dangerous line of investigation insofar as researchers have lost their careers over it, and there have been a couple of claims which ultimately did not stand up to scientific scrutiny.  Today, young scientists are sometimes warned about studying water.",
    sourcename: null,

    images: ["img/audio-video/gerald-pollack-speaking.jpg", "img/audio-video/gerald-pollack-speaking-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/water.jpg",
    url: "https://youtu.be/XVBEwn6iWOo?t=1829",
    text: [{quote: "It was suggested, not by me, but by Sir Thomas Hardy in 1912 -- almost a hundred years ago -- that there's a fourth phase.  And this is the liquid crystalline phase.  It's surprising how much work was done, um, over the years, a hundred years ago on this subject.  In fact, we recently dug up something that we can't read very well.  It's called The Depth of the Surface Zone of a Liquid.  And if you can read in the upper right, it says 1949.  This paper published in 1949 summarized all of the evidence for various liquids near surfaces, and there are more than a hundred references of studies done before 1949, that demonstrate that these liquids are organized, and they're organized for regions that are on the order of hundreds of microns from the surface.<br><br>What happened is that after around 1950, by around 1950, this was well-known.  For example, Albert Szent-Gyorgyi, who won the Nobel Prize for ... discovering vitamin C, made many other contributions.  In one of his several books, he said, ... 'Life is water dancing to the tune of macromolecules.'  So, at that time, it was really well known that water was critically important.  So, what happened?<br><br>Well, what happened is that there were a couple of debacles, you might say.  One of those involved something called polywater that was found originally by the Russians, and found to be an artifact -- almost a joke.  Then, 20 years after that, there was another event, and this one was called water memory.  And, again, this turned out to be another debacle.  So, someone lost his career by suggesting that water molecules might have memory.<br><br>And the advice I remember getting early in my career when I didn't know anything about water, except that ... it was good to drink, is that you can do research in any subject.  But, stay away from water, because it's really dangerous.  And I think ... that's what happened for a period of 50 years.  And that's why some of the information from the first half of the last century is completely lost."}],
    highighter: null,
    expert_ids: [65],
    nodes: null,
    postscript: null

  }, {

    id: 198,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "There is more entropy in the real world than there is in your computer; that dictates that simulations tend to be incomplete.  Yet, they can still be crucially useful as a tool for investigation.",
    sourcename: null,

    images: ["img/books/simulations-are-never-right.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://www.amazon.com/Simulation-Its-Discontents-Simplicity-Technology/dp/0262012707/",
    text: null,
    highighter: null,
    expert_ids: [66],
    nodes: null,
    postscript: null

  }, {

    id: 199,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "A vital aspect of studying scientific controversies on scientific models is to understand, in basic terms, how those models work, and what critics are saying about the limitations of those models.  It's important to either do this yourself, or at least follow along with somebody else who has, for there is no other way to assess a scientific controversy.  You must follow the claims being made on both sides.",
    sourcename: null,

    images: ["img/papers/climate-models-0.jpg", "img/papers/climate-models-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 200,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Three-dimensional General Circulation Models (GCM's) are considered the most advanced, yet they still -- it is claimed -- treat cells 200 miles on a side as having uniform conditions.  Atmospheric Plasma researcher, Yue Deng, essentially argues that such a model is biased against electrical atmospheric energy flows, given the thin, filamentary nature of conducting plasmas.",
    sourcename: null,

    images: ["img/articles/GCM-schematic.jpg", "img/papers/climate-models-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 201,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Despite the simplifying assumption of uniformity per each cell within a GCM models, they remain very computationally expensive.  Where a problem is computationally intractable, further compromises on accuracy must be made.",
    sourcename: null,

    images: ["img/papers/climate-models-3.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 202,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "GCM's oftentimes smooth out the results of each 20-minute simulation timestep, in order to fit the start and end results for the initial simulation cells.  This smoothing process is yet another form of bias in the model which essentially obstructs any ability to use these models for any other purpose.",
    sourcename: null,

    images: ["img/papers/climate-models-4.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 203,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Professor Yue Deng of the University of Texas points out that the GCM smoothing will tend to wipe out any extreme energy events, like electricity.",
    sourcename: null,

    images: ["img/papers/electric-joule-heating-simulation.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [51],
    nodes: null,
    postscript: null

  }, {

    id: 204,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "GCM's are already pushing the limits of our computational capabilities; fixing this problem with new models which can accommodate sudden changes in electric fields will prove a challenge.",
    sourcename: null,

    images: ["img/papers/climate-models-5.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 205,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "There are still disagreements between climate scientists on the physics of some key climate processes, and this leads to large differences in the results of different models, given the same forcing.",
    sourcename: null,

    images: ["img/papers/climate-models-7.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 206,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "It's important for the public to understand that most climate scientists today do not believe that the Sun can heat up the Earth with a mechanism other than solar radiation (light); neither plasma nor electricity are commonly considered as candidates.",
    sourcename: null,

    images: ["img/papers/climate-models-8.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 207,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "An important claim to follow is that the models have failed to accurately predict the vertical temperature profile of the mid- and upper troposphere; the models said that a hotspot should appear, but there is no sign of one thus far.",
    sourcename: null,

    images: ["img/articles/troposphere-hotspot.jpg", "img/papers/climate-models-9.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 208,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The importance of this claim stems from the fact that the most dire climate projections by the IPCC rely upon the creation of this water vapor which has not so far appeared.",
    sourcename: null,

    images: ["img/papers/climate-models-11b.jpg", "img/papers/climate-models-11.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://www.researchgate.net/profile/Thomas_Chase3/publication/246690588_Likelihood_of_rapidly_increasing_surface_temperatures_unaccompanied_by_strong_warming_in_the_free_troposphere/links/53d323710cf2a7fbb2e9ce07.pdf?disableCoverPage=true",
    text: null,
    highighter: null,
    expert_ids: null,
    nodes: null,
    postscript: null

  }, {

    id: 209,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "Model development should proceed only as fast as theoretical understanding of the climate system and validation permit; as is, water vapor feedback is at best understood in qualitative terms.",
    sourcename: null,

    images: ["img/papers/climate-models-12.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/cray-gaea.jpg",
    url: "http://marshall.org/wp-content/uploads/2004/05/OKeefe-and-Kueter-Climate-Models-A-Primer.pdf",
    text: null,
    highighter: null,
    expert_ids: [67],
    nodes: null,
    postscript: null

  }, {

    id: 210,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "A gas can behave as a plasma with minimal ionization.",
    sourcename: null,

    images: ["img/books/1-percent-ionization-0.jpg", "img/books/1-percent-ionization-1.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: "http://farside.ph.utexas.edu/teaching/plasma/plasma.html",
    text: null,
    highighter: null,
    expert_ids: [68],
    nodes: null,
    postscript: null

  }, {

    id: 211,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The aurora is an example of a plasma that is only very weakly ionized, yet still exhibits many of the characteristic behaviors of plasmas.",
    sourcename: null,

    images: ["img/books/1-percent-ionization-2.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/upper-atmosphere.jpg",
    url: "http://history.nasa.gov/SP-345/ch15.htm",
    text: null,
    highighter: null,
    expert_ids: [22,69],
    nodes: null,
    postscript: null

  }, {

    id: 212,
    controversy: false,
    parent: true,
    type: "Claim",
    display: true,
    title: "The basis for the claim that a plasma need only be 1% ionized to exhibit characteristic plasma attributes is based, in part, upon observations of the ionosphere.",
    sourcename: null,

    images: ["img/articles/ionosphere-layers.gif", "img/books/1-percent-ionization-3.jpg"],
    definition: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/the-environment-of-the-earth.png",
    url: "https://books.google.co.uk/books?id=WbkLRSNB3uwC&pg=PA13&dq=%22degree+of+ionization%22+altitude+layer+ionosphere&sig=FT03x2evnPDFEhi_ZZmxJ9R-oEU&hl=en#v=onepage&q&f=false",
    text: null,
    highighter: null,
    expert_ids: [70],
    nodes: null,
    postscript: null

  }, {

    id: 213,
    controversy: false,
    parent: false,
    type: "Book",
    display: true,
    title: "Primer on Gas Discharges (Plasma)",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/primer-on-gas-discharges.jpg",
    url: "http://electric-cosmos.org/PrimerAboutGD.pdf",
    text: null,
    highighter: null,
    expert_ids: [42],
    nodes: null,
    year: null, // FILL!
    postscript: null

  }, {

    id: 214,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "When models do not produce the correct observed results, they are tweaked to make it so.  Tweaking can be an arbitrary, or worse political, process akin to guessing, and is also extraordinarily common in the astrophysical and cosmological disciplines, where the worst consequence for an incorrect guess can be the production of another scientific paper.",
    sourcename: null,

    images: null,
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/books/deliberate-corruption-of-climate-science.png",
    url: "http://www.amazon.com/Deliberate-Corruption-Climate-Science/dp/0988877740/",
    text: [{quote: "There are two devastating reasons why the model output should not be used for anything, especially policy.  First, a standard and required test of a model is its ability to predict.  Earlier I gave this as the simple definition of science.  This is done in models by a process called validation.  You design a model based on a known period of climate and then have it recreate (predict) another known period.<br><br>No IPCC model has been validated -- they cannot recreate past climate conditions, therefore, they cannot make valid predictions or even reasonable scenarios.  They claim the models are validated but what they actually do is keep adding or adjusting variables until the model recreates the situation.  This has nothing to do with the actual processes and is called 'tweaking.'  The classic example was the attempts to make their models 'explain' the cooling from 1940 to 1980.  They did it by adding sulphates, ostensibly from human activities, to act as cooling agent in the atmosphere.  The problem was temperatures started to increase after 1980 but sulphur levels didn't decrease."}],
    highighter: null,
    expert_ids: [71],
    nodes: null,
    year: null, // FILL!
    postscript: null

  }, {

    id: 215,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "It's important to realize that there exists a vast disparity in descriptions of climate model performance.  This is an example from The Huffington Post which suggests that they work well.  How accurate and useful is this assessment?",
    sourcename: null,

    images: ["img/articles/climate-models-long-pedigree.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/general-circulation-models.jpg",
    url: "http://www.huffingtonpost.com/dr-james-hansen/multi-meter-sea-level-rise-is-an-issue-for-todays-public_b_7875828.html",
    text: null,
    highighter: null,
    expert_ids: [72],
    nodes: null,
    year: null, // FILL!
    postscript: null

  }, {

    id: 216,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "What is remarkable is that even scientists who study space weather, the solar wind and the aurora are quick to suggest that changes in the solar magnetic field can only affect Earth's temperatures through solar radiation; no mention is made by these experts of the possibility that the solar plasma can affect the Earth's climate.",
    sourcename: null,

    images: ["img/articles/TSI-vs-plasma.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/avatars/sunspots-stratosphere.jpg",
    url: "http://phys.org/news/2015-07-mini-iceage.html",
    text: null,
    highighter: null,
    expert_ids: [73],
    nodes: null,
    year: null, // FILL!
    postscript: null

  }, {

    id: 217,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "A common critique of the IPCC's process is that it produces a document for scientists which the public never reads, and a document for the public and policymakers which the scientists never read.  The scientific assessment is indeed written by scientists, but the Summary for Policymakers, which reporters distill into headlines, is created by politicians.",
    sourcename: null,

    images: ["img/articles/summary-for-policymakers-scientists-do-not-read.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/IPCC.jpg",
    url: "http://wattsupwiththat.com/2015/02/22/the-disparity-between-ipcc-science-reports-summary-for-policymakers-and-reality-requires-a-political-science-solution/",
    text: null,
    highighter: null,
    expert_ids: [71],
    nodes: null,
    year: null, // FILL!
    postscript: null

  }, {

    id: 218,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "We know that the IPCC's Summary for Policymakers is written BY policymakers because two prominent, well-respected climate science economists -- Richard Tol and Robert Stavins -- have publicly detailed the problem.",
    sourcename: null,

    images: ["img/articles/summary-for-policymakers-two-economists-object.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/IPCC.jpg",
    url: "http://instituteforenergyresearch.org/analysis/politics-vs-science-at-ipcc/",
    text: null,
    highighter: null,
    expert_ids: [76],
    nodes: null,
    year: null, // FILL!
    postscript: null

  }, {

    id: 219,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Climate science economist Richard Tol wrote a scathing letter about the politics of the Summary for Policymakers.",
    sourcename: null,

    images: ["img/articles/summary-for-policymakers-richard-tol.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/IPCC.jpg",
    url: "http://richardtol.blogspot.nl/2014/04/ipcc-again.html",
    text: null,
    highighter: null,
    expert_ids: [74],
    nodes: null,
    year: null, // FILL!
    postscript: null

  }, {

    id: 220,
    controversy: false,
    parent: false,
    type: "Claim",
    display: true,
    title: "Climate science economist Robert Stavins also publicly critiqued the politics of the Summary for Policymakers.",
    sourcename: null,

    images: ["img/articles/summary-for-policymakers-robert-stavins.jpg"],
    definitions: null,
    status: null,
    search_hit: null,

    claim_ids: null,
    critique_ids: null,
    next: null,
    avatar: "img/experts/IPCC.jpg",
    url: "http://www.robertstavinsblog.org/2014/04/25/is-the-ipcc-government-approval-process-broken-2/",
    text: null,
    highighter: null,
    expert_ids: [75],
    nodes: null,
    year: null, // FILL!
    postscript: null

 }];


  var experts = [{
    id: 0,
    name: "@ChrisReeve",
    title: "Social Networker (paradigmsareconstructed:@t:gmail)",
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

  },{

    id: 27,
    name: "@HabibulloAbdussamatov",
    title: "Head of Space research laboratory of the Pulkovo Observatory, and Head of the Russian segment of the International Space Station",
    image: "img/experts/habibullo-abdussamatov.jpg"

  },{

    id: 28,
    name: "@KateRavilious",
    title: "National Geographic Science Journalist",
    image: "img/experts/kate-ravilious.jpg"

  },{

    id: 29,
    name: "@LoriKFenton",
    title: "Planetary Scientist",
    image: "img/experts/lori-k-fenton.jpg"

  },{

    id: 30,
    name: "@StephenSmith",
    title: "Science Journalist / Electric Universe Advocate",
    image: "img/experts/stephen-smith.jpg"

  },{

    id: 31,
    name: "@JohnCook",
    title: "Self-employed Cartoonist / Web Programmer",
    image: "img/experts/john-cook.jpg"

  },{

    id: 32,
    name: "@AmaraGraps",
    title: "Planetary Scientist",
    image: "img/experts/amara-graps.jpg"

  },{

    id: 33,
    name: "@NASA",
    title: "National Aeronautics and Space Agency",
    image: "img/experts/nasa.jpg"


  },{

    id: 34,
    name: "@PhilipBall",
    title: "Science Writer",
    image: "img/experts/philip-ball.jpg"

  },{

    id: 35,
    name: "@MelAcheson",
    title: "Philosopher / Electric Universe Advocate",
    image: "img/experts/mel-acheson.jpg"

  },{

    id: 36,
    name: "@MikaMcKinnon",
    title: "Geophysicist / disaster researcher / scifi science consultant / journalist / public speaker / irrepressible educator",
    image: "img/experts/mika-mckinnon.jpg"

  },{

    id: 37,
    name: "@RebeccaMorelle",
    title: "Science Correspondent, BBC News",
    image: "img/experts/rebecca-morelle.jpg"

  },{

    id: 38,
    name: "@BorisJohnson",
    title: "Mayor of London, former journalist and member of UK Parliament",
    image: "img/experts/boris-johnson.jpg"

  },{

    id: 39,
    name: "@RobertRoyBritt",
    title: "Responsible for the editorial operations of news content on Purch sites, particularly SPACE.com, LiveScience.com and TechNewsDaily.com",
    image: "img/experts/robert-roy-britt.jpg"

  },{

    id: 40,
    name: "@MichaelLePage",
    title: "Features Editor at New Scientist magazine",
    image: "img/experts/michael-le-page.png"

  },{

    id: 41,
    name: "@KatyaGeorgieva",
    title: "Climatology, Meteorology, Paleoclimatology, Bulgarian Academy of Sciences",
    image: "img/experts/katya-georgieva.jpg"

  },{

    id: 42,
    name: "@DonScott",
    title: "Professor Electrical Engineering / Electric Universe Theorist",
    image: "img/experts/don-scott.jpg"

  },{

    id: 43,
    name: "@FritzVahrenholt",
    title: "German Politician / Industrialist / Environmentalist",
    image: "img/experts/fritz-vahrenholt.jpg"

  },{

    id: 44,
    name: "@SebastianLuening",
    title: "German Geologist / Paleontologist",
    image: "img/experts/sebastian-luening.jpg"

  },{

    id: 45,
    name: "@PhilPlait",
    title: "Astronomer / Public Speaker / Science Evangelizer",
    image: "img/experts/phil-plait.jpg"

  },{

    id: 46,
    name: "@MargaretHurwitz",
    title: "Atmospheric Chemistry / Dynamics",
    image: "img/experts/anon.png"

  },{

    id: 47,
    name: "@ChristinaArcher",
    title: "Department of Global Ecology at the Carnegie Institution of Washington / Assistant Professor at Stanford University",
    image: "img/experts/christina-archer.jpg"

  },{

    id: 48,
    name: "@JamesCLoPresto",
    title: "Professor of Astronomy at Edinboro University of Pennsylvania",
    image: "img/experts/james-c-lo-presto.png"

  },{

    id: 49,
    name: "@FWTaylor",
    title: "Venus Expert / Head of Atmospheric, Oceanic and Planetary Physics at Oxford for 21 years from 1979 / Currently Halley Professor Emeritus in Oxford Physics and an Emeritus Fellow at Jesus College / Formerly for 10 years at the Jet Propulsion Laboratory, California Institute of Technology",
    image: "img/experts/f-w-taylor.jpg"

  },{

    id: 50,
    name: "@ElizabethHowell",
    title: "Space.com Contributor",
    image: "img/experts/elizabeth-howell.jpg"

  },{

    id: 51,
    name: "@YueDeng",
    title: "UT Arlington Physicist / Co-developer of a New 3-D Global Ionosphere-Thermosphere Model, or GITM",
    image: "img/experts/yue-deng.jpg"

  },{

    id: 52,
    name: "@MattHarvey",
    title: "(unknown)",
    image: "img/experts/anon.jpg"

  },{

    id: 53,
    name: "@JohnKennewell",
    title: "Director of the Australian Space Academy",
    image: "img/experts/john-kennewell.jpg"

  },{

    id: 54,
    name: "@IPCC",
    title: "Intergovernmental Panel on Climate Change",
    image: "img/experts/IPCC.jpg"

  },{

    id: 55,
    name: "@MFLarsen",
    title: "Department of Physics, Clemson University",
    image: "img/experts/anon.jpg"

  },{

    id: 56,
    name: "@ErdalYigit",
    title: "George Mason University / Space Weather Scientist",
    image: "img/experts/erdal-yigit.jpg"

  },{

    id: 57,
    name: "@GerritVerschuur",
    title: "Radio Astronomer",
    image: "img/experts/gerrit-verschuur.jpg"

  },{

    id: 58,
    name: "@AnthonyPeratt",
    title: "Plasma Physicist / IEEE Peer Reviewer / Government Researcher",
    image: "img/experts/anthony-peratt.jpg"

  },{

    id: 59,
    name: "@ESA",
    title: "European Space Agency",
    image: "img/experts/ESA.gif"

  },{

    id: 60,
    name: "@UniverseToday",
    title: "Universe Today",
    image: "img/experts/universe-today.png"

  },{

    id: 61,
    name: "@BryanGaensler",
    title: "Director, Dunlap Institute for Astronomy and Astrophysics at University of Toronto",
    image: "img/experts/bryan-gaensler.jpg"

  },{

    id: 62,
    name: "@JohnGribbin",
    title: "Astrophysicist / Science Writer",
    image: "img/experts/john-gribbin.jpg"

  },{

    id: 63,
    name: "@LucyJago",
    title: "Author / Documentary Producer / Director",
    image: "img/experts/lucy-jago.jpg"

  },{

    id: 64,
    name: "@WillieSoon",
    title: "Solar Researcher at the Smithsonian Astrophysical Observatory, part of the Harvard-Smithsonian Center for Astrophysics",
    image: "img/experts/willie-soon.jpg"

  },{

    id: 65,
    name: "@GeraldPollack",
    title: "Water Researcher / Cell Biologist / University of Washington Professor",
    image: "img/experts/gerald-pollack.jpg"

  },{

    id: 66,
    name: "@SherryTurkle",
    title: "Joint Doctorate in Sociology and Personality Psychology from Harvard University / Licensed Clinical Psychologist / Author of Numerous Books on Technology",
    image: "img/experts/sherry-turkle.jpg"

  },{

    id: 67,
    name: "@WilliamOKeefe",
    title: "CEO of George C. Marshall Institute (GMI), an Arlington, Virginia based conservative think tank",
    image: "img/experts/william-okeefe.jpg"

  },{

    id: 68,
    name: "@RichardFitzpatrick",
    title: "Professor of Physics at University of Texas / Expertise is the Macroscopic Stability of Plasmas in Magnetic Fusion Devices / Royal Astronomical Society Member",
    image: "img/experts/richard-fitzpatrick.jpg"

  },{

    id: 69,
    name: "@GustafArrhenius",
    title: "Scripps Institution of Oceanography",
    image: "img/experts/gustaf-arrhenius.jpg"

  },{

    id: 70,
    name: "@FrancisDelobeau",
    title: "Unknown",
    image: "img/experts/anon.png"

  },{

    id: 71,
    name: "@TimBall",
    title: "PhD in Climatology from Queen Mary College, University of London (apparently disputed)",
    image: "img/experts/tim-ball.jpg"

  },{

    id: 72,
    name: "@JamesHansen",
    title: "Controversial Climatologist / Former Venus Researcher",
    image: "img/experts/james-hansen.png"

  },{

    id: 73,
    name: "@JimWild",
    title: "Professor of Space Physics at University of Leicester / Degree in Physics with Space Science and Technology / Doctorate in Solar-terrestrial Physics / Investigates Physics Behind the Aurora Borealis",
    image: "img/experts/jim-wild.jpg"

  },{

    id: 74,
    name: "@RichardTol",
    title: "Professor of Economics at the University of Sussex / Professor of the Economics of Climate Change at the Vrije Universiteit Amsterdam",
    image: "img/experts/richard-tol.jpg"

  },{

    id: 75,
    name: "@RobertStavins",
    title: "Former Chair of the U.S. Environmental Protection Agencys Environmental Economics Advisory Board / Director of the Harvard Environmental Economics Program / And much more ...",
    image: "img/experts/robert-stavins.jpg"

  },{

    id: 76,
    name: "@RobertPMurphy",
    title: "Robert P. Murphy is a Senior Economist with the Institute for Energy Research Specializing in Climate Change",
    image: "img/experts/robert-p-murphy.jpg"

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