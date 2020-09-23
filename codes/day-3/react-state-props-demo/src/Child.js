import React, { Component, PureComponent } from 'react'

/**
 * new Child()
 * this.state={}
 * this.props = undefined
 * this.props = {
 *   data:30
 * }
 */
class Child extends PureComponent {
    constructor() {
        super();
        this.state = {
            value: 10
        }
        console.log('[Child] created. State as follows...')
        console.log(this.state)
    }
    // static getDerivedStateFromProps(newProps, oldState) {
    //     let newStateObj = {
    //         value: newProps.data + oldState.value
    //     }
    //     console.log('[child] getDerivedStateFromProps called..')
    //     console.log('Received props and initial state as follows...')
    //     console.log(newProps)
    //     console.log(oldState)
    //     return newStateObj;
    //     //return null;
    // }
    // shouldComponentUpdate(newProps, currentState) {
    //     console.log('[child] shouldComponentUpdate called..')
    //     console.log('Received props, old props and current state as follows...')
    //     console.log(newProps)
    //     console.log(this.props)
    //     console.log(this.state)
    //     if (newProps.data === this.props.data)
    //         return false;
    //     else
    //         return true;
    // }
    render() {
        console.log('[child] rendered..')
        console.log('current state and props are as follows...')
        console.log(this.state)
        console.log(this.props)
        return (
            <div>
                Child Component element: {this.state.value}
            </div>
        )
    }
    componentDidMount() {
        console.log('[child] mounted..')
    }
}

export default Child


