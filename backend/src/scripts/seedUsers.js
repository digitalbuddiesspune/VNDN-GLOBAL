require("dotenv").config();
const mongoose = require("mongoose");
const { User } = require("../models/User");

const SEED_USERS = [
  {
    name: "VNDN Admin",
    email: "admin@vndn.global",
    password: "admin123",
    role: "admin",
  },
  {
    name: "VNDN Agent",
    email: "agent@vndn.global",
    password: "agent123",
    role: "agent",
  },
  {
    name: "Content Manager",
    email: "contentmanager@vndn.global",
    password: "contentmanager123",
    role: "content_manager",
  },
  {
    name: "VNDN Investor",
    email: "investor@vndn.global",
    password: "investor123",
    role: "investor",
  },
];

const seedUsers = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  for (const account of SEED_USERS) {
    const email = account.email.toLowerCase();
    const existing = await User.findOne({ email }).select("+password");

    if (existing) {
      existing.name = account.name;
      existing.password = account.password;
      existing.role = account.role;
      existing.isActive = true;
      await existing.save();
      console.log(`Updated: ${email} (${account.role})`);
      continue;
    }

    await User.create({
      name: account.name,
      email,
      password: account.password,
      role: account.role,
    });
    console.log(`Created: ${email} (${account.role})`);
  }

  console.log("\nSeed complete. Login credentials:");
  console.log("─".repeat(50));
  for (const account of SEED_USERS) {
    console.log(
      `${account.role.padEnd(16)} ${account.email.padEnd(28)} ${account.password}`
    );
  }

  await mongoose.disconnect();
  process.exit(0);
};

seedUsers().catch((error) => {
  console.error(error);
  process.exit(1);
});
