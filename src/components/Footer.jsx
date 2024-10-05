import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='bg-pink-300 py-10'>
      <div className='container mx-auto px-4'>
        <p className='text-center'>
          Made with
          <FaHeart className='inline-flex mx-2' />
          by Zedd
        </p>
        <div className='flex items-center justify-center mt-4'>
          <Link to='https://www.linkedin.com/in/chizobaemeghiebo'>
            <FaLinkedin className='inline mr-3 text-2xl hover:text-pink-900' />
          </Link>
          <Link to='https://x.com/justchizoba'>
            <FaTwitter className='inline mr-3 text-2xl hover:text-pink-900' />
          </Link>
          <Link to='https://github.com/chizobaemeghiebo'>
            <FaGithub className='inline mr-3 text-2xl hover:text-pink-900' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Footer
