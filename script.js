function trailingZeros(n) {
  //your JS code here. If required.

	if (isNaN(n) || n < 0) {
    
        return "Give Correct Number";
    }

    let factorial = 1;
    let countZeros = 0;

    for (let i = 1; i <= n; i++) {
        factorial = factorial *  i;
    }

    while (factorial % 10 === 0) {
        countZeros++;
        factorial = factorial / 10 
    }

	return countZeros;
	
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
