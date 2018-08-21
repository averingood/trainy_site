var headerDate = document.getElementById('header-date');

var date = new Date();

var day = new Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");

var mounth = new Array("January","February","March","April","May","June","July","August","September","October","November","December")

headerDate.innerHTML = day[date.getDay() - 1] + ", " + date.getDate() + " " + mounth[date.getMonth()] + ", " + date.getFullYear();
