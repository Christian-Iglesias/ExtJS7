/**/
Ext.define('DefectEntryHistory.view.grid.GridModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.gridmodel',

  requires: [
    'Ext.data.proxy.Ajax',
    'Ext.data.reader.Json',
    'DefectEntryHistory.model.Grid',
  ],

  stores: {
    grid: {
      model: 'DefectEntryHistory.model.Grid',
      pageSize: 50,
      proxy: {
        url: '/api/defect/v1/simpleReports/defectEntryHistory',
        extraParams: {
          limit: 500,
        },
        reader: {
          rootProperty: 'data',
          totalProperty: 'total',
          type: 'json',
        },
        type: 'ajax',
        timeout: 300000,
      },
      storeId: 'grid',
      autoLoad: false,
      remoteSort: false,
      remoteFilter: true,
      sorters: [{ direction: 'ASC', property: 'updateDate' }],
    },
  },
});
