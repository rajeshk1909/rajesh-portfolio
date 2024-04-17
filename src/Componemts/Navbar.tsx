// import portFolioImg from "../../assets/porrtfolioHeroImg.png"
import { motion } from "framer-motion"
import TypeWritter from "./TypeWritter"

const textVarients = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Navbar = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 gap-4 min-h-[90vh] md:mx-20'>
        <motion.div
          className='p-4 mt-20 md:mt-0 flex flex-col justify-center textContainer'
          initial='initial'
          animate='animate'
          variants={textVarients}>
          <motion.p
            className='text-xl md:text-3xl font-bold uppercase tracking-widest text-[#2596be]'
            variants={textVarients}>
            Rajesh Kumar K
          </motion.p>
          <motion.h2
            className='font-bold mb-2 text-white text-3xl md:text-5xl mt-4'
            variants={textVarients}>
            <TypeWritter />
          </motion.h2>
          <div className='flex'>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='border border-[#2596be] w-[120px] py-2 mt-4 ml-2 rounded hover:bg-[#2596be] text-white'>
              Resume
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='border border-[#2596be] w-[120px] py-2 mt-4 ml-2 rounded hover:bg-[#2596be] text-white'>
              Contact Me
            </motion.button>
          </div>
        </motion.div>
        {/* <motion.div className='md:p-4 mr-20 md:mr-0' variants={textVarients}>
          <motion.img
            src={portFolioImg}
            className='md:mt-10 fadeInRight'
            variants={textVarients}
          />
        </motion.div> */}

        {/* <div className="">
          
        </div> */}
      </div>
    </>
  )
}

export default Navbar
