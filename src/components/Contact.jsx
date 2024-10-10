import { useEffect, useState } from 'react'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

import bg from '../assets/images/contact.svg'

const Contact = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // })

  // const [errors, setErrors] = useState({})

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  //   // console.log(value)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newErrors = validateForm(formData)
  //   setErrors(newErrors)

  //   if (Object.keys(newErrors).length === 0) {
  //     // Form submission logic here
  //     formData.name = ''
  //     formData.email = ''
  //     formData.message = ''
  //     console.log('Form submitted successfully!')
  //   } else {
  //     console.log('Form submission failed due to validation errors.')
  //   }
  // }

  // const validateForm = (data) => {
  //   const errors = {}

  //   if (!data.name.trim()) {
  //     errors.name = 'Name is required'
  //   } else if (data.name.length < 4) {
  //     errors.name = 'Name must be at least 4 characters long'
  //   }

  //   if (!data.email.trim()) {
  //     errors.email = 'Email is required'
  //   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //     errors.email = 'Email is invalid'
  //   }

  //   if (!data.message) {
  //     errors.message = 'Input your message'
  //   } else if (data.message.length > 200) {
  //     errors.message = 'Your message should not be more than 200 characters long'
  //   }
  //   return errors
  // }

  return (
    <section className='py-10 bg-[#1B2021]' id='contact'>
      <div data-aos='zoom-in-up' className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <h3 className='text-white font-bold text-3xl text-center mb-4'>Contact Me</h3>
        <div className='text-center mx-auto bg-pink-800 max-w-xl backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-md'>
          <form className=' p-4 rounded-md shadow-lg' netlify name='contact-form' method='POST'>
            <input type='hidden' name='form-name' value='contact-form' />
            <div className='relative my-6 text-white'>
              <label className='absolute text-xs -top-2 left-1 bg-pink-800 px-1 rounded-sm text-white' htmlFor='name'>
                Name
              </label>
              <input className='w-full rounded-sm p-2 bg-transparent border border-pink-400 focus:ring-blue-800' type='text' id='name' name='name' required />
            </div>
            <div className='relative my-6 text-white'>
              <label className='absolute text-xs -top-2 left-1 bg-pink-800 px-1 rounded-sm text-white' htmlFor='email'>
                Email
              </label>
              <input className='w-full rounded-sm p-2 bg-transparent border border-pink-400 focus:ring-blue-800' type='email' id='email' name='email' required />
            </div>
            <div className='relative my-6 text-white'>
              <label className='absolute text-xs -top-2 left-1 bg-pink-800 px-1 rounded-sm text-white' htmlFor='message'>
                Message
              </label>
              <textarea className='w-full rounded-sm p-2 bg-transparent border border-pink-400 h-52' type='text' id='message' name='message' required></textarea>
            </div>
            <div className='bg-pink-800 p-2 rounded-full text-white cursor-pointer '>
              <button type='submit' className='font-bold'>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
