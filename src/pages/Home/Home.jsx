import Navbar from '../../components/Navbar/Navbar';
import HeroScreen from '../HeroScreen/HeroScreen';
import './Home.css';

const Home = () => {
  return (
    <main className="main-container">
        <div className="homepage-container">
            <Navbar />
            <HeroScreen />
        </div>
    </main>
  )
}

export default Home