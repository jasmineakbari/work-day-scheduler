// for today's date
const today = moment();
// get current time and format to hour
var now = moment().format("H");
// empty array to hold events
var events = JSON.parse(localStorage.getItem('eventslisted')) || [];

// display date function
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = today.format('ll');

// eventlistener to save text input as an object to local storage
$(".saveBtn").on("click", function() {
    

    // save items to main array
    localStorage.setItem('eventslisted', JSON.stringify(events));
})

// Check time function and apply corresponding class
var checkTimes = function() {
    // select all description block elements
    var descriptionBlockElements = $(".description");

    // loop through description classes
    for (var i = 0; i < descriptionBlockElements.length; i++) {

        // get description elements by ID
        var manipID = document.getElementById(descriptionBlockElements[i].id)

        // Get description arrays ID's as a string
        var descriptionID = descriptionBlockElements[i].id;        

        // remove any old classes from the element
        $(descriptionBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (descriptionID < now) {
            $(manipID).addClass("past");
        } else if (descriptionID > now) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }

}

// run checkTime every 5 minutes
setInterval(checkTimes(), (1000 * 60) * 5);

// Save Tasks function
// $(".saveBtn").on("click", function() {
    

// })