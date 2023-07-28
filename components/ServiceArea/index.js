import React from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import { Parallax } from 'react-parallax';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import WifiIcon from '@material-ui/icons/Wifi';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import HotelIcon from '@material-ui/icons/Hotel';
import SectionTitle from '../Title';

const services = [
  {
    icon: <PeopleAltTwoToneIcon />,
    title: 'Podrška',
    content: 'Naše osoblje će pomoći u bilo kojem trenutku.',
    id: 1,
  },
  {
    icon: <WifiIcon />,
    title: 'Besplatan Wi-Fi',
    content: 'Unutar našeg hostela očekuje te besplatno surfanje.',
    id: 2,
  },
  {
    icon: <EmojiTransportationIcon />,
    title: 'Besplatan parking',
    content: 'Što je hostel bez besplatnog parkinga za sve naše posjetioce?',
    id: 3,
  },
  {
    icon: <HotelIcon />,
    title: 'Udoban smještaj',
    content: 'Smatramo je da ključ dobrog ljetnog odmora, što više sna.',
    id: 4,
  },
  {
    icon: <AcUnitIcon />,
    title: 'Klimatizirane sobe',
    content: 'Naše sobe su opremljene uređajima za klimatizaciju.',
    id: 5,
  },
  {
    icon: <FreeBreakfastIcon />,
    title: 'Besplatan doručak',
    content: 'Ako niste gladni, možete popiti i kavu. Nama ne smeta.',
    id: 6,
  },
];

const ServiceArea = ({ className = '', title, subTitle }) => {
  return (
    <Parallax
      bgImage='/images/practice/1.jpg'
      bgImageAlt='the cat'
      contentClassName={`ourServiceArea ${className}`}
      strength={200}
    >
      <Grid container spacing={4} className='container'>
        <Grid item xs={12}>
          <SectionTitle title={title} subTitle={subTitle} />
        </Grid>
        {services.map((service, index) => (
          <Grid item xs={12} lg={4} sm={6} key={index}>
            <Grid className='serviceWrap'>
              <Grid className='serviceIcon'>{service.icon}</Grid>
              <Grid className='serviceContent'>
                <h3>
                   {service.title}
             
                </h3>
                <p>{service.content}</p>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Parallax>
  );
};
export default ServiceArea;
