import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import NewsItem from '@/components/NewsItem'
import Link from 'next/link'
import GlobalStyles from '@material-ui/core/GlobalStyles'
import CarouselBlog from '@/components/Carousel/CarouselBlog'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from '@/styles/main.module.scss'
export default function News({ news }) {

  return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Layout>
        <CarouselBlog />
        <div className={styles.blogPage}>
          <h1>CONFIRA AS ÚLTIMAS
            PUBLICAÇÕES DO BLOG
          </h1>
          {news.length === 0 && <h3>No News</h3>}
          {news.map((item) => (
            <NewsItem key={item.id} news={item} />
          ))}
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </div>
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