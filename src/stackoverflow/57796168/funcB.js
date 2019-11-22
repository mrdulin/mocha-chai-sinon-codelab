const a = require("./a");

const funcB = () => a.funcA({ arg: 123 });

exports.funcB = funcB;
