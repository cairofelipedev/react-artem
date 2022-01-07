import React, { Component } from 'react';
import Slider from 'react-slick';
var a = [
  '/images/sample/news1.jpg',
  '/images/sample/news2.jpg',
  '/images/sample/news3.jpg'
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