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
      <Container className="cards-home" maxWidth="full" component="main">
        <Container>
          <Grid pb={4} pt={4} container spacing={2} alignItems="flex-center" justifyContent="center">
            {/* {tiers.map((tier) => ( */}
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box className="cards-services"
                sx={{
                  pt: 5,
                  mb: 2,
                  height: 200,
                }}
              >
                <Typography align="center">
                  <LocalHospitalIcon sx={{ fontSize: 40 }} />
                </Typography>
                <Typography align="center" component="h2" variant="h5">
                  {/* {tier.title} */}
                  Serviço médico especializado e indiviadualizado
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box className="cards-services"
                sx={{
                  pt: 5,
                  mb: 2,
                  height: 200,
                }}
              >
                <Typography align="center">
                  <AddToQueueIcon sx={{ fontSize: 40 }} />
                </Typography>
                <Typography align="center" component="h2" variant="h5">
                  {/* {tier.title} */}
                  Tecnologia medica moderna
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box className="cards-services"
                sx={{
                  pt: 5,
                  mb: 2,
                  height: 200,
                }}
              >
                <Typography align="center">
                  <AssignmentIcon sx={{ fontSize: 40 }} />
                </Typography>
                <Typography align="center" component="h2" variant="h5">
                  {/* {tier.title} */}
                  Atendimento ético e humanizado da medicina clássica
                </Typography>
              </Box>
            </Grid>
            {/* ))} */}
          </Grid>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image="/pressaoarterial.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Hipertensão Arterial
              </Typography>
              <Typography variant="body" color="text.secondary">
                A Hipertensão Arterial acomete cerca de 30% da população adulta e é a principal causa isolada de morte cardiovascular no mundo. É também a principal causa de acidente vascular cerebral, e uma da sprincipais causas de infarto, insuficiência cardíaca, insuficiência renal e cegueira. Diagnosticar é tratar a hipertensão salva vidas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button endIcon={<WhatsAppIcon />} href="https://api.whatsapp.com/send?phone=5586995620722" className="btn-blue" fullWidth>
                FALE AGORA COM UM ESPECIALISTA
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Container>
    </>
  );
}