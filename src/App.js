import ReactTooltip from 'react-tooltip';
import {FiSettings} from 'react-icons/fi';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
const activeMenu = true;


function App() {
  return (
    <div>
      <BrowserRouter>
       <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
        <button type='button' className='text-2xl p-3 hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}>
        <FiSettings></FiSettings>
        </button>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            sidbar
          </div>
        ) : (
          <div>
            sidbar w-0
          </div>
        ) }
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
