import React, { Component } from 'react';

export default class CreateTask extends Component {
     constructor(props){
        super(props);
        this.state={
            task:''
        }
     }


    onSumbitHandler =(event) =>{
       event.preventDafault();
        this.props.createTask(this.state.task);
    }  

    handleChange = (event) =>{
        this.setState({
            task:event.target.value
        }) 

    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSumbitHandler}>

            <input type="text" placeholder='Enter the Task' onChange={this.handleChange}  />
            <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
