// const nm="vidhi"
// console.log("hello"+nm)

// console.log("1. Even Odd Program")

// const a=6
// if(a%2)
// {
//     console.log("odd")
// }
// else
// {
//     console.log("even")
// }


// console.log("2. Maximum 2 Program")

// const a1=2
// const a2=4

// if(a1>a2)
// {
//     console.log(a1+"is maximum")
// }
// else
// {
//     console.log(a2+"is maximum")
// }


//console.log("3. Check Leap Year")

// const year = 2027

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
// {
//   console.log(year + " is a leap year")
// }
//  else
// {
//   console.log(year + " is not a leap year")
// }


// console.log("4. Sum of Natural Numbers")

// const n=5
// let sum=0

// for(let i=1;i<=n;i++)
// {
//     sum += i
// }
// console.log(n)
// console.log(sum)


// console.log("5. Factorial of a Number")

// function fact(n)
// {
//     let a=1

//     for(let i=1;i<=n;i++)
//     {
//         a*=i;
//     }
//     return a
// }
// console.log(fact(5))


// console.log("6. Print Multiplication Table")

// const a=5

// for(let i=1;i<=10;i++)
// {
//     console.log(`${a}*${i}=${a*i}`)
// }


// console.log("7. Reverse a number")

// let num = 1234;
// let reversed = 0;


// while (num > 0) 
// {
//   reversed = reversed * 10 + (num % 10)
//   num = (num - (num % 10)) / 10
// }

// console.log(reversed);


// console.log("8. Palindrome Check (Number)")

// const number = 121;
// let reversed = 0;
// let temp = number;

// while (temp > 0) 
// {
//     let digit = temp % 10
//     reversed = reversed * 10 + digit
//     temp = (temp - digit) / 10
// }

// if (number === reversed)
// {
//     console.log(number + " is a Palindrome")
// }
// else 
// {
//     console.log(number + " is NOT a Palindrome")
// }

// console.log("9. Check Prime Number")

// let num = 5
// let count = 0


// for(let i = 0; i<= num; i++)
// {
//     if(num %i === 0)
//     {
//         count++
//     }
// }


// if(count === 2)
//     console.log("Prime")
// else
//     console.log("Not prime")

//console.log("10. Count Digits in a Number")
// let num = 5023
// let count = 0
// while (num > 0) {
//   count++
//   num = (num - num % 10) / 10
// }
// console.log(count)

// console.log("11. Sum of Digits")

// let num = 123
// let sum = 0
// while (num > 0) {
//   sum = sum + num % 10;          
//   num = (num - num % 10) / 10    
// }
// console.log(sum)

// console.log("13. Generate Fibonacci Series ")

// let n = 5
// let a = 0, b = 1, c

// for (let i = 0; i < n; i++) {
//   console.log(a)
//   c = a + b
//   a = b
//   b = c
// }

// console.log("14.  Check Vowel or Consonant  ")

// let char = 'v'

// if (
//   char === 'a' || char === 'e' || char === 'i' ||
//   char === 'o' || char === 'u' ||
//   char === 'A' || char === 'E' || char === 'I' ||
//   char === 'O' || char === 'U'
// ) 
// {
//   console.log("Vowel")
// } 
// else 
// {
//   console.log("Consonant")
// }


//console.log("15. Simple Calculator ")
// let a = 4
// let b = 5
// let val = '+'


// if(val === '+')
//   console.log(a+b)
// else if(val === '-')
//   console.log(a-b)
// else if(val === '*')
//   console.log(a*b)
// else
//   console.log(a/b)


//console.log("16.Find GCD (HCF) ")

// let a = 20
// let b = 28
// let temp

// while (b != 0)
// {
//   temp = b
//   b = a % b
//   a = temp
// }

// console.log(a)

//console.log("17.  Check Perfect Number ")

// let num = 28
// let sum = 0

// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     sum += i
//   }
// }

// if (sum === num) 
// {
//   console.log("Perfect")
// }
// else
// {
//   console.log("Not Perfect")
// }



//console.log("18. Print all Divisors")

// let num = 10;

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }


//console.log("19. Print all Divisors")

// let num=-1
// if (num > 0) {
//     console.log("Positive")
//   } else if (num < 0) {
//     console.log("Negative")
//   } else {
//     console.log("Zero")
//   }
  
//console.log("20 . Print all Divisors")

// let a = 2
// let b = 3


// console.log(a ** b)


//-------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

//practice 22-july
//using import and add one file "add.js"
// import add from "./add.js"
// console.log(add(11,22))


//packages/libraries
//modules-path


// import path from "path"
// const path = require("path")
// console.log(path.basename("/myfile.txt"))
// console.log("director name",__dirname)

// console.log("full path",path.resolve(__dirname,"myfile.txt"))


//modules-moment

//print current date and time

// const moment = require("moment")

// console.log("current date and timne",moment().format("yyyy-mm-dd HH:mm:ss"))


//modules-fs

// const fs = require("fs")
// fs.writeFile("myfile.txt","helloworld",(err)=>{
//     if(err) throw err
// })
// console.log("file saved")

//method-2
// const fs = require("fs")
// // fs.writeFile("myfile.txt","helloworld",(err)=>
// // {
// //     console.log(err || "file saved")
// // })

// fs.readFile("myfile.txt","utf-8",(err,data)=>{
//     console.log(err || "file saved",data)
// })


//Practice 30-july


// const express = require("express");
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("hello");
// });

// app.listen(80,()=>{
// console.log("server is running at http://localhost:80/");
// });

//-----------------------------------------------------------------------



// const express = require("express");
// const app = express();
// app.use(express.json());

// //index (to get all the data)

// app.get("/",(req,res)=>{
//     res.send("all students!");
// });

// // show (to get all the specific data)

// app.get("/show/:id",(req,res)=>{
//     res.send(show student with id:${req.params.id});
// });

// // store (to add new data)

// app.post("/store",(req,res)=>{
//     res.send(insert ${req.body.name},${req.body.city} into database)
// })

// app.put("/update/:id",(req,res)=>{
//     res.send(update ${req.params.id}-${req.body.name},${req.body.city} into database)
// })

// app.delete("/delete/:id",(req,res)=>{
//     res.send("delete student")
// })

// app.listen(80,()=>{
//     console.log("server is running at http://localhost:80/");
// })


//controller (when use only controller there will be 2 files controller and index.js)

// const express=require("express");

// const {
//     index,
//     show,
//     store,
//     update,
// }=require("./controller/studentcontroller.js");

// const app=express();

// const port = 80;

// app.use(express.json());

// app.get("/",index);

// app.get("/show/:id",show);

// app.post("/store",store);

// app.put("/update/:id",update);

// app.listen(80,()=>{
//         console.log("server is running at http://localhost:80/");
//     })


//Route 

const express=require("express")
const studentrouter = require("./route/studentroute.js")

const app=express()

const port = 80

app.use(express.json())

app.use("/student",studentrouter)

app.listen(80,()=>{
         console.log("server is running at http://localhost:80/");
     })