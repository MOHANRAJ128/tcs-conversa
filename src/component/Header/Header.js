import { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Header.css";

class Header extends Component{

    constructor(props,state)
    {
        super(props)
        console.log(props);
    }
    render(){
        return(
            <div className="header_container">
                {/* <image src="">Logo</image> */}
                {/* <span>{this.props.location.state.username}</span> */}
                <span>Mohan</span>
            </div>
        )
    }
}

export default Header;