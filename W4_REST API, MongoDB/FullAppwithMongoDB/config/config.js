const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || "mongodb+srv://mpolish3:!582Otterby@comp229.x3pkj.mongodb.net/COMP229?retryWrites=true&w=majority&appName=COMP229"
};
export default config;
