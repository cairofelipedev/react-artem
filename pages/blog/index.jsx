import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import NewsItem from '@/components/NewsItem'
import FormHome from '@/components/Contents/FormContent'
import Footer from '@/components/Navs/Footer';
import GlobalStyles from '@material-ui/core/GlobalStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from '@/styles/main.module.scss'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
export default function News({ news }) {

  return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Layout>
        <div className={styles.blogPage}>
          <Container>
            <h1>CONFIRA AS ÚLTIMAS
              PUBLICAÇÕES DO BLOG
            </h1>
          </Container>
          <Grid className={styles.gridContact} pb={4} container spacing={7} alignItems="flex-center" justifyContent="center">
            {news.length === 0 && <h3>No News</h3>}
            {news.map((item) => (
              <Grid
                item
                xs={10}
                md={3}
                key={item.id} 
              >
                <NewsItem news={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <FormHome />
        <Footer />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/posts`)
  const news = await res.json()

  return {
    props: { news },
    revalidate: 1
  }
}