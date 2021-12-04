import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { alpha, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import styles from '../../styles/main.module.scss'
import Button from '@material-ui/core/Button'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export default function FormHome() {

  function sendEmail() {
    const form = document.getElementById('form')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const telefone = document.getElementById('telefone').value
      const message = document.getElementById('message').value

      fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          telefone: telefone,
          message: message
        })
      }).then((response) =>{
        console.log(response)
        alert('Email enviado com sucesso')
      }).catch((erro) => {
        alert('Tente novamente mais tarde')
      })
    })
  }

  return (
    <>
      <Container className={styles.formHome} maxWidth="full" component="main" sx={{ pt: 8, pb: 6 }}>
        <Container>
          <Grid pb={10} pt={4} container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              container
            >
              <Typography
                className={styles.titleMain}
              >
                Entre em contato
              </Typography>
              <Typography
                className={styles.titleSecondary}
              >
                Preencha os campos para entrar em contato conosco.
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              md={6}
              container
            >
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 0.5, width: '25ch' },
                }}
                autoComplete="off"
                id="form"
              >
                <CssTextField id="name" label="Nome" />
                <CssTextField id="email" label="Email" />
                <CssTextField id="telefone" label="Telefone" />
                <CssTextField id="message" label="Mensagem" />
                <Button type="submit" onClick={sendEmail}>
                  Enviar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/* End hero unit */}
    </>
  );
}