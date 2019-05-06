const fetch = require("isomorphic-unfetch");

const fbId = require("/root/fb.json").id;
const vkId = require("/root/fb.json").vk;
const clientId = 159008188111833;
const redirectUrl = "https://privateblog.ru/auth/fb";
const redirectVk = "https://privateblog.ru/auth/vk";

class AuthController {
  async authFb(req, res) {
    let response = await fetch(
      `https://graph.facebook.com/v2.12/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUrl}&client_secret=${fbId}&code=${
        req.query.code
      }`
    ).then(res => res.json());

    let user = await fetch(
      `https://graph.facebook.com/me?access_token=${response.access_token}`
    ).then(res => res.json());

    if (user && user.id) {
      await fetch("https://privateblog.ru/api/auth/fb", {
        headers: {
          sid: req.sessionID,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(user)
      });
    }

    res.redirect("/blog");
  }

  async authVk(req, res) {
    let response = await fetch(
      `https://oauth.vk.com/access_token?client_id=6481883&client_secret=${vkId}&redirect_uri=${redirectVk}&code=${
        req.query.code
      }`
    ).then(res => res.json());

    const url = `https://api.vk.com/method/users.get?user_ids=${
      response.user_id
    }&access_token=${response.access_token}&v=5.75`;

    let user = await fetch(url).then(res => res.json());

    if (response.user_id) {
      await fetch("https://privateblog.ru/api/auth/vk", {
        headers: {
          sid: req.sessionID,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(user.response[0])
      });
    }

    res.redirect("/blog");
  }

  async logout(req, res) {
    await req.session.destroy();

    res.redirect("/");
  }
}

module.exports = AuthController;
