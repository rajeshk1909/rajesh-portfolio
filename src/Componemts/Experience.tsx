import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const Experience = () => {
  const ref = useRef<any>()
  const isInView = useInView(ref, { margin: "-100px" })
  const variants = {
    initial: {
      x: -100, // Start off-screen to the left for left content
      opacity: 0,
    },
    animate: {
      x: 0, // Move to the center
      opacity: 1,
      transition: {
        duration: 1, // Adjust duration as needed
      },
    },
  }

  return (
    <motion.div
      className='mx-5 md:mx-20'
      variants={variants}
      initial='initial'
      whileInView='animate'
      ref={ref}
      animate={isInView && "animate"}>
      <h1 className='text-4xl text-white font-bold uppercase mt-5'>
        Experince
      </h1>
      <motion.div className='grid md:grid-cols-2 gap-4 mt-10'>
        <motion.div className='p-4'>
          <h1 className='text-3xl text-white font-bold'>
            E-Commerce Application
          </h1>
          <p className='text-white mt-6 text-xl'>
            1){"  "} Developed a custom e-commerce platform with ReactJS and
            Redux, emphasizing functionality and performance optimization.
          </p>

          <p className='text-white mt-6 text-xl'>
            2){"  "} Designed and implemented responsive user interfaces using
            React Hooks, Material UI components, and CSS/Sass for enhanced user
            experience.
          </p>

          <p className='text-white mt-6 text-xl'>
            3){"  "} Implemented automated testing strategies using Jest and
            React Testing Library to maintain code integrity and prevent
            potential issues.
          </p>

          <p className='text-white mt-6 text-xl'>
            4){"  "} Collaborated with cross-functional teams to gather
            requirements and translate them into technical solutions aligned
            with project goals.
          </p>

          <p className='text-white mt-6 text-xl'>
            5){"  "} Conducted code reviews and optimizations to streamline
            development processes and improve overall project efficiency.
          </p>
        </motion.div>
        <motion.div className='p-4'>
          <h1 className='text-3xl text-white font-bold'>
            Event Booking Application
          </h1>

          <p className='text-white mt-6 text-xl'>
            1){"  "} Bootstrapped the project from scratch using Vite and React
            as a UI library along with React Router Dom for client-side
            navigation.
          </p>

          <p className='text-white mt-6 text-xl'>
            2){"  "} Followed component-based architecture and created reusable
            react components Reduced development time of UI screens considerably
            by using Tailwind CSS utility classes.
          </p>

          <p className='text-white mt-6 text-xl'>
            3){"  "} Used Trello for project and task management.
          </p>

          <p className='text-white mt-6 text-xl'>
            4){"  "} Used the formik and Yup for client-side form validation.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Experience
