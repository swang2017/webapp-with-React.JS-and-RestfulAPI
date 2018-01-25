import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AllFlowers} from './components/AllFlowers'
import {AddFlowers} from './components/AddFlowers'
import {ContactUs} from './components/ContactUs'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {BaseLayout} from './components/BaseLayout'



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
    <Route path="/contact-us" component={ContactUs} />
    <Route path="/all-flowers" component={AllFlowers} />
    <Route path="/add-flowers" component={AddFlowers} />
    <Route path="/" component={AllFlowers} />
  </Switch>
  </BaseLayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
