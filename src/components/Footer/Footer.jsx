import './Footer.css';

import ListComponent from '../ListComponent/ListComponent';

import logo from '../../assets/logoFooter.svg';

const Footer = () => {
    
    const footerlisting = [
        {listName: "Features", listItemsNames: ["Link Shortening", "Branded Links", "Analytics"]},
        {listName: "Resources", listItemsNames: ["Blog" , "Developers", "Support"]},
        {listName: "Compnay", listItemsNames: ["About", "Our Team", "Careers", "Contacts"]}
    ];

  return (
    <div className="footer">
        <img src={logo} alt='logo' className='logo-footer'/>
        <div className='listing-and-icons'>
            {footerlisting.map((list) => {
                <ListComponent liName={list.listName} liItems={list.listItemsNames} />
            })}
        </div>
    </div>
  )
}

export default Footer