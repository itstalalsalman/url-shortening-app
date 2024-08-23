import './HeroScreen.css'
import { motion } from 'framer-motion'

import heroImg from '../../assets/illustration-working.svg'


const HeroScreen = () => {

  
  return (
    <div className='hero-main'>
        <div className='info-container'>
            <motion.h1
              initial={{ x: '-50vw' }}  // Starts from the right
              animate={{ x: 0 }}  // Animates to its place
              transition={{ type: 'spring', stiffness: 80, duration: 0.5 }}
            >
              More than just shorter links
            </motion.h1>
            <motion.p
              initial={{ x: '-50vw' }}  // Starts from the right
              animate={{ x: 0 }}  // Animates to its place
              transition={{ type: 'spring', stiffness: 80, duration: 0.5 }}
            >
              Build your brand's recognition and get detailed insights on how your links are performing.
            </motion.p>
            <button className='green-hover'>Get Started</button>
        </div>
        <div className='image-container'>
            <img src={heroImg} alt="hero-image" className='hero-image' />
        </div>
    </div>
  )
}

export default HeroScreen