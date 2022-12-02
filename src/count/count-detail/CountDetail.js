import React from "react"
import './CountDetail.css'
import DetailIcon from '../../assets/images/Vector (10).svg'


export default class CountDetail extends React.Component {
    render() {
        return <div className="all">
            <div className="countDetail" id="workDay">
                <p className="content">出勤日</p>
                <p className="number">14日</p>
            </div>

            <div className="countDetail" id="weekEnd">
                <p className="content">土日祝</p>
                <p className="number">6日</p>
            </div>

            <div className="countDetail" id="workTime">
                <div id="contentIcon">
                    <span className="content">出勤時間</span>
                    <button id="detailButton">
                        <img src={DetailIcon} id="detailIcon"/>
                        <span id="detailText">詳細</span>
                    </button>
                </div>
                <p className="number">102時30分</p>
            </div>

            <div className="countDetail" id="overTime">
                <p className="content">残業時間</p>
                <p className="number">10時</p>
            </div>

            <div className="countDetail" id="dayOff">
                <p className="content">休憩時間</p>
                <p className="number">15時</p>
            </div>
        </div>
    }
}