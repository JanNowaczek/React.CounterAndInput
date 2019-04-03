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
        console.log('------ ------ -----')
    }
    //wycofany
    componentWillReciveProps(nextProps){
        console.log('componentWillReciveProps')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')

        console.log('Current props', this.props)
        console.log('Next props', nextProps)
        console.log('Current state', this.state)
        console.log('Next state', nextState)

        return true
    }

    //wycofany
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log(' componentWillUnmount')
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