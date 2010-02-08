dojo.provide("wma.tests.grid.EditButton");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.EditButton");
dojo.require("dijit.Dialog");
dojo.require('dojo.data.ItemFileReadStore');
dojo.require('dojox.grid.DataGrid');
dojo.require('dojox.widget.Toaster');

factory.editButton = function(params) {
    var options = {
        dialog: 'editDialog'
    };

    dojo.mixin(options, params || {} );
    var button = new wma.grid.EditButton(options);
    dijit.byId('testsContainer').addChild(button);
    return button;
}

wma.test.Suite.register("wma.tests.grid.EditButton", [
{
    name: 'A wma.grid.EditButton should be created',
    runTest: function(doh) {
        var button = new wma.grid.EditButton();
        doh.assertTrue(button instanceof wma.grid.EditButton);
    }
},
{
    name: 'Clicking on a EditButton should call editSelectedItem() on grid',
    runTest: function(doh) {
        var button = factory.editButton({
            grid: 'grid'
        });
        var grid = factory.gridMock({
            id: 'grid'
        });

        window.editSelectedItemCalled = false;
        button.onClick();
        doh.assertTrue(window.editSelectedItemCalled);
    }
}
]);