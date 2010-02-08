dojo.provide('wma.grid.NewForm');

dojo.require('wma.grid.EditForm');

dojo.declare(
    'wma.grid.NewForm',
    wma.grid.EditForm,
    {
        _fillStoreWithValues: function(store, values, item) {
            store.newItem(values);
        }
    }
    );