import React from 'react';
import { Link } from 'react-router-dom';
// import AdvertisementContainer from './advertisement/advert_container';
// import CheckoffAppContainer from './checkoffapp/checkoff_app_container';

class Advert extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const currentUser = this.props.currentUser;
    console.log("in advertisment")

    const display = (
        <div style={{backgroundColor: 'red'}}>

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