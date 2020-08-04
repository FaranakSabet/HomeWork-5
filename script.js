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
  for (let i = 9; i < 17; i++) {
    if (i > moment().format("h")) {
      document.getElementById(`${i}`).style.backgroundColor = "red";
    }
  }
}
console.log(moment().format("h"));
