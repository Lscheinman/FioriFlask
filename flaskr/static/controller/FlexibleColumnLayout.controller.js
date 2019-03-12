sap.ui.define([
	"sap/ui/demo/basicTemplate/controller/App.controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(AppController, Filter, FilterOperator, JSONModel, MessageToast) {
	"use strict";

	var self;
	return AppController.extend("sap.ui.demo.basicTemplate.controller.FlexibleColumnLayout", {

		onInit: function() {

			this.oModelSettings = new JSONModel({
				maxIterations: 200,
				maxTime: 500,
				initialTemperature: 200,
				coolDownStep: 1
			});
			this.getView().setModel(this.oModelSettings, "settings");
			this.getView().setModel(sap.ui.getCore().getModel("DashboardAnalyticsModel"), "DashboardAnalyticsModel");
			sap.ui.core.BusyIndicator.hide(0);
		}
	});
});