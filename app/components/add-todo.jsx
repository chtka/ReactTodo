var React = require('react');

var AddTodo = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  onSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.text.value.trim();

    this.refs.text.value = '';

    if (text.length > 0) {
      this.props.onAddTodo(text);
    }

    // this.props.onAddTodo(this.refs.text.value);
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="What do you need to do?" ref="text"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;