import React from "react"
import ClockSeprate from '../clock-seprate/ClockSeprate'
import './ClockCommon.css'
import ClockAttend from '../../../assets/images/Vector (6).svg'
import ClockLeave from '../../../assets/images/Vector (7).svg'
import ClockOver from '../../../assets/images/Vector (8).svg'
import ClockOff from '../../../assets/images/Vector (9).svg'


export default class ClockCommon extends React.Component {
    getCurrentTime = () => {
        return new Date();
    }

    formatTime = (today) => {
        const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        return dateTime;
    }

    doAlert = () => {
        const time = this.getCurrentTime();
        const dateTime = this.formatTime(time);
        console.log(dateTime);
        alert(dateTime);
    }


    render() {
        return <div id="choose">
                <ClockSeprate
                    doAlert={this.doAlert}
                    image={ClockAttend}
                    content= '出勤'
                    id= 'c1' />

                <ClockSeprate
                    doAlert={this.doAlert}
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


