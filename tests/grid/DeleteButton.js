dojo.provide("dor.tests.grid.DeleteButton");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.DeleteButton");

factory.deleteButton = function(params) {
    var options = {
        grid: 'grid'
    };

    dojo.mixin(options, params || {} );
    var button = new dor.grid.DeleteButton(options);
    dijit.byId('testsContainer').addChild(button);
    return button;
}

dor.test.Suite.register("dor.tests.grid.DeleteButton", [
{
    name: 'A dor.grid.DeleteButton should be created',
    runTest: function(doh) {
        var button = new dor.grid.DeleteButton();
        doh.assertTrue(button instanceof dor.grid.DeleteButton);
    }
},
{
    name: 'Clicking on a DeleteButton should call deleteSelectedItems() on grid',
    runTest: function(doh) {
        var button = factory.deleteButton({
            grid: 'grid'
        });
        var grid = factory.gridMock({
            id: 'grid'
        });

        window.deleteSelectedItemsCalled = false;
        button.onClick();
        doh.assertTrue(window.deleteSelectedItemsCalled);
    }
}
]);

