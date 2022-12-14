Ext.define('DefectEntryHistory.view.main.Main', {
  extend: 'Ext.panel.Panel',

  controller: 'main',
  viewModel: {
    type: 'main',
  },
  requires: [
    'DefectEntryHistory.view.main.MainController',
    'DefectEntryHistory.view.main.MainModel',
    'DefectEntryHistory.view.grid.Grid',
    'DefectEntryHistory.view.form.Config',
  ],
  xtype: 'app-main',
  layout: 'border',
  bind: {
    title: '{ application.name }',
  },
  dockedItems: [
    {
      dock: 'top',
      items: [
        '->',
        {
          xtype: 'button',
          iconCls: 'fa fa-file-excel',
          listeners: {
            click: 'export',
          },
          reference: 'exportButton',
          text: 'Export',
          margin: '0 5 0 5',
          tooltip: 'Export to Excel',
          disabled: true,
        },
        {
          xtype: 'button',
          iconCls: 'x-fa fa-question',
          listeners: {
            click: 'onHelp',
          },
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
  plugins: [
    {
      ptype: 'gridexporter',
    },
  ],
});
