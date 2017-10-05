/* eslint-disable */
import React from 'react';

export default class AddTodo extends React.Component {
    state = { text: "" };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getValue(this.state.text);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Task-To-Do"
                        onChange={(event) => { this.setState({ text: event.target.value }) }}
                        value={this.state.text} />
                    <br />
                    <input type="submit" value="Add To-Do" />
                </form>
            </div>
        );
    }
}
