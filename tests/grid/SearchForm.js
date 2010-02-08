dojo.provide("dor.tests.grid.SearchForm");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.SearchForm");


factory.searchForm = function(params) {
    var options = {
        pagingContainer: 'pagingContainer'
    };

    dojo.mixin(options, params || {} );
    var container = new dor.grid.SearchForm(options);
    dijit.byId('testsContainer').addChild(container);
    return container;
}

dor.test.Suite.register("dor.tests.grid.SearchForm", [
{
    name: 'A dor.grid.SearchForm should be created',
    runTest: function(doh) {
        var form = new dor.grid.SearchForm();
        doh.assertTrue(form instanceof dor.grid.SearchForm);
    }
},
{
    name: 'A dor.grid.SearchForm should contain a TextBox named query',
    runTest: function(doh) {
        var pagingContainer = factory.pagingContainer();
        var form = factory.searchForm();

        var searchBox = form.getChildren()[0];
        doh.assertEqual('query', searchBox.attr('name'));
        doh.assertEqual({ query: ''}, form.attr('value'));
    }
},
{
    name: 'A dor.grid.SearchForm should contain a submit button',
    runTest: function(doh) {
        var pagingContainer = factory.pagingContainer();
        var form = factory.searchForm();
        
        var submitButton = form.getChildren()[1];
        doh.assertEqual('Suchen', submitButton.attr('label'));
        doh.assertEqual('submit', submitButton.attr('type'));
    }
},
{
    name: 'A dor.grid.SearchForm should contain a reset button',
    runTest: function(doh) {
        var pagingContainer = factory.pagingContainer();
        var form = factory.searchForm();

        var resetButton = form.getChildren()[2];
        doh.assertEqual('Reset', resetButton.attr('label'));
        doh.assertEqual('reset', resetButton.attr('type'));
    }
}
]);