const getAuthenticationInfo = orgId => {
  return 'TEST';
};
const getAuthToken = orgId => {
  var lmsInfo = exports.getAuthenticationInfo(orgId);
  return lmsInfo;
};

exports.getAuthenticationInfo = getAuthenticationInfo;
exports.getAuthToken = getAuthToken;
