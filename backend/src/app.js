const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const app = express();

const DEFAULT_DEV_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
  "http://localhost:3004",
];

function getAllowedOrigins() {
  const fromEnv = [
    ...(process.env.CORS_ORIGINS || "").split(","),
    ...(process.env.CORS_ORIGIN || "").split(","),
  ]
    .map((origin) => origin.trim())
    .filter(Boolean);

  const origins =
    process.env.NODE_ENV === "production"
      ? fromEnv
      : [...new Set([...fromEnv, ...DEFAULT_DEV_ORIGINS])];

  return origins.length > 0 ? origins : DEFAULT_DEV_ORIGINS;
}

const allowedOrigins = getAllowedOrigins();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options(/.*/, cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.json({ message: "VNDN Global API" });
});

app.use("/api", routes);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
module.exports.allowedOrigins = allowedOrigins;
