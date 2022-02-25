/* const d = new Date();
document.getElementById("currentTime").value = d; */

var span = document.getElementById('time');

function time() {
  var d = new Date();
  var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
        var am_pm = d.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        var seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
  span.textContent = 
    ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2) + ' ' + am_pm;
 d.toLocaleString('en-us', {hour: 'numeric', minute:'numeric', hour12: true})

}

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];





const d = new Date();
let currentMonth = month[d.getMonth()];
var day = String(d.getDate()).padStart(2, '0');
var year = d.getFullYear();
document.getElementById("demo").innerHTML = currentMonth + ' ' + day + ', ' + year;


setInterval(time, 1000);
