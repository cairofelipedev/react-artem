import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import 'animate.css';
import styles from '../../styles/main.module.scss'


export default function ContentAbout() {
  return (
    <>
      <Container maxWidth="full" component="main" className={styles.aboutPage}>
        <Container className="animate__animated animate__fadeIn animate__delay-0.5s">
          <Box
            sx={{
              pt: 2,
              mb: 2,
            }}
          >
            <Typography
              className={styles.titleMain}
            >
              Nossa História
            </Typography>
          </Box>
          <Box
            sx={{
              pt: 2,
              mb: 2,
            }}
          >
            <Typography className={styles.textTitleAbout}>
              Propósito
            </Typography>
            <Typography className={styles.textBodyAbout}>
              Exercer medicina com ética e qualidade, utilizando tecnologia
              e informações voltadas para o diagnóstico e tratamento com
              uma grande dose de humanidade, acolhimento e um jeito
              próprio de encantar!
            </Typography>
          </Box>
          <Box
            sx={{
              pt: 2,
              mb: 2,
            }}
          >
            <Typography className={styles.textTitleAbout}>
              Missão
            </Typography>
            <Typography className={styles.textBodyAbout}>
              Transformar a vida das pessoas para que possam viver mais e
              melhor.
            </Typography>
          </Box>
          <Box
            sx={{
              pt: 2,
              mb: 2,
            }}
          >
            <Typography className={styles.textTitleAbout}>
              Visão
            </Typography>
            <Typography className={styles.textBodyAbout}>
              Ser conhecida como a clínica de cardiologia com o melhor
              atendimento do estado do Piauí.
            </Typography>
          </Box>
          <Box
            sx={{
              pt: 2,
            }}
          >
            <Typography className={styles.textTitleAbout}>
              Valores
            </Typography>
            <Typography className={styles.textBodyAbout}>
              A existência da Artem está baseada na empatia por cada
              pessoa que nos busca, e pela arte envolvida na cardiologia que
              no nosso entendimento é a disciplina centro de todas as
              outras áreas da medicina. Mais do que atender de forma ética
              e responsável, queremos encantar à todos que nos buscam
              pelo nosso atendimento humano e diferenciado do padrão
              atual. Queremos além disto, buscamos oferecer
              conhecimento e confiança à todos, nos tornando autoridade
              no assunto no estado do Piauí.
            </Typography>
          </Box>
        </Container>
      </Container>
    </>
  );
}