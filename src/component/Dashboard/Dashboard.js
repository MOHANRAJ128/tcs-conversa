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
                        <div>
                            <p className="block_title">BLOCKS OF YOUR BOT</p>
                            <br/>
                            <p className="block_content">
                                Your Bot will be made up conversational element called 'Blocks'. Blocks are the response that the Bot will send out to the end user
                            </p>
                        </div>
                        <div>
                            <p className="block_title">GREETING</p>
                        </div>
                        <div>
                            <p className="block_title">BODY</p>
                        </div>
                        <div>
                            <p className="block_title">CLOSING STATEMENT</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}