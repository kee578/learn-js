var variableName = `justaboi`;
const name =`ye he is ${variableName}`;
console.log(name);
var isageCheck = true;
const age = 18;
if(age>20)
{isageCheck= true;}
else
{isageCheck= false;}

if(isageCheck)
console.log(age);
else console.log("under");


const date = new Date();
console.log(date);
const aa = 10;
const b = 50;

console.log(aa == b);
for(let i = 0; i<=11; i++)
{console.log(i);
}

const namer = "jageerthan";
const num = namer.length;
console.log(namer.charAt(Math.floor(Math.random()*num)));

var a = prompt("enter a value sir");
if (typeof a ==='string')
alert("thanks");
else

alert("nope");

var x = 5


function mac()
{
    var x = 1;
    let ac = 2;
    const c = 3;

console.log(x);
console.log(ac);
console.log(c);
{

    var x = 3;
    let ac = 5;
    console.log(x);
    console.log(ac);
    console.log(c);
    

// }
// console.log(x);
// console.log(ac);
// console.log(c);



// }
// mac();

const obj1 = {name : "jack",
age :"25",
dob:"dono",
int : ["games","hockey","swimming"]}
console.log(obj1.int);

for(let ob in obj1)
{ 


console.log(`on ${ob}, its ${obj1[ob]}`);

}

class pizza {
           constructor(pizzaType, pizzaCrust)
    {  
     this.type = pizzaType;
        this.crust = pizzaCrust;
       this.size = "small";
    this.toppings = []; 
}

getToppings()
{


   return this.toppings;
}
setToppings(topping)
{
this.toppings.push(topping);
}
getSize()
{
    return this.size;
}

setSize(size)
{
this.size= size;
}

bake()
{

console.log(`baking a ${this.size} ${this.type} ${this.crust} 
pizza with the following toppings ${this.getToppings()}`)

}

}

const newPizza = new pizza("thin","filled");

newPizza.setSize("medium");
newPizza.setToppings("chicken");

newPizza.bake();
