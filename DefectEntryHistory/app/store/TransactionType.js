/**
 * Provides the transaction type store for the application.
 *
 * @author    ac29089 <christian_iglesias@goodyear.com>
 * @copyright 2021 The Goodyear Tire & Rubber Company
 */

Ext.define('DefectEntryHistory.store.TransactionType', {
  extend: 'Ext.data.Store',
  alias: 'store.transactionType',
  data: [
    { value: 'UPD', fieldName: 'UPD' },
    { value: 'INS', fieldName: 'INS' },
    { value: 'DEL', fieldName: 'DEL' },
  ],
  fields: [
    { name: 'fieldName', type: 'string' },
    { name: 'value', type: 'string' },
  ],
});
