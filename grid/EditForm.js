dojo.provide('dor.grid.EditForm');

dojo.require('dijit.form.Form');

dojo.declare(
    'dor.grid.EditForm',
    dijit.form.Form,
    {
        grid: null,
        dialog: null,
        toaster: null,
        pagingContainer: null, 

        onSubmit: function(event) {
            event.preventDefault();
            if (this.isValid()) {
                var item = this.grid.selection.getSelected()[0];
                var values = this._extractValues();
                this._fillStoreWithValues(this.grid.store, values, item);

                this.grid.store.save({
                    onComplete: this.saveComplete,
                    onError: this.saveError
                });
            } else {
                this.toaster.setContent(
                    'Die Daten sind nicht valide!', 'error');
            }
        },

        saveComplete: function(data) {
            var form = this;
            data[0]['deferred'].addCallback(function(data) {
                var errors = data.errors;
                if (errors.length > 0)  {
                    dojo.forEach(errors, function (error){
                        form.toaster.setContent(error.join(': '), 'error');
                    });
                    form.grid.render();
                } else {
                    form.pagingContainer.loadPage();
                    form.toaster.setContent('Der Eintrag wurde erfolgreich gespeichert!');
                    form.dialog.hide();
                }
            })
        },

        saveError: function(data) {
            // this point should'nt ever be reached unless the server backend causes a problem
            console.debug(data);
        },

        _extractValues: function() {
            var extractedValues = new Array();
            var values = this.attr('value');

            for (v in values) {
                // entferne das resource[] im key. resource[name] wird also zu name.
                var key = v.slice(9, -1);
                var value = values[v];
                extractedValues[key] = value;
            }
            return extractedValues;
        },

        _fillStoreWithValues: function(store, values, item) {
            for (key in values) {
                store.setValue(item, key, values[key]);
            }
        }
    }
    );