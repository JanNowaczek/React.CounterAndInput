import React from 'react'

class Lifecycle extends React.Component {
    constructor(){
        super()

        this.state = {
            number: 0,
        }

        console.log ('constructor')
    }

    //wycofana
    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    render(){
        console.log('render')

        return(
            <div>
                Lifecycle
                <button
                    onClick={() => this.setState({ number: this.state.number + 1})}
                >
                    Change state!
                </button>
            </div>
        )
    }
}

export default Lifecycle