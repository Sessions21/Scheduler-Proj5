function generateTimeblock (hour) {
  var timeBlockRow = $("<div>");
  timeBlockRow.addClass("row justify-content-center mb-1");

  var timeBlockHour = $("<div>");
  timeBlockHour.addClass("col-2 mr-2 bg-secondary p-2 text-center font-weight-bold");
  timeBlockHour.text(hour);

  var timeBlockDetail = $("<div>");
  timeBlockDetail.addClass("col-6 border-right border-left border-light p-2");

  var momentHour = moment(hour, 'hh:mm A').hour();
  var currentHour = moment().hour();

  if(momentHour < currentHour) {
    timeBlockDetail.addClass("past");
  }
    else if (momentHour > currentHour) {
    timeBlockDetail.addClass("future");
  }
  else if (momentHour === currentHour) {
    timeBlockDetail.addClass("present");
  }
  
  var timeBlockInput = $("<textarea>");
  timeBlockInput.attr("type", "text");
  timeBlockInput.css('color', 'white');
  timeBlockInput.css('width', "100%");
  timeBlockInput.attr("placeholder", "Enter task detail here");
  timeBlockDetail.append(timeBlockInput);
  if (localStorage.getItem(hour)) {
    timeBlockInput.val(localStorage.getItem(hour))
  }


  var timeBlockSave = $("<div>");
  timeBlockSave.addClass("col-2 ml-2 bg-info text-light text-center p-2");
  var saveIcon = $("<i>");
  saveIcon.addClass("fas fa-save fa-4x button");
  timeBlockSave.append(saveIcon);
  timeBlockSave.click(function () {
    localStorage.setItem(hour, timeBlockInput.val() )
  });


  timeBlockRow.append(timeBlockHour, timeBlockDetail, timeBlockSave)
  return timeBlockRow
}

//Hour Increments for tasks
var timeIncrementArray = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM","01:00 PM",
 "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"] 
for (var i = 0; i < timeIncrementArray.length; i++) {
  $("#timeDisplay").append(generateTimeblock(timeIncrementArray[i])
  )};


//Current time display at page top on load
var timeDisplay = moment();
var timeContainer = $("#currentDay");
timeContainer.css("fontWeight", "bold")
timeContainer.append(timeDisplay.format("dddd, MMMM Do YYYY, h:mm:ss a"));
