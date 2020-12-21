import { Component } from "react";
import { connect } from "react-redux";

import "./Header.css";

class Header extends Component{
    constructor(props)
    {
        super(props)
        console.log("From Header");
        console.log(props);
    }

    render(){
        return(
            <div className="header_container">
                {/* <image src="">Logo</image> */}
                {/* <span>{this.props.location.state.username}</span> */}
                <p>{this.props.botName}</p>
                <span>{this.props.userName}</span>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    userName:state.header.userName,
    botName:state.header.bot.name
})
export default connect(mapStateToProps)(Header);