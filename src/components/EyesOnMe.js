// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    onFoucs = () => console.log("Good!")
    onBlur = () => console.log("Hey! Eyes on me!")
    render() {
        return (
            <div>
                <button onFocus={this.onFoucs} onBlur={this.onBlur}>
                Eyes on me, please!
                </button>
            </div>
        )
    }
}
export default EyesOnMe;