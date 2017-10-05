import React from 'react';

export default class Todo extends React.Component {

    handleClick = (event) => {
        
        this.props.getId(this.props.data.id);

    }
    handleClickForDelete = (event) => {
        
        this.props.getId1(this.props.data.id);

    }
    handleClickForEdit = (event)  => {
        this.props.getId2(this.props.data.id);
    }
    render() {
        let a;
       // console.log(this.props.data.id);
       // this.props.getId(this.props.data.id);
        if (this.props.data.completed) {
            a = <span style={{ textDecoration: 'line-through' }}>{this.props.data.title}</span>
        }
        else {
            a = <span>{this.props.data.title}</span>
        }
        return (

            <tr>
                <td>
                    {a}
                </td>
                <td>
                    <button onClick={this.handleClick}>Done</button>
                </td>
                <td>
                    <button onClick={this.handleClickForDelete}>Delete</button>
                </td>
            </tr>




        );
    }
}
