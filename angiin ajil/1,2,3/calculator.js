let today= new Date();
let day = today.getDay();

let days = ["Sunday", "Modnday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let prepand = hour >=12 ? "pm" : "am";

if(hour == 0 && prepand == "am") {
    if(minute == 0 && second==0) {
        hour = 12;
        prepand = "Noon";
    }else{
        hour = 12;
        prepand = "pm";
    }
}
if(hour == 0 && prepand == "pm") {
    if(minute == 0 && second==0) {
        hour = 12;
        prepand = "Midnigth";
    }else{
        hour = 12;
        prepand = "am";
    }
}



console.log("Today is: " + days[day]);
console.log("Time is: " + hour + prepand +" : " +minute + " : " +second);


let ar= [];
for(let i = 2000; i <=2200; i+=4) {
    if(i % 4 ==0 && i % 100 != 0 || i % 400 ==0) {
        ar.push(i);
    }
}

console.log("Undur jil: ", ar)


function divide() {
    let first = document.getElementById('first').value,
      second = document.getElementById('second').value;
    first = parseInt(first);
    second = parseInt(second);
    document.getElementById('result').innerHTML = first / second;
    console.log(first, second);
}
function multiply() {
    let first = document.getElementById('first').value,
        second = document.getElementById('second').value;
    first = parseInt(first);
    second = parseInt(second);
    document.getElementById('result').innerHTML = first * second;
    console.log(first, second);
}

// console.log("Today is: " + days[day]);
// console.log("Time is: " + hour + prepand +" : " +minute + " : " +second);