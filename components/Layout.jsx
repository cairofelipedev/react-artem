import Head from 'next/head'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="descriptions" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Blog Cairo",
  description: "O blog do cairo",
  keywords: "blog, cairo"
}