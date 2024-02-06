import Container from './components/container'
import './App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

  return (
    <div className='lg:bg-desktop-pattern-light bg-very-light-grayish-blue bg-contain bg-mobile-pattern-light w-screen h-auto min-h-screen bg-no-repeat max-w-[1440px] flex items-start justify-center py-8 lg:py-16'>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  )
}

export default App


