$(function () {
  // The following variables are set to each hour div and thier button and textarea children.
  var hr9El = document.getElementById("hour-9");
  var hr9Inpt = document.getElementById("hour-9").childNodes[3];
  var hr9Bttn = document.getElementById("hour-9").childNodes[5];
  var hr10El = document.getElementById("hour-10");
  var hr10Inpt = document.getElementById("hour-10").childNodes[3];
  var hr10Bttn = document.getElementById("hour-10").childNodes[5];
  var hr11El = document.getElementById("hour-11");
  var hr11Inpt = document.getElementById("hour-11").childNodes[3];
  var hr11Bttn = document.getElementById("hour-11").childNodes[5];
  var hr12El = document.getElementById("hour-12");
  var hr12Inpt = document.getElementById("hour-12").childNodes[3];
  var hr12Bttn = document.getElementById("hour-12").childNodes[5];
  var hr1El = document.getElementById("hour-1");
  var hr1Inpt = document.getElementById("hour-1").childNodes[3];
  var hr1Bttn = document.getElementById("hour-1").childNodes[5];
  var hr2El = document.getElementById("hour-2");
  var hr2Inpt = document.getElementById("hour-2").childNodes[3];
  var hr2Bttn = document.getElementById("hour-2").childNodes[5];
  var hr3El = document.getElementById("hour-3");
  var hr3Inpt = document.getElementById("hour-3").childNodes[3];
  var hr3Bttn = document.getElementById("hour-3").childNodes[5];
  var hr4El = document.getElementById("hour-4");
  var hr4Inpt = document.getElementById("hour-4").childNodes[3];
  var hr4Bttn = document.getElementById("hour-4").childNodes[5];
  var hr5El = document.getElementById("hour-5");
  var hr5Inpt = document.getElementById("hour-5").childNodes[3];
  var hr5Bttn = document.getElementById("hour-5").childNodes[5];
  // The following arrays are used to iterate through in for loops.
  var hrArray = [hr9El, hr10El, hr11El, hr12El, hr1El, hr2El, hr3El, hr4El, hr5El];
  var hrInptArray = [hr9Inpt, hr10Inpt, hr11Inpt, hr12Inpt, hr1Inpt, hr2Inpt, hr3Inpt, hr4Inpt, hr5Inpt];
  var inptTxtArray = ["", "", "", "", "", "", "", "", ""];
  // This line of code displays the current date at the top of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  // This function retrieves the stored values and sets the text in each hour div to the appropriate object.
  function displayEvents() {
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents !== null) {
      inptTxtArray = storedEvents;
    };
    for (var i = 0; i < 9; i++) {
      hrInptArray[i].value = inptTxtArray[i];
    }
  };
  displayEvents();
  // The following event listeners wait for a save button to be clicked, sets an array object to equal the saved input, and then pushes the updated array to the local storage.
  hr9Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[0] = hr9Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr10Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[1] = hr10Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr11Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[2] = hr11Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr12Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[3] = hr12Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr1Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[4] = hr1Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr2Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[5] = hr2Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr3Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[6] = hr3Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr4Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[7] = hr4Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  hr5Bttn.addEventListener("click", function(event) {
    event.preventDefault
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    inptTxtArray[8] = hr5Inpt.value
    localStorage.setItem("events", JSON.stringify(inptTxtArray));
  });
  // This function takes the hour of the day from day.js and color codes the hour divs accordingly.
  function toggleTime() {
    var hour = dayjs().hour();
    for (var i = 0; i < hrArray.length; i++) {
      hrArray[i].setAttribute("class", "row time-block");
    }
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
  toggleTime();
  // This line updates the colors every minute incase the hour changes while the application is open.
  setInterval(toggleTime, 60000);
});