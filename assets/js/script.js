const today = moment();
const events = {};

// display date function
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = today.format('ll');

// function to add events
//var addEvent = function() {

//}

// function to load events
//var loadEvents = function() {
    //events = JSON.parse(localStorage.getItem("events"));
//}

// function to save events
//var saveEvents = function() {
    //localStorage.setItem("events", JSON.stringify(events));
//};