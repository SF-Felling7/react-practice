var Hello = React.createClass({
  render: function() {
    return (
      <h2> What's up React? I'm Sean</h2>
      );
  }
});

React.render(<Hello/>,document.getElementById("root"));
