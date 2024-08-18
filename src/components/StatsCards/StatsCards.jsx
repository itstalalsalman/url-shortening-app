import './StatsCards.css';

const StatsCards = ({img, heading, description}) => {
  return (
    <div className='stat-card'>
        <div className="icon-container flex-props">
            <img src={img} alt="icon" className="card-icon"/>
        </div>
        <h3 className="card-heading">{heading}</h3>
        <p className="card-description">{description}</p>
    </div>
  )
}

export default StatsCards