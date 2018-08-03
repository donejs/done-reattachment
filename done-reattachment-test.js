var QUnit = require("qunit");
var reattach = require("./done-reattachment");

QUnit.module('done-reattachment');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the done-reattachment plugin');
});
