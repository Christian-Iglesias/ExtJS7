Ext.define('DefectEntryHistory.view.form.Config', {
  extend: 'Ext.form.Panel',

  controller: 'form-configform',
  viewModel: {
    type: 'form-configform',
  },

  xtype: 'form-configform',

  requires: [
    'DefectEntryHistory.view.form.ConfigController',
    'DefectEntryHistory.view.form.ConfigModel',
    'DefectEntryHistory.store.Disposition',
  ],

  collapsible: true,
  defaults: {
    xtype: 'fieldset',
  },

  layout: 'form',
  title: 'Report Configuration',

  items: [
    {
      title: 'Required',
      xtype: 'fieldset',
      defaultType: 'textfield',
      defaults: {
        labelAlign: 'right',
        labelWidth: 125,
        allowBlank: false,
      },

      items: [
        {
          fieldLabel: 'Start Date',
          format: 'Y/m/d',
          maxValue: new Date(),
          name: 'startDate',
          reference: 'startDate',
          xtype: 'datefield',
          allowBlank: false,
        },
        {
          fieldLabel: 'Start Time',
          format: 'H:i:s',
          name: 'startTime',
          reference: 'startTime',
          xtype: 'timefield',
          allowBlank: false,
        },
        {
          fieldLabel: 'End Date',
          format: 'Y/m/d',
          maxValue: new Date(),
          name: 'endDate',
          reference: 'endDate',
          xtype: 'datefield',
          allowBlank: false,
        },
        {
          fieldLabel: 'End Time',
          format: 'H:i:s',
          name: 'endTime',
          reference: 'endTime',
          xtype: 'timefield',
          allowBlank: false,
        },
      ],
    },
    {
      title: 'Optional',
      xtype: 'fieldset',
      defaultType: 'textfield',
      defaults: {
        labelAlign: 'right',
        labelWidth: 125,
        allowBlank: true,
      },
      items: [
        {
          xtype: 'tagfield',
          fieldLabel: 'Transaction Type:',
          reference: 'transactionType',
          name: 'transactionType',
          displayField: 'fieldName',
          queryMode: 'local',
          valueField: 'value',
          filterPickList: true,
        },
        {
          xtype: 'combobox',
          fieldLabel: 'Classifier:',
          reference: 'classifier',
          bind: {
            store: '{users}',
          },
          displayField: 'USERNAME',
          queryMode: 'local',
          valueField: 'USERNAME',
          forceSelection: true,
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Barcode:',
          reference: 'barcode',
        },
        {
          xtype: 'combobox',
          fieldLabel: 'Disposition:',
          reference: 'disposition',
          displayField: 'fieldName',
          queryMode: 'local',
          valueField: 'value',
          store: {
            type: 'disposition',
          },
        },
        {
          xtype: 'fieldcontainer',
          fieldLabel: 'Defect Type',
          defaultType: 'radiofield',
          defaults: {
            flex: 1,
          },
          reference: 'defectTypeRef',
          layout: 'vbox',
          items: [
            {
              boxLabel: 'Cure',
              name: 'defectType',
              inputValue: 'C',
              id: 'radio1',
              reference: 'defectType',
            },
            {
              boxLabel: 'Green',
              name: 'defectType',
              inputValue: 'G',
              id: 'radio2',
              reference: 'defectType',
            },
          ],
        },
      ],
    },
  ],
  buttons: [
    {
      listeners: {
        click: 'onResetForm',
      },
      text: 'Reset',
      tooltip: 'Click to reset the form and report values.',
    },
    {
      text: 'Submit',
      formBind: true,
      listeners: {
        click: 'onSubmitForm',
      },
      tooltip: 'Click to submit the form and load the report data.',
    },
  ],
});
