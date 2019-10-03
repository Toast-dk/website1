//array of possible LCDs
var possibleLCDs = [];
//number being tested
var numTest = 1;
//largest num in array
var largestDenom = 0;
//index of LCD array
var indLCD = 0;
//array of proven common denominators
var commonD = [];
//finds LCD
function getInput() {
  //defining variables
  var lcd1 = document.getElementById('lcdInput1').value;
  var lcd2 = document.getElementById('lcdInput2').value;
  if (lcd1 >= lcd2) {
      var largerNum = lcd1;
      var smallerNum = lcd2;
    } else {
      var largerNum = lcd2;
      var smallerNum = lcd1;
    }
  //calculating possible LCDs
  while (numTest <= largerNum) {
      if(largerNum % numTest == 0) {
          possibleLCDs.push(numTest);
        }
      numTest += 1;
    }
  //checking if LCDs work
  largestDenom = Math.max(...possibleLCDs);
  while (indLCD <= largestDenom) {
    if (smallerNum % possibleLCDs[indLCD] == 0) {
        commonD.push(possibleLCDs[indLCD]);
      }
    indLCD += 1;
  }
  var removalIndex = commonD.indexOf(1)
  commonD.splice(removalIndex, 1);
  document.getElementById('lcdResult').innerHTML = "Common Denominator: " + commonD;
}
