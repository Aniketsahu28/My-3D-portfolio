import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index,title,icon}) => {
  return (
    <p>{title}</p>  
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)} 
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a 2nd year Undergraduate student currently pursuing my Computer 
        Engineering degree at Fr. Conceicao Rodrigues Institute of Technology. <br/>

        →Full Stack web developer and a Competitive Programmer. <br/>
        →I am expert in the following programming languages<br/>
        Client-side Scripting : HTML, CSS, JavaScript.<br/>
        Server-side Scripting : Java, C, C++<br/>
        →Expert in figma for UI designing.<br/>
        →I also do freelance for website and application development. Minor 
        projects are also accepted.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key = {service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default About