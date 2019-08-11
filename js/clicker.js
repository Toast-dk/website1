//javascript file
//cash
var numOfClicks = 0;
//clicking Power
var clickPower = 1;
//power upgrade cost
var pwrCost = 50;
//upgrade cost
var upPrice = 50;

function clickerUpdate() {
  numOfClicks += clickPower;
  document.getElementById("clicks").innerHTML = numOfClicks + " eggs";
}
function clickerPowerLaunch() {
  if (numOfClicks >= upPrice) {
    clickPower += 1;
    numOfClicks -= upPrice;
    upPrice += 10;
    document.getElementById("clicks").innerHTML = numOfClicks + " eggs";
    document.getElementById('upgradePrice1').innerHTML = "+1 Click Power (" + upPrice + " eggs)"
  } else {
    alert("Not Enough Money")
  }
}
