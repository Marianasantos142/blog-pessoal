import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button} from '@material-ui/core'
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import './Login.css'
import { login } from '../../services/service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Action';





function Login () {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
      {
         id: 0,
         usuario: '',
         senha: '',
         token: '',
    
        }
        )


        function updatedModule(e: ChangeEvent<HTMLInputElement>){
             setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
             })
        }


         useEffect(()=>{
            if(token != ''){
                dispatch(addToken(token))
                navigate('/home')
            }
         }, [token])


         async function onSubmite(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)
                alert('Usário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
            
         }
    return (
        <>
        
        <Grid container  direction='row' justifyContent='center' alignItems='center'>

            <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
                <form onSubmit={onSubmite}>
                   
                   <Typography variant='h3' component='h3' gutterBottom color='textPrimary' className='textos1'>Entrar
                   </Typography>
                  
                  
                   <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                   
                   
                   <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password'></TextField>

                   <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModule(e)}id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal'fullWidth />
                   
                   
                   
                <Box marginTop={2} textAlign='center'>
                    
                    <Link to='/Home' className='text-decorator-none'>
                    
                    <Button type='submit' variant='contained' color='primary'>Logar</Button>
                    
                    </Link>
                    
                   </Box>
                    

                </form>
          <Box display='flex' justifyContent='center' marginTop={2}>

         </Box>

        <Box marginRight={1}>
        <Typography variant='subtitle1' gutterBottom
         className='textos1'>Não tem uma conta?</Typography>

                  </Box>
                  <Typography variant='subtitle1' gutterBottom
         className='textos1'>Cadastre-se</Typography>

               </Box>
            </Grid>

           <Grid item xs={6} className='imagem' >


           </Grid>


        </Grid >
        
        </>



    )
}
export default Login