function getUpdateArgs(Request) {
  console.log("func called");
}

function accountsUpdate(req, res) {
  const args = exports.getUpdateArgs(req.body);
}

exports.getUpdateArgs = getUpdateArgs;
exports.accountsUpdate = accountsUpdate;
