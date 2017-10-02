import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 30,
            counting: false,
            firstCount: true
        }
    }

    clickHandel() {
        const {firstCount, counting} = this.state

        if(firstCount) {
            this.setState({firstCount: false})
        }
        this.setState({counting: !this.state.counting})
        
    }

    renderButton() {
        let butText;
        const {counting, firstCount} = this.state

        butText = firstCount ? "begin": "start"

        if (counting) {
            butText = "wait..."
        }

        if (counting) {
            butText = "wait"
        }

        return (
            <button
                onClick={this.clickHandel.bind(this)}
            >{butText}</button>
        )
    }
    
    render() {
        const {counting, firstCount} = this.state
        return (
            <div>
                <h3>Counter</h3>
                <h1>{this.state.count}</h1>
                {this.renderButton()} <br/>
                {firstCount ? "first count": "not first"}, {counting ? "counting": "not counting"}
            </div>
        )
    }
}


export default Counter