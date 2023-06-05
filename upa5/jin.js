
//Question No 1//
fahrenheit = prompt("insert faherenheit value: ")
let celcius = tempCal();3

function tempCal(celcius, faherenheit) {
    celcius = (fahrenheit - 32) *5/9;
return celcius;
}

console.log(celcius);

// Question No 2//
const array = [1, 2, 3, 4, 5]
function calcAverage(num){
    let total = 0
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    let average = total / num.length
    return average;
}
let result = calcAverage(array)
console.log(result)


// Question No 3//
function checkNum(num){
    let x = 2
    let y = 3
    if (num % x === 0 && num % y === 0 ){
        console.log("The number is divisble")
    }
    else {
        console.log("Not divisible")
    }
}
number = checkNum(5)


//Question No 4//
function getPrimeNumbers(count) {
    let primes = [];
    let num = 2;

    while (primes.length < count) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

let primeNumbers = getPrimeNumbers(100);
console.log(primeNumbers)

//Question No 5//
let primeNumber = prompt("Input a Number")

function testPrime(primeNumber) {
    if (primeNumber <= 1) {
        return false;
    }
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            return false;
        }
    }
    return true;
   
}

console.log(testPrime(primeNumber))

// Question No 6//

let myArray = [2,3,-1,5,-7,9,-4,8,7]
function arrayCount(myArray){
    let newArray = []
    for(i = 0; i < myArray.length; i++){
        if (myArray[i] > -1 ){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}
console.log(arrayCount(myArray))

//Question No 7//
for(i=1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz");
    }else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    
    }  else {
        console.log(i);
    }
    
} 


// Question No 8 //
function generateHashtag(str) {
  if (str.trim() === '') {
    return false;
  }

  const words = str.match(/\b\w+\b/g);
  const hashtag = '#' + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}
const input = "hello world";
const hashtag = generateHashtag(input);
console.log(hashtag)
