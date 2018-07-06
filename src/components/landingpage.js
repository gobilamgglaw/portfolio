import React , { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterLinkList} from 'react-mdl';

class Landing extends Component {
    render () {
        return (
           <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.shareicon.net/download/2015/09/18/103160_man_512x512.png" 
                        alt="avatar" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Junior Web developer</h1>

                            <hr/>
                            <p>
                                HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express | SQL | Laravel | MongoDB |
                                 Photoshop | Figma | Illustrator | Sony Vegas
                            </p>
                            <div className="social-links">
                                    {/* social links */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square"  arial-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook-square"  arial-hidden="true"/>
                                </a>

                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram"  arial-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-google"  arial-hidden="true"/>
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
           </div>
        )
    }
}

export default Landing;