
// 3rd party dependencies
var gauss = require('gauss');
var _ = require('underscore');
require('./lib/fp-core');

var fp = require('./lib/models/index');
var Lifecycle = require('./lib/models/Lifecycle').Lifecycle;
Lifecycle = fp.Lifecycle;
var Module = fp.Module;
var DefaultModule = require('./lib/default-module/default-module').DefaultModule;

var a;
if (_.isUndefined(a))
	console.log('hello world');

// check the gauss library

var numbers = new gauss.Vector([1, 2, 3, 4]);





DefaultModule.init();


Lifecycle._initialiseGame();


// Draw the game
// Lifecycle.newWorld();