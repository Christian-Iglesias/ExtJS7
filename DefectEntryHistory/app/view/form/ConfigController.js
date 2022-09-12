Ext.define('DefectEntryHistory.view.form.ConfigController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.form-configform',

  init() {
    this.getApplicationOptions();
  },

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

    const transactionType = this.lookup('transactionType').getValue();
    const defectType = this.lookup('defectType').getGroupValue();
    const classifier = this.lookup('classifier').getValue();
    const barcode = this.lookup('barcode').getValue();
    const disposition = this.lookup('disposition').getValue();
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

    if (!this.arrayIsEmpty(transactionType)) {
      filterArray.push({
        operator: 'in',
        property: 'transactionType',
        value: transactionType,
      });
    }

    if (defectType) {
      filterArray.push({
        operator: 'like',
        property: 'defectType',
        value: defectType,
      });
    }

    if (classifier) {
      filterArray.push({
        operator: 'like',
        property: 'classifier',
        value: classifier,
      });
    }

    if (barcode) {
      filterArray.push({
        operator: 'like',
        property: 'barcode',
        value: barcode,
      });
    }

    if (disposition) {
      filterArray.push({
        operator: 'eq',
        property: 'disposition',
        value: disposition,
      });
    }

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

  /**
   * Get the application info.
   *
   */
  getApplicationOptions() {
    Ext.Ajax.request({
      url: `/api/rdeq_level2/applications/17126/options`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
      scope: this,
    });
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
