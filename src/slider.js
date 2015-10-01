define(['react', 'lodash', './slider.rt', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';

    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],
        getInitialState: function() {
          return {
              value: 0
          }
        },

        displayName: 'slider',
        render: template
    });
});
