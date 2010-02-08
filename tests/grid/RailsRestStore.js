dojo.provide("wma.tests.grid.RailsRestStore");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.RailsRestStore");


wma.test.Suite.register("wma.tests.grid.RailsRestStore", [
{
    name: 'A wma.grid.RailsRestStore should be created',
    runTest: function(doh) {
        var store = new wma.grid.RailsRestStore({ target: '/admin/test' });
        doh.assertTrue(store instanceof wma.grid.RailsRestStore);
    }
}
]);