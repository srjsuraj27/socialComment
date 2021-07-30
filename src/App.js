import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Integration from './pages/Integration';
import Price from './pages/Price';
import Blog from './pages/Blog';
import About from './pages/About';
import EarlyAccess from './pages/EarlyAccess';
import GetStarted from './pages/GetStarted';
import WatchVideo from './pages/WatchVideo';

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
              <Home />
          </Route> 
          <Route path='/integration' exact>
              <Integration />
          </Route> 
          <Route path='/price' exact>
              <Price />
          </Route> 
          <Route path='/blog' exact>
              <Blog />
          </Route> 
          <Route path='/about' exact>
              <About />
          </Route> 
          <Route path='/earlyaccess' exact>
              <EarlyAccess />
          </Route> 
          <Route path='/getstarted' exact>
              <GetStarted />
          </Route> 
          <Route path='/watchvideo' exact>
              <WatchVideo />
          </Route> 
        </Switch>
      </Layout>
    </div>
  )
}

export default App;
