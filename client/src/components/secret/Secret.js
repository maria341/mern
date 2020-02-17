import React, { Component } from "react";

class Secret extends Component {
    render() {
        return(
            <div>
                This is super secret
                <a href="/">Home</a>
                <br />
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        );
    }
}

export default Secret;