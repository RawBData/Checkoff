import React from 'react';
import { Link } from 'react-router-dom';
// import AdvertisementContainer from './advertisement/advert_container';
// import CheckoffAppContainer from './checkoffapp/checkoff_app_container';


//need to set this up to have a four advert slideshow

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){



    const display = (
        <div className="footer-container">

            <div>
                <img className="personal_image_splash" src={window.personal_04} alt="personal04" />
            </div>

            <div>
                <a href="https://github.com/RawBData" target="_blank">
                    <h1>Github</h1>
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/benjaminrawner/" target="_blank">
                    <h1>LinkedIn</h1>
                </a>
            </div>

            <div>
                <a href="https://angel.co/ben-rawner?public_profile=1" target="_blank">
                    <h1>Angel List</h1>
                </a>
            </div>
        </div>
    );

    return (

      <main>
       {display}
      </main>
    );
  }
}

export default Footer;