import './ListComponent.css';

const ListComponent = ({liName, liItems}) => {
  return (
    <div className='list-container'>
        <h5 className='list-heading'>{liName}</h5>
        <ul>
            {liItems.map((item) => <li className='item-name'>{item}</li>)}
        </ul>
    </div>
  )
}

export default ListComponent