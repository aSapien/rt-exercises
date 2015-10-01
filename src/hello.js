define(['react', 'lodash', './hello.rt.js', './linkedDeepStateMixin.js'], function (React, _, template, linkedDeepStateMixin) {
    'use strict';


    return React.createClass({
        mixins: [linkedDeepStateMixin.LinkedDeepStateMixin],

        geos: [
            {
                country: 'Israel',
                cities: ['Ashdod', 'Ashkelon', 'Tel Aviv']
            },
            {
                country: 'USA',
                cities: ['New York', 'Chicago', 'San Francisco']
            }
        ],

        getCurrentCities: function () {
            return _.result(_.find(this.geos, function (geo) {
                  return geo.country === this.state.selected.country;
              }, this), 'cities');
        },

        getInitialState: function () {
            return {
                selected: {
                    country: null,
                    city: null
                }
            };
        },

        displayName: 'CountriesSelect',
        render: template
    });
});
