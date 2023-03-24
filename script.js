var hr9El = document.getElementById("hour-9");
var hr10El = document.getElementById("hour-10");
var hr11El = document.getElementById("hour-11");
var hr12El = document.getElementById("hour-12");
var hr1El = document.getElementById("hour-1");
var hr2El = document.getElementById("hour-2");
var hr3El = document.getElementById("hour-3");
var hr4El = document.getElementById("hour-4");
var hr5El = document.getElementById("hour-5");
var hrArray = [hr9El, hr10El, hr11El, hr12El, hr1El, hr2El, hr3El, hr4El, hr5El];



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // var currentDay = document.getElementById("currentday");
  function currentDate () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D, ss'));
  };

  setInterval(currentDate, 1000);
  

  // hour test \\

  function toggleTime() {
    var hour = dayjs().hour();
    if (hour < 9) {
      for (var i = 0; i < hrArray.length; i++) {
        hrArray[i].classList.toggle("future");
      }
    } else if (hour > 17) {
      for (var i = 0; i < hrArray.length; i++) {
        hrArray[i].classList.toggle("past");
      }
    } else if (hour == 9) {
      hrArray[hour - 9].classList.toggle("present")
      for (var i = hour - 8; i < hour; i++) {
        hrArray[i].classList.toggle("future");
      }
    } else if (hour >= 10) {
      hrArray[hour - 9].classList.toggle("present");
      for (var i = 0; i < hour - 9; i++) {
        hrArray[i].classList.toggle("past");
      }
      for (var i = hour - 8; i < hour; i++) {
        hrArray[i].classList.toggle("future");
      }
    }
  };

  function updateTime() {
    toggleTime();
    toggleTime();
  };

  toggleTime();
  setInterval(updateTime, 60000);
  
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});
  