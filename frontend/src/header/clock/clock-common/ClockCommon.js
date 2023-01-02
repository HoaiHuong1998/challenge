import React from "react"
import ClockSeprate from '../clock-seprate/ClockSeprate'
import './ClockCommon.css'
import ClockAttend from '../../../assets/images/Vector (6).svg'
import ClockLeave from '../../../assets/images/Vector (7).svg'
import ClockOver from '../../../assets/images/Vector (8).svg'
import ClockOff from '../../../assets/images/Vector (9).svg'


export default class ClockCommon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attendance: {}
        }
    }

    post = (data) => {
            return {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }
    }
    handle = async (status) => {
        const response = await fetch('http://127.0.0.1:8000/attendance', this.post({status: status}))
        const data = await response.json()
        //setState co the goi mot callback function sau khi no update state xong
        this.setState({attendance: data}, () => {
            this.props.setAttendance(this.state.attendance)
        })
    };

    render() {
        return <div id="choose">
                <ClockSeprate
                    doFunction={this.handle}
                    image={ClockAttend}
                    content= '出勤'
                    id= 'c1' />

                <ClockSeprate
                    doFunction={this.handle}
                    image={ClockLeave}
                    content= '退勤'
                    id= 'c2'/>

                <ClockSeprate
                    image= {ClockOver}
                    content= '残業'
                    id= 'c3' />

                <ClockSeprate
                    image= {ClockOff}
                    content= '休暇'
                    id= 'c4' />

        </div>
    }

}


