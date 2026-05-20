import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import { HomePageBanner } from "../models/HomePageBanner.js";

dotenv.config();

const defaultBanner = {
  eyebrow: "Exclusive Luxury Real Estate",
  headlinePrefix: "Where Prestige",
  headlineSuffix: "Meets Property",
  description:
    "Curated residences across Dubai and Ahmedabad — buy, rent, and invest with a single trusted partner.",
  backgroundImage:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
  isActive: true,
};

async function seed() {
  await connectDB();

  const existing = await HomePageBanner.findOne({ isActive: true });

  if (existing) {
    console.log("Active homepage banner already exists, skipping seed.");
    process.exit(0);
  }

  await HomePageBanner.create(defaultBanner);
  console.log("Homepage banner seeded successfully.");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});
