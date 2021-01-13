// Code Keypad Component Here
// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    constructor(){
        super()
    }

    handleKeyUp = (keyUp) => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" onKeyUp={this.handleKeyUp} />
        )
    }
}