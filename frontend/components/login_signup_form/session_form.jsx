import React from 'react';
import { Link } from 'react-router-dom';
import { blurb } from './poems';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName: '',
      email: '',
      username: '',
      password: '',
    };

    this.blb = this.props.formType === 'login'? blurb[Math.floor(Math.random()*blurb.length)] : "ADVERT IMAGE HERE";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(() => this.props.history.push('/main'));
  }

  handleDemoLogin() {
    const demoUser = { username:"Demo",password:"123456"}
    if (this.props.formType=='login'){
      this.props.processForm(demoUser)
      .then(() => this.props.history.push('/main'));
    }else{
      this.props.login(demoUser)
      .then(() => this.props.history.push('/main'));
    }
  }

  componentDidMount(){
    

  }
  
  
  render() {
    
    let formClass = this.props.formType;

    let submitButton; // = formClass === 'login'? "Log in!" : "Sign up!";
    let formTitle; // = formClass === 'login'? "Been here before? Welcome back!" : "Sign up for free.";  
    let demoButton;
    
    if(formClass === 'login'){
      submitButton = "Log in!";
      formTitle = "Been here before? Welcome back!";
      demoButton = "Demo Login" 
    }else{
      submitButton = "Sign up!";
      formTitle = "Sign up for free.";
      demoButton = "Demo Sign Up" 
    }

    //LEFT SIDE SETUP
      let blurbDisplay = formClass === 'login'? 
      (<div>
        <ul className="blurb-ul">
          {
            this.blb.poem.map(line=>(<li className="p-li">{line}</li>))
          }
        </ul>
        <p>Author - {this.blb.author}</p>
      </div>) 
      : 
      (<div>
        <figure className='customers-gif-container'>
        
          <img className="customers-gif-image" src={window.cusomers_gif} alt="checkoff_logo" />
          <h1>Join tens of people getting more organized and productive!</h1>
        </figure>
      </div>);
    

    //RIGHT SIDE

    
    
    
    let errorsDisplay = this.props.errors.length>0? 
    (<div>
          <ul>
            {this.props.errors.map(err=>(<h1 key={err[0]} className="error-text">{err}</h1>))}
          </ul>
        </div>)
      : 
      (<div></div>);
      
      let formDisplay = [];
      if (formClass==='signup') {
        //checks if SIGNUP page and creates sign up field containers for use
        formDisplay = [
          
          (<input
          type="text"
          value={this.state.firstName}
          onChange={this.handleInput('firstName')}
          placeholder="First Name"
          key="First Name"
        />)
        ,
        (<input
          type="text"
          value={this.state.lastName}
          onChange={this.handleInput('lastName')}
          placeholder="Last Name"
          key="Last Name"
        />)
        ,
        (<input
          type="text"
          value={this.state.email}
          onChange={this.handleInput('email')}
          placeholder="Email"
          key="Email"
        />)
     
    ];
  }
  
  //Switch between login and sign up form
  let sessionToggle = formClass === 'signup'? 
  (<Link onClick={()=>this.props.clearErrors()} className="other-session-button" to="/login">Log in</Link>) 
  : 
  (<Link onClick={()=>this.props.clearErrors()} className="other-session-button" to="/signup">Sign up for free</Link>);
  
  formDisplay.unshift(
    <div className="session-toggle-container">
        <figure className="mobile-logo">
          <Link to='/'>
            <img className="logo-sessions" src={window.logoURL_black} alt="checkoff_logo" />
          </Link>
        </figure>
        {sessionToggle}
      </div>
      ,
      <div key="formtitle-error-container">
        <div key="form title">
          <h2 key="formtitle" className="form-title">{formTitle}</h2>
        </div>
        <div className="error-container">
            {errorsDisplay}
        </div>
      </div>
      );
      //add username and password to display array no matter what
    
      formDisplay = formDisplay.concat([
          (<input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            placeholder="Username"
            key="Username"
          />)
        ,
          (<input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder="Password (min 6 characters)"
            key="Password"
          />)
          ,
          <div className="submit-button-container">
            <button onClick={this.handleSubmit} key='submitButton'>{submitButton}</button>
          </div>
          ,
          <div className="login-demo-divider">
            <hr/>
            <span>OR</span>
            <hr/>
          </div>
          ,
          <div className="demo-button-container">
            <img src={window.demo_logo} alt=""/>
            <button className="demo-button" onClick={this.handleDemoLogin} key='demoButton'>{demoButton}</button>
          </div>
      ]);

    

    



    return (
      <main className="session-form">
        <span className="left-session-form">
          <figure className="figure">
            <Link to='/'>
            <img className="logo-sessions" src={window.logoURL} alt="checkoff_logo" />
            </Link>
          </figure>

          <div className="blurb">
            {blurbDisplay}
          </div>

          <div className="curator">
              <div className="hire-me hire-me-login">
                    <hr/>
                    <a href="https://www.linkedin.com/in/benjaminrawner/" target="_blank">
                      <img src={window.personal_03} alt="personal03" />
                    </a>
                  </div>
          </div>

        </span>

        <span className="right-session-form">    
            <form className="form-container">           
              <ul className="form-setup">
                {formDisplay}
              </ul>
            </form>
        </span>
      </main>
    );
  }
}

export default SessionForm;


/*


let signUpFormDisplay = formClass === 'signup'? 
          (
            <div className="signup-form-setup">
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.handleInput('firstName')}
                placeholder="First Name"
              />

              <input
                type="text"
                value={this.state.lastName}
                onChange={this.handleInput('lastName')}
                placeholder="Last Name"
              />

              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                placeholder="Email"
              />
            </div>
          ) 
          : 
          (
            <div>

            <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            placeholder="Username"
          />

          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder="Password (minimum 6 characters)"
          />

            </div>)

*/