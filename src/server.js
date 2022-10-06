import express from "express";
import routes from "./routes/routes.js";
import sqliteConnection from "./database/sqlite/sqlite.js";

const app = express();

app.use(express.json());
app.use(routes);

sqliteConnection();

app.listen(3000, () => {
  console.log("Port 3000 running");
});
