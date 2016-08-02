var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (React.createElement("div", null,
      React.createElement("h1", null, "Hello World"),
      React.createElement("p", null, "www.vestacamp.ir")
    )
  );
}
});

// After React 0.14 React.render moved to ReactDOM.render
ReactDOM.render(React.createElement(HelloWorld, null), document.body);
