import './HeroScreen.css'
import heroImg from '../../assets/illustration-working.svg'

const HeroScreen = () => {
  return (
    <div className='hero-main'>
        <div className='info-container'>
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className='green-hover'>Get Started</button>
        </div>
        <div className='image-container'>
            <img src={heroImg} alt="hero-image" className='hero-image' />
        </div>
    </div>
  )
}

export default HeroScreen