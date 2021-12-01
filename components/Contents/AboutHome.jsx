import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/main.module.scss'

export default function AboutHome() {
  return (
    <>
      {/* Hero unit */}
      <Container className={styles.aboutHome} maxWidth="full" component="main" sx={{ pt: 8, pb: 6 }}>
        <Container>
          <Grid pb={10} pt={4} container spacing={8} justifyContent="center">
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
                A existência da Artem está baseada na empatia por cada pessoa que nos busca, e pela arte envolvida no exercício desta especialidade central da medicina. Mais do que atender de forma ética e responsável, queremos encantar a todos que nos buscam pelo nosso jeito humano e diferenciado. Oferecemos conhecimento, confiança e individualização no tratamento, sendo reconhecidos como autoridade neste assunto no estado do Piauí.
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
              xs={8}
              md={3}
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