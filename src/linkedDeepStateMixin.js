define([
  'lodash'
], function (_) {
  'use strict';

  function setInPath(obj, pathElements, newVal) {
    if (pathElements.length === 1) {
      obj[pathElements[0]] = newVal;
      return;
    }

    var step = pathElements.shift();
    setInPath(obj[step], pathElements, newVal);
  }

  function getInPath(obj, pathElements) {
    if (pathElements.length === 1) {
      return obj[pathElements[0]];
    }

    var step = pathElements.shift();
    return getInPath(obj[step], pathElements);
  }

  var LinkedDeepStateMixin = {

    linkState: function (value) {

      var self = this;

      function onChange(newVal) {
        var newState = _.cloneDeep(self.state);
        var pathToChange = value;

        setInPath(newState, pathToChange.split('.'), newVal);
        self.setState(newState);
      }

      return {
        value: getInPath(this.state, value.split('.')),
        requestChange: onChange
      };
    }
  };

  return {
    LinkedDeepStateMixin: LinkedDeepStateMixin
  };
});