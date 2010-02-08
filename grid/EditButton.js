dojo.provide('dor.grid.EditButton');

dojo.require('dijit.form.Button');

dojo.declare(
    'dor.grid.EditButton',
    dijit.form.Button,
    {
        grid: '',
        iconClass: 'dijitEditorIcon dijitEditorIconSave',

        onClick: function() {
            dijit.byId(this.grid).editSelectedItem();
        }
    }
);