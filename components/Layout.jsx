import Head from 'next/head'
import HeaderBlog from './Navs/HeaderBlog'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/artem.ico" />
        <meta name="descriptions" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <HeaderBlog />
      <div>
        {children}
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "BLOG ARTEM CARDIOLOGIA INDIVIDUALIZADA",
  description: "BLOG ARTEM CARDIOLOGIA INDIVIDUALIZADA",
  keywords: "cardiologia, artem"
}