const today = moment();

// display date function
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = today.format('ll');