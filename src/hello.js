define(['react', 'lodash', './hello.rt.js', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';


    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],

        getInitialState: function () {
            return {
                panel: {
                    height: 200,
                    horizontalPadding: 20
                }
            };
        },

        onPanelHeightChange: function (event) {
            this.setState(
              {panel:{height: (event.target.value*2)}}
            );
        },

        onPanelPaddingChange: function (event) {
            this.setState(
              {panel:{horizontalPadding: (event.target.value*2)}}
            );
        },

        displayName: 'ReusableDivContainer',
        render: template
    });
});
