// //---------------------------- 06 -----------------------


class Game {
    constructor(name, xp, weapon) {
        this._name = name;
        this.xp = xp;
        this.weapon = weapon;
    }

    get name(){
        return this._name
    }

    set name(value) {
        this._name = value
    }

    showName() {
        console.log(this._name)
    }

    showWeapon() {
        console.log(this.weapon, this.xp, this._name)
    }

    minusXp(xp) {
        console.log(this)
        this.xp = this.xp - xp
    }

    hit() {
        this.xp = this.xp - 50
    }
}


    
class Joni extends Game {
    constructor(name, xp, weapon, life = 101) {
        super(name, xp, weapon)
        this.life = life;
    }


    plusLife() {
        if (this.xp <= 150) {
            this.xp = this.xp + this.life
        }
    }

    change(weapon) {
        this.weapon = this.weapon = weapon
    }

    kick(player) {
        console.log('player', player)
        if (this.xp < player.xp) {

            console.error('warning !!!!!')
            player.xp = 1000
        }

    }

    play() {
        console.log('i am workink')
        plusLife()
    }
}







class Tommy extends Game {
    constructor(name, xp, weapon) {
        super(name, xp, weapon)
    }
}


const playerFirst = new Game('Panini', 100, 'bah')
const joni = new Joni('Jon', 200, 'hammer')
const tommy = new Tommy('Tommy', 300, 'knife')



joni.hit()
joni.showWeapon()

// joni.plusLife()

// joni.play()



tommy.hit()

joni.plusLife()

joni.kick(tommy)



// console.log('private',joni.name)

// joni.name = 'feeee'
// tommy.name = 'beeee'


console.log('joni', joni)
console.log('tommy', tommy)
console.log('first', playerFirst)












// const cat = {
//     name: 'Kissa',
//     age: '3'
// }


// const dog = Object.create(cat)

// dog.nickName = 'brutale'


// for (let key in dog) {
//     if (!dog.hasOwnProperty(key)) continue

//     console.log(key)
// }


// const Guest = function (name, room, small) {
//     this.name = name;
//     this.room = room;
//     this.small = small
// };



// //   console.log(Guest.prototype)


// Guest.prototype.result = function (amount) {
//     console.log(this.name, this.room, this.small, amount)
// }



// const showRes = new Guest('Hilton', 20, true)

// showRes.result('its working')


// console.log(showRes)




// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// }

// Hero.prototype.plusGame = function (amount) {
//     console.log(this.name, this.xp)
//     this.xp += amount
// }


// const hero = new Hero('killer', 23)

// hero.plusGame(100)

// console.log(hero)


// const Warrior = function(name, xp, weapon) {
//     Hero.call(this,name, xp)
//     this.weapon = weapon;
// }


// Warrior.prototype = Object.create(hero)
// Warrior.prototype.constructor = Warrior



// Warrior.prototype.attack = function(){
//     console.log(`${this.name} attack ${this.weapon} `)
// }



// const ben = new Warrior('ben', 121, 'sward')


// ben.attack()

// ben.plusGame(340)

// console.log(ben)














/*  
 * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих товаров
 * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
 * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
 */


// const Storage = function(items) {
//     this.items = items;

//     console.log('arr',this.items)


//     this.getItems = function() {
//         return  this.items
//     }

//     this.addItem = function(item) {
//         !this.items.includes(item) ? this.items.push(item) : console.log(false)
//     }

//     this.removeItem = function(item) {
//         this.items.splice(this.items.indexOf(item), 1)
//     }

// }


// const storage = new Storage([
//     "Нанитоиды",
//     "Пролонгер",
//     "Железные жупи",
//     "Антигравитатор"
//   ]);



//   const items = storage.getItems();
//   console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

//   storage.addItem("Дроид");
//   console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

//   storage.removeItem("Пролонгер");
//   console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]










// const dog = {fn: showName = function(){
//     console.log("hello")
// }};


// const cat = Object.create(dog)

// cat.name = 'Kot'

// console.log(cat.name, cat.fn)
// console.log(dog.name)


// const catDog = Object.create(cat)


// console.log(catDog.name)


// const Hero = function (name, hp, life) {
//     this.name = name;
//     this.hp = hp;
//     this.life = life

//     this.killBro = function (elem) {
//      console.log(elem)
//     }
// }


// Hero.prototype.minusHp = function (minus) {
//     // console.log(`${this.name} hit ${minus}`)
//     this.hp -= minus
// }

// const Villain = function (name, hp, weapon) {
//     Hero.call(this, name, hp)
//     this.weapon = weapon;
//     // this.showWeapon = function(){
//     //     console.log(` my name ${this.name} i have ${this.weapon} and i kill you !!! Herrrro`)
//     // }
// }



// Villain.prototype = Object.create(Hero.prototype)
// Villain.prototype.constructor = Villain


// Villain.prototype.showWeapon = function(){
//     console.log(` my name ${this.name} i have ${this.weapon} and i kill you !!! Herrrro`)
// }


// const hero = new Hero('Gorosh', 2000, 100000)
// const villain = new Villain('Bro', 30000, 'knife')


// //---------- hero ---------
// hero.minusHp(999)
// hero.killBro(villain)


// villain.minusHp(25555)


// //---------- villain -----------

// villain.showWeapon()

// // villain.minusHp(3333)

// villain.killBro(323232)




// console.log(hero)
// console.log(villain)




// class Clock {
//     constructor(){
//         this.count = this.count;
//     }

//     plusCount(){
//         setInterval(function(){
//             this.count++
//             console.log(this.count)
//         },1000)
//     }
// }

// const clock = new Clock()

// clock.plusCount()
