// for today's date
const today = moment();
// get current time and format to hour
var now = moment().format("H");

// display date function
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = today.format('ll');

// eventlistener to save text input as an object to local storage
$(".saveBtn").on("click", function(event) {
    // refers to decription sibling of button clicked
    var saveDescription = $(this).siblings("textarea").val().trim();

    // get id of description selected
    var saveDescriptionID = $(this).siblings("textarea").attr("id");

    // save items to main array
    localStorage.setItem(saveDescriptionID, saveDescription);
    console.log(localStorage)
})

// function to load events
var loadEvents = function() {
    $("#09").val(localStorage.getItem("09"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
}

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

loadEvents()