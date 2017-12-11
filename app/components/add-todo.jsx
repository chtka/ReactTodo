var React = require('react');

var AddTodo = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  onSubmit: function (e) {
    e.preventDefault();
    this.props.onAddTodo(this.refs.text.value);
  },
  render: function () {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <input type="text" placeholder="What do you need to do?" ref="text"/>
        <button>Add Todo</button>
      </form>
    );
  }
});

module.exports = AddTodo;