const session = require("express-session");
const express = require("express");
const logger = require("morgan");
const app = express();
const path = require("path");
const Server = require("http").Server;
const exphbs = require("express-handlebars");
const routes = require("./controller");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const server = Server(app);
const io = require("socket.io")(server);
const { User } = require("./models");

// const sequelize = require('./config/connection');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 7500;

//Middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sess = session({
  secret: "cats",
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
});

io.use(function (socket, next) {
  sess(socket.request, socket.request.res || {}, next);
});

app.use(sess);

app.get("/js/socket.io", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./node_modules/socket.io/client-dist/socket.io.js")
  );
});

app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

io.on("connect", (socket) => {
  const userId = socket.request.session.userId;

  socket.on("message", async (data) => {
    const user = await User.findByPk(userId, {
      attributes: ["name"],
    });

    io.emit("message", {
      user,
      text: data,
    });
  });
});

sequelize.sync().then(function () {
  server.listen(PORT, () => console.log("App listening on port " + PORT));
});
