import React, { Fragment } from 'react';
import Head from 'next/head';

// components
import HeroSlider from '../components/HeroSlider';
import Service from '../components/Service';
import About from '../components/About';
import ServiceArea from '../components/ServiceArea';
import Portfolio from '../components/Portfolio';
import Testmonial from '../components/Testmonial';
import ContactArea from '../components/ContactArea';
import HostelRooms from '../components/HostelRooms';
import CounterArea from '../components/CounterArea';
import BlogArea from '../components/BlogArea';

const aboutText = [
  `Prepoznatljivost smještaja Jadran počela je davnih 60. godina uz pregršt plesnih večeri i zabave, te smo uz brojne posjetioce i sami naučili kako da istima ponudimo što bolje iskustvo, 
  za jednu od najvažnijih aktivnosti, a to je sami odmor. Hostel Jadran je rezultat spoja obiteljskog posla, rada i zadovoljnih posjetioca či
  me smo izrazito ponosni. Zato te pozivamo da postaneš dio naše male, te ujedno i velike obitelji.`
];

const portfolio = [
  {
    image: '/images/studies/1.jpg',
    title: 'General Service',
    subtitle: 'Corporate',
    id: 1,
  },
  {
    image: '/images/studies/2.jpg',
    title: 'Personal Issue',
    subtitle: 'General',
    id: 2,
  },
  {
    image: '/images/studies/3.jpg',
    title: 'Business Accounting',
    subtitle: 'Business',
    id: 3,
  },
  {
    image: '/images/studies/4.jpg',
    title: 'Accounting issue',
    subtitle: 'Criminal',
    id: 4,
  },
  {
    image: '/images/studies/5.jpg',
    title: 'Business Accounting',
    subtitle: 'Family Issue',
    id: 5,
  },
];

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Hostel Jadran</title>
      </Head>
      <HeroSlider />
      <Service className='bgColor' />
      <About
        title='O nama'
        images='/images/about/2.jpg'
        signature='/images/about/1.png'
        pragraphs={aboutText}
      />
      <ServiceArea
        title='Koje usluge pružamo'
        subTitle='Naše prednosti'
        className='bgWhite'
      />
      <HostelRooms
        title='Sobe i apartmani'
        subTitle='Pogledajte našu ponudu'
        slider={true}
      />
      <Testmonial />
      <ContactArea />
    </Fragment>
  );
};
export default Home;
