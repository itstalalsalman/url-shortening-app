import StatsCards from '../../components/StatsCards/StatsCards';
import './AdvanceStats.css';

import brandRecognition from '../../assets/icon-brand-recognition.svg';
import detailedRecords from '../../assets/icon-detailed-records.svg';
import fullyCustomizable from '../../assets/icon-fully-customizable.svg';

const AdvanceStats = () => {
  return (
    <div className="advanceStats-container">
        <div className="stats-header">
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className='statistics-division'>
            <div className='brandRecognition-container'>
                <StatsCards 
                    img={brandRecognition} 
                    heading={"Brand Recognition"} 
                    description={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content."}
                />
            </div>
            <div className='detailedRecords-container'>
                <StatsCards 
                    img={detailedRecords} 
                    heading={"Detailed Records"} 
                    description={"Gain insights into who is clicking your links. Knowing when and where pepople engage with your content helps inform better decisions."}
                />
            </div>
            <div className='fullyCustomizable-container'>
                <StatsCards 
                    img={fullyCustomizable} 
                    heading={"Fully Customizable"} 
                    description={"Improve brand awareness and content discoverability through customizable links, supercharging audience management."}
                />
            </div>
            <p className='line-behind'></p>
        </div>
    </div>
  )
}

export default AdvanceStats