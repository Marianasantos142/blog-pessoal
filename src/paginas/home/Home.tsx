import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../componetes/estaticos/cadastroPosts/deletarPostagens/listaPostagens/modalPostagens/tabPostagens/tabPostagens';
import ModalPostagem from '../../componetes/estaticos/cadastroPosts/deletarPostagens/listaPostagens/modalPostagens/modalPostagens';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { Link } from 'react-router-dom';
import {Box} from '@mui/material';
import { toast } from 'react-toastify';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")

          toast.error('🦄 Wow so easy!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;