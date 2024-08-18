import './UrlInput.css';

import desktopIcon from '../../assets/bg-boost-desktop.svg';

const UrlInput = () => {
  return (
    <div className="inp-url flex-props">
        <input type="text" className="url-input" placeholder='Shorten a link here...'/>
        <button className='green-hover'>Shorten It!</button>
    </div>
  )
}

export default UrlInput