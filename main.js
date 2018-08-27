
// function displayTime(idElem, addSeconds) {
//   var $elem = document.getElementById(idElem);

//   var milliseconds = new Date().getTime();

//   if (addSeconds) {
//     var currentDate = new Date(milliseconds + addSeconds*1000);
//   } else {
//     currentDate = new Date(milliseconds);
//   }

//   var time = currentDate.toLocaleTimeString();

//   $elem.innerHTML = time;
// };

// function ShowTime(idElem) {
//   var vm = this;

//   var timerId = setInterval(function() {
//     displayTime(idElem, this._secondsSeconds);
//   }, 1000);

//   function restart() {
//     clearInterval(timerId);
//     setInterval(function() {
//       displayTime(idElem, vm._secondsSeconds);
//     }, 1000);
//   }

//   this._secondsSeconds = 0;

//   this.secondsSeconds = function(s) {
//     this._secondsSeconds = s;
//     restart();
//   };

//   this.stopTime = function() {
//     clearInterval(timerId);
//   }
// };

// var currentTime = new ShowTime('current-time');

// var secondsTime = new ShowTime('seconds-time');
// secondsTime.secondsSeconds(8);

// getRandomTime.prototype = new ShowTime('random-time');

// var randomTime = new getRandomTime();
// randomTime.secondsSeconds(9);


function createTime(seconds) {  
  var milliseconds = new Date().getTime();

  if (seconds) {
    milliseconds += seconds * 1000;
  };

  var time = new Date(milliseconds);
  return time;
};

function showTime(idElem, seconds) {
  var time = createTime(seconds);
  var stringTime = time.toLocaleTimeString();

  var $elem = document.getElementById(idElem);
  $elem.innerHTML = stringTime;
};

// Main constructor

function Time() {
  var vm = this;

  this.elId = 0;
  this.timerId;

  this.start = function(idElem, seconds) {
    console.log(this)
    var timerId = setInterval(function() {
      showTime(idElem, seconds);
    }, 1000);
    this.elId = idElem;
    this.timerId = timerId;
  };

  this.addSeconds = function( seconds ){
    var vm =  this;

    clearInterval(vm.timerId);
    setInterval(function() {
      showTime(vm.elId, seconds);
    }, 1000);
  };

  this.stopTime = function() {
    clearInterval(this.timerId);
  };
};

function GetRandomTime() {
  this.randomSeconds = Math.floor(Math.random() * 86400) * 1000;
  this.random = function() {
    this.addSeconds(this.randomSeconds);
  };
};

var currentTime = new Time();
currentTime.start('current-time');

var futureTime = new Time();
futureTime.start('future-time');
futureTime.addSeconds(9);

GetRandomTime.prototype = new Time();
var randomTime = new GetRandomTime();
randomTime.start('random-time');
randomTime.random();

function stopFutureTime() {
  futureTime.stopTime();
};

function stopCurrentTime() {
  currentTime.stopTime();
};
