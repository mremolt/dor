dojo.provide("wma.tests.grid.NewButton");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.NewButton");


factory.newButton = function(params) {
    var options = {
        dialog: 'newDialog'
    };
    dojo.mixin(options, params || {} );
    var button = new wma.grid.NewButton(options);
    dijit.byId('testsContainer').addChild(button);
    return button;
}

wma.test.Suite.register("wma.tests.grid.NewButton", [
    {
        name: 'A wma.grid.NewButton should be created',
        runTest: function(doh) {
            var button = factory.newButton();
            doh.assertTrue(button instanceof wma.grid.NewButton);
        }
    },
    {
        name: 'Clicking on a NewButton should open a Dialog',
        runTest: function(doh){
            var button = factory.newButton({ dialog: 'newDialog' });
            var dialog = factory.itemDialog({ id: 'newDialog' });
            button.onClick();

            doh.assertTrue(dialog.attr('open'));
        }
    },
    {
        name: 'Clicking on a NewButton should set the correct href attribute',
        runTest: function(doh){
            var button = factory.newButton({ dialog: 'newDialog' });
            var dialog = factory.itemDialog({ id: 'newDialog' });
            button.onClick();

            doh.assertEqual('/admin/test/new', dialog.attr('href'));
        }
    },
    {
        name: 'Clicking on a NewButton should set the correct title attribute',
        runTest: function(doh){
            var button = factory.newButton({ dialog: 'newDialog' });
            var dialog = factory.itemDialog({ id: 'newDialog' });
            button.onClick();

            doh.assertEqual('Neuen Datensatz anlegen', dialog.attr('title'));
        }
    }
]);