// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filteredDates = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredDates);
    var myTable = document.getElementById("ufo-table").getElementsByTagName("tbody")[0];
    myTable.innerHTML = "";
    filteredDates.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});