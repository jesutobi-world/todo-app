// Container.js
import { useState, useEffect } from 'react';
import Header from './header';
import Create from './create';
import Todos from './todos';
import Prompt from './prompt';

const Container = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

  // Array of Todo objects 
  // Each Todo object contains an id ( integer ), text ( string ) and completed ( boolean )
  // Updated by the addTodo function  
  const [todos, setTodos] = useState(initialTodos);

  // To store the submitted todo text before updating the todos array
  // Updated by the handleInputChange function 
  const [newTodo, setNewTodo] = useState('');

  // To store the current filter
  // Updated handleFilterChange function
  const [filter, setFilter] = useState('all');

// To save todos to local storage when they change
  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // To update the newTodo state
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // The value of newTodo will be used to update the todo state and the newTodo state will be returned back to an empty string 
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, {id: todos.length +1 , text: newTodo, completed: false},] );
      setNewTodo('');
    }
  };

  // To update the value of todo.completed
  const isCompleted = (id) =>{
    setTodos((prevTodos)=> prevTodos.map((todo) => todo.id === id? {...todo, completed: !todo.completed} : todo))
    
  }

  // To delete a todo from the todos array 
  const onDelete = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  // To clear all completed tasks 
  const onClear = () =>{
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  // To update the filter state
  const handleFilterChange = (selectedFilter) =>{
    setFilter(selectedFilter);  }


  return (
    <div className="w-[90vw] lg:w-auto lg:h-auto flex flex-col gap-6">
      <Header />
      <Create
       value={newTodo}
       onChange={handleInputChange} 
       onAdd={addTodo}
        />
      <Todos
       todos={todos}
       isCompleted={isCompleted}
       onDelete={onDelete}
       onClear = {onClear}
       onFilterChange = {handleFilterChange}
       filter={filter}
        />
      <Prompt />
    </div>
  );
};

export default Container;

// Functionality
// Create state management for input onChange, onChange newTodo should be updated to refelect user input
// This will be done by calling a function that sets newTodo to input value 
// onAdd shold happen when the user clicks on the plus icon, this updates the state to add the newTodo to the list of todos
