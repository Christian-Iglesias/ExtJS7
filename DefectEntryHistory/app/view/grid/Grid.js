Ext.define('DefectEntryHistory.view.grid.Grid', {
  extend: 'Ext.grid.Panel',

  viewModel: {
    type: 'gridmodel',
  },

  xtype: 'grid',

  requires: ['DefectEntryHistory.view.grid.GridModel'],
  width: '100%',
  bind: {
    store: '{grid}',
  },
  emptyText: 'No data to display',
  columns: {
    defaults: {
      flex: 2,
      xtype: 'gridcolumn',
    },
    items: [
      {
        dataIndex: 'entryDate',
        text: 'Entry Date',
        flex: 2,
        format: 'Y-m-d H:i:s',
        xtype: 'datecolumn',
        tooltip: 'Date defect entered',
      },
      {
        dataIndex: 'updateDate',
        text: 'Transaction Date',
        format: 'Y-m-d H:i:s',
        xtype: 'datecolumn',
      },
      {
        text: 'Transaction Type',
        dataIndex: 'transactionType',
        tooltip: 'INS, UPD, or DEL',
      },
      {
        text: 'Classifier',
        dataIndex: 'classifier',
        tooltip: 'Employee identification',
      },
      {
        dataIndex: 'barcode',
        text: 'Barcode',
        flex: 2,
        tooltip: 'Label Identification on the Tire',
      },
      {
        dataIndex: 'disposition',
        text: 'Disposition',
        tooltip: 'Defect category (e.g. 1=Scrap, 2=OE, etc.)',
      },
      {
        dataIndex: 'defectType',
        text: 'Defect Type',
        tooltip: 'Defect type: (G=green, C=Cure)',
      },
      {
        dataIndex: 'defectNum',
        text: 'Defect Number',
        xtype: 'numbercolumn',
        format: '0',
        tooltip: 'Unique number classifying defect (17=UPSIDEDOWNTIRE, etc.)',
      },
      {
        text: 'Defect Desc',
        flex: 3,
        tooltip: 'Defect Description',
        dataIndex: 'longDesc',
      },
      {
        dataIndex: 'tireCode',
        text: 'Tire Code',
        tooltip: 'Tire identification code',
      },
      {
        dataIndex: 'press',
        text: 'Press',
        tooltip: 'Press name the tire was made on',
      },
      {
        dataIndex: 'builderStage2',
        text: 'Builder Stage 2',
        tooltip: '2nd stage builder',
      },
      {
        dataIndex: 'tbmStage2',
        text: 'TBM Stage 2',
        tooltip: 'Stage 2 tire building machine',
      },
      {
        dataIndex: 'tbmStage2Date',
        text: 'TBM Stage 2 Date',
        tooltip: 'Stage 2 tire building machine date',
      },
    ],
  },
  bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true,
  },
  plugins: [
    {
      ptype: 'gridexporter',
    },
  ],
});
