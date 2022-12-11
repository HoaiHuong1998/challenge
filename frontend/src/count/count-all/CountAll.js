import React from "react"
import CountDetail from "../count-detail/CountDetail";
import CountTitle from "../count-title/CountTitle";


export default class CountAll extends React.Component {
    render() {
        return <div>
            <CountTitle/>
            <CountDetail/>
        </div>
    }
}
