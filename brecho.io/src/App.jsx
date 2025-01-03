import './App.css'
import Header from './components/Header.jsx'
import { Routes, Route } from 'react-router-dom';
import Home from '../public/View/Home.jsx';
import Favoritos from '../public/View/Favoritos.jsx';
import Carrinho from '../public/View/Carrinho.jsx';
import Footer from './components/Footer.jsx';
import Login from '/src/components/Login.jsx';
import Cadastro from '/src/components/Cadastro.jsx';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

