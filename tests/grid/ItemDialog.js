dojo.provide("dor.tests.grid.ItemDialog");
dojo.require("dor.grid.ItemDialog");

dor.test.Suite.register("dor.tests.grid.ItemDialog", [
    {
        name: 'A dor.grid.ItemDialog should be created',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog();
            doh.assertTrue(dialog instanceof dor.grid.ItemDialog);
        }
    },
    {
        name: 'A dor.grid.ItemDialog should change the href when item is set',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog();
            dialog.attr('item', {id: 5, name: 'An item'});
            doh.assertEqual('/5/edit', dialog.attr('href'));
        }
    },
    {
        name: 'A dor.grid.ItemDialog should consider baseUrl',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog({ baseUrl: '/admin/test' });
            dialog.attr('item', {id: 5, name: 'An item'});
            doh.assertEqual('/admin/test/5/edit', dialog.attr('href'));
        }
    },
    {
        name: 'A dor.grid.ItemDialog should provide a correct new url if no item attibute is set',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog({ baseUrl: '/admin/test' });
            doh.assertEqual('/admin/test/new', dialog.attr('href'));
        }
    },
    {
        name: 'A dor.grid.ItemDialog should provide a correct edit url if item attibute is set',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog({ baseUrl: '/admin/test' });
            dialog.attr('item', {id: 5, name: 'Hallo'});
            doh.assertEqual('/admin/test/5/edit', dialog.attr('href'));
        }
    },
    {
        name: 'A dor.grid.ItemDialog should provide a correct new url if the item is unset',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog({ baseUrl: '/admin/test' });
            dialog.attr('href', '/falsche/url');
            dialog.attr('item', null);
            doh.assertEqual('/admin/test/new', dialog.attr('href'));
        }
    },
    {
        name: 'A dor.grid.ItemDialog should set the default title if no item is set',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog({
                baseUrl: '/admin/test',
                itemLabel: 'name'
            });
            
            doh.assertEqual('Neuen Datensatz anlegen', dialog.attr('title'));
        }
    },
    {
        name: 'A dor.grid.ItemDialog should set the item-attribute set by the itemLabel as title',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog({
                baseUrl: '/admin/test',
                itemLabel: 'name'
            });

            dialog.attr('item', {id: 5, name: 'Adam West'});
            doh.assertEqual('Adam West', dialog.attr('title'));
        }
    },
    {
        name: 'A dor.grid.ItemDialog should set the default title if the item is unset',
        runTest: function(doh) {
            var dialog = new dor.grid.ItemDialog({
                baseUrl: '/admin/test',
                itemLabel: 'name'
            });

            dialog.attr('title', 'Falscher Titel');
            dialog.attr('item', null);
            doh.assertEqual('Neuen Datensatz anlegen', dialog.attr('title'));
        }
    }
]);
