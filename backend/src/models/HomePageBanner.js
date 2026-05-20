import mongoose from "mongoose";

const homePageBannerSchema = new mongoose.Schema(
  {
    eyebrow: {
      type: String,
      trim: true,
      default: "Exclusive Luxury Real Estate",
    },
    headlinePrefix: {
      type: String,
      trim: true,
      required: [true, "Headline prefix is required"],
    },
    
    headlineSuffix: {
      type: String,
      trim: true,
      required: [true, "Headline suffix is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
    backgroundImage: {
      type: String,
      trim: true,
      required: [true, "Background image URL is required"],
    },
   
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

homePageBannerSchema.index({ isActive: 1, createdAt: -1 });

export const HomePageBanner = mongoose.model(
  "HomePageBanner",
  homePageBannerSchema
);
