dojo.provide("wma.tests.grid.ItemDialog");
dojo.require("wma.grid.ItemDialog");

wma.test.Suite.register("wma.tests.grid.ItemDialog", [
    {
        name: 'A wma.grid.ItemDialog should be created',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog();
            doh.assertTrue(dialog instanceof wma.grid.ItemDialog);
        }
    },
    {
        name: 'A wma.grid.ItemDialog should change the href when item is set',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog();
            dialog.attr('item', {id: 5, name: 'An item'});
            doh.assertEqual('/5/edit', dialog.attr('href'));
        }
    },
    {
        name: 'A wma.grid.ItemDialog should consider baseUrl',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog({ baseUrl: '/admin/test' });
            dialog.attr('item', {id: 5, name: 'An item'});
            doh.assertEqual('/admin/test/5/edit', dialog.attr('href'));
        }
    },
    {
        name: 'A wma.grid.ItemDialog should provide a correct new url if no item attibute is set',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog({ baseUrl: '/admin/test' });
            doh.assertEqual('/admin/test/new', dialog.attr('href'));
        }
    },
    {
        name: 'A wma.grid.ItemDialog should provide a correct edit url if item attibute is set',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog({ baseUrl: '/admin/test' });
            dialog.attr('item', {id: 5, name: 'Hallo'});
            doh.assertEqual('/admin/test/5/edit', dialog.attr('href'));
        }
    },
    {
        name: 'A wma.grid.ItemDialog should provide a correct new url if the item is unset',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog({ baseUrl: '/admin/test' });
            dialog.attr('href', '/falsche/url');
            dialog.attr('item', null);
            doh.assertEqual('/admin/test/new', dialog.attr('href'));
        }
    },
    {
        name: 'A wma.grid.ItemDialog should set the default title if no item is set',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog({
                baseUrl: '/admin/test',
                itemLabel: 'name'
            });
            
            doh.assertEqual('Neuen Datensatz anlegen', dialog.attr('title'));
        }
    },
    {
        name: 'A wma.grid.ItemDialog should set the item-attribute set by the itemLabel as title',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog({
                baseUrl: '/admin/test',
                itemLabel: 'name'
            });

            dialog.attr('item', {id: 5, name: 'Adam West'});
            doh.assertEqual('Adam West', dialog.attr('title'));
        }
    },
    {
        name: 'A wma.grid.ItemDialog should set the default title if the item is unset',
        runTest: function(doh) {
            var dialog = new wma.grid.ItemDialog({
                baseUrl: '/admin/test',
                itemLabel: 'name'
            });

            dialog.attr('title', 'Falscher Titel');
            dialog.attr('item', null);
            doh.assertEqual('Neuen Datensatz anlegen', dialog.attr('title'));
        }
    }
]);
