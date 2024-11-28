import { describe, it, expect, test } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("Test Post rout for /sum", () => {
  it("Should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(3);
  });

  it('Should return the sum of two negative numbers', async () => {
        const res = await request(app).post("/sum").send({
            a: -1,
            b: -5
        })

        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(-6);
  } )

  it('Should the sum to be 0', async () => {
        const res = await request(app).post("/sum").send({
            a: 3,
            b: -3
        })

        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(0);
  })
});
