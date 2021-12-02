import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styles from '../../styles/main.module.scss'

function Copyright(props) {
  return (
    <Typography color="#222957" align="center" {...props}>
      {'Artem Cardiologia Individualizada © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const footers = [
//   {
//     title: 'ARTEM',
//     description: ['Nossa História', 'Agendamento', 'Contato', 'Localização'],
//     link: ['quem-somos','https://api.whatsapp.com/send?phone=5586995620722'],
//   },
//   {
//     title: 'Serviço Médico',
//     description: ['Cardiologia', 'Hipertensão arterial', 'Consultoria', 'Cursos'],
//   },
//   {
//     title: 'Termos e Privacidade',
//     description: ['Termos de Uso', 'Política de Privacidade'],
//   },
// ];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <Box
        className={styles.footer}
        maxWidth="full"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          py: [3, 6],
        }}
      >
        <Container className={styles.footerContainer}>
          <img src="/artem.png" alt="Artem" />
          {/* <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography  className={styles.titleMain} color="#222957" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link style={{ textDecoration: 'none' }} href={footer.link}>
                        <Typography className={styles.titleSecondary} color="#222957">
                          {item}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid> */}
          <Grid container spacing={4} justifyContent="space-evenly">
            <Grid item xs={6} sm={3}>
              <Typography className={styles.titleMain} color="#222957" gutterBottom>
                ARTEM
              </Typography>
              <ul>
                <li>
                  <Link style={{ textDecoration: 'none' }} href="quem-somos">
                    <Typography className={styles.titleSecondary} color="#222957">
                      Nossa História
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=5586995620722">
                    <Typography className={styles.titleSecondary} color="#222957">
                      Agendamento
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} href="quem-somos">
                    <Typography className={styles.titleSecondary} color="#222957">
                      Localização
                    </Typography>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography className={styles.titleMain} color="#222957" gutterBottom>
                Serviço Médico
              </Typography>
              <ul>
                <li>
                  <Link style={{ textDecoration: 'none' }} href="#servicos">
                    <Typography className={styles.titleSecondary} color="#222957">
                      Cardiologia
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} href="#servicos">
                    <Typography className={styles.titleSecondary} color="#222957">
                      Hipertensão arterial
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=5586995620722">
                    <Typography className={styles.titleSecondary} color="#222957">
                      Consultoria
                    </Typography>
                  </Link>
                </li>
                {/* <li>
                  <Link style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=5586995620722">
                    <Typography className={styles.titleSecondary} color="#222957">
                      Cursos
                    </Typography>
                  </Link>
                </li> */}
              </ul>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography className={styles.titleMain} color="#222957" gutterBottom>
                Agende sua consulta
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Copyright sx={{ mt: 5 }} />
        <Typography color="#222957" align="center">
          <Link color="inherit" variant="body2" href="https://cairo.dev.br">
            Web Developer: Cairo Felipe Dev
          </Link>{' '}
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}