define(['react', 'lodash', './hello.rt.js'], function (React, _, template) {
    'use strict';
    return React.createClass({
        displayName: 'Hello',
        render: template
    });
});
