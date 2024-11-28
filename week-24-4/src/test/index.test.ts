import { describe, expect, it, test, vi } from "vitest";
import request from "supertest";
import { app } from "../index";

// Mocking Db calls
vi.mock('../db', () => ({
  prismaClient:{sum:{create:vi.fn()}}
}))


describe("POST/sum", () => {
  it("Should return sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("Should return 411 if no inputs are provided", async () => {
    const res = await request(app).post("/sum").send({});

    expect(res.statusCode).toBe(411);
    expect(res.body.answer).toBe(undefined);
  });
});


describe("GET/sum", () => {
  it("should return sum of two numbers", async () => {
    const res = await request(app).get("/sum").set({
      a: "1",
      b: "2"
    })

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3)
  })

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app)
      .get("/sum").send();
    expect(res.statusCode).toBe(411);
  });
} )
