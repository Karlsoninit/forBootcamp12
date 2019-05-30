'use strict'

// const arr = ['one', 'two', 'three']
// const mass = []

// for(let key of arr) {
//     if(key.length >= 4) {
//         mass.push(key)
//     }
// }

// console.log(mass)


// const message = "Welcome to Baha!";

// const spl = message.split(' ')
// let longest = 0;
// let long;
// console.log(spl)

// for(let i = 0; i < spl.length; i++) {
//     if(spl[i].length > longest) {
//         longest = spl[i].length
//         // long = spl[i];
//         console.log(spl[i])
//     }
// }


// for(let key of spl) {
//     if(key.length > longest) {
//         longest = key.length
//         long = key
//     }

// }

// console.log(long)


// for(let i = 0; i < spl.length; i++) {
//     if(spl[i].length > longest) {
//         longest = spl[i].length
//         console.log(longest)
//         long = spl[i]
//         console.log(long)
//     } 
// }

//  

// const newFruit = fruits.slice();

// console.log('old',fruits)
// console.log(newFruit)

// newFruit.splice(2,1, 'pine Apple')
// console.log(newFruit)

// console.log(newFruit)

// const show = newFruit.splice(1,3)
// console.log(newFruit)
// console.log(show)


// let clients = 18;
// const maxClients = 27;

// while(clients < maxClients){
//     console.log(clients)
//     clients++
// }



// const newMass = ['one', 'two', 'three']
// let i = 0;
// while(i < newMass.length) {
//     console.log(newMass[i])
//     i++
// }

// const newArr = [];
// let start = 0

// while(start < 10) {
//     newArr.push(start)
//     start++
// }

// console.log(newArr)


// const clients2 = ['Mango', 'Ajax', 'Poly'];

// for(let i = 0, max = clients2.length; i < max; i += 1) {
//   console.log(clients2[i]);
// }

// const num = 10;

// for(let i =  0; i < num; i++) {
//     console.log(i)
//     if(i % 2 === 0) continue
//     console.log(i)
// }

// const name = 'Ajax';

// for(let key of clients2) {
//     if(key === name) continue
//     console.log(key)
// }


// let counter = 0;
// let res;
// let arrStart = 0;
// const arrCount = [];
// do{
//     const hesNum = Number(prompt('enter numbers', counter));

//     counter++


//     if(!arrCount.includes(hesNum)) {
//         arrCount.push(hesNum)
//     };

// }while(counter < 10)


// for(let key of arrCount) {
//   arrStart += key

// }
// arrCount.push(res)  


// console.log(arrCount)

// let a = ['one', 'two'];
// let b = ['three']

// const j = a.concat(b)

// console.log(j)

// const cl = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// const r = cl.splice(2)
// console.log(r)
// console.log(cl)



//--------------  mass -------



// const arr = [23,34,56,67,445,677,865,4,455,6576];

// arr.length = 5;

// console.log(arr)


// const message = "Welcome to Bahamas!";

// const newMasseg = message.split(' ')


// console.log(message)
// console.log(newMasseg[1])


// const clients = ["Mango", "Poly", "Ajax"];

// console.log(clients.join('.'))


// console.log(clients.indexOf('Pol'))

//------------ pop push shift unshift


// const clients = ["Mango", "Poly", "Ajax"];



// // clients.length = 100



// clients.push('Bond', 'Maksim')


// clients.pop()


// clients.unshift('Maksim')


// clients.shift()
// console.log(clients)

//------------------------ slice ------------


// const one = Number(prompt('num one'));
// const two = Number(prompt('num two'));


// const clients = ["Mango", "Poly", "Ajax", 'Bond', 'New', 'MAksim', 'dsd'];




// const Client = clients;

// console.log(clients.slice())

// console.log(Client)

// console.log(clients)
// const newClients = clients.slice()



// console.log('old',clients)
// console.log('new',newClients)


// console.log( typeof `${one}`)


// alert(clients.slice(one,two))

//--------- splice ---------------



// const client = ["Mango", "Poly", "Ajax", 'Bond', 'New', 'MAksim', 'lsd'];


// const clients = client.slice()


// const delClients = clients.splice(2, 0, 'one', 'two')


// console.log(delClients)
// console.log(clients)
// console.log(client)

//------------- concat ----------

// const client = ["Mango", "Poly", "Ajax", 'Bond', 'New', 'MAksim', 'lsd'];


// const newMass = [12,12,43,65, 32,32].reverse().sort().reduce((acc, el) => acc + el, 0)
// console.log(newMass)

// const a = 10;

// console.log(newMass.concat(client))

// console.log(Array.isArray(newMass))
// console.log(Array.isArray(a))


// const arr = [23,34,56,67,445,677,865,4,455,6576];
// const mass = [];

// for(let i = 0; i< arr.length; i++) {
//     if( arr[i] > 50) {
//         mass.push(arr[i])
//     }
// }
// console.log(mass)






//---------------- while --------


// let a =1970;



// while( a <= 2016 ) {
//     console.log(a)
//     a  = a + 1
// }


//------------- do while --------


// let count = 0;

// const arr = [];

// do{
//     const hesNumbers = prompt('enter numbers', count)

//     if(hesNumbers > '') {
//        count++ 
//         arr.push(hesNumbers)
//     }


// }while(count < 3)


// for(let key of arr) {

// }


//---------------- for --------------




// const arr = [23,34,56,67,445,677,865,4,455,6576,32,45,76,8];
// let num = 0;

// for(let i = 0;i < arr.length; i++ ){
//     // console.log(arr[i])
//     if(num < arr[i]) {
//         num = arr[i]
//     }
//     // console.log('old',arr[i])
//     // if(arr[i] > 50) {
//     //     console.log(arr[i])
//     // }
//     // arr[i] > 50? console.log(arr[i]) : null;

// }

// // console.log(arr)
// console.log(num)


// const word = ['if', 'you', 'ca', '?']
// let res;

// const about = 'A brief history of JavaScript. JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was inspired by Java, Scheme and Self. ... First, they started a standardization process to prevent Microsoft gaining control of the JavaScript language'

// const rev = about.split(' ')

// console.log(rev)

// let arr = [];


// for(let key of rev) {
//     // console.log(key)
//     if(num < key.length) {
//          num = key.length;
//          res = key;
//     }
// }

// console.log(num)
// console.log(res)


// for(let key of rev) {
//     if(key.length <= 5) {
//         arr.push(key)
//     }
// }

// console.log(arr)

// let count = 0;
// const arr = [];

// do{
//     const hesNumbers = prompt('enter number');

//     if(hesNumbers !== null) {
//         count +=1;
//         arr.push(Number(hesNumbers))
//     }

// }while(count < 3)

// let start = 0;
// let result;
// for(let num of arr ) {
//     result = start  = start + num
// }

// console.log(result)       


// let i = 'dsd';

// console.log(isNaN(i))

// const word = prompt('sds')
// // if(word !== null) {

// // }

// const nums = [23,2,24]

// if(!isNaN(word) && word !== null) {
//     nums.push(Number(word))
// } else{
//     console.log('only numbers !!')
// }

// // console.log(nums)



// const client = ["Mango", "Poly", "Ajax", 'Bond', 'New', 'MAksim', 'lsd'];

// const name = 'Bond'



// for( let i = 0; i < client.length; i+=1) {
//     if(client[i] === name) continue
//     console.log(client[i])
// }



// const arr = [1,33,56,78,9, []]




// const users = ["Mango", "Poly", "Ajax", "Chelsey"];


// const userToDelete = "Ajax";

// for(let key of users) {
//     if( key === userToDelete) {
//         const newArr = users.indexOf(key)
//         users.splice(newArr,1)
//         // delete users.userToDelete
        
//     }
// }

// console.log(users)


// delete users[0]
// console.log(users)



// const words = Number(prompt('enter'))

  
// if( words < 15 ) {
//     console.log('1')
// } else if ( words > 15 && words < 30) {
//     console.log( '2')
// } else if ( words > 30 && words < 45) {
//     console.log( '3')
// }


