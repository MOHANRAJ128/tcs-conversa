import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./BotDesc.css";

class BotDesc extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            description:""
        }
        this.handleCreate=this.handleCreate.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
    }
    handleCreate(e)
    {
        e.preventDefault();
        console.log("Dashboard called..");
        this.props.dispatch({type:'NEW_BOT',bot:this.state});
        this.props.history.push("/dashboard");
    }
    handleNameChange(e)
    {
        // console.log(e.target.value);
        this.setState({name:e.target.value});
    }
    handleDescriptionChange(e)
    {
        this.setState({description:e.target.value});
    }
    render(){
        return(
            <div className="bot_container">
                <div className="text_design">
                    <span>Create New Bot</span>
                </div>
                <div className="form_layout">
                    <form >
                        <input type="text" name="botName" className="input_box"
                            value={this.state.name}
                            onChange={this.handleNameChange}/>
                        <br/>
                        <label className="lable_text">Created Bot will appear in the home page</label>
                        <br/><br/>
                        <input type="text" name="botDesc" className="input_box" 
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
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

export default connect(null)(withRouter(BotDesc));