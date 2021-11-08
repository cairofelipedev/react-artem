import Image from 'next/image'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import styles from '../../styles/main.module.scss'

export default function AppNavBar() {
  return (
    <>
      <AppBar
        className={styles.appbar}
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography href="/" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link
              href="/"
            >
              <Image src="/logo.png" alt="Artem" width={200} height={30} />
            </Link>
          </Typography>
          <Toolbar sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
              <nav>
                <Link
                  variant="button"
                  href="quem-somos"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  ARTEM CARDIOLOGIA INDIVIDUALIZADA
                </Link>
              </nav>
            </Toolbar>
          </Toolbar>
          <div className={styles.btnNav}>
            <Button endIcon={<WhatsAppIcon />} href="https://api.whatsapp.com/send?phone=5586995620722" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              AGENDAR
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}