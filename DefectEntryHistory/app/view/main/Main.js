Ext.define('DefectEntryHistory.view.main.Main', {
  extend: 'Ext.panel.Panel',

  requires: ['DefectEntryHistory.view.form.Config'],
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
      xtype: 'form-configform',
      region: 'east',
    },
  ],
});
