import Navbar from '../../components/Navbar/Navbar';
import UrlInput from '../../components/UrlInput/UrlInput';
import UrlOutput from '../../components/UrlOutput/UrlOutput';
import AdvanceStats from '../AdvanceStats/AdvanceStats';
import HeroScreen from '../HeroScreen/HeroScreen';
import './Home.css';

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
    </main>
  )
}

export default Home