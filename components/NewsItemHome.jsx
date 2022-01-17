import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import styles from '@/styles/main.module.scss'

export default function NewsItemHome({ news }) {
  return (
    <div>
      <Container className={styles.newsItemHome} maxWidth="full" component="main">
        <Grid p={2} container alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            align="center"
          >
            <img src={news.image ? news.image.formats.small.url : "No Image"} width="100%" height="350px" />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Container>
              <Box
                sx={{
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb: 2,
                }}
              >
                <Typography className={styles.titleMain}>
                  {news.name}
                </Typography>
                <Typography pb={3} className={styles.titleSecondary}>
                  {news.detail}
                </Typography>
                <div>
                  <Link className={styles.btnPostHome} href={`/blog/${news.slug}`}>
                  <a>Leia mais</a>
                  </Link>
                </div>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}