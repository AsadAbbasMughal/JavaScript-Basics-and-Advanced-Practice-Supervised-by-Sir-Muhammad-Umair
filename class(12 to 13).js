//Assignment # 12-13 JAVASCRIPT

      //IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
      //&----------------------*-------------------------------&

//Qno: 01
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
//Ans:
// var prompt = prompt("Enter the Character")
// prompt = prompt.charCodeAt(0);
// if(prompt>= 65 && prompt <= 90){
//     console.log("Upper Case");
// }else if(prompt >= 97 && prompt<= 122){
//     console.log("Lower  Case");
// }else if (prompt>= 48 && prompt <= 57){
//   console.log("number");
// }else{
//     console.log("other Character")
// }
//&--------------*-----------------------------&



// //Qno: 02
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
//Ans:
// let a = prompt("Enter the First number");
// let b = prompt("Enter the Second number");
// if(a > b ){
//     console.log("Larger : ",a);
// }else if(a == b){
//     console.log("Equal : "+5);
// }else{
//     console.log((b+" : is Larger"));
// }
//&--------------*-----------------------------&




//Qno: 03
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
//Ans:
// let a = prompt("Enter the number");
// if(a >= 0){
//     console.log("positive");
// }else{
//     console.log("Negative");
// }
//&--------------*-----------------------------&






//Qno: 04
// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise.
    //Ans:
// let a = prompt("Enter the Characte length 1")
// let b = a.toLocaleLowerCase()
// if( b == "a" || b == "e" || b == "i" || b == "0" || b == "u" ){
//     console.log("True");
// }else{
//     console.log("False");
// }
//&--------------*-----------------------------&






//Qno: 05
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
//Ans:
// let pass = "Asad2004"
// let a = prompt("Enter password")
// if(pass == a){
//     console.log('Same');
// }else if(a.trim() == "" || a == null){
//     console.log("Please enter your password");
// }else{
//     console.log("incorrect");
// }
//&--------------*-----------------------------&





//Qno: 06
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
//Ans:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting); 
//&--------------*-----------------------------&






//Qno: 07
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.
//Ans:
// let timeInput = prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):");

// let time = parseInt(timeInput);

// if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
//     alert("Invalid time format. Please enter a valid time in 24-hour format (e.g., 1900).");
// } else {
//     if (time >= 500 && time < 1200) {
//         alert("Good morning");
//     } else if (time >= 1200 && time < 1700) {
//         alert("Good afternoon");
//     } else if (time >= 1700 && time < 2100) {
//         alert("Good evening");
//     } else {
//         alert("Good night");
//     }
// }
//&--------------*-----------------------------&