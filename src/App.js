import './App.css';
import React from 'react';
import Counter from './Components/Counter';

class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     show : false,
  //     name : "Islem"
  //   }
  // }
  state={
    show : false,
    name : "Islem"
  }
  handleShow=()=> this.setState({show : !this.state.show})
  render(){
    return(
      <div>
        <h1>Workshop State</h1>
        <button onClick={this.handleShow}>{this.state.show ? "Hide" : "Show"}</button>
        {
          this.state.show && <Counter name={this.state.name}/>
        }
        
      </div>
    )
  }
}

export default App;
