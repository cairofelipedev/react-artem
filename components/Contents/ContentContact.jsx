import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import AppBarWhite from '../Navs/AppBarWhite'
import styles from '../../styles/main.module.scss'

export default function PageContentContact() {
  return (
    <>
      <AppBarWhite />
      <Box className={styles.pageContact}>
        <Typography align="center" className={styles.textPrimaryArtem}>
          CARDIOLOGIA É MAIS QUE MEDICINA. É ARTE.
        </Typography>
        <Container align="center" maxWidth="full" component="main">
          <Typography align="center" className={styles.textDr}>
            DR. ALCINO SÁ
          </Typography>
          <Image className={styles.drImage} src="/Dr1.jpeg" alt="Vercel Logo" width={250} height={340} />
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
      </Box>
    </>
  );
}