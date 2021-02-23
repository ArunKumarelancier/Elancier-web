import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import { Container, Grid,  } from '@material-ui/core';
import { InfoOutlined, Build, WorkOutline, Settings, CommentOutlined, PhoneInTalkOutlined, Menu } from '@material-ui/icons';

// Images 
import logo from '../../img/logo.png';

class Smenu extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }

  render(){
    return (
     <>
        <div id="myNav" className={this.state.isToggleOn ? 'h-menu resp-hide' : 'h-menu resp-show'}> 
            <Container className="cm-container">
                 <Grid container>
                     <Grid item lg={5}>
                         <Link to="/"><img className="menu-logo" src={logo} alt="Elancier logo"/></Link>
                         <h4 className="menu-title">Menu</h4>
                     </Grid>

                     <Grid item lg={7}>
                         <ul className="menus">
                             <li><Link to="#"><span><InfoOutlined/></span>Our Self</Link></li>
                             <li><Link to="#"><span><Build/></span>Services</Link></li>
                             <li><Link to="#"><span><Settings/></span>Our Works</Link></li>
                             <li><Link to="#"><span><WorkOutline/></span>Careers</Link></li>
                             <li><Link to="#"><span><CommentOutlined/></span>Blog</Link></li>
                             <li><Link to="#"><span><PhoneInTalkOutlined/></span>Touch With Us</Link></li>
                         </ul>
                     </Grid>
                 </Grid>
                 
                 <div className="version-no">
                    Version V1.0
                </div>
             </Container>

             <button className="touch-close" onClick={this.handleClick}></button>
        </div>


        <div className="menu-header">
            <button className="menu-btn" onClick={this.handleClick}><Menu /> </button>

            <Link to="/"><img className="menu-h-logo" src={logo} alt="Elancier logo"/></Link>
        </div>
        
     </>
    );
  }
}

export default Smenu;
