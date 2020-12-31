//form validation fuction
document.getElementById("submit).onClick = function(){

var doSubmit = validateForm();

if(doSubmit == false){

return false;}}


function validateForm(){

var nameFirst = document.getElementById("nameFirst");
var theValue = nameFirst.value;

if(theValue != "Yahia"){

var messageHolder = document.getElementById("target");
messageHolder.innerHTML = "<h1>Change the text<h1>";
nameFirst.select;

return false;}

}
