define(['react', 'lodash', './hello.rt.js', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';

    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],
        getInitialState: function () {
            return {
                location: {
                    lat: 0,
                    lon: 0
                }
            };
        },

        displayName: 'Hello',
        render: template
    });
});
