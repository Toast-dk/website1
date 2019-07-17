//javascript file
//number of flips done
var numOfFlips = 0;
//number of heads
var heads = 0;
//number of tails
var tails = 0;
//percentage of heads
var headsPerc = 0.0;
//percentage of tails
var tailsPerc = 0.0;
//percentage generator function
function percentage(x, y, a, b, m, n) {
  a = x / (x+y);
  b = 1 - a;
  /*if (x > y) {
    a = y/x;
    b = 1 - a;
  } else {
    b = x/y;
    a = 1 - b;
  }
  a = round(a, 2);
  b = round(b, 2);
  document.getElementById('perc').innerHTML = a + "%" + m + "<br>" + b + "%" + n;
  }*/
  //a = round(a, 2);
  //b = round(b, 2);
  //document.getElementById('perc').innerHTML = a + "%" + m + "<br>" + b + "%" + n;
  a = Math.round(a*10000)/100
  b = Math.round(b*10000)/100
  document.getElementById('perc').innerHTML = a + "% with " +x + m  + "<br>" + b + "%" + n ;
}
//coin flip function
function coinFlip() {
  //sets value for coin toss
  var coinValue = Math.random();
  //adds either heads or tails based on coinValue & adds to coinArray
  if (coinValue < 0.5) {
    document.getElementById("result").innerHTML = "You got heads!";
    document.getElementById("coinImage").src = "images/heads.jpg";
    heads += 1;
  } else {
    document.getElementById("result").innerHTML = "You got tails!";
    document.getElementById("coinImage").src = "images/tails.jpg";
    tails += 1;
  }
  numOfFlips += 1;
  document.getElementById('flipAmount').innerHTML = "You have flipped the coin " + numOfFlips + " times";
  percentage(heads, tails, headsPerc, tailsPerc, " heads ", " tails ");
}
