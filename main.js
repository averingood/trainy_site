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

// Main constructor of time

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
