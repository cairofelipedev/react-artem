import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import NewsItem from '@/components/NewsItem'
import Link from 'next/link'
import GlobalStyles from '@material-ui/core/GlobalStyles'
import CarouselBlog from '@/components/Carousel/CarouselBlog'
import CssBaseline from '@material-ui/core/CssBaseline'
export default function News({ news }) {

  return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Layout>
        <CarouselBlog />
        <h1>Blog</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/news`)
  const news = await res.json()

  return {
    props: { news },
    revalidate: 1
  }
}