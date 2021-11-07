import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Artem Cardiologia Individualizada © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'ARTEM',
    description: ['Nossa História', 'Agendamento', 'Contato', 'Localização'],
  },
  {
    title: 'Serviço Médico',
    description: ['Cardiologia', 'Hipertensão arterial', 'Consultoria', 'Cursos'],
  },
  // {
  //   title: 'Termos e Privacidade',
  //   description: ['Termos de Uso', 'Política de Privacidade'],
  // },
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <Box
        className="footer"
        maxWidth="full"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Container className="footer-container">
        <img src="/artem2.jpg" alt="Artem" />
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h5" color="white" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link style={{ textDecoration: 'none' }} href="#">
                        <Typography variant="subtitle1" color="white">
                          {item}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Copyright sx={{ mt: 5 }} />
        <Typography variant="body2" color="text.primary" align="center">
          <Link color="inherit" href="https://cairo.dev.br">
            Web Developer: Cairo Felipe Dev
          </Link>{' '}
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}