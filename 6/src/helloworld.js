var HelloWorld = React.createClass({
  render: function() {
    return (<div>
      <h1>Hello World</h1>
      <p>www.vestacamp.ir</p>
    </div>
  );
}
});

// After React 0.14 React.render moved to ReactDOM.render
ReactDOM.render(<HelloWorld/>, document.body);
