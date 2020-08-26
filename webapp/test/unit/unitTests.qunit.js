/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"secondproject/Z_secondProject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});