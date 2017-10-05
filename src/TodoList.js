import React from 'react';
import Todo from './Todo';
export default class TodoList extends React.Component {
   
    render() {
       
        return (
            <table>
                <tbody>
              {this.props.myData.map((myData,i) => <Todo  key={i} data={myData} 
              getId={this.props.done} 
              getId1={this.props.delete}
               />)}               
                </tbody>
            </table>
        );
    }
}
   