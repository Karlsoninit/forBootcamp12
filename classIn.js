'use  strict'

// class Game {
//     constructor(name, level = 1, armour = 100, hp = 1000) {
//         this._name = name;
//         this.level = level;
//         this.hp = hp;
//         this.armour = armour;
//     }
//     aboutPlayer() {
//         console.log(` I AM ${this.name} hp : ${this.hp} rrrrrrrrrrrr!`);
//     }

//     get name() {
//         return this._name
//     }

//     set name(value) {
//         this._name += value;
//     }

//     static show(first, second) {
//         console.log(first.hp = 0, first.armour = 0, first.level = 0)
//         console.log(second.hp = 0, second.armour = 0, second.level = 0)
//     }

// }





// const game = new Game('PaPam')
// console.log(game)

// game.name = 'dkfldfklkdfd'

// console.log(game.name)



// class Guldan extends Game {
//     constructor(name, level, hp, armour) {
//         super(name, level, hp, armour);
//         this.gun = 5;
//     }



// }


// class Bin extends Game {
//     constructor(name, level, hp, armour) {
//         super(name, level, hp, armour);
//         this.knife = 9;
//         this.life = 2000;
//     }

//     hit(player) {
//         if (Math.random() > .5) {
//             player.hp -= 400
//         } else {
//             this.hp -= 400
//         }
//     }

//     pluslife() {
//         if (this.hp < 700) {
//             this.hp = this.hp + this.life
//         }
//     }

//     notDied() {
//         this.pluslife()
//         this.level += 100
//     }


// }



// //----------------- Guldan --------

// const guldan = new Guldan("Guldan");

// guldan.aboutPlayer();


// //----------------- Bin ------------------

// const bin = new Bin("Bin");

// bin.aboutPlayer();

// // bin.hit(guldan)


// bin.hit(guldan)

// bin.notDied()



// Game.show(bin, guldan)







// /*
//   Напиши функцию getTotal(products, order), где 
//   products - объект со свойствами "имя продукта":"цена за единицу"
//   order - объект со свойствами "имя продукта":"количество единиц".

//   Функция возвращает общую сумму стоимости всех продуктов заказа.

//   Используй метод reduce.
// */

// // function getTotal(products, order) {
// //     const result = [];
// //     for (let key in order) {
// //         // console.log('o',order[key])
// //         // console.log('p',products[key])
// //         result.push(order[key] * products[key])
// //     }
// //     // console.log(result)
// //     return result.reduce((acc, el) => acc + el, [])
// // }


// // const products = {
// //     bread: 10,
// //     milk: 15,
// //     apples: 20,
// //     cheese: 30,
// //     chicken: 40
// // };

// // const orderA = {
// //     bread: 2,
// //     apples: 4,
// //     chicken: 1
// // };

// // const orderB = {
// //     bread: 1,
// //     milk: 2,
// //     cheese: 2,
// //     apples: 1
// // };

// // const orderC = {
// //     bread: 2,
// //     cheese: 2
// // };

// // // Вызовы функции для проверки
// // console.log(getTotal(products, orderA)); // 140
// // console.log(getTotal(products, orderB)); // 120
// // console.log(getTotal(products, orderC)); // 80





































// console.log(guldan);
// console.log(bin);


//-------------------------------



const scientist = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];


// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.

const wosBorn = scientist.reduce((acc, el) => el.year < acc.year ? acc : el)

console.log(wosBorn)


// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С

const life = scientist.filter(el => el.last[0] !== 'C')
console.log(life)
// 10) Видалити з масива всіх вчених імя яких починається на A


// Используем find чтобы пройти по базе данных users и найти пользователя по идентификатору id. Идентификаторы всегда уникальны.

// const users = [
//   { id: '000', name: 'Mango', isActive: true, num: 9 },
//   { id: '001', name: 'Poly', isActive: false , num: 4  },
//   { id: '002', name: 'Ajax', isActive: true , num: 6 },
//   { id: '003', name: 'Chelsey', isActive: false , num: 1 },
// ];

// Для каждого элемента коллекции (user) проверим поле id.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения


// const arr = [12,24,45,7,887,78,64,5]



// const result = users.reduce((acc, el) => acc += el.num, 0)

// console.log(result)

// console.log(10 + +'9')


// const sort = scientist.map((el) => el)

// console.log(sort)


// const born = scientist.filter(el => el.year > 1799 && el.year <= 1899)

// console.log(born)

// const years = scientist.reduce((acc, el) => acc + (el.passed - el.year), 0)

// console.log(years)


// const sort = scientist.sort((a,b) => a.first > b.first )

// console.log(sort)