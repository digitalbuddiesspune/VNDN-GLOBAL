import { HomePageBanner } from "../models/HomePageBanner.js";

function formatBanner(doc) {
  const banner = doc.toObject ? doc.toObject() : doc;
  return {
    id: banner._id,
    eyebrow: banner.eyebrow,
    headlinePrefix: banner.headlinePrefix,
    headlineSuffix: banner.headlineSuffix,
    description: banner.description,
    backgroundImage: banner.backgroundImage,
    isActive: banner.isActive,
    createdAt: banner.createdAt,
    updatedAt: banner.updatedAt,
  };
}

export async function listHomePageBanners(req, res) {
  try {
    const filter = req.query.all === "true" ? {} : { isActive: true };

    const banners = await HomePageBanner.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      count: banners.length,
      data: banners.map(formatBanner),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch homepage banners",
      error: error.message,
    });
  }
}

export async function getHomePageBanner(req, res) {
  try {
    const banner = await HomePageBanner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Homepage banner not found",
      });
    }

    res.json({
      success: true,
      data: formatBanner(banner),
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid banner id",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to fetch homepage banner",
      error: error.message,
    });
  }
}

export async function createHomePageBanner(req, res) {
  try {
    const { eyebrow, headlinePrefix, headlineSuffix, description, backgroundImage, isActive } =
      req.body;

    const banner = await HomePageBanner.create({
      eyebrow,
      headlinePrefix,
      headlineSuffix,
      description,
      backgroundImage,
      isActive,
    });

    res.status(201).json({
      success: true,
      data: formatBanner(banner),
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to create homepage banner",
      error: error.message,
    });
  }
}

export async function updateHomePageBanner(req, res) {
  try {
    const { eyebrow, headlinePrefix, headlineSuffix, description, backgroundImage, isActive } =
      req.body;

    const banner = await HomePageBanner.findByIdAndUpdate(
      req.params.id,
      { eyebrow, headlinePrefix, headlineSuffix, description, backgroundImage, isActive },
      { new: true, runValidators: true }
    );

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Homepage banner not found",
      });
    }

    res.json({
      success: true,
      data: formatBanner(banner),
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid banner id",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update homepage banner",
      error: error.message,
    });
  }
}

export async function deleteHomePageBanner(req, res) {
  try {
    const banner = await HomePageBanner.findByIdAndDelete(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Homepage banner not found",
      });
    }

    res.json({
      success: true,
      message: "Homepage banner deleted",
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid banner id",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to delete homepage banner",
      error: error.message,
    });
  }
}
