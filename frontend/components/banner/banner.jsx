import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    const headernNav = currentUser ? (
      <header className="banner-main">

        <div>
          <button onClick={logout}>Logout</button>
        </div>

      </header>
    ) : (
          <header className="banner-splash">
            <figure className="figure">
              <Link to='/'>
                <img className="logo-banner" src={window.logoURL} alt="checkoff_logo" />
              </Link>
            </figure>
            <div className="banner-nav">
              <Link className="button mobile-hide" to="/">Tour</Link>
              <Link className="button mobile-hide" to="/">What's New</Link>
              <Link className="button mobile-hide" to="/">Upgrade</Link>
              <Link className="button mobile-hide" to="/">Help</Link>
              <Link className="button last-button" to="/login">Log in</Link>
              <div className="sign-up-demo">
                <Link className="button signup-button" to="/signup">Sign up for free</Link>
                <Link onClick={()=>this.props.demoLogin({username:"a",password:"123456"})} className="button demo" to="/">Demo</Link>
              </div>
            </div>
      </header>  
    );

    return (
        <div>
          {headernNav}
        </div>
    );
  }
}

export default Banner;