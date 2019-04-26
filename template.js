// External JavaScript 
/* Author: Jacob Storer */
// Date Written: April 25th, 2019

something = document.getElementById("something");

if (window.addEventListener) {
  console.log("Real Browser Event Listeners");
  something.addEventListener("load", someFunction, false);
  console.log("Event Listeners created..")
} else if (window.attachEvent) {
  console.log("Other Browsers Event Listeners");
  something.attachEvent("load", someFunction);
  console.log("Event Listeners created..")
}
