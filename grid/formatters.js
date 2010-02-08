dojo.provide('dor.grid.formatters');

dojo.require("dojo.date.locale");

var formatters = {
    germanDate: function(date) {
        if (date && (typeof date == 'string' || typeof date.getDay == 'function')) {
            // if date is a string, convert to Date object
            date = typeof date == 'string' ? dojo.date.stamp.fromISOString(date) : date;
            if (date) {
                return dojo.date.locale.format(date, {
                    "fullYear": true,
                    "selector": 'date',
                    "datePattern": 'd.M.y'
                });
            } else {
                return 'unbekannt';
            }
            
        } else {
            return 'unbekannt';
        }
    }
};


