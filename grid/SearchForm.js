dojo.provide('dor.grid.SearchForm');

dojo.require('dijit.form.Form');
dojo.require('dijit.form.TextBox');
dojo.require('dijit.form.Button');

dojo.declare(
    'dor.grid.SearchForm',
    dijit.form.Form,
    {
        pagingContainer: '',

        postCreate: function() {
            this.inherited("postCreate", arguments);
            var query = new dijit.form.TextBox({ name: 'query' });
            var submitButton = new dijit.form.Button({
                type: "submit",
                iconClass: "dijitAdditionalEditorIconFindRun",
                label: 'Suchen'
            });
            var resetButton = new dijit.form.Button({
                type: "reset",
                iconClass: "dijitEditorIcon dijitEditorIconDelete",
                label: 'Reset'
            });

            this.domNode.appendChild(query.domNode);
            this.domNode.appendChild(submitButton.domNode);
            this.domNode.appendChild(resetButton.domNode);
        },

        onSubmit: function(event) {
            event.preventDefault();
            dijit.byId(this.pagingContainer).attr('page', 1);
        },

        onReset: function(event) {
            this.attr('value', {
                query: ''
            });
            dijit.byId(this.pagingContainer).attr('page', 1);
        }
    }
    );