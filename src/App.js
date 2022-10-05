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
              {/* Dashbord */}
              <Route path='/' element='ECommerce'/>
              <Route path='/ecommerce' element='ECommerce'/>

              {/* pages */}
              <Route path='/orders' element='Orders'/>
              <Route path='/employess' element='Employees'/>
              <Route path='/customers' element='Customers'/>

              {/* Apps */}
              <Route path='/kanban' element='Kanban' />
              <Route path='/editor' element='Editor' />
              <Route path='/calender' element='Calender' />
              <Route path='/color-picker' element='ColorPicker' />

              {/* Charts */}
              <Route path='/line' element='Line' />
              <Route path='/area' element='Area' />
              <Route path='/bar' element='Bar' />
              <Route path='/pie' element='Pie' />
              <Route path='/financial' element='Financial' />
              <Route path='/color-mapping' element='ColorMapping' />
              <Route path='/pyramid' element='Pyaramid' />
              <Route path='/stacked' element='Stacked' />
            </Routes>
          </div>


       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
