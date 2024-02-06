import SunIcon from '../assets/images/icon-sun.svg'
import Moonicon from '../assets/images/icon-moon.svg'
const header = () => {
  return (
    <div className="flex justify-between h-[60px] items-center">
        <h1 className='text-4xl font-semibold text-white tracking-widest flex items-center'>TODO</h1>
        <div className="w-[30px] h-[30px] relative flex items-center justify-center">
            <img src={SunIcon} alt="moon-iconn" className='absolute w-full h-full' />
            <img src={Moonicon} alt="sun-icon" className='absolute w-full h-full' />
        </div>
    </div>
  )
}

export default header;


// Functionality 
// Icon div can be clicked => Onclick to change sun to moon or vice versa & change theme to light or dark
