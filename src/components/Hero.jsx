import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import Nav from './Nav'
import resume from '../assets/Chizobaemeghiebo.docx (2).pdf'

const Hero = ({ title = 'Chizoba Emeghiebo', subtitle = 'Frontend Developer' }) => {
  return (
    <section className='bg-gradient-to-r from-[#30343F] via-[#89023E] to-[#1B2021] min-h-screen flex flex-col justify-center background-animate relative'>
      <Nav />
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl animate-bounce'> {title}</h1>
          <p className='my-4 text-xl text-white '>{subtitle}</p>
        </div>
        <div className='mb-4 text-center flex utems-center'>
          <a href={resume} className=' bg-black text-white rounded-lg px-4 py-2 border border-black hover:text-black hover:bg-transparent hover:border-white' download='resume'>
            Download Resume
          </a>
          <Link to='https://github.com/chizobaemeghiebo' className='ml-2 bg-black text-white text-lg rounded-lg  py-2 px-4  border border-black hover:text-black hover:bg-transparent hover:border-white '>
            <FaGithub className='mt-1' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
