// const me = {
//     name: 'Maksim',
//     hobbies: 'run',
//     showHobbies() {
//         console.log(this.hobbies)
//     },
//     showThis() {
//         const thisFn = () => {
//             console.log(this)
//         }

//         thisFn()

//         console.log(this)
//     }
// }

// me.showHobbies()
// me.showThis()


// function showName() {
//     console.log('this', this)
//     console.log('this name', this.name)
// }

// const user = {
//     name: 'Bond'
// }


// user.show = showName



// console.log(user)

// user.show()



// const globalFn = {
//     name: 'Petya',
//     showThisGlobal() {
//         console.log(this)
//     }
// }


// function showGlobal(callback) {
//     callback()

// }


// showGlobal(globalFn.showThisGlobal)



// function hesWellcome(work, isActive) {
//     console.log(`hello my name is ${this.name} i like ${this.hobbies} i work ${work} and i realy active its : ${isActive}`)
// }



// const about = {
//     name: 'Maksim',
//     hobbies : 'run',
// }


// // about.showAbout = hesWellcome;


// // about.showAbout()


// hesWellcome.call(about, 'it', true)


// const shop = {
//      name : 'Ya',
//      salle : 5,
//      salleShop(product) {
//          this.salle +=1
//          console.log(`you ${this.name}, you sold ${product} `)
//      }
// }


// console.log(shop)
// shop.salleShop('Tv')
// shop.salleShop('Tvdsd')
// shop.salleShop('Tvd')
// shop.salleShop('Tvdsdsds')
// console.log(shop)








// const ShopConstructore =  function(name = 'meneger', salle = 0) {
//     this.name = name;
//     this.salle = salle;


//     this.sold = function(product) {
//         this.salle += 1;
//         console.log(`${this.name}  ${product}`)
//     }
// }



// const miniShop = new ShopConstructore('Pups', 3)

// miniShop.sold('playStation')
// miniShop.sold('playStationsdsds')
// miniShop.sold('playStationdsds')

// console.log(miniShop)


// const myName = {
//     name : 'Maksim',
//     findMe() {
//             console.log(this)
//             // const fn = () => {
//         //     console.log(this)
//         // } 

//         // fn()
//     }

// }



// function showN(callback) {
//     callback()
// }

// showN(myName.findMe.bind(myName))



// myName.newName = showN;

// myName.newName()

// showN.call(myName, 'Pasha', 5)


// myName.findMe()

// myName.newName()



// showN.call(myName)


// showThis(myName.findMe)



// function showThis(callback) {
//     callback()
// }


// function showThis() {
//     console.log(this)
// }


// const aboutMe = {
//     name: 'Maksim',
//     // showName() {
//     //     const newLocalThis = () => {
//     //         console.log(this)
//     //     }
//     //     newLocalThis()
//     // }

// }

// aboutMe.showName()



// aboutMe.newFn =showName;

// console.log(aboutMe)

// aboutMe.newFn()



// function showThis(callback) {
//     callback()

// }




// showThis(aboutMe.showName.bind(aboutMe))


// function showThis(kill, like) {
//     console.log(`${this.name} ${kill} ${like}`)
// }


// const aboutMe = {
//     name: 'Maksim',

// }


// aboutMe.showNew = showThis

// console.log(aboutMe)

// aboutMe.showNew()

// // console.log(aboutMe)

// showThis.apply(aboutMe,[ 'YES', true])


// const body = document.body;

// const Shop = function(name = 'your name', salle = 'salle') {
//     this.name = name;
//     this.count = 0;
//     this.salle = salle;
//     this.shoppingBaster = []
//     this.bonus = 0;

//     this.showName = function() {
//         this.name
//     }

//     this.solOneDay = function(product) {
//         this.count++
//         // console.log(`you sold in a day ${this.count} products ${product}`)
//         this.shoppingBaster.push(product)
//         // console.log(this.shoppingBaster)
//     }

//     this.cashierBonus = function() {
//         if(this.shoppingBaster.length > 3) {
//             this.bonus = 120
//         }
//     }

//     this.aboutCashier = function() {
//         // body.innerHTML = `<ul><li>${this.name}</li><li>${this.count}</li><li>${this.bonus}</li></ul>`
//         console.table(`${this.name} ${this.count} ${this.bonus}`)
//     }



// }



// const shop = new Shop('Maksim')

// shop.showName()

// shop.solOneDay('tv')
// shop.solOneDay('frize')
// shop.solOneDay('laptiop')
// shop.solOneDay('smartfone')




// shop.cashierBonus()

// shop.aboutCashier()


// const cashierPolina = new Shop('Polina')


// cashierPolina.solOneDay('tv')
// cashierPolina.solOneDay('frize')


// cashierPolina.aboutCashier()










// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function (a, b) {
//     const mass = []
//     // let objects = {}
//     let namesComb;
//     let pricesComb;
// for (let namesKey of a) {
//     // console.log(namesKey);
//     namesComb = namesKey;
// }
// for (let pricesKeys of b) {
//     // console.log(pricesKeys);
//     pricesComb = pricesKeys;
// }
// objects[`${namesComb}`] = `${pricesComb}`;
// // mass.push(objects)
// console.log(objects)
// // console.log(mass)


//     for(let i = 0; i < a.length; i++) {
//         namesComb = a[i];
//         pricesComb = b[i]
//         objects = [namesComb, pricesComb]
//         console.log(objects)
//     }

// }

// combine(names, prices);
















//------------------------------------ start day ------------------- 




// const marina = {
//     name : 'Marina',
//     count : 0,
//     arr : [],
//     showProducts(product) {
//         this.count++
//        console.log(`${this.name} sold ${product}`)
//        this.arr.push(product)
//     }
// }

// marina.name = 'Zina'

// marina.showProducts('Tv')
// marina.showProducts('hp')
// marina.showProducts('PlayStation')

// console.log(marina)


const prod = {
    milk: 12,
    chocolate: 6,
    bacon: 12,
    cheese: 56,
    cola: 10,
    pepsi: 8,
    tv: 1000
}

// const hesNum = localStorage.getItem('sallary')
// console.log(hesNum)

// const Shop = function (name, prod) {
//     this.name = name;
//     this.sold = [];
//     this.count = 0;
//     this.sallary = 0;
//     this.prod = prod;
//     this.arrProd = [];
//     this.matchSallary = localStorage.getItem('sallary')

//     this.showName = () => {
//         console.log(this.name)
//     }

//     this.soldProduct = function (product) {
//         this.count++
//         this.sold.push(product)
//         this.arrProd.push(this.prod[product])

//     }

//     this.bonus = function () {
//         console.log(this.count)
//         this.sold.length >= 5 ? this.sallary += this.sold.length * 100 : null
//     }

//     this.totalCount = function () {
//         // localStorage.setItem('sallery',this.sallaryy)
//     }



// }


// const zina = new Shop('Zina', prod)
// // zina.soldProduct('tv');
// zina.soldProduct('chocolate');
// zina.soldProduct('bacon');
// zina.soldProduct('cheese');
// zina.soldProduct('cola');
// zina.soldProduct('pepsi');


// zina.showName()
// zina.bonus()
// zina.totalCount()


// console.log(zina)

// const marina = new Shop('Marina')

// marina.soldProduct('Tv');
// marina.soldProduct('Milk');
// marina.soldProduct('Milk');
// marina.soldProduct('Milk');
// marina.soldProduct('Milk');



// marina.showName()
// marina.bonus()




// const galya = new Shop('Galya')

// galya.soldProduct('Tv');
// galya.soldProduct('Milk');
// galya.soldProduct('Milk');
// galya.soldProduct('Milk');
// galya.soldProduct('Milk');
// galya.soldProduct('Milk');
// galya.soldProduct('Milk');


// galya.showName()
// galya.bonus()




// const arrShop = []; //mass

// arrShop.push(zina)


// console.log(arrShop)


// let summCount = 0;
// for (let key of arrShop) {
//     for (let i of key.arrProd) {
//         summCount += i
//     }
//     // console.log(key.arrProd)
// }

// localStorage.setItem('sallary', summCount)

// // console.log(summCount)




// // localStorage.clear()


// const animal = {
//     name: 'barbos',
//     eats: true
// }

// const second = Object.create(animal)

// second.nick = 'lizun'

// console.log(animal)
// console.log(second.hasOwnProperty(animal))










// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];



//     for(let key of fruits) {
//         if(key.isFresh) {
//             console.log(key)
//         }
//     }

// for(let key of fruits) {
//     console.log(key.name)
// }





//  const fruits = {
//     name: 'apples',
//     quantity: 200,
//     isFresh: true
// }


// console.log(Object.keys(fruits))
// console.log(Object.values(fruits))


// const value = Object.entries(fruits)
// console.log(value)
// for(let key of value) {
//     console.log(key[0], key[1])
// }


