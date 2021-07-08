import React, { Fragment } from 'react'
import Head from 'next/head'
// components 
import Breadcumb from '../../components/Breadcumb'
import ServiceArea from '../../components/ServiceArea'
import PricingTable from "../../components/PricingTable";

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Cijene' }
]

const Practice = () => {
    return (
        <Fragment>
            <Head>
                <title>Cijene</title>
            </Head>
            <Breadcumb
                title="Cijene"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
           
            <ServiceArea
                className="ourServiceAreaStyleThree bgFFF"
                title="Koje usluge pružamo"
                subTitle="Naše prednosni"
            />
            <PricingTable
                title="Cijenovna tablica"
                subTitle="Naše cijene"
            />
           
        </Fragment>
    )
}
export default Practice