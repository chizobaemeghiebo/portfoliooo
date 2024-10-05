import { useEffect } from 'react'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MyFunctionalComponent() {
  useEffect(() => {
    AOS.init()
  }, [])
  return <div data-aos='fade-in'>MyFunctionalComponent</div>
}
