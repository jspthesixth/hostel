import React from 'react';
import Slider from 'react-slick';
import { Grid, Hidden } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const sliders = [
  {
    text: 'Ovo je najbolji smještaj u kojem sam odsjeo sa svojom obitelji i sigurno ću se vratiti!',
    images: '/images/testimonial/2.png',
    title: 'Josip Glasnović',
    subTitle: 'Zagreb, Hrvatska',
  },
  {
    text: 'Odličan smještaj, nemam zamjerke.',
    images: '/images/testimonial/2.png',
    title: 'Vladimir Heim',
    subTitle: 'Slavonski Brod, Hrvatska',
  },
  {
    text: 'Moja obitelj i ja smo uživali. Smještaj je bio vrhunski..',
    images: '/images/testimonial/2.png',
    title: 'Andrea Smiljan',
    subTitle: 'Maribor, Slovenija',
  },
  {
    text: 'Sasvim slučajan izlet je prerastao u dugogodišnje prijateljstvo.',
    images: '/images/testimonial/2.png',
    title: 'Darko Vidaković',
    subTitle: 'Dugo Selo, Hrvatska',
  },
];
const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const Testmonial = ({ className = '' }) => {
  return (
    <Grid className={`testmonialArea ${className}`}>
      <Grid container className='container'>
        <Grid item md={4} sm={6} xs={12}>
          <Grid className='testimonialImages'>
            <img src='/images/testimonial/1.jpg' alt='' />
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
        <Grid item md={7} sm={6} xs={12}>
          <Grid className='testimonialContent'>
            <span>Što drugi kažu o nama</span>
            <h2>Testament Klijenata</h2>
            <Slider className='testmonialSlider' {...settings}>
              {sliders.map((slider, i) => (
                <Grid key={i} className='slideItem'>
                  <p>
                    <FormatQuoteIcon /> {slider.text}
                  </p>

                  <Grid className='imgContent'>
                    <h4>{slider.title}</h4>
                    <span>{slider.subTitle}</span>
                  </Grid>
                </Grid>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Testmonial;
