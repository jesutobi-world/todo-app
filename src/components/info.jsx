
const Info = ({filteredTodos, onFilterChange, onClear, filter}) => {

  return (
    <div className="bg-transparent lg:bg-white w-[90vw] lg:w-[500px] min-h-[65px] grid grid-cols-2  gap-y-4 auto-rows-[65px] lg:flex items-center lg:gap-4 overflow-hidden lg:px-4 font-semibold text-base text-dark-grayish-blue-lightMode justify-between">
    <div className="col-span-1 bg-white col-start-1 col-end-2 h-full rounded-bl-md flex items-center pl-4 lg:pl-0">{filteredTodos.length} {`item${filteredTodos.length > 1 ? 's' : ''}`} left</div>
    <ul className="flex lg:gap-4 col-span-2 bg-white col-start-1 col-end-3 row-start-2 row-end-3 h-full rounded-md items-center justify-center gap-8">
        <li className={`cursor-pointer ${filter === 'all' ? 'text-bright-blue' : ''}`}
        onClick={() => onFilterChange('all')}
        >All</li>
        <li className={`cursor-pointer ${filter === 'active' ? 'text-bright-blue' : ''}`}
        onClick={() => onFilterChange('active')}
        >Active</li>
        <li className={`cursor-pointer ${filter === 'completed' ? 'text-bright-blue' : ''}`}
        onClick={() => onFilterChange('completed')}
        >Completed</li>
    </ul>
    <div onClick={onClear} className="cursor-pointer col-span-1 col-start-2 col-end-3 bg-white row-start-1 row-end-2 h-full rounded-br-md flex pr-4 lg:pr-0 items-center justify-end">Clear Completed</div>
</div>
  )
}

export default Info