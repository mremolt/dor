dojo.provide('wma.grid.PagingContainer');

dojo.require('dijit.layout.ContentPane');

dojo.declare(
    'wma.grid.PagingContainer',
    dijit.layout.ContentPane,
    {
        page: null,
        pagingUrl: '',
        grid: null,
        searchForm: null,

        startup: function() {
            this.inherited("startup", arguments);
            // at this point, grid already exists
            this.attr('page', 1);
        },

        _setPageAttr: function(page) {
            this.page = page;
            this.loadPage();
        },

        loadPage: function() {
            var params = {
                "page": this.attr('page'),
                "query":  this.searchForm.attr('value').query
            };
            this.attr('href', dojo.replace('{pagingUrl}?{params}', {
                pagingUrl: this.pagingUrl,
                params: dojo.objectToQuery(params)
            }));
            this.grid.setQuery(params);
        }
    });