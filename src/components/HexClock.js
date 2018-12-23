import React, { Component } from 'react';

export default class HexClock extends Component {

    state = {
        // Set state to show initial time
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
        newSeconds: "",
        hex: "",
    };


    currentTime() {
        // Set state to current hours, minutes, seconds
        this.setState({
            seconds: new Date().getSeconds().toString(),
            minutes: new Date().getMinutes().toString(),
            hours: new Date().getHours().toString(),
        });

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
                minHeight: "100vh",
                minWidth: "100vw",
                textAlign: 'center',
            }}>

                {/* Display current time */}
                <div>
                    current time: {this.state.hours}:{this.state.minutes}:{this.state.seconds}
                </div>

                {/* Display hex code */}
                <span style={{
                    color: 'white',
                    fontSize: '3em',
                    fontWeight: 'bold',
                    webkitTextStroke: '3px black',
                    display: 'inline-block',
                    marginTop: '40vh',
                    cursor: 'default',
                }}>
                    {this.state.hex}
                </span>
                <div
                    className='heartbeat'
                    style={{
                        fontSize: '1em',
                    }}>
                    by Kevin Yang
                    </div>

            </div>
        );
    };
};