/**
 * Provides the disposition store for the application.
 *
 * @author    ac29089 <christian_iglesias@goodyear.com>
 * @copyright 2021 The Goodyear Tire & Rubber Company
 */

Ext.define('DefectEntryHistory.store.Disposition', {
  extend: 'Ext.data.Store',
  alias: 'store.disposition',
  data: [
    { value: '1', fieldName: '1' },
    { value: '2', fieldName: '2' },
    { value: '3', fieldName: '3' },
    { value: '4', fieldName: '4' },
    { value: '5', fieldName: '5' },
    { value: '6', fieldName: '6' },
    { value: '7', fieldName: '7' },
    { value: '8', fieldName: '8' },
    { value: '9', fieldName: '9' },
  ],
  fields: [
    { name: 'fieldName', type: 'string' },
    { name: 'value', type: 'string' },
  ],
});
