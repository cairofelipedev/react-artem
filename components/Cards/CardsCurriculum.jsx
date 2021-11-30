import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import CarouselDr from '../Carousel/CarouselDr'
import styles from '../../styles/main.module.scss'

export default function CardsCurriculum() {
  return (
    <>
      <Container className={styles.curriculum} maxWidth="full" component="main">
        <Grid p={4} container alignItems="flex-center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            align="center"
          >
            <CarouselDr />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Typography pt={2} className={styles.titleMain}>
              Dr. Alcino Sá
            </Typography>
            <Container>
              <Box
                sx={{
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb: 2,
                }}
              >
                {/* <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
                pb={3} className={styles.titleSecondary}>
                Residência médica em clínica médica hospital Héliopolis-SP
              </Typography> */}
                <Typography pb={3} className={styles.titleSecondary}>
                  2000 - Residência médica em clínica médica - Hospital Heliópolis- SP
                </Typography>
                <Typography pb={3} className={styles.titleSecondary}>
                  2002 - Rsidência médica em cardiologia - Instituto Dante Pazzanese de
                  Cardiologia - SP
                </Typography>
                <Typography pb={3} className={styles.titleSecondary}>
                  2004 - Residência em Ecocardiografia- Instituto Dante Pazzanese de
                  Cardiologia -SP
                </Typography>
                <Typography pb={3} className={styles.titleSecondary}>
                  2004 - Membro Titular da Sociedade Brasileira de Cardiologia
                </Typography>
                <Typography pb={3} className={styles.titleSecondary}>
                  2005 - Membro Titular do Departamento de Imagem da Sociedade
                  Brasileira de Cardiologia
                </Typography>
                <Typography pb={3} className={styles.titleSecondary}>
                  2016 - Especialização em Hipertensão Arterial pelo Instituto Dante
                  Pazzanese de Cardiologia
                </Typography>
                <Typography pb={3} className={styles.titleSecondary}>
                  2021- Esposo da Pryscilla, pai do Guilherme e do Gustavo
                </Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}