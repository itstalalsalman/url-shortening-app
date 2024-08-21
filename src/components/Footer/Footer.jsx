import './Footer.css';

import ListComponent from '../ListComponent/ListComponent';

import logo from '../../assets/logoFooter.svg';
import facebook from '../../assets/icon-facebook.svg';
import twitter from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';


const Footer = () => {
    
    const footerlisting = [
        {listName: "Features", listItemsNames: ["Link Shortening", "Branded Links", "Analytics"]},
        {listName: "Resources", listItemsNames: ["Blog" , "Developers", "Support"]},
        {listName: "Compnay", listItemsNames: ["About", "Our Team", "Careers", "Contacts"]}
    ];

    const icons = [
        facebook,
        twitter,
        pinterest,
        instagram
    ];

  return (
    <div className="footer">
        <img src={logo} alt='logo' className='logo-footer'/>
        <div className='listing-and-icons'>
            {footerlisting.map((list) => (
                <ListComponent liName={list.listName} liItems={list.listItemsNames} />
            ))}
            <div className='icons-container'>
                {icons.map(icon => <img src={icon} alt='footer-icon' className='icon-footer' />)}
            </div>
        </div>
    </div>
  )
}

export default Footer