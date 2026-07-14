const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).send("Code is required");
    }

    const response = await aiService(code);

    return res.send(response);
  } catch (err) {
    console.error("❌ Gemini Error:", err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};