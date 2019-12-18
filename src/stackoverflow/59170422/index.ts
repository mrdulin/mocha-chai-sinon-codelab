import PubNub from "pubnub";

// console.log("PubNub.prototype.addListener: ", PubNub.prototype.addListener);
// console.log("PubNub.prototype: ", JSON.stringify(PubNub.prototype));

export const pubnub = new PubNub({
  publishKey: "demo",
  subscribeKey: "demo",
});

export function publish() {
  function publishSampleMessage() {
    console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
    const publishConfig = {
      channel: "hello_world",
      message: {
        title: "greeting",
        description: "hello world!",
      },
    };
    pubnub.publish(publishConfig, function(status, response) {
      console.log(status, response);
    });
  }
  pubnub.addListener({
    status: function(statusEvent) {
      if (statusEvent.category === "PNConnectedCategory") {
        publishSampleMessage();
      }
    },
    message: function(msg) {
      console.log(msg.message.title);
      console.log(msg.message.description);
    },
    presence: function(presenceEvent) {
      // handle presence
    },
  });
  console.log("Subscribing..");
  pubnub.subscribe({
    channels: ["hello_world"],
  });
}
