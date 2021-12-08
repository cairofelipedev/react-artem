import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from "react"
import ReactGA from "react-ga"

useEffect(() => {
  ReactGA.initialize("${{ secrets.NEXT_PUBLIC_GA_ID }}");
  ReactGA.pageview(window.location.pathname + window.location.search);
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
