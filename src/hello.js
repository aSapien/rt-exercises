define(['react', 'lodash', './hello.rt.js'], function (React, _, template) {
    'use strict';
    return React.createClass({
        getInitialState: function () {
            return {
                name: 'Dima'
            }
        },
        onNameChange: function (event) {
            event.preventDefault();
            this.state.name = event.target.value;
            this.setState({name: this.state.name});
        },
        displayName: 'Hello',
        render: template
    });
});
