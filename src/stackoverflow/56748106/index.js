const async = require("async");
const arr = [
  { name: "job1", delay: 100 },
  { name: "job2", delay: 200 },
  { name: "job3", delay: 300 },
];

function main() {
  async.eachLimit(arr, 3, iteratee, function(error) {
    console.log(error);
  });
}

function iteratee(job, callback) {
  console.log(`Execute the job: ` + job.name);
  setTimeout(function() {
    callback(null, job.name);
  }, job.delay);
}

module.exports = {
  main,
  iteratee,
};
