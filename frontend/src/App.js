import './App.css';
import React from "react";
import RecordAll from "./record/record-all/RecordAll";
import CountAll from "./count/count-all/CountAll";
import HeaderAll from "./header/header-all/HeaderAll";


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            attendance: null
        }
    }

    setAttendance = (attendance) => {
        this.setState({attendance})
    }


    render() {
    return (
        <div>
            <HeaderAll setAttendance={this.setAttendance} />
            <div id="content">
                <RecordAll attendance={this.state.attendance} id="record"/>
                <CountAll id="count"/>
            </div>
        </div>
    );
  }
}