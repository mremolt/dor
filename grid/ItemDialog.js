dojo.provide('wma.grid.ItemDialog');

dojo.require('dijit.Dialog');

dojo.declare(
    'wma.grid.ItemDialog',
    dijit.Dialog,
    {
        item: null,
        baseUrl: '',
        itemLabel: '',

        postCreate: function() {
            this.inherited(arguments);
            this._setHrefForItem();
            this._setTitleForItem();
        },

        _setItemAttr: function(item) {
            this.item = item;
            this._setHrefForItem();
            this._setTitleForItem();
        },

        _setHrefForItem: function() {
            if (this.item) {
                this.attr('href', dojo.replace('{baseUrl}/{id}/edit',
                    { id: this.item.id, baseUrl: this.attr('baseUrl') }
                ));
            } else {
                this.attr('href', dojo.replace('{baseUrl}/new',
                    { baseUrl: this.attr('baseUrl') }
                ));
            }
        },
        _setTitleForItem: function() {
            if (this.item) {
                this.attr('title', this.item[this.itemLabel]);

            } else {
                this.attr('title', 'Neuen Datensatz anlegen');
            }
        }
    });