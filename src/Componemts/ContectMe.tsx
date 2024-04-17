import { FaHackerrank, FaLinkedin, FaGithub } from "react-icons/fa6"

const ContectMe = () => {
  return (
    <div className='mx-5 md:mx-20 my-10'>
      <h1 className='text-3xl text-center md:text-4xl text-white font-bold uppercase'>
        <span style={{ borderBottom: "2px solid white" }}>Contact Me</span>
      </h1>
      <h1 className='text-3xl text-center md:text-6xl text-white mt-10 font-bold uppercase'>
        <span>get in touch</span>
      </h1>

      <div className='flex justify-center items-center mt-5'>
        <div className='mx-5'>
          <a
            href='https://www.linkedin.com/in/rajesh-kumar-919999292'
            target='_blank'>
            <FaLinkedin className='text-white font-bold text-4xl cursor-pointer' />
          </a>
        </div>
        <div className='mx-5'>
          <a href='https://github.com/rajeshk1909' target='_blank'>
            <FaGithub className='text-white font-bold text-4xl cursor-pointer' />
          </a>
        </div>
        <div className='mx-5'>
          <a
            href='https://www.linkedin.com/in/rajesh-kumar-919999292'
            target='_blank'>
            <FaHackerrank className='text-white font-bold text-4xl cursor-pointer' />
          </a>
        </div>
        {/* <div className='mx-5 cursor-pointer'>
          <a href='https://leetcode.com/Harishguhan_M/' target='_blank'>
            <svg
              width='24px'
              height='24px'
              viewBox='0 0 24 24'
              role='img'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
              className='cursor-pointer'>
              <title>LeetCode</title>
              <path d='M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z' />
            </svg>
          </a>
        </div> */}
      </div>

      <div className='rounded p-8 mt-10'>
        <form>
          <div className='mb-4'>
            <label
              className='block text-sm font-bold mb-2 text-white'
              htmlFor='name'>
              Name
            </label>
            <input
              className='shadow bg-[#0f172a] appearance-none border-b-2 border-[#2596be] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500'
              id='name'
              type='text'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4 mt-5 md:mt-12'>
            <label
              className='block text-white text-sm font-bold mb-2'
              htmlFor='email'>
              Email Address
            </label>
            <input
              className='shadow bg-[#0f172a] appearance-none border-b-2 border-[#2596be] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500'
              id='email'
              type='email'
              placeholder='Your Email Address'
            />
          </div>
          <div className='mb-4 mt-5 md:mt-12'>
            <label
              className='block  text-white text-sm font-bold mb-2'
              htmlFor='message'>
              Message
            </label>
            <textarea
              className='shadow text-white bg-[#0f172a] appearance-none border-b-2 border-[#2596be] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500'
              id='message'
              rows={4}
              placeholder='Your Message'></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <div className="grid md:grid-cols-2 gap-4 mt-10">
        <div className="bg-gray-200 p-4">
          <h1 className="text-3xl font-bold text-gray-800">First Grid</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-gray-300 p-4">
          <h1 className="text-3xl font-bold text-gray-800">Second Grid</h1>
          <p className="text-gray-600 mt-2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default ContectMe
