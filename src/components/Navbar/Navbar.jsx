import './Navbar.css';
import logo from '../../assets/logo.svg';


const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logoAndList'>
            <img src={logo} alt='logo' className='logo'/>
            <ul className='list'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
        </div>
        <div className='btns-container flex-props'>
            <button className='btn-login flex-props'>Login</button>
            <button className='btn-signup green-hover flex-props'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar