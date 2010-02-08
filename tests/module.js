dojo.provide("wma.tests.module");

dojo.require('wma.test.Suite');
dojo.require('dojo.data.ItemFileWriteStore');
dojo.require("dijit.layout.BorderContainer");
dojo.require("wma.grid.ItemDialog");


// Factories
var factory = {};

// factory for dojo.data.ItemFileWriteStore
factory.store = function(params) {
    var options = {
        id: 'store',
        data: {
            identifier: 'id',
            label: 'name',
            items: [
            {
                id: 1,
                name: 'Name 1'
            },

            {
                id: 2,
                name: 'Name 2'
            },

            {
                id: 3,
                name: 'Name 3'
            }
            ]
        }
    }
    dojo.mixin(options, params || {} );
    var store = new dojo.data.ItemFileWriteStore(options);
    return store;
}

// factory for wma.tests.toasterMock
factory.toasterMock = function(params) {
    var mock = new wma.tests.toasterMock(params);
    dijit.byId('testsContainer').addChild(mock);
    return mock
}

factory.gridMock = function(params) {
    var mock = new wma.tests.gridMock(params);
    dijit.byId('testsContainer').addChild(mock);
    return mock;
}

factory.itemDialog = function(params) {
    var options = {
        id: 'dialog',
        baseUrl: '/admin/test',
        itemLabel: 'name'
    };
    dojo.mixin(options, params || {} );
    var dialog = new wma.grid.ItemDialog(options);
    dijit.byId('testsContainer').addChild(dialog);
    return dialog;
}

factory.searchFormMock = function(params) {
    return {
        attr: function(attribute) {
            return { query: 'bla' };
        }
    }
}

factory.pagingContainer = function(params) {
    var options = {
        pagingUrl: '/admin/test/paging',
        grid: factory.gridMock(),
        searchForm: factory.searchFormMock()
    };

    dojo.mixin(options, params || {} );
    var container = new wma.grid.PagingContainer(options);
    dijit.byId('testsContainer').addChild(container);
    return container;
}

// mock for wma.grid.Grid
wma.test.Suite.addWidgetMock(
    'wma.tests.gridMock',
    {
        editSelectedItem: function() {
            window.editSelectedItemCalled = true;
        },
        deleteSelectedItems: function() {
            window.deleteSelectedItemsCalled = true;
        },
        setQuery: function(params) {
            window.gridSetQueryParams = params;
        }
    }
    );

// mock for dojox.widget.Toaster
wma.test.Suite.addWidgetMock(
    'wma.tests.toasterMock',
    {
        messages: [],

        setContent: function(message, messageType, duration) {
            this.messages.push({
                message: message,
                messageType: messageType,
                duration: duration
            });
        }
    }
    );

try {
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.NewButton");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.EditButton");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.DeleteButton");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.RailsRestStore");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.Grid");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.ItemDialog");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.PagingContainer");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.NewForm");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.EditForm");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.SearchForm");
    dojo.requireIf(dojo.isBrowser, "wma.tests.grid.formatters");
} catch(e) {
    doh.debug(e);
}
