import Link from 'next/link'
import Image from 'next/image'

export default function NewsItem({ news }) {
  return (
    <div>
      <div>
        <Image
          src={news.image ? news.image : "No Image"}
          width={150}
          height={100}
        />
      </div>
      <div>
        <span>
          {news.date} {news.time}
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