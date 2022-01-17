import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import GlobalStyles from '@material-ui/core/GlobalStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from '@/styles/main.module.scss'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import FormHome from '@/components/Contents/FormContent'
import Footer from '@/components/Navs/Footer';

export default function SingleNews({ news }) {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        {/* <span>{moment(news.date).format("yyyy-MM-DD")} {news.time}</span> */}
        <div className={styles.blogPage}>
          <Container className={styles.blogPageContain}>
            <Container>
              <h1>{news.name}</h1>
              <Grid pb={4} container alignItems="flex-center" spacing={2} justifyContent="center">
                <Grid
                  item
                  xs={10}
                  md={2}
                >
                  {news.image && (
                    <div>
                      <img src={news.image.formats.thumbnail.url} width="100%" />
                    </div>
                  )}
                </Grid>
                <Grid
                  item
                  xs={10}
                  md={10}
                >
                  <p>{news.detail}</p>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </div>
      </div>
      <FormHome />
      <Footer />
    </Layout >
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/posts`)
  const news = await res.json();
  const paths = news.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/posts?slug=${slug}`);
  const singleNews = await res.json();
  return {
    props: {
      news: singleNews[0],
    },
    revalidate: 1
  }
}