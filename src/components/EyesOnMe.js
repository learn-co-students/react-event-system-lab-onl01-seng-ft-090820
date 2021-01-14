import React, { Component } from 'react';

class EyesOnMe extends Component {

    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Focus Here!</button>
            </div>
        );
    }
}

export default EyesOnMe;

