import './App.css';
import React from "react";
import RecordAll from "./record/record-all/RecordAll";
import CountAll from "./count/count-all/CountAll";
import HeaderAll from "./header/header-all/HeaderAll";


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <HeaderAll/>
            <div id="content">
                <RecordAll id="record"/>
                <CountAll id="count"/>
            </div>
        </div>
    );
  }
}