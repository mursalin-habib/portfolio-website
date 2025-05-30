import React from 'react';
import { EDUCATION } from '../constants/index';
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{ duration:1.5 }}
      className='my-20 text-center text-4xl'>Education</motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
            <div
            key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='w-full lg:-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb2 font-semibold'>
                        {education.institute} <br></br>
                        <span className='text-sm text-purple-100'>
                            {education.course}
                        </span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>{education.grade}</p>
                    <h6 className='mb-2 text-purple-800'>Modules studied:</h6>
                    <ul className="grid grid-cols-2 list-disc pl-5 gap-y-2">
                {education.modules.map((tech, index) => (
                  <li key={index} className="text-sm text-purple-100">
                    {tech}
                  </li>
                ))}
              </ul>
                </motion.div>
            </div>
        ) 

        )}
      </div>
    </div>
  )
}

export default Education
