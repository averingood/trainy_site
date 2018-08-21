
function displayDate(id) {

  var $elem = document.getElementById(id);

  var currentDate = new Date();

  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var mounth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var date = day[currentDate.getDay()] + ", " + currentDate.getDate() + " " + mounth[currentDate.getMonth()] + ", " + currentDate.getFullYear();

  $elem.innerHTML = date;
}

function toggleImg() {
  var $img = document.getElementById('ok-img'),
      style = getComputedStyle($img),
      visibility = style.getPropertyValue('visibility');

  if (visibility == 'hidden'){
    $img.setAttribute('style', 'visibility:visible');
  } 
  
  if (visibility == 'visible'){
    $img.setAttribute('style', 'visibility:hidden');
  }
};

function showColor(event) {
  var style = getComputedStyle(event.target),
      color = style.getPropertyValue('background-color')

  console.log(color);
}

displayDate('header-date');
