import React from "react";
import './ClockSeprate.css'

export default class ClockSeprate extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
                <button className="button" onClick = {() => this.props.hasOwnProperty("doAlert") ?  this.props.doAlert("date") : undefined}>
                    <div className="icon" id={this.props.id}></div>
                    <div className="clock">
                        <img src={this.props.image} alt={this.props.content}/>
                        <p className="type">{this.props.content}</p>
                    </div>
                </button>
        )
    }
}
