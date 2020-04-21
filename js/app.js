
function createTodoItem(title){
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.className = 'delete';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    bindEvents(listItem);
    
    console.log(listItem);
    return listItem;
}
function bindEvents(todoItem){
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');


    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click',deleteTodoItem);
}
function toggleTodoItem(){
    const listItem = this.parentNode;
    //доюавляем/удаляем класс 'completed'
    listItem.classList.toggle('completed');
}
function editTodoItem(){
    const listItem = this.parentNode;
    const title = listItem.querySelector('.title'); //label
    const editInput = listItem.querySelector('.textfield'); //input
    const isEditing = listItem.classList.contains('editing');

    if(isEditing) {
        title.innerText = editInput.value;
        this.innerText = 'Изменить';
        console.log(this)

    }else {
        editInput.value = title.innerText;
        this.innerText = 'Сохранить';
        console.log(this)
    }


    //проверка на пустой инпут 
    if(editInput.value ===''){
         alert('Пустое поле');
         return this.innerText = 'Сохранить';
            
    }

    listItem.classList.toggle('editing');   
}
function deleteTodoItem(){
    const listItem = this.parentNode;
    todoList.removeChild(listItem);
}



function addTodoItem(event){
    //отменим стандартное поведение браузера
    event.preventDefault();
    //проверка на пустой инпут
    if (addInput.value === '') return alert('Necessary to enter task name.');
    //создаём новый элемент
    const todoItem = createTodoItem(addInput.value); 
    //добавляем его на страницу после существующего
    todoList.appendChild(todoItem);
    //очищаем инпут после ввода
    addInput.value = '';
}

const todoForm = document.getElementById('todo-form'),
      addInput = document.getElementById('add-input'),
      todoList = document.getElementById('todo-list'),
      todoItems = document.querySelectorAll('.todo-item');

function main(){
    todoForm.addEventListener('submit', addTodoItem);
    todoItems.forEach(item => bindEvents(item));
}

main();