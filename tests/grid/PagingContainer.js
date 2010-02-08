dojo.provide("dor.tests.grid.PagingContainer");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.PagingContainer");


dor.test.Suite.register("dor.tests.grid.PagingContainer", [
{
    name: 'A dor.grid.PagingContainer should be created',
    runTest: function(doh) {
        var grid = factory.gridMock({ id: 'grid' });
        var container = new dor.grid.PagingContainer({ grid: factory.gridMock() });
        doh.assertTrue(container instanceof dor.grid.PagingContainer);
    }
},
{
    name: 'The pagingUrl attribute should be set',
    runTest: function(doh) {
        var container = factory.pagingContainer({pagingUrl: '/admin/bla/paging'});
        doh.assertEqual('/admin/bla/paging', container.attr('pagingUrl'));
    }
},
{
    name: 'The page attribute should set the correct href attribute',
    runTest: function(doh) {
        var container = factory.pagingContainer({pagingUrl: '/admin/test/paging'});
        container.attr('page', 42);
        doh.assertEqual('/admin/test/paging?page=42&query=bla', container.attr('href'));
    }
},
{
    name: 'The page attribute should set the correct query on the grid',
    runTest: function(doh) {
        var grid = factory.gridMock();
        var container = factory.pagingContainer({
            pagingUrl: '/admin/test/paging',
            grid: grid
        });
        container.attr('page', 42);
        doh.assertEqual({ page: 42, query: 'bla' }, window.gridSetQueryParams);
    }
}
]);