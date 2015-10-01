define(['react', 'lodash', './hello.rt.js', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';


    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],

        getInitialState: function () {
            return {
                panel: {
                    height: 80,
                    horizontalPadding: 10
                }
            };
        },

        onPanelHeightChange: function (event) {
            this.setState({ panel: {
                height: (event.target.value),
                horizontalPadding: this.state.panel.horizontalPadding
            }});
        },

        onPanelPaddingChange: function (event) {
            this.setState({ panel: {
                horizontalPadding: (event.target.value),
                height: this.state.panel.height
            }});
        },

        displayName: 'ReusableDivContainer',
        render: template
    });
});
