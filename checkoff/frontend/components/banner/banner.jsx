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

    const display = currentUser ? (
      <div>
        <div>
          {/* <Link className="btn" to={likedAllPageToggle.to}>{likedAllPageToggle.title}</Link> */}
          <h3>Welcome {currentUser.username}!</h3>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    );

    return (
      <header className="banner">
        <h1 className="logo">CHECKOFF</h1>
        <figure>
          <img src="" alt="" />
        </figure>
        <div>
          {display}
        </div>
      </header>
    );
  }
}

export default Banner;