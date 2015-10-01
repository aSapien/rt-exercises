define(['react', 'lodash', './hello.rt.js', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';


    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],

        getInitialState: function () {
            return {

            };
        },

        displayName: 'ReusableDivContainer',
        render: template
    });
});
