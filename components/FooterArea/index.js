import React from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const footerLinks = [
  {
    title: 'Brzi linkovi',
    menus: [
      { name: 'Home', route: '/' },
      { name: 'Cijene', route: 'pricing' },
      { name: 'Kontakt', route: 'contact' },
    ],
  },

  {
    title: 'Kontaktirajte nas',
    menus: [
      { name: 'Hostel Jadran' },
      { name: 'Šetalište Vladimira Nazora, 23230 Pag' },
      { name: 'Hrvatska' },
      { name: 'Telefon: +385915653789' },
      { name: 'Email: info@hostel-jadran.com' },
    ],
  },
];

const FooterArea = () => {
  return (
    <footer className='footerArea'>
      <Grid className='footerTopArea'>
        <Grid container spacing={3} className='container'>
          <Grid item lg={6} sm={6} xs={12}>
            <Grid className='footerLogo'>
              <Link href='/'>
                <h3 style={{ color: 'white', cursor: 'pointer',wordSpacing:'5px' }}>
                  HOSTEL JADRAN
                  {/*  <img src="/images/logo/logo.png" alt="logo" /> */}
                </h3>
              </Link>
            </Grid>
          </Grid>
          {footerLinks.map((menu, i) => (
            <Grid key={i} item lg={3} sm={6} xs={12}>
              <div className='footerWrap'>
                <h3>{menu.title}</h3>
                <ul>
                  {menu.menus.map((item, i) => (
                    <li key={i}>
                      {item.route ? (
                        <Link href={`${item.route}`}>
                          <a>{item.name}</a>
                        </Link>
                      ) : (
                        `${item.name}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid className='footerBottomArea'>
        <Grid container spacing={3} className='container'>
          <Grid item md={8} sm={10} xs={12}>
            <span>Hostel Jadran | © 2021 </span>
          </Grid>
          <Grid item md={4} sm={2} xs={12}>
            <ul className='socialListFooter'>
              <li>
                <a href='#'>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href='#'>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href='#'>
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
export default FooterArea;
