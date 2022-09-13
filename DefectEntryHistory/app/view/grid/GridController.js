Ext.define('DefectEntryHistory.view.grid.GridController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.gridctlr',

  /**
   * Handles the load of grid store.
   *
   * @param {object}  store      The store.
   * @param {object}  records    The records.
   * @param {boolean} successful True if the operation was successful.
   */
  onLoad(store, records, successful) {
    if (successful) {
      this.getView().up('panel').up('panel').lookup('exportButton').enable();
    }
    if (!successful) {
      Ext.Msg.show({
        title: 'Form Status',
        message: 'Not Found: The resource does not exist.',
        width: 300,
        buttons: Ext.MessageBox.OK,
      });
      store.removeAll();
    }
  },
});
