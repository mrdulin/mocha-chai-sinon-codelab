const getAuthenticationInfo = (orgId) => {
  return "TEST";
};
const getAuthToken = (orgId) => {
  const lmsInfo = exports.getAuthenticationInfo(orgId);
  return lmsInfo;
};

exports.getAuthenticationInfo = getAuthenticationInfo;
exports.getAuthToken = getAuthToken;
