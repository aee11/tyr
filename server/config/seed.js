/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Question = require('../api/question/question.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Question.find({}).remove(function() {
  Question.create({
    question: 'Which do you like more, Star Wars or Star Trek?',
    option1: {
      description: 'Star Wars',
      votes: 123
    },
    option2: {
      description: 'Star Trek',
      votes: 94
    },
    views: 320
  });
  
  Question.create({
    question: 'Did the Imitation Game deserve an Oscar?',
    option1: {
      description: 'Definitely',
      votes: 349
    },
    option2: {
      description: 'No way',
      votes: 43
    },
    views: 701
  });
  Question.create({
    question: 'Do you honestly like pie?',
    option1: {
      description: 'Yes',
      votes: 204
    },
    option2: {
      description: 'No',
      votes: 221
    },
    views: 523
  });
    Question.create({
    question: 'Do you like cake?',
    option1: {
      description: 'You bet it!',
      votes: 123
    },
    option2: {
      description: 'Ough, no!',
      votes: 94
    },
    views: 320
  });
  Question.create({
    question: 'Coffee or tea?',
    option1: {
      description: 'Coffee',
      votes: 349
    },
    option2: {
      description: 'Tea',
      votes: 43
    },
    views: 701
  });
  Question.create({
    question: 'Pepsi or Coke?',
    option1: {
      description: 'Pepsi',
      votes: 204
    },
    option2: {
      description: 'Coke',
      votes: 221
    },
    views: 523
  });
    Question.create({
    question: 'PC or Mac?',
    option1: {
      description: 'PC',
      votes: 123
    },
    option2: {
      description: 'Mac',
      votes: 94
    },
    views: 320
  });
  Question.create({
    question: 'HR eða HÍ?',
    option1: {
      description: 'HR',
      votes: 349
    },
    option2: {
      description: 'HÍ',
      votes: 43
    },
    views: 701
  });
  Question.create({
    question: 'Wine or beer?',
    option1: {
      description: 'Wine',
      votes: 204
    },
    option2: {
      description: 'Beer',
      votes: 221
    },
    views: 523
  });
    Question.create({
    question: 'Bacon or BACON?',
    option1: {
      description: 'Bacon',
      votes: 123
    },
    option2: {
      description: 'BACON',
      votes: 94
    },
    views: 320
  });
  Question.create({
    question: 'Cowboys or aliens?',
    option1: {
      description: 'Aliens',
      votes: 349
    },
    option2: {
      description: 'Cowboys',
      votes: 43
    },
    views: 701
  });
  Question.create({
    question: 'Marvel or DC?',
    option1: {
      description: 'Marvel',
      votes: 204
    },
    option2: {
      description: 'DC',
      votes: 221
    },
    views: 523
  });
    Question.create({
    question: 'Do you use Reddit?',
    option1: {
      description: 'Yes',
      votes: 123
    },
    option2: {
      description: 'No',
      votes: 94
    },
    views: 320
  });
  Question.create({
    question: 'Have you been to Iceland?',
    option1: {
      description: 'Yes',
      votes: 349
    },
    option2: {
      description: 'No, never',
      votes: 43
    },
    views: 701
  });
  Question.create({
    question: 'Do you really love the lamp?',
    option1: {
      description: 'I love lamp',
      votes: 204
    },
    option2: {
      description: 'Not really',
      votes: 221
    },
    views: 523
  });
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.create({
    provider: 'local',
    name: 'alex',
    email: 'alex@alex.com',
    password: 'alex'
  }, function (err, user) {
    Question.create({
      author: user._id,
      question: 'Do you like Týr?',
      option1: {
        description: 'Yes',
        votes: 953
      },
      option2: {
        description: 'No',
        votes: 193
      },
      views: 320
    }, function (err, question) {
      User.findOneAndUpdate({name: 'alex'}, 
      { $push: { questions: question._id } }, function() {});
    });
});
