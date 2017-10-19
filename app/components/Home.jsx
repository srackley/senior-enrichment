import React, { Component } from 'react';

export default class Home extends Component {
  componentDidMount() {
    let counter = 0;
    const carouselImages = document.querySelectorAll('.carousel-image');
    setInterval(() => {
      carouselImages[counter].classList.add('hidden');
      counter++;
      if (counter === 4) {
        counter = 0;
      }
      carouselImages[counter].classList.remove('hidden');
    }, 3000);

    carouselImages.forEach((image) => {
      console.log(image.style);
      image.style.top = `${window.scrollY / 3}px`;
    });
  }

  render() {
    return (
      <div>
        <section id="carousel" className="section">
          <div id="carousel-text" className="container">
            <h2>Welcome to </h2>
            <h1>Margaret Hamilton Interplanetary Academy</h1>
          </div>
          <img className="carousel-image" src="images/lunaHero.jpg" />
          <img className="carousel-image hidden" src="images/terraHero.jpg" />
          <img className="carousel-image hidden" src="images/marsHero.jpg" />
          <img className="carousel-image hidden" src="images/titanHero.jpg" />
        </section>
      </div>
    );
  }
}
