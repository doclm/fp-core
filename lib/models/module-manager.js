/*!
 * Fierce Planet - Params
 * Declares game parameters
 *
 * Copyright (C) 2011 Liam Magee
 * MIT Licensed
 */

var _ = require('underscore');
var Module = require('./module').Module;

/**
 * @namespace Manages modules
 */
var ModuleManager = ModuleManager || {};


(function() {

    var _modules = {};
    this.currentModule;

    /**
     * Clears all modules from the manager
     */
    this.clearAllModules = function() {
        _modules = {};
        this.currentModule = undefined;
    }

    /**
     * Registers a module
     */
    this.registerModule = function(module) {
        _modules = _modules || {};

        if (typeof(module) != "undefined" && module.id)
            _modules[module.id] = module;

        if (module.init)
            module.init();

        this.currentModule = module;
    };

    /**
     * Retrieves  a module
     */
    this.getModule = function(moduleID) {
        return _modules[moduleID];
    };


    /**
     * Retrieves  a module
     */
    this.setCurrentModule = function(moduleID) {
        this.currentModule = this.getModule(moduleID);
    };

    /**
     * Retrieves an array of module ids
     */
    this.getCurrentIds = function() {
        return _.map(_modules, function(module) { return module.id; })
    };


}).apply(ModuleManager);


if (typeof exports !== "undefined")
    exports.ModuleManager = ModuleManager;

