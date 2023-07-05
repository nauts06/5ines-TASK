/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env:{
    //  DB_URL : "mongodb+srv://nauts06:b1aIKHwf6ZNqHMlm@cluster0.lhojnox.mongodb.net/5inesTaskData",  
     DB_URL : "mongodb+srv://nauts06:b1aIKHwf6ZNqHMlm@cluster0.lhojnox.mongodb.net/5inesTaskData" ,  
    NEXTAUTH_SECRET : "5inesTaskData",

    GOOGLE_CLIENT_ID:
      "103703332244-n6ba9vqod1s9753hv5eu0fibom04gjk8.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

  }
};

module.exports = nextConfig;
