//Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
    //Create a Date object from input value
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);
    console.log(date1,date2);

    //Check if the input dates are valid
    //If valid calculate the difference
    if(date1.getTime() && date2.getTime())
    {
        //calculate difference in time using getTime Function
        //getTime calculates number of years since january 1, 1970
        let timeDifference = date2.getTime() - date1.getTime();

        //Since this value is in miliseconds we need to convert it into days
        //We want the difference to be a non-negative number. Hence we use Math.abs()
        let dayDifference = Math.abs(timeDifference/(1000*3600*24));
        output.innerHTML = `Difference between the two dates is <span>${dayDifference}</span> days`
    }
    else{
        output.innerHTML = "Please select a valid Date"
    }
});