// function add() {
//     let count = 0;
//     const plus = Array.from( arguments);
//     console.log(plus)
//     for(let key of plus) {
//         count += key;
//     }
//     return count
// }

// console.log(add(1,2,3,4))




// const filterFromArray = function(mass,...arr) {
//     const box = []
// //     console.log(mass)
// //   console.log(arr)

// if(!arr.includes(mass)) {
//     box.push()
// }



// for(let key of mass) {
//     // console.log(key)
//     if(!arr.includes(key)){
//         box.push(key)
//     }
// }

//     return box;
// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]




// const arr = [2, 5, 9, 15, 0, 4]
// let result = 0;
// for (let value of arr) {
//     if (value % 2 === 0){
//         result += value

//     }
// }

// console.log(result)



// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers(...rest) {
//     for(let key of rest) {
//         if(!uniqueNumbers.includes(key)) {
//             uniqueNumbers.push(key)
//         }
//     }
//     return uniqueNumbers;
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


// (function(a){
//     console.log(a)
// }(1))


// function show(one, two) {
//     // console.log(one)
//     // console.log(two)

//     const res = two(2,3,4,5)
//     console.log(res)
//     const result = one(10, res)
//         console.log(result)
// }

// show(
//     function(a, b){
//     return a + b;
// },
// function(...rest){
//     const res = rest.reduce((acc, el) => acc + el, 0)
//     return res;
// })





// const add = function(a, b) {
//     return a + b + globalValue;
//   };

//   const globalValue = 10;

//   console.dir(add);

//   console.log(add(5, 15));

//   let perem = 1;



//   const arrNum = ['27', '39', '404545', '50808']

//   console.log(arrNum[0])


// console.log(arrNum[0][0])


// for(let key of arrNum) {
//     // console.log(key[0], key)

//     if(key[0] === '4' || key[0] === '3') {
//         console.log(key)
//     } else {
//         console.log('else',key)
//     }

// }



//   const rand = Math.floor(Math.random()*arrNum.length)

//   delete arrNum[rand]

//   console.log(arrNum)




//Задание 8 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num


// let count = 0


// for(let n = 1000; n > 50; n /=2) {
//     // console.log()
//     count++;
//     console.log(n, count)
// }












//   console.log('---->',arrNum[arrNum.length -1])

//   for(let key of arrNum) {

//     //   console.log(key)

//       if(key[0] === '2' || key[0] === '5') {
//           console.log(key)
//       }
//   }

// const showArr = arrNum.split('')

// console.log(showArr)

// // for(let key of showArr) {
// //     console.log(key)
// // }



// function filter(arr, element) {
//     let result = [];
//     for(let key of arr) {
//         const passed = element(key) 
//         if(passed > 120) {
//          result.push(passed + 100)
//         }
//     }
//     return result;
// }

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ]


//   console.log(fruits[0].name)

// const result = filter(fruits, el => el.quantity)
// console.log(result)

// for(let key of result) {
//     // console.log(key.red)
//     // const show =  key.reduce((acc, el) => acc + el, 0)
// }

// console.log(show)

//------------- function ----------- 



// const summ = add(23, 23, 65, 68, 89, 09, 34)

// console.log(summ)


// function add() {
//     const arr = Array.from(arguments)
//     // console.log(arguments)
//     // console.log(arr)
//     let count = 0;
//     for (let key of arr) {
//         count += key;
//     }
//     return count
// }


// function minus(...arg) {
//     console.log(arg)

// }





// const result = minus(6, 7, 3, 2, 5, 'sdsd', 'sfdgfdf')


// console.log(Number.isNaN(Number('dsds')))



// const res = (...arg) => console.log(arg);

// res(34, 34, 6767, 432, 32)








// let x = 10;

// function restX (a, b) {
//     // let x = 60;
//     return a - b - x
// }

// console.log(restX(78,8))

// // console.log(x)








// function fnB() {
//     console.log('Выполняется [fnB]');
// }

// function fnA() {
//     console.log('Начала выполняться [fnA]');
//     fnB();
//     console.log('Продолжила выполняться [fnA] после выхода из [fnB]'); 
// }


// console.log('Начал выполнение [global]'); 
// fnA();
// console.log('Продолжил выполняться [global] после выхода из [fnA]'); 



// const num = 121;


// function summ(max, min) {

//     const result =  max(44, 34, 34, 23)
//     console.log(result)
//    const showResult =  min(result, num)
//     console.log(showResult)
// }

// summ(
//     function (...arg) {
//         let count = 0;
//         for (let key of arg) {
//             count += key;
//         }
//         return count;
//     },
//     function (a,b) {
//         return a + b;
//     })


//     function cry() {
//         console.log('cry')
//     }


    // function smile() {
    //     cry()
    // }

    // smile()



    // function fn (callback) {
    //     callback
    // }



    // fn(cry())







    // (function(a, b){
    //      console.log(a+ b);
    // })(12,3)




//     function add(a, ...arg) {
//         const arr = []
//         for(let key of a) {
//          if(!arg.includes(key)){
//              arr.push(key)
//          }
//         }

//         return arr;
//     }

//   const result = add([2,3,7,8], 4,7,2)
// console.log(result)


// const arr = [2,3,4,5]

// console.log(arr.includes(3))





/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(mass, ...arr) {
//   for(let key of mass) {
//       if(!arr.includes(key)) {
//           console.log(key)
//       }
//   }
// }; 



// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]






/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers(...arg) {
//     console.log(arg)
//     for(let key of arg) {
//         if(!uniqueNumbers.includes(key)) {
//             uniqueNumbers.push(key)
//         }
//     }
//     return uniqueNumbers;
// }



// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// // addUniqueNumbers(12, 2, 3, 19);
// // console.log(
// //   uniqueNumbers
// // ); // [2, 1, 4, 9, 3, 12, 19]

// // addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// // console.log(
// //   uniqueNumbers
// // ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]



// const uniq = [2, 1, 4, 9, 3, 12, 19, 5, 8]


// console.log(uniq.includes(19))