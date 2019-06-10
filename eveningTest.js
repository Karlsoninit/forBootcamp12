// // Создай объект notepad для работы с массивом заметок. Каждая заметка это объект следующего формата:

// // id: string | integer
// // title: string
// // body: string
// // priority: integer [0-2]
// // id - уникальный идентификатор объекта, чтобы можно было найти его в коллекции, строка.
// // title - заголовок заметки, строка.
// // body - текст заметки, строка.
// // priority - значение приоритета, от 0 (низкий) до 2 (высокий).
// // Вот карта приоритетов, используй ее.

// const Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };
// // Напиши код для работы методов данного объекта.

// const notepad = {
//   notes: [],
//   getNotes() {
//     /*
//      * Принимает: ничего
//      * Возвращает: все заметки, значение свойства notes
//      */

//      return  this.notes
//   },
//   findNoteById(id) {

//     console.log(id)
//     /*
//      * Ищет заметку в массиве notes
//      *
//      * Принимает: идентификатор заметки
//      * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
//      */

//     //  for(let key of this.notes ){
//     //      if(key.id === id) {
//     //          return  key
//     //      }
//     //  }

//      return this.notes.find( el => el.id === id )

//   },
//   saveNote(note) {
//     //   console.log(note)
//     /*
//      * Сохраняет заметку в массив notes
//      *
//      * Принимает: объект заметки
//      * Возвращает: сохраненную заметку
//      */

//      return  this.notes.push(note)
//   },
//   deleteNote(id) {
//     console.log(id)

//     this.notes =  this.notes.filter(el => el.id !== id)
//     //   console.log(id)
//     /*
//      * Удаляет заметку по идентификатору из массива notes
//      *
//      * Принимает: идентификатор заметки
//      * Возвращает: ничего
//      */

//     // this.notes.filter(el => el.id === id ? this.notes.splice(this.notes.indexOf(el),1) : null )

//     // this.notes = this.notes.filter(el => el.id !== id)

//   },
//   updateNoteContent(id, updatedContent) {
//     /*
//      * Обновляет контент заметки
//      * updatedContent - объект с полями вида {имя: значение, имя: значение}
//      * Свойств в объекте updatedContent может быть произвольное количество
//      *
//      * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
//      * Возвращает: обновленную заметку
//      */

//      console.log(updatedContent)
//      for(let key of this.notes) {
//          if(key.id === id ) {
//             //  console.log(key)
//             //  this.notes[this.notes.indexOf(key)] = {...key, ...updatedContent}
//             Object.assign(key, updatedContent)
//          }
//      }

//     //  this.notes.forEach(el => {el.id === id ? Object.assign(el, updatedContent) : null})

//   },
//   updateNotePriority(id, priority) {
//     /*
//      * Обновляет приоритет заметки
//      *
//      * Принимает: идентификатор заметки и ее новый приоритет
//      * Возвращает: обновленную заметку
//      */

//     //  for(let key of this.notes) {
//     //      if(key.id === id) {
//     //          this.notes[this.notes.indexOf(key)] = {...key, priority}
//     //      }
//     //  }

//     // console.log(this.notes.find(el => el.id === id).priority = priority)
//         // return this.notes.find(el => el.id === id).priority = priority;

//         return this.notes.forEach(el => el.id === id ? el.priority = priority: null)

//   },
//   filterNotesByQuery(query) {

//     /*
//      * Фильтрует массив заметок по подстроке query.
//      * Если значение query есть в заголовке или теле заметки - она подходит
//      *
//      * Принимает: подстроку для поиска в title и body заметки
//      * Возвращает: новый массив заметок, контент которых содержит подстроку
//      */

//     //  console.log(query)

//     const arr = [];
//     this.notes.map(el => {
//         if(el.title.toLowerCase().includes(query) || el.body.toLowerCase().includes(query)) {
//             arr.push(el)
//         }
//     })

//     return arr;

//   },
//   filterNotesByPriority(priority) {

//     /*
//      * Фильтрует массив заметок по значению приоритета
//      * Если значение priority совпадает с приоритетом заметки - она подходит
//      *
//      * Принимает: приоритет для поиска в свойстве priority заметки
//      * Возвращает: новый массив заметок с подходящим приоритетом
//      */
//         const newPriority = []

//      this.notes.filter(el => el.priority === priority ? newPriority.push(el) : null)

//     return newPriority;

//   },
// };
// // Далее идет код для проверки работоспособности объекта, вставь его в конец скрипта. Твоя реализация методов объекта notepad должна проходить этот тест.

// /*
//  * Добавляю 4 заметки и смотрю что получилось
//  */
// notepad.saveNote({
//   id: 'id-1',
//   title: 'JavaScript essentials',
//   body:
//     'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//   priority: Priority.HIGH,
// });

// notepad.saveNote({
//   id: 'id-2',
//   title: 'Refresh HTML and CSS',
//   body:
//     'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//   priority: Priority.NORMAL,
// });

// notepad.saveNote({
//   id: 'id-3',
//   title: 'Get comfy with Frontend frameworks',
//   body:
//     'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
//   priority: Priority.NORMAL,
// });

// notepad.saveNote({
//   id: 'id-4',
//   title: 'Winter clothes',
//   body:
//     "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//   priority: Priority.LOW,
// });

// console.log('Все текущие заметки: ', notepad.getNotes());

// /*
//  * Зима уже близко, пора поднять приоритет на покупку одежды
//  */
// notepad.updateNotePriority('id-4', Priority.NORMAL);

// console.log(
//   'Заметки после обновления приоритета для id-4: ',
//   notepad.getNotes(),
// );

// /*
//  * Решил что фреймворки отложу немного, понижаю приоритет
//  */
// notepad.updateNotePriority('id-3', Priority.LOW);

// console.log(
//   'Заметки после обновления приоритета для id-3: ',
//   notepad.getNotes(),
// );

// /*
//  * Решил отфильтровать заметки по слову html
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery('html'),
// );

// /*
//  * Решил отфильтровать заметки по слову javascript
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery('javascript'),
// );

// /*
//  * Хочу посмотреть только заметки с нормальным приоритетом
//  */
// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   notepad.filterNotesByPriority(Priority.NORMAL),
// );

// /*
//  * Обновим контент заметки с id-3
//  */
// notepad.updateNoteContent('id-3', {
//   title: 'Get comfy with React.js or Vue.js',
// });

// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   notepad.getNotes(),
// );

// /*
//  * Повторил HTML и CSS, удаляю запись c id-2
//  */
// notepad.deleteNote('id-2');
// console.log('delete','Заметки после удаления с id -2: ', notepad.getNotes());

// console.log(notepad.findNoteById('id-3'))

//---------------- await ----------

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( response => response.json())
//     .then( data => console.log(data))

// const fn = async () => {
//   try{
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const returnData = responce.json()
//     return returnData

//   } catch (err) {
//     throw err
//   }

// }

// fn().then( data => console.log(data))

// class GetInfo {
//   constructor(url) {
//     this.url = url;
//   }

//   async getUsers(id) {
//     try {
//       let responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       let data = responce.json()
//       return data;
//     } catch(error) {
//       throw new Error('не получить ответ от юзара')
//     }
//   }

// async getUsers(id) {
//   try {
//     let responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     let data = responce.json()
//     return data;
//   } catch(error) {
//     throw new Error('не получить ответ от юзара')
//   }
// }
// }

// async function show() {
//   let dataInfo = new GetInfo()
//   try {
//     let user = await dataInfo.getUsers(1)
//     console.log(user)
//   } catch (error) {
//     console.error(error)
//   }
// }

// show()

// class show {
//   constructor(url) {
//     this.url = url
//   }

//   async getPost(id) {
//     try {
//       let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       let returnData = post.json()
//       return returnData

//     } catch(error) {
//       throw new Error('yt fdfdf')
//     }
//   }
// }

// async function showReturn() {
//   const newFn = new show()
//   try{
//     let user = await newFn.getPost(1)
//     console.log(user)
//   } catch(error) {
//     console.log(error)
//   }
// }

// showReturn()

// class Game {
//   constructor(name, hp = 1000) {
//     this.name = name;
//     this.hp = hp;
//   }

//   showAboutPlayer() {
//     console.log(`MY NAME ${this.name} ---> ${this.hp}`);
//   }
// }

// const game = new Game('Volli', 1000)

// class Chiter extends Game {
//   constructor(name, hp, armour) {
//     super(name, hp, armour);
//     this.armour = armour;
//     this.random = Math.floor(Math.random() * this.hp);
//   }

//   hit(player) {
//     console.log("player", player);
//     console.log("chiter", this.hp);
//     Math.random() > 0.5 ? (this.hp -= this.random) : (player.hp -= this.random);
//     player.refresh();
//   }
// }

// //------------ player 1 --------------
// const chiter = new Chiter("Chiter", 1000, 100);
// chiter.showAboutPlayer();

// //------------- player 2 -------------

// class Adel extends Game {
//   constructor(name, hp, mana) {
//     super(name, hp, mana);
//     this.mana = mana;
//   }

//   refresh() {
//     console.log("test !!!!!!!!!!!!", this.hp);
//     this.hp < 300 ? (this.hp += this.mana) : null;
//   }
// }

// const adel = new Adel("Adel", 1000, 675);

// adel.showAboutPlayer();

// chiter.hit(adel);
// // adel.refresh()

// console.log(adel);
// console.log(chiter);

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( response => response.json())
//     .then( data => console.log(data))

// const getInfo = async () => {
//   const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = responce.json()
//   return data
// }

// getInfo()
//     .then( data => console.log(data))

// class Find {
//   constructor(url) {
//     this.url = url
//   }

//     async getId(id) {
//       try {
//         const responce = await fetch(`${this.url}posts/${id}`)
//         const data = responce.json()
//         return data
//       } catch (err) {
//         console.log(err)
//         throw new Error(err,'не получили id то юзера')
//       }
//     }

//     async getCommit(commit) {
//       try {
//         const responce = await fetch(`${this.url}comments?postId=${commit}`)
//         const data = responce.json()
//         data.then( data => console.log(data))
//         return data
//       } catch (err) {
//         console.log(err)
//         throw new Error(err,'не получили commit то юзера')
//       }
//     }

// }

// ( async () => {
//    try {
//     const find = new Find('https://jsonplaceholder.typicode.com/')
//     const user = await find.getId(1)
//     const commit = await find.getCommit(4)
//     console.log(user)
//     console.log(commit)
//    } catch (error) {
//     console.error('errorr')
//    }
//  })()

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => console.log(data));



// const Info =  async () => {
//   const getInfo = await fetch('https://jsonplaceholder.typicode.com/posts') 
//   const data = getInfo.json()
//   return data
// }


// Info().then( data => console.log(data))



// const inner  =document.querySelector('.inner')

// let start = 0;
// let size = 30;


// while (start < 15) {
//   start ++
//   size += 10
// }

// for(let i = 0; i < 10; i++) {
//   size += 10;
//     console.log(1)
//     inner.innerHTML +=` <div style ='width : ${size + 'px' } ; height : ${size + 'px' } ;background: red' ></div>`
  
// }



// const container = document.querySelector('.container')

// console.log(container.lastElementChild)

// const innerBox = container.lastElementChild;

// innerBox.style.color = 'red'



// console.log(innerBox.textContent)

// container.classList.add('fon')

// const images = document.querySelector('.images')

// console.log(images)

// const hesAtr = images.getAttribute(['data-newimage'])

// const photoBox = document.createElement('div');

// const body = document.body;

// body.append(photoBox)


// photoBox.innerHTML = `<img src="${hesAtr}">`



// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

// const container = document.querySelector('.container');


// container.style.width = '200px'

// const result = galleryItems.reduce((acc, el) => acc + `<img src="${el.url}"> `, '')

// console.log(result)

// container.innerHTML = result;

// console.log(container)

// const text = document.querySelector('.text')


// let count = 0;

// setInterval(function(){
  
//   text.textContent = count++
// },1000)



// const input = document.querySelectorAll('.size-filter  input[checked]')

// input.forEach(element => {
//   console.log(element.value)
// });
// console.log(input)