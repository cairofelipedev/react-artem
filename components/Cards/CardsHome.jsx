import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import styles from '../../styles/main.module.scss'
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CardsHome() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container className={styles.cardsHome} id="servicos" maxWidth="full" component="main">
        <Container>
          <Typography
            className={styles.titleMain}
          >
            Serviços Oferecidos
          </Typography>
          <Grid pb={4} pt={4} container spacing={2} justifyContent="center">
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
                <Image src="/card1.png" alt="Vercel Logo" width={131} height={150} />
              </Grid>
              <Typography
                className={styles.titleSecondary}
                align="center"
                pt={2}
              >
                Consulta médica individualizada
              </Typography>
              {/* <Button onClick={handleClickOpen}>
                Saiba Mais
              </Button> */}
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Consulta médica individualizada
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                  </Typography>
                  <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                    ullamcorper nulla non metus auctor fringilla.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Fechar
                  </Button>
                </DialogActions>
              </BootstrapDialog>
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
                <Image src="/card2.png" alt="Vercel Logo" width={138} height={150} />
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
                <Image src="/card3.png" alt="Vercel Logo" width={108} height={150} />
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
                <Image src="/card4.png" alt="Vercel Logo" width={141} height={150} />
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
                <Image src="/card5.png" alt="Vercel Logo" width={150} height={110} />
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
                <Image src="/card6.png" alt="Vercel Logo" width={145} height={150} />
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
                <Image src="/card7.png" alt="Vercel Logo" width={141} height={150} />
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