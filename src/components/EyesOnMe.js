import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div>
                <button onFocus={() => console.log("Good!")} onBlur={() => console.log("Hey! Eyes on me!")} ></button>
            </div>
        )
    }
}

