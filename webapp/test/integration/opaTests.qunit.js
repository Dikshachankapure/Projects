/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"secondproject/Z_secondProject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});