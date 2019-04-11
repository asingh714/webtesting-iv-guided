const request = require("supertest");

const server = require("./server.js");

// testing endpoints
// returns correct http status code

describe("server.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("Should return 200 OK", () => {
      // NEED RETURN because its async
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        })
        .catch();
    });

    it("should work", () => {
      // NEED RETURN because its async
      return request(server)
        .get("/")
        .expect(200);
    });

    // second and his preferred way of doing it.
    it("should return 200 OK using the squad", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return JSON", () => {
      // NEED RETURN because its async
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it('should return { api: "up"}', () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "up" });
        });
    });

    it('should return { api: "up"}', async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});

/* 
We can test for: 
  - http status code 
  - format of the data (JSON)
  - shape of the response body 
*/
