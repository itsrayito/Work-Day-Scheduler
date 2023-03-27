// this will make the clock start when the page is loaded
$(document).ready(function (){

    var saveBtn = $('.saveBtn');
    var currentDay = $('#currentDay');
    var event9am = $('#9am')
    var event10am = $('#10am')
    var event11am = $('#11am')
    var event12pm = $('#12pm')
    var event1pm = $('#1pm')
    var event2pm = $('#2pm')
    var event3pm = $('#3pm')
    var event4pm = $('#4pm')
    var event5pm = $('#5pm')

    // will display the clock functioning to its current time
    var today = dayjs().format('dddd MMMM DD');
    currentDay.text(today);

    // this displays the localStorage unto the correct text box where 
    // the user will type in their information
    event9am.val(localStorage.getItem('hour-9'));
    event10am.val(localStorage.getItem('hour-10'));
    event11am.val(localStorage.getItem('hour-11'));
    event12pm.val(localStorage.getItem('hour-12'));
    event1pm.val(localStorage.getItem('hour-1'));
    event2pm.val(localStorage.getItem('hour-2'));
    event3pm.val(localStorage.getItem('hour-3'));
    event4pm.val(localStorage.getItem('hour-4'));
    event5pm.val(localStorage.getItem('hour-5'));

    saveBtn.on('click', function () {

        // this will grab the id of the parent for each time section
        var parentID = this.parentElement.id;

        // this grabs the text section data for each time section
        var siblingID = this.previousElementSibling;

        // stores the information the user put in the text area
        var userInput = siblingID.value;

        // this puts the information put and the id key to the local storage
        localStorage.setItem(parentID, userInput)

    })

    // saves an array that has all classes of each element
    var hour9Id = parseFloat(($('#hour-09').attr('class').split(' ')).pop());
    var hour10Id = parseFloat(($('#hour-10').attr('class').split(' ')).pop());
    var hour11Id = parseFloat(($('#hour-11').attr('class').split(' ')).pop());
    var hour12Id = parseFloat(($('#hour-12').attr('class').split(' ')).pop());
    var hour13Id = parseFloat(($('#hour-13').attr('class').split(' ')).pop());
    var hour14Id = parseFloat(($('#hour-14').attr('class').split(' ')).pop());
    var hour15Id = parseFloat(($('#hour-15').attr('class').split(' ')).pop());
    var hour16Id = parseFloat(($('#hour-16').attr('class').split(' ')).pop());
    var hour17Id = parseFloat(($('#hour-17').attr('class').split(' ')).pop());

    // function is to save the hour class in an array as numerial form
    var hourClassArr = [hour9Id, hour10Id, hour11Id, hour12Id, hour13Id, hour14Id, hour15Id, hour16Id, hour17Id]

    // function is to save each element in an array in order for the user to be able to loop it
    var hourId= [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-1'), $('#hour-2'), $('#hour-3'), $('#hour-4'), $('#hour-5')]

    // this feature will apply past, present, or future depending what time it is
    for (i = 0; i < hourId.length; i++) {

        // this gets the hour number from the day function
        var hour = dayjs().hour;

        // this applies the present hour class
        if (hour === hourClassArr[i]) {
            hourId[i].addClass('present');

            // this applies the future hour class
        } else if (hour < hourClassArr[i]) {
            hourId[i].addClass('future');

            // this applies the past hour class
        } else if (hour > hourClassArr[i]) {
            hourId[i].addClass('past');
        }
    }
});
