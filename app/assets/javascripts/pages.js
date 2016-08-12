/* global $ */

function getData() {
  var divEmployees = document.getElementById('employees');
  divEmployees.innerHTML = "";
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=10', function(data) {
    for (var i = 0; i < data.length; i++) {
      var employee = data[i];
      divEmployees.innerHTML += '<h2>' + employee.name + '</h2>';
    }
  });
}
