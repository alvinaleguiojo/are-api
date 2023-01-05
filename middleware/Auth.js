require("dotenv").config();

const Auth = async (req, res, next) => {
  const apiKey = await req.headers["access-token"];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Please contact our support at support@api-are.com",
    });
  }
  next();
};

module.exports = Auth;
