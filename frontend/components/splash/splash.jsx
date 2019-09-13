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


    return (

      <main className="splash-page">
        <div>
          <BannerContainer />
        </div>
       <div className="splash-container">
         <h1>The smart to-do app for busy people</h1>
         <button onClick={()=>this.props.history.push('/signup')}>Sign Up Free</button>
         <img className="logo-banner" src={window.graphic_01} alt="graphic" />
       <div className="splash-footer">
         Footer
       </div>
       </div>
      
       
      </main>
    );
  }
}

export default Main;