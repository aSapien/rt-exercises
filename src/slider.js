define(['react', 'lodash', './slider.rt', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';

    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],
        getInitialState: function() {
          return {
              value: this.props.value
          }
        },

        displayName: 'slider',
        render: template
    });
});
