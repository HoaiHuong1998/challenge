import React from "react";
import './ClockSeprate.css'

export default class ClockSeprate extends React.Component {
    convertContentToEnglish = (content) => {
        switch (content) {
            case "出勤":
                return "begin"
            case "退勤":
                return "finish"
            default:
                return ""
        }
}
    render() {
        return (
                <button className="button" onClick = {() => this.props.hasOwnProperty("doFunction") ?  this.props.doFunction(this.convertContentToEnglish(this.props.content)) : undefined}>
                    <div className="icon" id={this.props.id}></div>
                    <div className="clock">
                        <img src={this.props.image} alt={this.props.content}/>
                        <p className="type">{this.props.content}</p>
                    </div>
                </button>
        )
    }
}
