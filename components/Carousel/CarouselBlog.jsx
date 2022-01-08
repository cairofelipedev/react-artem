import React, { Component } from 'react';
import Slider from 'react-slick';
var a = [
  '/images/blog/news1.png',
  '/images/blog/news2.png',
  '/images/blog/news3.png'
 ]
class Home extends Component {
  constructor() {
    super();
    this.state = {
      sliders: a
    }
  }

  sliders() {
    return this.state.sliders.map(data => {
      return (
        <div key={data}>
          <img alt="image" src={data} />
        </div>
      )
    });
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrow: false
    }
    return (
      <div >
        <Slider {...settings}>
          {this.sliders()}
        </Slider>
      </div>
    );
  }
}
export default Home;