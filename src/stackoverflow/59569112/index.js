window.DY = window.DY || {};
window.DY.API = function(event, obj) {
  // Your real implementation
};

module.exports = function trackCustomDyEvents(events) {
  const $ = require("jquery");
  trackEvents();
  function trackEvents() {
    events.forEach((event) => {
      $(document).on(event.type, event.element, () => {
        if (!event.predicate()) return;
        window.DY.API("event", {
          name: event.name,
        });
      });
    });
  }
};
