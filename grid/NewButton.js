dojo.provide('dor.grid.NewButton');

dojo.require('dijit.form.Button');

dojo.declare(
    'dor.grid.NewButton',
    dijit.form.Button,
    {
        dialog: '',
        iconClass: 'dijitEditorIcon dijitEditorIconNewPage',

        onClick: function() {
            var dialog = dijit.byId(this.dialog);
            dialog.attr('item', null);
            dialog.show();
        }
    });