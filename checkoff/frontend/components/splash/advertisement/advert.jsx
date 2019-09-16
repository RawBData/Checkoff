import React from 'react';
import { Link } from 'react-router-dom';
// import AdvertisementContainer from './advertisement/advert_container';
// import CheckoffAppContainer from './checkoffapp/checkoff_app_container';


//need to set this up to have a four advert slideshow

class Advert extends React.Component {
  constructor(props){
    super(props)
  }

  render(){


    const currentUser = this.props.currentUser;

    const display = (
        <div className="advert_container">
          <Link className="button" to="/signup">Sign up for free</Link>
        </div>
    );

    return (

      <main>
       {display}
      </main>
    );
  }
}

export default Advert;