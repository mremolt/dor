dojo.provide("dor.tests.grid.NewForm");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.NewForm");


dor.test.Suite.register("dor.tests.grid.NewForm", [
{
    name: 'A dor.grid.NewForm should be created',
    runTest: function(doh) {
        var form = new dor.grid.NewForm();
        doh.assertTrue(form instanceof dor.grid.NewForm);
    }
}
]);

