
const empty = ({filter}) => {
  return (
    <div className="w-full h-[200px] flex items-center justify-center text-center gap-4 flex-col bg-white border-b-[1px] border-solid border-dark-grayish-blue-lightMode">
        <h2 className="text-very-dark-grayish-blue">No {filter == 'all' ? '' : filter} Todo</h2>
        <p className=" text-dark-grayish-blue-lightMode">{filter =='completed' ? 'Tick task to show as complete' : 'To add Todo, type in the create todo box above'}</p>
    </div>
  )
}

export default empty