import Image from 'next/image'
import Container from '@material-ui/core/Container'
import styles from '../../styles/main.module.scss'
import Typography from '@material-ui/core/Typography'

export default function AppBarWhite() {
  return (
    <>
      <Container className={styles.barWhite} align="center">
        <Image src="/logo.png" alt="Artem Logo" width={740} height={120} />
      </Container>
    </>
  )
}
