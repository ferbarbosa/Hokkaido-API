import mongoose from "mongoose";
import config from "config";


function connect() {
  //const dbUri = config.get("dbUri") as string;

  const dbUri = "mongodb+srv://hokkaido_api:1008japa@cluster0.xnsn0m4.mongodb.net/?retryWrites=true&w=majority"

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