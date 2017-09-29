async function functionA() {
  var resultB = exports.functionB();
  return resultB;
}

function functionB() {
  return 'FuncB';
}

exports.functionA = functionA;
exports.functionB = functionB;
