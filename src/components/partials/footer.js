import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { Facebook, Instagram, CopyrightRounded, LinkedIn, HomeOutlined, ContactsOutlined, BusinessCenterOutlined, RateReviewOutlined } from '@material-ui/icons';


import footerLogo from'../../img/footerLogo.png';
import eLogo from'../../img/letterlogo.png';

class Footer extends Component {
  render(){
    return (
      <>
         <div className="footer">
            <Container className="cm-container">
               <div className="address-col">
                   <Link to="#"><img className="footer-logo" src={footerLogo} alt="footer logo" /></Link>
                    <Grid container spacing={3}>
                        <Grid item lg={4}>
                            <h3>Our Address</h3>
                            <p>No : 10, Kamarajar Nagar 4th Street,<br />
                            Chinna Chokkikulam,<br />
                            Madurai-625002.</p>
                        </Grid>
                    </Grid>

                    <div className="e-logo">
                        <img src={eLogo} alt="elogo" />
                    </div>
               </div>

                <Grid container direction="row" justify="flex-end" spacing={3}>
                    <Grid item lg={3}>
                        <h3>Services</h3>
                        <ul className="footer-link">
                            <li>
                                <Link to="#">Web Development</Link>
                            </li>
                            <li>
                                <Link to="#">Creative Design</Link>
                            </li>
                            <li>
                                <Link to="#">Mobile App Development</Link>
                            </li>
                            <li>
                                <Link to="#">Online Marketing</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={2}>
                        <h3>About Us</h3>
                        <ul className="footer-link">
                            <li>
                                <Link to="#">Work Portfolio</Link>
                            </li>
                            <li>
                                <Link to="#">Team</Link>
                            </li>
                            <li>
                                <Link to="#">News</Link>
                            </li>
                            <li>
                                <Link to="#">Blog</Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid item lg={12} className="copyright">
                    <CopyrightRounded />All Rights Reserved. Elancier Solution.
                </Grid>
            </Container>

            <div className="foot-social-icon">
                <ul>
                    <li><Link to="#"><Facebook/></Link></li>
                    <li><Link to="#"><Instagram/></Link></li>
                    <li><Link to="#"><LinkedIn/></Link></li>
                </ul>
            </div>

        </div>

        <div className="mobi-footer">
            <ul>
                <li><Link to="#"><HomeOutlined /></Link></li>
                <li><Link to="#"><BusinessCenterOutlined/></Link></li>
                <li><Link to="#"><img src={eLogo} className="m-footer-logo" alt="mobi footer logo" /></Link></li>
                <li><Link to="#"><RateReviewOutlined/></Link></li>
                <li><Link to="#"><ContactsOutlined /></Link></li>
            </ul>
        </div>
      </>
    );
  }
}

export default Footer;
