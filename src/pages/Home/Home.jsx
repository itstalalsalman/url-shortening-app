import Navbar from '../../components/Navbar/Navbar';
import UrlInput from '../../components/UrlInput/UrlInput';
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
        <UrlInput />
        <div className='urlRes-AdvanceStats'>
            
            <AdvanceStats />
        </div>
    </main>
  )
}

export default Home