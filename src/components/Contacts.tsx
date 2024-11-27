import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <div id='contacts' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-10'>
                <h1 data-aos="zoom-in" className='text 5xl size 8000px'><b>Get in touch with us</b></h1>
                  <p data-aos="zoom-in" className='text-red-900 text-[18px] pt-2'>
                    Drop a message, or call, or via E-mail
                  </p>
                  <div className='flex gap-3 items-center' data-aos="zoom-in">
                    <MdOutlineEmail  size={30} /> hinanadirmughal521@gmail.com 
              </div>
              <div className='flex gap-3 items-center' data-aos="zoom-in">
                    < FaPhone size={40} /> 03323294875 
              </div>
            </div>
            <div className=' space-y-8'>
                <div className='flex flex-col gap-3' data-aos="zoom-in">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border stroke-orange-950'
                    id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in">
                    <label htmlFor="email">E-mail</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='email' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className=' bg-red-900 border-solid '
                    id='message' rows={8}>
                    </textarea>
                </div>
                <button className='bg-red-100 font-bold p-2 px-6' data-aos="flip-left">Send</button >
                <button className='bg-red-100 font-bold p-2 px-6' data-aos="flip-left">Send fast</button >
            </div>
        </div>
      
    </div>
  )
}

export default Contacts
