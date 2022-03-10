import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {

    constructor(){
        super();
        this.state={
            count:0,
            employee:"Exavalu",
            listofUsers:[
                {name:'John',course:'React'},
                {name:'David',course:'React'},
                {name:'Kevin',course:'React'},
                {name:'Austin',course:'React'}
            ],
            isUserVisible :true
        }
        console.log("I am in a constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("I am in a getDerivedStateFromProps");
        return {
            count:props.count
        };
    }

    componentDidMount(){
        debugger
        console.log("I am in a componentDidMount");
        setTimeout(()=>{
            this.setState({
                isUserVisible:false
            })
        },3000
        
        )
       

    }

    shouldComponentUpdate(){
        console.log("I am in a shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("I am in a getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("I am in a componentDidUpdate");
    }
      
  onIncreaseCount = (e,p) =>{
      console.log("You clicked on Increase Count");
   //   this.state.count = this.state.count + 1;
     // this.render();
     this.setState(
         {
            count : this.state.count +1 
         }
        
     )
  }

  onDecreaseCount = () =>{
    console.log("You clicked on Decrease Count");

    this.setState(
        {
           count : this.state.count - 1
        }
    )
  }

  render() {
    console.log("I am in a render");

    const{count,listofUsers} = this.state;
    const userParam ='Events Handler'
    return (
     <React.Fragment>
     
      <h1>
       { this.props.children} </h1>
        <h2> From Parent :{this.props.count}</h2>
        <h2>{this.props.subtitle}</h2>

        <h2> STATE Count :{this.state.count}</h2>

        {
            this.state.isUserVisible
            ?
            listofUsers.map((element,index) => {
                return(
                      <User key={index} name={element.name} course={element.course} userId={index} />
                )
            } )
            :
            null
        }
        
        <button onClick={(e) => {this.onIncreaseCount(userParam)}} >Increase Count</button>
        <button onClick={this.onDecreaseCount} >Decrease Count</button>
        
        </React.Fragment>
        
    
      
    );
  }
}
