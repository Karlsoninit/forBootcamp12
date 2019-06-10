const Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};


const notepad = {
    notes: [],
    getNotes() {
        /*
         * Принимает: ничего
         * Возвращает: все заметки, значение свойства notes
         */
        return this.notes

    },
    findNoteById(id) {

        /*
         * Ищет заметку в массиве notes
         *
         * Принимает: идентификатор заметки
         * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
         */

        //    console.log(this.notes)

        let result;
        for (let key of this.notes) {
            if (key.id === id) {
                result = key
            }
            return result;
        }
    },
    saveNote(note) {
        // console.log(note)
        /*
         * Сохраняет заметку в массив notes
         *
         * Принимает: объект заметки
         * Возвращает: сохраненную заметку
         */

        return this.notes.push(note)

    },
    deleteNote(id) {
        /*
         * Удаляет заметку по идентификатору из массива notes
         *
         * Принимает: идентификатор заметки
         * Возвращает: ничего
         */


        for (let key of this.notes) {
            if (key.id === id) {
                this.notes.splice(this.notes.indexOf(key), 1)
            }
        }

        console.log(this.notes)
    },
    updateNoteContent(id, updatedContent) {
        /*
         * Обновляет контент заметки
         * updatedContent - объект с полями вида {имя: значение, имя: значение}
         * Свойств в объекте updatedContent может быть произвольное количество
         *
         * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
         * Возвращает: обновленную заметку
         */

        //  console.log(id)
        //  console.log(updatedContent)

        // console.log('old',this.notes)

        for (let key of this.notes) {
            if (key.id === id) {
                this.notes[this.notes.indexOf(key)] = {...key, ...updatedContent}
            }
        }

        // console.log('new',this.notes)

    },
    updateNotePriority(id, priority) {
        /*
         * Обновляет приоритет заметки
         *
         * Принимает: идентификатор заметки и ее новый приоритет
         * Возвращает: обновленную заметку
         */
        let noteId;
        for (let key of this.notes) {
            if (key.priority === id) {
                noteId = this.notes.indexOf(key)
                this.notes[noteId] = {...key, ...priority}
            }
        }
        return noteId;
    },
    filterNotesByQuery(query) {
        /*
         * Фильтрует массив заметок по подстроке query.
         * Если значение query есть в заголовке или теле заметки - она подходит
         *
         * Принимает: подстроку для поиска в title и body заметки
         * Возвращает: новый массив заметок, контент которых содержит подстроку
         */


         const newMass = []
        for (let key of this.notes) {
            if (key.title.toLowerCase().includes(query) || key.body.toLowerCase().includes(query)) {
                newMass.push(key)
            }
        }
        return newMass;
    },
    filterNotesByPriority(priority) {
        /*
         * Фильтрует массив заметок по значению приоритета
         * Если значение priority совпадает с приоритетом заметки - она подходит
         *
         * Принимает: приоритет для поиска в свойстве priority заметки
         * Возвращает: новый массив заметок с подходящим приоритетом
         */

        const newPriority = []
        for (let key of this.notes) {
            if (key.priority === priority) {
                newPriority.push(key)
            }
            
        }
        
        return newPriority;
    },
};
//   Далее идет код для проверки работоспособности объекта, вставь его в конец скрипта. Твоя реализация методов объекта notepad должна проходить этот тест.

/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Priority.HIGH,
});

notepad.saveNote({
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log(
    'Заметки после обновления приоритета для id-4: ',
    notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Priority.LOW);

console.log(
    'Заметки после обновления приоритета для id-3: ',
    notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
});

console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.getNotes(),
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());




// notepad.findNoteById('id-3')
// notepad.deleteNote('id-2')






/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает 
 * эти два массива и возвращает массив объектов со свойствами name и price. 
 */

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];


// function combine({names, prices}) {
//     const mass = []
//     for(let i= 0; i < names.length; i++) {
//         const name = names[i];
//         const price = prices[i];

//         const newObj = {name, price}

//         mass.push(newObj)
//     }
//     return mass;
// }

        // const products = combine({names, prices});
        // console.log(products); // массив объектов со свойствами name и price

