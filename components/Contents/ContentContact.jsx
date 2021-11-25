import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

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
          <Typography className={styles.titleContact} align="center">
            Cardiologia é mais que medicina.É arte
          </Typography>
          <Typography align="center">
            CONTATO
          </Typography>
          <Grid className={styles.gridContact} pb={4} container spacing={2} alignItems="flex-center" justifyContent="center">
            {/* {tiers.map((tier) => ( */}
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
            >
              <Box
                className={styles.cardContact}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  height: 75,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <WhatsAppIcon style={{ fill: "green" }} />
                  <span>WhatsApp</span>
                </div>
                <Typography align="center">
                  {/* {tier.title} */}
                  Acessar
                </Typography>
              </Box>
            </Grid>
            {/* ))} */}
          </Grid>

        </Container>
      </Container>
    </>
  );
}