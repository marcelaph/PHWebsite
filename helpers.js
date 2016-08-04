
var hbs = require('express-hbs');

module.exports = function () {  
    hbs.registerHelper('json', JSON.stringify);

    hbs.registerHelper('dump', function (json) {
    	return '<pre>' + JSON.stringify(json, null, 4) + '</pre>';
    });
};