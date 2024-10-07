import { Link } from 'react-router-dom'
import Card from './Card'
import sunnyside from '../assets/images/sunnyside.png'
import manage from '../assets/images/mange.png'
import nasa from '../assets/images/nasa.png'

const Other = () => {
  return (
    <section className='py-10 bg-pink-800'>
      <div className='container-xl lg:container mx-auto'>
        <h2 className='font-bold text-center text-white text-3xl mb-4'>Frontend Mentor Projects</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
          <Card>
            <h2 className='text-2xl font-bold mb-2'>Sunnyside Landing Page</h2>
            <img src={sunnyside} alt='' />
            <p className='mt-2 mb-4'>This is a beautiful landing page I decided to recreate from the Frontend mentor challenge. It focuses on testing your grid skills as well as overall CSS skill.</p>
            <span className='block mb-4 text-gray-500 text-sm font-extralight'> HTML | CSS | JS</span>
            <Link to='https://sunnyside11.netlify.app/' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-pink-900'>
              Visit site
            </Link>
          </Card>

          <Card>
            <h2 className='text-2xl font-bold mb-2'>Manage Landing Page</h2>
            <img src={manage} alt='' />
            <p className='mt-2 mb-4'>This is another website I decided to try out because of it's unique design. I practiced using pseudo-elements and unlocked a new method of CSS styling.</p>
            <span className='block mb-4 text-gray-500 text-sm font-extralight'> HTML | CSS | JS</span>
            <Link to='https://manage11.netlify.app/' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-pink-900'>
              Visit site
            </Link>
          </Card>

          <Card>
            <h2 className='text-2xl font-bold mb-2'>Nasa POTD</h2>
            <img src={nasa} alt='' />
            <p className='mt-2 mb-4'>This uses the NASA API to get a Picture Of The Day(POTD) for every single day. I learned how to configure dates in JavaScript with this project.</p>
            <span className='block mb-4 text-gray-500 text-sm font-extralight'> HTML | CSS | JS</span>
            <Link to='https://nasapotd1.netlify.app' target='_blank' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-pink-900'>
              Visit site
            </Link>
          </Card>
        </div>

        <p className='text-center t text-white text-sm my-4'>
          Visit{' '}
          <Link to='https://www.frontendmentor.io/profile/chizobaemeghiebo' className='underline italic'>
            my Frontend Mentor Profile
          </Link>{' '}
          for more fun projects.
        </p>
      </div>
    </section>
  )
}

export default Other
