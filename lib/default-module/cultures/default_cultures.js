/*!
 * Fierce Planet - AgentTypes
 *
 * Copyright (C) 2011 Liam Magee
 * MIT Licensed
 */

var Culture = require('./../../models/agent/culture').Culture;
var CultureDefaults = require('./../../models/agent/culture').CultureDefaults;
var Desires = require('./../../models/agent/desires').Desires;
var Beliefs = require('./../../models/agent/beliefs').Beliefs;
var Capabilities = require('./../../models/agent/capabilities').Capabilities;
var _ = require('underscore');
var one = {};
one.color = require('onecolor');
var StickFigure = require('go-figure').StickFigure;
StickFigure.Running = require('go-figure').StickFigure.Running;
StickFigure.Walking = require('go-figure').StickFigure.Walking;


var DefaultCultures = DefaultCultures || {};

DefaultCultures.Circular = new Culture("Circular", one.color("#000"));
_.extend(DefaultCultures.Circular, {
    drawFunction: (function(ctx, agent, x, y, pieceWidth, pieceHeight, newColor, counter, direction) {
        var radius = (pieceWidth / 4);

        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.strokeStyle = agent.color.hex();
        ctx.stroke();
        ctx.fillStyle = agent.color.hex();
        ctx.fill();
    })
});

DefaultCultures.Square = new Culture("Square", one.color("#000"));
_.extend(DefaultCultures.Square, {
    drawFunction: (function(ctx, agent, x, y, pieceWidth, pieceHeight, newColor, counter, direction) {

        ctx.fillStyle = agent.color.hex();
        ctx.fillRect(x - FiercePlanet.Orientation.cellWidth / 2, y - FiercePlanet.Orientation.cellHeight / 2, FiercePlanet.Orientation.cellWidth, FiercePlanet.Orientation.cellHeight);
    })
});


DefaultCultures.Stickman = new Culture("Stickman", one.color("#000"));
_.extend(DefaultCultures.Stickman, {
    drawFunction: (function(ctx, agent, x, y, width, height, newColor, counter, direction) {
        // Define agent elements here
        var frames = 4;
        var speed = agent.speed;
        var health = agent.health;
        var countdown = agent.countdownToMove;
        var frame = Math.floor((countdown / (speed + 1)) * frames);

        // Category Health
        var yHealthOffset = -5;
        for (var j in agent.culture.healthCategories) {
            var rc = agent.culture.healthCategories[j];
            var h = agent.getHealthForResourceCategory(rc);
            var barLength = Math.floor((h / agent.culture.initialHealth) * width / 2);

            ctx.lineWidth = 3;
            ctx.lineCap = "round";

            // Draw white line background first
            /*
             ctx.beginPath();
             ctx.moveTo(x - pieceWidth / 4, y + yHealthOffset);
             ctx.lineTo(x + pieceWidth / 4, y + yHealthOffset);
             ctx.closePath();

             ctx.strokeStyle = "#fff";
             ctx.stroke();
             */

            // Draw health line next
            ctx.beginPath();
            ctx.moveTo(x + width / 4, y + yHealthOffset);
            ctx.lineTo(x + width / 4 + barLength, y + yHealthOffset);
            ctx.closePath();

            ctx.strokeStyle = rc.color;
            ctx.stroke();

            yHealthOffset -= 3;
        }

        // General Health
        /*
         ctx.beginPath();
         ctx.moveTo(x - pieceWidth / 4, y - 5);
         var barLength = (agent.health / DEFAULT_INITIAL_HEALTH) * pieceWidth / 2;
         ctx.lineTo(x - pieceWidth / 4 + barLength, y - 5);
         ctx.closePath();
         ctx.lineWidth = 3;
         ctx.strokeStyle = "#f00";
         ctx.lineCap = "round";
         ctx.stroke();
         */




//        var sf = new StickFigure(x, y, width, height, true);
//        if (agent.figure)
//            sf.frame = agent.figure.frame;
        var sf = agent.figure || new StickFigure(x, y, width, height, true);
        sf.x = x, sf.y = y;
        sf.generateDimensions();
        // Copy down the style for this figure
        sf.style = agent.culture.style;

        if (!_.isUndefined(agent.culture.customStickFunction)) {
            sf.defaultAction = eval(agent.culture.customStickFunction);
        }
        else {
            if (health <= 0) {
//                if (agent.diedAt > Lifecycle.worldCounter - 200) {
                // Draw an explosion here
                var explosionX = x + width / 2;
                var explosionY = y + width / 8;

                var radgrad = ctx.createRadialGradient(explosionX, explosionY, 0, explosionX, explosionY, width / 3);
                radgrad.addColorStop(0, 'rgba(255, 168, 81,1)');
                radgrad.addColorStop(0.8, '#FFF354');
                radgrad.addColorStop(1, 'rgba(255, 168, 81,0)');
                ctx.fillStyle = radgrad;
                ctx.fillRect(x, y - (width / 4), width, height + (width / 4));

                sf.defaultAction = StickFigure.Walking;
//                sf.defaultAction = StickFigure.Expire;
//                }
            }
            else {
                if (speed > CultureDefaults.DEFAULT_RUN_SPEED)
                    sf.defaultAction = StickFigure.Walking;
                else
                    sf.defaultAction = StickFigure.Running;
            }
        }


        sf.direction = direction;
        sf.frame = frame;
        sf.doAction();
        sf.drawFigure(ctx);
        sf.updateFrame();
        agent.figure = sf;

        // Now draw the figure
        ctx.lineWidth = agent.culture.lineWidth || 1.5;
        ctx.lineCap = "round";
        ctx.strokeStyle = agent.color.hex();
        ctx.stroke();
//        ctx.fillStyle = agent.color;
//        ctx.fill();
    })


});

DefaultCultures.MovingStickman = _.clone(DefaultCultures.Stickman);
_.extend(DefaultCultures.MovingStickman, {
    beliefs: [
        Beliefs.BeliefsAboutPaths
        , Beliefs.BeliefsAboutResources
        , Beliefs.BeliefsBasedOnOtherAgentsBeliefs
    ]
    , desires: [
        Desires.ExploreSpace
        , Desires.Flee
//        , Desires.ImproveHealth
    ]
    , capabilities: [
        Capabilities.ConsumeResourcesCapability
    ]
});



if (typeof exports !== "undefined") {
    exports.DefaultCultures = DefaultCultures;
    exports.CultureDefaults = CultureDefaults;
}

