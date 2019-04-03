import React from 'react'

class Lifecycle extends React.Component {
    constructor(){
        super()

        console.log ('constructor')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    render(){
        console.log('render')

        return(
            <div>
                Lifecycle
            </div>
        )
    }
}
export default Lifecycle