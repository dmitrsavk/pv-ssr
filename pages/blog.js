import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Router from "next/router";

import BlogContent from "../components/Blog/Blog";

import { getUser } from "../store/user/actions";

const userApiUrl = "https://privateblog.ru/api/user";

const Meta = ({ user }) => (
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
    <title>{user.name} - личный дневник</title>
  </Head>
);

// const getUserLegacy = async (isServer, sessionID) => {
//   let user = isServer
//     ? await fetch(userApiUrl, { headers: { sid: sessionID } })
//     : await fetch(userApiUrl, { credentials: "include" });

//   return await user.json();
// };

const redirectToLanding = response => {
  if (response) {
    response.writeHead(302, {
      Location: "/"
    });
    response.end();
  } else {
    Router.push("/");
  }
};

class Blog extends React.Component {
  static async getInitialProps({ ctx: { req, res, store, isServer } }) {
    // const user = await getUserLegacy(res, req && req.sessionID);
    // console.log(store.getState())
    // if (!user.name) {
    //   redirectToLanding(res);
    // }
    const { user } = store.getState();

    if (user.status === "initial") {
      store.dispatch(getUser({ isServer, sessionId: req && req.sessionID }));
    }

    return { user };
  }

  render() {
    return (
      <div>
        <Meta user={this.props.user} />
        <BlogContent user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
