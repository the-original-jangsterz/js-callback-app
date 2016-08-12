/* global $ */

function getData() {
  var divEmployees = document.getElementById('employees');
  divEmployees.innerHTML = "<p>Loading...</p>";
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=10', function(data) {
    divEmployees.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
      var employee = data[i];
      divEmployees.innerHTML += '<h2>' + employee.name + '</h2>';
      divEmployees.innerHTML += '<p>Title: ' + employee.title + '</p>';
      divEmployees.innerHTML += '<p>Department: ' + employee.department + '</p>';
      divEmployees.innerHTML += '<p>Salary: ' + employee.employee_annual_salary + '</p>';
    }
  });
}
