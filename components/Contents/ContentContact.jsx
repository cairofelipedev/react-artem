import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'; import Image from 'next/image'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

import styles from '../../styles/main.module.scss'



// const tiers = [
//   {
//     title: 'Serviço médico especializado e indiviadualizado',
//   },
//   {
//     title: 'Tecnologia medica moderna',
//   },
//   {
//     title: 'Atendimento ético e humanizado da medicina clássica',
//   }
// ];


export default function PageContentContact() {
  return (
    <>
      <Container className={styles.pageContact} maxWidth="full" component="main">
        <Container>
          <Grid className={styles.gridContact} pb={4} container spacing={7} alignItems="flex-center" justifyContent="center">
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao1.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  ENTRE EM CONTATO PELO WHATS-APP
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao2.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  OUÇA NOSSA PLAYLIST
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao3.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  SIGA-NOS NO INSTAGRAM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao4.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  ENTRE EM CONTATO POR LIGAÇÃO
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao5.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  ENTRE EM CONTATO POR EMAIL
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao6.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  SIGA-NOS NO FACEBOOK
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao7.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  LINKEDIN DR. ALCINO SÁ
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao8.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                  ACESSE O SITE DA ARTEM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  alignContent: 'center',
                }}
              >
                <Image className={styles.carouselImage} src="/cartao9.png" alt="Vercel Logo" width={300} height={170} />
                <Typography align="center" className={styles.textPrimary}>
                SAIBA COMO CHEGAR
                </Typography>
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Container>
    </>
  );
}