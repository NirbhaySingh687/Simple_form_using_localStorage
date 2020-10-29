import React from "react"
import {Typography} from "@material-ui/core";


const FooterContainer = {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100px',
    background: '#6cf'
}

const Footer =()=>{
    return(
        <Typography style={FooterContainer}>
            <h3 className="text-center bg-info text-white text-uppercase fixed-bottom p-3">This is Just a Footer</h3>
        </Typography>
    )
}

export default Footer;