import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log('did catch')
        console.log(error)
        console.log(info)
        // this.setState({
        //     hasError: true
        // })
    }
    render() {
        console.log('rendered')
        if (this.state.hasError) {
            return <div>Something wrong happened</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary
