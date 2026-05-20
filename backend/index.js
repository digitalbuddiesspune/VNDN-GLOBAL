import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./src/config/db.js";
import homePageBannerRoutes from "./src/routes/homePageBanner.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOrigins = process.env.CORS_ORIGINS?.split(",").map((origin) =>
  origin.trim()
);

app.use(
  cors({
    origin: corsOrigins?.length ? corsOrigins : true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req, res) => {
  res.json({ success: true, message: "VNDN API is running" });
});

app.use("/api/v1", homePageBannerRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});



async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
