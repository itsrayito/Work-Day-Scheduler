$(document).ready(function () {

});

// display the current date and time
var today = dayjs().format('dddd MMMM DD');
currentDay, (today);

// functions for past, present, and future times
// compare the timeblock to see if the present time to determine whether activity is in the past, present, or future
$(".time-div").each(function() {
  var timeDiv = $(this).attr("id").split("-")[1];

  if (currentHour == timeDiv) {
  $(this).addClass("present");
  $(this).children(".description").addClass("present");

} else if (currentHour < timeDiv) {
  $(this).removeClass("present");
  $(this).addClass("future");

} else if (currentHour > timeDiv) {
  $(this).removeClass("future");
  $(this).addClass("past");
}
});

// saving the data to the local storage
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time,value);
});

// getting the data from the local storage
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
