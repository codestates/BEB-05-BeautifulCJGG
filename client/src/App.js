import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

import Header from './components/Header';
import Footer from './components/Footer';

import './assets/css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
