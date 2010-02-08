dojo.provide('wma.grid.NewButton');

dojo.require('dijit.form.Button');

dojo.declare(
    'wma.grid.NewButton',
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