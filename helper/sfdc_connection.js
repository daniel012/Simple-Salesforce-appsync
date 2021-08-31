var jsforce = require('jsforce');
const { SDFC_USER, SFDC_TOKEN, SFDC_URL, SDFC_PASSWORD } = process.env;

module.exports.setupJsForcePool = async () => {
  let conn = new jsforce.Connection();
  conn.loginUrl = SFDC_URL;
  await conn.login(SDFC_USER, SDFC_PASSWORD + SFDC_TOKEN);
  return conn;
};