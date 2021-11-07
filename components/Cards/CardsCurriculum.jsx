import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import CarouselDr from '../Carousel/CarouselDr'

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
              <Typography pt={2} className="curriculum-card-title">
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
              <Typography pt={2} className="curriculum-card-title">
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
                    pb={3} className="curriculum-list">
                  <ArrowRightIcon className="icon-list" />
                    Residência médica em clínica médica hospital Héliopolis-SP
                  </Typography>
                  <Typography  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                    pb={3} className="curriculum-list">
                  <ArrowRightIcon className="icon-list" />
                    Cardiologia e Ecocardiografia e Hipertensão Arterial Instituto Dante Pazzanese de Cardiologia.
                  </Typography>
                  <Typography  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                    pb={3} className="curriculum-list">
                  <ArrowRightIcon className="icon-list" />
                    Membro do Departamento de Imagem da Sociedade Brasileira de Cardiologia.
                  </Typography>
                  <Typography  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                    pb={3} className="curriculum-list">
                  <ArrowRightIcon className="icon-list" /> Membro da Sociedade Brasileira de Cardiologia
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