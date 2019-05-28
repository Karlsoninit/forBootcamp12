'use strict'







// let arr = []
// let counter = 0;

// do{
//    const hesNumber =  +prompt('enter you number')
//     counter++
//     arr.push(hesNumber);
// }while(counter < 3 )

// let num = 0;
// let sum;

// for(let i = 0; i < arr.length; i++) {
//     sum = num+= arr[i]
// }

// if(sum <= 0) {
//     console.log('you have 0')
// } 

// console.log(sum)


// const res = 0.1 + 0.2;

// console.log( +res.toFixed(10) === 0.3)


// const longNum = 1.23466838383838383838883;

// console.log( +longNum.toFixed(3))



// const massToMax = [2,3,4,7,9,0]

// let count = 0;
// let result;
// for(let key of massToMax) {
//     console.log(key)
//      result = count += key;
// }
// console.log(result)
// console.log(massToMax)



// const string = 'how do you think, its working?'

// console.log(string.toUpperCase())

// const name = 'Maksim';
// const soName  = 'Norets';
// const age = 30;


// let result;

// result = 'my name is ' + name + ' and i am old ' + age + ' i have so name ' + soName;
// console.log(result) 












// let a = 10;

// a = 20;

// console.log(a)

// const b = {
//     key: 10,
// }

// b.key = 30;

// console.log(b.key)


// const a = 13;


// {
//     let result = a +20;
//     // let a = 10;
//     console.log(result)

//     let doubleResult = result * 2;

//     // doubleResult = 44;

//     console.log(doubleResult);

// }

// {
//     // let a = 121;
//     console.log(a)
// }


// console.log(a)





// {

//     var x = 101;
// }


// console.log(x);




// const num = 1.3455653;


// console.log('typeof', typeof num, num)



// const string = 'string';




// console.log(typeof string)


// const isActive = true;

// console.log(typeof isActive)



// const yes = null;

// console.log(typeof yes)


// let a = 10;

// console.log(a)


// let str = 'how do you think, its work?';
// alert(str);





// console.log(hesNumber)


// const hesInfo  = confirm('are you ??')

// console.log(hesInfo)

// if(hesInfo) {
//     alert('ok')
// }



// console.log( 5 < 4)


// if(hesNumber > 6) {
//     console.log('yes')
// } else {
//     console.log('no')
// }


// function add () {
//     const hesNumberSecond = Number(prompt('enter second number'))

//       return hesNumberFirst + hesNumberSecond;
// }

// const res = add();

// console.log(res)

// function fn(e) {
//     console.log(e)
// }

// document.addEventListener('mousemove', fn)


// const hesNumberFirst = Number(prompt('enter first number'))


// if(hesNumberFirst !== 0) {
//     console.log('nulllll')
// } else {
//     console.log('type 0')
// }


// const num = '3.14px';

// console.log( parseInt(num))

// console.log(parseFloat(num))


// const res = 0.1 + 0.2;

// console.log((0.1 *100 + 0.2 * 100) / 100 === 0.3)

// console.log( Number(res.toFixed(1)))


// const isNaN = Number('4') + Number('7');

// console.log(isNaN)

// const arr = ['maksim', 'bogdan', 'vova',' sasha']

// console.log(arr.includes('maksim'))

// console.log(arr.length)



// const name = prompt('enter name');
// const number = prompt('enter number');
// const work = prompt('enter work');
// let result;

// // result = 'my name is ' + name + ' i am working ' + work + " i have number "+ number;

// result = `my name is ${name} iam working ${work} i have number ${number}`

// alert(result)










// const massRand = Math.random()*255;

// console.log(massRand)


// console.log(typeof Math.max(2,3,5,7,3,5,6,7,5,5,45,4))

// console.log(Math.ceil(1.4))


// const str = 'string';


// console.log(str);
// const show  = str.split('')
// const showrev = show.reverse().join('');

// console.log(show)


// const mass  = [1,2,3,4];

// mass.length = 2;

// console.log(mass.length)

// console.log(mass)

// console.log('----------string-------------')

// const word = 'how do you think ?'

// console.log(word)

// console.log(word.length);

// const spl = word.split('')

// console.log(spl[0].toUpperCase())


// console.log(word.toUpperCase())

// console.log(word.includes('do'))



// let seassons;

// const month = 'may'


// if(month === 'june') {
//    seassons =  'summer'
// //    console.log(seassons)
// } else if (month === 'may') {
//     seassons = 'весна'
// }


// console.log(seassons)


// const ses = month === 'may' ? console.log('summer') : month === 'june' ? console.log('sldlsjd') : null


//-------------------- part 2 -----------------


// const a = 5;
// let result;
// // result =  a > 4 && a < 10;   


// result = a > 6 || a> 7 || a > 4;

// console.log(result)




// const name = prompt('choose','tea or cofe');
// let result;

// switch(name) {
//     case 'Maksim':
//     result = 'you nice boy';
//     break;
//     case 'Pasha':
//     result = 'not nice'
//     break;
//     default:
//     result = 'go away'
// }

// console.log(result)


// let show = name === 'Maksim' ?
//     result = 'you nice boy' : name === 'Pasha' ?
//     result = 'not nice' : result = 'go away';

// console.log(show)
// const priceCofe = 32;
// let result;

// if( name === 'cofe' || name === 'tea') {
//     // const choose = prompt('choose what you want','') 
//     if(name === 'cofe') {
//         const milk = confirm('with milk')
//         if(milk) {
//             const summ = Number(prompt('how many cash you have'))
//             if(summ) {
//                 const price = summ - priceCofe
//                 result = `you choose ${name} and you change ${price}`            }
//         } else {
//             console.log('take you cofe')
//         }
//     } else if (name === 'tea') {
//         const chooseTea = prompt('choose tea','black, froot,green')

//         switch(chooseTea) {
//             case 'black':
//             console.log('nice black');
//             break
//             case 'green':
//             console.log('nice green');
//             break
//             case 'froite':
//             console.log('nice froite');
//             break
//             case 'bargamote':
//             console.log('nice bargamote');
//             break
//             default:
//             console.log('we dont have this tea (..')
//         }

//     }
//     alert(result)
// }

// if (name > 100 && name > 30) {
//     console.log('win')
// }










//--------------- part 2 ------------




// const hesNumber = Number(prompt('enter'))

// const hesNumberDouble = Number(prompt('enter'))

// console.log(hesNumber)
// console.log(hesNumberDouble)

// const rand = Math.floor(Math.random()*10)

// console.log(rand)

// if( hesNumber === 2 ) {
//     console.log('two')
// } else if(hesNumber === 3) {
//     console.log('three')
// } else if ( hesNumber < 6) {
//     console.log('win')
// }
//  else {
//     console.log('looooser')
// }

// const hesNumber = prompt('login')

// const login = 'admin'
// const password = 'sjdff8374js'
// // console.log(hesNumber)



//----------------- if else if -------------

// if(hesNumber !== '' && hesNumber !== null) {
//     if(hesNumber === login) {
//         const pass = prompt('enter password');
//         if(pass === password) {
//             console.log('wellcome bro');
//         } else {
//             console.error('go away !!!!!');
//         }
//     } else {
//         console.error('login error');
//     }
// } else {
//     console.log('try again');
// }

//------------------- trnar ----------------------

// const name = prompt('enter name');

// name === 'Maksim'? console.log(true) : name === 'Sasha'? console.log(true) : console.log(false)
// console.log(showName)


//----------------- switch ----------


// const name = prompt('enter name');
// let result;

// switch(name) {
//     case 'Toha':
//     result = 'Hello Toha';
//     break;
//     case 'Bond':
//     result = 'Hello Bond'
//     break;
//     default:
//     result = 'who are you???'
// }


// console.log(result)


//----------------- switch VS if---------


// const name = prompt('enter name');
// let result = 'Its not name';


// if (name !== null) {
//     switch (name) {
//         case 'Toha':
//             result = 'Hello Toha';
//             break;
//         case 'Bond':
//             result = 'Hello Bond'
//             break;
//         default:
//             result = 'who are you???'
//     }
//     console.log(result)
// } else {
//     console.log('go away !!!!')
// }


// console.log(takeAway)

//--------------- cofeShop ----------------

// let result;
// const tea = 14;
// const coffee = 30;
// const pepsi = 4;
// const milk = 7;
// const salle = Math.floor(Math.random() * 20)
// let drink;


// const takeAway = confirm('take away')

// if (takeAway || !takeAway) {

//     const choose = prompt('chose what you want !', 'only coffee tea pepsi')
//     if (choose !== null && choose !== '') {
//         switch (choose) {
//             case 'coffee':
//                 drink = coffee
//                 break;
//             case 'tea':
//                 drink = tea
//                 break
//             case 'pepsi':
//                 drink = pepsi
//                 break;
//         }

//         const money = prompt('how money do you have ??')
//         const chack = money - drink

//         result = `you choose ${choose} dont forget your change ${chack}`

//         if (!takeAway) {
//             result = `you choose ${choose} you have salle ${salle} dont forget your change ${chack + salle}  dont  foget clean`
//         }
//         alert(result)

//     }
// }



// let count = 1;
// const arr = [];
// let sum = 0;
// let result;
// do{
//     const hesNumber = Number(prompt('enter numbers', count))
//     arr.push(hesNumber)
//     count +=1;
// }while(count <= 3)

// for(let i = 0; i < arr.length; i++) {
//     result = sum +=arr[i];
// }
// console.log(result)


// let result;

// for(let key of arr) {
//     result =  sum += key
// }

// console.log(result)
// console.log(arr)

// let count = 0;
// while(count < 13) {
//     console.log(count +=1)
// }




//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.


const a = -3;


if(a >= 0) {
    console.log(true)
} else {
    console.log(false)
}

