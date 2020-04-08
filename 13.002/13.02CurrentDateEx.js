// todo
var date = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("answer").innerHTML = days[date.getDay()] + "<br>" + date.getDate() + "." 
+ (date.getMonth() + 1) + "." + (1900 + date.getYear()) + "<br>" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();