/* eslint-disable  */
import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';


class App extends Component {
  
  state = {
    todos: [ { title: "task 1", completed: 1, id : 0}]
  };
  gettingValue = (todo) => {
    let flag=0;
    let id = this.state.todos.length;
    var newTodos =  this.state.todos.filter((todo1) => 
      {
        if(todo1.title === todo)
       {  
         flag=1;
         return false;
       }
      return true;

    }
  );
 
   if(flag ===  0){
    let newTodo = { title: todo, completed: 0, id: id };
    let newList = this.state.todos;
    newList.push(newTodo);
    this.setState({ todos: newList });
   
  }
    else{
      alert("Can't add new elements as it already exists!");
      flag=0;
    }
  }
  gettingUpdate = (id) => {
   // var newTodos =  this.state.todos.filter(m=> m.id !==id);

   var newTodos =  this.state.todos.filter(todo => todo.id !==id);
     var newTodos =  this.state.todos.map(function (todo)
     {
        if(id === todo.id)
        {
           todo.completed = 1; 
        }
        return  todo;
       }
      );
    
        this.setState({ todos: newTodos }); 
      }
   deleting = (id) => {
        // var newTodos =  this.state.todos.filter(m=> m.id !==id);
     
        var newTodos =  this.state.todos.filter(todo=> todo.id !==id);
         
             this.setState({ todos: newTodos }); 
           }
    
     
  render() {
    return (
      <div>
        <center>
          <AddTodo getValue = {this.gettingValue} />
          <TodoList myData  = {this.state.todos} 
                    done    = {this.gettingUpdate}
                    delete  = {this.deleting}
                    />
        </center>
      </div>
    );
  }
}

export default App;
