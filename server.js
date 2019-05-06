const next = require("next");
const session = require("express-session");
const express = require("express");
const fs = require("fs");
const secret = require("/root/config.json");

const AuthController = require("./api/auth/AuthController");
const authController = new AuthController();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.NODE_ENV === "dev" ? 8080 : 3000;

app.prepare().then(() => {
  const expressApp = express();
  const server = require("https").createServer(
    {
      key: fs.readFileSync("/etc/ssl/privateblog.key"),
      cert: fs.readFileSync("/etc/ssl/privateblog.crt")
    },
    expressApp
  );

  expressApp.set("trust proxy", true);

  expressApp.use(
    session({
      store: new (require("connect-pg-simple")(session))({
        conObject: {
          user: "dsavkin",
          password: "123qwe",
          host: "localhost",
          port: "5432",
          database: "blog"
        }
      }),
      resave: false,
      saveUninitialized: true,
      secret: secret.secret,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: true
      },
      name: "sessionId",
      secure: true
    })
  );

  expressApp.get("/auth/fb", authController.authFb);
  expressApp.get("/auth/vk", authController.authVk);
  expressApp.get("/user/logout", authController.logout);

  expressApp.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${PORT}`);
  });
});
