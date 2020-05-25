import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.getSearchCriteria(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render(){
    console.log("props",this.props)
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    const headernNav = currentUser ? (
      <header className="banner-main">
          {/* <button onClick={logout}>Logout</button> */}

        <div className="left-banner">
          <div className="hamburger" onClick={()=>this.props.toggleMenu()}>
            <i className="fa fa-bars banner-icon bars"></i>
          </div>
          <div className="search" id="test">
            <i className="fa fa-search search-icon"></i>
            <input onFocus={()=>{!this.props.searching?this.props.toggleSearch():""}} onBlur={()=>{/*this.props.toggleSearch()*/}} value={this.props.setSearchValue?this.props.searchValue:""} onChange={this.handleChange} type="text" className="search-input"/>
            <i className="fa fa-caret-down search-icon"></i>
          </div>
        </div>
        <div className="settings">
          <div className="setting-dropdown">
            <div className="setting-cog">
              <i className="fa fa-cog banner-icon setting-icons cog"></i>
              <i className="fa fa-caret-down banner-icon cog-carrot"></i>
            </div>
            <div className="dropdown-items">
              <h1 onClick={logout}>Logout</h1>
            </div>
          </div>
        </div>
      </header>
    ) 
    : //Below is the banner if the user has not logged in yet
    (
          <header className="banner-splash">
            <figure className="figure">
              <Link to='/'>
                <img className="logo-banner" src={window.logoURL} alt="checkoff_logo" />
              </Link>
                <Link onClick={()=>this.props.demoLogin({username:"a",password:"123456"})} className="button demo" to="/">Demo</Link>
            </figure>
            <div className="banner-nav">
              <div className="button mobile-hide"><a href="https://www.linkedin.com/in/benjaminrawner/" target="_blank" >About Me</a></div>
              <Link className="button last-button" to="/login">Log in</Link>
                <Link className="button signup-button" to="/signup">Sign up for free</Link>
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