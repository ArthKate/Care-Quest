
import Navbar from '../src/components/Navbar'
import HeroCard from './components/HeroCard';

function Heading() {
  return <h1>testing</h1>
}

function App() {
  return (
    <div className='mx-20'>
      <Navbar />
      <HeroCard />
    </div>
  );
}

export default App