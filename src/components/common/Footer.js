import React, { Component } from 'react';

import '../../css/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { time: '' };
    }
    componentDidMount() {
        setInterval(() => this.setState({ time: new Date().toLocaleString() }));
    }

    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <span className='footer-copyright'>Copyright 2017 <a href='http://radovanovic.me' target='_blank' rel='noopener noreferrer'>Nenad Radovanovic</a></span>
                    <span className='float-right'>{this.state.time}</span>
                </div>
            </footer>
        );
    }
};

export default Footer;