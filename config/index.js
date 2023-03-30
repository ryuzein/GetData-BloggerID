var config = {
  env: process.env.NODE_ENV || "development",
  apiUrl: process.env.API_URL || "https://www.blogger.com/feeds",
  //your id blogger here
  blogId: process.env.BLOG_ID || "7534802604121886218"
};

module.exports = config;
