var time = moment().format("LTS");
var date = moment().format("l");

var displayTime = document.getElementById("time");
var displayDate = document.getElementById("date");

setInterval(() => {
  displayTime.innerHTML = moment().format("LTS");
  displayDate.innerHTML = moment().format("l");
  checkTime();
}, 500);
function checkTime() {
  for (let i = 9; i < 18; i++) {
    if (i > moment().hours()) {
      document.getElementById(`${i}`).style.backgroundColor = "green";
    }
    if (i === moment().hours()) {
      document.getElementById(`${i}`).style.backgroundColor = "red";
    }
    if (i < moment().hours()) {
      document.getElementById(`${i}`).style.backgroundColor = "gray";
    }
  }
}
console.log(moment().hours());
