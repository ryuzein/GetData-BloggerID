var config = {
  env: process.env.NODE_ENV || "development",
  apiUrl: process.env.API_URL || "https://www.blogger.com/feeds",
  blogId: process.env.BLOG_ID || "5065960566952395406"
};

module.exports = config;