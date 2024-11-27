import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 data-aos="zoom-in" className='text-4xl md:text-5xl'><b>Technologies mostly i use</b></h2>
           <p  data-aos="zoom-in"className=' text-yellow-500-500 pt-2'><b>
           A motivated beginner in software development, passionate about creating innovative solutions 
           and enhancing user experiences. Eager to learn new technologies and programming languages, I 
           thrive on tackling challenges and collaborating with others. With a strong foundation in 
           coding principles and a keen interest in smart technologies, I aim to contribute to impactful
            projects and continuously grow my skills in the tech industry.</b>
           </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-amber-50 text-3xl sm: text-4xl:'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in">Typescript</h2>
              <h2 data-aos="zoom-in">Next.js</h2>
              <h2 data-aos="zoom-in">React.js</h2>
           
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in">Html</h2>
              <h2 data-aos="zoom-in">css</h2>
              <h2 data-aos="zoom-in">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
