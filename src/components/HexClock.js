import React, { Component } from 'react';

export default class HexClock extends Component {

    constructor() {
        super();
        this.state = {
            // Set state to show initial time
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
            hex: "",
        };
    };

    currentTime() {
        // Set state to current hours, minutes, seconds
        this.setState({
            hours: new Date().getHours().toString(),
            minutes: new Date().getMinutes().toString(),
            seconds: new Date().getSeconds().toString(),
        })
        // Set state to concatenated string for color hex code
        this.setState({
            hex: `#${this.state.hours}${this.state.minutes}${this.state.seconds}`
        });
    };

    // Updates every 1 second
    componentWillMount() {
        setInterval(() => this.currentTime(), 1000);
    };

    render() {
        return (
            // In-line style set background to hex color code
            <div style={{
                backgroundColor: this.state.hex,
                margin: "0 auto",
                minHeight: "100vh",
                height: "100%",
                width: "100%",
            }}>
                {/* Display hex code to user */}
                #{this.state.hours}{this.state.minutes}{this.state.seconds}
            </div>
        );
    };
};