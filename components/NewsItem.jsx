import Link from 'next/link'
import moment from "moment"

export default function NewsItem({ news }) {
  return (
    <div>
      <div>
        <img src={news.image ? news.image.formats.thumbnail.url : "No Image"} width="100%" height="350px" />
      </div>
      <div>
        <span>
          {moment(news.date).format("yyyy-MM-DD")} {news.time}
          <h3>{news.name}</h3>
        </span>
      </div>
      <div>
        <Link href={`/news/${news.slug}`}>
          <a className="btn">Read More</a>
        </Link>
      </div>
    </div>
  )
}