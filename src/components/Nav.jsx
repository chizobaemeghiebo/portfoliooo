import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-transparent absolute top-0 left-0 right-0 '>
      <div className=' mx-auto max-w-5xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div>
            <p className='text-white font-bold text-3xl'>Chyzobah</p>
          </div>
          <ul className='flex'>
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
        </div>
      </div>
    </nav>
  )
}

export default Nav
