import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/main.module.scss'

export default function AboutHome() {
  return (
    <>
      {/* Hero unit */}
      <Container className={styles.aboutHome} disableGutters maxWidth="full" component="main" sx={{ pt: 8, pb: 6 }}>
        <Container>
          <Grid pb={4} pt={4} container spacing={2} alignItems="flex-center" justifyContent="center">
            <Grid
              item
              xs={12}
              md={8}
              container
              className="animate__animated animate__fadeInUp animate__delay-0.6s"
            >
              <Typography
                className={styles.titleMain}
              >
                A Artem
              </Typography>
              <Typography
                className={styles.titleSecondary}
              >
                O ano era 2016. Nos corredores da secção de Hipertensão Arterial do Instituto Dante Pazzanese de
                Cardiologia se discutia como era distinto o comportamento da Hipertensão Arterial assim como era
                única a resposta de cada um ao tratamento. O conceito de Cardiologia Individualizada surge então
                entre os dias corridos e às noites de sono frias e intranquilas. Se as Hipertensão teria várias causas, que
                vão desde o consumo excessivo de sal à história familiar dos pacientes, ou seja, se havia tantas causas,
                havia também vários tratamentos e inúmeras formas de se manifestar do ponto de vista
                cardiovascular.
              </Typography>
              <Typography
                className={styles.titleSecondary}
                pt={4}
              >
                A hipertensão tem a capacidade de contar várias histórias para indivíduos distintos. Hipertensão
                Arterial - mesma entidade, várias identidades. Não é apenas um número para ser tratado. Ao retornar
                a Teresina o conceito de individualização foi tornando-se robusto e, enfim, do conceito à prática.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={2}
              container
            >
              <Box
                className={styles.boxAbout}
              >
                <Typography
                  className={styles.titleSecondary2}
                >
                  Serviço médico
                  especializado e
                  individualizado
                </Typography>
              </Box>
              <Box
                className={styles.boxAbout}
              >
                <Typography
                  className={styles.titleSecondary2}
                >
                  Tecnologia médica
                  moderna
                </Typography>
              </Box>
              <Box
                className={styles.boxAbout}
              >
                <Typography
                  className={styles.titleSecondary2}
                >
                  Atendimento ético
                  e humanizado da
                  medicina clássica
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/* End hero unit */}
    </>
  );
}