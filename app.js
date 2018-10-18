// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(sighting) {
   console.log(sighting);
 });

// // Step 2:  Use d3 to append one table row `tr` for each ufo report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(sighting) {
   console.log(sighting);
   var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
     console.log(key, value);
   });
 });

// // Step 4: Use d3 to append 1 cell per ufo report value (date, city, state, country, shape, duration, comments)
data.forEach(function(sighting) {
  console.log(sighting);
   var row = tbody.append("tr");

   Object.entries(sighting).forEach(function([key, value]) {
     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo report object
    var cell = tbody.append("td");
   });
 });

 
// // Step 5: Use d3 to update each cell's text with
// // ufo report values (date, city, state, country, shape, duration, comments)
data.forEach(function(sighting) {
 console.log(sighting);
  var row = tbody.append("tr");
   Object.entries(sighting).forEach(function([key, value]) {
   console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo report object
    var cell = tbody.append("td");
     cell.text(value);
  });
 });

 // Assign the data from `data.js` to a descriptive variable
var alien = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(alien);

  var filteredData = alien.filter(alien => alien.datetime === inputValue);

  console.log(filteredData);


// BONUS: Refactor to use Arrow Functions!
data.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
