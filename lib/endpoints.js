'use strict';

var _ = require('lodash');

module.exports = function (credentials, url) {
    return {
        $extend: function(mapDefinitionFunction){
            _.merge(this, mapDefinitionFunction(credentials, url) || {});
        },
        v2: {
            search: {
                method: 'POST',
                url: url + '/v2/search',
                headers: _.assign({},credentials.header),
                json: {
                    limit: 10,
                    offset: 0,
                    'search_nutrient':'calories'
                }
            },
            'brand_search': {
                method: 'GET',
                url: url + '/v2/search/brands',
                headers: _.assign({},credentials.header),
                qs: {}
            },
            autocomplete: {
                method: 'GET',
                url: url + '/v2/autocomplete',
                headers: _.assign({},credentials.header),
                qs: {}
            },
            item: {
                method: 'GET',
                url: url + '/v2/search/item',
                headers: _.assign({},credentials.header),
                qs: {}
            },
            brand: {
                method: 'GET',
                url: url + '/v2/brand/:id',
                headers: _.assign({},credentials.header),
                qs: {}
            },
            natural: {
                method: 'POST',
                url: url + '/v2/natural',
                headers: _.assign({
                    'Content-Type': 'text/plain'
                }, credentials.header),
                body: ''
            },
            instant: {
                method: 'GET',
                url: url + '/v2/search/instant',
                headers: _.assign({}, credentials.header),
                qs: {}
            },
            nutrients: {
                method: 'POST',
                url: url + '/v2/natural/nutrients',
                headers: _.assign({
                    'Content-Type': 'application/json'
                }, credentials.header),
                body: ''
            }
        }
    };
};
