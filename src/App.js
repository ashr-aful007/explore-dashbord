import {FiSettings} from 'react-icons/fi';

import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
const activeMenu = false;


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
          <div className='w-0 dark:bg-secondary-dark-bg'>
            sidbar 
          </div>
        ) }
        <div className={
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`
        }>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            Navbar
          </div>
        </div>

          <div>
            <Routes>
              <Route path='/' element='ECommerce'/>
              <Route path='/ecommerce' element='ECommerce'/>
            </Routes>
          </div>


       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
