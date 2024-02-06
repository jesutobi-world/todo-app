// Todos.js
// import React from 'react';
import Todo from './todo';
import Info from './Info';
import Empty from './empty';

const Todos = ({todos, isCompleted, onDelete, onFilterChange, filter, onClear}) => {
    // Function to filter todos based on the selected filter
    const filterTodos = () => {
      switch (filter) {
        case 'active':
          return todos.filter((todo) => !todo.completed);
        case 'completed':
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
    };
  
  const filteredTodos = filterTodos();
  console.log(filteredTodos);
  return (
    <div className="flex flex-col overflow-hidden rounded-md h-auto shadow-xl not-last-child:border-b">
           {filteredTodos.length === 0 ? (
        <Empty filter={filter} />
      ) : (
        filteredTodos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            isCompleted={isCompleted}
            onDelete={onDelete}
          />
        ))
      )}
      <Info
       filteredTodos = {filteredTodos} 
       onFilterChange = {onFilterChange}
       onClear= {onClear}
       filter={filter}
        />
    </div>
  );
};

export default Todos;

