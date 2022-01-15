import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Link from 'next/link'
import moment from "moment"

export default function SingleNews({ news }) {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <span> {news.time}</span>
        <h1>{news.name}</h1>
        {news.image && (
          <div>
            <img src={news.image.formats.thumbnail.url} />
          </div>
        )}
        <p>{news.detail}</p>
        <Link href="/news">
          <a>Go Back</a>
        </Link>
      </div>
    </Layout>
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
    fallback: true,
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