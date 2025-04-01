let cities = ["St. Louis", "Kansas City", "Denver", "City 17", "New Supertown"];
cities.forEach(city => {
    console.log(city.toUpperCase());
});
/*
    ST. LOUIS
    KANSAS CITY
    DENVER
    CITY 17
    NEW SUPERTOWN
*/

let numbers = [1,2,3,4,5];
let squares = numbers.map(num => num * num);
console.log(squares);
// [ 1, 4, 9, 16, 25 ]

let scores = [12, 22, 45, 7, 137, 255];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);
// [ 137, 255 ]

let favoriteFood = ["Chimichanga", "Chana Masala Bowl", "Hummus", "Sourdough", "Beer Bread", "Sushi"];
let firstFourLetterFood = favoriteFood.find(food => food.length > 4);
let foodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(firstFourLetterFood,foodIndex);
// Chimichanga 0