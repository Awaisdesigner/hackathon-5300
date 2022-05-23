import React from 'react'

import './Footer.css'



const Footer = () => {
    return (
        <div className="container-fluid foot" style={{ backgroundColor: 'black' }}>
            <div className="row">

                <div className="col-sm-12 col-md-6" style={{ marginTop: '20px' }}>
                    <h3 style={{ fontWeight: '700' }}>E-commerce website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima incidunt temporibus minus necessitatibus odio nemo nesciunt expedita, animi hic repellat, ab fugit, veritatis maxime alias ducimus a soluta doloremque magnam.</p>
                </div>

                <div className="col-sm-12 col-md-3" style={{ marginTop: '20px' }}>
                    <h4>links</h4>
                    <div>Twitter</div>
                    <div>Facebook</div>
                    <div>Instagram</div>
                    <div>Youtube</div>

                </div>

                <div className="col-sm-12 col-md-3" style={{ marginTop: '20px' }}>
                    <h4>Companies</h4>
                    <div>helcim</div>
                    <div>depot</div>
                    <div>stax</div>
                    <div>nationalprocessing</div>
                       

                </div>


                <hr style={{ marginTop: '10px', height: '3px' }} />

                <div className="col-sm-12 col-md-12" style={{textAlign: 'center'}}>
                    <h4>This is E-commerce Website</h4>
                    <p>copyright &copy; 2022 All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;