import React from 'react';
import Todo from './Todo';

const TodoList=({todos,setTodos,filteredTodos})=>{
    return (
        <div className="todo-comtainer">
            <ul className='todo-list'></ul>
            {filteredTodos.map(todo=>(
                <Todo todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;