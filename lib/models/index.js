/**
 * FP Core
 * https://github.com/liammagee/fp-core
 * Copyright(c) 2013 Liam Magee
 * LICENSE: MIT/X11
 */

var Lifecycle = require('./lifecycle').Lifecycle,
    World = require('./world').World,
    Campaign = require('./campaign').Campaign,
    Catastrophe = require('./catastrophe').Catastrophe,
    Cell = require('./cell').Cell,
    ModuleManager = require('./module-manager').ModuleManager,
    Module = require('./module').Module,
    Resource = require('./resource').Resource,
    Species = require('./species').Species,
    Statistics = require('./statistics').Statistics,
    Terrain = require('./terrain').Terrain,
    Tile = require('./tile').Tile,
    Universe = require('./world').World,
    Wave = require('./wave').Wave,
    Agent = require('./agent/agent').Agent,
    Beliefs = require('./agent/beliefs').Beliefs,
    Capabilities = require('./agent/capabilities').Capabilities,
    Characteristics = require('./agent/characteristics').Characteristics,
    Culture = require('./agent/culture').Culture,
    Desires = require('./agent/desires').Desires,
    Plans = require('./agent/plans').Plans;

/**
 * Library version
 */
exports.version = '0.0.1';

/**
 * Expose constructors
 */

exports.Lifecycle = Lifecycle;
exports.World = World;
exports.Campaign = Campaign;
exports.Catastrophe = Catastrophe;
exports.Cell = Cell;
exports.Module = Module;
exports.ModuleManager = ModuleManager;
exports.Resource = Resource;
exports.Species = Species;
exports.Statistics = Statistics;
exports.Terrain = Terrain;
exports.Tile = Tile;
exports.Wave = Wave;
exports.Agent = Agent;
exports.Beliefs = Beliefs;
exports.Capabilities = Capabilities;
exports.Characteristics = Characteristics;
exports.Culture = Culture;
exports.Desires = Desires;
exports.Plans = Plans;