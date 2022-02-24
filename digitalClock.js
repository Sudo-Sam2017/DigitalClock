/* const d = new Date();
document.getElementById("currentTime").value = d; */

var span = document.getElementById('span');

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

function getDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();
    today = month + '-' + day + '-' + year;
    var dateBox = document.getElementById('date');
    dateBox.textContent = today;
}


setInterval(time, 1000);
getDate();