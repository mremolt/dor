dojo.provide("wma.tests.grid.EditForm");

dojo.require('wma.test.Suite');
dojo.require("wma.grid.EditForm");
dojo.require("dijit.form.TextBox");

factory.editForm = function(params) {
    var options = {
        
    };

    dojo.mixin(options, params || {} );
    var form = new wma.grid.EditForm(options);
    dijit.byId('testsContainer').addChild(form);
    var formDiv = document.createElement("div");
    form.domNode.appendChild(formDiv);

    var first_name = new dijit.form.TextBox({ name: 'resource[first_name]'});
    var name = new dijit.form.TextBox({ name: 'resource[name]'});
    var email = new dijit.form.TextBox({ name: 'resource[email]'});

    formDiv.appendChild(first_name.domNode);
    formDiv.appendChild(name.domNode);
    formDiv.appendChild(email.domNode);
    
    return form;
}

wma.test.Suite.register("wma.tests.grid.EditForm", [
{
    name: 'A wma.grid.EditForm should be created',
    runTest: function(doh) {
        var form = new wma.grid.EditForm();
        doh.assertTrue(form instanceof wma.grid.EditForm);
    }
},
{
    name: '_extractValues should strip the form values hash keys of resource[]',
    runTest: function(doh) {
        var form = factory.editForm();
        var formValues = {
            "resource[name]": "Doe",
            "resource[first_name]": "John",
            "resource[email]": "j.doe@example.com"
        };
        form.attr('value', formValues);

        var expectedValues = {
            "name": "Doe",
            "first_name": "John",
            "email": "j.doe@example.com"
        };
        doh.assertEqual(expectedValues, form._extractValues());
    }
},
{
    name: '_extractValues should strip the form values hash keys of resource[]',
    runTest: function(doh) {
        var form = factory.editForm();
        var formValues = {
            "resource[name]": "Doe",
            "resource[first_name]": "John",
            "resource[email]": "j.doe@example.com"
        };
        form.attr('value', formValues);

        var expectedValues = {
            "name": "Doe",
            "first_name": "John",
            "email": "j.doe@example.com"
        };
        doh.assertEqual(expectedValues, form._extractValues());
    }
}
]);

