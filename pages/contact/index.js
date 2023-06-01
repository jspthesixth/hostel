import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Head from 'next/head';
import Breadcumb from '../../components/Breadcumb';
import Form from '../../components/Form';
import GoogleMapReact from 'google-map-react';

const breadcumbMenu = [{ name: 'Home', route: '/' }, { name: 'Kontakt' }];

const center = {
  lat: 44.446569,
  lng: 15.052790
};

const Marker = ({ src }) => <h2>{src}</h2>;

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Kontakt</title>
      </Head>
      <Breadcumb
        className='breadcumbArea'
        title='Kontakt'
        breadcumbMenu={breadcumbMenu}
        background='/images/breadcumb/1.jpeg'
      />

      <Grid className='contactusPageArea'>
        <Grid container spacing={4} className='container'>
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyApbT3zz2oOLF7hYNKZCK93f7ZyhR95qio" }}
          defaultCenter={center}
          defaultZoom={14}
        >
          <Marker
            lat={44.446569}
            lng={15.052790}
            src="Hostel Jadran"
          />
          </GoogleMapReact></div>
          <Grid item md={7} xs={12}>
            <Grid className='contactUsInfo'>
              <h3>Lokacija</h3>
              <h4>Adresa</h4>
              <span>Šetalište Vladimira Nazora, 23230 Pag, Hrvatska</span>
              <h4>Telefon</h4>
              <span>+385995022333</span>
              <h4>Email</h4>
              <span>info@hostel-jadran.com</span>
              
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid className='contactUSForm'>
              <h3>Brza Kontakt Forma</h3>
              
              
              <Form addressInfo={false} />
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Contact;
