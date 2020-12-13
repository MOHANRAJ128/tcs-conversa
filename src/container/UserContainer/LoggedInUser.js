import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../component/Header/Header";
import { BotDesc } from "../../component/NewBot/BotDesc/BotDesc";
import { NewBot } from "../../component/NewBot/NewBot";

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