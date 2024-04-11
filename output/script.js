"use strict";
// --------function----------
function multiplay(a, b) {
    return a * b;
}
console.log(multiplay(3, 4));
// ---------arry-----
let fruits = ['apple', 'banana', 'orange'];
fruits.push('ounters');
// -----multitype error any type arry using----
let fruit = [];
fruit.push(234);
fruit.push('sumit');
// ------mixed arry
let mixed = ["apple", 3, true, {}];
console.log(mixed);
mixed.push({
    name: 'sakib'
});
//----------- object--------
let person = {
    name: "ssjoy",
    age: 34,
    isCaption: true,
};
person.name = 'sakib';
