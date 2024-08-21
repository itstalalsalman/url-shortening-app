import './UrlOutput.css';
import useStore from '../../store';

const UrlOutput = () => {
  const { urlSearched } = useStore();
  return (
    <div className='url-output-container'>
        {urlSearched.length > 0 && 
          urlSearched.map((obj) => (
            <div className='output'>
              <h3 className='input-head'>{obj.inpUrl}</h3>
              <div className='output-copy-cont'>
                  <h4>{obj.resUrl}</h4>
                  <button className='copy-btn green-hover flex-props'>Copy</button>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default UrlOutput