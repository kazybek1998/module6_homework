// задание 1
function ArrayFunc(arr) {
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;
    let countOther = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] != 0 && typeof(arr[i]) == "number") {
            if (arr[i]%2 == 0) {
                countEven++;
            } else {
                countOdd++;
            }
        } else if(arr[i] == 0) {
            countZero++;
        } else {
            countOther++;
        } 
    }
    console.log(`countEven = ${countEven}, countOdd = ${countOdd}, countZero = ${countZero}, countOther = ${countOther}`);
}
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

ArrayFunc(arr);

// задание 2
function isPrime(num) {
    if (num <= 1000) {
        for(var i = 2; i < num; i++) {
            if(num % i === 0) {
              return false;
            }
          }
    }
    return num > 1;
}
for (let i = 2; i <= 100; i++) {
    console.log(`${i} -> ${isPrime(i)}`);
}

// задание 3
function createAdder(a) {
	return function addA(b) {
  	return a + b;
  };
}

const add5 = createAdder(5);
console.log(add5(5));
console.log(add5(7));

// задание 4
function printNumbers(a, b) {
    let current = a;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == b) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
    
printNumbers(5, 15);

// задание 5
const power = (x, n) => {
    return Math.pow(x, n);
};

for (let i = 1; i <= 10; i++) {
    console.log(power(2, i));
}