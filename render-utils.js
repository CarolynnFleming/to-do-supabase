export function renderTodo(todo) {
    // create a div and a p tag
    
    const todoItem = document.createElement('div');
    const todoEl = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete){
        todoItem.classList.add('complete');
    } else {
        todoItem.classList.add('not-complete');    
    }
    // add the 'todo' css class no matter what
    todoItem.classList.add('todo');
    // put the todo's text into the p tag
    todoEl.textContent = `${todo.todo}`;
    // append stuff
    todoItem.append(todoEl);
    todoEl.append(todo);
    // return the div
    return todoItem;
    
}