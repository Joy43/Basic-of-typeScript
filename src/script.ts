// --------function----------
function multiplay(a:number,b:number){
    return a*b;
}
console.log(multiplay(3,4));
// ---------arry-----
let fruits=['apple','banana','orange']
fruits.push('ounters')
// -----multitype error any type arry using----
let fruit=[];
fruit.push(234)
fruit.push('sumit')
// ------mixed arry
let mixed =["apple",3,true,{}];
console.log(mixed)
mixed.push({
    name:'sakib'
})
//----------- object--------
let person ={
    name:"ssjoy",
    age:34,
    isCaption:true,
}
person.name='sakib'
// specifix variable3
let a:string;
let b:number;
let c:string[]=[];

// number or string
let f:(string | number)[]=[]

// object

let g:{
name:string,
age:number,
adult:boolean
}
// -----------dynamic type------------------------

let ab:any;
ab=5;
ab='sumit'
// --------arry 
let abb :any[]=[]
abb.push('bangle')
abb.push(34)
console.log(abb)
// ------object
let bcd:{
name:any,
age:any
}
bcd={
    name:'bangladesbh',
    age:45
}

// ------------function=========
const myFunc=()=>{
    console.log("hello");
    
}

