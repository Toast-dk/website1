//javascript file
//enemies' health
//rand. generating enemy's health
var enemyHealth = 0.0;
var formerEnemyHealth = 0.0;
function randHealth() {
  enemyHealth = Math.round((Math.random() + 0.1) * 100);
  formerEnemyHealth = enemyHealth;
}
//cash
var numOfClicks = 0;
//clicking Power
var clickPower = 1;
//power upgrade cost
var pwrCost = 50;
//upgrade cost
var upPrice = 50;

function clickerUpdate() {
  if (enemyHealth <= 0.0) {
    console.log("healh = 0");
    numOfClicks += formerEnemyHealth;
    randHealth()
    document.getElementById("enemy").innerHTML = enemyHealth;
    document.getElementById("clicks").innerHTML = numOfClicks + " eggs";
  }
  enemyHealth -= clickPower;
  document.getElementById("enemy").innerHTML = enemyHealth;
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
