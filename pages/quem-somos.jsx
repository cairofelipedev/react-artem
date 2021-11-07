import * as React from 'react';
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