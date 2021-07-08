import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { Grid, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SectionTitle from '../Title';

const teams = [
  {
    name: 'Soba',
    level: 'Broj 1',
    image: '/images/expert/11.jpeg',
    id: 1,
  },
  {
    name: 'Soba',
    level: 'Broj 1',
    image: '/images/expert/22.jpeg',
    id: 1,
  },
  {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/44.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/55.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/66.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/77.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/88.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/99.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/100.jpeg',
      id: 1,
    },
   
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/102.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/104.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/105.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/106.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/108.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/111.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/112.jpeg',
      id: 1,
    },
    {
      name: 'Soba',
      level: 'Broj 1',
      image: '/images/expert/113.jpg',
      id: 1,
    },
];

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <Button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden='true'
    aria-disabled={currentSlide === 0 ? true : false}
    type='button'
  >
    <KeyboardArrowLeftIcon />
  </Button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <Button
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden='true'
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type='button'
  >
    <KeyboardArrowRightIcon />
  </Button>
);

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const HostelRooms = ({
  className = '',
  title,
  subTitle,
  slider,
  noGutters,
}) => {
  return (
    <Grid className={`teamArea ${className}`}>
      <Grid container spacing={!noGutters ? 0 : 4} className='container'>
        <Grid item xs={12}>
          <SectionTitle title={title} subTitle={subTitle} />
        </Grid>
        {slider ? (
          <Grid item xs={12}>
            <Slider className='teamSlideArea' {...settings}>
              {teams.map((team, i) => (
                <Grid key={i} className='teamWrapper'>
                  <Grid className='teamImage'>
                    <Link as={`/rooms/${team.id}`} href={`/rooms/[id]`}>
                      <a>
                        <img src={team.image} alt={team.name} width="600px" height="617px" />
                      </a>
                    </Link>
                  </Grid>
              {/*     <Grid className='teamContent'>
                    <h3>
                      {' '}
                      <Link as={`/rooms/${team.id}`} href={`/rooms/[id]`}>
                        <a>{team.name}</a>
                      </Link>
                    </h3>
                    <span>{team.level}</span>
                    <ul>
                      <li>
                        <a href='#'>
                          <EmailIcon />
                        </a>
                      </li>
                    </ul>
                  </Grid> */}
                </Grid>
              ))}
            </Slider>
          </Grid>
        ) : (
          <Fragment>
            {teams.map((team, i) => (
              <Grid key={i} item lg={4} md={6} xs={12}>
                <Grid className='teamWrapper'>
                  <Grid className='teamImage'>
                    <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}>
                      <a>
                        <img src={team.image} alt={team.name} />
                      </a>
                    </Link>
                  </Grid>
                  <Grid className='teamContent'>
                    <h3>
                      {' '}
                      <Link as={`/rooms/${team.id}`} href={`/rooms/[id]`}>
                        <a>{team.name}</a>
                      </Link>
                    </h3>
                    <span>{team.level}</span>
                    <ul>
                      <li>
                        <a href='#'>
                          <EmailIcon />
                        </a>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Fragment>
        )}
      </Grid>
    </Grid>
  );
};
export default HostelRooms;
