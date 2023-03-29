import React from 'react';

class Counter extends React.Component{

    constructor(props){
        super()
        this.state={
            count : 0,
            strP : ""
        }
        // console.log('Init')
        // console.log(this)
    }
    componentDidMount(){
        // console.log("Mount")
        document.title = "Hi"
    }
    componentDidUpdate(){
        // console.log('Update')
        document.title = this.state.count
    }
    componentWillUnmount(){
        // console.log("Unmount")
        document.title = "Bye"
    }
    increment=()=> this.setState({count : this.state.count + 1})
    decrement=()=> this.state.count >0 && this.setState({count : this.state.count -1})
    render(){
        // console.log('Render')
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <input type="text" onChange={(e)=>this.setState({strP : e.target.value})}/>
                <h3>{this.state.strP}</h3>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}

export default Counter