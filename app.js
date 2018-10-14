// from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach(function(ufoSighting) {
  var row = tbody.append("tr");
  
  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value);
  
  var cell = tbody.append("td");
  });
});
  
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

  loadData(tableData);
  
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);
  
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          loadData(filteredData);
        });
      });
  
  });

