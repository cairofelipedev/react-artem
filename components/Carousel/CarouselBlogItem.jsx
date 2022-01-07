import Image from 'next/image'

export default function CarouselBlogItem({ news }) {
  return (
    <div>
      <Image src={news.image ? news.image : "No Image"} width={450} height={640} />
    </div>
  )
}
