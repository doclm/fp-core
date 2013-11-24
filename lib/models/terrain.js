/*!
 * Fierce Planet - Terrain
 *
 * Copyright (C) 2011 Liam Magee
 * MIT Licensed
 */
var _ = require('underscore');
var one = {};
one.color = require('onecolor');

/**
 * Terrain constants
 */
var DEFAULT_TERRAIN_COLOR = "#0FFF1F";
var DEFAULT_TERRAIN_ALPHA = 0.0;

/**
 * Tile class definition
 * @constructor
 */
function Terrain(color) {
    if (!_.isUndefined(color.cssa)) {
        this.color = color.cssa();
    }
    else {
        this.color = color || DEFAULT_TERRAIN_COLOR;
    }
}

if (!_.isUndefined(one) && !_.isUndefined(one.color)) {
	Terrain.DEFAULT_TERRAIN = new Terrain(one.color(DEFAULT_TERRAIN_COLOR).alpha(DEFAULT_TERRAIN_ALPHA));
}
else {
	Terrain.DEFAULT_TERRAIN = new Terrain();
}

if (typeof exports !== "undefined") {
    exports.DEFAULT_TERRAIN_COLOR = DEFAULT_TERRAIN_COLOR;
    exports.DEFAULT_TERRAIN_ALPHA = DEFAULT_TERRAIN_ALPHA;
    exports.Terrain = Terrain;
}
