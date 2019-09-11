import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    // const likedAllPageToggle = this.props.location.pathname === '/chirps'? 
    //   {title:"Your Liked Chirps!",to:"/likedchirps"} 
    //   : 
    //   {title:"All The Chirps!",to:"/chirps"} ;

    const headernNav = currentUser ? (
      <div>
        <div>
          {/* <Link className="btn" to={likedAllPageToggle.to}>{likedAllPageToggle.title}</Link> */}
          <h3>Welcome {currentUser.username}!</h3>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div className="banner-nav">
        <Link className="button" to="/">Tour</Link>
        <Link className="button" to="/">What's New</Link>
        <Link className="button" to="/">Upgrade</Link>
        <Link className="button" to="/">Help</Link>
        <Link className="button" to="/login">Log in</Link>
        <div className="sign-up-demo">
          <Link className="button" to="/signup">Sign up for free</Link>
          <Link className="button" to="/signup">Demo</Link>
        </div>
        
      </div>
    );

    return (
      <header className="banner">
        {/* <h1 className="logo">CHECKOFF</h1> */}
        <figure className="figure">
          <img className="logo-banner" src={window.logoURL} alt="checkoff_logo" />
        </figure>
        {headernNav}
        <div>
        

        </div>
      </header>
    );
  }
}

export default Banner;