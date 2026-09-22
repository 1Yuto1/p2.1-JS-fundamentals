/**
 * 08_calculateAge.js
 * Function that calculates the age of a person based on their birthdate.
 *
 * The age is calculated by subtracting the birth year from the current year,
 * then adjusting if the birthday hasn't happened yet this year.
 */

function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  // Check if the birthday has already occurred this year
  const monthDiff = today.getMonth() - birth.getMonth();

  // If the birthday hasn't happened yet this year, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// Example usage
console.log("Age of someone born on 2000-06-15:", calculateAge("2000-06-15"));
console.log("Age of someone born on 1990-12-25:", calculateAge("1990-12-25"));
console.log("Age of someone born on 2005-03-01:", calculateAge("2005-03-01"));
