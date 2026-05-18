require("dotenv").config();

const app = require("./app");
const allowedOrigins = app.allowedOrigins;
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log("CORS allowed origins:", allowedOrigins.join(", "));
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
