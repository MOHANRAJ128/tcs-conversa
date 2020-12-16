import { Component } from "react";
import { withRouter } from "react-router-dom";

import "./BotDesc.css";

class BotDesc extends Component{
    constructor(props)
    {
        super(props)
        this.handleCreate=this.handleCreate.bind(this);
    }
    handleCreate(e)
    {
        e.preventDefault();
        console.log("Dashboard called..");
        this.props.history.push("/dashboard");
    }
    render(){
        return(
            <div className="bot_container">
                <div className="text_design">
                    <span>Create New Bot</span>
                </div>
                <div className="form_layout">
                    <form >
                        <input type="text" className="input_box"/>
                        <br/>
                        <label className="lable_text">Created Bot will appear in the home page</label>
                        <br/><br/>
                        <input type="text" className="input_box"/>
                        <br/>
                        <label className="lable_text">Brief description of the Bot</label>
                        <br/><br/>
                        <button className="button_cancel">Cancel</button>
                        <button className="button_create" onClick={this.handleCreate}>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(BotDesc);