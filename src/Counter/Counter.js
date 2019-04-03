import React from 'react';

class Counter extends React.Component{
    constructor(){
        super()

        this.state = {
            number: 10,
        }

        this.inc = this.inc.bind(this)
    }

    inc = () => this.setState({ number: this.state.number + 1 })

    render(){
        return(
            <div>
                 <h1>
                    {this.state.number}
                </h1>

                <button
                    onClick={this.inc}
                >
                    +
                </button>
            </div>
        )
    }
}        

export default Counter
