// lab13.eventListener.js

// External JavaScript for typing.html example
/* Author: Jacob Storer */
// Date Written: April 25th, 2019

theProgram = document.getElementById("program");
theCourse = document.getElementById("course");

if (window.addEventListener) {
  console.log("Real Browser Event Listeners");
  window.addEventListener("load", insertCopyright, false);
  theProgram.addEventListener("change", ajaxFunction, false);
  theCourse.addEventListener("change", ajaxFunction, false);
  console.log("Event Listeners created..")
} else if (window.attachEvent) {
  console.log("Other Browsers Event Listeners");
  window.attachEvent("load", insertCopyright);
  theProgram.attachEvent("onchange", ajaxFunction);
  theCourse.attachEvent("onchange", ajaxFunction);
  console.log("Event Listeners created..")
}
