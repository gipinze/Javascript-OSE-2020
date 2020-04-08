var title = " ";
var date = new Date();
var startInput = "";
var endInput = "";
var sunday = "";
var hs = 0;
var he = 0;
var ms = 0;
var me = 0;
var start = new Date();
var end = new Date();
var timePassed = "";
var price = "";
var line1 = "";
var line2 = "";
var totalPrice = "";
function allCapsTitleTrimmed(text) {
    "use strict";
    document.getElementById("title").value = title.toUpperCase().trim();
}
function modifyTitle() {
    "use strict";
    title = (document.getElementById("title").value).toUpperCase();
    allCapsTitleTrimmed();
    
}
function isSunday(dateText) {
    "use strict";
    var date = document.getElementById("date").value;
    var day = date.substr(0, 2);
    
    var month = date.substr(3, 2);
 
    var year = date.substr(6, 4);
 
    function cleanMonth() {
        if (month.charAt(0) === 0) {
            month = month.slice(1, 2) - 1;
            return month;
        } else {
            month = month - 1;
            return month;
        }
    }
    cleanMonth();
    
    var asDate = new Date();
    asDate.setFullYear(year, month, day);
    
    if (asDate.getDay() === 0) {
        sunday = true;
    } else {
        sunday = false;
    }
}
function calculate() {
    "use strict";
    isSunday();
    var startInput = document.getElementById("startTime").value;
    var endInput = document.getElementById("endTime").value;
	hs = startInput.slice(0, 2);
    ms = startInput.slice(3, 5);
    he = endInput.slice(0, 2);
    me = endInput.slice(3, 5);

    start.setHours(hs);
    start.setMinutes(ms);
    end.setHours(he);
    end.setMinutes(me);
    timePassed = Math.abs(start - end);
    timePassed = timePassed / 1000 / 60;
    if (sunday === true) {
        price = 72.00;
        line2 = "Sundays" + price.toFixed(2);
    } else {
        price = 48.00;
        line2 = "workdays " + price.toFixed(2);
    }
    totalPrice = price * (timePassed/60);   
    document.getElementById("answer").innerHTML = "Length of the work was " + timePassed + " minutes. <br>" + "The hourly price is during the " + line2 +" euros."+ "<br> The Price of this repair work is " + totalPrice.toFixed(2) + " euros.";	
}