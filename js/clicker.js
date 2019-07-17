//javascript file
//cash
var numOfClicks = 0;
function clickerUpdate() {
  numOfClicks += 1;
  document.getElementById("clicks").innerHTML = numOfClicks + " eggs";
}
function clickerUpdate2() {
  numOfClicks += 2;
  document.getElementById("clicks").innerHTML = numOfClicks + " eggs";
}
function clickerUpdate2Launch() {
  if (numOfClicks >= 50) {
    document.getElementById( "clickA" ).setAttribute( "onclick", "javascript: clickerUpdate2();" );
    numOfClicks -= 50;
    document.getElementById("clicks").innerHTML = numOfClicks + " eggs";
  } else {
    alert("Not Enough Money")
  }
}
