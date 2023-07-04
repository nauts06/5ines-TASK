/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env:{
    //  DB_URL : "mongodb+srv://nauts06:b1aIKHwf6ZNqHMlm@cluster0.lhojnox.mongodb.net/5inesTaskData",  
     DB_URL : "mongodb+srv://nauts06:b1aIKHwf6ZNqHMlm@cluster0.lhojnox.mongodb.net/5inesTaskData" ,  
    NEXTAUTH_SECRET : "5inesTaskData"
  }
};

module.exports = nextConfig;
