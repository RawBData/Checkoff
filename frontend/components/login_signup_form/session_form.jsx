import React from 'react';
import { Link } from 'react-router-dom';

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

    this.handleSubmit = this.handleSubmit.bind(this);

        // /linecount/3
    // http://poetrydb.org/title/Ozymandias/lines.json
    // 
    // http://poetrydb.org/linecount/3    title/Ozymandias/lines.json
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

  render() {
    let formClass = this.props.formType;
    let submitButton = formClass === 'login'? "Log In!" : "Sign Up!";
    let formTitle = formClass === 'login'? "Been here before? Welcome back!" : "Sign up for free.";
    

    let signUpFormDisplay1 = [];
    
    if (formClass==='signup') {
      //checks if SIGNUP page and creates sign up field containers for use
      signUpFormDisplay1 = [
        
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
    
    signUpFormDisplay1.unshift(
      <div key='form title'>
        <h2 key='formtitle' className="form-title">{formTitle}</h2>
      </div>
    );
      //add username and password to display array no matter what
      signUpFormDisplay1 = signUpFormDisplay1.concat([
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
              placeholder="Password (minimum 6 characters)"
              key="Password"
            />)
            ,
            <div className="submit-button-container">
              <button onClick={this.handleSubmit} key='submitButton'>{submitButton}</button>
            </div>
        ]);






    

    let sessionToggle = formClass === 'signup'? 
      (<Link className="other-session-button" to="/login">Log in</Link>) 
      : 
      (<Link className="other-session-button" to="/signup">Sign up for free</Link>);


    return (
      <main className="session-form">
        <span className="left-session-form">
      
        </span>

        <span className="right-session-form">
          <div className="session-toggle-container">
            {sessionToggle}
          </div>
          <div>
          
            <form>
            
              <ul className="form-setup">
                {signUpFormDisplay1}
              </ul>
                

                

                
              
            </form>
          </div>
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