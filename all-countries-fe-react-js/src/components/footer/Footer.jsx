import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateYear: new Date().getFullYear()
        }
    }

    render() {
        return (
            <div>
                <br/>
                <p className="text-center" style={{color: "#57606f"}}>Copyright © {this.state.dateYear}, All rights reserved.</p>
                <p className="text-center"><a className="btn btn-outline-secondary" href="https://code.victorcarablut.com/" target="_blank" rel="noreferrer">code.victorcarablut.com</a></p>
                <br/>
            </div>
        )
    }
}
