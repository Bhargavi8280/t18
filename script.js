//Given an array of numbers, use the map function with an arrow function to square each element of the array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
function getGrade(score) {
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
}

// Example usage:
console.log(getGrade(95)); // Output: A
console.log(getGrade(85)); // Output: B
console.log(getGrade(75)); // Output: C
console.log(getGrade(65)); // Output: D
console.log(getGrade(55)); // Output: F

// Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
// Create a car object
const car = {
  company: "Toyota",
  model: "Camry",
  year: 2020,
};

// Function to change the car's year property
function changeCarYear(newYear) {
  car.year = newYear;
}

// Change the car's year
changeCarYear(2022);

// Object destructuring to extract model and year
const { model, year } = car;

// Print the model and year
console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Camry, Year: 2022

//Given an array of numbers, use the filter function to create a new array containing only the prime numbers
// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false; // Numbers less than 2 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If divisible by any number other than 1 and itself
  }
  return true; // Number is prime
};

// Given array of numbers
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter to create a new array containing only prime numbers
const primeNumbers = numbersArray.filter(isPrime);

// Print the array of prime numbers
console.log(primeNumbers); // Output: [2, 3, 5, 7]

//State different use cases of map, filter and reduce functions.
//Map: Transforming an array of objects (e.g., extracting a specific property from an array of objects).
// Filter: Creating a subset of an array based on certain criteria (e.g., filtering out inactive users from a list).
// Reduce: Aggregating values from an array (e.g., calculating the total sales from an array of transactions).

// Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
// Asynchronous function to fetch data from the JSONPlaceholder API
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON data
    console.log(data); // Log the fetched data
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors
  }
}

// Call the function to fetch and log the data
fetchData();

// Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing
// Define a nested object representing a person
const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
  contact: {
    email: "john.doe@example.com",
    // phone: '555-1234' // Uncomment this line to add a phone number
  },
};

// Safely access the person's phone number using optional chaining
const phoneNumber = person.contact?.phone ?? "Phone number not available";

console.log(`Name: ${person.name}`);
console.log(
  `Address: ${person.address.street}, ${person.address.city}, ${person.address.zip}`
);
console.log(`Phone Number: ${phoneNumber}`); // Output: Phone number not available
