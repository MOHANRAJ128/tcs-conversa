import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../../component/Dashboard/Dashboard';

import { Footer } from '../../component/Footer/Footer';
import Login from '../../component/Login/Login';
import BotDesc from '../../component/NewBot/BotDesc/BotDesc';
import { NewBot } from '../../component/NewBot/NewBot';
import { LoggedInUser } from '../UserContainer/LoggedInUser';

import "./App.css"


export class App extends Component{
    render(){
        return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/"><Login/></Route>
                        <Route exact path="/newbot">
                            <LoggedInUser>
                                <NewBot/>
                            </LoggedInUser>
                        </Route>
                        <Route exact path="/botdescription">
                            <LoggedInUser>
                                <BotDesc/>
                            </LoggedInUser>
                        </Route>
                        <Route exact path="/dashboard">
                            <LoggedInUser>
                                <Dashboard/>
                            </LoggedInUser>
                        </Route>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
