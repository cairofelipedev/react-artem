import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import styles from '@/styles/main.module.scss'
export default function NewsItem({ news }) {
  return (
    <div>
      <div className={styles.bodyPost}>
        <img src={news.image ? news.image.formats.thumbnail.url : "No Image"} width="100%" height="350px" />
        <div className={styles.textsBody}>
          <Typography className={styles.titleMain}>
            {news.name}
          </Typography>
          <Typography pb={3} className={styles.titleSecondary}>
            {news.detail}
          </Typography>
          <div>
            <Link href={`/blog/${news.slug}`}>
              <a className="btnBloghome">Leia mais</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}