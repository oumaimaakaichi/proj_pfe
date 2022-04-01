import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookies, setCookies } from "cookies-next";
import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import image from '../../public/l2.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { TextField, Button,  Alert } from '@mui/material';
export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const  [user, setUser] = useState(false)
    const [token, setToken] = useState("")

    const router = useRouter();

    useEffect(() => {
        if(localStorage && localStorage.getItem("token") ) {
                router.push("/")
        }
    }, [token , user])

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
          Adr: email,
          MPass: password,
        };
    
        console.log(payload)

        let response = await fetch(
          process.env.REACT_APP_STRAPI_API_URL + "/utilisateur/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        ).then((res) => {
          if (res.status) {
           console.log(res.message)
          } else {
           console.log("Probléme de connexion")
          }
          return res;
        });
    
        if (response != undefined) {
          let whoami = await response.json();
          if (whoami.data.utilisateur != undefined) {
            localStorage.setItem("user", JSON.stringify(whoami.data.utilisateur));
          }
          if (whoami.data.token != undefined) {
            localStorage.setItem("token", JSON.stringify(whoami.data.token));
          }
    
          setUser(whoami.data.utilisateur);
          setToken(whoami.data.token);
        console.log(whoami.message)

        console.log({user: user})
        console.log({token: token})
        console.log(localStorage.getItem("user"))
        console.log(localStorage.getItem("token"))

        }
      };



    return (
        <form onSubmit={onSubmit}>
           <Grid container sx={{ height: '100vh' }}>
      <Grid item lg={7} sm={5} sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width:200,
        height:700,
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block' }
      }}>
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs textColor='secondary' indicatorColor='secondary' >
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
           
              </Tabs>
            </Box>
      
            <Box component='form' noValidate sx={{ mt: 1}}  id ="login-form">
      
      <TextField required fullWidth margin='normal' id='email' name='email' label='Email Address'/>
      <TextField required fullWidth margin='normal' id='password' name='password' label='password' type='password'/>
        </Box>
      <Box textAlign='center'>
      <Button type="submit" variant='contained' sx={{ mt: 3, mb:2, px:5}}>Login</Button>
      </Box>
    

          
            
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
         
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Aghslni</Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
        </form>
    );
}
