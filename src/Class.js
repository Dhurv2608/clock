import './App.css';
import React, { Component } from 'react'

export default class Class extends Component {

  today = new Date();

    constructor (props){
      super(props);
      this.state={
        H : this.today.getHours(),
        M : this.today.getMinutes(),
        S : this.today.getSeconds()
      }
      
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.changtime(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID)
    }
    
    changtime(){
      this.setState({H : this.today.getHours(),
                     M : this.today.getMinutes(),
                     S : this.today.getSeconds() })
    }
   
    
         
    
  render() {
  const hour = this.state.H;
  const minite = this.state.M;

  const second = this.state.S;
    return (

    <div>
        <div className='clock'>
            <div className='box'>{hour} </div>
            <div className='box'>{minite} </div>
            <div className='box'>{second}</div>
        </div>
    </div>
    )
  }
}
