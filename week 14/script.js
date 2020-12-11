//Exercise_1
const text = ['hallo    ', 'hello  ', 'hi ' ]
const space = text.map(function (space) {
    return space.trim();
});

console.log(space);

//Exercise_2
let Bobi;
Bobi = () => {
  return "Hello Bobi";
}

//Exercise_3
const names = ['mark', 'amidralshdehaha', '1q2w3e4r5y6y7u', 'amarjargalbolhuuhedbish']
const pp = names.filter(n => n.length <= 10, {
});
console.log(pp)

//Exercise_4 
const nums = [2, 4, 6, 8] 
const test = [1, 2, 3, 4]
console.log(nums.every(num => {
    return num % 2 == 0;
}))
console.log(test.some(num => {
    return num % 2 != 0;
}))