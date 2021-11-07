import * as React from 'react';
import AppBar from '../components/Navs/AppBar' 
import Hero from '../components/Hero/HeroHome' 
import AboutHome from '../components/About/AboutHome'
import CardsHome from '../components/Cards/CardsHome' 
import CardsCurriculum from '../components/Cards/CardsCurriculum' 
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from '@material-ui/core/GlobalStyles'
import Footer from '../components/Navs/Footer';
import ButtonNavWhats from '../components/Navs/ButtonNav'


function HomePage() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar />
      <ButtonNavWhats />
      <Hero />
      <CardsHome />
      <AboutHome />
      <CardsCurriculum/>
      <Footer />
    </React.Fragment>
  );
}

export default function Home() {
  return <HomePage />;
}