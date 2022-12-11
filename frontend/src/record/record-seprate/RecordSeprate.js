import './RecordSeprate.css';
import React from "react";


export default class RecordSeprate extends React.Component {
    render() {
        return (
            <div className="detail">
                <div id={this.props.date}>{this.props.date}</div>
                <div id={this.props.time}>{this.props.time}</div>
                <button id={this.props.type}>{this.props.type}</button>
            </div>
        )
    }
}