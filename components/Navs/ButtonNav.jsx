import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Button from '@material-ui/core/Button';

import styles from '../../styles/main.module.scss'

export default function ButtonNavWhats() {
  return (
    <>
      <div className={styles.contact}>
        <Button aria-label="Abrir Contato" href="https://api.whatsapp.com/send?phone=5586995620722&text=Ol%C3%A1!%20Encontrei%20voc%C3%AAs%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7oes">
          <WhatsAppIcon sx={{ fontSize: 30, color: 'white', }} />
        </Button>
      </div>
    </>
  );
}