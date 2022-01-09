import React, { useEffect, useState } from 'react';
import { getList } from '@/config/list'
import Slider from "react-slick"
function CarouselBlog() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <Slider {...settings}>
      {list.map(item => (
        <div key={item.image} className="px-2">
          <img src={item.image} alt="Vercel Logo" />
        </div>
      ))}
    </Slider>
  )
}

export default CarouselBlog;