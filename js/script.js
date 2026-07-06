//  Using  prompt and   if condition  
// (  ask the user to enter his salary ( if it > = 17000  print "wealthy" , but from 9000 to 17000 print " rich" , 
// else print "mashia be elsatr".

// var salary = prompt("enter your salary")

// if (salary >= 17000){
//     console.log("wealthy")
// }else if (salary >= 9000){
//     console.log("rich")
// }else {
//     console.log("mashia be elsatr");
    
// }
//  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Ask the student to give you his degree in 6 Subjects 
// and print Percentage  and (Overall rating using if condition ). 
// (>= 85  print  excellent , >=75  print v.good , ....etc )

// var degree = prompt("enter your degree")

// if (degree >= 85){
//     console.log("Excellent");
// }else if ( degree >= 75){
//     console.log("Very Good");
// }else if ( degree >= 65){
//     console.log("Good");
// }else if (degree >= 50){
//     console.log("acceptable");
// }else {
//     console.log("Failed");
    
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function convert(minutes) {
//     return minutes * 60;
// }

// // Examples
// console.log(convert(5)); // 300
// console.log(convert(3)); // 180
// console.log(convert(2)); // 120

// /////////////////////////////
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             console.log(i);
//             return;
//         }
//     }
//     console.log(-1);
// }

// // Examples
// linearSearch([1, 3, 5, 7, 9], 5); // 2
// linearSearch([1, 3, 5, 7, 9], 6); // -1
// ///////////////////////////

// function primeNumbers(n) {
//     let count = 0;

//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;

//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             count++;
//         }
//     }

//     return count;
// }

// // Examples
// console.log(primeNumbers(10)); // 4
// console.log(primeNumbers(20)); // 8
// console.log(primeNumbers(30)); // 10
// ///////////////////////////////////////////////////////////
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
// //////////////////////////////////////////////////////////
// function calculateFactorial(num) {
//     let factorial = 1;

//     for (let i = 2; i <= num; i++) {
//         factorial *= i;
//     }

//     return factorial;
// }

// // Examples
// console.log("Factorial of 5 is:", calculateFactorial(5));
// console.log("Factorial of 0 is:", calculateFactorial(0));