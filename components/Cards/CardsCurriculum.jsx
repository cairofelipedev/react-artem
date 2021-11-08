import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import CarouselDr from '../Carousel/CarouselDr'
import styles from '../../styles/main.module.scss'

export default function CardsCurriculum() {
  return (
    <>
      <Container maxWidth="full" component="main">
        <Grid p={4} container alignItems="flex-center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
          >
            <Card>
              <Typography pt={2} className={styles.curriculumTitle}>
                Dr. Alcino Sá
              </Typography>
              <CardContent>
                <CarouselDr />
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Card>
              <Typography pt={2} className={styles.curriculumTitle}>
                Currículo
              </Typography>
              <CardContent>
                <Box
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                    pb={3} className={styles.curriculumList}>
                  <ArrowRightIcon className={styles.curriculumIcon} />
                    Residência médica em clínica médica hospital Héliopolis-SP
                  </Typography>
                  <Typography  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                    pb={3} className={styles.curriculumList}>
                  <ArrowRightIcon className={styles.curriculumIcon} />
                    Cardiologia e Ecocardiografia e Hipertensão Arterial Instituto Dante Pazzanese de Cardiologia.
                  </Typography>
                  <Typography  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                    pb={3} className={styles.curriculumList}>
                  <ArrowRightIcon className={styles.curriculumIcon} />
                    Membro do Departamento de Imagem da Sociedade Brasileira de Cardiologia.
                  </Typography>
                  <Typography  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                    pb={3} className={styles.curriculumList}>
                  <ArrowRightIcon className={styles.curriculumIcon} /> Membro da Sociedade Brasileira de Cardiologia
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}