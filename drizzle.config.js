/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mockmate_owner:t9NibOgrSlm3@ep-weathered-sun-a59b2w3d.us-east-2.aws.neon.tech/mockmate?sslmode=require',
    }
  };
  