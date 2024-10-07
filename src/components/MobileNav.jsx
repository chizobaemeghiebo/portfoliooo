import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const MobileNav = () => {
  // TODO: I DON'T SEE THE NEED FOR THIS AS IT'S JUST A SINGLE PAGE
  // const linkClass = ({ isActive }) => (isActive ? 'text-amber-500' : 'text-black')

  return (
    <div>
      <FaTimes className='text-4xl text-white cursor-pointer' />
      <ul className='absolute flex flex-col bg-transparent shadow-xl mx-auto space-y-1 items-center right-0 top-20 left-0 w-3/4'>
        <li className='ml-4 text-white font-bold hover:text-black'>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li className='ml-4 text-white font-bold hover:text-black'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li className='ml-4 text-white font-bold hover:text-black'>
          <NavLink to='/resume'>Resume</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
