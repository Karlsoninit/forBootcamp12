// const fetch = require('node-fetch');


// function add() {
//     console.log('one')
//     foo()
// }


// console.log('start')

// function foo(a) {
//     console.log('do')
// }


// const hesUsers = prompt('enter numbers')


// if(hesUsers !== null){

// } else {
//     console.log('sorrryyyyyyyyy')
// }





/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];

// let price = 0;


// let count = 0;
// while(count < numbers.length) {
//     count += 1; 
//    price = count * 10
// }

// console.log(price)


// const str  = 'dsd';

// console.log(typeof str)

// if( typeof str === 'string') {
//     console.log(true)
// } else {
//     console.log(false)
// }










// function start() {
//     count = 123

//      function add() {
//         count++
//         console.log(count)
//     }
//     return add

// }


// const first = start()

// first()



// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];


// const isLoginValid = function (login) {
//     return login.length >= 4 && login.length <= 16 ? true : false
// };

// const isLoginUnique = function (allLogins, login) {

//     result = allLogins.includes(login);

//     return result;
// };

// const add = function (allLogins, login) {


//     if (isLoginValid(login)) {
//         if (!isLoginUnique(allLogins, login)) {
//             console.log('Логин успешно добавлен!')
//             logins.push(login)
//         } else {
//             // console.log(login)
//             console.log('Такой логин уже используется!')
//         }

//     } else {
//         console.log('Ошибка! Логин должен быть от 4 до 16 символов')
//     }
// };





// add(logins, 'Ajax'); // 'Логин успешно добавлен!'
// add(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// add(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// add(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'


//   console.log(isLoginUnique(logins, 'Man'))

// console.log(logins)


// const getUsersPost = async () => {

//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const users = await result.json();
//         return users;
//     } 
//     catch (err) {
//         throw err;
//     }
//     // console.log(result)
// }

// // getUsersPost()

// getUsersPost()
//     .then( user => {
//      const res = user.map(el => console.log(el.title))
// })
//     .catch( error => console.log('eeeeeeeeeeeer', error))



// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then( response => response.json())
//     .then( data => console.log(data))



// function third(name) {
//     return name;
// }

// function second() {
//     return third('Dexter')
// }

// function first() {
//     const name = second()
//     console.log('my name is ' + name)
// }


// first()


// function shooters () {
//     const prom = new Promise((resolve, reject) => {
//         console.log('shooot !!!')
//       setTimeout(function() {
//             Math.random() > .5 ? resolve('выиграл') : reject('проигралллл')
//         },1000)
//     })

//     return prom;
// }


// function sayMeAbout() {
//     console.log('i now about it !!')
// }



// shooters()
//     .then( win => {
//         sayMeAbout()
//         console.log(win)
//     })
//     .catch( error => console.log(error))



// shooters((win) => console.log(win), (faile) => console.log(faile))





// class Get  {
//     constructor(url){
//         this.url = url;
//     }
//     async getUsers(id) {
//         try {
//             let response = await fetch(`${this.url}/posts/${id}/sd`)
//             let data = await response.json();
//             return data;
//         } catch (error) {
//             throw new Error('не удалось получить данные от пользывателя')
//         }
//     }

// async getPosts(userId) {
//     try {
//         let response = await fetch(`${this.url}/posts?userId=${userId}`)
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         throw new Error('не удалось получить посты')
//     }
// }

// async getCommits(postId) {
//     try {
//         let response = await fetch(`${this.url}/comments?postId=${postId}`)
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         throw new Error('не удалось получить коментарии')
//     }
// }
// }


// (async  () => {
//     const get = new Get('https://jsonplaceholder.typicode.com')
//     try {
//         let show = await get.getUsers(1);
//         // let posts = await get.getPosts(show.id);
//         // let commits = await get.getCommits(posts[0].id)
//         // commits.forEach(el => console.log(el))
//         console.log(show)

//     } catch (error) {
//         console.log(erorr)
//     }

// })()



/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает 
 * эти два массива и возвращает массив объектов со свойствами name и price. 
 */

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// function combine(names, prices) {
//     const mass = []
//     for(let i = 0; i < names.length; i++) {
//         const price =  prices[i]
//         const name =  names[i]
//         mass.push({name, price})

//     }
//     return mass
// }




// const products = combine(names, prices);

// console.log(products); // массив объектов со свойствами name и price





//   const motel = {
//     name: 'palm beach',
//     stars: 7,
//     capacity: 10,
//     girl : true,
//   };

// const  {name, ...rest} = motel

// console.log(name)
// console.log(rest)

// console.log(motel)



// const rgb = [200, 255, 100];

// const [red, green, blue] = rgb;

// // console.log(red)


// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];

//   function sort (arr, find) {
//       const mass = []
//     let get;
//     for(let key of arr) {
//         get = find(key)

//         if(get) {
//             mass.push(key)

//         }
//     }

//     return mass;

//   }

//   const resultFindFruit = sort(fruits, (el) => el.isFresh)

//   console.log(resultFindFruit)



//=============================================================



// const about = {
//     name: 'Maksim',
//     work: {
//         first: 'salle',
//         second: {
//             it: true,
//             salle: false
//         },
//         mass: [3, 4, 5, 7, 8, ]
//     }
// }


// delete about.work.first;


// const showUser = prompt('enter')


// alert(about[showUser])


// console.log(about)


// const arr = about.work.mass;

// console.log(arr)

// let samm = 0;


// let result;
// for (let key of arr) {
//     result = samm += key;
// }




// alert(result)

//-----------------------------



// const aboutStudent = [{
//         name: 'Maksim',
//         id: '1',
//         work: {
//             first: 'salle',
//             second: {
//                 it: true,
//                 salle: false
//             },
//             mass: [3, 4, 5, 7, 8, ]
//         }
//     },
//     {
//         name: 'Gena',
//         id: '2',
//         work: {
//             first: 'salle',
//             second: {
//                 it: true,
//                 salle: false
//             },
//             mass: [3, 4, 5, 7, 8, ]
//         }
//     },
//     {
//         name: 'Bogdan',
//         id: '3',
//         work: {
//             first: 'salle',
//             second: {
//                 it: true,
//                 salle: false
//             },
//             mass: [3, 4, 5, 7, 8, ]
//         }
//     }
// ]




// console.log(aboutStudent)


//---------------------------------------



// console.log(aboutBogdan)



// const name = 'Bogdan',
//     age = 21;


// const aboutBogdan = {
//     name,
//     age,
//     showUser() {
//        return  aboutBogdan.name
//     }
// }




// console.log(aboutBogdan)


// console.log(aboutBogdan.showUser())



//-------------------------- 

// const school = {
//     mat : 23,
//     eng : 19,
//     his: 43,
//     geog: 12,

// summ() {
//     let arrRes = [];
//     let count = 0;
//     let result;
//     const arr = Object.values(school);
//     for(let serch of arr) {
//         console.log(serch);
//        result = count += serch;
//     //    console.log(result)
//     }
//     return result;
// }
// }




// console.log()
// console.log(Object.keys(school))


// console.log(school.summ())


// for(let key in school) {
//     console.log(school[key])
// }



// const {mat, eng, his, geog} = school;


// console.log(eng)

// console.log(school)

//---------------------------


// const schoolOne = {
//     mat : 23,
//     eng : 19,
//     his: 43,
//     geog: 12,
// }



// const schoolTwo = {
//     mat : 63,
//     eng : 1,
//     his: 430,
//     geog: 19,
// }


// console.log(Object.entries(schoolTwo))

// // const newObj = {...schoolTwo, ...schoolOne}
// // console.log(newObj)



// // const {mat, eng, his, geog, song } = schoolTwo;


// // const obj = {...schoolOne, mat,his,...schoolTwo}

// // console.log(obj)


// // const color = [100, 150, 200]



// // const [red, green, blue ] = color;


// // console.log(red)
// // console.log(blue)


// //---------------------------- 


// // const hesName = +prompt('enter name')

// const fruits = [{
//         name: 'apples',
//         quantity: 200,
//         isFresh: true,
//         id: 1
//     },
//     {
//         name: 'grapes',
//         quantity: 150,
//         isFresh: false,
//         id: 2
//     },
//     {
//         name: 'bananas',
//         quantity: 100,
//         isFresh: true,
//         id: 3
//     },
// ];


// const find = (arr, callback) => {
//     let result;
//     const mass = [];
//     for (let key of arr) {
//         result = callback(key)
//         if (result) {
//             mass.push(key)
//         }
//     }
//     return mass;

// }

// // const fn = (el) => el.name;


// function fn(el) {
//     return el.id;
// }



// console.log(find(fruits, fn))


// //------------------


// const name = 'Bogdan';

// const rand =  Math.floor(Math.random()*6)


// const a = {
//     name: name,
//     id: rand,
//     work: {
//         first: 'salle',
//         second: {
//             it: true,
//             salle: false
//         },
//         mass: [3, 4, 5, 7, 8, ]
//     },

//     showName() {
//         console.log('this --------', this)
//         // console.log(a.id, a.work.first)
//     }
// }


// a.showName()

// console.log(a)



// var str =['abcde', 'bbcde', 'zbcde'];
// var newArr = [];

// let res;
// for(let key of str) {
//     res = key[0].toUpperCase() + key.slice(1)
//     console.log(res)
// }




// const notepad = {
//     id: '',
//     title: '',
//     body: '',
//     priority: {
//         LOW: 0,
//         NORMAL: 1,
//         HIGH: 2,
//     }
// }















/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasks = {
//     ann: 29,
//     david: 350,
//     helen: 1,
//     lorence: 99
// };


// let num = 0;
// let name;
// for (let key in tasks) {
//     //   consol0e.log(tasks[key])

//     if (num < tasks[key]) {
//         num = tasks[key]
//         name = key
//     }
// }

// console.log(name, num)






// function getDivisors(num) {
//     let arr = [];
//     for(let i = 1; i <= num; i++) {
//       if(num % i === 0) {
//         arr.push(i);
//       }
//     }
//     return arr;
//   }

//  console.log( getDivisors(1000))




//     function min(num) {
//         const arr = []
//         for(let i = 0; i <= num; i++) {
//             if(num % i === 0 ) {
//                 if(i >= 50) {
//                     arr.push(i)

//                 }
//             }
//         }
//         return arr;
//     }


// console.log(min(900))