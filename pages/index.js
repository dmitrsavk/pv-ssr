import React from "react";
import Head from "next/head";
import Router from "next/router";

import fetch from "isomorphic-unfetch";

import Landing from "../components/Landing/Landing";

const userApiUrl = "https://privateblog.ru/api/user";

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#3498db" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <title>Private Blog - Личный дневник</title>
  </Head>
);

const getUser = async (isServer, sessionID) => {
  let user = isServer
    ? await fetch(userApiUrl, { headers: { sid: sessionID } })
    : await fetch(userApiUrl, { credentials: "include" });

  return await user.json();
};

const redirectToBlog = response => {
  if (response) {
    response.writeHead(302, {
      Location: "/blog"
    });
    response.end();
  } else {
    Router.push("/blog");
  }
};

export default class extends React.Component {
  static async getInitialProps({ ctx: { req, res } }) {
    const user = await getUser(res, req && req.sessionID);

    if (user.name) {
      redirectToBlog(res);
    }

    return { user };
  }

  render() {
    return (
      <div>
        <Meta />
        <Landing />
      </div>
    );
  }
}
