dojo.provide("wma.tests.grid.formatters");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.formatters");


wma.test.Suite.register("wma.tests.grid.formatters", [
{
    name: 'germanDate should return "unbekannt" if no Date is provided',
    runTest: function(doh) {

        doh.assertEqual('unbekannt', formatters.germanDate());
        doh.assertEqual('unbekannt', formatters.germanDate(new Array()));
        doh.assertEqual('unbekannt', formatters.germanDate('wdeskfiejrigjetrg'));
        doh.assertEqual('unbekannt', formatters.germanDate(42));
    }
},
{
    name: 'germanDate should return a correct formatted german date if a ISO date is provided',
    runTest: function(doh) {
        doh.assertEqual('4.8.1967', formatters.germanDate('1967-08-04'));
        doh.assertEqual('1.1.1977', formatters.germanDate('1977-01-01'));
    }
},
{
    name: 'germanDate should return a correct formatted german date if a Date object is provided',
    runTest: function(doh) {
        doh.assertEqual('4.8.1967', formatters.germanDate(new Date('1967-08-04')));
        var date = new Date('1977-01-01');
        date.setFullYear(2007);
        doh.assertEqual('1.1.2007', formatters.germanDate(date));
    }
}
]);