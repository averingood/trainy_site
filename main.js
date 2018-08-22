
function displayTime(idElem, addSeconds) {

  var $elem = document.getElementById(idElem);

  var milliseconds = new Date().getTime();

  if (addSeconds) {
    var currentDate = new Date(milliseconds + addSeconds*1000);
  } else {
    currentDate = new Date(milliseconds);
  }

  var time = currentDate.toLocaleTimeString();

  $elem.innerHTML = time;
};

function toggleImg() {
  var $img = document.getElementById('ok-img'),
      style = getComputedStyle($img),
      visibility = style.getPropertyValue('visibility');

  if (visibility == 'hidden'){
    $img.setAttribute('style', 'visibility:visible');
  };
  
  if (visibility == 'visible'){
    $img.setAttribute('style', 'visibility:hidden');
  };
};

function showColor(event) {
  var style = getComputedStyle(event.target),
      color = style.getPropertyValue('background-color');

  console.log(color);
};

function showTime(idElem, options) {

  setInterval(function() {
    displayTime(idElem, options.futureSeconds);
  }, options.delay);

};

showTime('current-time', {
  delay: 1000
});

showTime('future-time', {
  delay: 5000,
  futureSeconds: 5
});
