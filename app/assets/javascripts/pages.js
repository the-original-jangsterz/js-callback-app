/* global $ */
// var tempData = [
//   {
//     "job_titles": "WATER RATE TAKER",
//     "employee_annual_salary": "90744.00",
//     "name": "AARON,  ELVIA J",
//     "department": "WATER MGMNT"
//   },
//   {
//     "job_titles": "POLICE OFFICER",
//     "employee_annual_salary": "84450.00",
//     "name": "AARON,  JEFFERY M",
//     "department": "POLICE"
//   },
//   {
//     "job_titles": "POLICE OFFICER",
//     "employee_annual_salary": "84450.00",
//     "name": "AARON,  KARINA",
//     "department": "POLICE"
//   },
//   {
//     "job_titles": "CHIEF CONTRACT EXPEDITER",
//     "employee_annual_salary": "89880.00",
//     "name": "AARON,  KIMBERLEI R",
//     "department": "GENERAL SERVICES"
//   },
//   {
//     "job_titles": "CIVIL ENGINEER IV",
//     "employee_annual_salary": "106836.00",
//     "name": "ABAD JR,  VICENTE M",
//     "department": "WATER MGMNT"
//   },
//   {
//     "job_titles": "ASST TO THE ALDERMAN",
//     "employee_annual_salary": "70764.00",
//     "name": "ABARCA,  ANABEL",
//     "department": "CITY COUNCIL"
//   },
//   {
//     "job_titles": "GENERAL LABORER - DSS",
//     "employee_annual_salary": "41849.60",
//     "name": "ABARCA,  EMMANUEL",
//     "department": "STREETS & SAN"
//   },
//   {
//     "job_titles": "TRAFFIC CONTROL AIDE-HOURLY",
//     "employee_annual_salary": "20051.20",
//     "name": "ABASCAL,  REECE E",
//     "department": "OEMC"
//   },
//   {
//     "job_titles": "STAFF ASST TO THE ALDERMAN",
//     "employee_annual_salary": "49452.00",
//     "name": "ABBASI,  CHRISTOPHER",
//     "department": "CITY COUNCIL"
//   },
//   {
//     "job_titles": "ELECTRICAL MECHANIC",
//     "employee_annual_salary": "93600.00",
//     "name": "ABBATACOLA,  ROBERT J",
//     "department": "AVIATION"
//   }
// ];

function getData() {
  var divEmployees = document.getElementById('employees');
  divEmployees.innerHTML = "<p>Loading...</p>";
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=10', function(data) {
    var htmlString = "";
    for (var i = 0; i < data.length; i++) {
      var employee = data[i];
      htmlString += '<div onclick="changeEmployee(this)">';
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
