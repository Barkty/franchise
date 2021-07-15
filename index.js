//Prompt user for date of birth
let voterAge = prompt("Enter your date of birth. Format: \'DD\\MM\\YYYY\'");

//Slice the day, month and year
let day = parseInt(voterAge.slice(0, 2));
let month = parseInt(voterAge.slice(3, 5));
let year = parseInt(voterAge.slice(6, 10));
//console.log(day, month, year);

calculateAge = () => {
	
//Get current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

//Convert date to string
currentDate.toString();
//Validate the age
  if(year <= currentYear && month >= (currentMonth + 1) && day >= currentDay) {
 document.write("Sorry, you are not eligible to vote");
} else {
	document.write("You are eligible to vote");
  }
  return true;
}

// Check if age is valid
if(isNaN(day) || isNaN(month) || isNaN(year)) {
  document.write('Please enter a valid date of birth in the indicated format');
} else {
  calculateAge();
}
