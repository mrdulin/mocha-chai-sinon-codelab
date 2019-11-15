exports.getTimes = async function getTimes(request, response) {
  let slots;
  const params = {};
  const promises = [Promise.resolve(1), Promise.resolve(2)];
  slots = await exports.processTimes(params, promises);
  response.status(200).json(slots);
};

exports.processTimes = async function processTimes(params, promises) {
  return Promise.all(promises);
};
