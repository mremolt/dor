dojo.provide("wma.tests.grid.SearchForm");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.SearchForm");


factory.searchForm = function(params) {
    var options = {
        pagingContainer: 'pagingContainer'
    };

    dojo.mixin(options, params || {} );
    var container = new wma.grid.SearchForm(options);
    dijit.byId('testsContainer').addChild(container);
    return container;
}

wma.test.Suite.register("wma.tests.grid.SearchForm", [
{
    name: 'A wma.grid.SearchForm should be created',
    runTest: function(doh) {
        var form = new wma.grid.SearchForm();
        doh.assertTrue(form instanceof wma.grid.SearchForm);
    }
},
{
    name: 'A wma.grid.SearchForm should contain a TextBox named query',
    runTest: function(doh) {
        var pagingContainer = factory.pagingContainer();
        var form = factory.searchForm();

        var searchBox = form.getChildren()[0];
        doh.assertEqual('query', searchBox.attr('name'));
        doh.assertEqual({ query: ''}, form.attr('value'));
    }
},
{
    name: 'A wma.grid.SearchForm should contain a submit button',
    runTest: function(doh) {
        var pagingContainer = factory.pagingContainer();
        var form = factory.searchForm();
        
        var submitButton = form.getChildren()[1];
        doh.assertEqual('Suchen', submitButton.attr('label'));
        doh.assertEqual('submit', submitButton.attr('type'));
    }
},
{
    name: 'A wma.grid.SearchForm should contain a reset button',
    runTest: function(doh) {
        var pagingContainer = factory.pagingContainer();
        var form = factory.searchForm();

        var resetButton = form.getChildren()[2];
        doh.assertEqual('Reset', resetButton.attr('label'));
        doh.assertEqual('reset', resetButton.attr('type'));
    }
}
]);