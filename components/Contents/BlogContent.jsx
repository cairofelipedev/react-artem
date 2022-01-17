import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/main.module.scss'
import Button from '@material-ui/core/Button'
import Link from 'next/link'


export default function ContentBlog() {
  return (
    <>
      <Container className={styles.CardBlogHome} maxWidth="full" component="main" sx={{ pt: 8, pb: 6 }}>
        <Container>
          <Grid pb={10} pt={4} container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              container
              justifyContent="center"
            >
              <Typography
                className={styles.titleMain}
              >
                Conheça o Blog Artem
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              md={6}
              container
              justifyContent="center"
            >
              <Link href="/blog">
                <Button className={styles.button}>
                  Acessar
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/* End hero unit */}
    </>
  );
}