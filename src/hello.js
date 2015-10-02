define(['react', 'lodash', './hello.rt.js', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';


    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],

        fontClasses: ['empty', 'futura', 'avant-garde', 'papyrus'],

        setNextFontClass: function () {
            this.state.currentFontClassIndex++;
            this.setState({
                currentFontClassIndex: this.fontClasses[this.state.currentFontClassIndex] ?
                  this.state.currentFontClassIndex : 0
            });
        },

        setPrevFontClass: function () {
            this.state.currentFontClassIndex--;
            this.setState({
                currentFontClassIndex: this.fontClasses[this.state.currentFontClassIndex] ?
                  this.state.currentFontClassIndex : this.fontClasses.length -1
            });
        },

        getCurrentFontClass: function () {
            return this.fontClasses[this.state.currentFontClassIndex];
        },

        getInitialState: function () {
            return {
                currentFontClassIndex: 0,
                isUnderlined: false
            };
        },

        displayName: 'Hello',
        render: template
    });
});
