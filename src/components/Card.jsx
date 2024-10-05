import { useEffect } from 'react'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

const Card = ({ children, bg = 'bg-gray-100' }) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div data-aos='slide-up' data-aos-duration='500' className={`${bg}  p-6 rounded-lg shadow-md w-md `}>
      {children}
    </div>
  )
}

export default Card
