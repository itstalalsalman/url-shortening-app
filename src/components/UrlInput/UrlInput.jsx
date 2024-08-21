import './UrlInput.css';
import axios from 'axios';

import useStore from '../../store';
import { validUrlIput } from '../../regex';

const UrlInput = () => {
  const {urlInputVal, setUrlInputVal, error, setError, errorText, setErrorText, setUrlSearched} = useStore();

  const fetchDataFromAPI = async (url) => {
      let result;
      await axios.post('/api', { url: url })
                  .then((response) => result = response.data.result_url)
                  .catch((error) => console.error(error));
      return result;
  }

  const handleClickAndResult = async () => {
    if(urlInputVal === ''){
      setError(true);
      setErrorText("Please add a link");
      return ;
    }
    if(!validUrlIput.test(urlInputVal)){
      setError(true)
      setErrorText("Incorrect link");
      return ;
    }

    const shortUrl = await fetchDataFromAPI(urlInputVal);
    setUrlSearched({inpUrl: urlInputVal, resUrl: shortUrl});
  }

  return (
    <div className="inp-url flex-props">
        <input type="text" className={`url-input ${error ? 'error' : ''}`} value={urlInputVal} onChange={(e) => setUrlInputVal(e.target.value)} placeholder='Shorten a link here...'/>
        <button className='green-hover' onClick={() => handleClickAndResult()}>Shorten It!</button>
        {error && <p className='error-text'>{errorText}</p>}
    </div>
  )
}

export default UrlInput