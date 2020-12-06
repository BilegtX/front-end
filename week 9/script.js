function Ex2(num, num1) {
    if(num >= num1) 
        console.log(num)
    else
        console.log(num1)
}
Ex2(10, 5)

function Ex3(num, num1, num2) {
    let numbers = new Array();   
    let length = numbers.push(num);
    length = numbers.push(num1);
    length = numbers.push(num2);    
    numbers.sort((a, b) => b - a );
    console.log(numbers)
}
Ex3(2, 3, 6)

function Ex4(n1, n2, n3, n4, n5) {
    let numbers = new Array();   
    let length = numbers.push(n1);
    length = numbers.push(n2);
    length = numbers.push(n3); 
    length = numbers.push(n4); 
    length = numbers.push(n5);
    console.log(Math.max(...numbers)) 
}
Ex4(1,2,3,4,5)


let arr = [67, 89, 56, 78, 23];
let a = 0;
for(let i = 0; i < arr.length; i++){
  a += arr[i];
}
a = a / 5;
if(a < 60){
  console.log("Dundaj dun: F")
} else if(a < 70) console.log("Dundaj dun: D");
  else if(a < 80) console.log("Dundaj dun: C");
        else if(a < 90) console.log("Dundaj dun: B");
              else console.log("Dundaj dun: A");