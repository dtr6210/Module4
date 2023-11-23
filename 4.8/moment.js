//1. Calculate the number of days between your birthdate and the current date:

function calculateDaysDifference(birthDate){
let currentDate = moment();
let daysDifference = currentDate.diff(birthDate, 'days');
document.getElementById('result1').innerHTML = `${daysDifference} days`;
}

//2. Display the number of years, months, and days between your birthdate and current date:

function displayYearsMonthsDays(birthDate){
let currentDate = moment();
let years = currentDate.diff(birthDate, 'years');
let months = currentDate.diff(birthDate, 'months') % 12;
let days = currentDate.diff(birthDate, 'days') % 30;
document.getElementById('result2').innerHTML = `${years} Years, ${months} Months, ${days} Days`;
}

//3. Given two dates, display the date closest to the current date:

function displayClosestDate(date1, date2){
    let closestDate = moment.max(date1, date2);
    document.getElementById('result3').innerHTML = `${closestDate.format('YYYY-MM-DD')}`;
}

//4. Given two dates, display whether the first date is before or after the second date:

function compareDates(date1, date2){
    if (date1.isBefore(date2)) {
        document.getElementById('result4').innerHTML = `${date1.format('YYYY-MM-DD')} is before ${date2.format('YYYY-MM-DD')}.`;

    }else if (date1.isAfter(date2)){
        document.getElementById('result4').innerHTML = `${date1.format('YYYY-MM-DD')} is after ${date2.format('YYYY-MM-DD')}.`;
    } else {
        document.getElementById('result4').innerHTML = 'Both dates are equal.';
    }
}

//5. Display the current time in London:

function displayLondonTime () {
    let londonTime = moment().tz('Europe/London').format('HH:mm:ss');
    document.getElementById('result5').innerHTML = `The current time in London is ${londonTime}.`;
}



let birthDate = moment('1982-12-11');
calculateDaysDifference(birthDate);

let birthDateForYearsMonthsDays = moment('1982-12-11');
displayYearsMonthsDays(birthDateForYearsMonthsDays);

let date1ForClosestDate = moment('1999-12-31');
let date2ForClosestDate = moment('2001-09-11');
displayClosestDate(date1ForClosestDate, date2ForClosestDate); 

let date1ForComparison = moment('2021-10-10');
let date2forComparison = moment('2020-10-10');
compareDates(date1ForComparison, date2forComparison);

displayLondonTime();