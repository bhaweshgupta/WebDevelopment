// console.log('hello');
// document.getElementById('test').innerHTML = 'hello' + 'hello';

var doSomething = function (work) {
  console.log(work);
  console.log(this.benchPress);
};

doSomething('pushUps');
var exercise = { benchPress: '4 sets', squats: '2 sets' };
doSomething.call(exercise, exercise.squats);
doSomething.apply(exercise, ['crunchers']);

function numless() {
  var msg = document.getElementById('writemsg');
  msg.innerHTML = '';
  var ele = document.getElementById('numonly').value;
  if (ele == '') {
    msg.innerHTML = 'yes';
  } else if (isNaN(ele)) {
    msg.innerHTML = 'yes';
  } else if (ele < 50) {
    msg.innerHTML = 'select num less than 50';
  } else {
    msg.innerHTML = 'yes';
  }
}
//USING FUCTION AS AN object
let harley = {
  firstName: 'street',
  secondName: '750',
  color: 'black',
  fullName: function () {
    return this.firstName + this.secondName;
  },
};

console.log(s);
var s;
document.getElementById('test').innerHTML = harley.fullName();

function checkUs() {
  let msg, x;
  msg = document.getElementById('msg');
  msg.innerHTML = '';
  x = document.getElementById('some').value;

  try {
    if (x == '') throw 'Pleas choos a number';
    if (isNaN(x)) throw 'only number allowes';
  } catch (err) {
    msg.innerHTML = 'Error is' + err;
  } finally {
    document.getElementById('some').value = '';
  }
}

let sampleString = "Let's start our journey with JavaScript";
console.log(sampleString.indexOf('our'));
console.log(sampleString.lastIndexOf('star'));
console.log(sampleString.slice(5, 11));
console.log(sampleString.replace('our', 'mine'));

var name1 = 'Kevin'; // string
var name2 = new String('Kevin'); //object  // stay away from here

if (name1 == name2) {
  console.log('they are eual');
}

if (name1 === name2) {
} else {
  console.log('they are not');
}

///you can put entire function in variable

var high = function (x) {
  var y = 2 * x;
  return y;
};

function clickme() {
  var x = document.getElementById('numonly');
  var xx = x.value;
  var checkvas = high(xx);
  x.value = checkvas;
}

//to invoke imedeitly
/*
var x=function(var x)
{

}(2);
*/

//object creating using function

var superHeroMovie = function () {
  var hero, villan;
};

var walk = function () {
  return 'he can walk';
};
//i can assing this function to differnt object

superHeroMovie.prototype.walk = walk;
var spiderman = new superHeroMovie();

spiderman.villan = 'green goblin';
spiderman.hero = 'peter parker';
console.log(spiderman.villan);
console.log(spiderman.walk()); //function proto typing

var spiderman2 = new superHeroMovie();
spiderman2.villan = 'otupus';
spiderman2.hero = 'peeta paaaka';
console.log(spiderman2.hero);

//n number of argumnets

var multiplier = function () {
  var result = 0;
  for (var i = arguments.length - 1; i >= 0; i--) {
    result += arguments[i];
  }
  return result;
};

console.log(multiplier(5, 4));

///closers
var counter = (function () {
  var addOne = 0;
  return function () {
    return (addOne += 1);
  };
})();

console.log(counter());
