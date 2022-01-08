import React, { useEffect, useState } from 'react';
import { getList } from '@/config/list'
import Slider from "react-slick"
function App() {
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
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        <Slider {...settings}>
          {list.map(item => (
            <div className="px-2">
              <img key={item.image} src={item.image} alt="Vercel Logo" />
            </div>
          ))}
        </Slider>
      </ul>
    </div>
  )
}

export default App;