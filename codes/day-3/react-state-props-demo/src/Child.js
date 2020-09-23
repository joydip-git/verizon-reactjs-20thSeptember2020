import React, { Component, PureComponent } from 'react'

/**
 * new Child()
 * this.state={}
 * this.props = undefined
 * this.props = {
 *   id:102,
 *   data:{name:'sunil'}
 * }
 */

//shallow comparison
//value type:
//refernce type: 

//class Child extends PureComponent {
class Child extends Component {
    constructor() {
        super();
        this.state = {
            value: 10,
            display: false,
            product: null,
            x_pos: 145,
            y_pos: 239
        }

        console.log('[Child] created. State as follows...')
        console.log(this.state)
    }

    static getDerivedStateFromProps(newProps, oldState) {
        let newStateObj = {
            value: newProps.data + oldState.value
        }
        console.log('[child] getDerivedStateFromProps called..')
        console.log('Received props and initial state as follows...')
        console.log(newProps)
        console.log(oldState)
        return newStateObj;
        //return null;
    }
    shouldComponentUpdate(newProps, currentState) {
        console.log('[child] shouldComponentUpdate called..')
        console.log('Received props, old props and current state as follows...')
        console.log(newProps)
        console.log(this.props)
        console.log(this.state)
        if (newProps.data === this.props.data)
            return false;
        else
            return true;
    }
    render() {
        //this.setState();
        console.log('[child] rendered..')
        console.log('current state and props are as follows...')
        console.log(this.state)
        console.log(this.props)
        return (
            <div>
                {/* { products === null ? <span>loading...</span> :
                    this.state.product.name} */}
                Child component Value:{this.state.value}
            </div>
        )

        //retrun {display && <nested/>}
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Child] getSnapshotBeforeUpdate')
        console.log('props and state as follows...')
        console.log(prevProps)
        console.log(prevState)

        // return {
        //     currentX_pos: prevState.x_pos + 50
        // }
        return 'child snapshot data'
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.setState({
        //     x_pos: snapshot.currentX_pos
        // })
        console.log('[Child] componentDidUpdate')
        console.log('previous props and state as follows...')
        console.log(prevProps)
        console.log(prevState)

        console.log('current props and state as follows...')
        console.log(this.state)
        console.log(this.props)
        // if (this.props.id !== prevProps.id || this.state.product.productid !== prevState.product.productId || this.state.product === null)
        console.log(snapshot)
        // fetch('http://...../102')
        //     .then(resp => this.setState({ product: resp.json(), }))
        //     .catch(e => console.log(e))
    }
    componentDidMount() {
        // fetch('http://...../')
        //     .then(resp => this.setState({ product: resp.json() }))
        //     .catch(e => console.log(e))

        console.log('[child] mounted..')
    }
    componentWillUnmount() {
        console.log('[child] unmounted..')
    }

    componentDidCatch(error, info) {
        console.log('[child] error')
        console.log('error and info is as follows...')
        console.log(error)
        console.log(info)
    }
    static getDerivedStateFromError(error) {
        console.log('[child] getDerivedStateFromError')
    }
}

export default Child


