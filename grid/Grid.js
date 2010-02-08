dojo.provide('wma.grid.Grid');

dojo.require('dojox.grid.DataGrid');

dojo.declare(
    'wma.grid.Grid',
    dojox.grid.DataGrid,
    {
        dialog: '',
        toaster: '',
        pagingContainer: '',
        rowsPerPage: 100,
        clientSort: false,

        onRowDblClick: function(e) {
            this.editSelectedItem();
        },

        editSelectedItem: function() {
            if (this.selection.getSelected().length == 1) {
                var dialog = dijit.byId(this.attr('dialog'));
                dialog.attr('item', this.selection.getSelected()[0]);
                dialog.show();
            } else {
                dijit.byId(this.toaster).setContent('Bitte selektieren Sie genau eine Zeile!', 'error');
            }
        },

        deleteSelectedItems: function() {
            var items = this.selection.getSelected();
            if (items.length > 0 && confirm('Wollen Sie die markierten Elemente wirklich löschen?')) {
                this.selection.deselectAll();
                dojo.forEach(items, dojo.hitch(this, function(item, index, items) {
                    this.store.deleteItem(item);
                }));
                this.store.save({
                    onComplete: dojo.hitch(this, function() {
                        dijit.byId(this.toaster).setContent('Datensätze wurden erfolgreich gelöscht!');
                        dijit.byId(this.pagingContainer).loadPage();
                    })
                });
            }
        }
    });
wma.grid.Grid.markupFactory = dojox.grid.DataGrid.markupFactory;