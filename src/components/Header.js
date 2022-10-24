import React from "react";
import Slider from 'react-animated-slider';

import "react-animated-slider/build/horizontal.css";
import "./styles/slider-animations.css"

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];


const leftArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
    </svg>
  )
}

const rightArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
    </svg>

  )
}

const Header = ({ slides }) => {
  console.log(slides);
  return (
    <section className="sec-1">
      <Slider autoplay={3000} className="slider-wrapper">
        {slides.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.node.bg.publicUrl}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.node.title}</h1>
              <p>{item.node.text}</p>
              <button>test</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>

  )
}

export default Header