import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Head from 'next/head';
import Breadcumb from '../../components/Breadcumb';
import Form from '../../components/Form';

const breadcumbMenu = [{ name: 'Home', route: '/' }, { name: 'Kontakt' }];

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
          <Grid item md={7} xs={12}>
            <Grid className='contactUsInfo'>
              <h3>Naši kontakti</h3>
              <p> </p>
              <h4>Adresa</h4>
              <span>Broj Ulica, Pag 1030123 Hrvatska</span>
              <h4>Telefon</h4>
              <span>0-123-456-7890</span>
              <span>0-123-456-7890</span>
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
