import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Button from '@material-ui/core/Button';
export default function ButtonNavWhats() {
  return (
    <>
      <div className="contact">
        <div className="btn-contact">
          <Button aria-label="Abrir Contato" href="https://api.whatsapp.com/send?phone=5586995620722" className="btn-nav">
            <WhatsAppIcon sx={{ fontSize: 30, color:'white', }} />
          </Button>
        </div>
      </div>
    </>
  );
}