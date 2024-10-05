import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaHamburger, FaWindowClose, FaTimes } from 'react-icons/fa'

const Nav = () => {
  // TODO:work on menu buttons
  // // const [showMenu, setShowMenu] = useState()

  // function handleClick() {
  //   // alert('You clicked me!')
  //   // FaHamburger.className.add = 'hidden'
  //   return <FaTimes />

  //   {
  //     /* console.log(e) */
  //   }
  // }

  return (
    <nav className='bg-transparent absolute top-0 left-0 right-0 '>
      <div className=' mx-auto max-w-5xl  lg:px-8'>
        <div className='flex h-20 items-center justify-between p-8'>
          <div>
            <p className='text-white font-bold text-3xl'>Chyzobah</p>
          </div>
          <ul className='hidden lg:flex'>
            <li className='ml-4 text-white font-bold'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='ml-4 text-white font-bold'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='ml-4 text-white font-bold'>
              <Link to='/resume'>Resume</Link>
            </li>
          </ul>
          <div>
            <FaHamburger className='text-4xl text-white cursor-pointer lg:hidden' onClick={handleClick} />
            <FaTimes className='text-4xl text-white hidden' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
