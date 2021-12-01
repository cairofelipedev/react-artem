import styles from '../../styles/main.module.scss'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import 'animate.css';

export default function Hero() {
  return (
    <>
      <div className={styles.HeroMain}>
        <Container className={styles.Hero} maxWidth="full" component="main" sx={{ pt: 8, pb: 6 }}>
          <Container>
            <Grid
              item
              xs={12}
              md={6}
              container
              className="animate__animated animate__fadeInUp animate__delay-0.6s"
            >
              <Typography
                className={styles.titleMain}
              >
                Cardiologia é mais
                do que medicina.
                É uma arte!
              </Typography>
              <Typography
                className={styles.titleSecondary}
              >
                SEJA BEM VINDO À UM ATENDIMENTO PERSONALIZADO
              </Typography>
            </Grid>
            <Button href="https://api.whatsapp.com/send?phone=5586995620722" className={styles.btnHero1}>
              CONTATO
            </Button>
            <Button href="quem-somos" className={styles.btnHero2}>
              A ARTEM
            </Button>
          </Container>
        </Container>
      </div>
    </>
  );
}