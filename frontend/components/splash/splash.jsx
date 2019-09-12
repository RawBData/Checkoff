import React from 'react';
import { Link } from 'react-router-dom';
import AdvertisementContainer from './advertisement/advert_container';
import BannerContainer from '../banner/banner_container';
//import CheckoffAppContainer from './checkoffapp/checkoff_app_container';

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const currentUser = this.props.currentUser;
    console.log(currentUser)

    // const headernNav = currentUser ? (
    //   <div>

    //   </div>
    // ) : (
    //   <div className="banner-nav">

    //   </div>
    // );


    return (

      <main>
       <BannerContainer />
       <h1>Splash</h1>
      </main>
    );
  }
}

export default Main;