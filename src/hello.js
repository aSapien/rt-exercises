define(['react', 'lodash', './hello.rt.js'], function (React, _, template) {
    'use strict';


    return React.createClass({
        currentInputs: [
            {
                label: 'Test Label',
                type: 'text',
                value: 'placeholder'
            }
        ],

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {
                label: '',
                type: '',
                value: ''
            };
        },

        printValue: function (newValue) {
            console.log(newValue);
        },

        submitNewInput: function (event) {
            event.preventDefault();
            this.currentInputs.push(this.state);
            this.setState(this.getInitialState());
        },

        displayName: 'Hello',
        render: template
    });
});
