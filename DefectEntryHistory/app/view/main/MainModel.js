/**/
Ext.define('DefectEntryHistory.view.main.MainModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.main',

  data: {
    application: {
      help: null,
      id: 17126,
      name: null,
      options: null,
    },
    error: {
      404: 'The resource does not exist.',
      405: 'The request method is known by the server but has been disabled and cannot be used.',
      406: 'Cannot produce a response matching the list of acceptable values.',
      500: 'The server was unable to complete the request.  Please try again.  If the error continues, then please contact your local IT Dept for assistance.',
    },
    tooltip: {
      default: 'Tooltip needs configuring.',
      startTime: 'Uses UPDATE_DATE to limit the beginning time of the report.',
      startDate: 'Uses UPDATE_DATE to limit the beginning date of the report.',
      endTime: 'Uses UPDATE_DATE to limit the ending time of the report.',
      endDate: 'Uses UPDATE_DATE to limit the ending date of the report.',
      transactionType:
        'You can filter out (only display) those defect entry history rows matching the specified transaction type (INS, UPD, DEL). Empty value turns off this type of filtering.',
      classifier:
        'You can filter out (only display) those defect entry history rows matching the specified classifier. Empty value turns off this type of filtering.',
      barcode:
        'You can filter out (only display) those defect entry history rows matching the specified barcode. Empty value turns off this type of filtering.',
      disposition:
        'You can filter out (only display) those defect entry history rows matching the specified disposition. Empty value turns off this type of filtering.',
      defectTypeRef:
        "Filter to limit the report's output by defect type. e.g. (C)ure or (G)reen. Empty value turns off this type of filtering.",
    },
  },
});
