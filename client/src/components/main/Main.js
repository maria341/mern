import React, { Component } from "react";

class Main extends Component {
      render() {
          return(
              <div>
                 <p className="App-intro">
                  Hello, {this.props.name} <br />
                  Do you wanna proceed to secret area? <a href="/secret">Click Me</a>
              </p> 
              {!this.props.auth.isAuthenticated() &&
              <div>
                  <hr />
                  Please login first 
                  <br />
                  <button onClick={this.props.auth.login}>Login</button>
              </div>
              } 
              </div>
              
          )
      }
}

export default Main;