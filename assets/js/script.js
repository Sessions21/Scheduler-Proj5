function generateTimeblock (hour, value) {
  var timeBlockRow = $("<div>")
  timeBlockRow.addClass("row justify-content-center border-bottom border-light")

  var timeBlockHour = $("<div>")
  timeBlockHour.addClass("col-2 mr-2 bg-warning p-2")
  timeBlockHour.text(hour)

  var timeBlockDetail = $("<div>")
  timeBlockDetail.addClass("col-6 bg-dark border-right border-left border-light text-light p-2")
  
  var timeBlockInput = $("<textarea>")
  timeBlockInput.attr("type", "text")
  timeBlockInput.css('color', 'white')
  timeBlockInput.val(value)
  timeBlockDetail.append(timeBlockInput)


  var timeBlockSave = $("<div>")
  timeBlockSave.addClass("col-2 ml-2 bg-info text-light text-center p-2")
  var saveIcon = $("<i>")
  saveIcon.addClass("fas fa-save fa-5x")
  timeBlockSave.append(saveIcon)


  timeBlockRow.append(timeBlockHour, timeBlockDetail, timeBlockSave)
  return timeBlockRow
}

for (let i = 0; i < 9; i++) {
  $("#timeBlocks").append(generateTimeblock(i+10, "")
  )}
