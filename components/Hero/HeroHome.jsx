import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'animate.css';

export default function Hero() {
  return (
    <>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          className="animate__animated animate__fadeInUp animate__delay-0.6s"
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <Image src="/artem.png" alt="Artem" width={1080} height={525} />
        </Typography>
      </Container>
      {/* End hero unit */}
    </>
  );
}