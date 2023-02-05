import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import Enquire from './components/Enquire';
import Login from './components/Login';
import Register from './components/Register';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import Item from './components/Item';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/enquire' element={<Enquire />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' >
            <Route path=':id' element={<Item />} />
          </Route >
        </Routes>
        <Signup />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

