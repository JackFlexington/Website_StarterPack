/* ************************************************************************************************* 
Document: boilerplate.js

Description:
Contained within this file are baseline, recommended Javascript functions.
 * If you feel like there is code that should be added, initialize a pull request and we'll review :)
************************************************************************************************* */
/* ------------ Global Variables ------------ */
// Declare an "unchangeable" variable accessible by all functions.
const g_body = document.getElementsByTagName("body"); // Initialize, and assign value of <body> HTML element.

/* ------------ Functions ------------ */
function initPage() {
  /* Note: the "t_" prepended to each variable indicates that this is a "temporary" variable. Therefore
   *       will only exist through the life cycle of this function. Once its done, the variable is discarded 
   *       and memory is released to be used elsewhere. (See "let" versus "var" when declaring variables.)
   */

  /* FUNCTION VARIABLES */
  // Acquire browser current time
  // Syntax: <type of variable to declare> | <variableName> | <assignment>
  let t_date = new Date(); // Create variable to hold Date() object.
  let t_day = t_date.getDate(); // Acquire current day from Date() object.
  let t_month = t_date.getMonth(); // Acquire current month from Date() object.
  let t_year = t_date.getFullYear(); // Acquire current year from Date() object.
  let t_time = t_date.getHours() + ":" + t_date.getMinutes() + ":" + t_date.getSeconds(); // Acquire current HH:MM:SS

  // Output results to console log
  // Syntax: <target browser console> | <Stringified output message>
  // Note: Press "F12" when on web browser to access "console".
  console.log("Date: " + String(t_month) + "/" + String(t_day) + "/" + String(t_year) + " (MM/DD/YYYY)");
  console.log("Current time: " + String(t_time));
  console.log("End of initPage() function");
} // End "initPage()" function

/* ------------ Events ------------ */
if (window.addEventListener) {
  // Modern Browsers: Chrome, Firefox, Opera
  console.log("~addEventListener: Mozilla Firefox, Google Chrome, or any other modern browser detected...");      // Message console
  window.addEventListener("load", initPage, false); // Invoke previously declared function
  console.log("Event Listeners created..");         // Message console
} else if (window.attachEvent) {
  // Edge, Internet Explorer, etc...
  console.log("~attachEvent: Internet Explorer variant detected..."); // Message console
  window.attachEvent("onload", initPage);          // Invoke previously declared function
  console.log("Event Listeners created..");      // Message console
} // End "on page load" event
