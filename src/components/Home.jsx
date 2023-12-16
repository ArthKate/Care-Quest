
import HeroCard from './HeroCard'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='w-5/5'>
        <HeroCard />
      </div>
    </div>
  );
}

export default Home;
