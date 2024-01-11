import dotenv from "dotenv";

// if (process.env.NODE_ENV === "prod") {
//   const configFile = `./.env.${process.env.NODE_ENV}`;
//   dotenv.config({ path: configFile });
// } else {
//   dotenv.config();
// }

dotenv.config();

const config = {
  PORT: process.env.PORT || 8000,
};

export default config;
