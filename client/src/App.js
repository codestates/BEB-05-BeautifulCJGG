import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    console.log('auth: ', auth);
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header init={init} isLoggedIn={isLoggedIn}></Header>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
