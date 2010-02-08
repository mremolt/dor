dojo.provide("dor.tests.grid.EditForm");

dojo.require('dor.test.Suite');
dojo.require("dor.grid.EditForm");
dojo.require("dijit.form.TextBox");

factory.editForm = function(params) {
    var options = {
        
    };

    dojo.mixin(options, params || {} );
    var form = new dor.grid.EditForm(options);
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

dor.test.Suite.register("dor.tests.grid.EditForm", [
{
    name: 'A dor.grid.EditForm should be created',
    runTest: function(doh) {
        var form = new dor.grid.EditForm();
        doh.assertTrue(form instanceof dor.grid.EditForm);
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

