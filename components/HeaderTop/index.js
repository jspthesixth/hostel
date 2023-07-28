import React from 'react'
import { Grid, Button, Hidden } from '@material-ui/core'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Link from 'next/link';
import {useRouter} from 'next/router';
const HeaderTop = props => {
    const router = useRouter();

    return (
        <Grid className={props.className}>
            <Grid
                container
                alignItems="center"
                className="container headerTopMainWrapper">
                <Grid item sm={6} md={5} lg={5} xs={12}>
                    <ul className="d-flex accountLoginArea">
                        <li><RoomOutlinedIcon />{router.pathname==="/" ? <Link href="/contact"><a style={{textDecoration:'none', color:"#e0e0e0"}}>Šetalište Vladimira Nazora, 23230 Pag , Hrvatska</a></Link>: "Šetalište Vladimira Nazora, 23230 Pag , Hrvatska"} </li>
                    </ul>
                </Grid>
                <Grid item sm={6} md={4} lg={5} xs={12}>
                    <ul className="headerContact">
                        <li><PhoneOutlinedIcon /> +385915653789</li>
                        <li><QueryBuilderOutlinedIcon /> 0-24h</li>
                    </ul>
                </Grid>
                <Hidden smDown>
                    <Grid item lg={2} md={3} xs={12} className="text-right">
                        <Button className="btnStyle btnOutlined btnRadius" component="a" href="/contact">Kontaktirajte nas</Button>
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    )
}
export default HeaderTop