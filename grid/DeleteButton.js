dojo.provide('wma.grid.DeleteButton');

dojo.require('dijit.form.Button');

dojo.declare(
    'wma.grid.DeleteButton',
    dijit.form.Button,
    {
        grid: '',
        iconClass: 'dijitEditorIcon dijitEditorIconDelete',

        onClick: function() {
            var grid = dijit.byId(this.grid);
            grid.deleteSelectedItems();
        }
    });