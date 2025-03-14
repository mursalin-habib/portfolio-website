import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaDocker } from "react-icons/fa6";
import{ motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{ duration:1.5 }}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duraiton:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-1'>
                <TbBrandTypescript className='text-7xl text-sky-700' />
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-1'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-1'>
                <TbBrandNextjs className='text-7xl ' />
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-1'>
                <SiFirebase className='text-7xl text-red-700' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-1'>
                <SiDjango className='text-7xl text-emerald-900' />
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-1'>
                <FaNodeJs className='text-7xl text-green-500' />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-1'>
                <FaDocker className='text-7xl text-sky-700' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies

