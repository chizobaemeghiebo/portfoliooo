import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

import Card from './Card'
import rateam from '../assets/images/rateam.png'
import swiftally from '../assets/images/swiftally.png'
import lima from '../assets/images/lima.png'
import shortify from '../assets/images/shortify.png'
import dictionary from '../assets/images/dictionary.png'
import rps from '../assets/images/rps.png'

const Projects = () => {
  return (
    <section className='py-4' id='projects'>
      <div className='container-xl lg:container mx-auto'>
        <h2 className='font-bold text-center text-3xl mb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 p-4 rounded-lg'>
          <Card bg='bg-pink-300'>
            <h2 className='text-2xl font-bold mb-2'>Rateam</h2>
            <img src={rateam} alt='rateam thumbnail' />
            <p className='mt-2 mb-4'>Rate am is the website for an app that allows you to rate your network provider based on your call performance in your area.</p>
            <Link to='https://rateam.ng' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 border border-b-2 hover:bg-transparent  hover:border-pink-800 hover:text-black hover:animate-waving-hand'>
              Visit site
              <FaArrowRight className='inline ml-2' />
            </Link>
          </Card>

          {/* TODO:Link not working */}
          {/* <Card bg='bg-pink-300 lg:bg-gray-100'>
            <h2 className='text-2xl font-bold mb-2'>Swiftally</h2>
            <img src={swiftally} alt='' />
            <p className='mt-2 mb-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ducimus velit cupiditate. Ducimus ab reiciendis ex fuga. Quae rerum ipsa doloremque itaque voluptate iste vero pariatur reiciendis quod, magnam ipsam.
            </p>
            <Link to='https://swiftally.io' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 border border-b-2 hover:bg-transparent hover:border-pink-800 hover:text-black hover:animate-waving-hand'>
              Visit site
              <FaArrowRight className='inline ml-2' />
            </Link>
          </Card> */}

          <Card>
            <h2 className='text-2xl font-bold mb-2'>Lima</h2>
            <img src={lima} alt='' />
            <p className='mt-2 mb-4'>Lima is a website for a new marketing company.</p>
            <Link to='https://limamarketing.netlify.app/' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 border border-b-2 hover:bg-transparent hover:border-pink-800 hover:text-black hover:animate-waving-hand'>
              Visit site
              <FaArrowRight className='inline ml-2' />
            </Link>
          </Card>

          <Card bg='bg-pink-300 md:bg-gray-100'>
            <h2 className='text-2xl font-bold mb-2'>Shortify</h2>
            <img src={shortify} alt='' />
            <p className='mt-2 mb-4'>
              Sometimes you want to share a link to a friend or add a link to your design or flyer but it's just too long. Shoortify is here to help. Shoortify is a website created to help you shorten your long links for free.
            </p>
            <Link to='https://shoortify.netlify.app/' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 border border-b-2 hover:bg-transparent hover:border-pink-800 hover:text-black hover:animate-waving-hand'>
              Visit site
              <FaArrowRight className='inline ml-2' />
            </Link>
          </Card>

          <Card bg='md:bg-pink-300'>
            <h2 className='text-2xl font-bold mb-2'>Simple Dictionary</h2>
            <img src={dictionary} alt='' />
            <p className='mt-2 mb-4'>This simple dictionary was created as a little fun project with a designer friend. It uses the Merrriam Webster API to get the meanings of words and also help with audio pronunciation!</p>
            <Link to='https://dictioonary.netlify.app/' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 border border-b-2 hover:bg-transparent hover:border-pink-800 hover:text-black hover:animate-waving-hand'>
              Visit site
              <FaArrowRight className='inline ml-2' />
            </Link>
          </Card>

          <Card bg='bg-pink-300 '>
            <h2 className='text-2xl font-bold mb-2'>Rock, Paper, Scissors </h2>
            <img src={rps} alt='' />
            <p className='mt-2 mb-4'>This is a fun game of Rock,Paper,Scissors I made recently.</p>
            <Link
              to='https://chizobaemeghiebo.github.io/RockPaperScissors/'
              target='_blank'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 border border-b-2 hover:bg-transparent hover:border-pink-800 hover:text-black hover:animate-waving-hand'>
              Visit site
              <FaArrowRight className='inline ml-2' />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Projects
