import Navbar from './Navbar'
import Logo from './Logo'

function Header() {
  return (
    <div className='bg-emerald-950'>
      <section className=' flex justify-between lg:w-1/2 mx-auto p-2 gap-24'>
        <Logo />
        <Navbar />
      </section>
    </div>
  )
}

export default Header

