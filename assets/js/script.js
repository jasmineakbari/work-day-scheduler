const today = moment();
// empty array to hold events
var events = {};

// display date function
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = today.format('ll');


// function to load events locally stored
var events = JSON.parse(localStorage.getItem('eventslist')) || [];


$("#saveBtn").on("click", function() {
    // get value of textarea
    var text = $("<textarea>").closest.val().trim();

    localStorage.setItem('eventslist', JSON.stringify(events));
    
})
