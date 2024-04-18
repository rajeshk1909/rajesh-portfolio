import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { CiMenuBurger } from "react-icons/ci"
import { motion } from "framer-motion"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className='flex justify-between px-4 py-6 md:mx-20'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='text-2xl cursor-pointe font-semibold  text-white'>
          <span className='text-[#2596be] '>R</span>ajesh{" "}
          <span className='text-[#2596be] '>K</span>umar
        </motion.h1>
        <div className='flex md:hidden'>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onClick={toggleMenu}
            type='button'
            className='text-[#2596be] hover:text-black focus:outline-none'
            aria-label='Toggle menu'>
            {showMenu ? <IoMdClose /> : <CiMenuBurger />}
          </motion.button>
        </div>
        <div className='hidden md:flex'>
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='mx-4 cursor-pointer hover:border-b-[2px] hover:border-[#2596be] text-white'>
            <span className='text-[#2596be] font-bold'>01.</span> About
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='mx-4 cursor-pointer hover:border-b-[2px] hover:border-[#2596be] text-white'>
            <span className='text-[#2596be] font-bold'>02.</span> Experience
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='mx-4 cursor-pointer hover:border-b-[2px] hover:border-[#2596be] text-white'>
            <span className='text-[#2596be] font-bold'>03.</span> Work
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='mx-4 cursor-pointer hover:border-b-[2px] hover:border-[#2596be] text-white'>
            <span className='text-[#2596be] font-bold'>04.</span> Contact
          </motion.h4>
        </div>
      </div>

      {showMenu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='mt-3 md:hidden'>
          <h4 className='block mx-3 cursor-pointer hover:border-b-[2px] text-center hover:border-[#2596be] mt-4 text-white'>
            <span className='text-[#2596be] font-bold'>01.</span> About
          </h4>
          <h4 className='block mx-3 cursor-pointer hover:border-b-[2px] text-center hover:border-[#2596be] mt-4 text-white'>
            <span className='text-[#2596be] font-bold'>02.</span> Experience
          </h4>
          <h4 className='block mx-3 cursor-pointer hover:border-b-[2px] text-center hover:border-[#2596be] mt-4 text-white'>
            <span className='text-[#2596be] font-bold'>03.</span> Work
          </h4>
          <h4 className='block mx-3 cursor-pointer hover:border-b-[2px] text-center hover:border-[#2596be] mt-4 text-white'>
            <span className='text-[#2596be] font-bold'>04.</span> Contact
          </h4>
          {/* <button className="border border-[#2596be] px-6 md:ml-2 rounded md:-mt-1 hover:bg-[#2596be] py-2 ml-[35%] hover:text-white text-white mt-4">
            Resume
          </button> */}
        </motion.div>
      )}
    </>
  )
}

export default Navbar
