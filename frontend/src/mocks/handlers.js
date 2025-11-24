// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/api/login", (req, res, ctx) => {
    const { email, password } = req.body;

    if (!email) return res(ctx.status(400), ctx.json({ message: "Email is required" }));
    if (!password) return res(ctx.status(400), ctx.json({ message: "Password is required" }));
    if (email !== "user@example.com" || password !== "secret") {
      return res(ctx.status(401), ctx.json({ message: "Invalid Credentials" }));
    }

    return res(ctx.status(200), ctx.json({ token: "sample-token", user: { email } }));
  }),
];
