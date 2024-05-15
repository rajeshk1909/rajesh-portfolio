import { useEffect, useState, useRef } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
// import LoadingBar from "react-top-loading-bar"
import { motion, useInView } from "framer-motion"

const AboutMe = () => {
  const [html, setHtml] = useState(0)
  const [css, setCss] = useState(0)
  const [js, setJs] = useState(0)
  const [React, setReact] = useState(0)
  const [mui, setMui] = useState(0)
  const [tailwind, setTailwind] = useState(0)
  const [typescript, setTypescript] = useState(0)

  const ref = useRef<any>()
  const isInView = useInView(ref, { margin: "-100px" })
  const varients = {
    initial: {
      x: -100,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }

  useEffect(() => {
    setTimeout(() => {
      setHtml(70)
      setCss(80)
      setJs(70)
      setReact(70)
      setTypescript(70)
      setMui(60)
      setTailwind(80)
    }, 1000)
  }, [])

  return (
    <motion.div
      className='mx-5 md:mx-20'
      variants={varients}
      initial='initial'
      whileInView='animate'
      ref={ref}
      animate={isInView && "animate"}>
      <h1 className='text-3xl md:text-4xl text-white font-bold uppercase'>
        About Me
      </h1>
      <motion.div className='grid md:grid-cols-2 gap-4 md:mt-10'>
        <motion.div className='p-4'>
          <motion.div className=''>
            <h1 className='text-white m-2 text-xl'>HTML</h1>
            <ProgressBar completed={html} bgColor='#2596be' />
          </motion.div>
          <motion.div className='mt-6'>
            <h1 className='text-white m-2 text-xl'>CSS</h1>
            <ProgressBar
              completed={css}
              bgColor='#2596be'
              // completedClassName="barCompleted"
              // barContainerClassName="container"
            />
          </motion.div>
          <motion.div className='mt-6'>
            <h1 className='text-white m-2 text-xl'>Javascript</h1>
            <ProgressBar
              completed={js}
              bgColor='#2596be'
              // completedClassName="barCompleted"
              // barContainerClassName="container"
            />
          </motion.div>
          <motion.div className='mt-6'>
            <h1 className='text-white m-2 text-xl'>Typescript</h1>
            <ProgressBar
              completed={typescript}
              bgColor='#2596be'
              // completedClassName="barCompleted"
              // barContainerClassName="container"
            />
          </motion.div>
          <motion.div className='mt-6'>
            <h1 className='text-white m-2 text-xl'>React Js</h1>
            <ProgressBar
              completed={React}
              bgColor='#2596be'
              // completedClassName="barCompleted"
              // barContainerClassName="container"
            />
          </motion.div>
          <motion.div className='mt-6'>
            <h1 className='text-white m-2 text-xl'>MUI</h1>
            <ProgressBar
              completed={mui}
              bgColor='#2596be'
              // completedClassName="barCompleted"
              // barContainerClassName="container"
            />
          </motion.div>
          <motion.div className='mt-6'>
            <h1 className='text-white m-2 text-xl'>Tailwind Css</h1>
            <ProgressBar
              completed={tailwind}
              bgColor='#2596be'
              // completedClassName="barCompleted"
            />
          </motion.div>
        </motion.div>
        <motion.div className='p-4'>
          <h1 className='text-4xl text-white font-bold uppercase'>About Me</h1>
          <p className='text-white text-xl mt-10'>
            {" "}
            I am software engineer having expertise in web and mobile
            application development using React and React Native
          </p>

          <p className='text-white text-xl mt-10'>
            I'm enthusiastic about tackling intricate challenges in web
            applications. I firmly believe that quick and scalable web
            applications are pivotal in revealing insights and fueling
            expansion. Being a Frontend Developer, I am dedicated to remaining
            current with the newest tools and technologies to assist
            organizations.
          </p>

          <p className='text-white text-xl mt-10'>
            Worked on Healthcare and E-commerce domain projects creating fluid
            and efficient single-page web applications from scratch using clean
            architecture.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AboutMe
