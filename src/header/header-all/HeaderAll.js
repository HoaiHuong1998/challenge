import React from "react"
import ClockCommon from "../clock/clock-common/ClockCommon";
import Hello from "../hello/Hello";


export default class HeaderAll extends React.Component {
    render() {
        return <div>
            <Hello/>
            <ClockCommon/>
        </div>
    }
}