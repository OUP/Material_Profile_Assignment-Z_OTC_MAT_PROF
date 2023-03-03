sap.ui.define([], function () {
  "use strict";
  return {
    onInit: function () {
      const sViewId = this.getView().getId();
      const sId = `${sViewId}--listReport`;

      // responsive table
      const oTable = this.byId(sId);

      // enable export button
      oTable.setUseExportToExcel(true);
    },
  };
});
