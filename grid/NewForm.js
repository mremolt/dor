dojo.provide('dor.grid.NewForm');

dojo.require('dor.grid.EditForm');

dojo.declare(
    'dor.grid.NewForm',
    dor.grid.EditForm,
    {
        _fillStoreWithValues: function(store, values, item) {
            store.newItem(values);
        }
    }
    );