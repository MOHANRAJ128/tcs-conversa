import { Component } from "react";

import "./Footer.css";

export class Footer extends Component{
    render(){
        return(
            <div>
                <label className="content">Copyright © 2020 Tata Consultancy Services</label>
                <div className="query_logo_container">
                    <span className="query_logo">?</span>
                </div>
            </div>
        )
    }
}