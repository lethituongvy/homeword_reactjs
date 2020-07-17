import React, { Component } from 'react';
import './TodoItem.css';
class TodoItem extends Component {
    // onItemClick() {
    //     console.log(this.props.item);
    // }
    render() {
        const { item, onClick } = this.props;
        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' TodoItem-complete'
        }
        return (
            <div onClick={onClick} className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete })}>
                <h5> {this.props.item.title} </h5>
            </div>
        );
    }
}
export default TodoItem;