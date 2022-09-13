Ext.define('DefectEntryHistory.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  /**
   * Called when the view initializes. This is called after the view's
   * initComponent method has been called.
   *
   */
  init() {
    this.getApplicationInfo();
  },

  /**
   * Get the application info.
   *
   */
  getApplicationInfo() {
    Ext.Ajax.request({
      url: `/api/rdeq_level2/applications/17126`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
      scope: this,
      success: 'requestSuccess',
    });
  },

  /**
   * Export to excell
   */
  export() {
    const grid = this.lookup('gridArea');

    grid.saveDocumentAs({
      type: 'xlsx',
      title: 'Defect Entry History',
      fileName: `defectEntryHistory-${Ext.Date.format(
        new Date(),
        'Y-m-d',
      )}.xlsx`,
    });
  },

  onHelp() {
    // adding wiki documentation link on help
    window.open(this.getViewModel().get('application.help'));
  },

  /**
   * Handles the follow-up after successfully completing the Ajax request.
   *
   * @param {object} response The XmlHttpRequest (Ajax) response.
   * @param {object} options  The parameters to the request call.
   */
  requestSuccess(response, options) {
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
    // const SIGN_OUT = this.lookupReference('signOutButton');

    if (options.url === `/api/rdeq_level2/applications/17126`) {
      MAIN.set('application.help', RESPONSE.data.webHelpLink);
      MAIN.set('application.name', RESPONSE.data.name);
    }
  },
});
