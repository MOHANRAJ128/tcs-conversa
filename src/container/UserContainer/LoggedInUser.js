import { Component } from "react";

import Header from "../../component/Header/Header";

export class LoggedInUser extends Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}
