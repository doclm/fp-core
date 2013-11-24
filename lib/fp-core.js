/**
 * FP Core
 * https://github.com/liammagee/fp-core
 * Copyright(c) 2013 Liam Magee
 * LICENSE: MIT/X11
 */

var Lifecycle = require('./models/lifecycle').Lifecycle,
    World = require('./models/world').World,
    Campaign = require('./models/campaign').Campaign,
    Catastrophe = require('./models/catastrophe').Catastrophe,
    Cell = require('./models/cell').Cell,
    ModuleManager = require('./models/module-manager').ModuleManager,
    Module = require('./models/module').Module,
    Resource = require('./models/resource').Resource,
    Species = require('./models/species').Species,
    Statistics = require('./models/statistics').Statistics,
    Terrain = require('./models/terrain').Terrain,
    Tile = require('./models/tile').Tile,
    Universe = require('./models/world').World,
    Wave = require('./models/wave').Wave,
    Agent = require('./models/agent/agent').Agent,
    Beliefs = require('./models/agent/beliefs').Beliefs,
    Capabilities = require('./models/agent/capabilities').Capabilities,
    Characteristics = require('./models/agent/characteristics').Characteristics,
    Culture = require('./models/agent/culture').Culture,
    Desires = require('./models/agent/desires').Desires,
    Plans = require('./models/agent/plans').Plans;

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
