const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Admin:qweqwe@cluster0.lkce23l.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1); // закрывает запущеные процесы
  });
