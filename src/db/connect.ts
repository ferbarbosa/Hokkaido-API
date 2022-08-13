import mongoose from "mongoose";
import config from "config";


function connect() {
  //const dbUri = config.get("dbUri") as string;

  const dbUri = process.env.DB_URI || "mongodb://localhost:27017/hokkaido-api";

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("db error", error);
      process.exit(1);
    });
}

export default connect;