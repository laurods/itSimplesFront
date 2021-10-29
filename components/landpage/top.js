import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
export default function Top() {

    return (
        <main>       
          <Grid container spacing={3}>
          <Grid item xs={1}>
          
           </Grid> 
          <Grid item xs={1}>
          <Link href="#como-funciona" variant="body2">             
              {`Somos`}            
            </Link>
                
           </Grid>  
          <Grid item xs={2}>
          <Link href="#como-funciona" variant="body2">             
              {`Como Funciona`}            
            </Link>
                     
           </Grid> 
          <Grid item xs={2}>
          <Link href="#quanto-custa" variant="body2">             
              {`Quanto Custa`}            
            </Link>         
           </Grid>

           <Grid item xs={1}>
          <Link href="#exemplo" variant="body2">             
              {`Exemplo`}            
            </Link>         
           </Grid>

           <Grid item xs={3}>
            <Link href="register" variant="body2">
                <Button
              type="submit"              
              variant="contained"
              color="primary"            
            >
              Experimente Grátis
            </Button>
            </Link>            
           </Grid>
           <Grid item xs={2}>           
           <Link href="Login/Login" variant="body2">
                <Button
              type="submit"              
              variant="contained"
                         
            >
              Entrar
            </Button>
            </Link>          
           </Grid>         
           
        </Grid>  
        </main>
    );
}