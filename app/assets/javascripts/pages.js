// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function changeColors() {
  setTimeout(function() {
    document.getElementById('first').style['color'] = 'red';
  }, 1000);
  document.getElementById('second').style['color'] = 'blue';
}
