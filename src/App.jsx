import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Specialist from './components/Specialist'
import NotFound from './components/NotFound'


function App() {
  return (
    <div className='min-w-screen min-h-screen flex justify-center'>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/specialist' element={<Specialist />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App