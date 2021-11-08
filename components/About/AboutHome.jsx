import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import styles from '../../styles/main.module.scss'

export default function AboutHome() {
  return (
    <>
      {/* Hero unit */}
      <Container className={styles.aboutHome} disableGutters maxWidth="full" component="main" sx={{ pt: 8, pb: 6 }}>
        <Container align="center">
          <Typography align="justify" variant="h5" color="white" component="p" pb={4}>
            A Artem é uma empresa que presta serviço médico especializado e individualizado na área de cardiologia e hipertensão arterial, integrando conceitos modernos e novas tecnologias da medicina atual ao atendimento ético e humanizado da medicina clássica.
          </Typography>
          <Image src="/artem2.jpg" alt="Artem" width={773} height={133} />
          <br/>
          <Button className={styles.btnWhite} href="quem-somos" sx={{ my: 1, mx: 1.5 }}>
            Saiba mais
          </Button>
        </Container>
      </Container>
      {/* End hero unit */}
    </>
  );
}