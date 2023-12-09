import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'


function App() {
  return (
    <div className='min-w-screen min-h-screen flex justify-center my-5'>
      <div className='w-1/2 bg-cyan-50'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App