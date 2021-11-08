import * as React from 'react';
import Head from 'next/head'
/* Components Core */
import AppBar from '../components/Navs/AppBar'
import Footer from '../components/Navs/Footer';
import ButtonNavWhats from '../components/Navs/ButtonNav'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from '@material-ui/core/GlobalStyles'

/* Components Body */
import AboutContent from '../components/About/AboutPage'

function AboutPage() {
  return (
    <React.Fragment>
       <Head>
        <title>ARTEM CARDIOLOGIA INDIVIDUALIZADA</title>
        <link rel="icon" href="/artem.ico" />
        <meta name="description" content="ARTEM CARDIOLOGIA INDIVIDUALIZADA - Serviço médico especializado e indiviadualizado" />
        <meta property="og:title" content="ARTEM CARDIOLOGIA INDIVIDUALIZADA" />
        <meta property="og:url" content="https://react-artem.vercel.app/" />
        <meta property="og:image" content="https://react-artem.vercel.app/_next/image?url=%2Fartem2.jpg&w=1920&q=75" />
      </Head>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar />
      <ButtonNavWhats />

      <AboutContent />

      <Footer />
    </React.Fragment>
  );
}

export default function Home() {
  return <AboutPage />;
}