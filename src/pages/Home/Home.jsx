import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import HeroScreen from '../HeroScreen/HeroScreen';

import UrlInput from '../../components/UrlInput/UrlInput';
import UrlOutput from '../../components/UrlOutput/UrlOutput';
import AdvanceStats from '../AdvanceStats/AdvanceStats';

import BoostLink from '../../components/BoostLink/BoostLink';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <main className="main-container">
        <div className="homepage-container">
            <Navbar />
            <HeroScreen />
        </div>
        <div className='urlRes-AdvanceStats'>
            <UrlInput />
            <UrlOutput />
            <AdvanceStats />
        </div>
        <div className='link-booster-container'>
            <BoostLink />
        </div>
        <div className='footer-container'>
            <Footer />
        </div>
    </main>
  )
}

export default Home