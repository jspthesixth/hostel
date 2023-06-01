import React from 'react'
import { Grid, Button } from '@material-ui/core'
import Link from 'next/link'
import MoneyIcon from '@material-ui/icons/Money';
import SectionTitle from '../Title'
const pricingpanel = [
    {
        title: 'Broj noćenja: 1',
        text: 'Cijena se odnosi na paket jednog noćenja za jednu osobu.',
        price: '€30',
    },
    {
        title: 'Broj noćenja: 1',
        text: 'Cijena se odnosi na paket jednog noćenja za dvije osobe.',
        price: '€60',
    },
    {
        title: 'Broj noćenja: 1',
        text: 'Cijena se odnosi na paket apartmana do četiri osobe.',
        price: '€90',
    },
]
const PricingTable = ({ className = "", title, subTitle }) => {
    return (
        <Grid className={`pricingTableArea ${className}`}>
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {pricingpanel.map((pricing, i) => (
                    <Grid key={i} item md={4} sm={4} xs={12}>
                        <Grid className="pricingWrapper">
                            <MoneyIcon />
                            <h3>{pricing.title}</h3>
                            <h2>{pricing.price}</h2>
                            <p>{pricing.text}</p>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
export default PricingTable