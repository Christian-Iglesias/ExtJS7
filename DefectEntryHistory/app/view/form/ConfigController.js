Ext.define('DefectEntryHistory.view.form.ConfigController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.form-configform',

  /**
   * Submits the form data.
   *
   */
  onSubmitForm() {
    const startDate = Ext.Date.format(
      this.lookup('startDate').getValue(),
      'Y/m/d',
    );
    const startTime = Ext.Date.format(
      this.lookup('startTime').getValue(),
      'G:i:s',
    );
    const endDate = Ext.Date.format(this.lookup('endDate').getValue(), 'Y/m/d');
    const endTime = Ext.Date.format(this.lookup('endTime').getValue(), 'G:i:s');

    const store = Ext.getStore('grid');

    const filterArray = [
      {
        operator: 'gt',
        property: 'updateDate',
        value: `${startDate} ${startTime}`,
      },
      {
        operator: 'lt',
        property: 'updateDate',
        value: `${endDate} ${endTime}`,
      },
    ];

    store
      .getProxy()
      .setExtraParam(
        'sort',
        JSON.stringify([{ property: 'updateDate', direction: 'DESC' }]),
      );
    store.getProxy().setExtraParam('filter', JSON.stringify(filterArray));
    store.load();
  },

  onResetForm() {
    this.getView().getForm().reset();
  },

  // To check if an array is empty using javascript
  arrayIsEmpty(array) {
    // If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
      return false;
    }
    // If it is an array, check its length property
    if (array.length === 0) {
      // Return TRUE if the array is empty
      return true;
    }
    // Otherwise, return FALSE.
    return false;
  },
});