// Code EyesOnMe Component Here
// Code Keypad Component Here
import React, { Component } from 'react';
import Keypad from "./Keypad.js";

export default class EyesOnMe extends Component {

    render() {

        return <button
            onFocus={(e) => {
                console.log('Good!')
            }}

            onBlur={(e) => {
                console.log('Hey! Eyes on me!')
            }}
        />

    }

}