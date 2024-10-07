import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHamburger } from 'react-icons/fa'
import MobileNav from './MobileNav'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  // TODO: WORK ON NAVIGATION ROUTES AND RESUME
  // const projects = useRef(null)
  // const scrollTo = () => {
  //   window.scrollTo({ top: projects.current.offsetTop, behavior: 'smooth' })
  // }

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  //   I would use a ref.

  // import { useRef } from react;

  // const aboutSection = useRef(null);

  // const scrollTo = () => { window.scrollTo({ top: aboutSection.current.offsetTop, behavior: 'smooth', });

  // <button className="link" onClick={scrollTo}> About Us </button>

  // <div className="about" ref={aboutSection}> <h2>About Us</h2> </div>

  return (
    <nav className='bg-transparent absolute top-0 left-0 right-0 '>
      <div className=' mx-auto max-w-[100rem] lg:px-8 '>
        <div className='flex h-20 items-center justify-between p-8 relative'>
          <div>
            <p className='text-white font-bold text-3xl'>Chyzobah</p>
          </div>
          <ul className='  hidden md:flex p-4 '>
            <li className='ml-4 text-white font-bold hover:text-black' onClick={scrollTo}>
              <NavLink to='projects'>Projects</NavLink>
            </li>
            <li className='ml-4 text-white font-bold hover:text-black'>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li className='ml-4 text-white font-bold hover:text-black'>
              <NavLink to='/resume'>Resume</NavLink>
            </li>
          </ul>
          <div className='flex md:hidden' onClick={handleClick}>
            {showMenu ? <MobileNav /> : <FaHamburger className='text-4xl text-white cursor-pointer' />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
