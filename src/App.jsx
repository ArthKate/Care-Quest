
import Navbar from '../src/components/Navbar'
import HeroCard from './components/HeroCard';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <div className='mx-20 my-5'>
      <Navbar />
      <HeroCard />
      <Footer />
    </div>
  );
}

export default App