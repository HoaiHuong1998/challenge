import React from "react"
import RecordCommon from '../record-common/RecordCommon'
import './RecordAll.css'
import RecordTitle from "../record-title/RecordTitle";

export default class RecordAll extends React.Component {
    render() {
        return <div>
            <RecordTitle/>
            <RecordCommon/>
        </div>
    }
}