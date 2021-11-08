import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import 'animate.css';
import styles from '../../styles/main.module.scss'

// const texts_about = [
//   {
//     title: 'QUEM SOMOS:',
//     description: 'A Artem é uma empresa que presta serviço médico especializado e individualizado na área de cardiologia e hipertensão arterial, integrando conceitos modernos e novas tecnologias da medicina atual ao atendimento ético e humanizado da medicina clássica',
//   },
//   {
//     title: 'MISSÃO:',
//     description: 'Transformar a vida das pessoas para que possam viver mais e melhor.',
//   },
//   {
//     title: 'PROPÓSITO:',
//     description: 'Exercer medicina com ética e qualidade, utilizando tecnologia e informações voltadas para a o diagnóstico e tratamento com uma grande dose de humanidade, acolhimento e um jeito próprio de encantar!',
//   }
//   ,
//   {
//     title: 'A NOSSA HISTÓRIA:',
//     description: 'O ano era 2016. Nos corredores da secção de Hipertensão Arterial do Instituto Dante Pazzanese de Cardiologia se discutia como era distinto o comportamento da Hipertensão Arterial assim como era única a resposta de cada um ao tratamento. O conceito de Cardiologia Individualizada surge então entre os dias corridos e às noites de sono frias e intranquilas. Se as Hipertensão teria várias causas, que vão desde o consumo excessivo de sal à história familiar dos pacientes, ou seja, se havia tantas causas, havia também vários tratamentos e inúmeras formas de se manifestar do ponto de vista cardiovascular. A hipertensão tem a capacidade de contar várias histórias para indivíduos distintos. Hipertensão Arterial - mesma entidade, várias identidades. Não é apenas um número para ser tratado.Ao retornar a Teresina o conceito de individualização foi tornando-se robusto e, enfim, do conceito à prática. Surge a Artem - Cardiologia Individualizada. Porque se as doenças cardiovasculares contam sua história, saber ouvi-las é uma arte, como também é uma arte transformar a vida de cada indivíduo, mudando o curso da sua história. A Artem veio para transformar sua saúde. Porque Cardiologia é mais que Medicina. Cardiologia é Arte',
//   }
// ];

export default function ContentAbout() {
  return (
    <>
      <Container maxWidth="full" component="main" className="animate__animated animate__fadeIn animate__delay-0.5s">
        <Container>
          {/* {texts_about.map((text) => ( */}
            <Box 
              sx={{
                pt: 2,
                mb: 2,
              }}
            >
              <Typography className={styles.textTitleAbout}>
                {/* {text.title} */}
                QUEM SOMOS:
              </Typography>
              <Typography className={styles.textBodyAbout}>
                {/* {text.description} */}
                A Artem é uma empresa que presta serviço médico especializado e individualizado na área de cardiologia e hipertensão arterial, integrando conceitos modernos e novas tecnologias da medicina atual ao atendimento ético e humanizado da medicina clássica
              </Typography>
            </Box>
            <Box 
              sx={{
                pt: 2,
                mb: 2,
              }}
            >
              <Typography className={styles.textTitleAbout}>
                {/* {text.title} */}
                MISSÃO:
              </Typography>
              <Typography className={styles.textBodyAbout}>
                {/* {text.description} */}
                Transformar a vida das pessoas para que possam viver mais e melhor.
              </Typography>
            </Box>
            <Box 
              sx={{
                pt: 2,
                mb: 2,
              }}
            >
              <Typography className={styles.textTitleAbout}>
                {/* {text.title} */}
                PROPÓSITO:
              </Typography>
              <Typography className={styles.textBodyAbout}>
                {/* {text.description} */}
                Exercer medicina com ética e qualidade, utilizando tecnologia e informações voltadas para a o diagnóstico e tratamento com uma grande dose de humanidade, acolhimento e um jeito próprio de encantar!
              </Typography>
            </Box>
            <Box 
              sx={{
                pt: 2,
                mb: 2,
              }}
            >
              <Typography className={styles.textTitleAbout}>
                {/* {text.title} */}
                A NOSSA HISTÓRIA:
              </Typography>
              <Typography className={styles.textBodyAbout}>
                {/* {text.description} */}
                O ano era 2016. Nos corredores da secção de Hipertensão Arterial do Instituto Dante Pazzanese de Cardiologia se discutia como era distinto o comportamento da Hipertensão Arterial assim como era única a resposta de cada um ao tratamento. O conceito de Cardiologia Individualizada surge então entre os dias corridos e às noites de sono frias e intranquilas. Se as Hipertensão teria várias causas, que vão desde o consumo excessivo de sal à história familiar dos pacientes, ou seja, se havia tantas causas, havia também vários tratamentos e inúmeras formas de se manifestar do ponto de vista cardiovascular. A hipertensão tem a capacidade de contar várias histórias para indivíduos distintos. Hipertensão Arterial - mesma entidade, várias identidades. Não é apenas um número para ser tratado.Ao retornar a Teresina o conceito de individualização foi tornando-se robusto e, enfim, do conceito à prática. Surge a Artem - Cardiologia Individualizada. Porque se as doenças cardiovasculares contam sua história, saber ouvi-las é uma arte, como também é uma arte transformar a vida de cada indivíduo, mudando o curso da sua história. A Artem veio para transformar sua saúde. Porque Cardiologia é mais que Medicina. Cardiologia é Arte
              </Typography>
            </Box>
          {/* ))} */}
        </Container>
      </Container>
    </>
  );
}