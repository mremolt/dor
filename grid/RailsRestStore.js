dojo.provide('dor.grid.RailsRestStore');

dojo.require('dojox.data.JsonRestStore');

dojo.declare(
    'dor.grid.RailsRestStore',
    dojox.data.JsonRestStore,
    {
        id: "restStore",
        contentType: "application/json",
        idAttribute: "id",
        allowNoTrailingSlash: false,
        target: '',

        constructor: function(options){
            if(typeof options.target == 'string'){
                var target = options.target.match(/(.+)\/$/)[1] || options.target;
                this.service = this._createService(target);
            }

            this.inherited("constructor", arguments);
        },

        _createService: function(target) {
            // service definition for /admin/users
            var restService = function(query, queryOptions) {
                query = query || {};

                if (!query.page) {
                    query.page = (queryOptions.start / queryOptions.count) + 1;
                }
                // Wandelt die Sortier-Parameter aus dem Grid in URL-Parameter um
                // Beispiel:
                // JSON: { sort: [{attribute: 'login', descending: false}]}
                // URL: users.json?page=1&sort=login&descending=false
                if (queryOptions.sort) {
                    query.sort = queryOptions.sort[0].attribute;
                    query.descending = queryOptions.sort[0].descending;
                }

                return dojo.xhrGet({
                    url: target + ".json",
                    handleAs:'json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    content: query
                });
            }

            restService['servicePath'] = target + '.json';

            // id: Store-id des zu aktualisierenden [update] Items (syncron zur DB-id)
            // value: das DataStore Item in json-Format
            restService['put'] = function(id, value) {
                return dojo.xhrPut({
                    url: target + '/' + id + '.json',
                    handleAs:'json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    putData: JSON.stringify({
                        resource: JSON.parse(value)
                    })
                });
            }

            // id: Store-id des anzulegenden [create] Items (syncron zur DB-id)
            // value: das DataStore Item in json-Format
            restService['post'] = function(id, value) {
                return dojo.xhrPost({
                    url: target + '.json',
                    handleAs:'json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    postData: JSON.stringify({
                        resource: JSON.parse(value)
                    })
                });
            }

            // id: Store-id des löschenden [destroy] Items (syncron zur DB-id)
            restService['delete'] = function(id) {
                return dojo.xhrDelete({
                    url: target + "/" + id + '.json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    handleAs: 'json'
                });
            }

            return restService;
        }
    });