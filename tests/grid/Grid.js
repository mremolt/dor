dojo.provide("dor.tests.grid.Grid");
dojo.require("dor.grid.ItemDialog");
dojo.require("dor.grid.Grid");

factory.dialog = function(params) {
    var options = {
        id: 'dialog'
    };
    dojo.mixin(options, params || {} );
    var dialog = new dor.grid.ItemDialog(options);
    dijit.byId('testsContainer').addChild(dialog);
    return dialog;
}

factory.grid = function(params) {
    var options = {
        id: "grid",
        store: factory.store(),
        structure: [
        {
            field: 'id',
            name: 'ID'
        },

        {
            field: 'name',
            name: 'Name'
        }
        ],
        rowsPerPage: "250",
        pagingContainer: 'pagingContainer'
    };
    dojo.mixin(options, params || {} );
    var grid = new dor.grid.Grid(options);
    dijit.byId('testsContainer').addChild(grid);
    grid.startup();
    return grid;
}

dor.test.Suite.register("dor.tests.grid.Grid", [
    {
        name: 'A dor.grid.Grid should be created',
        runTest: function(doh) {
            var grid = new dor.grid.Grid();
            doh.assertTrue(grid instanceof dor.grid.Grid);
        }
    },
    {
        name: 'A dor.grid.Grid should open the provided dialog when one item is selected',
        runTest: function(doh) {
            var dialog = factory.dialog({id: 'dialog'});
            var grid = factory.grid({dialog: 'dialog'});
            grid.selection.select(0);
            grid.editSelectedItem();
            doh.assertTrue(dialog.attr('open'));
        }
    },
    {
        name: 'A dor.grid.Grid should transfer the selected item to the dialog',
        runTest: function(doh) {
            var dialog = factory.dialog({id: 'dialog'});
            var grid = factory.grid({dialog: 'dialog'});
            grid.selection.select(0);
            var item = grid.selection.getSelected()[0];
            grid.editSelectedItem();

            doh.assertEqual(item, dialog.attr('item'));
        }
    },
    {
        name: 'dor.grid.Grid.editSelectedItem() should call setContent on Toaster if no item is selected',
        runTest: function(doh) {
            var toaster = factory.toasterMock({id: 'toaster'});
            var grid = factory.grid({toaster: 'toaster'});

            var numberMessagesBefore = toaster.messages.length;
            grid.editSelectedItem();

            doh.assertEqual(numberMessagesBefore + 1, toaster.messages.length);
        }
    },
    {
        name: 'dor.grid.Grid.deleteSelectedItems() should delete the selected item',
        runTest: function(doh) {
            var toaster = factory.toasterMock({id: 'toaster'});
            var pagingContainer = factory.pagingContainer({ id: 'pagingContainer'});
            var grid = factory.grid({toaster: 'toaster'});

            grid.store.fetch({onComplete: function(items, request) {
                var numberOfItemsBefore = items.length;

                grid.selection.select(0);

                var originalConfirm = window.confirm;
                window.confirm = function() { return true };
                grid.deleteSelectedItems();
                window.confirm = originalConfirm;

                grid.store.fetch({onComplete: function(items, request) {
                    doh.assertEqual(numberOfItemsBefore - 1, items.length);
                }});
            }});
        }
    },
    {
        name: 'dor.grid.Grid.deleteSelectedItems() should delete multiple selected items',
        runTest: function(doh) {
            var toaster = factory.toasterMock({id: 'toaster'});
            var pagingContainer = factory.pagingContainer({ id: 'pagingContainer'});
            var grid = factory.grid({toaster: 'toaster'});

            grid.store.fetch({onComplete: function(items, request) {
                var numberOfItemsBefore = items.length;

                //Select the first 2 items for deleting
                grid.selection.selectRange(0, 1);

                dor.test.Suite.runConfirmed(function() {
                    grid.deleteSelectedItems();
                });

                grid.store.fetch({onComplete: function(items, request) {
                    doh.assertEqual(numberOfItemsBefore - 2, items.length);
                }});
            }});
        }
    }
]);
