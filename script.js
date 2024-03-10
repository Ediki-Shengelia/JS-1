//! 1

let element1 = 100;
if(element1<50){
    console.log('ნაკლებია 50-ზე');
}
else if(element1>20){
    console.log('მეტია 20-ზე');
}
else{
    console.log('შეცდომა');
}

//ternary operator

let result1=element1<50 ? 'ნაკლებია 50-ზე': element1>20 ? 'მეტია 20-ზე' : 'შეცდომა';

console.log(result1);

//! 2

let userName= 'მარიამ';
if(userName='მარიამ')
{
 console.log('true');
}
else{
    console.log("false");
}
//ternary operator
let result2 = userName='მარიამ'?'true':'false';
console.log(result2);

//! 3
//switch case
let userName2 ='მარიამ';
switch (userName2) {
    case "მარიამ":
        console.log('true');
        break;

    default:
        console.log('false');
        break;
}