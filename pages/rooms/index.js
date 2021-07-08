import React, { Fragment } from 'react';
import Head from 'next/head';
import { Grid } from '@material-ui/core';
import Breadcumb from '../../components/Breadcumb';
import HostelRooms from '../../components/HostelRooms';

const breadcumbMenu = [{ name: 'Home', route: '/' }, { name: 'Sobe' }];

const Team = () => {
  return (
    <Fragment>
      <Head>
        <title>Sobe</title>
      </Head>
      <Breadcumb
        title='Naše sobe'
        breadcumbMenu={breadcumbMenu}
        background='/images/breadcumb/1.jpg'
      />
      <HostelRooms
        title='Naše sobe'
        subTitle=''
        className='ptb100'
        noGutters={true}
      />
    </Fragment>
  );
};
export default Team;
