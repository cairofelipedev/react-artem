import * as React from 'react';
import Head from 'next/head'
import AppBar from '@/components/Navs/AppBar'
import Hero from '@/components/Hero/HeroHome'
import AboutHome from '@/components/Contents/AboutHome'
import CardsHome from '@/components/Cards/CardsHome'
import FormHome from '@/components/Contents/FormContent'
import CardsCurriculum from '@/components/Cards/CardsCurriculum'
import Footer from '@/components/Navs/Footer';
// import Box from '@material-ui/core/Box';
import ButtonNavWhats from '@/components/Navs/ButtonNav'
import { API_URL } from '@/config/index'
// import NewsItemHome from '@/components/NewsItemHome'
import GlobalStyles from '@material-ui/core/GlobalStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import ContentBlog from '@/components/Contents/BlogContent';

export default function Home({ news }) {

  return (
    <React.Fragment>
      <Head>
        <title>ARTEM CARDIOLOGIA INDIVIDUALIZADA</title>
        <link rel="icon" href="/artem.ico" />
        <meta name="description" content="ARTEM CARDIOLOGIA INDIVIDUALIZADA - Serviço médico especializado e indiviadualizado" />
        <meta name="keywords" content="Artem, Artem Cardiologia, Aretem Cardiologia Especializada, Alcino Sá, Arteris, Cardiologia, Cariologista, Hipertensão, Problemas Cardiaco, Problemas no coração, pressão arterial, Cardiologista em Teresina" />
        <meta property="og:title" content="ARTEM CARDIOLOGIA INDIVIDUALIZADA" />
        <meta property="og:url" content="https://www.artemcardiologia.com.br/" />
        <meta property="og:image" content="https://www.artemcardiologia.com.br/artem2.jpg" />
        <meta name="facebook-domain-verification" content="0mkluqfdz4uszpiq52m1f18vq607gx" />
      </Head>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar />
      <ButtonNavWhats />
      <Hero />
      <AboutHome />
      <CardsHome />
      <CardsCurriculum />
      {/* <ContentBlog />
      {news.length === 0 && <h3>No News</h3>}
      {news.map((item) => (
        <Box key={item.id}>
          <NewsItemHome news={item} />
        </Box>
      ))} */}
      <FormHome />
      <Footer />
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/posts`)
  const news = await res.json()

  return {
    props: { news: news.slice(0, 5) },
    revalidate: 1
  }
}