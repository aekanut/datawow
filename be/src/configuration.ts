export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
    username: process.env.MONGO_USERNAME || 'root',
    password: process.env.MONGO_PASSWORD || 'password',
    db: process.env.MONGO_DB || 'datawow',
  },
});
