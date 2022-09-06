Ext.define('DefectEntryHistory.view.form.ConfigModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.form-configform',
  requires: ['DefectEntryHistory.model.Combobox'],

  stores: {
    users: {
      model: 'DefectEntryHistory.model.Combobox',
      proxy: {
        reader: {
          rootProperty: 'data',
          totalProperty: 'total',
          type: 'json',
        },
        timeout: 1800000,
        type: 'ajax',
        url: '/api/rdeq_level2/users',
      },

      listeners: {
        load() {
          this.add({ USERNAME: 'AUTO' });
        },
      },
      storeId: 'users',
      autoLoad: true,
      sorters: [
        {
          property: 'USERNAME',
          direction: 'ASC',
        },
      ],
    },
  },
});
