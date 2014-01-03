/*!
 * Fierce Planet
 *
 * Copyright (C) 2011 Liam Magee
 * MIT Licensed
 */

var Module = require('./../models/Module').Module;
var TBL = require('./resources/tbl').TBL;
var DefaultCultures = require('./cultures/default_cultures').DefaultCultures;
var Basic = require('./worlds/basic').Basic;
var Additional = require('./worlds/additional').Additional;
var Universe = require('./../models/universe').Universe;

var DefaultModule = DefaultModule || {};

(function() {

    this.init = function() {
        var module = new Module();
        module.id = 'Default';
        module.registerSelf();
        module.registerResourceSet(TBL);

        module.registerCampaign(Basic);
        module.registerCampaign(Additional);
        module.currentCampaignID = 'Basic';
//        module.registerResourceSet(CoS);
//        FiercePlanet.GameState.currentProfile.capabilities = ["farm", "water", "clinic", "legal"];

        var culture = DefaultCultures.MovingStickman;
        culture.healthCategories = module.resourceSet.categories;
        module.registerCulture(DefaultCultures.MovingStickman);

        Universe.settings.animateWorldAtStart = true;

    };
}).apply(DefaultModule);


if (typeof exports !== "undefined")
    exports.DefaultModule = DefaultModule;


