Ext.define('DefectEntryHistory.view.main.Main', {
  extend: 'Ext.panel.Panel',

  viewModel: {
    type: 'main',
  },
  requires: [
    'DefectEntryHistory.view.main.MainModel',
    'DefectEntryHistory.view.grid.Grid',
    'DefectEntryHistory.view.form.Config',
  ],
  xtype: 'app-main',
  layout: 'border',
  title: 'Defect Entry History Rpt',
  dockedItems: [
    {
      dock: 'top',
      items: [
        '->',
        {
          xtype: 'button',
          iconCls: 'fa fa-file-excel',
          reference: 'exportButton',
          text: 'Export',
          margin: '0 5 0 5',
          tooltip: 'Export to Excel',
          disabled: true,
        },
        {
          xtype: 'button',
          iconCls: 'x-fa fa-question',
          margin: '0 5 0 5',
          tooltip: 'View Help',
        },
      ],
      xtype: 'toolbar',
    },
  ],
  items: [
    {
      region: 'center',
      layout: 'fit',
      items: [
        {
          xtype: 'grid',
          reference: 'gridArea',
        },
      ],
    },
    {
      xtype: 'form-configform',
      region: 'east',
    },
  ],
});
