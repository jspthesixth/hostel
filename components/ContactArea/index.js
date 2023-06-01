import React from 'react';
import Form from '../Form';
import { Parallax } from 'react-parallax';
import { Grid } from '@material-ui/core';
const ContactArea = ({ className = '' }) => {
  return (
    <Parallax
      bgImage='/images/contact/1.jpg'
      bgImageAlt='the cat'
      contentClassName={`contactArea ${className}`}
      strength={200}
    >
      <Grid container spacing={4} className='container'>
        <Grid item lg={5} xs={12}>
          <Grid className='contactInfo'>
            <span>Za naše klijente</span>
            <h2>Kontakt Forma</h2>
            <h6>
              Zovite nas od 0-24h na broj +(385) 99 502 2333 ili ispunite formu.
            </h6>
            <p>
              Želimo biti na usluzi svakom potencijalnom posjetiocu, jer naš
              motiv nije da dođete i otiđete, naš motiv je da dođete i vratite
              se, te zbog toga želimo održavati zdravu komunikaciju.
            </p>
          </Grid>
        </Grid>
        <Grid item lg={7} xs={12}>
          <Form />
        </Grid>
      </Grid>
    </Parallax>
  );
};
export default ContactArea;
