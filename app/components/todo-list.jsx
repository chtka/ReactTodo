var React = require('react');
var Todo = require('todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
      });
    };

    // console.log(renderTodos());

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;