import React from 'react';
import { Link } from 'react-router-dom';
import AdvertisementContainer from './advertisement/advert_container';
import CheckoffAppContainer from './checkoffapp/checkoff_app_container';

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

    const main = currentUser ? (
      <div>
        <CheckoffAppContainer />
      </div>
    ) : (
      <div>
        <AdvertisementContainer />       
      </div>
    );

    return (

      <main>
       {main}
      </main>
    );
  }
}

export default Main;