sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/ui/core/routing/History"
], function(Controller, formatter, History) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {

		    self = this;

		},
		press: function(tile) {

			var selectedData = {};
			sap.ui.core.BusyIndicator.show(0);
			this.getData(tile).done(function(result) {
				var oModel = new sap.ui.model.json.JSONModel(result.d);
				sap.ui.getCore().setModel(oModel, "DashboardAnalyticsModel");
				self.routeToApp(tile);

			}).fail(function(result) {
				console.log(result);
			});

		},
		onNavBack: function() {

			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				this.getRouter().navTo("home", {}, true);
			}

		},

		getData: function(url){
			return jQuery.ajax({
				url: url,
				type: "GET"
			});
		},

		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		routeToApp: function(tile) {
			self.getRouter().navTo(tile, {});

		},
	});
});