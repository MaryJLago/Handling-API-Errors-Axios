// src/setupTests.js
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// Polyfill for Node environment
import { TextEncoder, TextDecoder } from "util";
if (typeof global.TextEncoder === "undefined") global.TextEncoder = TextEncoder;
if (typeof global.TextDecoder === "undefined") global.TextDecoder = TextDecoder;

// Start MSW before all tests
beforeAll(() => server.listen());
// Reset handlers after each test
afterEach(() => server.resetHandlers());
// Clean up after all tests
afterAll(() => server.close());
