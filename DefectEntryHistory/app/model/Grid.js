/**/
Ext.define('DefectEntryHistory.model.Grid', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'entryDate', type: 'date', format: 'Y-m-d H:i:s' },
    { name: 'updateDate', type: 'date', format: 'Y-m-d H:i:s' },
    { name: 'transactionType', type: 'string' },
    { name: 'classifier', type: 'string' },
    { name: 'barcode', type: 'string' },
    { name: 'disposition', type: 'string' },
    { name: 'defectType', type: 'string' },
    { name: 'defectNum', type: 'int' },
    { name: 'defectDesc', type: 'string' },
    { name: 'tireCode', type: 'string' },
    { name: 'press', type: 'string' },
    { name: 'builderStage2', type: 'string' },
    { name: 'tbmStage2', type: 'string' },
    { name: 'tbmStage2Date', type: 'date', format: 'Y-m-d H:i:s' },
  ],
});
