import Image from 'next/image'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import styles from '../../styles/main.module.scss'
import Container from '@material-ui/core/Container';

export default function AppNavBar() {
  return (
    <>
      <AppBar
        className={styles.appbar}
        color=""
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Container>
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography href="/" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              <Link
                href="/"
              >
                <Image src="/artemwhite.png" alt="Artem" width={200} height={30} />
              </Link>
            </Typography>
            <Toolbar sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <Toolbar sx={{ flexWrap: 'wrap' }}>
                <div className={styles.nav}>
                  <Link
                    variant="button"
                    href="quem-somos"
                    sx={{ my: 1, mx: 1.5 }}
                  >
                    A ARTEM
                  </Link>
                  <Link
                    variant="button"
                    href="quem-somos"
                    sx={{ my: 1, mx: 1.5 }}
                  >
                    SERVIÇOS
                  </Link>
                  <Link
                    variant="button"
                    href="quem-somos"
                    sx={{ my: 1, mx: 1.5 }}
                  >
                    CONTATO
                  </Link>
                  <Link
                    variant="button"
                    href="quem-somos"
                    sx={{ my: 1, mx: 1.5 }}
                  >
                    HIPERTENSÃO SEM TENSÃO
                  </Link>
                  <Link
                    href="quem-somos"
                    pr={1}
                  >
                    <WhatsAppIcon sx={{ fontSize: 40 }} />
                  </Link>
                  <Link
                    href="quem-somos"
                  >
                    <InstagramIcon sx={{ fontSize: 40 }} />
                  </Link>
                </div>
              </Toolbar>
            </Toolbar>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}