import * as React from 'react'
import Head from 'next/head'
/* Components Core */
import AppBar from '../components/Navs/AppBar'
import Footer from '../components/Navs/Footer'
import ButtonNavWhats from '../components/Navs/ButtonNav'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from '@material-ui/core/GlobalStyles'

/* Components Body */
import CardsCurriculum from '../components/Cards/CardsCurriculum'

function AlcinoPage() {
  return (
    <React.Fragment>
       <Head>
        <title>DR. ALCINO SÁ - ARTEM CARDIOLOGIA INDIVIDUALIZADA</title>
        <link rel="icon" href="/artem.ico" />
        <meta name="description" content="Dr. Alcino Sá Cardiologista" />
        <meta name="keywords" content="Artem, Artem Cardiologia, Aretem Cardiologia Especializada, Alcino Sá, Arteris, Cardiologia, Cariologista, Hipertensão, Problemas Cardiaco, Problemas no coração, pressão arterial, Cardiologista em Teresina" />
        <meta property="og:title" content="DR. ALCINO SÁ - ARTEM CARDIOLOGIA INDIVIDUALIZADA" />
        <meta property="og:url" content="https://www.artemcardiologia.com.br/alcino-sa" />
        <meta property="og:image" content="https://www.artemcardiologia.com.br/artem2.jpg" />
        <meta name="facebook-domain-verification" content="0mkluqfdz4uszpiq52m1f18vq607gx" />
      </Head>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar />
      <ButtonNavWhats />
      <CardsCurriculum />
      <Footer />
    </React.Fragment>
  );
}

export default function AlcinoSa() {
  return <AlcinoPage />;
}