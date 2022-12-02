import React from "react"
import RecordSeprate from '../record-seprate/RecordSeprate'
import './RecordCommon.css'

export default class RecordCommon extends React.Component {
    render() {
        return <div>
            <RecordSeprate
                date="2022年10月20日（木）"
                time="18時44分30秒"
                type="退勤"
            />
            <RecordSeprate
                date="2022年10月20日（木）"
                time="18時44分30秒"
                type="出勤"
            />
            <RecordSeprate
                date="2022年10月20日（木）"
                time="18時44分30秒"
                type="退勤"
            />
            <RecordSeprate
                date="2022年10月20日（木）"
                time="18時44分30秒"
                type="出勤"
            />
            <RecordSeprate
                date="2022年10月20日（木）"
                time="18時44分30秒"
                type="退勤"
            />
            <RecordSeprate
                date="2022年10月20日（木）"
                time="18時44分30秒"
                type="出勤"
            />
        </div>
    }
}