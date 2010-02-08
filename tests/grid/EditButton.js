dojo.provide("dor.tests.grid.EditButton");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.EditButton");
dojo.require("dijit.Dialog");
dojo.require('dojo.data.ItemFileReadStore');
dojo.require('dojox.grid.DataGrid');
dojo.require('dojox.widget.Toaster');

factory.editButton = function(params) {
    var options = {
        dialog: 'editDialog'
    };

    dojo.mixin(options, params || {} );
    var button = new dor.grid.EditButton(options);
    dijit.byId('testsContainer').addChild(button);
    return button;
}

dor.test.Suite.register("dor.tests.grid.EditButton", [
{
    name: 'A dor.grid.EditButton should be created',
    runTest: function(doh) {
        var button = new dor.grid.EditButton();
        doh.assertTrue(button instanceof dor.grid.EditButton);
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