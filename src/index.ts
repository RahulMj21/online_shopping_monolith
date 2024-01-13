import app from "@/app";
import config from "@/config";
import { ConnectDB } from "@/database";

const init = () => {
  ConnectDB();

  app
    .listen(config.PORT, () => {
      console.log(`server is running on PORT: ${config.PORT}`);
    })
    .on("error", () => {
      console.log("Failed to start server");
      process.exit();
    });
};

init();
