import { Component } from "react";

import "./Dashboard.css";

export class Dashboard extends Component{

    render(){
        return(
            <div>
                <div className="menu_cart">
                    <div className="menu_items">
                        <div className="menu_item">
                            <h5>Create</h5>
                        </div>
                        <div className="menu_item">
                            <h5>Configure</h5>
                        </div>
                        <div className="menu_item">
                            <h5>Check</h5>
                        </div>
                        <div className="menu_item">
                            <h5>Con-sights</h5>
                        </div>
                    </div>
                </div>
                <div className="block_container">
                    <input type="text" className="search_bar" placeholder="Search for Blocks"/>
                    <div className="container_content">
                        <p>BLOCKS OF YOUR BOT</p>
                    </div>
                </div>
            </div>
        )
    }
}