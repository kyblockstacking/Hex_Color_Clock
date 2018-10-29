import React, { Component } from 'react';

export default class Clock extends Component {

    constructor() {
        super();
        this.state = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
        };
    };

    currentTime() {
        this.setState({
            seconds: new Date().getSeconds(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
        });
    };

    componentWillMount() {
        setInterval(() => this.currentTime(), 1000);
    };

    render() {
        return (
            <div>
                <h1>
                    hour: {this.state.hours}
                    <hr></hr>
                    minute: {this.state.minutes}
                    <hr></hr>
                    second: {this.state.seconds}
                </h1>
            </div>
        );
    };
};