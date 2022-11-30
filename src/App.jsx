import React, { memo } from 'react'
import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';

import { useRoutes } from 'react-router-dom';
import routes from '@/router';


const App = memo(() => {

  return (
    <div className='app'>
      <AppHeader/>
      <div className="pages">
        { useRoutes(routes) }
      </div>
      <AppFooter/>
    </div>
  )
})

export default App