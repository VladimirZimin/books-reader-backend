const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const booksRouter = require("./routes/api/books");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());

// для POST запроса
app.use(express.json());

// все запросы которые начинаются с "/api/books" смотреть в booksRouter
app.use("/api/books", booksRouter);
app.use("/api/contacts", contactsRouter);

// ошибка если адреса нету
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
    data: "Not found",
  });
});

app.use((err, req, res, next) => {
  // res.status(500).json({ message: err.message });
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    status: "fail",
    code: 500,
    message: message,
    data: "Internal Server Error",
  });
});

module.exports = app;
