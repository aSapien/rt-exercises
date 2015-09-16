define(['react', 'lodash', './hello.rt.js'], function (React, _, template) {
    'use strict';
    function getEmptyMap() {
        return Object.create(null);
    }

    function getQueryParamsMap() {
        var result = getEmptyMap();

        location
          .search
          .substr(1)
          .split('&')
          .forEach(function(pair) {
            var splitPair = pair.split('=');
            result[splitPair[0]] = splitPair[1];
        });

        return result;
    }

    return React.createClass({
        getInitialState: function () {
            var queryParams = getQueryParamsMap();

            return {
                name: queryParams.name || 'Dima'
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
