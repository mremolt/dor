dojo.provide("wma.tests.grid.DeleteButton");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.DeleteButton");

factory.deleteButton = function(params) {
    var options = {
        grid: 'grid'
    };

    dojo.mixin(options, params || {} );
    var button = new wma.grid.DeleteButton(options);
    dijit.byId('testsContainer').addChild(button);
    return button;
}

wma.test.Suite.register("wma.tests.grid.DeleteButton", [
{
    name: 'A wma.grid.DeleteButton should be created',
    runTest: function(doh) {
        var button = new wma.grid.DeleteButton();
        doh.assertTrue(button instanceof wma.grid.DeleteButton);
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

