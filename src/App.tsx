import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';

import './App.css';

import { Provider } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Navbar from './componetes/estaticos/navbar/Navbar';
import Login from './paginas/Login/Login';
import ListaTema from './tema/cadastroTemas/deletarTemas/listaTema/ListaTema';
import ListaPostagem from './componetes/estaticos/cadastroPosts/deletarPostagens/listaPostagens/listaPostagens';
import CadastroPost from './componetes/estaticos/CadastroPosts';
import DeletarTema from './tema/cadastroTemas/deletarTemas/DeletarTemas';
import Footer from './componetes/estaticos/footer/Footer';
import DeletarPostagem from './componetes/estaticos/cadastroPosts/deletarPostagens/deletarPostagem';
import store from './store/tokens/Store';



function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
       
          <div style={{ minHeight: '100vh' }}>
          <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />


            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
      
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
