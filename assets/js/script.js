const today = moment();

// display date function
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = today.format('ll');

// var events = JSON.parse(localStorage.getItem('eventslisted')) || [];

// localStorage.setItem('eventslisted', JSON.stringify(events));
