import PubSub from "pubsub-js";
import sinon from "sinon";
import { assert } from "chai";

it("test should call all subscribers when exceptions", () => {
  var myAPI = {
    method: function(msg, data) {
      console.log(msg, data);
    }
  };

  var spy = sinon.spy();
  var mock = sinon.mock(myAPI);
  mock
    .expects("method")
    .once()
    .withArgs("message", undefined);

  PubSub.subscribe("message", myAPI.method);
  PubSub.subscribe("message", spy);
  PubSub.publishSync("message", undefined);

  mock.verify();
  assert(spy.calledOnce);
});
