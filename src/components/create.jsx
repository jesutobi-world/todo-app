// Create.js

import { AiOutlinePlus } from 'react-icons/ai';

const Create = ({ value, onChange, onAdd }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onAdd();
    }
  };

  return (
    <div className="bg-white rounded-md w-[90vw] lg:w-[500px] h-[65px] flex items-center gap-4 overflow-hidden px-4">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="flex-1 bg-transparent flex items-center border-none outline-none h-full text-lg font-medium text-very-dark-grayish-blue"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown} 
      />
      <div className="cursor-pointer" 
      onClick={onAdd}
      >
        <AiOutlinePlus size={30} color="hsl(236, 9%, 61%)" />
      </div>
    </div>
  );
};

export default Create;


// Functionality
// Plus icon onclick to submit to entry
// Input to enter todo entry => Onchange 
// A user is inputing todo entry that is onchange, set the value to newTodo 
// Once the user then clicks on the plus icon, trim the todo value for trailing spaces and add it to the todos list (onAdd)