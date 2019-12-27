const cron = require("node-cron");

const server = (module.exports = {
  cronJob: null,
  scheduledJob: function(pattern) {
    server.cronJob = cron.schedule(pattern, () => {
      server.run();
    });
  },
  run: function() {
    console.log("run called");
  },
});
