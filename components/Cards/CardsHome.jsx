import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'

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


export default function CardsHome() {
  return (
    <>
      <Container className={styles.cardsHome} id="servicos" maxWidth="full" component="main">
        <Container>
          <Typography
            className={styles.titleMain}
          >
            Serviços Oferecidos
          </Typography>
          <Grid pb={4} pt={4} container spacing={2}  justifyContent="center">
            {/* {tiers.map((tier) => ( */}
            <Grid
              item
              xs={6}
              md={3}
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                align="center"
              >
                <Image src="/card1.png" alt="Vercel Logo" width={100} height={120} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Consulta médica individualizada
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                align="center"
              >
                <Image src="/card2.png" alt="Vercel Logo" width={100} height={120} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Holter de 24h
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                align="center"
              >
                <Image src="/card3.png" alt="Vercel Logo" width={100} height={120} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Mapa
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                align="center"
              >
                <Image src="/card4.png" alt="Vercel Logo" width={100} height={120} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Ecodopplercadiograma
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                align="center"
                pt={4}
              >
                <Image src="/card5.png" alt="Vercel Logo" width={100} height={100} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Eletrocardiograma
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                align="center"
                pt={4}
              >
                <Image src="/card6.png" alt="Vercel Logo" width={100} height={100} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Medida da pressão aórtica central
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                align="center"
                pt={4}
              >
                <Image src="/card7.png" alt="Vercel Logo" width={100} height={100} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Bioimpedância
              </Typography>
            </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </Container>
    </>
  );
}