import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 sm:p-10 p-5 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black sm:text-[48px] text-[30px]'>"</p>
    <div>
      <p className='text-white tracking-wider sm:text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} {company && "of"} {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl sm:min-h-[300px] min-h-[250px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>

      <div className="sm:px-16 px-4 -mt-20 pb-14 flex flex-wrap gap-7 justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "")