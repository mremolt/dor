dojo.provide("dor.tests.grid.NewButton");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.NewButton");


factory.newButton = function(params) {
    var options = {
        dialog: 'newDialog'
    };
    dojo.mixin(options, params || {} );
    var button = new dor.grid.NewButton(options);
    dijit.byId('testsContainer').addChild(button);
    return button;
}

dor.test.Suite.register("dor.tests.grid.NewButton", [
    {
        name: 'A dor.grid.NewButton should be created',
        runTest: function(doh) {
            var button = factory.newButton();
            doh.assertTrue(button instanceof dor.grid.NewButton);
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