
window.App = require('app');

require('templates');
require('models');
require('controllers');
require('views');

App.reopen({
    ready: function(){

        this._super();

    }
});
