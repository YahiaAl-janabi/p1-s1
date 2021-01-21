function validateForm() {
  var nameFirst = document.getElementById("nameFirst");
  var theValue = nameFirst.value;

  if (theValue != "yahia") {
    var messageHolder = document.getElementById("target");
    messageHolder.style.color = "red";
    messageHolder.innerHTML = "<h1> Change the text </h1>";
    nameFirst.select;

    return false;
  }
}
document.getElementById("submit").onclick = function () {
  var doSubmit = validateForm();

  if (doSubmit == false) {
    return false;
  }
};
