export default {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || 2025,
  payments: {},
  db: {
    uri: process.env.DB_URI || "mongodb://localhost:27017/express-typescript",
  },
  tokens: { jwtSecret: process.env.JWT_SECRET || "some secret" },
}
