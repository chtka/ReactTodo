var React = require('react');

var TodoList = require('todo-list');
var AddTodo = require('add-todo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Study for finals'
        }, {
          id: 4,
          text: 'Buy groceries'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new node: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;