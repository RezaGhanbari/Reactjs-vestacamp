var Note = React.createClass({

    edit: function(){
        alert('editing notes.');
    },

    remove: function(){
        alert('removing notes.');
    },

    render: function(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onclick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
                    <button onclick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
                </span>
            </div>
        );
    }
});

ReactDOM.render(<Note>Hello World!</Note>, document.getElementById('react-container'));
