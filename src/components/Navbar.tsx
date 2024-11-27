import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [isMenuopen, setisMenuOpen] = useState(false)

  const toggleMenu= () => {
    setisMenuOpen(!isMenuopen)
  }
  return (
    <div  data-aos="zoom-in" className= 'container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-extrabold font-6xl'> Hina nadir mughal</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
               <li className='menulink'><a href="#hero"><b>Home</b></a></li>
               <li className='menulink'><a href="#about"><b>About</b></a></li>      
               <li className='menulink'><a href="#project"><b>project</b></a></li>
               <li className='menulink'><a href="#skills"><b>Skills</b></a></li>
               <li className='menulink'><a href="#contacts"><b>Contacts</b></a></li>
            </ul>
          <div className='md:hidden' onClick={toggleMenu}>
            {isMenuopen? < AiOutlineClose size={38}/>:
            <AiOutlineMenu  size={30}/>
  }
            </div>
        </div>
        {isMenuopen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden font-extrabold'>
            <li className='menuLink '>
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href="#About" onClick={toggleMenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href="#project" onClick={toggleMenu}>Priject</a>
            </li>
            <li className='menuLink'>
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>

          )
        }
      
    </div>
  )
}

export default Navbar
