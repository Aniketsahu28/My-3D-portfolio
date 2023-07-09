import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, deploy } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deployment_link }) => {
  return (
    <motion.div variants={fadeIn(
      "up", "spring", index * 0.5, 0.75
    )}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-1 card-img_hover'>
            <div style={deployment_link ? { display: "flex" } : { display: "none" }} onClick={() => window.open(deployment_link, "_blank")}
              className='bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'
            >
              <img
                src={deploy}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div style={source_code_link ? { display: "flex" } : { display: "none" }} onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-1'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-secondary mt-2 text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>
      <div className='w-full flex justify-center text-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)
          }
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          My portfolio comprises of several projects that demonstrate my skills and experience through real-world examples of my work. These projects have equipped me with the ability to solve complex problems, work with different technologies, and manage projects effectively. Each project is briefly described below, along with links to code repositories.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "project");