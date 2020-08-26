sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("secondproject.Z_secondProject.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("jasondata/employee.json");
			this.getView().setModel(oModel);
		},

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onAdd: function () {
			this.getRouter().navTo("page2", {}, true);

		},
		onEdit: function (oEvent) {
			var objEmp = oEvent.getSource().getBindingContext().getObject();
			this.getRouter().navTo("page2", {
				EmpNo: objEmp.EmpNo
			});

		},
	onDelete: function (oEvent) {

			var oList = this.byId("tblEmployees");

			var aItems = oList.getItems();
			var oModelItems = oList.getModel();
			var values = oModelItems.getData();

			var oDelete = oEvent.getSource().getBindingContext().getObject();
			if (aItems.length > 0) {
				for (var i = 0; i < values.EmployeeSet.length; i++) {
					if (values.EmployeeSet[i].EmpNo === oDelete.EmpNo) {
						//	pop this._data.Products[i] 
						values.EmployeeSet.splice(i, 1);
						oModelItems.refresh();
						break;
					}
				}

				oModelItems.setData(values);
				oList.setModel(oModelItems);
			}

		},
		onSearch: function () {

		}
	});
});