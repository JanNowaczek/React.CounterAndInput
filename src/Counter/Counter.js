import React from 'react';

class Counter extends React.Component{
    state = {
        number: this.props.number,
        }

    inc = () => this.setState({ number: this.state.number + 1 })
    dec = () => this.setState({ number: this.state.number - 1 })

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
                <button
                    onClick={this.dec}
                >
                    -    
                </button>
            </div>
        )
    }
}  

Counter.defaultProps = {
    number: 0,
}

export default Counter
