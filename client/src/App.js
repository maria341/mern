import React, { Component } from "react";
import Main from "./components/main/Main";
import Secret from "./components/secret/Secret";
import NotFound from "./components/notFound/NotFound";
import Callback from "./components/callback/Callback";
import "./App.css";

class App extends Component {
  render() {
    let mainComponent ="";
    switch(this.props.location) {
      case "":
      mainComponent = <Main {...this.props} />;
      break;
      case "callback":
        mainComponent = <Callback />;
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound />;
        break;
      default:
        mainComponent = <NotFound />;
    }
    return (
      <div className="App">
        <header className="header">
        <h1 className="title">Hello, {this.props.name}</h1>
        </header>
        {mainComponent}
        </div>
     
    
      
    );
  }
}

export default App;
