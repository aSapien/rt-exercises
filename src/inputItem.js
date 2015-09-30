define(['react', 'lodash', './inputItem.rt.js'], function (React, _, inputItemTemplate) {
  return React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    componentDidRecieveProps: function() {
      this.setState(this.props);
    },
    getInitialState: function () {
      return {
        label: '',
        value: ''
      };
    },

    handleChange: function (event) {
      event.preventDefault();
      this.setState({
        value: event.target.value
      });
      this.props.newValueHandler(event.target.value);
    },

    propTypes: {
      label: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired,
      value: React.PropTypes.string
    },
    displayName: 'InputItem',
    render: inputItemTemplate
  });
});