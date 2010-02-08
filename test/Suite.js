dojo.provide('wma.test.Suite');

//dojo.require('dijit.form.Button');
dojo.require("doh.runner");

 wma.test.Suite = {
    _testTemplate: {
        setUp: function() {
            var container = dijit.byId('testsContainer');
            container && container.destroyRecursive();

            var testsContainer = new dijit.layout.BorderContainer({
                id: 'testsContainer'
            });
        },
        tearDown: function() {
            var container = dijit.byId('testsContainer');
            container && container.destroyRecursive();
        }
    },
    register: function(group, tests) {
        var wrappedTests = [];
        dojo.forEach(tests, function(test) {
            wrappedTests.push(dojo.mixin(dojo.clone(wma.test.Suite._testTemplate), test));
        });
        doh.register(group, wrappedTests);
    },

    addWidgetMock: function(name, object) {
        dojo.declare(name, dijit._Widget, object);
    },
    runConfirmed: function(f) {
        var originalConfirm = window.confirm;
        window.confirm = function() { return true };
        f();
        window.confirm = originalConfirm;
    }
}