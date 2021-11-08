import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Button from '@material-ui/core/Button';

import styles from '../../styles/main.module.scss'

export default function ButtonNavWhats() {
  return (
    <>
      <div className={styles.contact}>
        <Button aria-label="Abrir Contato" href="https://api.whatsapp.com/send?phone=5586995620722" className={styles.btnnav}>
          <WhatsAppIcon sx={{ fontSize: 30, color: 'white', }} />
        </Button>
      </div>
    </>
  );
}