var countdownGenerator = function (x) {
  /* your code here */
  //returns a function that counts down when it is called.
  var countInt = x;

  return function start(){


    if (x > 0) {console.log(x)}
    else if(x == 0) {console.log('Blast Off !')}
    else if(x <= -1) {console.log('Rockets already gone, bub!')}
    x--
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!