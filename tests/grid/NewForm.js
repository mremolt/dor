dojo.provide("wma.tests.grid.NewForm");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.NewForm");


wma.test.Suite.register("wma.tests.grid.NewForm", [
{
    name: 'A wma.grid.NewForm should be created',
    runTest: function(doh) {
        var form = new wma.grid.NewForm();
        doh.assertTrue(form instanceof wma.grid.NewForm);
    }
}
]);

