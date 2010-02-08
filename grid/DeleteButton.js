dojo.provide('dor.grid.DeleteButton');

dojo.require('dijit.form.Button');

dojo.declare(
    'dor.grid.DeleteButton',
    dijit.form.Button,
    {
        grid: '',
        iconClass: 'dijitEditorIcon dijitEditorIconDelete',

        onClick: function() {
            var grid = dijit.byId(this.grid);
            grid.deleteSelectedItems();
        }
    });