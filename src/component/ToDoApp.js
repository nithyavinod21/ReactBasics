import React, { Component } from 'react';
import CreateTask from './CreateTask';

const tasks =localStorage.getItem('tasks')
?JSON.parse(localStorage.getItem('tasks'))
:[];

export default class ToDoApp extends Component {

  constructor(){
      super();
      this.state={
         tasks :tasks

      }
  }  

  createTask =(task) =>{
    debugger;
      if(task.trim()===''){
          alert("Task is Empty");
          return
      }
      tasks.push(task);
      this.setState({tasks:tasks})
      localStorage.setItem('tasks',JSON.stringify(tasks));

  }
  render() {
    return (
      <div>

          <h1>ToDos</h1>

          <CreateTask createTask={this.createTask} />

          <table>
              <thead>
                  <tr>
                      <th>Task</th>
                      <th>Items</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.tasks.map((task,index) =>{
                            return(
                                <>
                                 <h2>Task:{index}</h2>
                                 <h2>Items:{task}</h2>
                                </>
                            )
                      })
                  }
              </tbody>
          </table>
        
      </div>
    );
  }
}
