import { FaNodeJs, FaReact, FaJs } from 'react-icons/fa'
import tailwind from '../assets/images/tailwind.svg'
import mongodb from '../assets/images/mongodb.svg'

const Skills = () => {
  return (
    <section className='py-10 '>
      <div className='container-xl lg:container mx-auto w-[90%]'>
        <h2 className='font-bold text-center text-3xl mb-4'>My Skills</h2>

        <div className='flex items-center justify-between my-20'>
          <div>
            <FaJs className='text-6xl text-[#1B2021] hover:text-[#89023E] hover:text-7xl transition-all' />
          </div>
          <div>
            <FaReact className='text-6xl text-[#1B2021] hover:text-[#89023E] hover:text-7xl transition-all' />
          </div>

          <div>
            <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 73.29' className='w-16 h-16 fill-[#1B2021] hover:fill-[#89023E] hover:w-20 hover:h-20 transition-all'>
              <defs>
                <style>.cls-1</style>
              </defs>
              <title>tailwind-css</title>
              <path d='M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z' />
            </svg>
          </div>

          <div>
            <FaNodeJs className='text-6xl text-[#1B2021] hover:text-[#89023E] hover:text-7xl transition-all' />
          </div>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 598.88 1333.33' className='w-16 h-16 fill-[#1B2021] hover:fill-[#89023E] hover:w-20 hover:h-20 transition-all'>
              <g>
                <path d='M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z' />
                <path d='M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z' />
                <path d='M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z' />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
