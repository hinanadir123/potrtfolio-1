import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
  {
   id:0,
   title: "simple calculator",
   desc:"A typescript based app, for calculation purpose basic operators",
   img: "/img4.PNG",
   tags: ["typescript",]
},

{
  id:0,
  title: "count down timer",
  desc:"A next.js project based app, for purpose of countdown called cowntdown timer",
  img: "/countdown timer.PNG",
  tags: ["typescript", "next.js", "css", "html"]
},

{
  id:0,
  title: "currency converter",
  desc:"A next.js project based app, for purpose of currency rates all over the world",
  img: "/ss8.PNG",
  tags: ["typescript", "next.js", "css", "html"]
},

{
  id:0,
  title: "count down timer",
  desc:"A next.js project based app, for purpose of countdown called cowntdown timer",
  img: "/countdown timer.PNG",
  tags: ["typescript", "next.js", "css", "html"]
},

{
  id:0,
  title: "static interactive resume",
  desc:"A next.js project based resume, for purpose of career info, personal info and educational information",
  img: "/ss9.PNG",
  tags: ["typescript", "next.js", "css", "html" ,"tailwind css"]
},

{
  id:0,
  title: "Weather widget",
  desc:"A next.js project based app, for weather condition and temperature knowledge",
  img: "/ss 11.PNG",
  tags: ["typescript", "next.js", "css", "html"]
},

];


const project = () => {
  return (
    <div id= 'project' className='container pt-32'>
        <Heading  title='My project'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
        
        />))}
        </div>
         
    </div>
  )
}

export default project
