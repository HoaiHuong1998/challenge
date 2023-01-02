import React from "react"
import RecordSeprate from '../record-seprate/RecordSeprate'
import './RecordCommon.css'

export default class RecordCommon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attendanceList: [],
            newAttendance: this.props.attendance
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //do not update when props is not changed or props attendance is null
        if (nextProps.attendance === prevState.attendance || !nextProps.attendance) {
            //return null to prevent state update
            return null
        }
        //update attendanceList when props is diff from state
        //prepend new attendance to the attendance list
        const newAttendanceList = [nextProps.attendance, ...prevState.attendanceList]
        //update state
        return {
            ...prevState,
            newAttendance: nextProps.attendance,
            //set the first 6 attendances in the list to state
            attendanceList: newAttendanceList.slice(0, 6)
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/attendance')
            .then((response) => response.json())
            .then((data) => {
                this.setState(
                    {attendanceList: data.slice(0, 6)}
                )
            });
    }

    getYearMonthDate = (attendanceTime) => {
        const attendanceTimeObject = new Date(attendanceTime)
        return attendanceTimeObject.getFullYear() + '年' +
            this.addZeroForTime((attendanceTimeObject.getMonth() + 1)) + '月' +
            this.addZeroForTime(attendanceTimeObject.getDate()) + '日' +
            '（' + this.convertDayToJapaneseDay(attendanceTimeObject.getDay()) + '）'
    }

    convertDayToJapaneseDay = (day) => {
        switch (day) {
            case 0:
                return "日"
            case 1:
                return "月"
            case 2:
                return "火"
            case 3:
                return "水"
            case 4:
                return "木"
            case 5:
                return "金"
            case 6:
                return "土"
            default:
                return ""
        }
    }

    getHourMinuteSecond = (attendanceTime) => {
        const attendanceTimeObject = new Date(attendanceTime)
        const time =
            this.addZeroForTime(attendanceTimeObject.getHours() - attendanceTimeObject.getTimezoneOffset()/60) + '時' +
            this.addZeroForTime(attendanceTimeObject.getMinutes()) + '分' +
            this.addZeroForTime(attendanceTimeObject.getSeconds()) + '秒'
        return time
    }

    addZeroForTime = (i) => {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }

    getStatus = (status) => {
        if (status == "begin") {
            return "出勤"
        }
        return "退勤"
    }


    renderAttendanceList = (attendanceList) => {
        console.log(attendanceList)
        return attendanceList.map(attendance => <RecordSeprate
            date={this.getYearMonthDate(attendance.attendance_time)}
            time={this.getHourMinuteSecond(attendance.attendance_time)}
            type={this.getStatus(attendance.status)}
        />)
    }

    render() {
        const {attendanceList} = this.state
        return <div>
            {this.renderAttendanceList(attendanceList)}

        </div>
    }
}