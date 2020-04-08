function tellAge() {
    // Read value of yearOfBirth from the input field 
   
    var yearOfBirth = document.getElementById("yearOfBirth").value;
    var numYearofBirth = Number(yearOfBirth);
    // Figure out the current date into today variable 
    var today = new Date();
    var currentDate = today.getDate();
    // Use getFullYear() method to get the current year out from the today variable
    var year = new Date();
    var currentYear  = year.getFullYear();

    // Calculate the (rough estimate of the) age
    
    var age = currentYear - numYearofBirth;

    // If age is less than zero
    if (age<0){
        alert("Your age is of empires!");
    }
        //  Show an error message
    else if(age>=0){
        var respuesta = "You are now " + age + " years old." + "<br> (Current year is " + currentYear + ".)"
    }
    // otherwise tell the age
    document.getElementById("answer").innerHTML = respuesta;
}