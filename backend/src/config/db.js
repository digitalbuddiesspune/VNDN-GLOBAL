import mongoose from "mongoose";

const PLACEHOLDER_PATTERN = /<[^>]+>/;

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is missing. Copy backend/.env.example to .env and set your connection string."
    );
  }

  if (PLACEHOLDER_PATTERN.test(uri)) {
    throw new Error(
      "MONGODB_URI still contains placeholders (<user>, <password>, <cluster>). " +
        "Replace them with your real MongoDB Atlas credentials from Atlas → Connect → Drivers."
    );
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected");
}
