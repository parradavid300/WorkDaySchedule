var timeDisplayEl = $("#time-display");
var containerEl = $(".container");
var blockHour = $("col-1 hour")
var textArea  = $("#textarea")
var saveBtn = $(".saveBtn")



// Current Time and day //
function displayTime() {
    var rightNow = moment().format('LLLL');
    timeDisplayEl.text(rightNow);
    
  }


function grabText() {
  $(textArea).val();
}














  setInterval(displayTime, 1000);