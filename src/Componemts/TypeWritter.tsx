import { useEffect, useState } from "react"

const TypeWritter = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const textArray = ["Frontend developer..!", "Software Engineer..!"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const text = textArray[currentTextIndex]
      if (currentIndex === text.length) {
        clearInterval(interval)
        setTimeout(() => {
          setCurrentIndex(0)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length)
          setDisplayText("")
        }, 1000) // Pause between texts (milliseconds)
        return
      }
      setDisplayText((prevText) => prevText + text[currentIndex])
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 100) // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval)
  }, [currentTextIndex, currentIndex, textArray])

  return (
    <span className='inline-block overflow-hidden border-r border-orange-500'>
      {displayText}
    </span>
  )
}

export default TypeWritter
