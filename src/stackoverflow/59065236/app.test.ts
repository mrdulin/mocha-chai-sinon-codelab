import { expect } from "chai";
import request from "supertest";
import app from "./app";

describe("Workspace", () => {
  it("should return 200 if workspace created sucessfully", async () => {
    const payload = {
      workspace_name: "testing workspace",
      email: "abc@gmail.com",
      mobile: "9721867247",
      name: "abc",
    };

    const res = await request(app)
      .post("/api/v1/workspace")
      .send(payload);
    expect(res.status).to.be.eq(200);
  });
});
