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
      url: `/api/rdeq_level2/applications/${this.getViewModel().get(
        'application.id',
      )}/options`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
      scope: this,
      success: 'requestOptionSuccess',
    });
  },

  /**
   * Handles the follow-up after successfully completing the Ajax request.
   *
   * @param {object} response The XmlHttpRequest (Ajax) response.
   * @param {object} options  The parameters to the request call.
   */
  requestOptionSuccess(response, options) {
    /**
     * @type {object} The main viewmodel.
     */
    const MAIN = this.getViewModel();

    /**
     * @type {object} The response status text from the AJAX request.
     */
    const RESPONSE = Ext.decode(response.responseText);

    /**
     * @type {object} The sign out button.
     */

    if (
      options.url ===
      `/api/rdeq_level2/applications/${MAIN.get('application.id')}/options`
    ) {
      MAIN.set('application.options', RESPONSE.data);

      this.loadDefaultValues();
    }
  },
  /**
   * Loads the default values for the required form fields.
   */
  loadDefaultValues() {
    /**
     * @type {object} The values to use for the form fields.
     */
    const VALUES = {};

    this.getViewModel()
      .getParent()
      .get('application.options')
      .forEach((record) => {
        if (record.fieldName === 'dateToSearch') {
          VALUES[record.fieldName] = this.camalize(record.deflt);
        } else {
          VALUES[record.fieldName] = record.deflt;
        }
      });

    VALUES.endDate = new Date();
    VALUES.startDate = new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .substring(0, 10);

    this.getView()
      .getForm()
      .getFields()
      .items.forEach((field) => {
        if (field.name in VALUES) {
          field.setValue(VALUES[field.name]);
        }
      });
  },

  /**
   * Camelize string
   *
   * @param {string} str Passed string
   * @returns {string} Camelized string
   */
  camalize(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
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
  /**
   * Adds a tooltip to the supplied component based on the configured
   * reference property.
   *
   * @param {object} component The object to add the tooltip.
   */
  addToolTip(component) {
    /**
     * @type {Ext.app.ViewModel} The main viewmodel.
     */
    const MAIN = this.getViewModel().getParent();

    /**
     * @type {string} The string to use for the tooltip.
     */
    let html = MAIN.get('tooltip.default');

    if (component.reference in MAIN.get('tooltip')) {
      html = MAIN.get(`tooltip.${component.reference}`);
    }

    Ext.create('Ext.tip.ToolTip', {
      html,
      target: component.id,
      maxWidth: 300,
      width: '100%',
    });
  },

  /**
   * Handles afterrender event actions.
   *
   * @param {object} component The component triggering the afterrender event.
   */
  onAfterrender(component) {
    this.addToolTip(component);
  },
});
