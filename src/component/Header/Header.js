import { Component } from "react";
import { connect } from "react-redux";

import "./Header.css";

class Header extends Component{

    render(){
        return(
            <div className="header_container">
                {/* <image src="">Logo</image> */}
                {/* <span>{this.props.location.state.username}</span> */}
                <span>{this.props.userName}</span>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    userName:state.header.userName
})
export default connect(mapStateToProps)(Header);