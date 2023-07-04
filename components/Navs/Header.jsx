import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from '../../styles/main.module.scss'
import Container from '@material-ui/core/Container'
import NavDrawer from './NavBar'
export default function AppNavBar() {
  return (
    <>
      <AppBar
        className={styles.appbar}
        position="static"
      >
        <Container>
          <Toolbar>
            <Link
              href="/"
            >
              <img src="/artemwhite.png" alt="Artem" className={styles.appImage} />
            </Link>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
              <div className={styles.nav}>
                <Link
                  variant="button"
                  href="quem-somos"
                  sx={{ my: 1, mx: 1.5 }}
                  className={styles.navLink}
                >
                  ARTEM
                </Link>
                <Link
                  variant="button"
                  href="#servicos"
                  sx={{ my: 1, mx: 1.5 }}
                  className={styles.navLink}
                >
                  SERVIÇOS
                </Link>
                <Link
                  variant="button"
                  href="https://api.whatsapp.com/send?phone=5586995620722&text=Ol%C3%A1!%20Encontrei%20voc%C3%AAs%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7oes"
                  sx={{ my: 1, mx: 1.5 }}
                  className={styles.navLink}
                >
                  AGENDAMENTO
                </Link>
                {/* <Link
                  variant="button"
                  href="quem-somos"
                  sx={{ my: 1, mx: 1.5, xs: 'none', sm: 'none', md: 'block' }}
                >
                  HIPERTENSÃO SEM TENSÃO
                </Link> */}
                <Link
                  href="https://api.whatsapp.com/send?phone=5586995620722&text=Ol%C3%A1!%20Encontrei%20voc%C3%AAs%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7oes"
                  pr={1}
                >
                  <WhatsAppIcon sx={{ fontSize: 35 }} />
                </Link>
                <Link
                  href="https://www.facebook.com/artemcardiologia"
                  pr={1}
                >
                  <FacebookIcon sx={{ fontSize: 35 }} />
                </Link>
                <Link
                  href="https://www.instagram.com/artemcardiologia/"
                >
                  <InstagramIcon sx={{ fontSize: 35 }} />
                </Link>
                <NavDrawer />
              </div>
            </Toolbar>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}