/* global $ */

function getData() {
  var divEmployees = document.getElementById('employees');
  divEmployees.innerHTML = "<p>Loading...</p>";
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=10', function(data) {
    var htmlString = "";
    for (var i = 0; i < data.length; i++) {
      var employee = data[i];
      htmlString += '<div class="employee" onclick="changeEmployee(this)">';
      htmlString += '<h2>' + employee.name + '</h2>';
      htmlString += '<p>Title: ' + employee.title + '</p>';
      htmlString += '<p>Department: ' + employee.department + '</p>';
      htmlString += '<p>Salary: ' + employee.employee_annual_salary + '</p>';
      htmlString += '</div>';
    }
    divEmployees.innerHTML = htmlString;
  });
}

function changeEmployee(divEmployee) {
  if (divEmployee.style['color'] === 'lightgray') {
    divEmployee.style['color'] = 'black';
  } else {
    divEmployee.style['color'] = 'lightgray';
  }
}

function showPolice() {
  var employees = document.querySelectorAll('.employee');
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    if (employee.innerHTML.indexOf('POLICE') !== -1) {
      employee.style['display'] = 'block';
    } else {
      employee.style['display'] = 'none';
    }
  }
}

function showAll() {
  var employees = document.querySelectorAll('.employee');
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    employee.style['display'] = 'block';
  }
}
