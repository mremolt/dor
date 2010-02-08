dojo.provide("dor.tests.grid.RailsRestStore");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.RailsRestStore");


dor.test.Suite.register("dor.tests.grid.RailsRestStore", [
{
    name: 'A dor.grid.RailsRestStore should be created',
    runTest: function(doh) {
        var store = new dor.grid.RailsRestStore({ target: '/admin/test' });
        doh.assertTrue(store instanceof dor.grid.RailsRestStore);
    }
}
]);