import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import { Container, Grid, Box, Accordion, AccordionSummary,AccordionDetails, TextField, TextareaAutosize, Dialog, DialogContent, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ArrowForward, Facebook, Instagram } from '@material-ui/icons';

import Smenu from '../partials/menu';

// slider Images
import sliderBg from '../../img/slider/slider-bg-1.jpg';
import sliderCrp from '../../img/slider/s-crop-1.png';
import sliderBg2 from '../../img/slider/slider-bg-2.jpg';
import sliderCrp2 from '../../img/slider/s-crop-2.png';

// Animated icons
import androidIcon from '../../img/slider/android.png';
import webIcon from '../../img/slider/technical-support.png'
import rotateIcon1 from '../../img/slider/animation-round1.png';
import rotateIcon2 from '../../img/slider/animation-round2.png';

// about images
import browser from '../../img/about-sec/browser-window.png';
import scroll from '../../img/about-sec/scroll-icon-img.png';
import murugan from '../../img/about-sec/murugantravel.jpg';
import plholiday from '../../img/about-sec/plholiday.jpg';
import esg from '../../img/about-sec/ksgscreenshot.jpg'

// ww icon section
import webdesign from '../../img/icon/web-design.svg';
import webdev from '../../img/icon/web-development.svg';
import appicon from '../../img/icon/app.svg';
import webmain from '../../img/icon/maintenance.svg';
import socmark from '../../img/icon/search.svg';
import smsicon from '../../img/icon/sms.svg';
import branding from '../../img/icon/branding.svg';
import wwImg from '../../img/ww/ww-img.png'

import webdesignBg from '../../img/ww/webdesign.jpg';
import webdevBg from '../../img/ww/webdevelopment.jpg'
import appdevBg from '../../img/ww/appdevelop.jpg';
import webmainBg from '../../img/ww/webmainbg.jpg';
import onlinemarkBg from '../../img/ww/onlinemarketing.jpg';
import smsBg from '../../img/ww/smsbg.jpg';
import corporateBg from '../../img/ww/corporateidbg.jpg'


// our service section
import a2zEcommerce from '../../img/our-serv/a2zEcommerceSite.jpg';
import povaApp from '../../img/our-serv/povaandroidApp.jpg';
import muruganTrav from '../../img/our-serv/murugantravel.jpg';
import plHolidaycl from '../../img/our-serv/plholiday.jpg';


// progress bar images
import progress1 from '../../img/progress/progress-img.jpg';

// blog images
import facebookBg from '../../img/blog/facebookbg.jpg';
import instaBg from '../../img/blog/instabg.jpg';
import facebookBlog from '../../img/blog/facebookblog.jpg';
import instaBlog from '../../img/blog/instablog.jpg';

// new letter bg
import newsltrBg from'../../img/newsltrbg.jpg'

// Components
import Footer from '../partials/footer';


// Stepper function
function getSteps() {
    return ['', '', ''];
}
  
function getStepContent(step) {
    switch (step) {
        case 0:
        return <div> <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_oxurudgk.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player> </div>;
        default:
        return <> HI aRUN2 </>;
    }
}

class Home extends Component {

    componentDidMount(){
        let visited = localStorage["alreadyVisited"];
        if(visited) {
             this.setState({ open: false })
             //do not view Popup
        } else {
             //this is the first time
             localStorage["alreadyVisited"] = true;
             this.setState({ open: true});
        }
    }

    state = {
        currentIndex: 0,
        itemsInSlide: 1,
        expanded: 'panel1',
        open: false,
        activeStep: 0,
        skipped: new Set(),
      };

    // Stepper 
      isStepOptional = step => step === 1;

      handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
          skipped = new Set(skipped.values());
          skipped.delete(activeStep);
        }
        this.setState({
          activeStep: activeStep + 1,
          skipped,
        });
      };
    
      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
    
      isStepSkipped(step) {
        return this.state.skipped.has(step);
      }

      
    // Accordion
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
      

    // Sliders
    techResponsive = {
        0: { items: 1 },
        1024: { items: 1 },
      }

      screenResponsive = {
        0: { items: 1 },
        1024: { items: 1 },
      }

      workResponsive = {
        0: { items: 1 },
        1024: { items: 4 },
      }
      

      slideNextPage = () => {
        const {
          itemsInSlide,
          galleryItems: { length },
        } = this.state
        let currentIndex = this.state.currentIndex + itemsInSlide
        if (currentIndex > length) currentIndex = length
    
        this.setState({ currentIndex })
      }
    
      handleOnSlideChange = (event) => {
        const { itemsInSlide, item } = event
        this.setState({ itemsInSlide, currentIndex: item })
      }

      handleClickOpen = () => {
        this.setState({
          open: true,
        });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

  render(){
    const { expanded } = this.state;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
        <>
        <Smenu />

        <div className="tech-sec">
            <AliceCarousel
                responsive={this.techResponsive}
                autoPlayInterval={5000}
                autoPlayDirection="ltr"
                autoPlay={true}
                fadeOutAnimation={false}
                touchTrackingEnabled ={true}
                disableAutoPlayOnAction={true}
                buttonsDisabled={true}
                >
                <div className="slider-item">
                        <Grid container>
                            <Grid item lg={5} xs={5}>
                              <Box display="flex" alignItems="flex-end" className="h-100">
                                <div className="slider-content">
                                    <h2>Lorem consectetur adipiscing elit.</h2>
                                    <p>Nam vel ligula feugiat turpis sollicitudin egestas. Suspendisse ac molestie lacus. Integer consequat ligula eget eros lobortis ornare. Quisque quis vehicula.</p>

                                    <Link to="/" className="btn-style"><span>Know More</span></Link>
                                </div>
                              </Box>
                            </Grid>

                            <Grid item lg={7} xs={7}>
                                <div className="tech-img">
                                    <img className="sliderbg" src={sliderBg} alt="slider" />

                                    <img className="slidercrp" src={sliderCrp} alt="slider" />
                                    
                                    <div className="s-animated-pos">
                                        <div className="s-animated-icon">
                                            <img className="icon-s" src={androidIcon} alt="slide icon" />

                                            <img className="icon-cr1" src={rotateIcon1} alt="slide icon" />

                                            <img className="icon-cr2" src={rotateIcon2} alt="slide icon" />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        <div className="slider-wave">
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>
                </div>

                <div className="slider-item">
                        <Grid container>
                            <Grid item lg={5} xs={5}>
                              <Box display="flex" alignItems="flex-end" className="h-100">
                                <div className="slider-content">
                                    <h2>Eipsum dolor consectetur adipiscing</h2>
                                    <p>Nam vel ligula feugiat turpis sollicitudin egestas. Suspendisse ac molestie lacus. Integer consequat ligula eget eros lobortis ornare. Quisque quis vehicula.</p>

                                    <Link to="/" className="btn-style"><span>Know More</span></Link>
                                </div>
                              </Box>
                            </Grid>

                            <Grid item lg={7} xs={7}>
                                <div className="tech-img">
                                    <img className="sliderbg" src={sliderBg2} alt="slider" />

                                    <img className="slidercrp slider-pc" src={sliderCrp2} alt="slider" />
                                    
                                    <div className="s-animated-pos">
                                        <div className="s-animated-icon">
                                            <img className="icon-s" src={webIcon} alt="slide icon" />

                                            <img className="icon-cr1" src={rotateIcon1} alt="slide icon" />

                                            <img className="icon-cr2" src={rotateIcon2} alt="slide icon" />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        <div className="slider-wave">
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>
                </div>
            </AliceCarousel>
        </div>

        <div className="about-sec">
            <Container className="cm-container">
                <Grid container>
                    <Grid item lg={8}>
                        <div className="about-img">
                           <img src={browser} alt="browser" className="browser-frame" />
                           
                           <div  className="scroll-indic">
                              <img src={scroll} alt="scroll icon"/>
                           </div>

                           <div className="screenshot-slider cm-slider-ctrl">
                                 <AliceCarousel
                                    responsive={this.screenResponsive}
                                    autoPlayInterval={3000}
                                    autoPlayDirection="rtl"
s                                    fadeOutAnimation={true}
                                    >

                                <div className="screen-item">
                                    <Link to="#">
                                        <img src={murugan} alt="screenshot" />
                                    </Link>
                                </div>

                                <div className="screen-item">
                                    <Link to="#">
                                        <img src={plholiday} alt="screenshot" />
                                    </Link>
                                </div>

                                <div className="screen-item">
                                    <Link to="#">
                                        <img src={esg} alt="screenshot" />
                                    </Link>
                                </div>

                                </AliceCarousel>
                                
                           </div>
                        </div>
                    </Grid>

                    <Grid item lg={4}>
                        <h5 className="sup-txt">About Us</h5>
                        <h1 className="title-txt-s">Sed eu purus dapibus <span>volutpat mauris</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum auctor odio, vitae finibus Nam luctus ante et auctor mattis.</p>

                        <div className="cm-accordian">
                            <Accordion defaultExpanded={true} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} >
                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}aria-controls="panel1d-content"id="panel1d-header">
                                    Accumsan elementum
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>Lorem dolor consectetur Suspendisse malesuada blandit lobortis eget...<Link to="#">Know More</Link></p>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}aria-controls="panel2d-content"id="panel2d-header">
                                    Pellentesque non lectus
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>Lorem dolor consectetur Suspendisse malesuada blandit lobortis eget...<Link to="#">Know More</Link></p>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}aria-controls="panel3d-content"id="panel3d-header">
                                    Donec suscipit consectetur
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>Lorem dolor consectetur Suspendisse malesuada blandit lobortis eget...<Link to="#">Know More</Link></p>
                                </AccordionDetails>
                            </Accordion>
                        </div> 

                    </Grid>
                    
                </Grid>
            </Container>
        </div>

        <div className="ww-sec">
            <Container className="cm-container">
                <Box align="center" display="flex" justifyContent="center" mb={7} className="ww-text-content" >
                    <Grid item lg={8}>
                        <h2 className="title-txt-s">What we <span>Are</span></h2>
                        <p>Donec condimentum nulla mollis purus tortor aliquam. <span className="hide-m">Morbi in eros at dui dapibus lobortis ac eget nulla. Aliquam ut condimentum odio. Cras faucibus dui nisi, eget fringilla justo commodo vel.</span></p>
                    </Grid>

                    <div className="ww-vector-img">
                        <img src={wwImg} alt="what we" />
                    </div>
                </Box>

                <div className="mob-scroll">
                   <ul className="icon-col">
                     <li>
                        <Link to="#"> 
                         <div className="ww-img">
                             <img src={webdesignBg} className="ww-bg"  alt="web design"/>
                             <div className="icon-txt-row">
                                 <div className="ww-icon">
                                     <span><img src={webdesign} alt="ww icons" /></span>
                                 </div>
                                 <div className="ww-txt">
                                     <h3>Web Design</h3>
                                 </div>
                             </div>
                         </div>
                         </Link>
                     </li>

                     <li>
                        <Link to="#"> 
                         <div className="ww-img">
                             <img src={webdevBg} className="ww-bg"  alt="web design"/>
                             <div className="icon-txt-row">
                                 <div className="ww-icon">
                                     <span><img src={webdev} alt="ww icons" /></span>
                                 </div>
                                 <div className="ww-txt">
                                     <h3>Web Development</h3>
                                 </div>
                             </div>
                         </div>
                         </Link>
                     </li>

                     <li>
                        <Link to="#"> 
                         <div className="ww-img">
                             <img src={appdevBg} className="ww-bg"  alt="web design"/>
                             <div className="icon-txt-row">
                                 <div className="ww-icon">
                                     <span><img src={appicon} alt="ww icons" /></span>
                                 </div>
                                 <div className="ww-txt">
                                     <h3>App Development</h3>
                                 </div>
                             </div>
                         </div>
                         </Link>
                     </li>

                     <li>
                        <Link to="#"> 
                         <div className="ww-img">
                             <img src={webmainBg} className="ww-bg"  alt="web design"/>
                             <div className="icon-txt-row">
                                 <div className="ww-icon">
                                     <span><img src={webmain} alt="ww icons" /></span>
                                 </div>
                                 <div className="ww-txt">
                                     <h3>Website Maintenance</h3>
                                 </div>
                             </div>
                         </div>
                         </Link>
                     </li>

                     <li>
                        <Link to="#"> 
                         <div className="ww-img">
                             <img src={onlinemarkBg} className="ww-bg"  alt="web design"/>
                             <div className="icon-txt-row">
                                 <div className="ww-icon">
                                    <span><img src={socmark} alt="ww icons" /></span>
                                 </div>
                                 <div className="ww-txt">
                                     <h3>Online Marketing</h3>
                                 </div>
                             </div>
                         </div>
                         </Link>
                     </li>

                     <li>
                        <Link to="#"> 
                         <div className="ww-img">
                             <img src={smsBg} className="ww-bg"  alt="web design"/>
                             <div className="icon-txt-row">
                                 <div className="ww-icon">
                                     <span><img src={smsicon} alt="ww icons" /></span>
                                 </div>
                                 <div className="ww-txt">
                                     <h3>Bulk SMS</h3>
                                 </div>
                             </div>
                         </div>
                         </Link>
                     </li>

                     <li>
                        <Link to="#"> 
                         <div className="ww-img">
                             <img src={corporateBg} className="ww-bg"  alt="web design"/>
                             <div className="icon-txt-row">
                                <div className="ww-icon">
                                     <span><img src={branding} alt="ww icons" /></span>
                                 </div>
                                 <div className="ww-txt">
                                     <h3>Corporate Identity</h3>
                                 </div>
                             </div>
                         </div>
                         </Link>
                     </li>

                 </ul>
                 </div>
                </Container>
                
                <div className="water-mark">
                   <h2>Think Different</h2>
                </div>
        </div>
        
        <div className="content-sec">
            <Container className="cm-container">
                <Grid item container>
                    <Grid item lg={4}>
                        <h5 className="sup-txt">Morbiin erosatdui</h5>
                        <h2 className="title-txt-s">Nulla rutrum sapien purus, eu efficitur <span>anteornarenon</span></h2>
                    </Grid>

                    <Grid item lg={4}>
                       <Box display="flex" alignItems="center" className="h-100">
                            <p className="hide-m">Fusce est augue, finibus iaculis tortor et, fermentum facilisis dui. Curabitur convallis varius ex, ut bibendum libero molestie a. Nunc molestie, elit a auctor sodales, velit lectus placerat leo, quis laoreet dui ex eu metus.</p>
                       </Box>
                    </Grid>

                    <Grid item lg={4}>
                       <Box display="flex" alignItems="center" justifyContent="center" className="h-100">
                            <Link to="#" className="btn-style"><span>Know More</span></Link>
                       </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
        
        <div className="our-w">
            <Container className="cm-container">
                <div className="our-slider cm-slider-ctrl">
                    <h2 className="title-txt-s"><b>Our <span>Products</span></b></h2>
                    <AliceCarousel
                    responsive={this.workResponsive}
                    autoPlayInterval={5000}
                    autoPlayDirection="ltr"
                    autoPlay={true}
                    preventEventOnTouchMove={false}
                    // fadeOutAnimation={true}
                    dotsDisabled ={true}
                    >

                        <div className="work-item">
                            <img src={a2zEcommerce} alt="work item" />

                            <Link to="#">
                                <div className="client-dts">
                                    <h3>A2Z<br />Group Inc</h3>
                                    <ArrowForward/>
                                    <p>Nunc molestie elit a auctor sodales</p>
                                </div>
                            </Link>
                        </div>

                        <div className="work-item">
                            <img src={povaApp} alt="work item" />

                            <Link to="#">
                                <div className="client-dts">
                                    <h3>Pova Order &amp; Delivery</h3>
                                    <ArrowForward/>
                                    <p>Nunc molestie elit a auctor sodales</p>
                                </div>
                            </Link>
                        </div>

                        <div className="work-item">
                            <img src={muruganTrav} alt="work item" />

                            <Link to="#">
                                <div className="client-dts">
                                    <h3>Sri Murugan Travel Agency</h3>
                                    <ArrowForward/>
                                    <p>Nunc molestie elit a auctor sodales</p>
                                </div>
                            </Link>
                        </div>

                        <div className="work-item">
                            <img src={plHolidaycl} alt="work item" />

                            <Link to="#">
                                <div className="client-dts">
                                    <h3>PlHolidays</h3>
                                    <ArrowForward/>
                                    <p>Nunc molestie elit a auctor sodales</p>
                                </div>
                            </Link>
                        </div>

                    </AliceCarousel>
                </div>
            </Container>

            <div className="water-mark mark-pos2">
                <h2>Simplified</h2>
            </div>
        </div>
        
        <div className="work-flow" >
            <Container className="cm-container">
                <Box align="center" justifyContent="center">
                   <Grid item lg={8}>
                        <h3>Workflow to build your valuable Project</h3>

                        <p className="hide-m">Vestibulum hendrerit erat at purus tincidunt, id tristique odio aliquam. Nunc dapibus eros ultricies justo vulputate lacinia. Quisque ullamcorper consectetur tellus, in gravida nisi tincidunt non.</p>
                   </Grid>
                </Box>

                <div className="flow-col">
                    <ul>
                        <li>
                            <div className="progress-grid">
                                <img src={progress1} alt="flow progress" />

                                <h5>Nam fermentum</h5>
                                <p>Nullam eget purus Integer gravida sit amet at lorem</p>
                            </div>
                        </li>

                        <li>
                            <div className="progress-grid">
                                <img src={progress1} alt="flow progress" />

                                <h5>Nam fermentum</h5>
                                <p>Nullam eget purus Integer gravida sit amet at lorem</p>
                            </div>
                        </li>

                        <li>
                            <div className="progress-grid">
                                <img src={progress1} alt="flow progress" />

                                <h5>Nam fermentum</h5>
                                <p>Nullam eget purus Integer gravida sit amet at lorem</p>
                            </div>
                        </li>

                        <li>
                            <div className="progress-grid">
                                <img src={progress1} alt="flow progress" />

                                <h5>Nam fermentum</h5>
                                <p>Nullam eget purus Integer gravida sit amet at lorem</p>
                            </div>
                        </li>

                        <li>
                            <div className="progress-grid">
                                <img src={progress1} alt="flow progress" />

                                <h5>Nam fermentum</h5>
                                <p>Nullam eget purus Integer gravida sit amet at lorem</p>
                            </div>
                        </li>

                        <li></li>

                    </ul>
                </div>
            </Container>
        </div>

        <div className="blog-sec">
            <Container className="cm-container">
                <Box align="center" mb={6}>
                   <h2 className="title-txt-s">Blog and <span>Social</span></h2>
                   <p className="hide-m">Aenean in consectetur sapien at iaculis turpis</p>
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={6}>
                        <Link to="#">
                            <div className="over-content fb-sec">
                                <img src={facebookBg} alt="blog bg" />
                                <div className="blog-over-sec">
                                    <span className="social-link-btn">Facebook</span>

                                    <h2>Vestibulum rhoncus orci quis libero tristique accumsan</h2>

                                    <p className="blog-date">4 Jan, 2020</p>

                                    <div className="blog-icon">
                                       <Facebook/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Grid>

                    <Grid item lg={6}>
                        <Grid container>
                            <Grid item lg={6}>
                                <div className="nr-blog">
                                    <ul className="blog-link">
                                        <li><Link to="#">News</Link></li>
                                        <li><Link to="#" className="fill">Event</Link></li>
                                    </ul>

                                    <Link to="#"><h4>Proin quis risus vehicula ultricies</h4></Link>

                                    <p>Proin semper accumsan viverra consectetur sem tempus malesuada.</p>

                                    <p className="blog-date">4 March, 2020</p>
                                </div>
                            </Grid>

                            <Grid item lg={6}>
                                <img src={facebookBlog} alt="facebook blog"/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={6}>
                        <Grid container>
                            <Grid item lg={6}>
                                <div className="nr-blog">
                                    <ul className="blog-link">
                                        <li><Link to="#">News</Link></li>
                                    </ul>

                                    <Link to="#"><h4>Proin quis risus vehicula ultricies</h4></Link>

                                    <p>Proin semper accumsan viverra consectetur sem tempus malesuada.</p>

                                    <p className="blog-date">8 March, 2020</p>
                                </div>
                            </Grid>

                            <Grid item lg={6}>
                                <img src={instaBlog} alt="facebook blog"/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={6}>
                        <Link to="#">
                            <div className="over-content fb-sec insta-grd">
                                <img src={instaBg} alt="blog bg" />
                                <div className="blog-over-sec">
                                    <Box align="right">
                                       <span className="social-link-btn">Follow us</span>
                                    </Box>

                                    <h2>Vestibulum rhoncus libero tristique accumsan <b>#webtechnolgy</b></h2>

                                    <p className="blog-date">16 Jun, 2020</p>

                                    <div className="blog-icon">
                                      <Instagram/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Grid>

                </Grid>
            </Container>
        </div>
       
        <div className="content-sec">
            <Container className="cm-container">
                <Grid item container>
                    <Grid item lg={4}>
                        <h5 className="sup-txt">Morbiin erosatdui</h5>
                        <h2 className="title-txt-s">Nulla rutrum sapien purus, eu efficitur <span>anteornarenon</span></h2>
                    </Grid>

                    <Grid item lg={4}>
                       <Box display="flex" alignItems="center" className="h-100">
                            <p className="hide-m">Fusce est augue, finibus iaculis tortor et, fermentum facilisis dui. Curabitur convallis varius ex, ut bibendum libero molestie a. Nunc molestie, elit a auctor sodales, velit lectus placerat leo, quis laoreet dui ex eu metus.</p>
                       </Box>
                    </Grid>

                    <Grid item lg={4}>
                       <Box display="flex" alignItems="center" justifyContent="center" className="h-100">
                            <Link to="#" className="btn-style"><span>Know More</span></Link>
                       </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
        
        <div className="newsletter-sec">
            <Container className="cm-container">
                <Grid container spacing={3}>
                    <Grid item lg={4}>
                        <div className="news-lttr-bg">
                            <img src={newsltrBg} alt="new letter bg" />

                            <div className="new-over-cn">
                                <h5 className="sup-txt">We are hiring</h5>
                                <h2 className="title-txt-s">Nullam eleme ntum fringilla dignsim</h2>
                                <p className="hide-m">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>

                                <Link to="#" className="btn-style btn-style2"><span>Apply Now</span></Link>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} className="news-hide-map">
                        <iframe className="map-s" title="elancierlocations" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1964.9928764859278!2d78.133216!3d9.935143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x305966e3b4ce46ac!2sElancier%20-%20Web%20Development%20Company%20in%20Madurai!5e0!3m2!1sen!2sin!4v1585908437061!5m2!1sen!2sin"></iframe>
                    </Grid>

                    <Grid item lg={4} className="news-hide-form">
                       <div className="news-lttr-bg mess-box h-100">
                            <Box p={3}>
                                <h2 className="title-txt-s">Mail Us</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                                <form className="form-style">
                                    <TextField label="Full Name" />

                                    <TextField type="number" label="Phone" />

                                    <TextareaAutosize placeholder="Message" rowsMin={4} />

                                    <Link to="#" className="btn-style btn-style2"><span>Send</span></Link>
                                </form>
                            </Box>
                       </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        
        <Footer />

        <button onClick={this.handleClickOpen}>
          Open dialog
        </button>

        <Dialog
          open={this.state.open}
          className="welcome-dialog"
        >
            <DialogContent>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        if (this.isStepSkipped(index)) {
                        props.completed = false;
                        }
                        return (
                        <Step key={index} {...props}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                        );
                    })}
                </Stepper>

                <div>
                    {activeStep === steps.length - 1 ? (
                        <div>
                            Welcome to elancier
                            <Button disabled={activeStep === 0} onClick={this.handleBack}>Back</Button>
                        </div>
                    ) : (
                    <div>

                        {getStepContent(activeStep)}

                       <div>
                            <Button disabled={activeStep === 0} onClick={this.handleBack}>Back</Button>

                            <Button variant="contained" color="primary" onClick={this.handleNext} >
                                    Next
                            </Button>

                        </div>
                    </div>
                    )}
                </div>
            </DialogContent>
            

            <button onClick={this.handleClose}>{activeStep === steps.length - 1 ? 'Lets Begin' : 'Skip'}</button>
        </Dialog>

        </>
    );
  }
}

export default Home;
