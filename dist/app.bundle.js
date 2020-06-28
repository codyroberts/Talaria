/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/animations/playerAnimation.ts":
/*!*******************************************!*\
  !*** ./src/animations/playerAnimation.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function playerAnimation(scene) {
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('hero', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });
    scene.anims.create({
        key: 'walk_down',
        frames: scene.anims.generateFrameNumbers('hero', { start: 8, end: 11 }),
        frameRate: 5,
        repeat: -1
    });
    scene.anims.create({
        key: 'walk_up',
        frames: scene.anims.generateFrameNumbers('hero', { start: 16, end: 19 }),
        frameRate: 5,
        repeat: -1
    });
    scene.anims.create({
        key: 'walk_sideways',
        frames: scene.anims.generateFrameNumbers('hero', { start: 12, end: 15 }),
        frameRate: 5,
        repeat: -1
    });
}
exports.default = playerAnimation;


/***/ }),

/***/ "./src/controls.ts":
/*!*************************!*\
  !*** ./src/controls.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//This file sets up the controls for the player
Object.defineProperty(exports, "__esModule", { value: true });
function controls(scene, player) {
    var controls = scene.input.keyboard.createCursorKeys();
    // TODO: Cut controls out into function. CLean up function with fewer if statements.
    if (!controls.up.isDown && !controls.down.isDown && !controls.left.isDown && !controls.right.isDown) {
        player.anims.play('idle', true);
    }
    if (controls.up.isDown) {
        player.body.setVelocityY(-50);
        player.anims.play('walk_up', true);
    }
    else if (controls.down.isDown) {
        player.body.setVelocityY(50);
        player.anims.play('walk_down', true);
    }
    else {
        player.body.setVelocityY(0);
    }
    if (controls.left.isDown) {
        player.body.setVelocityX(-50);
        if (controls.down.isDown) {
            player.anims.play('walk_down', true);
        }
        else if (controls.up.isDown) {
            player.anims.play('walk_up', true);
        }
        else {
            player.flipX = true;
            player.anims.play('walk_sideways', true);
        }
    }
    else if (controls.right.isDown) {
        player.body.setVelocityX(50);
        if (controls.down.isDown) {
            player.anims.play('walk_down', true);
        }
        else if (controls.up.isDown) {
            player.anims.play('walk_up', true);
        }
        else {
            player.flipX = false;
            player.anims.play('walk_sideways', true);
        }
    }
    else {
        player.body.setVelocityX(0);
    }
}
exports.default = controls;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.GameScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var controls_1 = __webpack_require__(/*! ./controls */ "./src/controls.ts");
var playerAnimation_1 = __webpack_require__(/*! ./animations/playerAnimation */ "./src/animations/playerAnimation.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.player = null;
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.spritesheet('hero', 'assets/chara_hero.png', { frameWidth: 48, frameHeight: 48 });
    };
    GameScene.prototype.create = function () {
        this.player = this.add.sprite(48, 48, 'hero');
        this.physics.add.existing(this.player);
        this.player.setScale(1.5, 1.5);
        // Imports animations from animations.ts
        playerAnimation_1.default(this);
    };
    GameScene.prototype.update = function () {
        // Imports game controls from controls.ts
        controls_1.default(this, this.player);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
var gameConfig = {
    title: 'The Littlest Hero',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    scene: GameScene,
    parent: 'game',
    backgroundColor: '#000000',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/main.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/red/projects/Talaria/node_modules/webpack-dev-server/client/index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvcGxheWVyQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FB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Q0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDRSx5Q0FBeUM7UUFDekMsa0JBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLENBMUI4QixNQUFNLENBQUMsS0FBSyxHQTBCMUM7QUExQlksOEJBQVM7QUE0QnhCLElBQU0sVUFBVSxHQUFpQztJQUM3QyxLQUFLLEVBQUUsbUJBQW1CO0lBRTFCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUVqQixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7UUFDeEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQzdCO0lBRUQsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ0osS0FBSyxFQUFFLElBQUk7U0FDZDtLQUNKO0lBRUQsS0FBSyxFQUFFLFNBQVM7SUFFaEIsTUFBTSxFQUFFLE1BQU07SUFDZCxlQUFlLEVBQUUsU0FBUztDQUM3QjtBQUVZLFlBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuZnVuY3Rpb24gcGxheWVyQW5pbWF0aW9uKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcbiAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdpZGxlJyxcbiAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnaGVybycsIHsgc3RhcnQ6IDAsIGVuZDogMiB9KSxcbiAgICAgICAgZnJhbWVSYXRlOiA1LFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSk7XG5cbiAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ3dhbGtfZG93bicsXG4gICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2hlcm8nLCB7c3RhcnQ6IDgsIGVuZDogMTF9KSxcbiAgICAgICAgZnJhbWVSYXRlOiA1LFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgICB9KVxuXG4gICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICd3YWxrX3VwJyxcbiAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnaGVybycsIHtzdGFydDogMTYsIGVuZDogMTl9KSxcbiAgICAgICAgZnJhbWVSYXRlOiA1LFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgICB9KVxuXG4gICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICd3YWxrX3NpZGV3YXlzJyxcbiAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnaGVybycsIHtzdGFydDogMTIsIGVuZDogMTV9KSxcbiAgICAgICAgZnJhbWVSYXRlOiA1LFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJBbmltYXRpb24iLCIvL1RoaXMgZmlsZSBzZXRzIHVwIHRoZSBjb250cm9scyBmb3IgdGhlIHBsYXllclxuXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5mdW5jdGlvbiBjb250cm9scyAoc2NlbmU6IFBoYXNlci5TY2VuZSwgcGxheWVyOlBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH0pIHtcbiAgICBjb25zdCBjb250cm9scyA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcblxuICAgICAgLy8gVE9ETzogQ3V0IGNvbnRyb2xzIG91dCBpbnRvIGZ1bmN0aW9uLiBDTGVhbiB1cCBmdW5jdGlvbiB3aXRoIGZld2VyIGlmIHN0YXRlbWVudHMuXG4gICAgICBpZighY29udHJvbHMudXAuaXNEb3duICYmICFjb250cm9scy5kb3duLmlzRG93biAmJiAhY29udHJvbHMubGVmdC5pc0Rvd24gJiYgIWNvbnRyb2xzLnJpZ2h0LmlzRG93bil7XG4gICAgICAgIHBsYXllci5hbmltcy5wbGF5KCdpZGxlJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvbnRyb2xzLnVwLmlzRG93bil7XG4gICAgICAgIHBsYXllci5ib2R5LnNldFZlbG9jaXR5WSgtNTApO1xuICAgICAgICBwbGF5ZXIuYW5pbXMucGxheSgnd2Fsa191cCcsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihjb250cm9scy5kb3duLmlzRG93bil7XG4gICAgICAgIHBsYXllci5ib2R5LnNldFZlbG9jaXR5WSg1MCk7XG4gICAgICAgIHBsYXllci5hbmltcy5wbGF5KCd3YWxrX2Rvd24nLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwbGF5ZXIuYm9keS5zZXRWZWxvY2l0eVkoMCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvbnRyb2xzLmxlZnQuaXNEb3duKXtcbiAgICAgICAgcGxheWVyLmJvZHkuc2V0VmVsb2NpdHlYKC01MCk7XG4gICAgICAgIGlmKGNvbnRyb2xzLmRvd24uaXNEb3duKSB7XG4gICAgICAgICAgcGxheWVyLmFuaW1zLnBsYXkoJ3dhbGtfZG93bicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29udHJvbHMudXAuaXNEb3duKSB7XG4gICAgICAgICAgcGxheWVyLmFuaW1zLnBsYXkoJ3dhbGtfdXAnLCB0cnVlKVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIuZmxpcFggPSB0cnVlO1xuICAgICAgICAgIHBsYXllci5hbmltcy5wbGF5KCd3YWxrX3NpZGV3YXlzJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY29udHJvbHMucmlnaHQuaXNEb3duKXtcbiAgICAgICAgcGxheWVyLmJvZHkuc2V0VmVsb2NpdHlYKDUwKTtcbiAgICAgICAgaWYoY29udHJvbHMuZG93bi5pc0Rvd24pIHtcbiAgICAgICAgICBwbGF5ZXIuYW5pbXMucGxheSgnd2Fsa19kb3duJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjb250cm9scy51cC5pc0Rvd24pIHtcbiAgICAgICAgICBwbGF5ZXIuYW5pbXMucGxheSgnd2Fsa191cCcsIHRydWUpXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBsYXllci5mbGlwWCA9IGZhbHNlO1xuICAgICAgICAgIHBsYXllci5hbmltcy5wbGF5KCd3YWxrX3NpZGV3YXlzJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwbGF5ZXIuYm9keS5zZXRWZWxvY2l0eVgoMCk7XG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xzIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCBjb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuaW1wb3J0IHBsYXllckFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbnMvcGxheWVyQW5pbWF0aW9uJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXk6ICdHYW1lJyxcbiAgfTtcbiAgXG4gIGV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHByaXZhdGUgcGxheWVyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG5cbiAgICAgIHRoaXMucGxheWVyID0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdoZXJvJywgJ2Fzc2V0cy9jaGFyYV9oZXJvLnBuZycsIHsgZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OCB9KVxuICAgIH1cbiAgIFxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICB0aGlzLnBsYXllciA9IHRoaXMuYWRkLnNwcml0ZSg0OCwgNDgsICdoZXJvJywgKSBhcyBhbnk7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMucGxheWVyKTtcbiAgICAgIHRoaXMucGxheWVyLnNldFNjYWxlKDEuNSwgMS41KVxuXG4gICAgICAvLyBJbXBvcnRzIGFuaW1hdGlvbnMgZnJvbSBhbmltYXRpb25zLnRzXG4gICAgICBwbGF5ZXJBbmltYXRpb24odGhpcyk7XG4gICAgfVxuICAgXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICAgIC8vIEltcG9ydHMgZ2FtZSBjb250cm9scyBmcm9tIGNvbnRyb2xzLnRzXG4gICAgICBjb250cm9scyh0aGlzLCB0aGlzLnBsYXllcilcbiAgICB9XG4gIH1cblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgICB0aXRsZTogJ1RoZSBMaXR0bGVzdCBIZXJvJyxcblxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gICAgc2NhbGU6IHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICB9LFxuXG4gICAgcGh5c2ljczoge1xuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICAgICAgYXJjYWRlOiB7XG4gICAgICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2NlbmU6IEdhbWVTY2VuZSxcblxuICAgIHBhcmVudDogJ2dhbWUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxufVxuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=