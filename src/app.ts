import express from "express";
import config from "config";
import connect from "./db/connect";
import routes from "./routes";
import cors from "cors";
//import { deserializeUser } from "./middleware";

//const port = config.get("port") as number;
//const host = config.get("host") as string;
const app = express();
const port = Number(process.env.PORT) || config.get("port") as number;
const host = "0.0.0.0" || config.get("host") as string;


//app.use(deserializeUser);

// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);

  connect();

  routes(app);
});