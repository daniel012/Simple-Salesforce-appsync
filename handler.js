'use strict';
const { setupJsForcePool } = require('helper/sfdc_connection');

module.exports.sfdcLambda = async (event, context) => {
  let conn;
  
  try {
    if (!conn) conn = await setupJsForcePool();
    const { 
      arguments: { parameter },
      selectionSetList } = event;
    console.log('hello I am a parameter: ', parameter);
    const response = {};
      if(selectionSetList.includes('account')){
        // Do some account query
        console.log('searching account info');
        const QUERY = `SELECT Name From Account limit 1`;
        const resultQuery = await conn.query(QUERY);
        response['account'] = resultQuery.records[0].Name;
      }
      if(selectionSetList.includes('user')){
        // Do some user query
        console.log('searching user info');
        const QUERY = `SELECT Name From User limit 1`;
        const resultQuery = await conn.query(QUERY);
        response['user'] = resultQuery.records[0].Name;
      }
    return response;
  } catch (e) {
    console.log('this is the error', e)
    context.fail('error message');
    return null;
  }
};
