dojo.provide("wma.tests.grid.PagingContainer");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.PagingContainer");


wma.test.Suite.register("wma.tests.grid.PagingContainer", [
{
    name: 'A wma.grid.PagingContainer should be created',
    runTest: function(doh) {
        var grid = factory.gridMock({ id: 'grid' });
        var container = new wma.grid.PagingContainer({ grid: factory.gridMock() });
        doh.assertTrue(container instanceof wma.grid.PagingContainer);
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